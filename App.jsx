import './App.css';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from "react";
import axios from "axios";
import HomePage from './components/HomePage';
import ProdDetails from './components/ProdDetails';
import ContactPage from './components/ContactPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProdCategories from './components/ProdCategories';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Renderizza le card in maniera casuale
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Chiamata API
  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((response) => {
        const shuffledData = shuffleArray(response.data.products);
        setData(shuffledData);
      })
      .catch((err) => {
        setError(`Errore: ${err.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Caricamento in corso...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Apre la modale dettagli aperto
  const openModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  // Chiude la modale dettagli
  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = '';
  };

  // Gestisce la selezione della categoria
  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  // Filtra i prodotti in base alla categoria selezionata
  const filteredData = selectedCategory ? data.filter(product => product.category === selectedCategory) : data;

  // Estrai le categorie
  const categories = [];
  console.log(categories);
  data.forEach(product => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={
          <div className='bgContainer'>
            <ProdCategories categories={categories} onCategoryChange={handleCategoryChange} />
            <div className='product-grid'>
              {filteredData.map((product) => (
                <HomePage
                  key={product.id}
                  titleProd={product.title}
                  priceProd={product.price}
                  descriptionProd={product.description}
                  thumbnailProd={product.thumbnail}
                  onClick={() => openModal(product)}
                />
              ))}
            </div>
          </div>
        } />
        <Route path="/contact" element={<ContactPage
        />} />
      </Routes>
      {selectedProduct && (
        <ProdDetails
          product={selectedProduct}
          onClick={closeModal}
          reviews={selectedProduct.reviews}
        />
      )}
    </Router>
  );
}

export default App;

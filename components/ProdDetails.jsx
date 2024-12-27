function ProdDetails({ product, onClick }) {
  // Formattazione della data
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Renderizzazione le stelle del rating in base al numero reale del rating nell'API
  const renderStars = (rating) => {
    return (
      <span className="stars">
        {'★'.repeat(rating)}
        <span className="empty-stars">{'☆'.repeat(5 - rating)}</span>
      </span>
    );
  };

  return (
    <>
      <div className="Detailsmodal" onClick={onClick}>
        <div className="Detailsmodal-content" onClick={(e) => e.stopPropagation()}>
          <div className="detailsHeader">
            <span className="detailsLogo">YouShop!</span>
            <button className="closeButton" onClick={onClick}>X</button>
          </div>
          <h1>{product.title}</h1>
          <p className="brand">{product.brand}</p>
          <div className="descriptionDetailsContainer">
            <img
              src={product.thumbnail}
              alt={product.title}
            />
            <div className="textDetail">
              <p className="detailsDescription">{product.description}</p>
              <div className="extraInfo">
                <p><strong>Prezzo: €</strong>{product.price}</p>
                <p><strong>Disponibilità:</strong> {product.stock} {product.availabilityStatus}</p>
                <p><strong>Garanzia:</strong> {product.warrantyInformation}</p>
                <p><strong>Tempi di spedizione:</strong> {product.shippingInformation}</p>
                <p><strong>Policy di restituzione:</strong> {product.returnPolicy}</p>
              </div>
              <div className="buyAndRegisterContainer">
                <button className="buyAndRegister">Registrati e completa l'acquisto</button>
              </div>
            </div>
          </div>
          <div className="commentHeader">
            <h2>Commenti degli utenti</h2>
          </div>
          <div className="commentSection">
            {product.reviews.map((review) => (
              <div className="comments" key={review.id}>
                <h3>{review.title}</h3>
                <p>L' utente <strong className="userName">{review.reviewerName}</strong> ha detto:</p>
                <p className="ratingStars">Rating: {renderStars(review.rating)}</p>
                <p>{review.comment}</p>
                <p>{formatDate(review.date)}</p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
}

export default ProdDetails;

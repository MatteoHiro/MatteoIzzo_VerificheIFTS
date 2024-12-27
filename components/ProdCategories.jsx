function ProdCategories({ categories, names, onCategoryChange, onNameChange }) {

    // Prima lettera della categoria sempre maiuscols
    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }
    return (
        <>
            <div className="category-container">
                <div className="category-filter">
                    <h3>Che prodotto stai cercando?</h3>
                    <select className="category-select" onChange={(e) => onCategoryChange(e.target.value)}>
                        <option value="">Tutte le categorie</option>
                        {categories.map((category, index) => (
                            <option className="category-option" key={index} value={category}>
                                {capitalizeFirstLetter(category)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
};

export default ProdCategories;




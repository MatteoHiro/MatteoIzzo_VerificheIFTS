function HomePage({ titleProd, priceProd, descriptionProd, thumbnailProd, onClick }) {
    return (
        <>
            <div className="product card" onClick={onClick} >
                <img className='card-img-top' src={thumbnailProd} alt={titleProd} />
                <div className='card-body'>
                    <h3 className='card-title'>{titleProd}</h3>
                    <div className="descriptionContainer">
                        <p className='card-text'>{descriptionProd}</p>
                    </div>
                    <p className='card-price'><strong>Prezzo: </strong>{priceProd}$</p>
                </div>
            </div>
        </>
    )
}

export default HomePage;

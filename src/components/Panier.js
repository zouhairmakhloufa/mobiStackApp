const Panier = ({ panier }) => {
  console.log("777777777",panier)
  // Vérification pour éviter l'erreur
  if (!panier || panier.length === 0) {
    return (
      <div className="container">
        <h1> Panier</h1>
        <p>Votre panier est vide.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Mon Panier</h1>
      {panier.map((item, k) => (
        <div className="pb-3" key={k} style={{width:"50%"}}>
          <div className="blog-item">
            <div className="position-relative">
              <img className="img-fluid w-100" src={item?.image} alt="" />
              <div className="blog-date">
                <h6 className="font-weight-bold mb-n1">01</h6>
                <small className="text-white text-uppercase">Jan</small>
              </div>
            </div>
          </div>
          <div className="bg-white mb-3" style={{ padding: 30 }}>
            <div className="d-flex mb-3">
              <a className="text-primary text-uppercase text-decoration-none">
                {item?.name}
              </a>
              <span className="text-primary px-2">|</span>
              <a className="text-primary text-uppercase text-decoration-none">
                {item?.address}
              </a>
            </div>
            <h2 className="mb-3">Description Lieu</h2>
            <p>{item?.description}</p>
          </div>
          <div>
            <button className="btn btn-success">Passer Le Commande</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Panier;



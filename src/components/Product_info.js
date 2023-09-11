import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../Context/CartProvider";
import Panier from "./Panier";

const Product_info = ({ user,product }) => {
  const params = useParams();
  const [lieu, setLieu] = useState({});
  const [comment, setComment] = useState("");
  const [Allcomments, setAllcomments] = useState([]);
  const [panier, setPanier] = useState([]);
  const [nombreProduitsPanier, setNombreProduitsPanier] = useState(0);

  const [show5, setShow5] = useState(false);


  useEffect(() => {
    if (params.id) {
      getAllLieuById();
      getAllCommentById()
    }
  }, []);
  const getAllLieuById = () => {
    axios.get("http://localhost:5000/lieu/getById/" + params.id).then((res) => {
      let lieu = res.data.lieu;
      setLieu(lieu);
    });
  };

  const getAllCommentById = () => {
    axios.get("http://localhost:5000/comment/get_by_lieu/" + params.id).then((res) => {
      let comment = res.data.comments;
      setAllcomments(comment);
    });
  };

  const SubmitComment = () => {
    let data = {
      id_lieu: params.id,
      id_user: user._id,
      comment: comment,
    };
    axios.post("http://localhost:5000/comment/post",data ).then((res) => {
      getAllCommentById()
    });
  };
  // function ajouterAuPanier(lieu) {
  //   console.log("fffffff",lieu)
  //   // Copiez le panier existant et ajoutez l'identifiant du nouveau produit
  //   const nouveauPanier = [...panier, lieu.id]; // Stockez l'identifiant du produit
  //   console.log("nnnnn",nouveauPanier)
  //   setPanier(nouveauPanier);
  //   console.log("bbbbbbbbbb",panier)

  
  //   // Mettez à jour le nombre de produits dans le panier
  //   setNombreProduitsPanier(nouveauPanier.length);
  //   console.log("ppppp",nombreProduitsPanier)
  
  //   // Enregistrez le panier dans le localStorage
  //   localStorage.setItem('panier', JSON.stringify(nouveauPanier));
  // }
  function ajouterAuPanier(lieu) {
    console.log("fffffff", lieu);
    
    // Copiez le panier existant et ajoutez l'identifiant du nouveau produit
    const nouveauPanier = [...panier, lieu.id]; // Stockez l'identifiant du produit
    console.log("nnnnn", nouveauPanier);
    
    // Mettez à jour le panier avec la nouvelle valeur
    setPanier(nouveauPanier);
  
    // Mettez à jour le nombre de produits dans le panier
    setNombreProduitsPanier(nouveauPanier.length);
  
    // Enregistrez le panier dans le localStorage
    localStorage.setItem('panier', JSON.stringify(nouveauPanier));
  }
  // Utilisez useEffect pour observer la mise à jour du panier
useEffect(() => {
  console.log("bbbbbbbbbb", panier);
}, [panier]);
  
  // const { addToCart } = useCart(); // Use the useCart hook

  // const handleAddToCart = () => {
  //   addToCart(product);
  // };

  useEffect(() => {
    if (params.id) {
      getAllLieuById();
      getAllCommentById();
  
      // Récupérez le panier depuis le localStorage
      const storedPanier = JSON.parse(localStorage.getItem('panier'));
      if (storedPanier) {
        setPanier(storedPanier);
        setNombreProduitsPanier(storedPanier.length);
      }
    }
  }, []);
  
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            {/* Blog Detail Start */}
            <div className="pb-3">
              <div className="blog-item">
                <div className="position-relative">
                  <img className="img-fluid w-100" src={lieu.image} />
                  <div className="blog-date">
                    <h6 className="font-weight-bold mb-n1">01</h6>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
              </div>
              <div className="bg-white mb-3" style={{ padding: 30 }}>
                <div className="d-flex mb-3">
                  <a className="text-primary text-uppercase text-decoration-none">
                    {lieu.name}
                  </a>
                  <span className="text-primary px-2">|</span>
                  <a className="text-primary text-uppercase text-decoration-none">
                    {lieu.address}
                  </a>
                </div>
                <h2 className="mb-3">Description Lieu</h2>
                <p>{lieu.description}</p>
              </div>
            </div>
            <button 
             onClick={() => ajouterAuPanier(lieu)} 
            className="btn btn-primary">
              Ajouter au panier
            </button>

         { show5 ?(
          <>
          <Panier panier={panier} lieu={lieu}/></>
         ) :( <div className="nav-item">
        <Link to="/panier" className="nav-link">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="badge badge-pill badge-primary">{nombreProduitsPanier}</span>
        </Link>
      </div>)}
            {Allcomments.map((value,key)=>(
              <div key={key} className="bg-white" style={{ padding: 30, marginBottom: 30 }}>
              <h4 className="text-uppercase mb-4" style={{ letterSpacing: 5 }}>
                {key +1} Comments
              </h4>
              <div className="media mb-4">
                <img
                  src="/img/217609944_315471683606500_9013626131480474027_n.jpg"
                  alt="Image"
                  className="img-fluid mr-3 mt-1"
                  style={{ width: 45 }}
                />
                <div className="media-body">
                  <h6>
                    <a href>{value.id_user.email}</a>{" "}
                    <small>
                      <i>{value.createdAt}</i>
                    </small>
                  </h6>
                  <p>
              {value.comment}
                  </p>
                </div>
              </div>
            
            </div>
            )

            )}
           
            
            {/* Comment List End */}
            {/* Comment Form Start */}
            <div className="bg-white mb-3" style={{ padding: 30 }}>
              <h4 className="text-uppercase mb-4" style={{ letterSpacing: 5 }}>
                Leave a comment
              </h4>
              <form>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    onChange={(e) => setComment(e.target.value)}
                    id="message"
                    cols={30}
                    rows={5}
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group mb-0">
                  <input
                    onClick={SubmitComment}
                    type="button"
                    defaultValue="Leave a comment"
                    className="btn btn-primary font-weight-semi-bold py-2 px-3"
                  />
                </div>
              </form>
            </div>
            {/* Comment Form End */}
          </div>
        </div>
      </div>
    </div>
  );
};

Product_info.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.userData,
  };
};
export default connect(mapStateToProps)(Product_info);

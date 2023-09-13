import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function Display_Product() {
  const navigate = useNavigate();
  const [lieu, setLieu] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
const productsPerPage = 6;
const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
const currentProducts = lieu.slice(indexOfFirstProduct, indexOfLastProduct);
const totalProducts = lieu.length;
const totalPages = Math.ceil(totalProducts / productsPerPage);
  useEffect(() => {
    getAllLieu();
  }, []);
  






  const getAllLieu = () => {
    axios.get("http://localhost:5000/lieu/get").then((res) => {
      console.log("res.data.lieu", res.data.lieu);
      setLieu(res.data.lieu);
    });
  };

  const ClickCard=()=>{

  }

  const nextPage = () => {
    if (currentPage < Math.ceil(lieu.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="row pb-3" style={{gap:"70px"}}>
              {currentProducts.map((lieu, key) => (
                // <div className="col-md-4 mb-4 pb-2" key={key}  onClick={()=>navigate("/product_info/"+lieu._id)}>
                //   <div className="blog-item">
                //     <div className="position-relative">
                //       <img className="img-fluid w-100" src={lieu.image} alt />
                //       <div className="blog-date">
                //         <h6 className="font-weight-bold mb-n1">Tuni</h6>
                //         <small className="text-white text-uppercase">sia</small>
                //       </div>
                //     </div>
                //     <div className="bg-white p-4">
                //       <div className="d-flex mb-2">
                //         <Link  to={"/product_info/"+lieu._id}className="text-primary text-uppercase text-decoration-none">
                //           {lieu.name}
                //         </Link>
                //         <span className="text-primary px-2">|</span>
                //         <Link className="text-primary text-uppercase text-decoration-none">
                //           {lieu.address}
                //         </Link>
                //       </div>
                //       <a to={"/product_info/"+lieu._id} className="h5 m-0 text-decoration-none">
                //         {lieu.description}
                //       </a>
                //     </div>
                //   </div>
                // </div>
                <div className="card" style={{width: '20rem', flexWrap:"wrap"}} onClick={()=>navigate("/product_info/"+lieu._id)}>
                <img className="card-img-top" src={lieu.image} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Tuni</h5>
                  <p className="card-text">sia.</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  <div className="bg-white p-4">
                      <div className="d-flex mb-2">
                        <Link  to={"/product_info/"+lieu._id}className="text-primary text-uppercase text-decoration-none">
                          {lieu.name}
                        </Link>
                        <span className="text-primary px-2">|</span>
                        <Link className="text-primary text-uppercase text-decoration-none">
                          {lieu.address}
                        </Link>
                      </div>
                      <a to={"/product_info/"+lieu._id} className="h5 m-0 text-decoration-none">
                        {lieu.description}
                      </a>
                    </div>
                </div>
              </div>
              ))}
            </div>
          </div>
    
        </div>
       
        <div className="text-center">
    <ul className="pagination">
      <li className="page-item">
        <button className="page-link" onClick={prevPage} disabled={currentPage === 1}>Précédent</button>
      </li>
      <li className="page-item">
        <span className="page-link">
          Page {currentPage} de {totalPages} ({currentProducts.length} produits)
        </span>
      </li>
      <li className="page-item">
        <button className="page-link" onClick={nextPage} disabled={currentPage === Math.ceil(lieu.length / productsPerPage)}>Suivant</button>
      </li>
    </ul>
  </div>
      </div>
    </div>
  );
}

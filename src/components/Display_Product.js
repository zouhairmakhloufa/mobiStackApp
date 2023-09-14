import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function Display_Product() {
  const navigate = useNavigate();
  const [lieu, setLieu] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };
  

  

  
  
const productsPerPage = 6;
const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
const currentProducts = lieu.slice(indexOfFirstProduct, indexOfLastProduct);
const totalProducts = lieu.length;
const totalPages = Math.ceil(totalProducts / productsPerPage);
  useEffect(() => {
    getAllLieu();
  }, []);
  

  const renderPageButtons = () => {
    const buttons = [];
  
    for (let page = 1; page <= totalPages; page++) {
      buttons.push(
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`page-button ${currentPage === page ? 'active' : ''}`}
        >
           {page}
        </button>
      );
    }
  
    return buttons;
  };




  const getAllLieu = () => {
    axios.get("http://localhost:5000/lieu/get").then((res) => {
      console.log("res.data.lieu", res.data.lieu);
      const filteredLieu = res.data.lieu.filter((lieu) =>
      lieu.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
      // setLieu(res.data.lieu);
      setLieu(filteredLieu);
    });
  };


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
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredProducts = lieu.filter((lieu) =>
    lieu.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
        <div className="col-lg-12">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{border:"1px solid lightgray", marginBottom:"2.8rem",height:"30px",borderRadius:"3px"}}
          />
        </div>
          <div className="col-lg-12">
            <div className="row pb-3" style={{gap:"70px"}}>
              {filteredProducts.map((lieu, key) => (
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
  <div className="pagination">
    <button
      className="page-button"
      onClick={prevPage}
      disabled={currentPage === 1}
      style={{borderRadius:'3px'}}
    >
      Précédent
    </button>
    {renderPageButtons()}
    <button
      className="page-button"
      onClick={nextPage}
      disabled={currentPage === totalPages}
      style={{borderRadius:'3px'}}
    >
      Suivant
    </button>
  </div>
</div>

      </div>
    </div>
  );
}

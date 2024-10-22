import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Display_Product() {
  const navigate = useNavigate();
  const [qest, setQest] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const productsPerPage = 6;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = qest.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalProducts = qest.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  useEffect(() => {
    getAllQest();
  }, [searchTerm]);

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

  const getAllQest = () => {
    axios.get("http://localhost:5000/qest/get").then((res) => {
      const filteredQest = res.data.qest.filter((qest) =>
        qest.name && qest.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setQest(filteredQest);
    });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
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

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            <Link to="/Add_Qestion" className="btn btn-primary py-md-6 px-md-1 mt-1"> Add Question </Link>

            <div>
              <input
                type="text"
                placeholder="Search Question ..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ border: "1px solid lightgray", marginBottom: "1rem", height: "40px", width: "300px", borderRadius: "6px" }}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row pb-3" style={{ gap: "70px" }}>
              {currentProducts.map((qest, key) => (
                <div key={key} className="card" style={{ width: '800px', flexWrap: "wrap" }} onClick={() => navigate("/Qestion_info/" + qest._id)}>
                  <img className="img-fluidd w-100" src={qest.image} alt="Card image cap" />
                  <div className="card-body">
                    <div className="bg-white p-4">
                      <div className="d-flex mb-2">
                        <Link to={"/Qestion_info/" + qest._id} className="text-primary text-uppercase text-decoration-none">
                          {qest.name}
                        </Link>
                        <span className="text-primary px-2">|</span>
                        <span className="text-primary text-uppercase text-decoration-none">
                          {qest.address}
                        </span>
                      </div>
                      <Link to={"/Qestion_info/" + qest._id} className="h5 m-0 text-decoration-none">
                        {qest.description}
                      </Link>
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
              style={{ borderRadius: '3px' }}
            >
              Previous
            </button>
            {renderPageButtons()}
            <button className="page-button" onClick={nextPage} disabled={currentPage === totalPages} style={{ borderRadius: '3px' }}>
              Next
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

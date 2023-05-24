import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Display_lieu() {
  const navigate = useNavigate();
  const [lieu, setLieu] = useState([]);
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
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="row pb-3">
              {lieu.map((lieu, key) => (
                <div className="col-md-4 mb-4 pb-2" key={key}  onClick={()=>navigate("/lieu_info/"+lieu._id)}>
                  <div className="blog-item">
                    <div className="position-relative">
                      <img className="img-fluid w-100" src={lieu.image} alt />
                      <div className="blog-date">
                        <h6 className="font-weight-bold mb-n1">Tuni</h6>
                        <small className="text-white text-uppercase">sia</small>
                      </div>
                    </div>
                    <div className="bg-white p-4">
                      <div className="d-flex mb-2">
                        <Link  to={"/lieu_info/"+lieu._id}className="text-primary text-uppercase text-decoration-none">
                          {lieu.name}
                        </Link>
                        <span className="text-primary px-2">|</span>
                        <Link className="text-primary text-uppercase text-decoration-none">
                          {lieu.address}
                        </Link>
                      </div>
                      <a to={"/lieu_info/"+lieu._id} className="h5 m-0 text-decoration-none">
                        {lieu.description}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

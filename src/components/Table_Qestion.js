import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Table_Qestion() {

  const navigate = useNavigate();
  const [qest, setQest] = useState([]);
  useEffect(() => {
    getAllQest();
  }, []);

  const getAllQest = () => {
    axios.get("http://localhost:5000/qest/get").then((res) => {
      console.log("res.data.qest", res.data.qest);
      setQest(res.data.qest);
    });
  };
  const deleteQest = (id) => {
    axios.delete("http://localhost:5000/qest/delete/" + id).then((res) => {
      console.log("res.data.qest", res.data.message);
      getAllQest();
    });
  };
 
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center mb-3 pb-3">
          <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}></h6>
          <h1>Table Qestion</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <table class="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Qestion details</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {qest.map((data, key) => (
                  <tr key={key}>
                    <td>{data.name}</td>
                    <td>{data.address}</td>
                    <td>{data.description}</td>
                    <td>
                      <button className="btn btn-primary" onClick={() => navigate("/EditQestion/" + data._id)}>
                        Edit
                      </button>
                      <button className="btn btn-danger" onClick={() => deleteQest(data._id)}
                        style={{ marginLeft: "10px" }} >
                        Delete
                      </button>

                    </td>
                    <td> <Link to="/Add_Qestion" className="nav-item nav-link">
                      <button className="btn btn-info" style={{ marginTop: "-7px", marginLeft: "-210px" }} >
                        Add Qestion
                      </button></Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  );
}

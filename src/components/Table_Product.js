import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Table_Product() {
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
  const deleteLieu = (id) => {
    axios.delete("http://localhost:5000/lieu/delete/" + id).then((res) => {
      console.log("res.data.lieu", res.data.message);
      getAllLieu();
    });
  };

  return (
    <div className="container-fluid py-5">
  <div className="container py-5">
    <div className="text-center mb-3 pb-3">
      <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}></h6>
      <h1>Table product</h1>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-12">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {lieu.map((data, key) => (
            <tr key={key}>
              <td>{data.name}</td>
              <td>{data.address}</td>
              <td>{data.description}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/EditLieu/" + data._id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteLieu(data._id)}
                >
                  Delete
                </button>
              </td>
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

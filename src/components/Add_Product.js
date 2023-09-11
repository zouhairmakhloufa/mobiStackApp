import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Add_Product() {
  const params = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [displayImage, setDisplayImage] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (params.id) {
      setTitle("Modifier");
      getAllLieuById();
    } else {
      setTitle("Ajouter");
    }
  }, []);

  const getAllLieuById = () => {
    axios.get("http://localhost:5000/lieu/getById/" + params.id).then((res) => {
      console.log("res.data.lieu", res.data.lieu);
      let lieu = res.data.lieu;
      setName(lieu.name);
      setAddress(lieu.address);
      setDescription(lieu.description);
      setDisplayImage(lieu.image);
      setImages(lieu.image);
    });
  };

  const onChangeImage = (event) => {
    if (event?.target?.files.length !== 0) {
      const objUrl = URL.createObjectURL(event?.target?.files[0]);
      setDisplayImage(objUrl);
      setImages(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (params.id) {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("address", address);
      formData.append("description", description);
      formData.append("image", images);

      axios
        .put("http://localhost:5000/lieu/edit/" + params.id, formData)
        .then((response) => {
          console.log(response.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("address", address);
      formData.append("description", description);
      formData.append("image", images);

      axios
        .post("http://localhost:5000/lieu/add", formData)
        .then((response) => {
          console.log(response.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    setTimeout(() => {
      navigate("/product");
    }, 1000);
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center mb-3 pb-3">
          <h6
            className="text-primary text-uppercase"
            style={{ letterSpacing: 5 }}
          ></h6>
          <h1>{ title } product</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form bg-white" style={{ padding: 30 }}>
              <div id="success" />
              <form>
                <div className="form-row">
                  <div className="control-group col-sm-6">
                    <input
                      type="text"
                      className="form-control p-4"
                      placeholder=" Nom produit"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group col-sm-6">
                    <input
                      type="email"
                      className="form-control p-4"
                      placeholder="reference"
                      value={address}
                      onChange={(event) => setAddress(event.target.value)}
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <textarea
                    type="text"
                    className="form-control p-4"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                  <p className="help-block text-danger" />
                </div>

                <div className="control-group">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(event) => onChangeImage(event)}
                  />
                  <p className="help-block text-danger" />
                </div>
                <img src={displayImage} alt="here image" />

                <div className="text-center">
                  <button
                    className="btn btn-primary py-3 px-4"
                    onClick={handleSubmit}
                    type="button"
                  >
                    {title}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Add_Qestion() {
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
      getAllQestById();
    } else {
      setTitle("Add");
    }
  }, []);

  const getAllQestById = () => {
    axios.get("http://localhost:5000/qest/getById/" + params.id).then((res) => {
      console.log("res.data.qest", res.data.qest);
      let qest = res.data.qest;
      setName(qest.name);
      setAddress(qest.address);
      setDescription(qest.description);
      setDisplayImage(qest.image);
      setImages(qest.image);
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
        .put("http://localhost:5000/qest/edit/" + params.id, formData)
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
        .post("http://localhost:5000/qest/add", formData)
        .then((response) => {
          console.log(response.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    setTimeout(() => {
      navigate("/qestion");
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
          <h1>{title} Question</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form bg-white" style={{ padding: 30 }}>
              <div id="success" />
              <form>
                <div className="form-row">
                  <div className="control-group col-sm-12">
                    <h5>Title  </h5>
                    <textarea
                      type="text"
                      className="form-control p-4"
                      placeholder="Be specific and imagine you’re asking a question to another person.
                      "
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group col-sm-12">
                  <h5> What are the details of your problem?</h5>

                    <textarea
                      type="text"
                      className="form-control p-4"
                      placeholder="Introduce the problem and expand on what you put in the title. "
                      value={address}
                      onChange={(event) => setAddress(event.target.value)}
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>


                <div className="control-group">
                <h5> What did you try and what were you expecting?</h5>

                  <textarea
                    type="text"
                    className="form-control p-4"
                    placeholder="Describe what you tried, what you expected to happen, and what actually resulted."
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

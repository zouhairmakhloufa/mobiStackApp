import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import 'react-toastify/dist/ReactToastify.css';

const Qestion_info = ({ user, product }) => {
  const params = useParams();
  const [qest, setQest] = useState({});
  const [comment, setComment] = useState("");
  const [Allcomments, setAllcomments] = useState([]);

  useEffect(() => {
    if (params.id) {
      getAllQestById();
      getAllCommentById()
    }
  }, []);
  const getAllQestById = () => {
    axios.get("http://localhost:5000/qest/getById/" + params.id).then((res) => {
      let qest = res.data.qest;
      setQest(qest);
    });
  };

  const getAllCommentById = () => {
    axios.get("http://localhost:5000/comment/get_by_qest/" + params.id).then((res) => {
      let comment = res.data.comments;
      setAllcomments(comment);
    });
  };

  const SubmitComment = () => {
    let data = {
      id_qest: params.id,
      id_user: user._id,
      comment: comment,
    };
    axios.post("http://localhost:5000/comment/post", data).then((res) => {
      getAllCommentById()
    });
  };



  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            {/* Blog Detail Start */}
            <div className="pb-3">
              <div className="blog-item">
                <div className="position-relative">
                  <img className="img-fluid w-100" src={qest.image} />
                  <div className="blog-date">
                    <h6 className="font-weight-bold mb-n1">18</h6>
                    <small className="text-white text-uppercase">Mars</small>
                  </div>
                </div>
              </div>
              <div className="bg-white mb-3" style={{ padding: 30 }}>
                <div className="d-flex mb-3">
                  <a className="text-primary text-uppercase text-decoration-none">
                    {qest.name}
                  </a>
                  <span className="text-primary px-2">|</span>
                  <a className="text-primary text-uppercase text-decoration-none">
                    {qest.address}
                  </a>
                </div>
                <h3 className="mb-3">Description Qestion</h3>
                <p>{qest.description}</p>
              </div>
            </div>

            {Allcomments.map((value, key) => (
              <div key={key} className="bg-white" style={{ padding: 30, marginBottom: 30 }}>
                <h4 className="text-uppercase mb-4" style={{ letterSpacing: 5 }}>
                  {key + 1} Comments
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
                      <a href>{value.id_user?.email}</a>{" "}
                      <small>
                        <i>{value.createdAt}</i>
                      </small>
                    </h6>
                    <p>{value.comment}</p>
                  </div>
                </div>
              </div>
            ))}



            {/* Comment List End */}
            {/* Comment Form Start */}
            <div className="bg-white mb-3" style={{ padding: 30 }}>
              <h4 className="text-uppercase mb-4" style={{ letterSpacing: 5 }}>
                Leave a comment
              </h4>
              <form>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
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

Qestion_info.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.userData,
  };
};
export default connect(mapStateToProps)(Qestion_info);

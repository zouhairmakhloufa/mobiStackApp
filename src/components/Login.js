import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addConnectedUser } from "../redux/action/AuthAction";
import { connect } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = ({ addConnectedUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgErr, setmsgErr] = useState("");
  const navigate = useNavigate();

  useEffect(() => {}, []);

  // const onSubmit = async () => {
  //   const registered = {
  //     email,
  //     password,
  //   };
  //   try {
  //     const user = await axios.post(
  //       "http://localhost:5000/user/login",
  //       registered
  //     );
  //     if (user.data.message === "2") {
  //       // localStorage.setItem("connectedUser", JSON.stringify(user.data.user));
  //       addConnectedUser(user.data.user);
  //       navigate("/");
  //       setmsgErr("");
  //     }
  //     if (user.data.message === "0") {
  //       setmsgErr("Verfier Email");
  //     }
  //     if (user.data.message === "1") {
  //       setmsgErr("Verfier Password");
  //     }
  //   } catch (err) {}
  // };
  const onSubmit = async () => {
    const registered = {
      email,
      password,
    };
    try {
      const user = await axios.post(
        "http://localhost:5000/user/login",
        registered
      );
      if (user.data.message === "2") {
        // localStorage.setItem("connectedUser", JSON.stringify(user.data.user));
        addConnectedUser(user.data.user);
        navigate("/");
        setmsgErr("");
        toast.success("Login successful!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000, // Set the duration of the toast message
        });
      }
      if (user.data.message === "0") {
        setmsgErr("Verify Email");
      }
      if (user.data.message === "1") {
        setmsgErr("Verify Password");
      }
    } catch (err) {
      // Handle errors here
    }
  };
  
  return (
    <div
      className="container-fluid bg-registration py-5"
      style={{ margin: "90px 0" }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="mb-4">
              <h6 className="text-primary text-uppercase"  style={{ letterSpacing: 5 }}>
              </h6>
              <h1 className="text-white">
                <span className="text-primary">Login</span> Page
              </h1>
            </div>
            <p className="text-white"></p>
            <ul className="list-inline text-white m-0"></ul>
          </div>
          <div className="col-lg-5">
            <div className="card border-0">
              <div className="card-header bg-primary text-center p-4">
                <h1 className="text-white m-0">Login Now</h1>
              </div>
              <div className="card-body rounded-bottom bg-white p-5">
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control p-4"
                      placeholder="Your email"
                      required="required"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="Password"
                      className="form-control p-4"
                      placeholder="Your Password"
                      required="required"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className=" form-group text-danger text-center">
                    {msgErr}
                  </div>

                  <div>
                    <button
                      className="btn btn-primary btn-block py-3"
                      type="button"
                      onClick={onSubmit}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addConnectedUser: (user) => {
      dispatch(addConnectedUser(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);

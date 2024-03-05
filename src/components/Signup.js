import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => { }, []);

  const onSubmit = async (event) => {
    let role = "";
    window.location.pathname === "/signup" ? (role = "user") : (role = "admin");
    const registered = {
      email,
      password,
      confirmPassword,
      role
    };
    try {
      const user = await axios.post(
        "http://localhost:5000/user/signup",
        registered
      );
      toast("lOGIN SUCCESSFULY")
      console.log("user", user);
    } catch (err) { }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
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
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
              </h6>
              <h1 className="text-white">
                <span className="text-primary">Sig Up</span> Page
              </h1>
            </div>
            <p className="text-white">

            </p>
            <ul className="list-inline text-white m-0">

            </ul>
          </div>
          <div className="col-lg-5">
            <div className="card border-0">
              <div className="card-header bg-primary text-center p-4">
                <h1 className="text-white m-0">Sign Up Now</h1>
              </div>
              <div className="card-body rounded-bottom bg-white p-5">
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control p-4"
                      placeholder="Your email"
                      required="required"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control p-4"
                      placeholder="Your Password"
                      required="required"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control p-4"
                      placeholder="Confirm Password"
                      required="required"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />
                  </div>

                  <div>
                    <button
                      className="btn btn-primary btn-block py-3"
                      type="button"
                      onClick={onSubmit}
                    >
                      Sign Up Now
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
}

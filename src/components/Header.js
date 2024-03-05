import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteConnectedUser } from "../redux/action/AuthAction";
 const Header=({ user,deleteConnectedUser, })=> {
const [CurrentUser,setCurrentUser]=useState({})


  useEffect(() => {
     setCurrentUser(user)
  }, [user]);
  let navigate = useNavigate();
  const logout = () => {

    deleteConnectedUser();

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  // const { cart } = useCart();


  return (
    <Fragment>
      {/* Topbar Start */}
      <div className="container-fluid bg-light pt-3 d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <p>  <i className="fa fa-envelope mr-2" />  mobiStack@gmail.com </p>
                <p className="text-body px-3">|</p>
                <p> <i className="fa fa-phone-alt mr-2" /> +26 765 720  </p>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <a className="text-primary px-3">  <i className="fab fa-facebook-f" /> </a>
                <a className="text-primary px-3">  <i className="fab fa-twitter" /> </a>
                <a className="text-primary px-3">  <i className="fab fa-linkedin-in" /></a>
                <a className="text-primary px-3">  <i className="fab fa-instagram" /> </a>
                <a className="text-primary pl-3">  <i className="fab fa-youtube" />  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <div className="container-fluid position-relative nav-bar p-0">
        <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}   >
          <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
            <Link to="/" className="navbar-brand">
             
              <img className="LogoMobelite" src="img/LogoMobelite.jpg" alt />
            </Link>
            <button type="button" className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse" >

              {CurrentUser.role==="admin"?(
                 <div className="navbar-nav ml-auto py-0">

                 <Link to="/" className="nav-item nav-link active"> {" "} Home{" "}</Link>
                 <Link to="/qestion" className="nav-item nav-link"> Question  </Link>
                 <Link to="/TableQestion" className="nav-item nav-link">  Table Question</Link>
                 <Link to="/contact" className="nav-item nav-link"> Contact </Link>
                 <a onClick={logout}  className="nav-item nav-link"> LogOut </a>
               </div>

              ):CurrentUser.role=== "user"?(
                <div className="navbar-nav ml-auto py-0">
                <Link to="/" className="nav-item nav-link active"> {" "} Home{" "}</Link>
                <Link to="/qestion" className="nav-item nav-link"> Question </Link>
                <Link to="/contact" className="nav-item nav-link"> Contact </Link>
                <a onClick={logout}  className="nav-item nav-link"> logOut</a>
              </div>
              ):(  
              <div className="navbar-nav ml-auto py-0">
              <Link to="/" className="nav-item nav-link active"> {" "} Home{" "}  </Link>
              <Link to="/contact" className="nav-item nav-link"> Contact</Link>
              <Link to="/signup" className="nav-item nav-link"> Sign up</Link>
              <Link to="/login" className="nav-item nav-link">Login </Link>
            </div>)}

             
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
    </Fragment>
  );
}

Header.propTypes = {
  user: PropTypes.object,
  deleteConnectedUser: PropTypes.func,
};

const mapStateToProps = (state) => {
  // console.log("hereeeee state navbar",state);
  return {
    user: state.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteConnectedUser: () => {
      dispatch(deleteConnectedUser());
    },
  };
};
export default connect(mapStateToProps,mapDispatchToProps) (Header)
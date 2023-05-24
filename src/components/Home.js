import React, { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>


  {/* Carousel Start */}
  <div className="container-fluid p-0">
    <div id="header-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100" src="img/ccc.jpg" alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxWidth: 900}}>
              <h4 className="text-white text-uppercase mb-md-3">Tours</h4>
              <h1 className="display-3 text-white mb-md-4">Let's Discover Tunisia Together</h1>
              <a href className="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100" src="img/tunis5.jpg" alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxWidth: 900}}>
              <h4 className="text-white text-uppercase mb-md-3">Tours</h4>
              <h1 className="display-3 text-white mb-md-4">Discover Amazing Places With Us</h1>
              <a href className="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</a>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
        <div className="btn btn-dark" style={{width: 45, height: 45}}>
          <span className="carousel-control-prev-icon mb-n2" />
        </div>
      </a>
      <a className="carousel-control-next" href="#header-carousel" data-slide="next">
        <div className="btn btn-dark" style={{width: 45, height: 45}}>
          <span className="carousel-control-next-icon mb-n2" />
        </div>
      </a>
    </div>
  </div>
  {/* Carousel End */}
 
  {/* About Start */}
  <div className="container-fluid py-5">
    <div className="container pt-5">
      <div className="row">
        <div className="col-lg-6" style={{minHeight: 500}}>
          <div className="position-relative h-100">
            <img className="position-absolute w-100 h-100" src="img/ccc.jpg" style={{objectFit: 'cover'}} />
          </div>
        </div>
        <div className="col-lg-6 pt-5 pb-lg-5">
          <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
            <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Visit Tunisia</h6>
            <h1 className="mb-3">Nous offrons les meilleurs forfaits touristiques en Tunisie</h1>
            <p> La Tunisie est un pays magnifique avec une riche histoire, une culture vibrante et des paysages variés, 
              ce qui en fait une destination attrayante pour de nombreux voyageurs.</p>
            <div className="row mb-4">
              <div className="col-6">
                <img className="img-fluid" src="img/sidibousaid.jpg" alt />
              </div>
              <div className="col-6">
                <img className="img-fluid" src="img/tunis11.jpg" alt />
              </div>
            </div>
            <a href className="btn btn-primary mt-1">Book Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Feature Start */}
  <div className="container-fluid pb-5">
    <div className="container pb-5">
      <div className="row">
        <div className="col-md-4">
          <div className="d-flex mb-4 mb-lg-0">
            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{height: 100, width: 100}}>
              <i className="fa fa-2x fa-money-check-alt text-white" />
            </div>
            <div className="d-flex flex-column">
              <h5 className>Competitive Pricing</h5>
              <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex mb-4 mb-lg-0">
            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{height: 100, width: 100}}>
              <i className="fa fa-2x fa-award text-white" />
            </div>
            <div className="d-flex flex-column">
              <h5 className>Best Services</h5>
              <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex mb-4 mb-lg-0">
            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{height: 100, width: 100}}>
              <i className="fa fa-2x fa-globe text-white" />
            </div>
            <div className="d-flex flex-column">
              <h5 className>Worldwide Coverage</h5>
              <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Feature End */}


    </Fragment>
  )
}

import React, { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>


      {/* Carousel Start */}
      <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/backgroundHome.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h1 className="display-3 text-white mb-md-4">Let's discover mobiStack's together</h1>
                  <a href className="btn btn-primary py-md-3 px-md-5 mt-2">Join Now</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/imageHomeBg.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h1 className="display-3 text-white mb-md-4">Let's discover mobiStack's together</h1>
                  <a href className="btn btn-primary py-md-3 px-md-5 mt-2">Join Now</a>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
            <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
              <span className="carousel-control-prev-icon mb-n2" />
            </div>
          </a>
          <a className="carousel-control-next" href="#header-carousel" data-slide="next">
            <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
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
            <div className="col-lg-6" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100" src="img/solutionCode.jpg" style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className="col-lg-6 pt-5 pb-lg-5">
              <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>mobiStack</h6>
                <h3 className="mb-3"> Notre plateforme favorise les techniques permettant de résoudre rapidement les problèmes techniques de développement</h3>
                <div className="row mb-4">
                  <div className="col-6">
                    <img className="img-fluid" src="img/codeImg.jpg" alt />
                  </div>
                </div>
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
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{ height: 100, width: 100 }}>
                  <i className="fa fa-2x fa-money-check-alt text-white" />
                </div>
                <div className="d-flex flex-column">
                  <h5 className>Mobi Stack for Teams</h5>
                  <p className="m-0">a été une ressource essentielle pour notre entreprise, facilitant la résolution de problèmes techniques par les développeurs et aidant le service commercial à répondre à des questions techniques pour conclure des affaires</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex mb-4 mb-lg-0">
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{ height: 100, width: 100 }}>
                  <i className="fa fa-2x fa-award text-white" />
                </div>
                <div className="d-flex flex-column">


                  <h5 className>Best Services</h5>
                  <p className="m-0">Notre service au sein de mobiStack se distingue par notre engagement envers la satisfaction de nos clients.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex mb-4 mb-lg-0">
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{ height: 100, width: 100 }}>
                  <i className="fa fa-2x fa-globe text-white" />
                </div>
                <div className="d-flex flex-column">
                  <h5 className>la résolution des problèmes techniques</h5>
                  <p className="m-0">Notre application est un atout précieux pour les ingénieurs confrontés à des défis complexes, en les aidant à comprendre l'architecture du produit, tout en évitant de répéter la résolution de problèmes déjà traités.</p>
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

import React from "react";

export default function Welcome() {
  return (
    <section className="shadow-sm staffProfile min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className=" container ">
        <div className="row justify-content-center align-content-center ">
          <div className="col-lg-6  col-md-6 col-12 text-lg-start text-center  ">
            <h1 data-aos="fade-up " data-aos-delay="500">
              Hausa Speech Emotion Recognition using Librosa.
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="500">
              Faculty of Computing, Department of Informatics, Kaduna State University, KASU.
            </h2>
            <div data-aos="fade-up" data-aos-delay="600">
              <div class="text-center text-lg-start d-lg-block d-none">
                <a
                  href="#about"
                  class="btn-get-started mb-4  d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Get Started</span>
                  <i class="bi bi-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>
         
          <div className="col-lg-6 col-md-6 col-12 text-lg-start">
            <div
              className="card text-move d-lg-none border-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className=" text-wrap">
                Matric : KASU/19/CSC/1015 Name : Bala Jimmy Yakubu
              </p>
            </div>
             {/** 
            <img
              data-aos="zoom-out"
              data-aos-delay="200"
              src="/images/rotate.jpg"
              alt="hero img"
              className=" img-fluid rounded-2 d-lg-block d-lg-none"
            />
*/}
            <div>
              <div class="text-center text-lg-start d-lg-none">
                <a
                  href="#about"
                  class="btn-get-started mb-4  d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Get Started</span>
                  <i class="bi bi-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card text-move border-0 d-lg-block d-none">
            <div className="card-body">
              <p className=" text-wrap">
                Matric : KASU/19/CSC/1015 --- Name : Bala Jimmy Yakubu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

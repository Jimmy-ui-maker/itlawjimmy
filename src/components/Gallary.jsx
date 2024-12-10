import React from "react";

export default function Gallary() {
  return (
    <section id="gallary" class="newStaffs min-vh-100 pb-4 section-bg">
      <div class="container">
        <div class="section-title " data-aos="fade-in" data-aos-delay="200">
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-lg-start text-center"
          >
            All Gallaries
          </h2>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6" data-aos="fade-in" data-aos-delay="500">
            <div className="searches d-flex flex-row justify-content-center align-items-center ">
              <input type="text" className=" form-control shadow-none" />
              <i className=" bi bi-search"></i>
            </div>
          </div>
        </div>

        <div className="row gy-4">
          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="member">
              <div className="member-img">
                <img
                  src="/imgs/emotions-graph.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="newLinks">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Emotion Samples</h4>
                <span>Senior Lecturer</span>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="member">
              <div className="member-img">
                <img src="/imgs/spectogram.png" className="img-fluid" alt="" />
                <div className="newLinks">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Spectogram</h4>
                <span>HSER</span>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="member">
              <div className="member-img">
                <img src="/imgs/wave.png" className="img-fluid" alt="" />
                <div className="newLinks">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Wave Sample 1</h4>
                <span>HSER</span>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="member">
              <div className="member-img">
                <img src="/imgs/calm hz.png" className="img-fluid" alt="" />
                <div className="newLinks">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Wave Sample 2</h4>
                <span>HSER</span>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="member">
              <div className="member-img">
                <img
                  src="/imgs/train accuracy.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="newLinks">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Train Accuracy</h4>
                <span>HSER</span>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="member">
              <div className="member-img">
                <img
                  src="/imgs/loss accuracy.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="newLinks">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Loss Accuracy</h4>
                <span>HSER</span>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="member">
              <div className="member-img">
                <img
                  src="\imgs\model summary.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="newLinks">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Model Summary</h4>
                <span>HSER</span>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="member">
              <div className="member-img">
                <img
                  src="\imgs\training epochs.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="newLinks">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Training Epochs</h4>
                <span>HSER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import React from "react";
import PageBanner from "../../src/components/PageBanner";
import Layouts from "../../src/layouts/Layouts";
import { DoctorCard } from "../../src/entities";

const Doctor = () => {
  return (
    <Layouts>
      <PageBanner title={"Встречайте наших врачей"} bgnone />
      <section className="doctors-section section-gap">
        <div className="container">
          <div className="row doctors-loop justify-content-center">
            {
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => {
                return (
                  <DoctorCard key={index} />
                )
              })
            }
          </div>

          {/* <div className="load-more-doctors text-center mt-40">
            <a href="#" className="template-btn template-btn-primary">
              Male An Appointment <i className="far fa-plus"></i>{" "}
            </a>
          </div> */}
        </div>
      </section>
      {/* <!--====== Doctor Section End ======--> */}

      {/* <!--====== Skill Section Start ======--> */}
      {/* <section className="skill-section section-gap border-top-primary">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="tile-gallery-two pr-lg-3">
                <div className="image-one">
                  <img src="assets/img/tile-gallery/04.jpg" alt="Image" />
                </div>
                <div
                  className="image-two text-right wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <img src="assets/img/tile-gallery/05.jpg" alt="Image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-9">
              <div className="skill-content pl-xl-5 mt-md-50">
                <div className="section-heading mb-20">
                  <span className="tagline">Professional Skills</span>
                  <h2 className="title">
                    25 Years Of Experience In Medical Services
                  </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis natus error voluptatem santium
                  doloremque laudantium totam rem aperieaque ipsa quae abillo
                  ven veritatis et quasi architecto beatae vitae dicta.
                </p>
                <div
                  className="skills-items mt-50 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div
                    className="progress-bar-wrapper mb-40"
                    data-percentage="89"
                    data-line-color="#499afa"
                    data-line-bg="#e4f0fe"
                  >
                    <div className="progress-title-wrap">
                      <h5 className="progress-title">Medical Care</h5>
                      <span className="progress-percentage">89%</span>
                    </div>
                    <div className="progress-line-wrap">
                      <div className="progress-line"></div>
                    </div>
                  </div>
                  <div
                    className="progress-bar-wrapper mb-40"
                    data-percentage="64"
                    data-line-color="#ffae00"
                    data-line-bg="#fff3d9"
                  >
                    <div className="progress-title-wrap">
                      <h5 className="progress-title">Family Care</h5>
                      <span className="progress-percentage">64%</span>
                    </div>
                    <div className="progress-line-wrap">
                      <div className="progress-line"></div>
                    </div>
                  </div>
                  <div
                    className="progress-bar-wrapper mb-40"
                    data-percentage="78"
                    data-line-color="#b505ff"
                    data-line-bg="#f4daff"
                  >
                    <div className="progress-title-wrap">
                      <h5 className="progress-title">Child Care</h5>
                      <span className="progress-percentage">78%</span>
                    </div>
                    <div className="progress-line-wrap">
                      <div className="progress-line"></div>
                    </div>
                  </div>
                  <div
                    className="progress-bar-wrapper mb-40"
                    data-percentage="85"
                    data-line-color="#ff3000"
                    data-line-bg="#ffe0d9"
                  >
                    <div className="progress-title-wrap">
                      <h5 className="progress-title">Senior Care</h5>
                      <span className="progress-percentage">85%</span>
                    </div>
                    <div className="progress-line-wrap">
                      <div className="progress-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layouts>
  );
};
export default Doctor;

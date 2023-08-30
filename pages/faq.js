import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import VideoPopup from "../src/components/VideoPopup";
import Layouts from "../src/layouts/Layouts";

const Faq = () => {
  const [active, setActive] = useState("collapse1");
  const active_ = (value) => (value === active ? "active-accordion" : "");
  const [video, setVideo] = useState(false);
  return (
    <Layouts>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner title={"Часто задаваемые вопросы"} bgnone />
      <section className="faq-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="faq-page-content pr-xl-4">
                <h3 className="faq-title">Часто задаваемые вопросы</h3>
                <p className="mb-35">
                  Amet consectetur adipiscing sed eiusmod tempor incididunt
                  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                  gravida. Risus commodo viverra maecenas accumsan lacus vel
                  facilisis.
                </p>
                <Accordion
                  defaultActiveKey="collapse1"
                  className="accordion"
                  id="accordionFaq"
                >
                  {
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item, index) => {
                      return (
                        <div className={`accordion-item ${active_(index)}`}>
                          <div className="accordion-header">
                            <Accordion.Toggle
                              as="h6"
                              eventKey={`collapse${index}`}
                              onClick={() => setActive(index)}
                              data-toggle="collapse"
                            >
                              <span>
                                There Is No Such Thing As A CSS Absolute Unit
                              </span>
                            </Accordion.Toggle>
                          </div>
                          <Accordion.Collapse eventKey={`collapse${index}`}>
                            <div className="accordion-content">
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error volup
                                cusantium doloremque laudantium, totam rem aperiam
                                eaque ipsa quae abillo inventore veritatis et quasi
                                architecto beatae
                              </p>
                            </div>
                          </Accordion.Collapse>
                        </div>
                      )
                    })
                  }
                </Accordion>
              </div>
            </div>
            <div className="col-lg-5 col-md-10">
              <div className="faq-sidebar">
                <div className="search-widget mb-50">
                  <h3 className="search-title">Ищите ответы на ваши вопросы</h3>
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input type="search" placeholder="Поиск" />
                    <button type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="video-widget">
                  <img src="assets/img/section-img/faq-video.jpg" alt="Image" />

                  <a
                    href="#"
                    className="video-popup"
                    onClick={(e) => {
                      e.preventDefault();
                      setVideo(true);
                    }}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Faq;

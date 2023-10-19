import React from "react";

const Footer1 = ({ noNewsletters }) => {
  return (
    <footer
      className={`template-footer ${noNewsletters ? "" : "have-cta-boxed-one"}`}
    >
      {!noNewsletters && (
        <div className="cta-boxed-one">
          <div className="container">
            <div
              className="cta-inner bg-color-secondary bg-size-cover blend-mode-multiply"
              style={{
                backgroundImage: "url(/on_map.png)",
              }}
            >
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="cta-content text-center">
                    <div className="section-heading heading-white">

                      <h2 className="title">
                        Инфекционная больница на карте
                      </h2>
                    </div>
                    <ul className="cta-buttons d-flex justify-content-center flex-wrap">
                      <li>
                        <a href="https://yandex.ru/maps/11333/kyzyl/?ll=94.435063%2C51.721252&mode=routes&rtext=~51.710119%2C94.430942&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D66900151424&z=12" className="template-btn template-btn-white">
                          Построить маршрут
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://yandex.ru/maps/11333/kyzyl/?ll=94.435766%2C51.714045&mode=routes&routes%5BavoidTypes%5D=underground%2Crailway&routes%5BtimeDependent%5D%5Btime%5D=2023-10-19T12%3A00%3A00&routes%5BtimeDependent%5D%5Btype%5D=departure&rtext=51.719890%2C94.437990~51.710119%2C94.430942&rtt=mt&ruri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzExNjcxNhI30KDQvtGB0YHQuNGPLCDQoNC10YHQv9GD0LHQu9C40LrQsCDQotGL0LLQsCwg0JrRi9C30YvQuyIKDUDgvEIVK-FOQg%2C%2C~ymapsbm1%3A%2F%2Forg%3Foid%3D66900151424&z=15"
                          className="template-btn template-btn-bordered"
                        >
                          Схема проезда
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="footer-inner bg-color-grey">
        <div className="container">
          <div className="footer-widgets">
            <div className="row">
              <div className="col-lg-5 col-md-8">
                <div className="widget text-widget">
                  <div className="footer-logo">
                    <h4 className="text-justify text-break">ГБУЗ РТ &quot;Инфекционная больница&quot;</h4>
                  </div>
                  <p>
                    Доступны следующие контактные данные способы связи:
                  </p>
                  <ul className="contact-list">
                    <li>
                      <a href="https://goo.gl/maps/inpkL6wUZqMR3opX7">
                        <i className="far fa-map-marker-alt" />
                        ул. Чехова, 65, Кызыл
                      </a>
                    </li>
                    <li>
                      <a href="mailto:support@gmail.com">
                        <i className="far fa-envelope" />
                        support@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:01267899">
                        <i className="far fa-phone" />
                        +7 (39422) 6-40-60
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-xl-12 col-md-12">
                    <div className="widget instagram-widget">
                      <h4 className="widget-title">Галерея</h4>
                      <div className="instagram-images justify-content-between">
                        {
                          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => {
                            return <div key={index} className="single-image">
                              <img
                                src="../assets/img/instagram/01.jpg"
                                alt="Instagram"
                              />
                              <a href="#">
                                <i className="fab fa-instagram" />
                              </a>
                            </div>
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <p>
              © 2023 <a href="#">ГБУЗ РТ &quot;Инфекционная больница&quot;</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer1;

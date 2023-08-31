import React from "react";

const SlidePanel = ({ sidebarTrigger, setSidebarTrigger }) => {
  return (
    <div
      className={`slide-panel off-canvas-panel ${sidebarTrigger ? "show-panel" : ""
        }`}
    >
      <div className="panel-overlay" onClick={() => setSidebarTrigger()} />
      <div className="panel-inner">
        {/* <div className="canvas-logo">
          <img src="assets/img/logo.png" alt="" />
        </div> */}
        <div className="about-us ">


          <div className="container">
            <div className="row">
              <div className="col-sm border-right px-5 ">
                <img src="/assets/img/doctors/glav.jpg" />
                <h4 className="my-3">
                  Сарыглар Анна Александровна
                </h4>

                <h5 className="text-secondary my-1">
                  Главный врач больницы
                </h5>
              </div>
              <div className="col-md">
                <h2 className="mb-3">Уважаемые посетители Официального сайта ГБУЗ РТ &quot;Инфекционная больница&quot;!</h2>
                <p>
                  Сайт создан для того, чтобы вы имели возможность в режиме online быть в курсе событий, происходящих в жизни Республики, могли высказать мнение об актуальных для вас проблемах, а также задать через интернет-приемную интересующие вас вопросы.

                  Искренне надеюсь, что общими усилиями мы сделаем нашу Республику лучше, краше, комфортнее, а жизнь жителей - стабильнее и благополучнее
                </p>
              </div>
            </div>

          </div>
        </div>


        {/* <div className="contact-us">
          <h5 className="canvas-widget-title">Contact Us</h5>
          <ul>
            <li>
              <i className="far fa-map-marker-alt" />
              354 Oakridge, Camden NJ 08102 - USA
            </li>
            <li>
              <i className="far fa-envelope-open" />
              <a href="mailto:support@qolle.com">support@seeva.com</a>
              <a href="mailto:info@qolle.com">info@seeva.com</a>
            </li>
            <li>
              <i className="far fa-phone" />
              <a href="tel:+01234567899">+012 (345) 678 99</a>
              <br />
              <a href="tel:+8563214">+8563214</a>
            </li>
          </ul>
        </div> */}
        {/* <a href="#" className="panel-close" onClick={() => setSidebarTrigger()}>
          <i className="fal fa-times" />
        </a> */}
      </div>
    </div>
  );
};
export default SlidePanel;

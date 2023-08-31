const ContactsInfo = () => {
  return (
    <div className="col-xl-5 col-lg-6 col-md-10">
      <div className="contact-info-wrapper">
        <div className="single-contact-info">
          <div className="single-contact-info">
            <h3 className="info-title">
              <i className="fal fa-map-marker-alt" /> Адрес
            </h3>
            <p>
              7895 Piermont Dr NE Albuquerque, <br />
              NM 198866, See Our Stores
            </p>
          </div>
          <div className="single-contact-info">
            <h3 className="info-title">
              <i className="fal fa-coffee" /> Контактные данные
            </h3>
            <ul>
              <li>
                <span>Телефон</span>
                <a href="tel:+012020200">+7 (39422) 6789</a>
              </li>
              <li>
                <span>Электронная почта</span>
                <a href="mailto:support@gmail.com">support@gmail.com</a>
              </li>
              <li>
                <span>Горячая линия</span>
                <a href="tel:+12345678">+7 (39422) 6789</a>
              </li>
            </ul>
          </div>
          <div className="single-contact-info">
            <h3 className="info-title">
              <i className="fal fa-comments" /> Социальные сети
            </h3>
            <p>Различные</p>
            <p className="social-icon">
              <a href="#">
                <i className="fab fa-vk" />
              </a>
              <a href="#">
                <i className="fab fa-telegram" />
              </a>
              <a href="#">
                <i className="fab fa-odnoklassniki" />
              </a>
              <a href="#">
                <i className="fab fa-youtube-square" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ContactsInfo };

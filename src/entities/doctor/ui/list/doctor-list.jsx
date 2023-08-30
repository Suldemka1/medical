import Link from "next/link";

const DoctorListMain = () => {
  return (
    <section className="doctors-section section-gap">
      <div className="container">
        <div className="row justify-content-between align-items-center mb-40">
          <div className="col-lg-5 col-md-6">
            <div className="section-heading">
              <span className="tagline">Профессиональные врачи</span>
              <h2 className="title">Опытные врачи</h2>
            </div>
          </div>
          <div className="col-auto">
            <Link href="/doctors">
              <a
                className="template-btn template-btn-primary mt-sm-30 wow fadeInRight"
                data-wow-delay="0.3s"
              >
                Записаться на преим
                {/* <i className="far fa-plus" /> */}
              </a>
            </Link>
          </div>
        </div>
        <div className="row doctors-loop justify-content-center">
          <div className="col-lg-3 col-md-6">
            <div
              className="doctor-box-one bordered-style mt-30 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="doctor-photo">
                <img src="assets/img/doctors/10.jpg" alt="Image" />
              </div>
              <div className="doctor-information">
                <h5 className="name">
                  <Link href="/doctor/1">
                    <a>Lee S. Williamson</a>
                  </Link>
                </h5>
                <span className="specialty">Cardiology</span>
                <ul className="social-links">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="doctor-box-one bordered-style mt-30 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="doctor-photo">
                <img src="assets/img/doctors/11.jpg" alt="Image" />
              </div>
              <div className="doctor-information">
                <h5 className="name">
                  <Link href="/doctor/1">
                    <a>Greg S. Grinstead</a>
                  </Link>
                </h5>
                <span className="specialty">Neurology</span>
                <ul className="social-links">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="doctor-box-one bordered-style mt-30 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="doctor-photo">
                <img src="assets/img/doctors/12.jpg" alt="Image" />
              </div>
              <div className="doctor-information">
                <h5 className="name">
                  <Link href="/doctor/1">
                    <a>Roger K. Jackson</a>
                  </Link>
                </h5>
                <span className="specialty">Orthopedics</span>
                <ul className="social-links">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="doctor-box-one bordered-style mt-30 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="doctor-photo">
                <img src="assets/img/doctors/13.jpg" alt="Image" />
              </div>
              <div className="doctor-information">
                <h5 className="name">
                  <Link href="/doctor/1">
                    <a>Raymudo M. Drake</a>
                  </Link>
                </h5>
                <span className="specialty">Covid - 19</span>
                <ul className="social-links">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { DoctorListMain };

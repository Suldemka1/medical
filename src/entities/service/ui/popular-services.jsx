import Link from "next/link";

const PopularServices = () => {
  return (
    <section className="service-section bg-color-grey section-gap">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="section-heading text-center mb-40">
              <span className="tagline">Popular Medical Services</span>
              <h2 className="title">
                Benefit For Physical Mental and Virtual Care
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center service-loop">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div
              className="iconic-box mt-30 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="icon">
                <img src="assets/img/icon/heart.png" alt="Icon" />
              </div>
              <h4 className="title">
                <Link href="/service/1">
                  <a>Cardiology</a>
                </Link>
              </h4>
              <p>Dolor sit amet consectetur ascing elitsed eiusmod tempor</p>
              <div className="box-link-wrap">
                <span className="link-icon">
                  <i className="far fa-plus" />
                </span>
                <Link href="/service/1">
                  <a className="box-link">
                    Read More <i className="far fa-plus" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div
              className="iconic-box mt-30 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="icon">
                <img src="assets/img/icon/lungs.png" alt="Icon" />
              </div>
              <h4 className="title">
                <Link href="/service/1">
                  <a>Pulmonary</a>
                </Link>
              </h4>
              <p>Dolor sit amet consectetur ascing elitsed eiusmod tempor</p>
              <div className="box-link-wrap">
                <span className="link-icon">
                  <i className="far fa-plus" />
                </span>
                <Link href="/service/1">
                  <a className="box-link">
                    Read More <i className="far fa-plus" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div
              className="iconic-box mt-30 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="icon">
                <img src="assets/img/icon/brain.png" alt="Icon" />
              </div>
              <h4 className="title">
                <Link href="/service/1">
                  <a>Neurology</a>
                </Link>
              </h4>
              <p>Dolor sit amet consectetur ascing elitsed eiusmod tempor</p>
              <div className="box-link-wrap">
                <span className="link-icon">
                  <i className="far fa-plus" />
                </span>
                <Link href="/service/1">
                  <a className="box-link">
                    Read More <i className="far fa-plus" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div
              className="iconic-box mt-30 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="icon">
                <img src="assets/img/icon/stomach.png" alt="Icon" />
              </div>
              <h4 className="title">
                <Link href="/service/1">
                  <a>Gastroenterology</a>
                </Link>
              </h4>
              <p>Dolor sit amet consectetur ascing elitsed eiusmod tempor</p>
              <div className="box-link-wrap">
                <span className="link-icon">
                  <i className="far fa-plus" />
                </span>
                <Link href="/service/1">
                  <a className="box-link">
                    Read More <i className="far fa-plus" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div
              className="iconic-box mt-30 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="icon">
                <img src="assets/img/icon/virus.png" alt="Icon" />
              </div>
              <h4 className="title">
                <Link href="/service/1">
                  <a>Covid - 19</a>
                </Link>
              </h4>
              <p>Dolor sit amet consectetur ascing elitsed eiusmod tempor</p>
              <div className="box-link-wrap">
                <span className="link-icon">
                  <i className="far fa-plus" />
                </span>
                <Link href="/service/1">
                  <a className="box-link">
                    Read More <i className="far fa-plus" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div
              className="iconic-box mt-30 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="icon">
                <img src="assets/img/icon/bronchus.png" alt="Icon" />
              </div>
              <h4 className="title">
                <Link href="/service/1">
                  <a>Orthopedics</a>
                </Link>
              </h4>
              <p>Dolor sit amet consectetur ascing elitsed eiusmod tempor</p>
              <div className="box-link-wrap">
                <span className="link-icon">
                  <i className="far fa-plus" />
                </span>
                <Link href="/service/1">
                  <a className="box-link">
                    Read More <i className="far fa-plus" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PopularServices };

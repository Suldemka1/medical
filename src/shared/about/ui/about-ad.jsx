import Link from "next/link";

const AboutAd = () => {
  return (
    <section className="about-section section-gap">
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-6 col-md-10">
            <div className="circle-image-gallery mb-md-50">
              <div className="row">
                <div className="col-6 gallery-left">
                  <div
                    className="single-img wow fadeInLeft"
                    data-wow-delay="0.3s"
                  >
                    <img src="assets/img/circle-image-gallery/01.jpg" alt="" />
                  </div>
                  <div
                    className="single-img wow fadeInRight"
                    data-wow-delay="0.4s"
                  >
                    <img src="assets/img/circle-image-gallery/04.jpg" alt="" />
                  </div>
                </div>
                <div className="col-6 gallery-right">
                  <div
                    className="single-img wow fadeInRight"
                    data-wow-delay="0.5s"
                  >
                    <img
                      className="animate-float-bob-y"
                      src="assets/img/circle-image-gallery/03.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className="single-img wow fadeInLeft"
                    data-wow-delay="0.6s"
                  >
                    <img src="assets/img/circle-image-gallery/02.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 col-md-8">
            <div className="about-text">
              <div className="section-heading mb-35">
                <span className="tagline">Об инфекционной больнице</span>
                <h2 className="title">All-in-One Worksite Health Solution</h2>

                <p>25 Years Of Experience in Medical Services</p>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque laudantium totam rem aperieaque ipsa quae
                ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatemsy quia voluptas
                sit aspernatur aut odit aut fugit quia conquntur magni dolores
                eos qui ratione voluptatem
              </p>
              <Link href="/about">
                <a className="template-btn mt-40">
                  Learn More <i className="far fa-plus"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutAd };

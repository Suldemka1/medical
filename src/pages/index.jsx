import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero-area-one">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5 col-md-8">
            <div className="hero-content">
              <h1 className="title wow fadeInDown" data-wow-delay="0.3s">
                20 лет успешной работы
              </h1>
              <p className="wow fadeInLeft" data-wow-delay="0.4s">
                Доверие граждан — знак качества
              </p>
              <Link href="/contact">
                <a className="template-btn wow fadeInUp" data-wow-delay="0.5s">
                  Записаться на прием <i className="far fa-plus" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-img wow fadeInUp" data-wow-delay="0.3s">
              <img
                src="assets/img/hero-img/hero.jpg"
                className="rounded"
                style={{ objectFit: "cover" }}
                alt="Hero"
                width={760}
                height={570}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };

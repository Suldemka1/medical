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
                <h2 className="title">
                  Профессионализм Безопасность Репутация
                </h2>

                <p>20 лет на страже национального здоровья</p>
              </div>
              <p>
                ГБУЗ РТ «Инфекционная больница» является ведущим
                специализированным учреждением здравоохранения Республики Тыва,
                накопившим огромный опыт работы с больными различными
                инфекционными заболеваниями.
                <br />
                <br />
                Больница укомплектована необходимым штатом врачей, медицинских
                сестер. Весь врачебный и медсестринский персонал имеют
                сертификаты по специальности.
              </p>
              <Link href="/about">
                <a className="template-btn mt-40">Подробнее о нас</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutAd };

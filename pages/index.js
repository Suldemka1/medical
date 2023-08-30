import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import Layouts from "../src/layouts/Layouts";
import { testimonialOne } from "../src/sliderProps";
import { LatestPosts } from "../src/entities/blog";
import { PopularServices } from "../src/entities/service";
import { DoctorListMain } from "../src/entities";
import { AboutAd } from "../src/shared";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layouts position={"absolute"}>
      <>
        {/*====== Hero Area Start ======*/}
        <section className="hero-area-one">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5 col-md-8">
                <div className="hero-content">
                  <h1 className="title wow fadeInDown" data-wow-delay="0.3s">
                    We Care Medical &amp; Health
                  </h1>
                  <p className="wow fadeInLeft" data-wow-delay="0.4s">
                    Dolor sit amet consectetur adipiscing elitsedes eiusmod
                    tempor incididunt utlabore Lorem
                  </p>
                  <Link href="/contact">
                    <a
                      className="template-btn wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      Make an Appointment <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="hero-img wow fadeInUp" data-wow-delay="0.3s">
                  <img src="assets/img/hero-img/hero-img.png" alt="Hero" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Hero Area End ======*/}
        {/*====== Why Choose Section Start ======*/}
        <section className="wcu-section section-gap-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="section-heading heading-white text-center mb-40">
                  <span className="tagline">Почему выбирают нас</span>
                  <h2 className="title">
                    Breakthrough in Comprehensive, Flexible Care Delivery Models
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="image-title-box mt-30">
                  <h4 className="title">
                    <Link href="/service">
                      <a>Optimize Your Health Care Services</a>
                    </Link>
                  </h4>
                  <div className="image">
                    <img src="assets/img/img-title-box/01.jpg" alt="Image" />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="image-title-box mt-30">
                  <h4 className="title">
                    <Link href="/service">
                      <a>Boost Employee Engagement</a>
                    </Link>
                  </h4>
                  <div className="image">
                    <img src="assets/img/img-title-box/02.jpg" alt="Image" />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="image-title-box mt-30">
                  <h4 className="title">
                    <Link href="/service">
                      <a>Accelerate Your Return On Investment</a>
                    </Link>
                  </h4>
                  <div className="image">
                    <img src="assets/img/img-title-box/03.jpg" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Why Choose Section End ======*/}

        {/*====== About Section Start ======*/}
        <AboutAd />
        {/*====== About Section End ======*/}
        
        {/*====== Service Section Start ======*/}
        <PopularServices />
        {/*====== Service Section End ======*/}
        {/*====== Big Tagline Start ======*/}
        <section className="big-tagline">
          <div className="container-fluid">
            <h2 className="tagline">
              Learn better health outcomes, improve costs and increase
              productivity for your business
            </h2>
          </div>
        </section>
        {/*====== Big Tagline End ======*/}
        {/*====== Doctor Section Start ======*/}
        <DoctorListMain />
        {/*====== Doctor Section End ======*/}
        {/*====== Appointment Section Start ======*/}
        <section className="appointment-section section-gap-bottom">
          <div className="container">
            <div className="appointment-form-two">
              <div className="form-wrap">
                <div className="section-heading mb-40">
                  <span className="tagline">Make an Appointment</span>
                  <h2 className="title">Make an Appointment to Doctor Visit</h2>
                </div>
                <form onSubmit={(e) => e.preventDefault()} action="#">
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="input-field wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <input type="text" placeholder="Your Full Name" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="input-field wow fadeInLeft"
                        data-wow-delay="0.4s"
                      >
                        <select>
                          <option data-dsplay={1} selected disabled="">
                            Services Category
                          </option>
                          <option value={2}>Service One</option>
                          <option value={3}>Service Two</option>
                          <option value={4}>Service Three</option>
                          <option value={5}>Service Four</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="input-field wow fadeInLeft"
                        data-wow-delay="0.5s"
                      >
                        <select>
                          <option data-dsplay={1} selected disabled="">
                            Choose Doctors
                          </option>
                          <option value={2}>Doctor One</option>
                          <option value={3}>Doctor Two</option>
                          <option value={4}>Doctor Three</option>
                          <option value={5}>Doctor Four</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="input-field wow fadeInLeft"
                        data-wow-delay="0.6s"
                      >
                        <input type="date" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="input-field wow fadeInLeft"
                        data-wow-delay="0.7s"
                      >
                        <button type="submit" className="template-btn">
                          Make an Appointment <i className="far fa-plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div
                className="appointment-image"
                style={{
                  backgroundImage: "url(assets/img/appointment/07.jpg)",
                }}
              ></div>
            </div>
          </div>
        </section>
        {/*====== Appointment Section End ======*/}
        {/*====== Testimonials Section Start ======*/}
        <section className="testimonial-section bg-color-grey section-have-half-bg">
          <div className="container-fluid">
            <div className="row justify-content-end">
              <div className="col-lg-6">
                <div className="testimonial-one-wrap">
                  <div className="section-heading mb-50">
                    <span className="tagline">Our Testimonials</span>
                    <h2 className="title">
                      What Our Patients Say About Our Medical
                    </h2>
                  </div>
                  <Slider
                    {...testimonialOne}
                    className="testimonial-slider-one"
                  >
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/img/testimonial/01.png"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            Sed ut perspiciatis unde omnis natusy error
                            voluptatem accusantium doloreue laudan totam rem
                            aperiam eaquip quae abillo inventore veritatis quasi
                            architecto beatae vitae dicta sunt explicabo
                          </p>
                          <div className="author-info">
                            <h5 className="name">Mark E. Kaminsky</h5>
                            <span className="title">Web Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/img/testimonial/01.png"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            Sed ut perspiciatis unde omnis natusy error
                            voluptatem accusantium doloreue laudan totam rem
                            aperiam eaquip quae abillo inventore veritatis quasi
                            architecto beatae vitae dicta sunt explicabo
                          </p>
                          <div className="author-info">
                            <h5 className="name">Mark E. Kaminsky</h5>
                            <span className="title">Web Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/img/testimonial/01.png"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            Sed ut perspiciatis unde omnis natusy error
                            voluptatem accusantium doloreue laudan totam rem
                            aperiam eaquip quae abillo inventore veritatis quasi
                            architecto beatae vitae dicta sunt explicabo
                          </p>
                          <div className="author-info">
                            <h5 className="name">Mark E. Kaminsky</h5>
                            <span className="title">Web Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/img/testimonial/01.png"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            Sed ut perspiciatis unde omnis natusy error
                            voluptatem accusantium doloreue laudan totam rem
                            aperiam eaquip quae abillo inventore veritatis quasi
                            architecto beatae vitae dicta sunt explicabo
                          </p>
                          <div className="author-info">
                            <h5 className="name">Mark E. Kaminsky</h5>
                            <span className="title">Web Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section-half-bg"
            style={{
              backgroundImage: "url(assets/img/section-bg/half-bg-img-01.jpg)",
            }}
          />
        </section>
        {/*====== Testimonials Section End ======*/}
        {/*====== Counter Section Start ======*/}
        <section className="counter-section section-gap">
          <div className="container">
            <div className="counter-inner">
              <div className="row justify-content-between">
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-wrap">
                      {/* <span className="counter">359</span> */}
                      <Counter end={359} />
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Professional Doctors</h6>
                  </div>
                </div>
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-wrap">
                      <Counter end={85} />
                      {/* <span className="counter">85</span> */}
                      <span className="suffix">k+</span>
                    </div>
                    <h6 className="title">Saticfied Our Clients</h6>
                  </div>
                </div>
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-wrap">
                      <Counter end={863} />
                      {/* <span className="counter">863</span> */}
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Win International Awards</h6>
                  </div>
                </div>
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-wrap">
                      <Counter end={86} />
                      <span className="suffix">k+</span>
                    </div>
                    <h6 className="title">4.9 Star Reviews</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Counter Section End ======*/}
        {/*====== Help Section Start ======*/}
        <section className="help-section section-gap-bottom">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-end align-items-center">
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="help-text-wrapper">
                  <div className="section-heading mb-20">
                    <span className="tagline">How Can We Help</span>
                    <h2 className="title">
                      Flexible &amp; Responsive to Changing Need
                    </h2>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusantium doloremque laudantium totam rem aperieaqueys
                    epsa quae abillo inventore veritatis et quase
                  </p>
                  <ul className="check-list mt-35 pr-xl-4">
                    <li className="wow fadeInUp" data-wow-delay="0.3s">
                      25-30% estimated savings in implementation when using
                      Mobile Health Clinics
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.4s">
                      Activate Mobile Health Clinics in just weeks
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.5s">
                      Flexible, on-demand access to care services
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.6s">
                      Supports referrals to provider networks and care
                      management programs
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="help-img text-center text-lg-right mt-md-50">
                  <img
                    src="assets/img/section-img/help-section-img.jpg"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Help Section End ======*/}
        {/*====== Partners Section Start ======*/}
        <section className="partner-section section-gap bg-color-secondary section-map-overly">
          <div className="container">
            <div className="section-heading heading-white text-center mb-50">
              <span className="span tagline">Our Trusted Partners</span>
              <h2 className="title">We’ve 23563k+ Trusted Partners</h2>
            </div>
            <div className="partner-logo-grid grid-border-white">
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/01.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/02.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/03.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/04.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/05.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/06.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/07.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/08.png" alt="Partner" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*====== Partners Section End ======*/}
        {/*====== Latest Blog Start ======*/}
        <LatestPosts />
        {/*====== Latest Blog End ======*/}
      </>
    </Layouts>
  );
};
export default Index;

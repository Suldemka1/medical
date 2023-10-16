import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import { Schedule } from "../src/shared/contacts/grid/schedule/ui";
import { ContactsInfo } from "../src/shared/contacts/grid/info/ui";
import { ContactsGrid } from "../src/shared/contacts/grid";

const Contact = () => {
  return (
    <Layouts footer={2}>
      <PageBanner title={"Контакты"} />
      {/*====== Page Title End ======*/}
      {/*====== Contact Info Section Start ======*/
      }
      <ContactsGrid />
      {/*====== Contact Info Section End ======*/}
      {/*====== Contact Form Start ======*/}
      {/* <section className="contact-form-area">
        <div className="contact-map section-gap-bottom">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d107201.226767341!2d-74.05027451789393!3d40.71534534062428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1634195102348!5m2!1sen!2sbd"
            loading="lazy"
          />
        </div>
        <div className="section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-heading mb-60 text-center">
                  <span className="tagline">{`We're Ready To Help You`}</span>
                  <h2 className="title">Leave a Message</h2>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-field">
                        <label htmlFor="name">Your Full Name</label>
                        <input
                          type="text"
                          placeholder="Michael M. Smith"
                          id="name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-field">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          placeholder="support@gmail.com"
                          id="email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-field">
                        <label htmlFor="number">Phone Number</label>
                        <input
                          type="text"
                          placeholder="+012 (345) 678 99"
                          id="number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-field">
                        <label htmlFor="website">Website</label>
                        <input
                          type="url"
                          placeholder="www.seeva.com"
                          id="website"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-field">
                        <label htmlFor="message">Write Message</label>
                        <textarea
                          id="message"
                          placeholder="Write Message...."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="text-center">
                        <button className="template-btn">
                          Send Us Message <i className="far fa-plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layouts>
  );
};
export default Contact;

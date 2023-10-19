import Link from "next/link";
import React from "react";
import PageBanner from "../../src/components/PageBanner";
import Layouts from "../../src/layouts/Layouts";
import { LatestPostsWidget } from "../../src/widgets/latest-posts-widget";
import Slider from "react-slick";

export const getServerSideProps = async (context) => {
  const { id } = context.query
  const latestPosts = await fetch(`${process.env.api}/items/posts?limit=3`)
    .then((res) => res.json())
    .then((res) => res.data)

  const post = await fetch(`${process.env.api}/items/posts/${id}`)
    .then((res) => res.json())
    .then((res) => res.data)

  return {
    props: {
      post,
      latestPosts
    }
  }
}

const BlogDetails = ({ post, latestPosts }) => {
  return (
    <Layouts>
      <PageBanner title={`Новость №${post.id}`} bgnone />
      <section className="blog-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper">
                <div className="post-thumbnail">
                  <Slider>
                    <img src={`${process.env.api}/assets/${post.preview}`} width={700} height={425} alt="Image"
                      style={{
                        objectFit: "cover"
                      }} />
                      <img src={`${process.env.api}/assets/${post.preview}`} width={700} height={425} alt="Image"
                      style={{
                        objectFit: "cover"
                      }} />
                  </Slider>

                </div>
                <div className="blog-details-inner">
                  <div className="post-content">
                    <h3 className="post-title">
                      <Link href="/blog/1">
                        <a>
                          {post?.title}
                        </a>
                      </Link>
                    </h3>
                    <div dangerouslySetInnerHTML={{
                      __html: post?.content
                    }} />
                  </div>

                  <div className="post-footer">
                    <ul className="related-tags">
                      <li className="title">Tags:</li>
                      <li>
                        <a href="#">Medical</a>
                      </li>
                      <li>
                        <a href="#">Cosmetics</a>
                      </li>
                      <li>
                        <a href="#">Beauty</a>
                      </li>
                    </ul>
                    <ul className="post-share">
                      <li className="title">Share:</li>
                      <li>
                        <a href="#">
                          <i className="fab fa-vk"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-odnoklassniki"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-telegram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="details-line"></div>
                  <div className="post-navigation">
                    <div className="navigation-item prev-post">
                      <div className="thumbnail">
                        <img
                          src="assets/img/blog/navigation-1.jpg"
                          alt="Image"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <a href="#">How to Deal With Back During..</a>
                        </h6>
                        <span className="date">
                          <i className="far fa-calendar-alt"></i> 25 May 2021
                        </span>
                      </div>
                    </div>
                    <div className="navigation-item next-post">
                      <div className="thumbnail">
                        <img
                          src="assets/img/blog/navigation-2.jpg"
                          alt="Image"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <a href="#">Online Environme Work Older See..</a>
                        </h6>
                        <span className="date">
                          <i className="far fa-calendar-alt"></i> 25 May 2021
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <div className="details-line"></div>
                  <div className="comment-template">
                    <h4 className="template-title">Peopel Comments</h4>
                    <ul className="comment-list">
                      <li>
                        <div className="comment-body">
                          <div className="comment-avatar">
                            <img
                              src="assets/img/blog/comment-avatar-1.jpg"
                              alt="Avatar"
                            />
                          </div>
                          <div className="comment-content">
                            <h6 className="name">John F. Medina</h6>
                            <span className="date">25 May 2021</span>
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem doloremque laudantium totam rem
                              aperiam
                            </p>
                            <a href="#" className="reply-link">
                              Reply <i className="fas fa-long-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                        <ul className="children">
                          <li>
                            <div className="comment-body">
                              <div className="comment-avatar">
                                <img
                                  src="assets/img/blog/comment-avatar-2.jpg"
                                  alt="Avatar"
                                />
                              </div>
                              <div className="comment-content">
                                <h6 className="name">Jeffrey T. Kelly</h6>
                                <span className="date">25 May 2021</span>
                                <p>
                                  Perspiciatis unde omnis iste natus error sit
                                  voluptatem accusantium doloremque laudantium
                                </p>
                                <a href="#" className="reply-link">
                                  Reply{" "}
                                  <i className="fas fa-long-arrow-right"></i>
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="comment-body">
                          <div className="comment-avatar">
                            <img
                              src="../assets/img/blog/comment-avatar-3.jpg"
                              alt="Avatar"
                            />
                          </div>
                          <div className="comment-content">
                            <h6 className="name">Richard B. Zellmer</h6>
                            <span className="date">25 May 2021</span>
                            <p>
                              Unde omnis iste natus error sit voluptate
                              accusantium dolore mque laudantium totam rem
                              aperiam
                            </p>
                            <a href="#" className="reply-link">
                              Reply <i className="fas fa-long-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="details-line"></div>
                    <h4 className="template-title">Leave A Message</h4>
                    <div className="comment-form">
                      <form onSubmit={(e) => e.preventDefault()} action="#">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-field mb-30">
                              <input type="text" placeholder="Full Name" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-field mb-30">
                              <input
                                type="email"
                                placeholder="Email Address "
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="input-field mb-30">
                              <input type="url" placeholder="Website" />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="input-field mb-30">
                              <textarea placeholder="Write Message"></textarea>
                            </div>
                          </div>
                          <div className="col-12">
                            <button type="submit" className="template-btn">
                              Send Comments{" "}
                              <i className="far fa-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="primary-sidebar">
                <div className="widget search-widget">
                  <h4 className="widget-title">Поиск</h4>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    className="search-form"
                  >
                    <input type="search" placeholder="Поиск" />
                    <button type="submit">
                      <i className="far fa-search"></i>
                    </button>
                  </form>
                </div>
                {/* <div className="widget category-widget">
                  <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>
                      <a href="#">Business (5)</a>
                    </li>
                    <li>
                      <a href="#">Dental Care (15)</a>
                    </li>
                    <li>
                      <a href="#">Eye Care (11)</a>
                    </li>
                    <li>
                      <a href="#">Allergic Issue (6)</a>
                    </li>
                    <li>
                      <a href="#">Cardiology (9)</a>
                    </li>
                    <li>
                      <a href="#">Neurology Surgery (8)</a>
                    </li>
                    <li>
                      <a href="#">Allergic Issue (09)</a>
                    </li>
                  </ul>
                </div> */}
                <LatestPostsWidget latestPosts={latestPosts} />

                {/* <div className="widget cta-widget">
                  <div
                    className="cta-content"
                    style={{
                      backgroundImage: `url(assets/img/blog/cta-widget.jpg)`,
                    }}
                  >
                    <h4 className="cta-title">Get Free Consultations</h4>
                    <span className="cta-tagline">Special advisors</span>
                    <p>Quis autem vel eum iure repreh ende</p>
                    <a href="#" className="cta-btn">
                      Get a quote
                    </a>
                  </div>
                </div> */}

                <div className="widget tag-cloud-widget">
                  <h4 className="widget-title">Облако тегов</h4>
                  <ul>
                    <li>
                      <a href="#">Medical</a>
                    </li>
                    <li>
                      <a href="#">Doctors</a>
                    </li>
                    <li>
                      <a href="#">Nurses</a>
                    </li>
                    <li>
                      <a href="#">Consultancy</a>
                    </li>
                    <li>
                      <a href="#">Law farms</a>
                    </li>
                    <li>
                      <a href="#">Farms</a>
                    </li>
                    <li>
                      <a href="#">Management</a>
                    </li>
                    <li>
                      <a href="#">Planning</a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default BlogDetails;

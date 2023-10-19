import Link from "next/link";
import React, { useEffect, useState } from "react";
import PageBanner from "../../src/components/PageBanner";
import Layouts from "../../src/layouts/Layouts";
import { getPagination, pagination } from "../../src/utils";
import { PostCard } from "../../src/entities/blog";
import { LatestPostsWidget } from "../../src/widgets/latest-posts-widget";

export const getServerSideProps = async () => {
  const posts = await fetch(`${process.env.api}/items/posts`,
    {
      headers: {
        Authorization: `Bearer ${process.env.token}`,
      },
    })
    .then((res) => res.json())
    .then((res) => res.data)

  return {
    props: {
      posts
    }
  }
}

const BlogStandard = ({ posts }) => {
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  const [lastPosts, setLastPosts] = useState([])

  useEffect(() => {
    setLastPosts(posts.filter((item, index) => index < 3))
    pagination(".single-blog-post", sort, active);
    let list = document.querySelectorAll(".single-blog-post");
    setstate(getPagination(list.length, sort));
  }, [active]);

  return (
    <Layouts>
      <PageBanner title={"Новости"} bgnone />
      <section className="blog-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-loop">
                {
                  posts?.map((item, index) => {
                    if (index % 2 === 0) {
                      return (
                        <PostCard key={index} author={item.user_created} title={item.title} content={item.content} date={new Date(item.date_created).toLocaleDateString("ru-Ru")} preview={item.preview} variant={"default"} />
                      )
                    }
                    else if (index % 5 === 0) {
                      return <PostCard key={index} author={item.user_created} title={item.title} content={item.content} date={new Date(item.date_created).toLocaleDateString("ru-Ru")} preview={item.preview} variant={"dark"} />
                    }
                    else {
                      return <PostCard key={index} author={item.user_created} title={item.title} content={item.content} date={new Date(item.date_created).toLocaleDateString("ru-Ru")} preview={item.preview} variant={"no-thumbnail"} />
                    }
                  })
                }


              </div>
              <ul className="pagination">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(active === 1 ? 1 : active - 1);
                    }}
                  >
                    <i className="far fa-angle-left" />
                  </a>
                </li>
                {state &&
                  state.map((s, i) => (
                    <li key={i}>
                      <a
                        className={` ${active === s ? "active" : ""}`}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(s);
                        }}
                      >
                        {s}
                      </a>
                    </li>
                  ))}
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(
                        active === state.length ? state.length : active + 1
                      );
                    }}
                  >
                    <i className="far fa-angle-right" />
                  </a>
                </li>
              </ul>
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
                    <input type="search" placeholder="Заголовок новости" />
                    <button type="submit">
                      <i className="far fa-search" />
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
                <LatestPostsWidget latestPosts={lastPosts} />
                <div className="widget cta-widget">
                  <div
                    className="cta-content"
                    style={{
                      backgroundImage: "url(assets/img/blog/cta-widget.jpg)",
                    }}
                  >
                    <h4 className="cta-title">Get Free Consultations</h4>
                    <span className="cta-tagline">Special advisors</span>
                    <p>Quis autem vel eum iure repreh ende</p>
                    <a href="#" className="cta-btn">
                      Get a quote
                    </a>
                  </div>
                </div>
                <div className="widget tag-cloud-widget">
                  <h4 className="widget-title">Popular Tags</h4>
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
export default BlogStandard;

import { useEffect } from "react";
import PageBanner from "../../src/components/PageBanner";
import Layouts from "../../src/layouts/Layouts";
import Link from "next/link";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const page = await fetch(
    `${process.env.api}/items/for_patient/${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.token}`,
      },
    }
  )
    .then((res) => res.json())
    .then((res) => res.data)

  const lastPosts = await fetch(`${process.env.api}/items/posts?limit=5`,
    {
      headers: {
        Authorization: `Bearer ${process.env.token}`,
      },
    })
    .then((res) => res.json())
    .then((res) => res.data)

  return {
    props: {
      page,
      lastPosts
    },
  };
};

const ForPatientGeneratedPage = ({ page, lastPosts }) => {
  useEffect(() => {
    console.log(page)
    console.log(lastPosts)
  }, [])
  return (
    <Layouts>
      <PageBanner title={page.title} />

      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <div
              dangerouslySetInnerHTML={{
                __html: page?.content,
              }}
            />
          </div>
          <div className="col-lg-4">
            <div className="primary-sidebar">
              <div className="widget latest-post-widget">
                <h4 className="widget-title">Последние новости</h4>
                <div className="latest-post-loop">
                  {
                    lastPosts.map((item) => {
                      return (
                        <div className="single-post">
                          <div className="thumbnail">
                            <img
                              src={`${process.env.api}/assets/${item.preview}`}
                              alt="Image"
                            />
                          </div>
                          <div className="content">
                            <h6>
                              <Link href="/blog/1">
                                <a>{item.title}</a>
                              </Link>
                            </h6>
                            <span className="date">
                              <i className="far fa-calendar-alt" /> {new Date(item.date_created).toLocaleDateString("ru-RU")}
                            </span>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              {/* <div className="col-xl-5 col-sm-6">
                <div className="d-flex justify-content-lg-center">
                  <div className="widget nav-widget">
                    <h4 className="widget-title">Popular Services</h4>
                    <ul className="nav-links">
                      <li>
                        <a href="#">Orthopedic Care</a>
                      </li>
                      <li>
                        <a href="#">Gynecology Care</a>
                      </li>
                      <li>
                        <a href="#">Cardiology Care</a>
                      </li>
                      <li>
                        <a href="#">Dentistry Care</a>
                      </li>
                      <li>
                        <a href="#">Gastroenterology</a>
                      </li>
                      <li>
                        <a href="#">Urgent Care</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </Layouts>
  );
};

export default ForPatientGeneratedPage;

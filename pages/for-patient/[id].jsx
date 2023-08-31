import PageBanner from "../../src/components/PageBanner";
import Layouts from "../../src/layouts/Layouts";
import Link from "next/link";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  console.log(context.params);
  const page = await fetch(
    `${process.env.api}/api/for-patient-pages?populate=*&filters[url][$eqi]=${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.token}`,
      },
    }
  )
    .then((res) => res.json())
    .then((res) => res.data[0]);

  return {
    props: {
      page,
    },
  };
};

const ForPatientGeneratedPage = ({ page }) => {
  return (
    <Layouts>
      <PageBanner title={page.attributes.page.title} />

      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <div
              dangerouslySetInnerHTML={{
                __html: page?.attributes?.page?.content,
              }}
            />
          </div>
          <div className="col-lg-4">
            <div className="primary-sidebar">
              <div className="widget latest-post-widget">
                <h4 className="widget-title">Latest News</h4>
                <div className="latest-post-loop">
                  <div className="single-post">
                    <div className="thumbnail">
                      <img
                        src="assets/img/blog/post-widget-1.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/blog/1">
                          <a>Build Seamless Spreadsheet Import Experience</a>
                        </Link>
                      </h6>
                      <span className="date">
                        <i className="far fa-calendar-alt" /> 25 May 2021
                      </span>
                    </div>
                  </div>
                  <div className="single-post">
                    <div className="thumbnail">
                      <img
                        src="assets/img/blog/post-widget-2.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/blog/1">
                          <a>Creating Online Environment Work Well Older</a>
                        </Link>
                      </h6>
                      <span className="date">
                        <i className="far fa-calendar-alt" /> 25 May 2021
                      </span>
                    </div>
                  </div>
                  <div className="single-post">
                    <div className="thumbnail">
                      <img
                        src="assets/img/blog/post-widget-3.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/blog/1">
                          <a>Signs Website Feels More Haunted House</a>
                        </Link>
                      </h6>
                      <span className="date">
                        <i className="far fa-calendar-alt" /> 25 May 2021
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-sm-6">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default ForPatientGeneratedPage;

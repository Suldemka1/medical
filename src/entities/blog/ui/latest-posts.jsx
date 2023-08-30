import Link from "next/link";

const LatestPosts = () => {
  return (
    <section className="latest-blog-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8">
            <div className="section-heading mb-40">
              <span className="tagline">Latest News &amp; Blog</span>
              <h2 className="title">
                Get Every Single Updates For Medical &amp; Health
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center latest-blog-loop">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="latest-blog-one mt-30">
              <div className="blog-thumb">
                <img src="assets/img/latest-blog/01.jpg" alt="Thumb" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a href="#" className="blog-category">
                    Health
                  </a>
                  <a href="#" className="blog-date">
                    <i className="far fa-calendar-alt" /> 25 Aug 2021
                  </a>
                </div>
                <h4 className="blog-title">
                  <Link href="/blog/1">
                    <a>Comprehensive Worksite Health Program Built</a>
                  </Link>
                </h4>
                <div className="btn-area">
                  <Link href="/blog/1">
                    <a className="read-more-btn">
                      Read More <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="latest-blog-one mt-30">
              <div className="blog-thumb">
                <img src="assets/img/latest-blog/02.jpg" alt="Thumb" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a href="#" className="blog-category">
                    Medical
                  </a>
                  <a href="#" className="blog-date">
                    <i className="far fa-calendar-alt" /> 26 Aug 2021
                  </a>
                </div>
                <h4 className="blog-title">
                  <Link href="/blog/1">
                    <a>Speeding Up The Return on Your Healthcare</a>
                  </Link>
                </h4>
                <div className="btn-area">
                  <Link href="/blog/1">
                    <a className="read-more-btn">
                      Read More <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="latest-blog-one mt-30">
              <div className="blog-thumb">
                <img src="assets/img/latest-blog/03.jpg" alt="Thumb" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a href="#" className="blog-category">
                    Health
                  </a>
                  <a href="#" className="blog-date">
                    <i className="far fa-calendar-alt" /> 25 Aug 2021
                  </a>
                </div>
                <h4 className="blog-title">
                  <Link href="/blog/1">
                    <a>Comprehensive Worksite Health Program Built</a>
                  </Link>
                </h4>
                <div className="btn-area">
                  <Link href="/blog/1">
                    <a className="read-more-btn">
                      Read More <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { LatestPosts };

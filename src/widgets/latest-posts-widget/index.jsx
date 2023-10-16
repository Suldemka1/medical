import Link from "next/link"

const LatestPostsWidget = ({ latestPosts }) => {
    return <div className="widget latest-post-widget">
        <h4 className="widget-title">Последние новости</h4>
        <div className="latest-post-loop">
            {
                latestPosts.map((item, index) => {
                    return (
                        <div key={index} className="single-post">
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
}

export { LatestPostsWidget }
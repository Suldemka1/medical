import { useEffect, useState } from "react";
import Link from "next/link";

const PostCard = ({ variant }) => {
  const [state, setState] = useState();

  useEffect(() => {
    switch (variant) {
      case "dark":
        setState("bg-dark-post");
        break;
      case "thumbnail":
        setState("no-thumbnail");
        break;
      default:
        setState("");
    }
  }, []);

  return (
    <div className={`single-blog-post ${state}`}>
      <div className="post-thumbnail">
        <img src="assets/img/blog/01.jpg" alt="Image" />
        <Link href="/blog/1">
          <a className="post-link">
            <i className="fas fa-arrow-right" />
          </a>
        </Link>
      </div>
      <div className="post-content">
        <a href="#" className="post-author">
          <img src="assets/img/blog/user.png" alt="User" />
          Raymond E. Quick
        </a>
        <h3 className="post-title">
          <Link href="/blog/1">
            <a>
              Everything You Need to Know About &amp; How to Deal With Back Pain
              During.
            </a>
          </Link>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </p>
        <ul className="post-meta">
          <li>
            <a href="#">
              <i className="far fa-calendar-alt" />
              25 Jan 2021
            </a>
          </li>
          <li>
            <a href="#">
              <i className="far fa-comments" />
              Com (05)
            </a>
          </li>
          <li className="post-share">
            <a href="#">
              <i className="far fa-share-alt" />
              (03)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { PostCard };

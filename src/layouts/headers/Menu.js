import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/">Home One</Link>
    </li>
    <li>
      <Link href="/index-two">Home Two</Link>
    </li>
    <li>
      <Link href="/index-three">Home Three</Link>
    </li>
    <li>
      <Link href="/index-four">Home Four</Link>
    </li>
    <li>
      <Link href="/index-five">Home Five</Link>
    </li>
  </Fragment>
);
export const Pages = () => (
  <Fragment>
    <li>
      <Link href="/pricing">Платные медицинские услуги</Link>
    </li>
    <li>
      <Link href="/faq">Help &amp; FAQ</Link>
    </li>
    <li>
      <Link href="/gallery">Галерея</Link>
    </li>
    <li>
      <Link href="/appointments">Appointment</Link>
    </li>
  </Fragment>
);
export const Services = () => (
  <Fragment>
    <li>
      <Link href="/service">Service One</Link>
    </li>
    <li>
      <Link href="/service-two">Service Two</Link>
    </li>
    <li>
      <Link href="/service/1">Service Details</Link>
    </li>
  </Fragment>
);
export const Doctor = () => (
  <Fragment>
    <li>
      <Link href="/doctor">Doctor</Link>
    </li>
    <li>
      <Link href="/doctor/1">Doctor Details</Link>
    </li>
  </Fragment>
);
export const Blog = () => (
  <Fragment>
    <li>
      <Link href="/blog">Blog Standard</Link>
    </li>
    <li>
      <Link href="/blog/1">Blog Details</Link>
    </li>
  </Fragment>
);
export const Shop = () => (
  <Fragment>
    <li>
      <Link href="/shop">Shop</Link>
    </li>
    <li>
      <Link href="/product-details">Shop Details</Link>
    </li>
  </Fragment>
);

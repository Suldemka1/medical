import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useRoutes } from "../../shared/hooks/useRoutes";

export const Home = () => (
  <Fragment>
    {/* <li>
      <Link href="/">Главная вариант 1</Link>
    </li>
    <li>
      <Link href="/index-two">Главная вариант 2</Link>
    </li>
    <li>
      <Link href="/index-three">Главная вариант 3</Link>
    </li>
    <li>
      <Link href="/index-four">Главная вариант 4</Link>
    </li>
    <li>
      <Link href="/index-five">Главная вариант 5</Link>
    </li> */}
  </Fragment>
);

export const Pages = () => {
  const routes = useRoutes("about_pages")
  return (
  <Fragment>
    {
        routes?.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/about/${item.url}`}>{item.title}</Link>
            </li>
          )
        })
      }
    {/* <li>
      <Link href="/about">О больнице</Link>
    </li>
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
    </li> */}
  </Fragment>
);
} 

export const ForPatient = () => {
  const routes = useRoutes("for_patient")
  // const [routes, setRoutes] = useState([])

  // const getRoutes = async () => {
  //   await fetch(`${process.env.api}/items/for_patient`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${process.env.token}`,
  //       },
  //     })
  //     .then((res) => res.json())
  //     .then((res) => setRoutes(res.data))
  // }

  // useEffect(() => {
  //   getRoutes()
  // }, [])

  return (
    <Fragment>
      {
        routes?.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/for-patient/${item.url}`}>{item.title}</Link>
            </li>
          )
        })
      }
    </Fragment>
  )
}


export const Services = () => {
  const routes = useRoutes("about_pages")
  return (
  <Fragment>
    <li>
      <Link href="/service">Услуги по ОМС</Link>
    </li>
    <li>
      <Link href="/service/paid-services">Платные медицинские услуги</Link>
    </li>
    <li>
      <Link href="/service/1">Пример страницы услуги</Link>
    </li>
  </Fragment>
);
} 

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

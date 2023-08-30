import Link from "next/link";
import React, { useState } from "react";
import { Blog, Doctor, Home, Pages, Services, Shop } from "./Menu";

const MobileMenu = ({ mobileTrigger, setMobileTrigger }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
    setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <div
      className={`slide-panel mobile-slide-panel ${mobileTrigger ? "show-panel" : ""
        }`}
    >
      <div className="panel-overlay" onClick={() => setMobileTrigger()} />
      <div className="panel-inner">
        <div className="panel-logo">
          <h1>ГБУЗ РТ &quot;Инфекционная больница&quot;</h1>

          {/* <img src="assets/img/logo.png" alt="" /> */}
        </div>
        <nav className="mobile-menu">
          <ul className="primary-menu">
            <li className="active">
              <a href="#">
                Главная
                <span
                  className="dd-trigger"
                  onClick={() => activeMenuSet("demo")}
                >
                  <i className="fas fa-angle-down" />
                </span>
              </a>
              <ul className="sub-menu" style={activeLi("demo")}>
                <Home />
              </ul>
            </li>
            <li>
              <Link href="/about">О больнице</Link>
            </li>
            <li>
              <a href="#">
                Страницы
                <span
                  className="dd-trigger"
                  onClick={() => activeMenuSet("Pages")}
                >
                  <i className="fas fa-angle-down" />
                </span>
              </a>
              <ul className="sub-menu" style={activeLi("Pages")}>
                <Services />

                <Pages />
              </ul>
            </li>
            <li>
              <a href="#">
                Врачи
                <span
                  className="dd-trigger"
                  onClick={() => activeMenuSet("Doctor")}
                >
                  <i className="fas fa-angle-down" />
                </span>
              </a>
              <ul className="sub-menu" style={activeLi("Doctor")}>
                <Doctor />
              </ul>
            </li>
            <li>
              <a href="#">
                Блог
                <span
                  className="dd-trigger"
                  onClick={() => activeMenuSet("Blog")}
                >
                  <i className="fas fa-angle-down" />
                </span>
              </a>
              <ul className="sub-menu" style={activeLi("Blog")}>
                <Blog />
              </ul>
            </li>
            {/* <li>
              <a href="#">
                Shop
                <span
                  className="dd-trigger"
                  onClick={() => activeMenuSet("shop")}
                >
                  <i className="fas fa-angle-down" />
                </span>
              </a>
              <ul className="sub-menu" style={activeLi("shop")}>
                <Shop />
              </ul>
            </li> */}
            <li className="active">
              <Link href="/contact">Контакты</Link>
            </li>
          </ul>
        </nav>
        <a href="#" className="panel-close" onClick={() => setMobileTrigger()}>
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default MobileMenu;

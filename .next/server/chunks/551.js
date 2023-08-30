"use strict";
exports.id = 551;
exports.ids = [551];
exports.modules = {

/***/ 8551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layouts)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(1939);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/ScrollTop.js




const ScrollTop = () => {
  (0,external_react_.useEffect)(() => {
    (0,utils/* scrollTopFun */.h1)();
  }, []);

  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx("a", {
    className: "back-to-top",
    href: "#",
    id: "scroll-top",
    onClick: () => onClick(),
    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
      className: "far fa-angle-up"
    })
  });
};

/* harmony default export */ const components_ScrollTop = (ScrollTop);
;// CONCATENATED MODULE: ./src/layouts/footers/Footer1.js




const Footer1 = ({
  noNewsletters
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: `template-footer ${noNewsletters ? "" : "have-cta-boxed-one"}`,
    children: [!noNewsletters && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "cta-boxed-one",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "cta-inner bg-color-secondary bg-size-cover blend-mode-multiply",
          style: {
            backgroundImage: "url(assets/img/cta-img/cta-boxed-bg-1.jpg)"
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row justify-content-center",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-xl-6 col-lg-8 col-md-10",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "cta-content text-center",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "section-heading heading-white",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "tagline",
                    children: "Get Free Consultations"
                  }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                    className: "title",
                    children: "Looking a Doctors to Get Your Services"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  className: "cta-buttons d-flex justify-content-center flex-wrap",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      href: "#",
                      className: "template-btn template-btn-white",
                      children: ["Get Free Quote ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "far fa-plus"
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      href: "#",
                      className: "template-btn template-btn-bordered",
                      children: ["Get Appointment ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "far fa-plus"
                      })]
                    })
                  })]
                })]
              })
            })
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "footer-inner bg-color-grey",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "footer-widgets",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-3 col-md-8",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "widget text-widget",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "footer-logo",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "assets/img/logo.png",
                    alt: "Medibo"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Sed ut perspi unde omniste natus error sit voluptatem acc doloremque laudantium"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  className: "contact-list",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      href: "https://goo.gl/maps/inpkL6wUZqMR3opX7",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "far fa-map-marker-alt"
                      }), "55 Main Road, USA"]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      href: "mailto:support@gmail.com",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "far fa-envelope"
                      }), "support@gmail.com"]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      href: "tel:01267899",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "far fa-phone"
                      }), "+012 (345) 678 99"]
                    })
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-6",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-xl-5 col-md-6",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "widget nav-widget",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                      className: "widget-title",
                      children: "Popular Services"
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                      className: "nav-links",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          children: "Orthopedic Care"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          children: "Gynecology Care"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          children: "Cardiology Care"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          children: "Dentistry Care"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          children: "Gastroenterology"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          children: "Urgent Care"
                        })
                      })]
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-xl-7 col-md-6",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "widget instagram-widget",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                      className: "widget-title",
                      children: "Photo Gallery"
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "instagram-images",
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "single-image",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "assets/img/instagram/01.jpg",
                          alt: "Instagram"
                        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "fab fa-instagram"
                          })
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "single-image",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "assets/img/instagram/02.jpg",
                          alt: "Instagram"
                        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "fab fa-instagram"
                          })
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "single-image",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "assets/img/instagram/03.jpg",
                          alt: "Instagram"
                        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "fab fa-instagram"
                          })
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "single-image",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "assets/img/instagram/04.jpg",
                          alt: "Instagram"
                        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "fab fa-instagram"
                          })
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "single-image",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "assets/img/instagram/05.jpg",
                          alt: "Instagram"
                        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "fab fa-instagram"
                          })
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "single-image",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "assets/img/instagram/06.jpg",
                          alt: "Instagram"
                        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "fab fa-instagram"
                          })
                        })]
                      })]
                    })]
                  })
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-3 col-md-10",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "widget newsletters-widget",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                  className: "widget-title",
                  children: "Newsletters"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: ["Sed ut perspiciatis unde omniste ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " natus error sit voluptatem"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
                  onSubmit: e => e.preventDefault(),
                  action: "#",
                  className: "newsletters-form",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "email",
                    placeholder: "Email Address"
                  }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                    type: "submit",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "far fa-arrow-right"
                    })
                  })]
                })]
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "copyright-area",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["\xA9 2021 ", /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              children: "Seeva"
            }), ". All Rights Reserved"]
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const footers_Footer1 = (Footer1);
;// CONCATENATED MODULE: ./src/layouts/footers/Footer2.js




const Footer2 = ({
  noNewsletters
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: `template-footer template-footer-white ${noNewsletters ? "" : "have-cta-boxes-two"}`,
    children: [!noNewsletters && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "cta-boxes-wrapper",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row justify-content-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30",
              style: {
                backgroundImage: "url(assets/img/cta-img/cta-boxed-2-1.jpg)"
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                className: "cta-title",
                children: "Looking a Doctors For Health Care"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#",
                className: "template-btn template-btn-bordered",
                children: ["Find Doctor ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "far fa-plus"
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30",
              style: {
                backgroundImage: "url(assets/img/cta-img/cta-boxed-2-2.jpg)"
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                className: "cta-title",
                children: "Make Appointment Online (24/7)"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#",
                className: "template-btn template-btn-bordered",
                children: ["Appointment ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "far fa-plus"
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-4 col-md-8",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30",
              style: {
                backgroundImage: "url(assets/img/cta-img/cta-boxed-2-3.jpg)"
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                className: "cta-title",
                children: "Innovative Psychial Therapist"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#",
                className: "template-btn template-btn-bordered",
                children: ["Find Doctor ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "far fa-plus"
                })]
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "footer-inner bg-color-primary",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "footer-widgets",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-3 col-md-8",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "widget text-widget",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "footer-logo",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "assets/img/logo-white.png",
                    alt: "Medibo"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Sed ut perspi unde omniste natus error sit voluptatem acc doloremque laudantium"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  className: "contact-list",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      href: "https://goo.gl/maps/inpkL6wUZqMR3opX7",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "far fa-map-marker-alt"
                      }), "55 Main Road, USA"]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      href: "mailto:support@gmail.com",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "far fa-envelope"
                      }), "support@gmail.com"]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      href: "tel:01267899",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "far fa-phone"
                      }), "+012 (345) 678 99"]
                    })
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-6",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "row justify-content-center",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-xl-5 col-sm-6",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "d-flex justify-content-lg-center",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "widget nav-widget",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                        className: "widget-title",
                        children: "Popular Services"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                        className: "nav-links",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Orthopedic Care"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Gynecology Care"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Cardiology Care"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Dentistry Care"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Gastroenterology"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Urgent Care"
                          })
                        })]
                      })]
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-xl-5 col-sm-6",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "d-flex justify-content-lg-center",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "widget nav-widget",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                        className: "widget-title",
                        children: "About Us"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                        className: "nav-links",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Success Story"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Need a Career ?"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Privacy Policy"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Need Support ?"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Doctors"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Latest News"
                          })
                        })]
                      })]
                    })
                  })
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-3 col-md-10",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "widget newsletters-widget",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                  className: "widget-title",
                  children: "Newsletters"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: ["Sed ut perspiciatis unde omniste ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " natus error sit voluptatem"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
                  onSubmit: e => e.preventDefault(),
                  action: "#",
                  className: "newsletters-form",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "email",
                    placeholder: "Email Address"
                  }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                    type: "submit",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "far fa-arrow-right"
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "opening-notice mt-30",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "far fa-clock"
                    }), " Opening Hours"]
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "Sun - Friday, 08:00 am - 05:00 pm"
                  })]
                })]
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "copyright-area",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["\xA9 2021 ", /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              children: "Seeva"
            }), ". All Rights Reserved"]
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const footers_Footer2 = (Footer2);
;// CONCATENATED MODULE: ./src/layouts/footers/Footer.js





const Footer = ({
  footer,
  noNewsletters
}) => {
  const getFooter = () => {
    switch (footer) {
      case 1:
        return /*#__PURE__*/jsx_runtime_.jsx(footers_Footer1, {
          noNewsletters: noNewsletters
        });

      case 2:
        return /*#__PURE__*/jsx_runtime_.jsx(footers_Footer2, {
          noNewsletters: noNewsletters
        });

      default:
        return /*#__PURE__*/jsx_runtime_.jsx(footers_Footer1, {
          noNewsletters: noNewsletters
        });
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: getFooter()
  });
};

/* harmony default export */ const footers_Footer = (Footer);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/layouts/headers/Menu.js
var Menu = __webpack_require__(1386);
// EXTERNAL MODULE: ./src/layouts/headers/MobileMenu.js
var MobileMenu = __webpack_require__(9298);
// EXTERNAL MODULE: ./src/layouts/headers/SlidePanel.js
var SlidePanel = __webpack_require__(5980);
;// CONCATENATED MODULE: ./src/layouts/headers/Header1.js








const Header1 = ({
  headerTopbar,
  position
}) => {
  const {
    0: sidebarTrigger,
    1: setSidebarTrigger
  } = (0,external_react_.useState)(false);
  const {
    0: mobileTrigger,
    1: setMobileTrigger
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: `template-header sticky-header header-one ${position ? position + "-header" : ""}`,
    children: [headerTopbar && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "header-topbar d-none d-md-block",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container-fluid container-1400",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row align-items-center justify-content-between",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-4",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "topbar-menu",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/faq",
                  children: "\u0427\u0410\u0412\u041E"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/gallery",
                  children: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/about",
                  children: "\u041E \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0435"
                })
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-8",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "contact-info",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  href: "#",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "far fa-envelope"
                  }), " Email : hotmail@gmail.com"]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  href: "#",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "far fa-phone"
                  }), " \u0422\u0435\u043B\u0435\u0444\u043E\u043D : +7-999-555-6789"]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "social-icons",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-facebook-f"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-twitter"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-youtube"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-linkedin-in"
                    })
                  })]
                })
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container-fluid container-1400",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "header-navigation",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "header-left",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "site-logo",
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
                children: "\u0413\u0411\u0423\u0417 \u0420\u0422 \"\u0418\u043D\u0444\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0430\""
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
            className: "site-menu menu-gap-left d-none d-xl-block",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "primary-menu",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    children: ["\u0413\u043B\u0430\u0432\u043D\u0430\u044F", /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "dd-trigger",
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "far fa-plus"
                      })
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                  className: "sub-menu",
                  children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* Home */.SK, {})
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: "\u041E \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0435"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  className: "sub-menu",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                      href: "about",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        children: "\u041A\u0440\u0430\u0442\u043A\u0430\u044F \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430"
                      })
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                      href: "service",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                        children: ["\u0423\u0441\u043B\u0443\u0433\u0438", /*#__PURE__*/jsx_runtime_.jsx("span", {
                          className: "dd-trigger",
                          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "far fa-plus"
                          })
                        })]
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                      className: "sub-menu",
                      children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* Services */.K9, {})
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx(Menu/* Pages */.iY, {})]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/doctor",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "\u041D\u0430\u0448\u0438 \u0432\u0440\u0430\u0447\u0438"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "blog",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "\u0411\u043B\u043E\u0433"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/contact",
                  children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
                })
              })]
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header-right",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "extra-icons",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "d-none d-sm-block",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "header-search-area",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
                  onSubmit: e => e.preventDefault(),
                  action: "#",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "search",
                    placeholder: "\u041F\u043E\u0438\u0441\u043A"
                  }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                    type: "submit",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "far fa-search"
                    })
                  })]
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "d-none d-xl-block",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "off-canvas-btn style-two",
                onClick: () => setSidebarTrigger(true),
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {})
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "d-xl-none",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#",
                className: "navbar-toggler",
                onClick: () => setMobileTrigger(true),
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {})]
              })
            })]
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(SlidePanel/* default */.Z, {
      sidebarTrigger: sidebarTrigger,
      setSidebarTrigger: () => setSidebarTrigger(false)
    }), /*#__PURE__*/jsx_runtime_.jsx(MobileMenu/* default */.Z, {
      mobileTrigger: mobileTrigger,
      setMobileTrigger: () => setMobileTrigger(false)
    })]
  });
};

/* harmony default export */ const headers_Header1 = (Header1);
;// CONCATENATED MODULE: ./src/layouts/headers/HeadersLayouts.js




const HeadersLayouts = ({
  headerTopbar,
  position
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(headers_Header1, {
      headerTopbar: headerTopbar,
      position: position
    })
  });
};

/* harmony default export */ const headers_HeadersLayouts = (HeadersLayouts);
;// CONCATENATED MODULE: ./src/layouts/Layouts.js








const Layouts = ({
  children,
  footer,
  headerTopbar,
  noNewsletters,
  position,
  noheader,
  noFooter
}) => {
  (0,external_react_.useEffect)(() => {
    (0,utils/* animation */.oQ)();
    (0,utils/* niceSelect */.ks)();
    (0,utils/* stickyNav */.h4)();
    (0,utils/* progressBar */.qT)();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [!noheader && /*#__PURE__*/jsx_runtime_.jsx(headers_HeadersLayouts, {
      headerTopbar: headerTopbar,
      position: position
    }), children, !noFooter && /*#__PURE__*/jsx_runtime_.jsx(footers_Footer, {
      footer: footer,
      noNewsletters: noNewsletters
    }), /*#__PURE__*/jsx_runtime_.jsx(components_ScrollTop, {})]
  });
};

/* harmony default export */ const layouts_Layouts = (Layouts);

/***/ }),

/***/ 1386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K9": () => (/* binding */ Services),
/* harmony export */   "SK": () => (/* binding */ Home),
/* harmony export */   "iY": () => (/* binding */ Pages),
/* harmony export */   "k3": () => (/* binding */ Shop),
/* harmony export */   "l3": () => (/* binding */ Blog),
/* harmony export */   "mF": () => (/* binding */ Doctor)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Home = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/",
      children: "Home One"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/index-two",
      children: "Home Two"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/index-three",
      children: "Home Three"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/index-four",
      children: "Home Four"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/index-five",
      children: "Home Five"
    })
  })]
});
const Pages = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/pricing",
      children: "\u041F\u043B\u0430\u0442\u043D\u044B\u0435 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/faq",
      children: "Help & FAQ"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/gallery",
      children: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/appointments",
      children: "Appointment"
    })
  })]
});
const Services = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/service",
      children: "Service One"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/service-two",
      children: "Service Two"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/service/1",
      children: "Service Details"
    })
  })]
});
const Doctor = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/doctor",
      children: "Doctor"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/doctor/1",
      children: "Doctor Details"
    })
  })]
});
const Blog = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/blog",
      children: "Blog Standard"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/blog/1",
      children: "Blog Details"
    })
  })]
});
const Shop = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/shop",
      children: "Shop"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/product-details",
      children: "Shop Details"
    })
  })]
});

/***/ }),

/***/ 9298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1386);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const MobileMenu = ({
  mobileTrigger,
  setMobileTrigger
}) => {
  const {
    0: activeMenu,
    1: setActiveMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  const activeMenuSet = value => setActiveMenu(activeMenu === value ? "" : value),
        activeLi = value => value === activeMenu ? {
    display: "block"
  } : {
    display: "none"
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: `slide-panel mobile-slide-panel ${mobileTrigger ? "show-panel" : ""}`,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "panel-overlay",
      onClick: () => setMobileTrigger()
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "panel-inner",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "panel-logo",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
          children: "\u0413\u0411\u0423\u0417 \u0420\u0422 \"\u0418\u043D\u0444\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0430\""
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("nav", {
        className: "mobile-menu",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
          className: "primary-menu",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
            className: "active",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: "#",
              children: ["\u0413\u043B\u0430\u0432\u043D\u0430\u044F", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                className: "dd-trigger",
                onClick: () => activeMenuSet("demo"),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                  className: "fas fa-angle-down"
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
              className: "sub-menu",
              style: activeLi("demo"),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Menu__WEBPACK_IMPORTED_MODULE_2__/* .Home */ .SK, {})
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/about",
              children: "\u041E \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0435"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: "#",
              children: ["\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                className: "dd-trigger",
                onClick: () => activeMenuSet("Pages"),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                  className: "fas fa-angle-down"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
              className: "sub-menu",
              style: activeLi("Pages"),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Menu__WEBPACK_IMPORTED_MODULE_2__/* .Services */ .K9, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Menu__WEBPACK_IMPORTED_MODULE_2__/* .Pages */ .iY, {})]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: "#",
              children: ["\u0412\u0440\u0430\u0447\u0438", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                className: "dd-trigger",
                onClick: () => activeMenuSet("Doctor"),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                  className: "fas fa-angle-down"
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
              className: "sub-menu",
              style: activeLi("Doctor"),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Menu__WEBPACK_IMPORTED_MODULE_2__/* .Doctor */ .mF, {})
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: "#",
              children: ["\u0411\u043B\u043E\u0433", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                className: "dd-trigger",
                onClick: () => activeMenuSet("Blog"),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                  className: "fas fa-angle-down"
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
              className: "sub-menu",
              style: activeLi("Blog"),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Menu__WEBPACK_IMPORTED_MODULE_2__/* .Blog */ .l3, {})
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
            className: "active",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/contact",
              children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
        href: "#",
        className: "panel-close",
        onClick: () => setMobileTrigger(),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
          className: "fal fa-times"
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);

/***/ }),

/***/ 5980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const SlidePanel = ({
  sidebarTrigger,
  setSidebarTrigger
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: `slide-panel off-canvas-panel ${sidebarTrigger ? "show-panel" : ""}`,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "panel-overlay",
      onClick: () => setSidebarTrigger()
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "panel-inner",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "canvas-logo",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
          src: "assets/img/logo.png",
          alt: ""
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "about-us",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h5", {
          className: "canvas-widget-title",
          children: "About Us"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
          children: "Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperams eaque ipsa quae abillo."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "contact-us",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h5", {
          className: "canvas-widget-title",
          children: "Contact Us"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("i", {
              className: "far fa-map-marker-alt"
            }), "354 Oakridge, Camden NJ 08102 - USA"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("i", {
              className: "far fa-envelope-open"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
              href: "mailto:support@qolle.com",
              children: "support@seeva.com"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
              href: "mailto:info@qolle.com",
              children: "info@seeva.com"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("i", {
              className: "far fa-phone"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
              href: "tel:+01234567899",
              children: "+012 (345) 678 99"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
              href: "tel:+8563214",
              children: "+8563214"
            })]
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
        href: "#",
        className: "panel-close",
        onClick: () => setSidebarTrigger(),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("i", {
          className: "fal fa-times"
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlidePanel);

/***/ }),

/***/ 1939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h1": () => (/* binding */ scrollTopFun),
/* harmony export */   "h4": () => (/* binding */ stickyNav),
/* harmony export */   "ks": () => (/* binding */ niceSelect),
/* harmony export */   "oA": () => (/* binding */ pagination),
/* harmony export */   "oQ": () => (/* binding */ animation),
/* harmony export */   "ot": () => (/* binding */ getPagination),
/* harmony export */   "qT": () => (/* binding */ progressBar)
/* harmony export */ });
const animation = () => {
  if (false) {}

  new WOW.WOW().init();
};

const progressBar_ = () => {
  const progressBarLists = document.querySelectorAll(".progress-bar-wrapper");
  const triggerBottom = window.innerHeight / 5 * 5;

  if (progressBarLists) {
    progressBarLists.forEach(element => {
      let percentage = element.getAttribute("data-percentage"),
          progressLineWrap = element.getElementsByClassName("progress-line-wrap"),
          progressLine = element.getElementsByClassName("progress-line"),
          progressLineWidth = percentage + "%",
          progressLineBg = element.getAttribute("data-line-bg"),
          progressLineColor = element.getAttribute("data-line-color");
      progressLineWrap[0].style.backgroundColor = progressLineBg;
      progressLine[0].style.backgroundColor = progressLineColor;
      const progressTop = element.getBoundingClientRect().top;

      if (progressTop < triggerBottom) {
        progressLine[0].style.width = progressLineWidth;
      } else {
        progressLine[0].style.width = 0;
      }
    });
  }
};

const progressBar = () => window.addEventListener("scroll", progressBar_);
const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);

  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};
const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort)).fill().map((_, idx) => idx + 1);
  return arr;
};
const niceSelect = () => {
  const select = document.querySelectorAll("select");
  select.forEach(element => {
    let option = element.querySelectorAll("option");

    function insertAfter(referenceNode, newNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    element.style.display = "none";
    var el = document.createElement("div");
    insertAfter(element, el);
    el.className = "nice-select wide";
    let ul = document.createElement("ul"),
        span = document.createElement("span");
    ul.classList.add("list");
    span.classList.add("current");
    el.appendChild(ul);
    el.appendChild(span);
    el.addEventListener("click", () => {
      el.classList.toggle("open");
    });
    document.addEventListener("click", e => {
      if (!el.contains(e.target)) {
        el.classList.remove("open");
      }
    });
    option.forEach(opt => {
      var li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = opt.innerText;
      li.className = "option";
      let defultValue = opt.getAttribute("data-dsplay");
      let selected = opt.getAttribute("selected");
      let disabled = opt.getAttribute("disabled");

      if (defultValue || selected !== null || disabled !== null) {
        li.className = "option focus";
        span.innerText = opt.innerText;
      } else {
        span.innerText = option[0].innerText;
      }

      li.addEventListener("click", () => {
        if (disabled == null) {
          span.innerHTML = opt.innerText;
        }
      });
    });
  });
};

const stickyNav_ = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll("header");

  for (let i = 0; i < stickys.length; i++) {
    const sticky = stickys[i];

    if (sticky) {
      if (offset > 60) {
        sticky.classList.add("sticky-on");
      } else {
        sticky.classList.remove("sticky-on");
      }
    }
  }
};

const stickyNav = () => window.addEventListener("scroll", stickyNav_);
const scrollTopFun = () => {
  let scrollUp = document.getElementById("scroll-top"),
      lastScrollTop = 0;
  window.addEventListener("scroll", () => {
    let st = window.scrollY;

    if (st > 110) {
      scrollUp.classList.add("active");
    } else {
      scrollUp.classList.remove("active");
    }
  });
};

/***/ })

};
;
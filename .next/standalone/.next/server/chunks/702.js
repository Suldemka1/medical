"use strict";
exports.id = 702;
exports.ids = [702];
exports.modules = {

/***/ 9702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s4": () => (/* reexport */ DoctorCard),
  "I$": () => (/* reexport */ DoctorCardS),
  "lP": () => (/* reexport */ DoctorListMain)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/entities/doctor/ui/card.js




const DoctorCard = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "col-lg-4 col-md-6 col-sm-9",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "doctor-box-one mb-30",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "doctor-photo",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "assets/img/doctors/01.jpg",
          alt: "Image"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "doctor-information",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
          className: "name",
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/doctor/1",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Lee S. Williamson"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "specialty",
          children: "Cardiology"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "social-links",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fab fa-facebook-f"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fab fa-twitter"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fab fa-youtube"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fab fa-linkedin"
              })
            })
          })]
        })]
      })]
    })
  });
};


;// CONCATENATED MODULE: ./src/entities/doctor/ui/card/card_small.js




const DoctorCardS = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "col-xl-3 col-lg-4 col-sm-6",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "doctor-box-three mt-30 wow fadeInUp",
      "data-wow-delay": "0.3s",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "doctor-photo",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "assets/img/doctors/18.jpg",
          alt: "Image"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "doctor-information",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
          className: "name",
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/doctor/1",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Allan K. Simons"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "specialty",
          children: "Dental Specialist"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "social-links",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fab fa-facebook-f"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fab fa-twitter"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fab fa-youtube"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fab fa-linkedin"
              })
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "plus-icon",
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "far fa-plus"
          })
        })]
      })]
    })
  });
};


;// CONCATENATED MODULE: ./src/entities/doctor/ui/list/doctor-list.jsx




const DoctorListMain = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "doctors-section section-gap",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row justify-content-between align-items-center mb-40",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-5 col-md-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "section-heading",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "tagline",
              children: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0432\u0440\u0430\u0447\u0438"
            }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
              className: "title",
              children: "\u041E\u043F\u044B\u0442\u043D\u044B\u0435 \u0432\u0440\u0430\u0447\u0438"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-auto",
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/doctors",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "template-btn template-btn-primary mt-sm-30 wow fadeInRight",
              "data-wow-delay": "0.3s",
              children: "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u0440\u0438\u0435\u043C"
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row doctors-loop justify-content-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "doctor-box-one bordered-style mt-30 wow fadeInUp",
            "data-wow-delay": "0.3s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "doctor-photo",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "assets/img/doctors/10.jpg",
                alt: "Image"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "doctor-information",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                className: "name",
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/doctor/1",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Lee S. Williamson"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "specialty",
                children: "Cardiology"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "social-links",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-facebook-f"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-twitter"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-youtube"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-linkedin"
                    })
                  })
                })]
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "doctor-box-one bordered-style mt-30 wow fadeInUp",
            "data-wow-delay": "0.4s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "doctor-photo",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "assets/img/doctors/11.jpg",
                alt: "Image"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "doctor-information",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                className: "name",
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/doctor/1",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Greg S. Grinstead"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "specialty",
                children: "Neurology"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "social-links",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-facebook-f"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-twitter"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-youtube"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-linkedin"
                    })
                  })
                })]
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "doctor-box-one bordered-style mt-30 wow fadeInUp",
            "data-wow-delay": "0.5s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "doctor-photo",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "assets/img/doctors/12.jpg",
                alt: "Image"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "doctor-information",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                className: "name",
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/doctor/1",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Roger K. Jackson"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "specialty",
                children: "Orthopedics"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "social-links",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-facebook-f"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-twitter"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-youtube"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-linkedin"
                    })
                  })
                })]
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "doctor-box-one bordered-style mt-30 wow fadeInUp",
            "data-wow-delay": "0.6s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "doctor-photo",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "assets/img/doctors/13.jpg",
                alt: "Image"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "doctor-information",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                className: "name",
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/doctor/1",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Raymudo M. Drake"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "specialty",
                children: "Covid - 19"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "social-links",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-facebook-f"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-twitter"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-youtube"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-linkedin"
                    })
                  })
                })]
              })]
            })]
          })
        })]
      })]
    })
  });
};


;// CONCATENATED MODULE: ./src/entities/index.js




/***/ })

};
;
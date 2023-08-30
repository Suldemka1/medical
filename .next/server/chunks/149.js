"use strict";
exports.id = 149;
exports.ids = [149];
exports.modules = {

/***/ 4149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* reexport */ LatestPosts),
  "y": () => (/* reexport */ PostCard)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/entities/blog/ui/post-card.jsx





const PostCard = ({
  variant
}) => {
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
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
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `single-blog-post ${state}`,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "post-thumbnail",
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "assets/img/blog/01.jpg",
        alt: "Image"
      }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/blog/1",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "post-link",
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "fas fa-arrow-right"
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "post-content",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        href: "#",
        className: "post-author",
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "assets/img/blog/user.png",
          alt: "User"
        }), "Raymond E. Quick"]
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "post-title",
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/blog/1",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Everything You Need to Know About & How to Deal With Back Pain During."
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "post-meta",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: "#",
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "far fa-calendar-alt"
            }), "25 Jan 2021"]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: "#",
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "far fa-comments"
            }), "Com (05)"]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "post-share",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: "#",
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "far fa-share-alt"
            }), "(03)"]
          })
        })]
      })]
    })]
  });
};


;// CONCATENATED MODULE: ./src/entities/blog/ui/latest-posts.jsx




const LatestPosts = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "latest-blog-section section-gap",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 col-md-8",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "section-heading mb-40",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "tagline",
              children: "Latest News & Blog"
            }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
              className: "title",
              children: "Get Every Single Updates For Medical & Health"
            })]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row justify-content-center latest-blog-loop",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 col-md-6 col-sm-10",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "latest-blog-one mt-30",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "blog-thumb",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "assets/img/latest-blog/01.jpg",
                alt: "Thumb"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "blog-content",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "blog-meta",
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  className: "blog-category",
                  children: "Health"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  href: "#",
                  className: "blog-date",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "far fa-calendar-alt"
                  }), " 25 Aug 2021"]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "blog-title",
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/blog/1",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Comprehensive Worksite Health Program Built"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "btn-area",
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/blog/1",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: "read-more-btn",
                    children: ["Read More ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "far fa-plus"
                    })]
                  })
                })
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 col-md-6 col-sm-10",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "latest-blog-one mt-30",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "blog-thumb",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "assets/img/latest-blog/02.jpg",
                alt: "Thumb"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "blog-content",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "blog-meta",
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  className: "blog-category",
                  children: "Medical"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  href: "#",
                  className: "blog-date",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "far fa-calendar-alt"
                  }), " 26 Aug 2021"]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "blog-title",
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/blog/1",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Speeding Up The Return on Your Healthcare"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "btn-area",
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/blog/1",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: "read-more-btn",
                    children: ["Read More ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "far fa-plus"
                    })]
                  })
                })
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 col-md-6 col-sm-10",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "latest-blog-one mt-30",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "blog-thumb",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "assets/img/latest-blog/03.jpg",
                alt: "Thumb"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "blog-content",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "blog-meta",
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  className: "blog-category",
                  children: "Health"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  href: "#",
                  className: "blog-date",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "far fa-calendar-alt"
                  }), " 25 Aug 2021"]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "blog-title",
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/blog/1",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Comprehensive Worksite Health Program Built"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "btn-area",
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/blog/1",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: "read-more-btn",
                    children: ["Read More ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "far fa-plus"
                    })]
                  })
                })
              })]
            })]
          })
        })]
      })]
    })
  });
};


;// CONCATENATED MODULE: ./src/entities/blog/index.js



/***/ })

};
;
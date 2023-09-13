exports.id = 268;
exports.ids = [268];
exports.modules = {

/***/ 2993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/icons-material/CookieOutlined"
var CookieOutlined_ = __webpack_require__(8094);
// EXTERNAL MODULE: external "@mui/icons-material/Close"
var Close_ = __webpack_require__(4173);
// EXTERNAL MODULE: external "posthog-js"
var external_posthog_js_ = __webpack_require__(8315);
;// CONCATENATED MODULE: ./src/component/home_page/cookies.js







function CookieBanner() {
    const [showBanner, setShowBanner] = useState(true); // new
    const acceptCookies = ()=>{
        posthog.opt_in_capturing(); // new
        setShowBanner(false); // new
    };
    const declineCookies = ()=>{
        posthog.opt_out_capturing(); // new
        setShowBanner(false); // new
    };
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            children: showBanner && /*#__PURE__*/ _jsx("div", {
                className: Styles.cookies,
                children: /*#__PURE__*/ _jsxs("div", {
                    className: Styles.spacebetween,
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            children: [
                                /*#__PURE__*/ _jsx(CookieOutlinedIcon, {
                                    sx: {
                                        marginRight: "10px"
                                    }
                                }),
                                "FXellence uses cookies to ensure you get the best experience on our website.",
                                " ",
                                /*#__PURE__*/ _jsx("a", {
                                    href: "privacy-policy.pdf",
                                    id: "notificationPolicyLink",
                                    target: "_blank",
                                    style: {
                                        textDecoration: "underline",
                                        color: "#9f30efFF"
                                    },
                                    children: "Learn More"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            children: [
                                /*#__PURE__*/ _jsx("button", {
                                    onClick: declineCookies,
                                    className: Styles.cookiesbutton,
                                    children: "Decline"
                                }),
                                /*#__PURE__*/ _jsx("button", {
                                    onClick: acceptCookies,
                                    className: Styles.cookiesbutton,
                                    children: "Allow All"
                                }),
                                /*#__PURE__*/ _jsx(CloseIcon, {
                                    sx: {
                                        marginLeft: "10px"
                                    }
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const cookies = ((/* unused pure expression or super */ null && (CookieBanner)));

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/pages/_app.js






function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.StyledEngineProvider, {
        injectFirst: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("script", {
                        src: "https://app.enzuzo.com/apps/enzuzo/static/js/__enzuzo-cookiebar.js?uuid=1921e622-314b-11ee-b2af-cf8cc1ab24a1"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "FXellence International Payments"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "keywords",
                        content: "International Payments, Send money abroad, FXellence, FXellence IP, FXellence International Payments, FXellence Technology Limited, Foreign Exchange, IMT, Overseas, Money Transfer, Money Movement, Send Money, Currencies, Worldwide, Online, Secure, Simple, Easy, Small Business, Large Business, Convert Currency, Converting Currency, Payment Platform, real-time rates, real-time live rates, live rates, competitive rates, real time rates, exchange rates, sending payments, send payment, send worldwide, Euro, US Dollar, FX, FX Experts, Payment Expert, Payments Experts, Bank Payment, FX Specialist, Payment Specialist, international payment needs, payments platform, major currencies, countries worldwide"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "International Payments made easy.  Send money abroad in all major currencies to almost any destination worldwide.  Online, Secure & Simple.  Foreign Exchange for Small and Large Businesses.  UK Company."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:description",
                        content: "International Payments made easy.  Send money abroad in all major currencies to almost any destination worldwide.  Online, Secure & Simple.  Foreign Exchange for Small and Large Businesses.  UK Company."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ })

};
;
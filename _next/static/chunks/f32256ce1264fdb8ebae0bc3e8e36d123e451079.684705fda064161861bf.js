(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/eVQ":function(t,e,n){t.exports=n("tSeT")},"7evw":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"CommentCount",{enumerable:!0,get:function(){return r.CommentCount}}),Object.defineProperty(e,"CommentEmbed",{enumerable:!0,get:function(){return o.CommentEmbed}}),Object.defineProperty(e,"DiscussionEmbed",{enumerable:!0,get:function(){return i.DiscussionEmbed}}),e.default=void 0;var r=n("UZsz"),o=n("Bp/N"),i=n("HhXV"),c={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};e.default=c},"7ljp":function(t,e,n){"use strict";n.r(e),n.d(e,"MDXContext",(function(){return s})),n.d(e,"MDXProvider",(function(){return d})),n.d(e,"mdx",(function(){return y})),n.d(e,"useMDXComponents",(function(){return p})),n.d(e,"withMDXComponents",(function(){return l}));var r=n("q1tI"),o=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=o.a.createContext({}),l=function(t){return function(e){var n=p(e.components);return o.a.createElement(t,c({},e,{components:n}))}},p=function(t){var e=o.a.useContext(s),n=e;return t&&(n="function"===typeof t?t(e):u(u({},e),t)),n},d=function(t){var e=p(t.components);return o.a.createElement(s.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},m=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,a=f(t,["components","mdxType","originalType","parentName"]),s=p(n),l=r,d=s["".concat(c,".").concat(l)]||s[l]||b[l]||i;return n?o.a.createElement(d,u(u({ref:e},a),{},{components:n})):o.a.createElement(d,u({ref:e},a))}));function y(t,e){var n=arguments,r=e&&e.mdxType;if("string"===typeof t||r){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"===typeof t?t:r,c[1]=a;for(var f=2;f<i;f++)c[f]=n[f];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},"Bp/N":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentEmbed=void 0;var r=i(n("q1tI")),o=i(n("17x9"));function i(t){return t&&t.__esModule?t:{default:t}}function c(t){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(c,t);var e,n,o,i=s(c);function c(){return a(this,c),i.apply(this,arguments)}return e=c,(n=[{key:"getSrc",value:function(){var t=Number(this.props.commentId).toString(36),e=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(t,"?p=").concat(e,"&m=").concat(n)}},{key:"render",value:function(){return r.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}])&&u(e.prototype,n),o&&u(e,o),c}(r.default.Component);e.CommentEmbed=d,d.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},d.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number}},HhXV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DiscussionEmbed=void 0;var r=c(n("q1tI")),o=c(n("17x9")),i=n("ZMnY");function c(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=b(t);if(e){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"],y=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(a,t);var e,n,o,c=p(a);function a(){return f(this,a),c.apply(this,arguments)}return e=a,(n=[{key:"componentDidMount",value:function(){"undefined"!==typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var t=window.document;window&&window.DISQUS&&t.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),"dsq-embed-scr",t.body))}},{key:"cleanInstance",value:function(){var t=window.document;(0,i.removeScript)("dsq-embed-scr",t.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=t.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)}},{key:"getDisqusConfig",value:function(t){return function(){var e=this;this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.category_id=t.categoryID,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,t.language&&(this.language=t.language),m.forEach((function(n){e.callbacks[n]=[t[n]]}))}}},{key:"render",value:function(){return r.default.createElement("div",u({},this.props,{id:"disqus_thread"}))}}])&&s(e.prototype,n),o&&s(e,o),a}(r.default.Component);e.DiscussionEmbed=y,y.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},Itsp:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("G8Q3"),c=n("VOOu"),a=n("OxME"),u=n("AeFk");e.a=function(){return Object(u.c)(o.a.Fragment,null,Object(u.c)(c.a,{bottom:"100"},Object(u.c)(a.a,{i:"f15c",f:"Free",w:"900"},"\ubaa8\uc74c \ud3ec\uc2a4\ud2b8 \uc548\ub0b4"),Object(u.c)(i.f,null,"\uc774 \ube14\ub85c\uadf8\ub294 \uac00\uc774\ub4dc\ub97c \ub9ce\uc774 \ub2e4\ub8f9\ub2c8\ub2e4. \uc774 \uac00\uc774\ub4dc\ub4e4\uc740 \uc2dc\ub9ac\uc988\ubb3c\ub85c \uc791\uc131\uc774 \ub418\uace0 \ud558\ub098\uc758 \uac00\uc774\ub4dc\ub97c \uc791\uc131\ud558\uae30 \uc2dc\uc791\ud558\uba74 \uadf8 \uac00\uc774\ub4dc\uc758 \uc2dc\ub9ac\uc988 \ud3ec\uc2a4\ud2b8\ub4e4\uc744 \uc21c\uc11c\ub300\ub85c \ud655\uc778\ud560 \uc218 \uc788\uac8c\ub054 \ub9c1\ud06c\ub97c \ubaa8\uc544\ub193\uc740 \uac00\uc774\ub4dc \ubaa8\uc74c\uc744 \uc791\uc131\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798\uc5d0\ub294 \uadf8 \uac00\uc774\ub4dc \ubaa8\uc74c\uc744 \ub098\uc5f4\ud574\ub450\uc5c8\uc2b5\ub2c8\ub2e4. \uac00\uc774\ub4dc \ubfd0\ub9cc \uc544\ub2c8\ub77c \ub9ac\ubdf0\ub098 \uac8c\uc784 \ud50c\ub808\uc774\ub3c4 \ucc3e\uc544\ubcf4\uae30 \uc27d\uac8c \ub098\uc5f4\ud574 \ub458 \uac83\uc774\uae30 \ub54c\ubb38\uc5d0 \uad6c\uacbd\ud574\ubcf4\uc2dc\uba74 \uc88b\uaca0\uc2b5\ub2c8\ub2e4."),Object(u.c)(i.f,null,"\uc544\ub798\uc758 \ubaa8\uc74c\ub4e4\uc740 ",Object(u.c)(i.g,null,"\ubaa8\uc74c \uc5f4\uae30"),"\ub97c \ud074\ub9ad\ud558\uba74 \uc5f4\ub9ac\uac8c \ub429\ub2c8\ub2e4. ",Object(u.c)(i.c,null,"(\uc775\uc2a4\ud50c\ub85c\ub7ec\uc5d0\uc120 \uc5b4\ub5bb\uac8c \ubcf4\uc77c \uc9c0 \ubaa8\ub985\ub2c8\ub2e4.)")),Object(u.c)(i.b,{close:"\uac00\uc774\ub4dc \ubaa8\uc74c \uc5f4\uae30",open:"\uac00\uc774\ub4dc \ubaa8\uc74c \ub2eb\uae30",bottom:"20",top:"20"},Object(u.c)(i.a,{type:"blog",href:"/blog/post/2021-05-02-01-complete-html-guide"},"HTML \uac00\uc774\ub4dc"),Object(u.c)(i.a,{type:"blog",href:"/blog/post/2021-05-02-03-complete-css-guide",isOff:"true"},"CSS \uac00\uc774\ub4dc")),Object(u.c)(i.b,{close:"\ub9ac\ubdf0 \ubaa8\uc74c \uc5f4\uae30",open:"\ub9ac\ubdf0 \ubaa8\uc74c \ub2eb\uae30",bottom:"20",top:"20"},"\uc544\uc9c1 \uc2dc\ub9ac\uc988\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),Object(u.c)(i.b,{close:"\uac8c\uc784 \ud50c\ub808\uc774 \ubaa8\uc74c \uc5f4\uae30",open:"\uac8c\uc784 \ud50c\ub808\uc774 \ubaa8\uc74c \ub2eb\uae30",bottom:"0",top:"20"},"\uc544\uc9c1 \uc2dc\ub9ac\uc988\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")))}},R9dW:function(t,e,n){"use strict";var r=n("HALo"),o=(n("q1tI"),n("6quy")),i=n("0uDR"),c=n("C8DX"),a=n("4W5W"),u=n("Cfni"),f=n("Q50Z"),s=n("VeX4"),l=n("L76w"),p=n("vbes"),d=n("DD4H"),b=n("ct58"),m=n("zLXp"),y=n("XcIP"),h=n("UI8d"),g=n("QhXe"),w=n("4WTr"),v=n("O+Fl"),O=n("lZhd"),j=n("2LlO"),x=n("4q1Z"),S=n("uAtV"),C=n("PFgW"),I=n("nfwm"),k=n("T/Jc"),_=n("ARkZ"),D=n("AeFk"),E={h1:function(t){return Object(D.c)(p.a,Object(r.a)({type:"1"},t))},h2:function(t){return Object(D.c)(p.a,Object(r.a)({type:"2"},t))},h3:function(t){return Object(D.c)(p.a,Object(r.a)({type:"3"},t))},h4:function(t){return Object(D.c)(p.a,Object(r.a)({type:"4"},t))},inlineCode:function(t){return Object(D.c)(a.a,t)},p:function(t){return Object(D.c)(w.a,t)},img:function(t){return Object(D.c)(d.a,t)},a:function(t){return Object(D.c)(o.a,{href:t.href,rel:t.rel,type:"blog"},t.children)},del:function(t){return Object(D.c)(S.a,t)},strong:function(t){return Object(D.c)(C.a,t)},em:function(t){return Object(D.c)(s.a,t)},ol:function(t){return Object(D.c)(g.a,t)},ul:function(t){return Object(D.c)(I.a,t)},pre:function(t){return Object(D.c)(_.a,t)},H:p.a,Code:a.a,A:o.a,P:w.a,Image:d.a,Strong:C.a,Strike:S.a,Em:s.a,Ol:g.a,Ul:I.a,Dl:f.a,Score:j.a,Gray:l.a,Details:u.a,Bold:i.a,Kbd:b.a,Char:c.a,Message:m.a,NoteTop:h.a,NoteBottom:y.a,Q:v.a,Quote:O.a,Spoiler:x.a,Youtube:k.a};e.a=E},RD4C:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("AeFk");e.a=function(t){var e=t.children,n=t.name,r=t.i,c=t.w,a=t.itemType,u=void 0===a?"p":a,f=t.linkIcon,s={p:"",link:"\n      & > a {\n        letter-spacing: -1px;\n        color: #555555;\n        padding: 0 10px;\n        border-radius: 50px;\n        border: 2px solid #555555;\n        margin-right: 5px;\n        margin-bottom: 3px;\n        transition: all 0.3s;\n        font-weight: 500;\n        display: inline-block;\n\n        &:hover {\n          color: #ffffff;\n          background-color: #333333;\n          border: 2px solid #333333;\n          transition: all 0.3s;\n        }\n\n        &:before {\n          content: '\\".concat(void 0===f?"":f,"';\n          font-weight: 900;\n          font-family: 'Font Awesome 5 Free', sans-serif;\n          margin-right: 5px;\n        }\n      }\n    ")},l={p:Object(i.c)("span",{className:"content-paragraph"},e),link:Object(i.c)(o.a.Fragment,null,e)},p=Object(i.b)("margin-top:2px;color:#333333;letter-spacing:-1px;font-weight:500;transition:all 0.3s;&>span{&:nth-of-type(2){font-size:90%;color:#555555;}}&>a{font-size:90%;}&>.name{display:inline-block;border-radius:10px;color:#f54747;font-weight:900;margin-right:10px;margin-bottom:3px;margin-top:2px;transition:all 0.3s;&:before{content:'\\",r,"';font-weight:",c,";font-family:'Font Awesome 5 Free',sans-serif;margin-right:5px;}}",s[u],";","","");return Object(i.c)(o.a.Fragment,null,Object(i.c)("p",{css:p},Object(i.c)("span",{className:"name"},n),l[u]))}},UZsz:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentCount=void 0;var r=c(n("q1tI")),o=c(n("17x9")),i=n("ZMnY");function c(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=(0,i.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),m=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(a,t);var e,n,o,c=l(a);function a(){return u(this,a),c.apply(this,arguments)}return e=a,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var t=window.document;t.getElementById("dsq-count-scr")?b():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),"dsq-count-scr",t.body)}},{key:"cleanInstance",value:function(){var t=window.document.body;(0,i.removeScript)("dsq-count-scr",t),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return r.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}])&&f(e.prototype,n),o&&f(e,o),a}(r.default.Component);e.CommentCount=m,m.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired}},XAfy:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("AeFk"),c=n("YFqc"),a=n.n(c),u=n("2Xj4");e.a=function(t){var e,n=t.prev,r=t.next,c=t.type,f=void 0===c?"":c;e="post"===f?"post":"notice"===f?"notice":"illust";var s=Object(i.b)("padding:10px;background-color:#ffffff;border-radius:10px;width:100%;box-shadow:0 0 10px -4px #333333;box-sizing:border-box;letter-spacing:-1px;font-weight:500;margin-bottom:100px;&>.nav-button{&:nth-of-type(1){margin-bottom:5px;&>a{display:block;border:2px solid #555555;color:#555555;padding:10px;font-weight:500;border-radius:10px;text-align:left;transition:all 0.3s;letter-spacing:-1px;&:hover{color:#ffffff;background-color:#333333;border:2px solid #333333;transition:all 0.3s;&>span{color:#333333;background-color:#ffffff;}}&>span{color:#ffffff;background-color:#555555;border-radius:10px;padding:0 10px;margin-right:10px;transition:all 0.3s;&:before{content:'\\f359';font-family:'Font Awesome 5 Free',sans-serif;font-weight:900;margin-right:5px;}}}&>.message{display:block;border:2px solid #55555550;color:#55555550;padding:10px;font-weight:500;border-radius:10px;text-align:left;transition:all 0.3s;letter-spacing:-1px;&>span{color:#ffffffb0;background-color:#55555550;border-radius:10px;padding:0 10px;margin-right:10px;transition:all 0.3s;&:before{content:'\\f359';font-family:'Font Awesome 5 Free',sans-serif;font-weight:900;margin-right:5px;}}}}&:nth-of-type(2){&>a{display:block;border:2px solid #555555;color:#555555;padding:10px;font-weight:500;border-radius:10px;text-align:right;transition:all 0.3s;letter-spacing:-1px;&:hover{color:#ffffff;background-color:#333333;border:2px solid #333333;transition:all 0.3s;&>span{color:#333333;background-color:#ffffff;}}&>span{color:#ffffff;background-color:#555555;border-radius:10px;padding:0 10px;margin-left:10px;transition:all 0.3s;&:after{content:'\\f35a';font-family:'Font Awesome 5 Free',sans-serif;font-weight:900;margin-left:5px;}}}&>.message{display:block;border:2px solid #55555550;color:#55555550;padding:10px;font-weight:500;border-radius:10px;text-align:right;transition:all 0.3s;letter-spacing:-1px;&>span{color:#ffffffb0;background-color:#55555550;border-radius:10px;padding:0 10px;margin-left:10px;transition:all 0.3s;&:after{content:'\\f35a';font-family:'Font Awesome 5 Free',sans-serif;font-weight:900;margin-left:5px;}}}}}@media (min-width: 1px) and (max-width: 600px){& p{font-size:",u.a[1],";}}@media (min-width: 601px) and (max-width: 800px){& p{font-size:",u.a[2],";}}@media (min-width: 801px){& p{font-size:",u.a[3],";}}","","");return Object(i.c)(o.a.Fragment,null,Object(i.c)("div",{css:s},null===n?Object(i.c)("p",{className:"nav-button"},Object(i.c)("span",{className:"message"},Object(i.c)("span",null,"\uc774\uc804 \ud3ec\uc2a4\ud2b8"),"\uc774\uc804 \ud3ec\uc2a4\ud2b8\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")):n&&Object(i.c)("p",{className:"nav-button"},Object(i.c)(a.a,{className:"nav-link",href:"/blog/".concat(String(e),"/").concat(String(n.filePath.replace(".mdx",""))),passHref:!0},Object(i.c)("a",null,Object(i.c)("span",null,"\uc774\uc804 \ud3ec\uc2a4\ud2b8"),n.frontMatter.title))),null===r?Object(i.c)("p",{className:"nav-button"},Object(i.c)("span",{className:"message"},"\ub2e4\uc74c \ud3ec\uc2a4\ud2b8\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",Object(i.c)("span",null,"\ub2e4\uc74c \ud3ec\uc2a4\ud2b8"))):r&&Object(i.c)("p",{className:"nav-button"},Object(i.c)(a.a,{className:"nav-link",href:"/blog/".concat(String(e),"/").concat(String(r.filePath.replace(".mdx",""))),passHref:!0},Object(i.c)("a",null,r.frontMatter.title,Object(i.c)("span",null,"\ub2e4\uc74c \ud3ec\uc2a4\ud2b8"))))))}},"Z+GX":function(t,e,n){"use strict";e.a=function(t){var e=new Date(t),n=new Date(e-324e5),r=n.getFullYear(),o=n.getMonth()+1;o=o>=10?o:"0".concat(o);var i=n.getDate();i=i>=10?i:"0".concat(i);var c=n.getHours();c=c>=10?c:"0".concat(c);var a=n.getMinutes();return a=a>=10?a:"0".concat(a),"".concat(r,"-").concat(o,"-").concat(i," ").concat(c,":").concat(a)}},ZMnY:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.insertScript=function(t,e,n){var r=window.document.createElement("script");return r.async=!0,r.src=t,r.id=e,n.appendChild(r),r},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var r;return function(){var o=this,i=arguments,c=function(){r=null,n||t.apply(o,i)},a=n&&!r;window.clearTimeout(r),r=setTimeout(c,e),a&&t.apply(o,i)}},e.isReactElement=a,e.shallowComparison=function t(e,n){var r,o=function(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}(new Set(Object.keys(e),Object.keys(n)));try{for(o.s();!(r=o.n()).done;){var u=r.value;if("object"===i(e[u])){if(t(e[u],n[u]))return!0}else if(e[u]!==n[u]&&!a(e[u]))return!0}}catch(f){o.e(f)}finally{o.f()}return!1};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r};function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t){return!!o.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return o.default.isValidElement(t)}))}},fF8K:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("AeFk");e.a=function(t){var e=t.top,n=void 0===e?60:e,r=t.bottom,c=void 0===r?60:r,a=Object(i.b)("margin-top:",n,"px;margin-bottom:",c,"px;border:none;border-bottom:3px dotted #888888;","","");return Object(i.c)(o.a.Fragment,null,Object(i.c)("hr",{css:a}))}},t13d:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("OxME"),c=n("VOOu"),a=n("G8Q3"),u=n("AeFk");e.a=function(){return Object(u.c)(o.a.Fragment,null,Object(u.c)(c.a,{top:"100"},Object(u.c)(i.a,{i:"f086",w:"900",f:"Free"},"\ub2c8\ud790 \ube14\ub85c\uadf8\uc5d0 \uc624\uc2e0 \uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4!"),Object(u.c)(a.f,{bottom:"0"},"\ub2c8\ud790 \ube14\ub85c\uadf8\ub294 \ud504\ub85c\uadf8\ub798\ubc0d, \uc77c\ubcf8\uc5b4, \uac8c\uc784 \uad00\ub828\ub41c \ucee8\ud150\uce20\ub97c \ub2e4\ub8e8\ub294 \ube14\ub85c\uadf8\uc785\ub2c8\ub2e4. \uc774 \ube14\ub85c\uadf8\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc18c\uac1c\ub294 ",Object(u.c)(a.a,{href:"/about/",type:"blog"},"\ube14\ub85c\uadf8 \uc18c\uac1c"),"\ud398\uc774\uc9c0\uc5d0\uc11c \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. ",Object(u.c)(a.g,null,"\uc774 \ube14\ub85c\uadf8\uc758 \ucee8\ud150\uce20\ub4e4\uc740 \uc775\uc2a4\ud50c\ub85c\ub7ec\uc5d0\uc120 \uc81c\ub300\ub85c \ubcf4\uc774\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))))}},tSeT:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("q1tI"),o=n("7ljp");function i(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}function c(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}})),e.default=t,Object.freeze(e)}var a=i(r),u=c(o);"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(t){clearTimeout(t)}),e.MDXRemote=function({compiledSource:t,scope:e,components:n={},lazy:o}){const[i,c]=r.useState(!o||"undefined"===typeof window);r.useEffect((function(){if(o){const t=window.requestIdleCallback((()=>{c(!0)}));return()=>window.cancelIdleCallback(t)}}),[]);const f=r.useMemo((()=>{const n=Object.assign({mdx:u.mdx},e),r=Object.keys(n),o=Object.values(n),i=Reflect.construct(Function,r.concat(`${t}; return MDXContent;`));return i.apply(i,o)}),[e,t]);return i?a.default.createElement("div",null,a.default.createElement(u.MDXProvider,{components:n},a.default.createElement(f,null))):a.default.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0})}}}]);
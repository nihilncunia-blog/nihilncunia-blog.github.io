_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{H5YG:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/view",function(){return t("a6mh")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},a6mh:function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return p}));var r=t("q1tI"),o=t.n(r),c=t("AeFk"),a=t("YFqc"),l=t.n(a),i=t("g4pe"),s=t.n(i);var u={name:"t0oz0e",styles:"@import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);{}*{margin:0;padding:0;font-family:'Noto Sans CJK KR',sans-serif;}"},f={name:"19a01yl",styles:"padding:10px;&>h1{margin-bottom:30px;color:#333333;}&>div{padding:10px;border:1px solid #333333;color:#333333;margin:10px 0;&>h2{&>.red{font-size:80%;padding:5px 10px;background-color:#b90c0c;color:#ffffff;display:inline-block;border-radius:10px;margin-right:10px;}&>.black{font-size:80%;padding:5px 10px;background-color:#333333;color:#ffffff;display:inline-block;border-radius:10px;margin-right:10px;}&>.count{margin-right:5px;}}}"},p=!0;n.default=function(e){var n=e.posts,t=f,r=u;return Object(c.c)(o.a.Fragment,null,Object(c.c)(c.a,{styles:r}),Object(c.c)(s.a,null,Object(c.c)("title",null,"\ud3ec\uc2a4\ud2b8 \uad00\ub9ac"),Object(c.c)("meta",{name:"robots",content:"noindex, nofollow"})),Object(c.c)("div",{css:t},Object(c.c)(l.a,{href:"/blog"},Object(c.c)("a",null,"\ud648")),Object(c.c)("h1",null,"\ucd1d \ud3ec\uc2a4\ud2b8 ",n.length,"\uac74"),n.map((function(e,n){var t=e.frontMatter,r=e.filePath;return Object(c.c)("div",{key:n},Object(c.c)("h2",null,t.notice?Object(c.c)(o.a.Fragment,null,Object(c.c)("span",{className:"count red"},n+1),Object(c.c)("span",{className:"red"},"\uacf5\uc9c0")):Object(c.c)(o.a.Fragment,null,Object(c.c)("span",{className:"count black"},n+1),Object(c.c)("span",{className:"black"},"\uc77c\ubc18")),Object(c.c)("span",null,t.title)),Object(c.c)("p",null,t.notice?"/blog/notice/".concat(r.replace(".mdx","")):"/blog/post/".concat(r.replace(".mdx",""))))})).reverse()))}},cTJO:function(e,n,t){"use strict";var r=t("zoAU"),o=t("7KCV");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),l=t("nOHt"),i=t("vNVm"),s={};function u(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,l.useRouter)(),o=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],l=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):l||c}}),[o,e.href,e.as]),p=f.href,d=f.as,b=e.children,v=e.replace,g=e.shallow,m=e.scroll,h=e.locale;"string"===typeof b&&(b=c.default.createElement("a",null,b));var y=c.Children.only(b),O=y&&"object"===typeof y&&y.ref,j=(0,i.useIntersection)({rootMargin:"200px"}),x=r(j,2),_=x[0],k=x[1],w=c.default.useCallback((function(e){_(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,_]);(0,c.useEffect)((function(){var e=k&&n&&(0,a.isLocalURL)(p),r="undefined"!==typeof h?h:t&&t.locale,o=s[p+"%"+d+(r?"%"+r:"")];e&&!o&&u(t,p,d,{locale:r})}),[d,p,k,h,n,t]);var E={ref:w,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,l,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==l&&(l=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:i,scroll:l}))}(e,t,p,d,v,g,m,h)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(t,p,d,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var N="undefined"!==typeof h?h:t&&t.locale,L=t&&t.isLocaleDomain&&(0,a.getDomainLocale)(d,N,t&&t.locales,t&&t.domainLocales);E.href=L||(0,a.addBasePath)((0,a.addLocale)(d,N,t&&t.defaultLocale))}return c.default.cloneElement(y,E)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("zoAU");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,i=(0,o.useRef)(),s=(0,o.useState)(!1),u=r(s,2),f=u[0],p=u[1],d=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||f||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),l.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,c.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[d,f]};var o=t("q1tI"),c=t("0G5g"),a="undefined"!==typeof IntersectionObserver;var l=new Map}},[["H5YG",0,2,1,3]]]);
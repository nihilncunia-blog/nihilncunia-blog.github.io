_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{H5YG:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/view",function(){return t("a6mh")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},a6mh:function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return p}));var c=t("q1tI"),r=t.n(c),a=t("AeFk"),o=t("YFqc"),l=t.n(o),s=t("g4pe"),i=t.n(s);var u={name:"t0oz0e",styles:"@import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);{}*{margin:0;padding:0;font-family:'Noto Sans CJK KR',sans-serif;}"},f={name:"19a01yl",styles:"padding:10px;&>h1{margin-bottom:30px;color:#333333;}&>div{padding:10px;border:1px solid #333333;color:#333333;margin:10px 0;&>h2{&>.red{font-size:80%;padding:5px 10px;background-color:#b90c0c;color:#ffffff;display:inline-block;border-radius:10px;margin-right:10px;}&>.black{font-size:80%;padding:5px 10px;background-color:#333333;color:#ffffff;display:inline-block;border-radius:10px;margin-right:10px;}&>.count{margin-right:5px;}}}"},p=!0;n.default=function(e){var n=e.posts,t=f,c=u;return Object(a.c)(r.a.Fragment,null,Object(a.c)(a.a,{styles:c}),Object(a.c)(i.a,null,Object(a.c)("title",null,"\ud3ec\uc2a4\ud2b8 \uad00\ub9ac"),Object(a.c)("meta",{name:"robots",content:"noindex, nofollow"})),Object(a.c)("div",{css:t},Object(a.c)(l.a,{href:"/blog"},Object(a.c)("a",null,"\ud648")),Object(a.c)("h1",null,"\ucd1d \ud3ec\uc2a4\ud2b8 ",n.length,"\uac74"),n.map((function(e,n){var t=e.frontMatter,c=e.filePath;return Object(a.c)("div",{key:n},Object(a.c)("h2",null,t.notice?Object(a.c)(r.a.Fragment,null,Object(a.c)("span",{className:"count red"},n+1),Object(a.c)("span",{className:"red"},"\uacf5\uc9c0")):t.drawDate?Object(a.c)(r.a.Fragment,null,Object(a.c)("span",{className:"count black"},n+1),Object(a.c)("span",{className:"black"},"\uc77c\ub7ec\uc2a4\ud2b8")):Object(a.c)(r.a.Fragment,null,Object(a.c)("span",{className:"count black"},n+1),Object(a.c)("span",{className:"black"},"\uc77c\ubc18")),Object(a.c)("span",null,t.title)),Object(a.c)("p",null,t.notice?"/blog/notice/".concat(c.replace(".mdx","")):t.drawDate?"/blog/illust/".concat(c.replace(".mdx","")):"/blog/post/".concat(c.replace(".mdx",""))))})).reverse()))}},cTJO:function(e,n,t){"use strict";var c=t("zoAU"),r=t("7KCV");n.__esModule=!0,n.default=void 0;var a=r(t("q1tI")),o=t("elyg"),l=t("nOHt"),s=t("vNVm"),i={};function u(e,n,t,c){if(e&&(0,o.isLocalURL)(n)){e.prefetch(n,t,c).catch((function(e){0}));var r=c&&"undefined"!==typeof c.locale?c.locale:e&&e.locale;i[n+"%"+t+(r?"%"+r:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,l.useRouter)(),r=t&&t.asPath||"/",f=a.default.useMemo((function(){var n=(0,o.resolveHref)(r,e.href,!0),t=c(n,2),a=t[0],l=t[1];return{href:a,as:e.as?(0,o.resolveHref)(r,e.as):l||a}}),[r,e.href,e.as]),p=f.href,d=f.as,b=e.children,v=e.replace,g=e.shallow,m=e.scroll,h=e.locale;"string"===typeof b&&(b=a.default.createElement("a",null,b));var O=a.Children.only(b),y=O&&"object"===typeof O&&O.ref,j=(0,s.useIntersection)({rootMargin:"200px"}),k=c(j,2),x=k[0],w=k[1],_=a.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);(0,a.useEffect)((function(){var e=w&&n&&(0,o.isLocalURL)(p),c="undefined"!==typeof h?h:t&&t.locale,r=i[p+"%"+d+(c?"%"+c:"")];e&&!r&&u(t,p,d,{locale:c})}),[d,p,w,h,n,t]);var N={ref:_,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,n,t,c,r,a,l,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(t))&&(e.preventDefault(),null==l&&(l=c.indexOf("#")<0),n[r?"replace":"push"](t,c,{shallow:a,locale:s,scroll:l}))}(e,t,p,d,v,g,m,h)},onMouseEnter:function(e){(0,o.isLocalURL)(p)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),u(t,p,d,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var E="undefined"!==typeof h?h:t&&t.locale,L=t&&t.isLocaleDomain&&(0,o.getDomainLocale)(d,E,t&&t.locales,t&&t.domainLocales);N.href=L||(0,o.addBasePath)((0,o.addLocale)(d,E,t&&t.defaultLocale))}return a.default.cloneElement(O,N)};n.default=f},vNVm:function(e,n,t){"use strict";var c=t("zoAU");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,s=(0,r.useRef)(),i=(0,r.useState)(!1),u=c(i,2),f=u[0],p=u[1],d=(0,r.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var c=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var c=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var n=c.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:r,elements:c}),t}(t),r=c.id,a=c.observer,o=c.elements;return o.set(e,n),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),l.delete(r))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,f]);return(0,r.useEffect)((function(){if(!o&&!f){var e=(0,a.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[d,f]};var r=t("q1tI"),a=t("0G5g"),o="undefined"!==typeof IntersectionObserver;var l=new Map}},[["H5YG",0,2,1,3]]]);
(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"20a2":function(e,t,n){e.exports=n("nOHt")},"2Xj4":function(e,t,n){"use strict";t.a={7:"32pt",6:"22pt",5:"18pt",4:"16pt",3:"14pt",2:"12pt",1.5:"11pt",1:"10pt"}},PFgW:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("q1tI"),a=n.n(o),r=n("AeFk");var i={name:"tue2xg",styles:"font-weight:900;color:#ff5b5b;transition:all 0.3s"},c=function(e){var t=e.children,n=i;return Object(r.c)(a.a.Fragment,null,Object(r.c)("strong",{css:n},t))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("zoAU"),a=n("7KCV");t.__esModule=!0,t.default=void 0;var r=a(n("q1tI")),i=n("elyg"),c=n("nOHt"),l=n("vNVm"),s={};function f(e,t,n,o){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,o).catch((function(e){0}));var a=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;s[t+"%"+n+(a?"%"+a:"")]=!0}}var p=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),a=n&&n.asPath||"/",p=r.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),n=o(t,2),r=n[0],c=n[1];return{href:r,as:e.as?(0,i.resolveHref)(a,e.as):c||r}}),[a,e.href,e.as]),d=p.href,b=p.as,u=e.children,g=e.replace,m=e.shallow,h=e.scroll,x=e.locale;"string"===typeof u&&(u=r.default.createElement("a",null,u));var y=r.Children.only(u),O=y&&"object"===typeof y&&y.ref,j=(0,l.useIntersection)({rootMargin:"200px"}),w=o(j,2),v=w[0],k=w[1],C=r.default.useCallback((function(e){v(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,v]);(0,r.useEffect)((function(){var e=k&&t&&(0,i.isLocalURL)(d),o="undefined"!==typeof x?x:n&&n.locale,a=s[d+"%"+b+(o?"%"+o:"")];e&&!a&&f(n,d,b,{locale:o})}),[b,d,k,x,t,n]);var F={ref:C,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,o,a,r,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=o.indexOf("#")<0),t[a?"replace":"push"](n,o,{shallow:r,locale:l,scroll:c}))}(e,n,d,b,g,m,h,x)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),f(n,d,b,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var _="undefined"!==typeof x?x:n&&n.locale,z=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(b,_,n&&n.locales,n&&n.domainLocales);F.href=z||(0,i.addBasePath)((0,i.addLocale)(b,_,n&&n.defaultLocale))}return r.default.cloneElement(y,F)};t.default=p},ig33:function(e,t,n){"use strict";var o=n("kiQV"),a={title:"\ub2c8\ud790 \ube14\ub85c\uadf8",description:"\uc6f9 \uac1c\ubc1c\uc744 \uc911\uc2ec\uc73c\ub85c \ud558\ub294 \ud504\ub85c\uadf8\ub798\ubc0d \ucee8\ud150\uce20\uc640 \uc77c\ubcf8\uc5b4, \uac8c\uc784\ub4f1\uc758 \uac00\uc774\ub4dc \ucee8\ud150\uce20\ub97c \ub2e4\ub8e8\ub294 \ube14\ub85c\uadf8.",author:"NIHILncunia",generator:"Visual Studio Code",keywords:"\ube14\ub85c\uadf8, \ucf54\ub529, \ud504\ub85c\uadf8\ub798\ubc0d, \uc6f9 \ud504\ub85c\uadf8\ub798\ubc0d, Blog, Coding, Programing, Web programing, \uc77c\ubcf8\uc5b4, \uc77c\ubcf8\uc5b4 \uacf5\ubd80, \uac8c\uc784, \uac8c\uc784 \uc815\ubcf4, Japanese, Japanese learning, Game, Game play, \uac00\uc774\ub4dc, Guide",siteURL:"https://nihilblog.github.io",siteImage:"/images/blog-image.png",siteType:"website",version:o.version,year:(new Date).getFullYear(),postPerPage:5};t.a=a},kiQV:function(e){e.exports=JSON.parse('{"name":"nihilblog","version":"3.1.0","description":"\ub2c8\ud790 \ube14\ub85c\uadf8 Next.js \uc5d0\ub514\uc158","main":"src/pages/index.jsx","repository":{"type":"git","url":"git+https://github.com/nihilblog/nihilblog.git"},"bugs":{"url":"https://github.com/nihilblog/nihilblog/issues"},"homepage":"https://github.com/nihilblog/nihilblog#readme","scripts":{"serve":"rm -rf node_modules/.cache && rm -rf build/ && next dev","start":"rm -rf node_modules/.cache && rm -rf build/ && next build && next start","build":"rm -rf node_modules/.cache && rm -rf build/ && next build","export":"rm -rf node_modules/.cache && rm -rf build/ && next build && next export -o nihilblog.github.io/ && touch nihilblog.github.io/.nojekyll && cd ../nihilblog.github.io && mv .git ../backup && cd ../ && rm -rf nihilblog.github.io && cd nihilblog && mv nihilblog.github.io ../ && cd ../backup && mv .git ../nihilblog.github.io","clean":"npm cache clean --force"},"keywords":[],"author":"NIHILncunia","license":"MIT","dependencies":{"@emotion/react":"^11.4.0","@emotion/styled":"^11.3.0","@next/mdx":"^10.2.3","disqus-react":"^1.0.11","gray-matter":"^4.0.3","next":"^10.2.3","next-mdx-remote":"^3.0.2","prettier":"^2.3.0","prism-react-renderer":"^1.2.1","prismjs":"^1.23.0","prop-types":"^15.7.2","react":"^17.0.2","react-adsense":"^0.1.0","react-dom":"^17.0.2","remark-unwrap-images":"^2.0.0"},"devDependencies":{"@babel/core":"^7.14.3","@emotion/babel-plugin":"^11.3.0","@emotion/babel-preset-css-prop":"^11.2.0","@mdx-js/loader":"^1.6.22","eslint":"^7.27.0","eslint-plugin-import":"^2.23.3","eslint-plugin-react":"^7.23.2","eslint-plugin-react-hooks":"^4.2.0"}}')},poW8:function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),r=n("ig33"),i=n("AeFk"),c=n("2Xj4"),l=function(){var e=Object(i.b)("padding:10px;border-bottom:2px dotted #ffffff50;background-color:#333333;text-align:center;&>img{width:250px;display:block;transition:all 0.3s;margin:0 auto 5px auto;}&>p{color:#ffffff;letter-spacing:-1px;font-weight:500;transition:all 0.3s;}@media (min-width: 1px) and (max-width: 600px){&>p{font-size:",c.a[1],";}}@media (min-width: 601px) and (max-width: 800px){&>p{font-size:",c.a[2],";}}@media (min-width: 801px){&>p{font-size:",c.a[3],";}}","","");return Object(i.c)(a.a.Fragment,null,Object(i.c)("header",{css:e},Object(i.c)("img",{src:"/images/blog-logo.svg",alt:"\ub2c8\ud790 \ube14\ub85c\uadf8 \ub85c\uace0"}),Object(i.c)("p",null,r.a.title," Ver.",r.a.version,".")))},s=n("YFqc"),f=n.n(s),p=n("20a2"),d=function(e){var t,n=e.href,o=e.children;return Object(p.useRouter)().pathname===n&&(t="selected"),Object(i.c)(a.a.Fragment,null,Object(i.c)(f.a,{href:n},a.a.cloneElement(o,{className:t})))},b=function(e){var t,n=e.href,o=e.children;return-1!==Object(p.useRouter)().pathname.indexOf("blog/post")&&(t="selected"),Object(i.c)(a.a.Fragment,null,Object(i.c)(f.a,{href:n},a.a.cloneElement(o,{className:t})))},u=function(e){var t,n=e.href,o=e.children;return-1!==Object(p.useRouter)().pathname.indexOf("blog/notice")&&(t="selected"),Object(i.c)(a.a.Fragment,null,Object(i.c)(f.a,{href:n},a.a.cloneElement(o,{className:t})))},g=function(e){var t,n=e.href,o=e.children;return-1!==Object(p.useRouter)().pathname.indexOf("blog/illust")&&(t="selected"),Object(i.c)(a.a.Fragment,null,Object(i.c)(f.a,{href:n},a.a.cloneElement(o,{className:t})))},m=function(){var e=Object(i.b)("padding:13px 10px;background-color:#333333;text-align:center;width:100%;box-sizing:border-box;letter-spacing:-1px;&>a{transition:all 0.3s;box-sizing:border-box;display:inline-block;color:#ffffff;background-color:#333333;border:2px solid #ffffff;border-radius:20px;padding:5px 10px;box-shadow:0 0 10px -4px #ffffff;margin:2px;&:hover,&.selected{transition:all 0.3s;color:#333333;background-color:#ffffff;}&:before{font-weight:900;font-family:'Font Awesome 5 Free',sans-serif;margin-right:5px;}&:nth-of-type(1):before{content:'\\f6d9';}&:nth-of-type(2):before{content:'\\f015';}&:nth-of-type(3):before{content:'\\f05a';}&:nth-of-type(4):before{content:'\\f0f3';}&:nth-of-type(5):before{content:'\\f039';}&:nth-of-type(6):before{content:'\\f07b';}&:nth-of-type(7):before{content:'\\f02c';}&:nth-of-type(8):before{content:'\\f53f';}}@media (min-width: 1px) and (max-width: 600px){&>a{font-size:",c.a[1],";}}@media (min-width: 601px) and (max-width: 800px){&>a{font-size:",c.a[2],";}}@media (min-width: 801px){&>a{font-size:",c.a[3],";}}","","");return Object(i.c)(a.a.Fragment,null,Object(i.c)("nav",{id:"blog-main-menu",css:e},Object(i.c)(d,{href:"/"},Object(i.c)("a",null,"\ud504\ub860\ud2b8")),Object(i.c)(d,{href:"/blog"},Object(i.c)("a",null,"\ud648")),Object(i.c)(d,{href:"/about"},Object(i.c)("a",null,"\uc18c\uac1c")),Object(i.c)(u,{href:"/blog/notice/page/1"},Object(i.c)("a",null,"\uacf5\uc9c0")),Object(i.c)(b,{href:"/blog/post/page/1"},Object(i.c)("a",null,"\ud3ec\uc2a4\ud2b8")),Object(i.c)(d,{href:"/blog/categories"},Object(i.c)("a",null,"\uce74\ud14c\uace0\ub9ac")),Object(i.c)(d,{href:"/blog/tags"},Object(i.c)("a",null,"\ud0dc\uadf8")),Object(i.c)(g,{href:"/blog/illust/page/1"},Object(i.c)("a",null,"\uc77c\ub7ec\uc2a4\ud2b8"))))},h=function(){var e=Object(i.b)("background-color:#333333;padding:10px;text-align:center;box-sizing:border-box;letter-spacing:-1px;&>#footer-link{margin-bottom:5px;width:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;&>a{transition:all 0.3s;box-sizing:border-box;display:flex;flex-direction:row;color:#ffffff;border:2px solid #ffffff;border-radius:25px;box-shadow:0 0 10px -4px #ffffff;margin:2px;width:50px;height:50px;font-size:150%;align-items:center;justify-content:center;&:hover{transition:all 0.3s;color:#333333;background-color:#ffffff;}&:nth-of-type(1):before{content:'\\f0e0';font-weight:900;font-family:'Font Awesome 5 Free',sans-serif;}&:nth-of-type(2):before{content:'\\f16d';font-weight:500;font-family:'Font Awesome 5 Brands',sans-serif;}&:nth-of-type(3):before{content:'\\f09b';font-weight:500;font-family:'Font Awesome 5 Brands',sans-serif;}}}&>#footer-copyright{color:#ffffff;font-weight:900;transition:all 0.3s;&:before{content:'\\f1f9';margin-right:5px;font-weight:500;font-family:'Font Awesome 5 Free',sans-serif;}}@media (min-width: 1px) and (max-width: 600px){&>#footer-copyright{font-size:",c.a[1],";}}@media (min-width: 601px) and (max-width: 800px){&>#footer-copyright{font-size:",c.a[2],";}}@media (min-width: 801px){&>#footer-copyright{font-size:",c.a[3],";}}","","");return Object(i.c)(a.a.Fragment,null,Object(i.c)("footer",{css:e},Object(i.c)("p",{id:"footer-link"},Object(i.c)("a",{href:"mailto:nihil_ncunia@naver.com",target:"_blank",rel:"noreferrer noopener"}),Object(i.c)("a",{href:"https://www.instagram.com/nihil_illust/",target:"_blank",rel:"noreferrer noopener"}),Object(i.c)("a",{href:"https://github.com/NIHILncunia",target:"_blank",rel:"noreferrer noopener"})),Object(i.c)("p",{id:"footer-copyright"},r.a.year,". ",r.a.author,".")))};var x={name:"a3z6ut",styles:"padding:0 20px"},y=function(e){var t=e.children,n=x;return Object(i.c)(a.a.Fragment,null,Object(i.c)("main",{css:n},t))},O=n("g4pe"),j=n.n(O),w=function(e){var t=e.siteData,n=e.BlogConfig,o=e.pageProps,r=n.title,c=(n.description,n.author),l=n.generator,s=(n.siteType,n.siteImage,n.siteURL),f=(n.keywords,o.pageName),p=(o.pageDescription,o.pageKeywords,o.pageImage,o.pageType,o.pageURL),d=o.pageTag,b=o.pageSection,u=o.pageCreated,g=o.pageUpdated;return Object(i.c)(a.a.Fragment,null,Object(i.c)(j.a,null,Object(i.c)("title",null,f," - ",r),Object(i.c)("meta",{name:"description",content:t.description}),Object(i.c)("meta",{name:"author",content:c}),Object(i.c)("meta",{name:"generator",content:l}),Object(i.c)("meta",{name:"keywords",content:t.keywords}),Object(i.c)("meta",{property:"og:site_name",content:r}),Object(i.c)("meta",{property:"og:type",content:t.type}),Object(i.c)("meta",{property:"og:title",content:"".concat(f," - ").concat(r)}),Object(i.c)("meta",{property:"og:description",content:t.description}),Object(i.c)("meta",{property:"og:image",content:t.image}),Object(i.c)("meta",{property:"og:locale",content:"ko_KR"}),Object(i.c)("meta",{property:"og:url",content:"".concat(s).concat(p)}),"article"===t.type?Object(i.c)("meta",{property:"article:section",content:b}):"","article"===t.type?Object(i.c)("meta",{property:"article:tag ",content:d}):"","article"===t.type?Object(i.c)("meta",{property:"article:author",content:c}):"","article"===t.type?Object(i.c)("meta",{property:"article:published_time",content:u}):"","article"===t.type?Object(i.c)("meta",{property:"article:modified_time",content:g}):"",Object(i.c)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(i.c)("meta",{name:"twitter:site",content:"@".concat(c)}),Object(i.c)("meta",{name:"twitter:title",content:"".concat(f," - ").concat(r)}),Object(i.c)("meta",{name:"twitter:creator",content:"@".concat(c)}),Object(i.c)("meta",{name:"twitter:description",content:t.description}),Object(i.c)("meta",{name:"twitter:image",content:t.image})))},v=function(e){var t,n=e.href,o=e.children;return-1!==Object(p.useRouter)().pathname.indexOf("blog/illust/keywords")&&(t="selected"),Object(i.c)(a.a.Fragment,null,Object(i.c)(f.a,{href:n},a.a.cloneElement(o,{className:t})))},k=function(){var e=Object(i.b)("padding:8px 10px;background-color:#333333;text-align:center;width:100%;box-sizing:border-box;letter-spacing:-1px;border-top:2px dotted #ffffff50;&>a{transition:all 0.3s;box-sizing:border-box;display:inline-block;color:#ffffff;background-color:#333333;border:2px solid #ffffff;border-radius:20px;padding:5px 10px;box-shadow:0 0 10px -4px #ffffff;margin:2px;&:hover,&.selected{transition:all 0.3s;color:#333333;background-color:#ffffff;}&:before{content:'\\f1fc';font-weight:900;font-family:'Font Awesome 5 Free',sans-serif;margin-right:5px;}}@media (min-width: 1px) and (max-width: 600px){&>a{font-size:",c.a[1],";}}@media (min-width: 601px) and (max-width: 800px){&>a{font-size:",c.a[2],";}}@media (min-width: 801px){&>a{font-size:",c.a[3],";}}","","");return Object(i.c)(a.a.Fragment,null,Object(i.c)("nav",{id:"blog-sub-menu",css:e},Object(i.c)(v,{href:"/blog/illust/keywords"},Object(i.c)("a",null,"\ud0a4\uc6cc\ub4dc"))))};var C={name:"1gpk7r5",styles:"@import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);{}@font-face{font-family:'CascadiaCode';src:url('https://nihilblog.github.io/fonts/CascadiaCode.eot');src:url('https://nihilblog.github.io/fonts/CascadiaCode.eot?#iefix') format('embedded-opentype'),url('https://nihilblog.github.io/fonts/CascadiaCode.woff2') format('woff2'),url('https://nihilblog.github.io/fonts/CascadiaCode.svg#CascadiaCode') format('svg'),url('https://nihilblog.github.io/fonts/CascadiaCode.ttf') format('truetype'),url('https://nihilblog.github.io/fonts/CascadiaCode.woff') format('woff');font-weight:normal;font-style:normal;}*{padding:0;margin:0;font-family:'Noto Sans CJK KR',sans-serif;color:#333333;font-weight:500;}body{background-color:#cccccc;width:100%;}a{text-decoration:none;}ul{list-style:none;}#disqus_thread{padding:5px 20px 0 20px;border-radius:10px;background-color:#333333;& a{color:#ffffff;}}::-webkit-scrollbar{width:10px;}::-webkit-scrollbar-track{background-color:#bbbbbb;}::-webkit-scrollbar-thumb{background-color:#222222;border-radius:10px;}@media (min-width: 1px) and (max-width: 600px){main{max-width:100%;}}@media (min-width: 601px) and (max-width: 800px){main{max-width:100%;}}@media (min-width: 801px){main{max-width:960px;margin:0 auto;}}"};t.a=function(e){var t=e.pageName,n=e.pageDescription,c=e.pageKeywords,s=e.pageImage,f=e.pageType,d=e.pageURL,b=e.pageTag,u=e.pageSection,g=e.pageCreated,x=e.pageUpdated,O=e.children,j=r.a.description,v=r.a.siteType,F=r.a.siteImage,_=r.a.siteURL,z=r.a.keywords,I=Object(o.useState)({description:n||j,keywords:c||z,image:s||"".concat(_).concat(F),type:f||v})[0],L={pageName:t,pageDescription:n,pageKeywords:c,pageImage:s,pageType:f,pageURL:d,pageTag:b,pageSection:u,pageCreated:g,pageUpdated:x},R=C,N=Object(p.useRouter)();return Object(i.c)(a.a.Fragment,null,Object(i.c)(i.a,{styles:R}),Object(i.c)(w,{BlogConfig:r.a,siteData:I,pageProps:L}),Object(i.c)(l,null),Object(i.c)(m,null),-1!==N.pathname.indexOf("blog/illust")?Object(i.c)(k,null):"",Object(i.c)(y,null,O),Object(i.c)(h,null))}},vNVm:function(e,t,n){"use strict";var o=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,l=(0,a.useRef)(),s=(0,a.useState)(!1),f=o(s,2),p=f[0],d=f[1],b=(0,a.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),n||p||e&&e.tagName&&(l.current=function(e,t,n){var o=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:o}),n}(n),a=o.id,r=o.observer,i=o.elements;return i.set(e,t),r.observe(e),function(){i.delete(e),r.unobserve(e),0===i.size&&(r.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,p]);return(0,a.useEffect)((function(){if(!i&&!p){var e=(0,r.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,r.cancelIdleCallback)(e)}}}),[p]),[b,p]};var a=n("q1tI"),r=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var c=new Map}}]);
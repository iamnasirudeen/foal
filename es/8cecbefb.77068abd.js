(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(263)),i={title:"Version 2.2 release notes",author:"Lo\xefc Poullain",author_title:"Fullstack developper and creator of Foal TS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.2-release-notes.png",tags:["release"]},s={permalink:"/es/blog/2021/02/25/version-2.2-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-02-25-version-2.2-release-notes.md",source:"@site/blog/2021-02-25-version-2.2-release-notes.md",description:"Banner",date:"2021-02-25T00:00:00.000Z",tags:[{label:"release",permalink:"/es/blog/tags/release"}],title:"Version 2.2 release notes",readingTime:1.955,truncated:!0,prevItem:{title:"What's new in version 2 (part 2/4)",permalink:"/es/blog/2021/03/02/whats-new-in-version-2-part-2"},nextItem:{title:"What's new in version 2 (part 1/4)",permalink:"/es/blog/2021/02/17/whats-new-in-version-2-part-1"}},c=[{value:"New Look of the <code>createapp</code> Command",id:"new-look-of-the-createapp-command",children:[]},{value:"Authentication Improvement for Single-Page Applications (SPA)",id:"authentication-improvement-for-single-page-applications-spa",children:[]},{value:"Support of Nested Routes in <code>foal generate|g rest-api &lt;name&gt;</code>",id:"support-of-nested-routes-in-foal-generateg-rest-api-name",children:[]}],l={toc:c};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{alt:"Banner",src:n(293).default})),Object(a.b)("p",null,"Version 2.2 of Foal has been released! Here are the improvements that it brings."),Object(a.b)("h2",{id:"new-look-of-the-createapp-command"},"New Look of the ",Object(a.b)("inlineCode",{parentName:"h2"},"createapp")," Command"),Object(a.b)("p",null,"The output of the ",Object(a.b)("inlineCode",{parentName:"p"},"createapp"),' command has been prettified to be more "welcoming".'),Object(a.b)("p",null,Object(a.b)("img",{alt:"New createapp look",src:n(369).default})),Object(a.b)("h2",{id:"authentication-improvement-for-single-page-applications-spa"},"Authentication Improvement for Single-Page Applications (SPA)"),Object(a.b)("p",null,"When building a SPA with cookie-based authentication, it can sometimes be difficult to know if the user is logged in or to obtain certain information about the user (",Object(a.b)("inlineCode",{parentName:"p"},"isAdmin"),", etc)."),Object(a.b)("p",null,"Since the authentication token is stored in a cookie with the ",Object(a.b)("inlineCode",{parentName:"p"},"httpOnly")," directive set to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," (to mitigate XSS attacks), the front-end application has no way of knowing if a user is logged in, except by making an additional request to the server."),Object(a.b)("p",null,"To solve this problem, version 2.2 adds a new option called ",Object(a.b)("inlineCode",{parentName:"p"},"userCookie")," that allows you to set an additional cookie that the frontend can read with the content you choose. This cookie is synchronized with the session and is refreshed at each request and destroyed when the session expires or when the user logs out."),Object(a.b)("p",null,"In the following example, the ",Object(a.b)("inlineCode",{parentName:"p"},"user")," cookie is empty if no user is logged in or contains certain information about him/her otherwise. This is particularly useful if you need to display UI elements based on user characteristics."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Server-side code")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"function userToJSON(user: User|undefined) {\n  if (!user) {\n    return 'null';\n  }\n\n  return JSON.stringify({\n    email: user.email,\n    isAdmin: user.isAdmin\n  });\n}\n\n@UseSessions({\n  cookie: true,\n  user: fetchUser(User),\n  userCookie: (ctx, services) => userToJSON(ctx.user)\n})\nexport class ApiController {\n\n  @Get('/products')\n  @UserRequired()\n  async readProducts(ctx: Context) {\n    const products = await Product.find({ owner: ctx.user });\n    return new HttpResponseOK(products);\n  }\n\n}\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Cookies")),Object(a.b)("p",null,Object(a.b)("img",{alt:"User cookie",src:n(370).default})),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Client-side code")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const user = JSON.parse(decodeURIComponent(/* cookie value */));\n")),Object(a.b)("h2",{id:"support-of-nested-routes-in-foal-generateg-rest-api-name"},"Support of Nested Routes in ",Object(a.b)("inlineCode",{parentName:"h2"},"foal generate|g rest-api <name>")),Object(a.b)("p",null,"Like the command ",Object(a.b)("inlineCode",{parentName:"p"},"g controller"),", ",Object(a.b)("inlineCode",{parentName:"p"},"g rest-api")," now supports nested routes."),Object(a.b)("p",null,"Let's say we have the following file structure:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"src/\n '- app/\n  |- controllers/\n  | |- api.controller.ts\n  | '- index.ts\n  '- entities/\n    |- user.entity.ts\n    '- index.ts\n")),Object(a.b)("p",null,"Running these commands will add and register the following files:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"foal generate rest-api api/product --auth --register\nfoal generate rest-api api/order --auth --register\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"src/\n '- app/\n  |- controllers/\n  | |- api/\n  | | |- product.controller.ts\n  | | |- order.controller.ts\n  | | '- index.ts\n  | |- api.controller.ts\n  | '- index.ts\n  '- entities/\n    |- product.entity.ts\n    |- order.entity.ts\n    |- user.entity.ts\n    '- index.ts\n")))}p.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},293:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/banner-6265743e69efeb2a40aebb31b003df5c.png"},369:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/new-create-app-57f238581922bd8f8f05bcb788175c98.png"},370:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/user-cookie-c3f0e06d9ced0800240ac2b5ee368b8c.png"}}]);
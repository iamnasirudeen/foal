(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{246:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(263)),i={title:"Single Page Applications (SPA)",sidebar_label:"Single Page Applications"},c={unversionedId:"frontend-integration/single-page-applications",id:"frontend-integration/single-page-applications",isDocsHomePage:!1,title:"Single Page Applications (SPA)",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/docs/frontend-integration/single-page-applications.md",slug:"/frontend-integration/single-page-applications",permalink:"/docs/frontend-integration/single-page-applications",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/frontend-integration/single-page-applications.md",version:"current",sidebar_label:"Single Page Applications",sidebar:"someSidebar",previous:{title:"GraphQL",permalink:"/docs/api-section/graphql"},next:{title:"Angular, React & Vue",permalink:"/docs/frontend-integration/angular-react-vue"}},l=[{value:"Building the App &amp; Proxifying Requests",id:"building-the-app--proxifying-requests",children:[]},{value:"Using Frontend Routers",id:"using-frontend-routers",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://foalts.org/docs/1.x/"}),"here"),".")),Object(o.b)("p",null,"Single-Page Applications are Web Applications that are loaded once upon the first request(s) to the backend. After retreiving all the necessary code from the server, the current page is rendered and updated directly in the browser without asking the server to render new pages. During its lifecycle, the application usually communicates with the server by making API calls to fetch, create, update or delete data. This is a common pattern used when creating a new application with Angular, React or Vue."),Object(o.b)("p",null,"Building a SPA, however, introduces a certain complexity. This document presents some techniques and tools for solving common scenarios."),Object(o.b)("h2",{id:"building-the-app--proxifying-requests"},"Building the App & Proxifying Requests"),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/frontend-integration/angular-react-vue"}),"Angular, React & Vue")," section to learn on how to configure your frontend CLI to interact with a Foal application."),Object(o.b)("h2",{id:"using-frontend-routers"},"Using Frontend Routers"),Object(o.b)("p",null,"Most single-page applications simulate routing on the frontend side. This is usually done by libraries such as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reacttraining.com/react-router"}),"react-router")," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://angular.io/guide/router"}),"@angular/router"),". The application does not actually make any requests to the server but simply modifies the URL in the address bar."),Object(o.b)("p",null,"This works fine until the user presses the refresh button, shares the link or saves the page in their bookmarks. In that case, the browser makes a request to the server to retreive the desired page and thus gets a 404 error."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Request"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Response"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"/")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"200 - Returns the ",Object(o.b)("inlineCode",{parentName:"td"},"index.html")," file in the ",Object(o.b)("inlineCode",{parentName:"td"},"public/")," directory.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"/users?city=Paris")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"404 - The server has no route that handles ",Object(o.b)("inlineCode",{parentName:"td"},"/users"),".")))),Object(o.b)("p",null,"One technique to solve this problem is to add a handler responsible for processing uncaught requests. It returns the ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," page in all cases. This way, the browser loads the application which then looks at the address bar and displays the appropriate page."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, controller, Get, HttpResponseNotFound, render } from '@foal/core';\n\nimport { ApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiController),\n    // ...\n  ];\n\n  @Get('*')\n  renderApp(ctx: Context) {\n    if (!ctx.request.accepts('html')) {\n      return new HttpResponseNotFound();\n    }\n\n    return render('./templates/index.html');\n  }\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"Note:")," With this approach, the frontend is responsible for catching incorrect URLs and displaying a 404 page.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"Note 2:")," This issue usually does not show up in development as frontend CLIs are sufficiently clever to handle these requests.")))}p.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(h,c(c({ref:t},s),{},{components:n})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
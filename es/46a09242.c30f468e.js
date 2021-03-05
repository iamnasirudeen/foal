(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{130:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return p})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),a=(t(0),t(263)),s={title:"ExpressJS"},p={unversionedId:"cookbook/expressjs",id:"cookbook/expressjs",isDocsHomePage:!1,title:"ExpressJS",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/cookbook/expressjs.md",slug:"/cookbook/expressjs",permalink:"/es/docs/cookbook/expressjs",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/cookbook/expressjs.md",version:"current",sidebar:"someSidebar",previous:{title:"Tama\xf1o del Cuerpo de las Solicitudes",permalink:"/es/docs/cookbook/request-body-size"},next:{title:"Root Imports",permalink:"/es/docs/cookbook/root-imports"}},c=[{value:"Custom Express Instance",id:"custom-express-instance",children:[]},{value:"Pre and Post Express Middlewares",id:"pre-and-post-express-middlewares",children:[]},{value:"Migrating from Express to FoalTS",id:"migrating-from-express-to-foalts",children:[]}],i={toc:c};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://foalts.org/docs/1.x/"}),"here"),".")),Object(a.b)("p",null,"FoalTS applications are created with the ",Object(a.b)("inlineCode",{parentName:"p"},"createApp")," function in the ",Object(a.b)("inlineCode",{parentName:"p"},"src/index.ts")," file. This function takes the root controller class (known as ",Object(a.b)("inlineCode",{parentName:"p"},"AppController"),") as parameter."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { createApp } from '@foal/core';\n\nconst app = await createApp(AppController);\n")),Object(a.b)("p",null,"The returned value is an ExpressJS application that can be used as is to create an HTTP server. ",Object(a.b)("strong",{parentName:"p"},"FoalTS is not designed to integrate Express middlewares in its controllers or hooks"),". However, if for any reason you need to apply globally a middleware to the application, you have two ways to do it."),Object(a.b)("h2",{id:"custom-express-instance"},"Custom Express Instance"),Object(a.b)("p",null,"You can provide your own express instance to ",Object(a.b)("inlineCode",{parentName:"p"},"createApp"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { createApp } from '@foal/core';\nimport * as express from 'express';\n\nconst expressApp = express();\nexpressApp.use(/* an Express middleware */)\n\nconst app = await createApp(AppController, {\n  expressInstance: expressApp\n});\n\n")),Object(a.b)("h2",{id:"pre-and-post-express-middlewares"},"Pre and Post Express Middlewares"),Object(a.b)("p",null,"You can also pass global Express middlewares as options to the ",Object(a.b)("inlineCode",{parentName:"p"},"createApp")," function."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { createApp } from '@foal/core';\nimport * as rateLimit from 'express-rate-limit';\n\nconst app = await createApp(AppController, {\n  preMiddlewares: [\n    /* Express middlewares */\n  ],\n  postMiddlewares: [\n    /* Express middlewares */\n  ]\n});\n")),Object(a.b)("p",null,"Pre-middlewares are executed before Foal's controllers and hooks. Post-middlewares are executed only if there was no controller to handle the request, but before the 500 or 404 handlers get called."),Object(a.b)("h2",{id:"migrating-from-express-to-foalts"},"Migrating from Express to FoalTS"),Object(a.b)("p",null,"In case your are migrating your ExpressJS application to FoalTS, you can access FoalTS service manager using ",Object(a.b)("inlineCode",{parentName:"p"},"app.foal.services"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { createApp } from '@foal/core';\n\nconst app = await createApp(AppController);\napp.foal.services.get(MyServiceClass).doSomething();\n")))}l.isMDXComponent=!0},263:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),l=function(e){var r=o.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=l(e.components);return o.a.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=l(t),b=n,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||a;return t?o.a.createElement(m,p(p({ref:r},i),{},{components:t})):o.a.createElement(m,p({ref:r},i))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=b;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var i=2;i<a;i++)s[i]=t[i];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
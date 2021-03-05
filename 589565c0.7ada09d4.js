(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(263)),s={title:"Password Management",sidebar_label:"Passwords"},c={unversionedId:"authentication-and-access-control/password-management",id:"authentication-and-access-control/password-management",isDocsHomePage:!1,title:"Password Management",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/docs/authentication-and-access-control/password-management.md",slug:"/authentication-and-access-control/password-management",permalink:"/docs/authentication-and-access-control/password-management",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/authentication-and-access-control/password-management.md",version:"current",sidebar_label:"Passwords",sidebar:"someSidebar",previous:{title:"User Class & create-user Script",permalink:"/docs/authentication-and-access-control/user-class"},next:{title:"Session Tokens",permalink:"/docs/authentication-and-access-control/session-tokens"}},i=[{value:"The <code>hashPassword</code> function",id:"the-hashpassword-function",children:[]},{value:"The <code>verifyPassword</code> function",id:"the-verifypassword-function",children:[]}],p={toc:i};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://foalts.org/docs/1.x/"}),"here"),".")),Object(o.b)("p",null,"Every application must store passwords using a cryptographic technique. FoalTS provides two functions to hash and verify passwords."),Object(o.b)("h2",{id:"the-hashpassword-function"},"The ",Object(o.b)("inlineCode",{parentName:"h2"},"hashPassword")," function"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"hashPassword")," utility uses the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/PBKDF2"}),"PBKDF2")," algorithm with a SHA256 hash. It takes as parameters the password in plain text and an optional ",Object(o.b)("inlineCode",{parentName:"p"},"options")," object. It returns a promise which value is a password hash."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The function generates a unique cryptographically-strong random salt for each password. This salt is returned by the function beside the password hash.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const passwordHash = await hashPassword(plainTextPassword);\n")),Object(o.b)("h2",{id:"the-verifypassword-function"},"The ",Object(o.b)("inlineCode",{parentName:"h2"},"verifyPassword")," function"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"verifyPassword")," takes three arguments:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the password to check in plain text,"),Object(o.b)("li",{parentName:"ul"},"and the password hash (usually fetched from the database).")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const isEqual = await verifyPassword(plainTextPassword, passwordHash);\n")))}l.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,h=u["".concat(s,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(h,c(c({ref:t},p),{},{components:n})):r.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
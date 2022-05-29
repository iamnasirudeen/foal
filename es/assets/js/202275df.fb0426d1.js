"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7321],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4102:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={title:"Ship to Production"},c=void 0,p={unversionedId:"deployment-and-environments/ship-to-production",id:"version-1.x/deployment-and-environments/ship-to-production",title:"Ship to Production",description:"1. Set the Node.JS environment to production",source:"@site/versioned_docs/version-1.x/deployment-and-environments/ship-to-production.md",sourceDirName:"deployment-and-environments",slug:"/deployment-and-environments/ship-to-production",permalink:"/es/docs/1.x/deployment-and-environments/ship-to-production",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/deployment-and-environments/ship-to-production.md",tags:[],version:"1.x",frontMatter:{title:"Ship to Production"},sidebar:"someSidebar",previous:{title:"Configuration",permalink:"/es/docs/1.x/deployment-and-environments/configuration"}},l=[{value:"1. Set the Node.JS environment to <code>production</code>",id:"1-set-the-nodejs-environment-to-production",children:[],level:2},{value:"2. Use HTTPS",id:"2-use-https",children:[],level:2},{value:"3. Generate Different Secrets",id:"3-generate-different-secrets",children:[],level:2},{value:"4. Database Credentials &amp; Migrations",id:"4-database-credentials--migrations",children:[],level:2}],u={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-set-the-nodejs-environment-to-production"},"1. Set the Node.JS environment to ",(0,i.kt)("inlineCode",{parentName:"h2"},"production")),(0,i.kt)("p",null,"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable to ",(0,i.kt)("inlineCode",{parentName:"p"},"production"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"NODE_ENV=production npm run start\n")),(0,i.kt)("h2",{id:"2-use-https"},"2. Use HTTPS"),(0,i.kt)("p",null,"You must use HTTPS to prevent ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Man-in-the-middle_attack"},"man-in-the-middle attacks"),". Otherwise, your credentials and authentication tokens will appear in clear on the network."),(0,i.kt)("p",null,"If you use cookies, make sure to let them only be sent to the server when the request is made using SSL. You can do such thing with the cookie ",(0,i.kt)("inlineCode",{parentName:"p"},"secure")," directive."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"config/production.yml (example)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  // If you use sessions\n  session:\n    cookie:\n      secure: true\n  // If you use CSRF protection with cookies\n  csrf:\n    cookie:\n      secure: true\n")),(0,i.kt)("h2",{id:"3-generate-different-secrets"},"3. Generate Different Secrets"),(0,i.kt)("p",null,"Use different secrets for your production environment (JWT, session, csrf, etc). Specify them using environment variables or a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},".env (example)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SETTINGS_SESSION_SECRET=ctpQxVTme8rA1SR1AnKHTd/FknqcrhpPlMPGVMSSgjk\nSETTINGS_CSRF_SECRET=PZFo9stbQtGvQ2clYSrgn+FUjf55pjajHJslRaBRNo4\nSETTINGS_JWT_SECRET_OR_PUBLIC_KEY=YZP0iv6gM+VBTxk61l8nKUno2QxsQHO9hm8XfeedZUw\n")),(0,i.kt)("p",null,"You can generate 256-bit secrets encoded in base64 with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"foal createsecret\n")),(0,i.kt)("h2",{id:"4-database-credentials--migrations"},"4. Database Credentials & Migrations"),(0,i.kt)("p",null,"Use different credentials for your production database. Specify them using environment variables or a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,i.kt)("p",null,"If you use database migrations, run them on your production server with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run migration:run\n")))}d.isMDXComponent=!0}}]);
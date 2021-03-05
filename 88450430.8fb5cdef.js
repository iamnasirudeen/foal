(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(263)),c={title:"Code Generation"},l={unversionedId:"development-environment/code-generation",id:"development-environment/code-generation",isDocsHomePage:!1,title:"Code Generation",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/docs/development-environment/code-generation.md",slug:"/development-environment/code-generation",permalink:"/docs/development-environment/code-generation",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/development-environment/code-generation.md",version:"current",sidebar:"someSidebar",previous:{title:"Create and Run Scripts",permalink:"/docs/development-environment/create-and-run-scripts"},next:{title:"Linting and Code Style",permalink:"/docs/development-environment/linting-and-code-style"}},i=[{value:"Create a project",id:"create-a-project",children:[]},{value:"Create a controller",id:"create-a-controller",children:[{value:"The <code>--register</code> flag",id:"the---register-flag",children:[]}]},{value:"Create an entity (simple model)",id:"create-an-entity-simple-model",children:[]},{value:"Create REST API",id:"create-rest-api",children:[{value:"The <code>--register</code> flag",id:"the---register-flag-1",children:[]}]},{value:"Create a hook",id:"create-a-hook",children:[]},{value:"Create a script",id:"create-a-script",children:[]},{value:"Create a service",id:"create-a-service",children:[]}],p={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://foalts.org/docs/1.x/"}),"here"),".")),Object(o.b)("h2",{id:"create-a-project"},"Create a project"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal createapp my-app\n")),Object(o.b)("p",null,"Create a new directory with all the required files to get started."),Object(o.b)("p",null,"If you specify the flag ",Object(o.b)("inlineCode",{parentName:"p"},"--mongodb"),", the CLI will generate a new project using MongoDB instead of SQLite."),Object(o.b)("p",null,"If you specify the flag ",Object(o.b)("inlineCode",{parentName:"p"},"--yaml"),", the new project will use YAML format for its configuration files. You can find more information ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/deployment-and-environments/configuration"}),"here"),"."),Object(o.b)("h2",{id:"create-a-controller"},"Create a controller"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g controller <name>\n")),Object(o.b)("p",null,"Create a new controller in ",Object(o.b)("inlineCode",{parentName:"p"},"./src/app/controllers"),", in ",Object(o.b)("inlineCode",{parentName:"p"},"./controllers")," or in the current directory depending on which folders are found."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g controller auth\nfoal g controller api/product\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Output")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"src/\n '- app/\n  '- controllers/\n   |- api/\n   | |- product.controller.ts\n   | '- index.ts\n   |- auth.controller.ts\n   '- index.ts\n")),Object(o.b)("h3",{id:"the---register-flag"},"The ",Object(o.b)("inlineCode",{parentName:"h3"},"--register")," flag"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g controller <name> --register\n")),Object(o.b)("p",null,"If you wish to automatically create a new route attached to this controller, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"--register")," flag to do so."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g controller api --register\nfoal g controller api/product --register\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Output")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"src/\n '- app/\n  |- controllers/\n  | |- api/\n  | | |- product.controller.ts\n  | | '- index.ts\n  | |- api.controller.ts\n  | '- index.ts\n  '- app.controller.ts\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"app.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export class AppController {\n  subControllers = [\n    controller('/api', ApiController)\n  ]\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export class ApiController {\n  subControllers = [\n    controller('/product', ProductController)\n  ]\n}\n")),Object(o.b)("h2",{id:"create-an-entity-simple-model"},"Create an entity (simple model)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g entity <name>\n")),Object(o.b)("p",null,"Create a new entity in ",Object(o.b)("inlineCode",{parentName:"p"},"./src/app/entities"),", in ",Object(o.b)("inlineCode",{parentName:"p"},"./entities")," or in the current directory depending on which folders are found."),Object(o.b)("h2",{id:"create-rest-api"},"Create REST API"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g rest-api <name>\n")),Object(o.b)("p",null,"Create a new controller and a new entity to build a basic REST API. Depending on which directories are found, they will be generated in ",Object(o.b)("inlineCode",{parentName:"p"},"src/app/{entities}|{controllers}/")," or in ",Object(o.b)("inlineCode",{parentName:"p"},"{entities}|{controllers}/"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g rest-api order\nfoal g rest-api api/product\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Output")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"src/\n '- app/\n  |- controllers/\n  | |- api/\n  | | |- product.controller.ts\n  | | '- index.ts\n  | |- order.controller.ts\n  | '- index.ts\n  '- entities/\n    |- index.entity.ts\n    |- order.entity.ts\n    '- index.ts\n")),Object(o.b)("h3",{id:"the---register-flag-1"},"The ",Object(o.b)("inlineCode",{parentName:"h3"},"--register")," flag"),Object(o.b)("p",null,"If you wish to automatically create a new route attached to this controller, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"--register")," flag to do so (see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#create-a-controller"}),"create-a-controller"),")."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g controller api --register\nfoal g controller api/product --register\n")),Object(o.b)("p",null,"See the page ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-section/rest-blueprints"}),"REST Blueprints")," for more details."),Object(o.b)("h2",{id:"create-a-hook"},"Create a hook"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g hook <name>\n")),Object(o.b)("p",null,"Create a new hook in ",Object(o.b)("inlineCode",{parentName:"p"},"./src/app/hooks"),", in ",Object(o.b)("inlineCode",{parentName:"p"},"./hooks")," or in the current directory depending on which folders are found."),Object(o.b)("h2",{id:"create-a-script"},"Create a script"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g script <name>\n")),Object(o.b)("p",null,"Create a new shell script in ",Object(o.b)("inlineCode",{parentName:"p"},"src/scripts")," regardless of where you run the command."),Object(o.b)("h2",{id:"create-a-service"},"Create a service"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g service <name>\n")),Object(o.b)("p",null,"Create a new service in ",Object(o.b)("inlineCode",{parentName:"p"},"./src/app/services"),", in ",Object(o.b)("inlineCode",{parentName:"p"},"./services")," or in the current directory depending on which folders are found."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g service auth\nfoal g service apis/github\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Output")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"src/\n '- app/\n  '- services/\n   |- apis/\n   | '- github.service.ts\n   | '- index.ts\n   |- auth.service.ts\n   '- index.ts\n")))}b.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=b(n),u=r,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||o;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
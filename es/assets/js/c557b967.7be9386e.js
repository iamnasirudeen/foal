"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4937],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=c(t),m=a,d=g["".concat(p,".").concat(m)]||g[m]||u[m]||o;return t?n.createElement(d,l(l({ref:r},s),{},{components:t})):n.createElement(d,l({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5738:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return g}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={title:"Prueba de la API con Swagger",id:"tuto-6-swagger-interface",slug:"6-swagger-interface"},p=void 0,c={unversionedId:"tutorials/real-world-example-with-react/tuto-6-swagger-interface",id:"tutorials/real-world-example-with-react/tuto-6-swagger-interface",title:"Prueba de la API con Swagger",description:"Ahora que se ha implementado el primer punto final de la API, el siguiente paso es probarlo.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/6-swagger-interface.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/6-swagger-interface",permalink:"/es/docs/tutorials/real-world-example-with-react/6-swagger-interface",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/6-swagger-interface.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Prueba de la API con Swagger",id:"tuto-6-swagger-interface",slug:"6-swagger-interface"},sidebar:"someSidebar",previous:{title:"Su Primera Ruta",permalink:"/es/docs/tutorials/real-world-example-with-react/5-our-first-route"},next:{title:"La Aplicaci\xf3n Frontend",permalink:"/es/docs/tutorials/real-world-example-with-react/7-add-frontend"}},s=[],u={toc:s};function g(e){var r=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ahora que se ha implementado el primer punto final de la API, el siguiente paso es probarlo."),(0,o.kt)("p",null,"Para ello, generar\xe1 una p\xe1gina de documentaci\xf3n completa de su API desde la que podr\xe1 enviar solicitudes. Esta p\xe1gina se generar\xe1 utilizando ",(0,o.kt)("a",{parentName:"p",href:"https://swagger.io/tools/swagger-ui/"},"Swagger UI")," y la ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/"},"especificaci\xf3n OpenAPI"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @foal/swagger\n")),(0,o.kt)("p",null,"En primer lugar, proporcione alguna informaci\xf3n para describir su API de forma global."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiInfo, ApiServer, controller } from '@foal/core';\nimport { StoriesController } from './api';\n\n@ApiInfo({\n  title: 'Application API',\n  version: '1.0.0'\n})\n@ApiServer({\n  url: '/api'\n})\nexport class ApiController {\n\n  subControllers = [\n    controller('/stories', StoriesController),\n  ];\n\n}\n\n")),(0,o.kt)("p",null,"A continuaci\xf3n, genere un nuevo controlador. Este se encargar\xe1 de renderizar la nueva p\xe1gina."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"foal generate controller openapi --register\n")),(0,o.kt)("p",null,"Haga que la clase generada extienda la clase abstracta ",(0,o.kt)("inlineCode",{parentName:"p"},"SwaggerController"),". Y luego proporcione el controlador ra\xedz de su API como una opci\xf3n al controlador."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SwaggerController } from '@foal/swagger';\nimport { ApiController } from './api.controller';\n\nexport class OpenapiController extends SwaggerController  {\n\n  options = {\n    controllerClass: ApiController\n  }\n\n}\n")),(0,o.kt)("p",null,"Por \xfaltimo, actualice su archivo ",(0,o.kt)("inlineCode",{parentName:"p"},"app.controller.ts")," para que la p\xe1gina Swagger UI est\xe9 disponible en ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3001/swagger"},"/swagger"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { controller, IAppController } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { ApiController, OpenapiController } from './controllers';\n\nexport class AppController implements IAppController {\n  subControllers = [\n    controller('/api', ApiController),\n    controller('/swagger', OpenapiController)\n  ];\n\n  async init() {\n    await createConnection();\n  }\n}\n\n")),(0,o.kt)("p",null,"Si navega hasta ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3001/swagger"},"http://localhost:3001/swagger"),", ver\xe1 la p\xe1gina de documentaci\xf3n generada a partir de su c\xf3digo."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Swagger page",src:t(4466).Z,width:"2560",height:"1394"})),(0,o.kt)("p",null,"Ahora haga clic en el bot\xf3n ",(0,o.kt)("em",{parentName:"p"},"Try it out"),". Los campos se vuelven editables y puede enviar solicitudes para probar su API."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Swagger page",src:t(796).Z,width:"2560",height:"1386"})))}g.isMDXComponent=!0},4466:function(e,r,t){r.Z=t.p+"assets/images/swagger1-3abe32cd345086f35f191e1284daa45e.png"},796:function(e,r,t){r.Z=t.p+"assets/images/swagger2-a7c73effa7473d646ed981f1f55acd4f.png"}}]);
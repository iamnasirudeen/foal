(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(263)),i={title:"Pruebas Unitarias"},s={unversionedId:"tutorials/simple-todo-list/7-unit-testing",id:"tutorials/simple-todo-list/7-unit-testing",isDocsHomePage:!1,title:"Pruebas Unitarias",description:"El \xfaltimo paso de este tutorial es a\xf1adir algunas pruebas unitarias al ApiController.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/simple-todo-list/7-unit-testing.md",slug:"/tutorials/simple-todo-list/7-unit-testing",permalink:"/es/docs/tutorials/simple-todo-list/7-unit-testing",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/tutorials/simple-todo-list/7-unit-testing.md",version:"current",sidebar:"someSidebar",previous:{title:"Validaci\xf3n & Sanitizaci\xf3n",permalink:"/es/docs/tutorials/simple-todo-list/6-validation-and-sanitization"},next:{title:"Introducci\xf3n",permalink:"/es/docs/tutorials/multi-user-todo-list/1-Introduction"}},l=[],c={toc:l};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"El \xfaltimo paso de este tutorial es a\xf1adir algunas pruebas unitarias al ",Object(a.b)("inlineCode",{parentName:"p"},"ApiController"),"."),Object(a.b)("p",null,"Un archivo de pruebas unitarias termina con la extensi\xf3n ",Object(a.b)("inlineCode",{parentName:"p"},"spec.ts")," y suele colocarse junto al archivo que est\xe1 probando."),Object(a.b)("p",null,"Abra el archivo ",Object(a.b)("inlineCode",{parentName:"p"},"api.controller.spec.ts")," y sustituya su contenido."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// std\n// The `assert` module provides a simple set of assertion tests.\nimport { ok, strictEqual } from 'assert';\n\n// 3p\nimport { createController, getHttpMethod, getPath, isHttpResponseOK } from '@foal/core';\nimport { Connection, createConnection } from 'typeorm';\n\n// App\nimport { Todo } from '../entities';\nimport { ApiController } from './api.controller';\n\n// Define a group of tests.\ndescribe('ApiController', () => {\n\n  let controller: ApiController;\n  let connection: Connection;\n\n  // Create a connection to the database before running all the tests.\n  before(async () => {\n    // The connection uses the configuration defined in the file config/test.json.\n    // By default, the file has three connection options:\n    //  \"database\": \"./test_db.sqlite3\" -> Use a different database for running the tests.\n    // \"synchronize\": true ->  Auto create the database schema when the connection is established.\n    // \"dropSchema\": true -> Drop the schema when the connection is established (empty the database).\n    connection = await createConnection();\n  });\n\n  // Close the database connection after running all the tests whether they succeed or failed.\n  after(() => connection.close());\n\n  // Create or re-create the controller before each test.\n  beforeEach(() => controller = createController(ApiController));\n\n  // Define a nested group of tests.\n  describe('has a \"getTodos\" method that', () => {\n\n    // Define a unit test.\n    it('should handle requests at GET /.', () => {\n      // Throw an error and make the test fail if the http method of `getTodos` is not GET.\n      strictEqual(getHttpMethod(ApiController, 'getTodos'), 'GET');\n      // Throw an error and make the test fail if the path of `getTodos` is not /todos.\n      strictEqual(getPath(ApiController, 'getTodos'), '/todos');\n    });\n\n    // Define a unit test.\n    it('should return an HttpResponseOK.', async () => {\n      // Create fake todos.\n      const todo1 = new Todo();\n      todo1.text = 'Todo 1';\n\n      const todo2 = new Todo();\n      todo2.text = 'Todo 2';\n\n      // Save the todos.\n      await connection.manager.save([ todo1, todo2 ]);\n\n      const response = await controller.getTodos();\n      ok(isHttpResponseOK(response), 'response should be an instance of HttpResponseOK.');\n\n      const body = response.body;\n\n      ok(Array.isArray(body), 'The body of the response should be an array.');\n      strictEqual(body[0].text, 'Todo 1');\n      strictEqual(body[1].text, 'Todo 2');\n    });\n\n  });\n\n});\n\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Como un m\xe9todo del controlador devuelve un objeto ",Object(a.b)("inlineCode",{parentName:"p"},"HttpResponse"),", es realmente f\xe1cil probar el estado y el cuerpo de la respuesta.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Si el m\xe9todo del controlador toma un objeto ",Object(a.b)("inlineCode",{parentName:"p"},"Context")," como argumento, puede instanciar uno as\xed ",Object(a.b)("inlineCode",{parentName:"p"},'nuevo Contexto({ /* contenido del objeto "request" de Express */})'),".")),Object(a.b)("p",null,"Ejecute las pruebas."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"npm run test\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Este comando vigila sus pruebas y archivos probados en los directorios ",Object(a.b)("inlineCode",{parentName:"p"},"app/")," y ",Object(a.b)("inlineCode",{parentName:"p"},"scripts/"),". Cuando se modifica un archivo, recompila autom\xe1ticamente y vuelve a ejecutar sus pruebas.")),Object(a.b)("p",null,"Ahora deber\xeda terminar con esta salida:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Salida de las pruebas unitarias",src:n(338).default})),Object(a.b)("p",null,"\xa1Enhorabuena! \xa1Ha llegado al final de este tutorial!"),Object(a.b)("p",null,"Si tiene alguna pregunta, \xa1no dude en abrir una issue en Github!"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"El c\xf3digo fuente completo est\xe1 disponible ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://foalts.org/simple-todo-list-source-code-v2.zip"}),"aqu\xed"),".")))}u.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},338:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/unit-tests-output-92ff8a147084006f7e318c124a0f053e.png"}}]);
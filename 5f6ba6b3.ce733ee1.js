(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(263)),c=n(267),l=n(268),p={title:"OpenAPI & Swagger UI"},i={unversionedId:"api-section/openapi-and-swagger-ui",id:"api-section/openapi-and-swagger-ui",isDocsHomePage:!1,title:"OpenAPI & Swagger UI",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/docs/api-section/openapi-and-swagger-ui.md",slug:"/api-section/openapi-and-swagger-ui",permalink:"/docs/api-section/openapi-and-swagger-ui",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/api-section/openapi-and-swagger-ui.md",version:"current",sidebar:"someSidebar",previous:{title:"REST API",permalink:"/docs/api-section/rest-blueprints"},next:{title:"Public API & CORS Requests",permalink:"/docs/api-section/public-api-and-cors-requests"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Quick Start",id:"quick-start",children:[]},{value:"OpenAPI",id:"openapi",children:[{value:"The Basics",id:"the-basics",children:[]},{value:"Don&#39;t Repeat Yourself and Decorate Sub-Controllers",id:"dont-repeat-yourself-and-decorate-sub-controllers",children:[]},{value:"Use Existing Hooks",id:"use-existing-hooks",children:[]},{value:"Generate the API Document",id:"generate-the-api-document",children:[]}]},{value:"Swagger UI",id:"swagger-ui",children:[{value:"Simple case",id:"simple-case",children:[]},{value:"With an URL",id:"with-an-url",children:[]},{value:"Several APIs or Versions",id:"several-apis-or-versions",children:[]},{value:"Using a Static File",id:"using-a-static-file",children:[]}]},{value:"Advanced",id:"advanced",children:[{value:"Using Controller Properties",id:"using-controller-properties",children:[]},{value:"In-Depth Overview",id:"in-depth-overview",children:[]},{value:"Define and Reuse Components",id:"define-and-reuse-components",children:[]},{value:"Generate and Save a Specification File with a Shell Script",id:"generate-and-save-a-specification-file-with-a-shell-script",children:[]},{value:"Common Errors",id:"common-errors",children:[]},{value:"Extend Swagger UI options",id:"extend-swagger-ui-options",children:[]}]}],b={toc:s};function u(e){var t=e.components,p=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,p,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://foalts.org/docs/1.x/"}),"here"),".")),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"OpenAPI Specification")," (formerly known as Swagger Specification) is an API description format for REST APIs. An OpenAPI ",Object(o.b)("em",{parentName:"p"},"document")," allows developers to describe entirely an API."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Swagger UI")," is a graphical interface to visualize and interact with the API\u2019s resources. It is automatically generated from one or several OpenAPI documents."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://editor.swagger.io/"}),"Example of OpenAPI document and Swagger Visualisation"))),Object(o.b)("h2",{id:"quick-start"},"Quick Start"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"This example shows how to generate a documentation page of your API directly from your hooks and controllers."))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"app.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { controller } from '@foal/core';\n\nimport { ApiController, OpenApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiController),\n    controller('/swagger', OpenApiController),\n  ]\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiInfo, ApiServer, Context, Post, ValidateBody } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n@ApiServer({\n  url: '/api'\n})\n@JWTRequired()\nexport class ApiController {\n\n  @Post('/products')\n  @ValidateBody({\n    type: 'object',\n    properties: {\n      name: { type: 'string' }\n    },\n    required: [ 'name' ],\n    additionalProperties: false,\n  })\n  createProduct(ctx: Context) {\n    // ...\n  }\n\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"openapi.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiController } from './api.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = { controllerClass: ApiController };\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Result")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Swagger page",src:n(364).default})),Object(o.b)("h2",{id:"openapi"},"OpenAPI"),Object(o.b)("h3",{id:"the-basics"},"The Basics"),Object(o.b)("p",null,"The first thing to do is to add the ",Object(o.b)("inlineCode",{parentName:"p"},"@ApiInfo")," decorator to the root controller of the API. Two attributes are required: the ",Object(o.b)("inlineCode",{parentName:"p"},"title")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"version")," of the API."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiInfo } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n// @ApiServer({\n//   url: '/api'\n// })\nexport class ApiController {\n  // ...\n}\n")),Object(o.b)("p",null,"Then each controller method can be documented with the ",Object(o.b)("inlineCode",{parentName:"p"},"@ApiOperation")," decorator."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiOperation, Get } from '@foal/core';\n\n// ...\nexport class ApiController {\n  @Get('/products')\n  @ApiOperation({\n    responses: {\n      200: {\n        content: {\n          'application/json': {\n            schema: {\n              items: {\n                properties: {\n                  name: { type: 'string' }\n                }\n                type: 'object',\n                required: [ 'name' ]\n              },\n              type: 'array',\n            }\n          }\n        }\n        description: 'successful operation'\n      }\n    },\n    summary: 'Return a list of all the products.'\n  })\n  readProducts() {\n    // ...\n  }\n}\n")),Object(o.b)("p",null,"Beside the ",Object(o.b)("inlineCode",{parentName:"p"},"@ApiOperation")," decorator, you can also use other decorators more specific to improve the readability of the code."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Operation Decorators"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiOperationSummary"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiOperationId"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiOperationDescription"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiServer"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiRequestBody"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiSecurityRequirement"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiDefineTag"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiExternalDoc"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiUseTag"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiParameter"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiResponse"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiCallback"))))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiOperation, ApiResponse, Get } from '@foal/core';\n// ...\nexport class ApiController {\n\n  @Get('/products')\n  @ApiOperation({\n    responses: {\n      200: {\n        description: 'successful operation'\n      },\n      404: {\n        description: 'not found'\n      },\n    }\n  })\n  readProducts() {\n    // ...\n  }\n\n  // is equivalent to\n\n  @Get('/products')\n  @ApiResponse(200, { description: 'successful operation' })\n  @ApiResponse(404, { description: 'not found' })\n  readProducts() {\n    // ...\n  }\n\n}\n")),Object(o.b)("h3",{id:"dont-repeat-yourself-and-decorate-sub-controllers"},"Don't Repeat Yourself and Decorate Sub-Controllers"),Object(o.b)("p",null,"Large applications can have many subcontrollers. FoalTS automatically resolves the paths for you and allows you to share common specifications between several operations."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiDeprecated, ApiInfo, ApiResponse, controller, Get } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\nexport class ApiController {\n  subControllers = [\n    controller('/products', ProductController)\n  ];\n}\n\n// All the operations of this controller and\n// its subcontrollers should be deprecated.\n@ApiDeprecated()\nclass ProductController {\n\n  @Get()\n  @ApiResponse(200, { description: 'successful operation' })\n  readProducts() {\n    // ...\n  }\n\n  @Get('/:productId')\n  @ApiResponse(200, { description: 'successful operation' })\n  @ApiResponse(404, { description: 'not found' })\n  readProduct() {\n    // ...\n  }\n\n}\n")),Object(o.b)("p",null,"The generated document will then look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  /products: # The path is computed automatically\n    get:\n      deprecated: true # The operation is deprecated\n      responses:\n        200:\n          description: successful operation\n  /products/{productId}: # The path is computed automatically\n    get:\n      deprecated: true # The operation is deprecated\n      responses:\n        200:\n          description: successful operation\n        404:\n          description: not found\n")),Object(o.b)("h3",{id:"use-existing-hooks"},"Use Existing Hooks"),Object(o.b)("p",null,"The addition of these decorators can be quite redundant with existing hooks. For example, if we want to write OpenAPI documentation for authentication and validation of the request body, we may end up with something like this."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@JWTRequired()\n@ApiSecurityRequirement({ bearerAuth: [] })\n@ApiDefineSecurityScheme('bearerAuth', {\n  type: 'http',\n  scheme: 'bearer',\n  bearerFormat: 'JWT'\n})\nexport class ApiController {\n  \n  @Post('/products')\n  @ValidateBody(schema)\n  @ApiRequestBody({\n     required: true,\n     content: {\n       'application/json': { schema }\n     }\n  })\n  createProducts() {\n    \n  }\n\n}\n")),Object(o.b)("p",null,"To avoid this, the framework hooks already expose an API specification which is directly included in the generated OpenAPI document."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@JWTRequired()\nexport class ApiController {\n  \n  @Post('/products')\n  @ValidateBody(schema)\n  createProducts() {\n    // ...\n  }\n\n}\n")),Object(o.b)("p",null,"You can disable this behavior globally with the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/deployment-and-environments/configuration"}),"configuration key")," ",Object(o.b)("inlineCode",{parentName:"p"},"setting.openapi.useHooks"),"."),Object(o.b)(c.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"yaml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  openapi:\n    useHooks: false\n"))),Object(o.b)(l.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "openapi": {\n      "useHooks": false\n    }\n  }\n}\n'))),Object(o.b)(l.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  settings: {\n    openapi: {\n      useHooks: false\n    }\n  }\n}\n")))),Object(o.b)("p",null,"You can also disable it on a specific hook with the ",Object(o.b)("inlineCode",{parentName:"p"},"openapi")," option."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export class ApiController {\n  \n  @Post('/products')\n  // Generate automatically the OpenAPI spec for the request body\n  @ValidateBody(schema)\n  // Choose to write a customize spec for the path parameters\n  @ValidateParams(schema2, { openapi: false })\n  @ApiParameter( ... )\n  createProducts() {\n    // ...\n  }\n\n}\n")),Object(o.b)("h3",{id:"generate-the-api-document"},"Generate the API Document"),Object(o.b)("p",null,"Once the controllers are decorated, there are several ways to generate the OpenAPI document."),Object(o.b)("h4",{id:"from-the-controllers"},"from the controllers"),Object(o.b)("p",null,"Documents can be retrieved with the ",Object(o.b)("inlineCode",{parentName:"p"},"OpenApi")," service:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, OpenApi } from '@foal/core';\n\nclass Service {\n  @dependency\n  openApi: OpenApi;\n\n  foo() {\n    const document = this.openApi.getDocument(ApiController);\n  }\n}\n\n")),Object(o.b)("h4",{id:"from-a-shell-script"},"from a shell script"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"foal generate script generate-openapi-doc\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"createOpenApiDocument")," function can also be used in a shell script to generate the document."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"Note that this function instantiates the controllers. So if you have logic in your constructors, you may prefer to put it in ",Object(o.b)("inlineCode",{parentName:"em"},"init")," methods."))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"src/scripts/generate-openapi-doc.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// std\nimport { writeFileSync } from 'fs';\n\n// 3p\nimport { createOpenApiDocument } from '@foal/core';\nimport { stringify } from 'yamljs';\n\n// App\nimport { ApiController } from '../app/controllers';\n\nexport async function main() {\n  const document = createOpenApiDocument(ApiController);\n  const yamlDocument = stringify(document);\n\n  writeFileSync('openapi.yml', yamlDocument, 'utf8');\n}\n\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run build:scripts\nfoal run generate-openapi-doc\n")),Object(o.b)("h4",{id:"using-the-swagger-ui-controller"},"using the Swagger UI controller"),Object(o.b)("p",null,"Another alternative is to use the  ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#Swagger%20UI"}),"SwaggerController")," directly. This allows you to serve the document(s) at ",Object(o.b)("inlineCode",{parentName:"p"},"/openapi.json")," and to use it (them) in a Swagger interface."),Object(o.b)("h2",{id:"swagger-ui"},"Swagger UI"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Example of Swagger UI",src:n(365).default})),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install @foal/swagger\n")),Object(o.b)("h3",{id:"simple-case"},"Simple case"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"app.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiController, OpenApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiController),\n    controller('/swagger', OpenApiController)\n  ]\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"open-api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiController } from './api.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = { controllerClass: ApiController };\n}\n\n")),Object(o.b)("p",null,"Opening the browser at the path ",Object(o.b)("inlineCode",{parentName:"p"},"/swagger")," will display the documentation of the ",Object(o.b)("inlineCode",{parentName:"p"},"ApiController"),"."),Object(o.b)("h3",{id:"with-an-url"},"With an URL"),Object(o.b)("p",null,"If needed, you can also specify the URL of a custom OpenAPI file (YAML or JSON)."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { SwaggerController } from '@foal/swagger';\n\nexport class OpenApiController extends SwaggerController {\n  options = { url: 'https://petstore.swagger.io/v2/swagger.json' };\n}\n\n")),Object(o.b)("h3",{id:"several-apis-or-versions"},"Several APIs or Versions"),Object(o.b)("p",null,"Some applications may serve several APIs (for example two versions of a same API). Here is an example on how to handle this."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Example of several versions",src:n(366).default})),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"app.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { controller } from '@foal/core';\n\nimport { ApiV1Controller, ApiV2ontroller, OpenApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiV1Controller),\n    controller('/api2', ApiV2Controller),\n    controller('/swagger', OpenApiController),\n  ]\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"open-api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiV1Controller } from './api-v1.controller';\nimport { ApiV2Controller } from './api-v2.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = [\n    { name: 'v1', controllerClass: ApiV1Controller },\n    { name: 'v2', controllerClass: ApiV2Controller, primary: true },\n  ]\n}\n")),Object(o.b)("h3",{id:"using-a-static-file"},"Using a Static File"),Object(o.b)("p",null,"If you prefer to write manually your OpenAPI document, you can add an ",Object(o.b)("inlineCode",{parentName:"p"},"openapi.yml")," file in the ",Object(o.b)("inlineCode",{parentName:"p"},"public/")," directory and configure your ",Object(o.b)("inlineCode",{parentName:"p"},"SwaggerController")," as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { SwaggerController } from '@foal/swagger';\n\nexport class OpenApiController extends SwaggerController {\n  options = { url: '/openapi.yml' };\n}\n\n")),Object(o.b)("h2",{id:"advanced"},"Advanced"),Object(o.b)("h3",{id:"using-controller-properties"},"Using Controller Properties"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiRequestBody, IApiRequestBody, Post } from '@foal/core';\n\nclass ApiController {\n\n  requestBody: IApiRequestBody = {\n    content: {\n      'application/json': {\n        schema: {\n          type: 'object'\n        }\n      }\n    },\n    required: true\n  };\n\n  @Post('/products')\n  // This is invalid:\n  // @ApiRequestBody(this.requestBody)\n  // This is valid:\n  @ApiRequestBody(controller => controller.requestBody)\n  createProduct() {\n    // ...\n  }\n\n}\n")),Object(o.b)("h3",{id:"in-depth-overview"},"In-Depth Overview"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"FoalTS automatically resolves the path items and operations based on your controller paths.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiResponse, Get, Post } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\nexport class ApiController {\n\n  @Get('/products')\n  @ApiResponse(200, { description: 'successful operation' })\n  readProducts() {\n    // ...\n  }\n\n  @Post('/products')\n  @ApiResponse(200, { description: 'successful operation' })\n  createProduct() {\n    // ...\n  }\n\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'openapi: 3.0.0\ninfo:\n  title: \'A Great API\'\n  version: 1.0.0\npaths:\n  /products: # Foal automatically puts the "get" and "post" operations under the same path item as required by OpenAPI rules.\n    get:\n      responses:\n        200:\n          description: successful operation\n    post:\n      responses:\n        200:\n          description: successful operation\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The decorators ",Object(o.b)("inlineCode",{parentName:"li"},"@ApiServer"),", ",Object(o.b)("inlineCode",{parentName:"li"},"@ApiSecurityRequirement")," and ",Object(o.b)("inlineCode",{parentName:"li"},"@ApiExternalDocs")," have a different behavior depending on if they decorate the root controller or a subcontroller / a method.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example with the root controller")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiResponse, ApiServer } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n@ApiServer({ url: 'http://example.com' })\nexport class ApiController {\n\n  // ...\n\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  # ...\nservers:\n- url: http://example.com\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example with a subcontroller / a method")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiResponse, ApiServer, Get } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\nexport class ApiController {\n\n  @Get('/')\n  @ApiServer({ url: 'http://example.com' })\n  @ApiResponse(200, { description: 'successful operation' })\n  index() {\n    // ...\n  }\n\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  /:\n    get:\n      responses:\n        200:\n          description: successful operation\n      servers:\n      - url: http://example.com\n")),Object(o.b)("h3",{id:"define-and-reuse-components"},"Define and Reuse Components"),Object(o.b)("p",null,"OpenAPI allows you to define and reuse components. Here is a way to achieve this with Foal."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiInfo, ApiDefineSchema, Get } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n@ApiDefineSchema('product', {\n  type: 'object',\n  properties: {\n    name: { type: 'string' }\n  }\n  required: [ 'name' ]\n})\nexport class ApiController {\n\n  @Get('/products/:productId')\n  @ApiResponse(200, {\n    content: {\n      'application/json': {\n        schema: { $ref: '#/components/schema/product' }\n      }\n    }\n  })\n  readProducts() {\n    // ...\n  }\n\n  @Get('/products')\n  @ApiResponse(200, {\n    content: {\n      'application/json': {\n        schema: {\n          type: 'array',\n          items: { $ref: '#/components/schema/product' }\n        }\n      }\n    }\n  })\n  readProducts() {\n    // ...\n  }\n\n}\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Component Decorators"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiDefineSchema"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiDefineResponse"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiDefineParameter"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiDefineExample"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiDefineRequestBody"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiDefineHeader"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiDefineSecurityScheme"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiDefineLink"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiDefineCallback"))))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"}," The ",Object(o.b)("inlineCode",{parentName:"p"},"@ApiDefineXXX")," decorators can be added to any controllers or methods but they always define components in the global scope of the API the controller belongs to.")),Object(o.b)("p",null,"--"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The schemas defined with these decorators can also be re-used in the ",Object(o.b)("inlineCode",{parentName:"p"},"@ValidateXXX")," hooks."),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const productSchema = {\n  // ...\n}\n\n@ApiDefineSchema('product', productSchema)\n@ValidateBody({\n  $ref: '#/components/schemas/product'\n})\n"))),Object(o.b)("h3",{id:"generate-and-save-a-specification-file-with-a-shell-script"},"Generate and Save a Specification File with a Shell Script"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"foal generate script generate-openapi-doc\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"src/scripts/generate-openapi-doc.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// std\nimport { writeFileSync } from 'fs';\n\n// 3p\nimport { createOpenApiDocument } from '@foal/core';\nimport { stringify } from 'yamljs';\n\n// App\nimport { ApiController } from '../app/controllers';\n\nexport async function main() {\n  const document = createOpenApiDocument(ApiController);\n  const yamlDocument = stringify(document);\n\n  writeFileSync('openapi.yml', yamlDocument, 'utf8');\n}\n\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run build\nfoal run generate-openapi-doc\n")),Object(o.b)("h3",{id:"common-errors"},"Common Errors"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// ...\nexport class ApiController {\n  @Get('/products/:id')\n  getProduct() {\n    return new HttpResponseOK();\n  }\n\n  @Put('/products/:productId')\n  updateProduct() {\n    return new HttpResponseOK();\n  }\n}\n")),Object(o.b)("p",null,"This example will throw this error."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Error: Templated paths with the same hierarchy but different templated names MUST NOT exist as they are identical.\n  Path 1: /products/{id}\n  Path 2: /products/{productId}\n")),Object(o.b)("p",null,"OpenAPI does not support paths that are identical with different parameter names. Here is a way to solve this issue:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// ...\nexport class ApiController {\n  @Get('/products/:productId')\n  getProduct() {\n    return new HttpResponseOK();\n  }\n\n  @Put('/products/:productId')\n  updateProduct() {\n    return new HttpResponseOK();\n  }\n}\n")),Object(o.b)("h3",{id:"extend-swagger-ui-options"},"Extend Swagger UI options"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://swagger.io/docs/open-source-tools/swagger-ui/usage/configuration/"}),"Swagger UI options")," can be extended using the ",Object(o.b)("inlineCode",{parentName:"p"},"uiOptions")," property."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiController } from './api.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = { controllerClass: ApiController };\n\n  uiOptions = { docExpansion: 'full' };\n}\n\n")))}u.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,l(l({ref:t},i),{},{components:n})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},264:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},265:function(e,t,n){"use strict";var r=n(0),a=n(266);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},266:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},267:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(265),c=n(264),l=n(56),p=n.n(l),i=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,b=e.values,u=e.groupId,d=e.className,m=Object(o.a)(),O=m.tabGroupChoices,j=m.setTabGroupChoices,f=Object(r.useState)(l),g=f[0],h=f[1],y=r.Children.toArray(e.children);if(null!=u){var N=O[u];null!=N&&N!==g&&b.some((function(e){return e.value===N}))&&h(N)}var A=function(e){h(e),null!=u&&j(u,e)},v=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(c.a)("tabs__item",p.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return A(t)},onClick:function(){A(t)}},n)}))),t?Object(r.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},268:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},364:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/openapi-quick-start-4ec0b3bb97350bd038b2015be28a1381.png"},365:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger-a641f2dfd065149a6d8c2e98ccad465e.png"},366:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger3-3d35a6bde1ec1156853e65e4be372e6e.png"}}]);
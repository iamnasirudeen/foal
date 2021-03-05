(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{254:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(263)),s=n(267),i=n(268),c={title:"D\xe9marrage Rapide"},l={unversionedId:"authentication-and-access-control/quick-start",id:"authentication-and-access-control/quick-start",isDocsHomePage:!1,title:"D\xe9marrage Rapide",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/authentication-and-access-control/quick-start.md",slug:"/authentication-and-access-control/quick-start",permalink:"/fr/docs/authentication-and-access-control/quick-start",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/authentication-and-access-control/quick-start.md",version:"current",sidebar:"someSidebar",previous:{title:"Utiliser un Autre ORM ou Constructeur de Requ\xeates",permalink:"/fr/docs/databases/using-another-orm"},next:{title:"Classe User & Script create-user",permalink:"/fr/docs/authentication-and-access-control/user-class"}},p=[{value:"The Basics",id:"the-basics",children:[{value:"The Available Tokens (step 1)",id:"the-available-tokens-step-1",children:[]},{value:"The Authentication Hooks (step 2)",id:"the-authentication-hooks-step-2",children:[]}]},{value:"Examples",id:"examples",children:[{value:"SPA, 3rd party APIs, Mobile (cookies)",id:"spa-3rd-party-apis-mobile-cookies",children:[]},{value:"SPA, 3rd party APIs, Mobile (Authorization header)",id:"spa-3rd-party-apis-mobile-authorization-header",children:[]},{value:"SSR Applications (cookies)",id:"ssr-applications-cookies",children:[]}]}],u={toc:p};function b(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/fr/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://foalts.org/docs/1.x/"}),"here"),".")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Authentication")," is the process of verifying that a user is who he or she claims to be. It answers the question ",Object(o.b)("em",{parentName:"p"},"Who is the user?"),". "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"Example: a user enters their login credentials to connect to the application"),".")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Authorization"),", also known as ",Object(o.b)("em",{parentName:"p"},"Access Control"),", is the process of determining what an authenticated user is allowed to do. It answers the question ",Object(o.b)("em",{parentName:"p"},"Does the user has the right to do what they ask?"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"Example: a user tries to access the administrator page"),".")),Object(o.b)("p",null,"This document focuses on explaining how authentication works in FoalTS and gives several code examples to get started quickly. Further explanations are given in other pages of the documentation."),Object(o.b)("h2",{id:"the-basics"},"The Basics"),Object(o.b)("p",null,"The strength of FoalTS authentication system is that it can be used in a wide variety of applications. Whether you want to build a stateless REST API that uses social ID tokens or a traditional web application with templates, cookies and redirects, FoalTS provides you with the tools to do so. You can choose the elements you need and build your own authentication process."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Auth Support"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null})))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Kind of Application"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"API, Regular Web App, SPA+API, Mobile+API")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"State management"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Stateful (Session Tokens), Stateless (JSON Web Tokens)\xa0")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Credentials"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Passwords, Social\xa0")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Token storage"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Cookies, localStorage, Mobile, etc")))),Object(o.b)("p",null,"Whatever architecture you choose, the authentication process will always follow the same pattern."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 1: the user logs in.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"In some architectures, this step might be delegated to an external service: Google, Cognito, Auth0, etc"))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Verify the credentials (email & password, username & password, social, etc)."),Object(o.b)("li",{parentName:"ol"},"Generate a token (stateless or stateful)."),Object(o.b)("li",{parentName:"ol"},"Return the token to the client (in a cookie, in the response body or in a header).")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 2: once logged in, the user keeps being authenticated on subsequent requests.")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"On each request, receive and check the token and retrieve the associated user if the token is valid.")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Authentication architecture",src:n(402).default})),Object(o.b)("h3",{id:"the-available-tokens-step-1"},"The Available Tokens (step 1)"),Object(o.b)("p",null,"FoalTS provides two ways to generate tokens:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Session Tokens")," (stateful): They are probably the easiest way to manage authentication with Foal. Creation is straightforward, expiration is managed automatically and revocation is easy. Using session tokens keeps your code concise and does not require additional knowledge.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Unlike other restrictive session management systems, FoalTS sessions are not limited to traditional applications that use cookies, redirection and server-side rendering. You can choose to use sessions without cookies, in a SPA+API or Mobile+API architecture and deploy your application to a serverless environment.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"JSON Web Tokens")," (stateless): For more advanced developers, JWTs can be used to create stateless authentication or authentication that works with external social providers.")),Object(o.b)("h3",{id:"the-authentication-hooks-step-2"},"The Authentication Hooks (step 2)"),Object(o.b)("p",null,"In step 2, the hook ",Object(o.b)("inlineCode",{parentName:"p"},"@UseSessions")," takes care of checking the session tokens and retrieve their associated user. The same applies to ",Object(o.b)("inlineCode",{parentName:"p"},"JWTRequired")," and ",Object(o.b)("inlineCode",{parentName:"p"},"JWTOptional")," with JSON Web Tokens."),Object(o.b)("p",null,"You will find more information in the documentation pages dedicated to them."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("p",null,"The examples below can be used directly in your application to configure login, logout and signup routes. You can use them as they are or customize them to meet your specific needs."),Object(o.b)("p",null,"For these examples, we will use TypeORM as default ORM and emails and passwords as credentials. An API will allow authenticated users to list ",Object(o.b)("em",{parentName:"p"},"products")," with the request ",Object(o.b)("inlineCode",{parentName:"p"},"GET /api/products"),"."),Object(o.b)("p",null,"The definition of the ",Object(o.b)("inlineCode",{parentName:"p"},"User")," entity is common to all the examples and is as follows:"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"src/app/entities/user.entity.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  password: string;\n}\n\n// Exporting this line is required\n// when using session tokens with TypeORM.\n// It will be used by `npm run makemigrations`\n// to generate the SQL session table.\nexport { DatabaseSession } from '@foal/typeorm';\n")),Object(o.b)("h3",{id:"spa-3rd-party-apis-mobile-cookies"},"SPA, 3rd party APIs, Mobile (cookies)"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"As you use cookies, you must add a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/fr/docs/security/csrf-protection"}),"CSRF protection")," to your application.")),Object(o.b)("p",null,"In these implementations, the client does not have to handle the receipt, sending and expiration of the tokens itself. All is handled transparently by the server using cookies."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"Note: If you develop a native Mobile application, you may need to enable a "),"cookie",Object(o.b)("em",{parentName:"p"}," plugin in your code."))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"Note: If your server and client do not have the same origins, you may also need to enable ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/fr/docs/api-section/public-api-and-cors-requests"}),"CORS requests"),"."))),Object(o.b)("h4",{id:"using-session-tokens"},"Using Session Tokens"),Object(o.b)("p",null,"First, make sure that the ",Object(o.b)("inlineCode",{parentName:"p"},"DatabaseSession")," entity is exported in ",Object(o.b)("inlineCode",{parentName:"p"},"user.entity.ts"),". Then build and run the migrations."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm run makemigrations\nnpm run migrations\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"src/app/app.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { controller, dependency, IAppController, Store, UseSessions } from '@foal/core';\nimport { fetchUser } from '@foal/typeorm';\nimport { createConnection } from 'typeorm';\n\nimport { User } from './entities';\nimport { ApiController, AuthController } from './controllers';\n\n@UseSessions({\n  cookie: true,\n  user: fetchUser(User)\n})\nexport class AppController implements IAppController {\n  // This line is required.\n  @dependency\n  store: Store;\n\n  subControllers = [\n    controller('/auth', AuthController),\n    controller('/api', ApiController),\n  ];\n\n  async init() {\n    await createConnection();\n  }\n\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"src/app/controllers/auth.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, hashPassword, HttpResponseOK, HttpResponseUnauthorized, Post, Session, ValidateBody, verifyPassword } from '@foal/core';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport class AuthController {\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context<any, Session>) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await user.save();\n\n    ctx.session.setUser(user);\n    await ctx.session.regenerateID();\n\n    return new HttpResponseOK();\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context<any, Session>) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session.setUser(user);\n    await ctx.session.regenerateID();\n\n    return new HttpResponseOK();\n  }\n\n  @Post('/logout')\n  async logout(ctx: Context<any, Session>) {\n    await ctx.session.destroy();\n\n    return new HttpResponseOK();\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"src/app/controllers/api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get, HttpResponseOK, UserRequired } from '@foal/core';\n\n@UserRequired()\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),Object(o.b)("h4",{id:"using-json-web-tokens"},"Using JSON Web Tokens"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"When using stateless authentication with JWT, you must manage the renewal of tokens after their expiration yourself. You also cannot list all users logged into your application.")),Object(o.b)("p",null,"First, generate a base64-encoded secret."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"foal createsecret\n")),Object(o.b)("p",null,"Save this secret in a ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'JWT_SECRET="Ak0WcVcGuOoFuZ4oqF1tgqbW6dIAeSacIN6h7qEyJM8="\n')),Object(o.b)("p",null,"Update your configuration to retrieve the secret."),Object(o.b)(s.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"yaml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  jwt:\n    secret: env(JWT_SECRET)\n    secretEncoding: base64\n"))),Object(o.b)(i.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "jwt": {\n      "secret": "env(JWT_SECRET)",\n      "secretEncoding": "base64"\n    }\n  }\n}\n'))),Object(o.b)(i.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'const { Env } = require(\'@foal/core\');\n\nmodule.exports = {\n  settings: {\n    jwt: {\n      secret: Env.get("JWT_SECRET"),\n      secretEncoding: "base64"\n    }\n  }\n}\n')))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"src/app/app.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { controller, IAppController } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { ApiController, AuthController } from './controllers';\n\nexport class AppController implements IAppController {\n\n  subControllers = [\n    controller('/auth', AuthController),\n    controller('/api', ApiController),\n  ];\n\n  async init() {\n    await createConnection();\n  }\n\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"src/app/controllers/auth.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, hashPassword, HttpResponseOK, HttpResponseUnauthorized, Post, ValidateBody, verifyPassword } from '@foal/core';\nimport { getSecretOrPrivateKey, removeAuthCookie, setAuthCookie } from '@foal/jwt';\nimport { sign } from 'jsonwebtoken';\nimport { promisify } from 'util';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport class AuthController {\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await user.save();\n\n    const response = new HttpResponseOK();\n    await setAuthCookie(response, await this.createJWT(user));\n    return response;\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    const response = new HttpResponseOK();\n    await setAuthCookie(response, await this.createJWT(user));\n    return response;\n  }\n\n  @Post('/logout')\n  async logout(ctx: Context) {\n    const response = new HttpResponseOK();\n    removeAuthCookie(response);\n    return response;\n  }\n\n  private async createJWT(user: User): Promise<string> {\n    const payload = {\n      email: user.email,\n      id: user.id,\n    };\n    \n    return promisify(sign as any)(\n      payload,\n      getSecretOrPrivateKey(),\n      { subject: user.id.toString() }\n    );\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"src/app/controllers/api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get, HttpResponseOK } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\nimport { User } from './entities';\n\n@JWTRequired({\n  cookie: true,\n  // Add the line below if you prefer ctx.user\n  // to be an instance of User instead of the JWT payload.\n  // user: fetchUser(User)\n})\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),Object(o.b)("h3",{id:"spa-3rd-party-apis-mobile-authorization-header"},"SPA, 3rd party APIs, Mobile (Authorization header)"),Object(o.b)("p",null,"In these implementations, the user logs in with the route ",Object(o.b)("inlineCode",{parentName:"p"},"POST /auth/login")," and receives a token in exchange in the response body. Then, when the client makes a request to the API, the token must be included in the ",Object(o.b)("inlineCode",{parentName:"p"},"Authorization")," header using the bearer sheme."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Authorization: Bearer my-token\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"Note: If your server and client do not have the same origins, you may also need to enable ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/fr/docs/api-section/public-api-and-cors-requests"}),"CORS requests"),"."))),Object(o.b)("h4",{id:"using-session-tokens-1"},"Using Session Tokens"),Object(o.b)("p",null,"First, make sure that the ",Object(o.b)("inlineCode",{parentName:"p"},"DatabaseSession")," entity is exported in ",Object(o.b)("inlineCode",{parentName:"p"},"user.entity.ts"),". Then build and run the migrations."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm run makemigrations\nnpm run migrations\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"src/app/app.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { controller, IAppController } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { ApiController, AuthController } from './controllers';\n\nexport class AppController implements IAppController {\n\n  subControllers = [\n    controller('/auth', AuthController),\n    controller('/api', ApiController),\n  ];\n\n  async init() {\n    await createConnection();\n  }\n\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"src/app/controllers/auth.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, createSession, dependency, hashPassword, HttpResponseOK, HttpResponseUnauthorized, Post, Store, UseSessions, ValidateBody, verifyPassword } from '@foal/core';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\n@UseSessions()\nexport class AuthController {\n  @dependency\n  store: Store;\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await user.save();\n\n    ctx.session = await createSession(this.store);\n    ctx.session.setUser(user);\n\n    return new HttpResponseOK({\n      token: ctx.session.getToken()\n    });\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session = await createSession(this.store);\n    ctx.session.setUser(user);\n\n    return new HttpResponseOK({\n      token: ctx.session.getToken()\n    });\n  }\n\n  @Post('/logout')\n  async logout(ctx: Context) {\n    if (ctx.session) {\n      await ctx.session.destroy();\n    }\n\n    return new HttpResponseOK();\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"src/app/controllers/api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get, HttpResponseOK, UserRequired, UseSessions } from '@foal/core';\nimport { fetchUser } from '@foal/typeorm';\n\nimport { User } from '../entities';\n\n// The `request` option returns a pretty message if the Authorization header is not here.\n@UseSessions({\n  required: true,\n  user: fetchUser(User)\n})\n@UserRequired()\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),Object(o.b)("h4",{id:"using-json-web-tokens-1"},"Using JSON Web Tokens"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"When using stateless authentication with JWT, you must manage the renewal of tokens after their expiration yourself. You also cannot list all users logged into your application.")),Object(o.b)("p",null,"First, generate a base64-encoded secret."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"foal createsecret\n")),Object(o.b)("p",null,"Save this secret in a ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'JWT_SECRET="Ak0WcVcGuOoFuZ4oqF1tgqbW6dIAeSacIN6h7qEyJM8="\n')),Object(o.b)("p",null,"Update your configuration to retrieve the secret."),Object(o.b)(s.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"yaml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  jwt:\n    secret: env(JWT_SECRET)\n    secretEncoding: base64\n"))),Object(o.b)(i.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "jwt": {\n      "secret": "env(JWT_SECRET)",\n      "secretEncoding": "base64"\n    }\n  }\n}\n'))),Object(o.b)(i.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'const { Env } = require(\'@foal/core\');\n\nmodule.exports = {\n  settings: {\n    jwt: {\n      secret: Env.get("JWT_SECRET"),\n      secretEncoding: "base64"\n    }\n  }\n}\n')))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"src/app/app.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { controller, IAppController } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { ApiController, AuthController } from './controllers';\n\nexport class AppController implements IAppController {\n\n  subControllers = [\n    controller('/auth', AuthController),\n    controller('/api', ApiController),\n  ];\n\n  async init() {\n    await createConnection();\n  }\n\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"src/app/controllers/auth.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, hashPassword, HttpResponseOK, HttpResponseUnauthorized, Post, ValidateBody, verifyPassword } from '@foal/core';\nimport { getSecretOrPrivateKey } from '@foal/jwt';\nimport { sign } from 'jsonwebtoken';\nimport { promisify } from 'util';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport class AuthController {\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await user.save();\n\n    return new HttpResponseOK({\n      token: await this.createJWT(user)\n    });\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    return new HttpResponseOK({\n      token: await this.createJWT(user)\n    });\n  }\n\n  private async createJWT(user: User): Promise<string> {\n    const payload = {\n      email: user.email,\n      id: user.id,\n    };\n    \n    return promisify(sign as any)(\n      payload,\n      getSecretOrPrivateKey(),\n      { subject: user.id.toString() }\n    );\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"src/app/controllers/api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get, HttpResponseOK } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\nimport { User } from '../entities';\n\n@JWTRequired({\n  // Add the line below if you prefer ctx.user\n  // to be an instance of User instead of the JWT payload.\n  // user: fetchUser(User)\n})\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),Object(o.b)("h3",{id:"ssr-applications-cookies"},"SSR Applications (cookies)"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"As you use cookies, you must add a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/fr/docs/security/csrf-protection"}),"CSRF protection")," to your application.")),Object(o.b)("p",null,"In this implementation, the client does not have to handle the receipt, sending and expiration of the tokens itself. All is handled transparently by the server using cookies and redirections."),Object(o.b)("h4",{id:"using-session-tokens-2"},"Using Session Tokens"),Object(o.b)("p",null,"First, make sure that the ",Object(o.b)("inlineCode",{parentName:"p"},"DatabaseSession")," entity is exported in ",Object(o.b)("inlineCode",{parentName:"p"},"user.entity.ts"),". Then build and run the migrations."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm run makemigrations\nnpm run migrations\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"src/app/app.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, controller, dependency, Get, IAppController, render, Session, Store, UserRequired, UseSessions } from '@foal/core';\nimport { fetchUser } from '@foal/typeorm';\nimport { createConnection } from 'typeorm';\n\nimport { ApiController, AuthController } from './controllers';\nimport { User } from './entities';\n\n@UseSessions({\n  cookie: true,\n  user: fetchUser(User)\n})\nexport class AppController implements IAppController {\n  // This line is required.\n  @dependency\n  store: Store;\n\n  subControllers = [\n    controller('/auth', AuthController),\n    controller('/api', ApiController),\n  ];\n  \n  async init() {\n    await createConnection();\n  }\n\n  @Get('/')\n  @UserRequired({ redirectTo: '/login' })\n  index() {\n    return render('./templates/index.html');\n  }\n\n  @Get('/login')\n  login(ctx: Context<any, Session>) {\n    return render('./templates/login.html', {\n      errorMessage: ctx.session.get<string>('errorMessage', '')\n    });\n  }\n\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"src/app/controllers/auth.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, hashPassword, HttpResponseRedirect, Post, Session, ValidateBody, verifyPassword } from '@foal/core';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport class AuthController {\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context<any, Session>) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await user.save();\n\n    ctx.session.setUser(user);\n    await ctx.session.regenerateID();\n\n    return new HttpResponseRedirect('/');\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context<any, Session>) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      ctx.session.set('errorMessage', 'Unknown email.', { flash: true });\n      return new HttpResponseRedirect('/login');\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      ctx.session.set('errorMessage', 'Invalid password.', { flash: true });\n      return new HttpResponseRedirect('/login');\n    }\n\n    ctx.session.setUser(user);\n    await ctx.session.regenerateID();\n\n    return new HttpResponseRedirect('/');\n  }\n\n  @Post('/logout')\n  async logout(ctx: Context<any, Session>) {\n    await ctx.session.destroy();\n\n    return new HttpResponseRedirect('/login');\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"src/app/controllers/api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get, HttpResponseOK, UserRequired } from '@foal/core';\n\n@UserRequired()\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"templates/login.html")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Login</title>\n</head>\n<body>\n  {{ errorMessage }}\n  <form action="/auth/login" method="post">\n    <input type="email" name="email" id="email">\n    <input type="password" name="password" id="password">\n    <input type="submit" value="Log In">\n  </form>\n</body>\n</html>\n')))}b.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},264:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},265:function(e,t,n){"use strict";var r=n(0),a=n(266);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},266:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},267:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(265),s=n(264),i=n(56),c=n.n(i),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,u=e.values,b=e.groupId,d=e.className,m=Object(o.a)(),h=m.tabGroupChoices,O=m.setTabGroupChoices,j=Object(r.useState)(i),f=j[0],y=j[1],g=r.Children.toArray(e.children);if(null!=b){var w=h[b];null!=w&&w!==f&&u.some((function(e){return e.value===w}))&&y(w)}var N=function(e){y(e),null!=b&&O(b,e)},v=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(r.cloneElement)(g.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},268:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},402:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/auth-architecture-b33065fc731227be200c1fb1a412bf37.png"}}]);
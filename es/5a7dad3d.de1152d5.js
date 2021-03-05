(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{145:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return u}));var o=t(3),s=t(7),a=(t(0),t(263)),r=t(267),i=t(268),c={title:"Session Tokens & CSRF Protection"},l={unversionedId:"upgrade-to-v2/session-tokens",id:"upgrade-to-v2/session-tokens",isDocsHomePage:!1,title:"Session Tokens & CSRF Protection",description:"The main feature of FoalTS version 2 is the new session management. The new authentication system is intended to be more intuitive and to require less code and configuration. It also offers new functionalities.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/upgrade-to-v2/session-tokens.md",slug:"/upgrade-to-v2/session-tokens",permalink:"/es/docs/upgrade-to-v2/session-tokens",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/upgrade-to-v2/session-tokens.md",version:"current"},b=[{value:"Overview",id:"overview",children:[]},{value:"Session Tokens",id:"session-tokens",children:[{value:"Choosing and Configuring the Session Store",id:"choosing-and-configuring-the-session-store",children:[]},{value:"New Login",id:"new-login",children:[]},{value:"New Logout",id:"new-logout",children:[]},{value:"Access Control",id:"access-control",children:[]},{value:"Send the CSRF token in a template",id:"send-the-csrf-token-in-a-template",children:[]},{value:"Read or create a session",id:"read-or-create-a-session",children:[]},{value:"Revoking sessions",id:"revoking-sessions",children:[]},{value:"Breaking Changes that Should not Affect You",id:"breaking-changes-that-should-not-affect-you",children:[]}]},{value:"CSRF Protection",id:"csrf-protection",children:[]},{value:"New Features",id:"new-features",children:[{value:"Session Tokens",id:"session-tokens-1",children:[]}]}],p={toc:b};function u(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The main feature of FoalTS version 2 is the new session management. The new authentication system is intended to be more intuitive and to require less code and configuration. It also offers new functionalities."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note that when upgrading to version 2, all your users will be automatically logged out.")),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Previously, we had to manage a lot of functions and hooks to authenticate users in FoalTS: ",Object(a.b)("inlineCode",{parentName:"p"},"@TokenRequired"),", ",Object(a.b)("inlineCode",{parentName:"p"},"@TokenOptional"),", ",Object(a.b)("inlineCode",{parentName:"p"},"removeSessionCookie"),", ",Object(a.b)("inlineCode",{parentName:"p"},"setSessionCookie"),", ",Object(a.b)("inlineCode",{parentName:"p"},"getCsrfToken"),", ",Object(a.b)("inlineCode",{parentName:"p"},"@CsrfTokenRequired"),", ",Object(a.b)("inlineCode",{parentName:"p"},"setCsrfCookie"),"."),Object(a.b)("p",null,"Starting with version 2, they have all been removed and replaced with two unique hooks: ",Object(a.b)("inlineCode",{parentName:"p"},"@UseSessions")," and ",Object(a.b)("inlineCode",{parentName:"p"},"@UserRequired"),"."),Object(a.b)("p",null,"There is also no need for a session secret anymore. The config parameter ",Object(a.b)("inlineCode",{parentName:"p"},"settings.session.secret")," can therefore be removed."),Object(a.b)("h2",{id:"session-tokens"},"Session Tokens"),Object(a.b)("h3",{id:"choosing-and-configuring-the-session-store"},"Choosing and Configuring the Session Store"),Object(a.b)("h4",{id:"specify-the-store-in-the-configuration"},"Specify the Store in The Configuration"),Object(a.b)("p",null,"Since v1.11.0, FoalTS allows you to globally specify in the configuration which session store to use. This is now the recommended approach and it is assumed that you use it in all examples in the documentation."),Object(a.b)("p",null,"To specify the store globally, replace all references to ",Object(a.b)("inlineCode",{parentName:"p"},"TypeORMStore")," (or redis, mongo, etc) with ",Object(a.b)("inlineCode",{parentName:"p"},"Store")," and remove the ",Object(a.b)("inlineCode",{parentName:"p"},"store: TypeORMStore")," option from your hooks."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Store } from '@foal/core';\n\nclass AppController {\n  // Before\n  @dependency\n  store: TypeORMStore;\n\n  // After\n  @dependency\n  store: Store;\n\n\n  @Get('/products')\n  // Before\n  @TokenRequired({ store: TypeStore })\n  // After\n  @TokenRequired()\n  readProducts() {\n    // ...\n  }\n\n}\n")),Object(a.b)("p",null,"Then, in the configuration, specify the package name of your session store (",Object(a.b)("inlineCode",{parentName:"p"},"@foal/typeorm"),", ",Object(a.b)("inlineCode",{parentName:"p"},"@foal/redis"),", etc)."),Object(a.b)(r.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"yaml",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'settings:\n  session:\n    store: "@foal/typeorm"\n'))),Object(a.b)(i.a,{value:"json",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "session": {\n      "store": "@foal/typeorm",\n    }\n  }\n}\n'))),Object(a.b)(i.a,{value:"js",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    session: {\n      store: "@foal/typeorm",\n    }\n  }\n}\n')))),Object(a.b)("h4",{id:"typeorm-store"},"TypeORM Store"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Warning:")," Starting from version 2, ",Object(a.b)("inlineCode",{parentName:"p"},"TypeORMStore")," only support numbers (not strings) as user IDs."),Object(a.b)("p",null,"In version 1, when launching the application, Foal was making a request to the database to create the session table if it does not exist."),Object(a.b)("p",null,"This had two drawbacks:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This may make too many undesirable requests to the database in a severless environment."),Object(a.b)("li",{parentName:"ul"},"The database schema is updated at runtime outside the classical migration process. This practice can be dangerous and it does not allow to keep a traceability of the modifications of the database schema unlike migrations (revert, etc).")),Object(a.b)("p",null,"Starting from version 2, ",Object(a.b)("strong",{parentName:"p"},"you must generate and run migrations yourself")," to create the session table."),Object(a.b)("p",null,"The easier way to achieve this is probably to export the ",Object(a.b)("inlineCode",{parentName:"p"},"DatabaseSession")," entity from ",Object(a.b)("inlineCode",{parentName:"p"},"@foal/typeorm")," and to run the following commands."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"user.entity.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// ...\n\n@Entity()\nexport class User extends BaseEntity {\n\n}\n\nexport { DatabaseSession } from '@foal/typeorm';\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"npm run makemigrations\nnpm run migrations\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Once you application is migrated to version 2 and works as expected, you will be able to ",Object(a.b)("em",{parentName:"p"},"manually")," delete the old ",Object(a.b)("inlineCode",{parentName:"p"},"foal_session")," table. The new table used by the framework is named ",Object(a.b)("inlineCode",{parentName:"p"},"database_session"),".")),Object(a.b)("h4",{id:"redis-store"},"Redis Store"),Object(a.b)("p",null,"The configuration key ",Object(a.b)("inlineCode",{parentName:"p"},"redis.uri")," has been renamed to ",Object(a.b)("inlineCode",{parentName:"p"},"settings.redis.uri"),"."),Object(a.b)("p",null,"See also ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/config-system#environment-variables"}),"this"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},"Note: In the Redis database, session keys now start with ",Object(a.b)("inlineCode",{parentName:"em"},"sessions:")," instead of ",Object(a.b)("inlineCode",{parentName:"em"},"session:")),".")),Object(a.b)("h4",{id:"mongodb-store"},"MongoDB Store"),Object(a.b)("p",null,"The configuration key ",Object(a.b)("inlineCode",{parentName:"p"},"mongodb.uri")," has been renamed to ",Object(a.b)("inlineCode",{parentName:"p"},"settings.mongodb.uri"),"."),Object(a.b)("p",null,"See also ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/config-system#environment-variables"}),"this"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Once you application is migrated to version 2 and works as expected, you will be able to manually delete the old ",Object(a.b)("inlineCode",{parentName:"p"},"foalSessions")," collection. The new collection used by the framework is named ",Object(a.b)("inlineCode",{parentName:"p"},"sessions"),".")),Object(a.b)("h4",{id:"custom-store"},"Custom Store"),Object(a.b)("p",null,"Due to the complexity of implementing a store in version 1, it is unlikely that one has been implemented."),Object(a.b)("p",null,"However, if it has, the best way to upgrade it to version 2 is to rewrite it from scratch using the documentation."),Object(a.b)("h3",{id:"new-login"},"New Login"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},"You may be interested in looking at the ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"/es/docs/authentication-and-access-control/session-tokens"}),"quick start page")," as well."))),Object(a.b)("h4",{id:"example-with-the-authorization-header"},"Example with the ",Object(a.b)("inlineCode",{parentName:"h4"},"Authorization")," header"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Before")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"export class AuthController {\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    return new HttpResponseOK({\n      token: session.getToken()\n    });\n  }\n}\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"After")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { UseSessions, Store } from '@foal/core';\n\n@UseSessions()\nexport class AuthController {\n  @dependency\n  store: Store;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session = await createSession(this.store);\n    ctx.session.setUser(user);\n\n    return new HttpResponseOK({\n      token: ctx.session.getToken()\n    });\n  }\n}\n")),Object(a.b)("h4",{id:"example-with-cookies"},"Example with cookies"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Before")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"export class AuthController {\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    const response = new HttpResponseNoContent();\n    const token = session.getToken();\n    setSessionCookie(response, token);\n    return response;\n  }\n}\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"After")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { UseSessions, Store } from '@foal/core';\n\n@UseSessions({\n  cookie: true,\n  // user: fetchUser(User)\n})\nexport class AuthController {\n  // This line is required: the store must be injected in at least one controller.\n  @dependency\n  store: Store;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context<any, Session>) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session.setUser(user);\n\n    return new HttpResponseOK();\n  }\n\n}\n")),Object(a.b)("h3",{id:"new-logout"},"New Logout"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},"You may be interested in looking at the ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"/es/docs/authentication-and-access-control/session-tokens"}),"quick start page")," as well."))),Object(a.b)("p",null,"In version 2, you don't need to talk directly to the store, use weird options (such as ",Object(a.b)("inlineCode",{parentName:"p"},"extendLifeTimeOrUpdate"),") or manage cookies yourself."),Object(a.b)("p",null,"Just call ",Object(a.b)("inlineCode",{parentName:"p"},"session.destroy()")," and FoalTS will take care of everything else."),Object(a.b)("h4",{id:"example-with-the-authorization-header-1"},"Example with the ",Object(a.b)("inlineCode",{parentName:"h4"},"Authorization")," header"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Before")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"export class AuthController {\n\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/logout')\n  @TokenRequired({\n    extendLifeTimeOrUpdate: false,\n    store: TypeORMStore,\n  })\n  async logout(ctx: Context<any, Session>) {\n    await this.store.destroy(ctx.session.sessionID);\n\n    return new HttpResponseNoContent();\n  }\n\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"After")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"export class AuthController {\n\n  @Post('/logout')\n  @UseSessions()\n  async logout(ctx: Context) {\n    if (ctx.session) {\n      await ctx.session.destroy();\n    }\n\n    return new HttpResponseNoContent();\n  }\n\n}\n")),Object(a.b)("h4",{id:"example-with-cookies-1"},"Example with cookies"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Before")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"export class AuthController {\n\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/logout')\n  @TokenRequired({\n    cookie: true,\n    extendLifeTimeOrUpdate: false,\n    store: TypeORMStore,\n  })\n  async logout(ctx: Context<any, Session>) {\n    await this.store.destroy(ctx.session.sessionID);\n\n    const response = new HttpResponseNoContent();\n    removeSessionCookie(response);\n    return response;\n  }\n\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"After")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"export class AuthController {\n\n  @Post('/logout')\n  @UseSessions({\n    cookie: true,\n  })\n  async logout(ctx: Context) {\n    if (ctx.session) {\n      await ctx.session.destroy();\n    }\n\n    return new HttpResponseNoContent();\n  }\n\n}\n")),Object(a.b)("h3",{id:"access-control"},"Access Control"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},"You may be interested in looking at the ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"/es/docs/authentication-and-access-control/session-tokens"}),"quick start page")," as well."))),Object(a.b)("h4",{id:"example-with-the-authorization-header-2"},"Example with the ",Object(a.b)("inlineCode",{parentName:"h4"},"Authorization")," header"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Before")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"@TokenRequired({ store: TypeORMStore, user: fetchUser(User) })\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"After")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// The `request` option returns a pretty message if the Authorization header is not here.\n@UseSessions({\n  required: true,\n  user: fetchUser(User)\n})\n@UserRequired()\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),Object(a.b)("h4",{id:"example-with-cookies-2"},"Example with cookies"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Before")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"@TokenRequired({ store: TypeORMStore, cookie: true, user: fetchUser(User) })\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"After")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"@UseSessions({\n  cookie: true,\n  user: fetchUser(User)\n})\n@UserRequired()\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),Object(a.b)("h3",{id:"send-the-csrf-token-in-a-template"},"Send the CSRF token in a template"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// Before\nreturn render('templates/home.html', { csrfToken: await getCsrfToken(ctx.session) });\n\n// After\nreturn render('templates/home.html', { csrfToken: ctx.session.get('csrfToken') });\n")),Object(a.b)("h3",{id:"read-or-create-a-session"},"Read or create a session"),Object(a.b)("p",null,"To read or create a session manually, use the function ",Object(a.b)("inlineCode",{parentName:"p"},"createSession")," and ",Object(a.b)("inlineCode",{parentName:"p"},"readSession")," instead of the store directly."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Session.verifyTokenAndGetId(token)")," is removed. "),Object(a.b)("h3",{id:"revoking-sessions"},"Revoking sessions"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/es/docs/authentication-and-access-control/session-tokens"}),"session tokens")),Object(a.b)("h3",{id:"breaking-changes-that-should-not-affect-you"},"Breaking Changes that Should not Affect You"),Object(a.b)("p",null,"If you are affected, it's probably you do not use the component the right way."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The Session constructor has changes. You should not instantiate it yourself. Use ",Object(a.b)("inlineCode",{parentName:"li"},"readSession")," or ",Object(a.b)("inlineCode",{parentName:"li"},"createSession")," instead."),Object(a.b)("li",{parentName:"ul"},"Except for the ",Object(a.b)("inlineCode",{parentName:"li"},"get")," and ",Object(a.b)("inlineCode",{parentName:"li"},"set")," methods, the interface of ",Object(a.b)("inlineCode",{parentName:"li"},"Session")," has changed."),Object(a.b)("li",{parentName:"ul"},"The methods ",Object(a.b)("inlineCode",{parentName:"li"},"getRedisInstance")," and ",Object(a.b)("inlineCode",{parentName:"li"},"getMongoInstance")," have been removed from the stores.")),Object(a.b)("h2",{id:"csrf-protection"},"CSRF Protection"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"npm uninstall @foal/csrf\n")),Object(a.b)("p",null,"The package ",Object(a.b)("inlineCode",{parentName:"p"},"@foal/csrf")," has been removed. In version 2, the CSRF protection is directly included in the ",Object(a.b)("inlineCode",{parentName:"p"},"@UseSessions")," hook and can be enabled with ",Object(a.b)("inlineCode",{parentName:"p"},"settings.session.csrf.enabled")," (the configuration key ",Object(a.b)("inlineCode",{parentName:"p"},"settings.csrf.enabled")," does not exist anymore)."),Object(a.b)("p",null,"You do not need to take care of generating a CSRF token in the session. The framework handles it for you."),Object(a.b)("p",null,"The best way to use the new CSRF protection is to go directly to the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/es/docs/security/csrf-protection"}),"CSRF page"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Warning:")," In order to ",Object(a.b)("em",{parentName:"p"},"work better")," with some popular frontend frameworks, the default name of the CSRF cookie has been changed from ",Object(a.b)("inlineCode",{parentName:"p"},"csrfToken")," to ",Object(a.b)("inlineCode",{parentName:"p"},"XSRF-TOKEN"),"."),Object(a.b)("h2",{id:"new-features"},"New Features"),Object(a.b)("h3",{id:"session-tokens-1"},"Session Tokens"),Object(a.b)("h4",{id:"query-all-sessions-of-a-user-typeorm-only"},"Query all sessions of a user (TypeORM only)"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/es/docs/authentication-and-access-control/session-tokens"}),"session tokens")),Object(a.b)("h4",{id:"query-all-connected-users-typeorm-only"},"Query all connected users (TypeORM only)"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/es/docs/authentication-and-access-control/session-tokens"}),"session tokens")),Object(a.b)("h4",{id:"force-the-disconnection-of-a-user-typeorm-only"},"Force the disconnection of a user (TypeORM only)"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/es/docs/authentication-and-access-control/session-tokens"}),"session tokens")),Object(a.b)("h4",{id:"flash-sessions"},"Flash sessions"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/es/docs/authentication-and-access-control/session-tokens"}),"session tokens")),Object(a.b)("h4",{id:"regenerate-the-session-id"},"Regenerate the session ID"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/es/docs/authentication-and-access-control/session-tokens"}),"session tokens")),Object(a.b)("h4",{id:"expired-sessions-clean-up-regularly-typeorm-and-mongodb"},"Expired sessions clean up regularly (TypeORM and MongoDB)"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/es/docs/authentication-and-access-control/session-tokens"}),"session tokens")),Object(a.b)("h4",{id:"anonymous-sessions-and-templates"},"Anonymous sessions and templates"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/es/docs/authentication-and-access-control/session-tokens"}),"session tokens")))}u.isMDXComponent=!0},263:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var o=t(0),s=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=s.a.createContext({}),b=function(e){var n=s.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=b(e.components);return s.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},d=s.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(t),d=o,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||a;return t?s.a.createElement(m,i(i({ref:n},l),{},{components:t})):s.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var l=2;l<a;l++)r[l]=t[l];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},264:function(e,n,t){"use strict";function o(e){var n,t,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=o(e[n]))&&(s&&(s+=" "),s+=t);else for(n in e)e[n]&&(s&&(s+=" "),s+=n);return s}n.a=function(){for(var e,n,t=0,s="";t<arguments.length;)(e=arguments[t++])&&(n=o(e))&&(s&&(s+=" "),s+=n);return s}},265:function(e,n,t){"use strict";var o=t(0),s=t(266);n.a=function(){var e=Object(o.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},266:function(e,n,t){"use strict";var o=t(0),s=Object(o.createContext)(void 0);n.a=s},267:function(e,n,t){"use strict";var o=t(0),s=t.n(o),a=t(265),r=t(264),i=t(56),c=t.n(i),l=37,b=39;n.a=function(e){var n=e.lazy,t=e.block,i=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(a.a)(),O=m.tabGroupChoices,h=m.setTabGroupChoices,j=Object(o.useState)(i),f=j[0],g=j[1],y=o.Children.toArray(e.children);if(null!=u){var N=O[u];null!=N&&N!==f&&p.some((function(e){return e.value===N}))&&g(N)}var k=function(e){g(e),null!=u&&h(u,e)},w=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t},d)},p.map((function(e){var n=e.value,t=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===n,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case b:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(w,e.target,e)},onFocus:function(){return k(n)},onClick:function(){k(n)}},t)}))),n?Object(o.cloneElement)(y.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return Object(o.cloneElement)(e,{key:n,hidden:e.props.value!==f})}))))}},268:function(e,n,t){"use strict";var o=t(3),s=t(0),a=t.n(s);n.a=function(e){var n=e.children,t=e.hidden,s=e.className;return a.a.createElement("div",Object(o.a)({role:"tabpanel"},{hidden:t,className:s}),n)}}}]);
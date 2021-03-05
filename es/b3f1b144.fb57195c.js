(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{204:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),s=(n(0),n(263)),o={title:"Clase User & script create-user"},i={unversionedId:"authentication-and-access-control/user-class",id:"authentication-and-access-control/user-class",isDocsHomePage:!1,title:"Clase User & script create-user",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/authentication-and-access-control/user-class.md",slug:"/authentication-and-access-control/user-class",permalink:"/es/docs/authentication-and-access-control/user-class",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/authentication-and-access-control/user-class.md",version:"current",sidebar:"someSidebar",previous:{title:"Comenzar",permalink:"/es/docs/authentication-and-access-control/quick-start"},next:{title:"Gesti\xf3n de contrase\xf1as",permalink:"/es/docs/authentication-and-access-control/password-management"}},c=[{value:"The User Entity",id:"the-user-entity",children:[]},{value:"Creating Users ...",id:"creating-users-",children:[{value:"... Programmatically",id:"-programmatically",children:[]},{value:"... with a Shell Script (CLI)",id:"-with-a-shell-script-cli",children:[]}]},{value:"Example (email and password)",id:"example-email-and-password",children:[{value:"The User Entity",id:"the-user-entity-1",children:[]},{value:"The create-user Shell Script",id:"the-create-user-shell-script",children:[]}]},{value:"Using another ORM/ODM",id:"using-another-ormodm",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://foalts.org/docs/1.x/"}),"here"),".")),Object(s.b)("h2",{id:"the-user-entity"},"The User Entity"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { BaseEntity, Entity, PrimaryGenerateColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number\n\n}\n")),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"User")," entity is the core of the authentication and authorization system. It is a class that represents the ",Object(s.b)("inlineCode",{parentName:"p"},"user")," table in the database and each of its instances represents a row in this table."),Object(s.b)("p",null,"The class definition is usually located in the file ",Object(s.b)("inlineCode",{parentName:"p"},"src/app/entities/user.entity.ts"),". Its attributes represent the columns of the table. "),Object(s.b)("p",null,"In FoalTS you can customize the ",Object(s.b)("inlineCode",{parentName:"p"},"User")," class to suit your needs. The framework makes no assumptions about the attributes required by the user objects. Maybe you'll need a ",Object(s.b)("inlineCode",{parentName:"p"},"firstName")," column, maybe not. Maybe the authentication will be processed with an email and a password or maybe you will use an authentication token. The choice is yours!"),Object(s.b)("p",null,"However, FoalTS provides abstract classes from which you can extend the ",Object(s.b)("inlineCode",{parentName:"p"},"User")," entity. Such classes, such as ",Object(s.b)("inlineCode",{parentName:"p"},"UserWithPermissions"),", have useful utilities for handling authentication and authorization, so that you do not have to reinvent the wheel."),Object(s.b)("h2",{id:"creating-users-"},"Creating Users ..."),Object(s.b)("p",null,"There are several ways to create users."),Object(s.b)("h3",{id:"-programmatically"},"... Programmatically"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { getManager, getRepository } from 'typeorm';\n\nimport { User } from './src/app/entities';\n\nasync function main() {\n  const user = new User();\n  user.foo = 1;\n  await user.save(); 1\n  });\n}\n")),Object(s.b)("h3",{id:"-with-a-shell-script-cli"},"... with a Shell Script (CLI)"),Object(s.b)("p",null,"You can use the ",Object(s.b)("inlineCode",{parentName:"p"},"create-user")," shell script (located in ",Object(s.b)("inlineCode",{parentName:"p"},"src/scripts"),") to create a new user through the command line."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm run build\nfoal run create-user\n")),Object(s.b)("h2",{id:"example-email-and-password"},"Example (email and password)"),Object(s.b)("p",null,"This section describes how to create users with an email and a password."),Object(s.b)("h3",{id:"the-user-entity-1"},"The User Entity"),Object(s.b)("p",null,"Go to ",Object(s.b)("inlineCode",{parentName:"p"},"src/app/entities/user.entity.ts")," and add two new columns: an email and a password."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { hashPassword } from '@foal/core';\nimport { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  password: string;\n\n  @BeforeInsert()\n  @BeforeUpdate()\n  async hashPassword() {\n    // Hash the password before storing it in the database\n    this.password = await hashPassword(this.password);\n  }\n\n}\n\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Note: The ",Object(s.b)("inlineCode",{parentName:"p"},"BeforeInsert")," and ",Object(s.b)("inlineCode",{parentName:"p"},"BeforeUpdate")," are TypeORM decorators for Entity Listeners that run before the entity is saved in the db. In this example they take care of hashing the password. More info about ",Object(s.b)("inlineCode",{parentName:"p"},"Entity Listeners")," in the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://typeorm.io/#/listeners-and-subscribers"}),"TypeORM docs"))),Object(s.b)("h3",{id:"the-create-user-shell-script"},"The create-user Shell Script"),Object(s.b)("p",null,"Running the ",Object(s.b)("inlineCode",{parentName:"p"},"create-user")," script will result in an error since we do not provide an email and a password as arguments."),Object(s.b)("p",null,"Go to ",Object(s.b)("inlineCode",{parentName:"p"},"src/scripts/create-user.ts")," and uncomment the lines mentionning the emails and passwords."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"To get it work, you will also need to install the ",Object(s.b)("inlineCode",{parentName:"p"},"password")," package: ",Object(s.b)("inlineCode",{parentName:"p"},"npm install --save @foal/password"),". The ",Object(s.b)("inlineCode",{parentName:"p"},"isCommon")," util helps you to detect if a password is too common (ex: 12345) and thus prevents the script from creating a new user with an unsecured password.")),Object(s.b)("p",null,"You can now create a new user with these commands:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm run build\nfoal run create-user email=mary@foalts.org password=mary_password\n")),Object(s.b)("h2",{id:"using-another-ormodm"},"Using another ORM/ODM"),Object(s.b)("p",null,"In this document, we used TypeORM to define the ",Object(s.b)("inlineCode",{parentName:"p"},"User")," class and the ",Object(s.b)("inlineCode",{parentName:"p"},"create-user")," shell script. However, you can still use another ORM/ODM if you want to."))}u.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||s;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
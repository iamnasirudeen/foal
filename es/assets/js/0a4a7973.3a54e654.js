"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2836],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2708:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={title:"El Modelo Todo",id:"tuto-3-the-todo-model",slug:"3-the-todo-model"},s=void 0,u={unversionedId:"tutorials/simple-todo-list/tuto-3-the-todo-model",id:"tutorials/simple-todo-list/tuto-3-the-todo-model",title:"El Modelo Todo",description:"El siguiente paso es ocuparse de la base de datos. Por defecto, cada nuevo proyecto en FoalTS est\xe1 configurado para utilizar una base de datos SQLite ya que no requiere ninguna instalaci\xf3n adicional.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/simple-todo-list/3-the-todo-model.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/3-the-todo-model",permalink:"/es/docs/tutorials/simple-todo-list/3-the-todo-model",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/simple-todo-list/3-the-todo-model.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"El Modelo Todo",id:"tuto-3-the-todo-model",slug:"3-the-todo-model"},sidebar:"someSidebar",previous:{title:"Introducci\xf3n",permalink:"/es/docs/tutorials/simple-todo-list/2-introduction"},next:{title:"El Script Shell create-todo",permalink:"/es/docs/tutorials/simple-todo-list/4-the-shell-script-create-todo"}},d=[],c={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"El siguiente paso es ocuparse de la base de datos. Por defecto, cada nuevo proyecto en FoalTS est\xe1 configurado para utilizar una base de datos ",(0,r.kt)("inlineCode",{parentName:"p"},"SQLite")," ya que no requiere ninguna instalaci\xf3n adicional."),(0,r.kt)("p",null,"Empecemos por crear su primer modelo. El CLI proporciona un comando \xfatil para generar un nuevo archivo con un modelo vac\xedo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"foal generate entity todo\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"FoalTS utiliza ",(0,r.kt)("a",{parentName:"p",href:"http://typeorm.io"},"TypeORM")," como ORM por defecto en cualquier aplicaci\xf3n nueva. De esta manera, no tiene que configurar nada y puede empezar un proyecto r\xe1pidamente. Sin embargo, si lo desea, puede optar por ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/databases/using-another-orm"},"usar otro")," (",(0,r.kt)("a",{parentName:"p",href:"https://www.prisma.io/"},"Prisma"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mikro-orm.io/"},"MikroORM"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mongoosejs.com/"},"Mongoose"),", etc), ya que el c\xf3digo del framework es independiente del ORM."))),(0,r.kt)("p",null,"Abra el archivo ",(0,r.kt)("inlineCode",{parentName:"p"},"todo.entity.ts")," en el directorio ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app/entities")," y a\xf1ada una columna ",(0,r.kt)("inlineCode",{parentName:"p"},"text"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class Todo extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  text: string;\n\n}\n\n")),(0,r.kt)("p",null,"Esta clase es la representaci\xf3n de la tabla SQL ",(0,r.kt)("inlineCode",{parentName:"p"},"todo"),". Actualmente, esta tabla no existe en la base de datos. Tendr\xe1 que crearla."),(0,r.kt)("p",null,"Puede hacerlo manualmente, utilizando un software de base de datos, por ejemplo, o utilizar migraciones, una forma program\xe1tica de actualizar un esquema de base de datos. La ventaja de utilizar migraciones es que puede crear, actualizar y eliminar sus tablas directamente desde la definici\xf3n de sus entidades. Tambi\xe9n garantizan que todos sus entornos (prod, dev) y codesarrolladores tengan las mismas definiciones de tablas."),(0,r.kt)("p",null,"Veamos c\xf3mo utilizarlos."),(0,r.kt)("p",null,"Primero ejecute el siguiente comando para generar su archivo de migraci\xf3n. TypeORM comparar\xe1 el esquema actual de su base de datos con la definici\xf3n de sus entidades y generar\xe1 las consultas SQL adecuadas."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run makemigrations\n")),(0,r.kt)("p",null,"Aparece un nuevo archivo en el directorio ",(0,r.kt)("inlineCode",{parentName:"p"},"src/migrations/"),". \xc1bralo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import {MigrationInterface, QueryRunner} from "typeorm";\n\nexport class migration1562755564200 implements MigrationInterface {\n\n    public async up(queryRunner: QueryRunner): Promise<void> {\n        await queryRunner.query(`CREATE TABLE "todo" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "text" varchar NOT NULL)`, undefined);\n        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`, undefined);\n    }\n\n    public async down(queryRunner: QueryRunner): Promise<void> {\n        await queryRunner.query(`DROP TABLE "user"`, undefined);\n        await queryRunner.query(`DROP TABLE "todo"`, undefined);\n    }\n\n}\n\n')),(0,r.kt)("p",null,"El m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"up")," contiene todas las consultas SQL que se ejecutar\xe1n durante la migraci\xf3n."),(0,r.kt)("p",null,"A continuaci\xf3n, ejecute la migraci\xf3n."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run migrations\n")),(0,r.kt)("p",null,"TypeORM examina todas las migraciones que se han ejecutado previamente (ninguna en este caso) y ejecuta las nuevas."),(0,r.kt)("p",null,"Su base de datos (",(0,r.kt)("inlineCode",{parentName:"p"},"db.sqlite3"),") contiene ahora una nueva tabla llamada ",(0,r.kt)("inlineCode",{parentName:"p"},"todo"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+------------+-----------+-------------------------------------+\n|                             todo                             |\n+------------+-----------+-------------------------------------+\n| id         | integer   | PRIMARY KEY AUTO_INCREMENT NOT NULL |\n| text       | varchar   | NOT NULL                            |\n+------------+-----------+-------------------------------------+\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tambi\xe9n puede utilizar la opci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"synchronize")," en su archivo de configuraci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"config/default.json"),". Cuando se establece en ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", el esquema de la base de datos se crea autom\xe1ticamente a partir de la definici\xf3n de entidades en cada lanzamiento de la aplicaci\xf3n. En este caso, no es necesario realizar migraciones. Sin embargo, aunque este comportamiento puede ser \xfatil durante la depuraci\xf3n y el desarrollo, no es adecuado para un entorno de producci\xf3n (podr\xeda perder datos de producci\xf3n).")))}p.isMDXComponent=!0}}]);
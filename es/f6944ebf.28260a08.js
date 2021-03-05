(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{254:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(263)),i={title:"The Modelos User & Todo"},l={unversionedId:"tutorials/multi-user-todo-list/2-the-user-and-todo-models",id:"tutorials/multi-user-todo-list/2-the-user-and-todo-models",isDocsHomePage:!1,title:"The Modelos User & Todo",description:"En primer lugar, si ha descargado el c\xf3digo fuente del tutorial anterior, compile y ejecute las migraciones existentes.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/multi-user-todo-list/2-the-user-and-todo-models.md",slug:"/tutorials/multi-user-todo-list/2-the-user-and-todo-models",permalink:"/es/docs/tutorials/multi-user-todo-list/2-the-user-and-todo-models",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/tutorials/multi-user-todo-list/2-the-user-and-todo-models.md",version:"current",sidebar:"someSidebar",previous:{title:"Introducci\xf3n",permalink:"/es/docs/tutorials/multi-user-todo-list/1-Introduction"},next:{title:"Los Scripts Shell",permalink:"/es/docs/tutorials/multi-user-todo-list/3-the-shell-scripts"}},s=[{value:"El Modelo User",id:"el-modelo-user",children:[]},{value:"El Modelo Todo",id:"el-modelo-todo",children:[]},{value:"Las Migraciones",id:"las-migraciones",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"En primer lugar, si ha descargado el c\xf3digo fuente del tutorial anterior, compile y ejecute las migraciones existentes."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run build\nnpm run migrations\n")),Object(o.b)("h2",{id:"el-modelo-user"},"El Modelo User"),Object(o.b)("p",null,"Luego abra el archivo ",Object(o.b)("inlineCode",{parentName:"p"},"user.entity.ts")," del directorio ",Object(o.b)("inlineCode",{parentName:"p"},"src/app/entities"),". La entidad ",Object(o.b)("inlineCode",{parentName:"p"},"User")," es la clase principal utilizada por el sistema de autenticaci\xf3n del framework."),Object(o.b)("p",null,"A\xf1ada las propiedades ",Object(o.b)("inlineCode",{parentName:"p"},"email")," y ",Object(o.b)("inlineCode",{parentName:"p"},"password")," y el m\xe9todo ",Object(o.b)("inlineCode",{parentName:"p"},"setPassword"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { hashPassword } from '@foal/core';\nimport { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  password: string;\n\n  async setPassword(password: string) {\n    this.password = await hashPassword(password);\n  }\n\n}\n\n// This line is required. It will be used to create the SQL session table.\nexport { DatabaseSession } from '@foal/typeorm';\n")),Object(o.b)("p",null,"El m\xe9todo ",Object(o.b)("inlineCode",{parentName:"p"},"setPassword")," utiliza ",Object(o.b)("inlineCode",{parentName:"p"},"hashPassword")," para hacer un hash de las contrase\xf1as antes de almacenarlas en la base de datos. Debe utilizar este m\xe9todo para establecer una contrase\xf1a en lugar de asignar directamente un valor al atributo ",Object(o.b)("inlineCode",{parentName:"p"},"password"),"."),Object(o.b)("h2",{id:"el-modelo-todo"},"El Modelo Todo"),Object(o.b)("p",null,"El modelo Todo definido en el tutorial anterior necesita ahora una propiedad ",Object(o.b)("inlineCode",{parentName:"p"},"owner")," para saber a qu\xe9 usuario pertenece."),Object(o.b)("p",null,"Reemplace el contenido de ",Object(o.b)("inlineCode",{parentName:"p"},"todo.entity.ts"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';\nimport { User } from './user.entity';\n\n@Entity()\nexport class Todo extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  text: string;\n\n  @ManyToOne(type => User)\n  owner: User;\n\n}\n\n")),Object(o.b)("p",null,"En la base de datos la tabla ",Object(o.b)("inlineCode",{parentName:"p"},"todo")," tendr\xe1 el siguiente aspecto:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"+------------+-----------+-------------------------------------+\n|                             todo                             |\n+------------+-----------+-------------------------------------+\n| id         | integer   | PRIMARY KEY AUTO_INCREMENT NOT NULL |\n| text       | varchar   | NOT NULL                            |\n| ownerId    | integer   |                                     |\n+------------+-----------+-------------------------------------+\n")),Object(o.b)("h2",{id:"las-migraciones"},"Las Migraciones"),Object(o.b)("p",null,"El \xfaltimo paso es crear/actualizar las tablas en la base de datos. Como en el primer tutorial, utilizar\xe1 las migraciones para ello."),Object(o.b)("p",null,"Genere las migraciones a partir de las entidades."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run makemigrations\n")),Object(o.b)("p",null,"Se a\xf1ade un nuevo archivo en ",Object(o.b)("inlineCode",{parentName:"p"},"src/migrations"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import {MigrationInterface, QueryRunner} from "typeorm";\n\nexport class migration1562765487944 implements MigrationInterface {\n\n    public async up(queryRunner: QueryRunner): Promise<void> {\n        // SQL queries...\n    }\n\n    public async down(queryRunner: QueryRunner): Promise<void> {\n        // SQL queries...\n    }\n\n}\n')),Object(o.b)("p",null,"A continuaci\xf3n, ejecute el nuevo archivo de migraci\xf3n."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run migrations\n")))}u.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.a.createElement(b,l(l({ref:t},c),{},{components:n})):a.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
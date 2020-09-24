(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=r,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(133)),c={id:"dbcontext-multi-database",title:"8.16 \u591a\u6570\u636e\u5e93\u64cd\u4f5c",sidebar_label:"8.16 \u591a\u6570\u636e\u5e93\u64cd\u4f5c"},i={unversionedId:"dbcontext-multi-database",id:"dbcontext-multi-database",isDocsHomePage:!1,title:"8.16 \u591a\u6570\u636e\u5e93\u64cd\u4f5c",description:"8.16.1 \u591a\u6570\u636e\u5e93\u64cd\u4f5c\u6307\u5b9a",source:"@site/docs\\dbcontext-multi-database.mdx",slug:"/dbcontext-multi-database",permalink:"/docs/dbcontext-multi-database",editUrl:"https://gitee.com/monksoul/Fur/tree/rc1/handbook/docs/dbcontext-multi-database.mdx",version:"current",sidebar_label:"8.16 \u591a\u6570\u636e\u5e93\u64cd\u4f5c",sidebar:"docs",previous:{title:"8.15 Sql \u9ad8\u7ea7\u4ee3\u7406",permalink:"/docs/dbcontext-sql-proxy"},next:{title:"8.17 \u8bfb\u5199\u5206\u79bb/\u4e3b\u4ece\u5e93",permalink:"/docs/dbcontext-read-write"}},s=[{value:"8.16.1 \u591a\u6570\u636e\u5e93\u64cd\u4f5c\u6307\u5b9a",id:"8161-\u591a\u6570\u636e\u5e93\u64cd\u4f5c\u6307\u5b9a",children:[]},{value:"8.16.2 \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\u6307\u5b9a",id:"8162-\u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\u6307\u5b9a",children:[]},{value:"8.16.3 \u975e\u6cdb\u578b\u4ed3\u50a8\u6307\u5b9a",id:"8163-\u975e\u6cdb\u578b\u4ed3\u50a8\u6307\u5b9a",children:[]},{value:"8.16.4 <code>Sql</code> \u4ed3\u50a8\u6307\u5b9a",id:"8164-sql-\u4ed3\u50a8\u6307\u5b9a",children:[]},{value:"8.16.5 \u5b9e\u4f53\u5b9a\u4e49\u6307\u5b9a",id:"8165-\u5b9e\u4f53\u5b9a\u4e49\u6307\u5b9a",children:[]},{value:"8.16.6 Linq \u51fd\u6570\u6307\u5b9a",id:"8166-linq-\u51fd\u6570\u6307\u5b9a",children:[]},{value:"8.16.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"8167-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"8161-\u591a\u6570\u636e\u5e93\u64cd\u4f5c\u6307\u5b9a"},"8.16.1 \u591a\u6570\u636e\u5e93\u64cd\u4f5c\u6307\u5b9a"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Fur")," \u901a\u8fc7\u72ec\u521b\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668")," \u5b9e\u73b0\u591a\u6570\u636e\u5e93\u7075\u6d3b\u64cd\u4f5c\u5207\u6362\u3002\u53ea\u9700\u8981\u4e3a\u6bcf\u4e00\u79cd\u6570\u636e\u5e93\u7ed1\u5b9a\u552f\u4e00\u7684\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\u5373\u53ef\u3002"),Object(o.b)("p",null,"\u4ee5\u4e0b\u662f ",Object(o.b)("inlineCode",{parentName:"p"},"Fur")," \u652f\u6301\u591a\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u5b9e\u4f8b\uff1a"),Object(o.b)("h2",{id:"8162-\u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\u6307\u5b9a"},"8.16.2 \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\u6307\u5b9a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"// \u5207\u6362\u5230 MSSQL \u64cd\u4f5c Person\u8868\nvar mssqlRepository = personRepository.Change<Person, MsSqlDbContextLocator>();\n\n// \u5207\u6362\u5230 MySql \u64cd\u4f5c Person\u8868\nvar mysqlRepository = personRepository.Change<Person, MySqlDbContextLocator>();\n\n// \u5207\u6362\u5230 Sqlite \u64cd\u4f5c Person\u8868\nvar sqliteRepository = personRepository.Change<Person, SqliteDbContextLocator>();\n\n")),Object(o.b)("h2",{id:"8163-\u975e\u6cdb\u578b\u4ed3\u50a8\u6307\u5b9a"},"8.16.3 \u975e\u6cdb\u578b\u4ed3\u50a8\u6307\u5b9a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"// \u5207\u6362\u5230 MSSQL \u64cd\u4f5c Person\u8868\nvar mssqlRepository = repository.Change<Person, MsSqlDbContextLocator>();\n\n// \u5207\u6362\u5230 MySql \u64cd\u4f5c Person\u8868\nvar mysqlRepository = repository.Change<Person, MySqlDbContextLocator>();\n\n// \u5207\u6362\u5230 Sqlite \u64cd\u4f5c Person\u8868\nvar sqliteRepository = repository.Change<Person, SqliteDbContextLocator>();\n")),Object(o.b)("h2",{id:"8164-sql-\u4ed3\u50a8\u6307\u5b9a"},"8.16.4 ",Object(o.b)("inlineCode",{parentName:"h2"},"Sql")," \u4ed3\u50a8\u6307\u5b9a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"// \u5207\u6362\u5230 MSSQL \u64cd\u4f5c Person\u8868\nvar mssqlRepository = sqlRepository.Change<MsSqlDbContextLocator>();\n\n// \u5207\u6362\u5230 MySql \u64cd\u4f5c Person\u8868\nvar mysqlRepository = sqlRepository.Change<MySqlDbContextLocator>();\n\n// \u5207\u6362\u5230 Sqlite \u64cd\u4f5c Person\u8868\nvar sqliteRepository = sqlRepository.Change<SqliteDbContextLocator>();\n")),Object(o.b)("h2",{id:"8165-\u5b9e\u4f53\u5b9a\u4e49\u6307\u5b9a"},"8.16.5 \u5b9e\u4f53\u5b9a\u4e49\u6307\u5b9a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"\n// \u652f\u6301\u4e00\u4e2a\u6570\u636e\u5e93\npublic class Person: IEntity<MySqlDbContextLocator>\n{\n    // ....\n}\n\n// \u652f\u6301\u591a\u4e2a\u6570\u636e\u5e93\npublic class Person: IEntity<MySqlDbContextLocator, SqliteDbContextLocator>\n{\n    // ....\n}\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u5c0f\u77e5\u8bc6")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u6240\u6709\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"\u5b9e\u4f53\u4f9d\u8d56\u63a5\u53e3\u6216\u62bd\u8c61\u7c7b")," \u90fd\u652f\u6301\u6cdb\u578b\u65b9\u5f0f \u6307\u5b9a \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\uff0c\u6700\u591a\u652f\u6301 ",Object(o.b)("inlineCode",{parentName:"p"},"8")," \u4e2a\u3002"))),Object(o.b)("h2",{id:"8166-linq-\u51fd\u6570\u6307\u5b9a"},"8.16.6 Linq \u51fd\u6570\u6307\u5b9a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),'public static class QueryFunctions\n{\n    [QueryableFunction("FN_GetId", "dbo", typeof(MySqlDbContextLocator), typeof(SqliteDbContextLocator))]\n    public static int GetId(int id) => throw new NotSupportedException();\n}\n')),Object(o.b)("h2",{id:"8167-\u53cd\u9988\u4e0e\u5efa\u8bae"},"8.16.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u7ed9 Fur \u63d0 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Fur/issues/new?issue"}),"Issue"),"\u3002"))))}b.isMDXComponent=!0}}]);
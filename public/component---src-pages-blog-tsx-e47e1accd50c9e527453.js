(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{354:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),s=n(378),r=n(379),i=n(448),d=n.n(i),l=function(e){var t=e.post;return o.a.createElement("div",null,o.a.createElement(d.a,{title:o.a.createElement("div",null,o.a.createElement(r.a,{to:t.fields.slug,style:{color:"black",fontWeight:"bold"}},t.frontmatter.title),o.a.createElement("span",{style:{float:"right",color:"grey"}},t.frontmatter.date))},t.excerpt),o.a.createElement("br",null))};n.d(t,"pageQuery",function(){return c});t.default=function(e){var t=e.data.allMdx.edges.filter(function(e){return!!e.node.frontmatter.date}).map(function(e){return o.a.createElement(l,{key:e.node.id,post:e.node})});return o.a.createElement(s.RootLayout,null,o.a.createElement("div",null,t))};var c="1883113236"},372:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(15),o=n.n(a),s=n(1),r=n.n(s),i=n(124),d=n(126),l=n(127),c=n(128),p=n(129),f=n(137),m=n.n(f),u=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return r.a.createElement(i.a,{color:"dark",dark:!0,expand:"md",fixed:"top",className:"pl-5 pl-sm-2 py-3"},r.a.createElement(d.a,{href:"/",className:"pl-3 pl-sm-2"},r.a.createElement("img",{src:m.a,style:{height:"30px"}}),r.a.createElement("p",{className:" py-1 pl-0 border-left pl-3 ml-3 d-inline"},"Design System")),r.a.createElement(l.a,{className:"ml-auto",navbar:!0},r.a.createElement(c.a,null,r.a.createElement(p.a,{href:"https://github.com/reactstrap/reactstrap"},"V1.0"))))},t}(s.Component);t.b=u},373:function(e,t,n){var a;e.exports=(a=n(387))&&a.default||a},378:function(e,t,n){"use strict";n.r(t);var a=n(7),o=n.n(a),s=n(15),r=n.n(s),i=n(1),d=n.n(i),l=n(405),c=n.n(l),p=n(105),f=n(106),m=n(107),u=n(372),g=(n(407),n(408),n(136),n(386)),b=n(379),h=n(127),y=n(128),v=n(388),C={overflowY:"scroll",height:"100%",width:"100%",paddingRight:"17px",boxSizing:"content-box"},D=function(e){var t=[],n=[];return e.forEach(function(e){if(e.parents===[]||null===e.parents)t.push(e);else{for(var a=t,o=function(t){if(0===a.filter(function(n){return n.title===e.parents[t]&&n.children}).length){var o={key:e.path,title:e.parents[t],children:[]};a.push(o),n.push(o)}a=a.find(function(n){return n.title===e.parents[t]&&n.children}).children},s=0;s<e.parents.length;s++)o(s);a.push(e)}}),[t,n]},M=function(e){e.sort(function(e,t){return(e.children&&t.children||!e.children&&!t.children)&&e.title>t.title?1:e.children?1:-1})},x=function(e){var t=e.root;return d.a.createElement(b.b,{query:"1456355057",render:function(e){var n=function(e){var t=e.map(function(e){return{path:e.node.fields.slug,key:e.node.id,title:e.node.frontmatter.title,parents:e.node.frontmatter.parents}});return D(t)}(e.allMdx.edges.filter(function(e){return e.node.fields.slug.startsWith(t)})),a=n[0];n[1];M(a);var o=function e(t){return t.map(function(t){return t.children?(M(t.children),d.a.createElement(h.a,{vertical:!0,key:t.key,className:"mb-3"},d.a.createElement("h5",{className:"mb-0"},d.a.createElement("strong",null,t.title)),e(t.children))):d.a.createElement(y.a,{key:t.path},d.a.createElement(b.a,{to:t.path,className:"nav-link"},t.title))})},s="undefined"!=typeof window?[v.pathPrefix+window.location.pathname]:void 0;return console.log({keys:s,tree:o(a)}),d.a.createElement("div",{vertical:!0,selectedKeys:s,style:C},o(a))},data:g})},k=n(410),E=(n(411),n(412),n(389)),T=n.n(E);n.d(t,"RootLayout",function(){return O});var I="undefined"!=typeof window&&window.matchMedia("(min-width: 576px)"),w={sidebar:{width:"310px",top:"56px",paddingTop:"30px",paddingLeft:"30px",height:"100%",overflow:"hidden",borderRight:"1px solid #d9d9d6",backgroundColor:"#f3f3f2"},content:{top:"80px",paddingLeft:"0",backgroundColor:"#ffffff"}},N={position:"fixed",top:"20px",left:"20px",zIndex:"9999999",height:"30px",width:"30px",display:"block"},O=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={docked:I.matches,open:!1},n.mediaQueryChanged=n.mediaQueryChanged.bind(o()(n)),n.toggleOpen=n.toggleOpen.bind(o()(n)),n.onSetOpen=n.onSetOpen.bind(o()(n)),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){I.addListener(this.mediaQueryChanged)},n.componentWillUnmount=function(){I.removeListener(this.mediaQueryChanged)},n.onSetOpen=function(e){this.setState({open:e})},n.mediaQueryChanged=function(){this.setState({docked:I.matches,open:!1})},n.toggleOpen=function(e){this.setState({open:!this.state.open}),e&&e.preventDefault()},n.render=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement(c.a,{title:"Staples Design System",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),d.a.createElement(u.a,null),d.a.createElement(k.a,{sidebar:d.a.createElement(x,{root:this.props.sidebarRoot}),open:this.state.open,docked:this.state.docked,onSetOpen:this.onSetOpen,defaultSidebarWidth:310,shadow:!1,styles:w},d.a.createElement(p.a,{fluid:!0},d.a.createElement(f.a,null,d.a.createElement(m.a,{xs:"12",lg:"9",className:"pl-lg-5 ml-lg-5"},this.props.children),d.a.createElement("span",null,!this.state.docked&&d.a.createElement("a",{onClick:this.toggleOpen,href:"#"},d.a.createElement("img",{src:T.a,style:N})))))))},t}(d.a.Component)},379:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var a=n(1),o=n.n(a),s=n(0),r=n.n(s),i=n(87),d=n.n(i);n.d(t,"a",function(){return d.a});n(373);var l=o.a.createContext({}),c=function(e){return o.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},386:function(e){e.exports={data:{allMdx:{edges:[{node:{fields:{slug:"/blog/first-blog"},id:"a0906c1e-acde-5c44-917a-fc98b6f6e490",frontmatter:{title:"First Blog",parents:null}}},{node:{fields:{slug:"/blog/second-blog"},id:"9c5ed22f-594f-595b-a2b0-412b93c7a6d5",frontmatter:{title:"Second Blog",parents:null}}},{node:{fields:{slug:"/docs/components/Alerts/alerts"},id:"08406120-af85-5ba3-b4a3-0bf60e2b7219",frontmatter:{title:"Alerts",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Avatars/avatars"},id:"59fc00aa-2ccb-56db-beea-737a417627e4",frontmatter:{title:"Avatars",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Back-To-Top/back-to-top"},id:"8034d524-dc9b-5df8-ae1a-4d84bc9decff",frontmatter:{title:"Back To Top",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Badges-Notifications/badges-notifications"},id:"a2eca74a-3d7b-59a8-8afa-a2634945f23e",frontmatter:{title:"Badges & Notifications",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Borders-Shadows/borders-shadows"},id:"8fff0713-861a-56a5-aa83-91bf1c5dd446",frontmatter:{title:"Borders & Shadows",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Breadcrumb/breadcrumbs"},id:"a829d9bc-62c6-51ca-8875-18195dba912f",frontmatter:{title:"Breadcrumbs",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Button/buttons"},id:"d6766a99-a62a-57a9-b664-0df1c629cc1a",frontmatter:{title:"Buttons",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Card/card"},id:"d9ab9e7a-87c7-5c78-9975-f915d873a577",frontmatter:{title:"Card",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Checkbox/checkboxes"},id:"06db3fed-9487-5ae1-ad76-df59694c632b",frontmatter:{title:"Checkbox",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Dropdown/dropdown"},id:"b9638938-9301-5b44-be92-a1e75a7dbcef",frontmatter:{title:"Dropdown",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Form/form-grid"},id:"6e76b276-0db4-5e23-a4a7-d64af41a8a23",frontmatter:{title:"Forms",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Links/links"},id:"234b58b3-875d-5eb9-93d8-246f3c11d1a6",frontmatter:{title:"Links",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Lists/lists"},id:"37afadeb-7a60-5728-87d5-d0b2ddc4372c",frontmatter:{title:"Lists",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Modal/modal"},id:"d61fe210-2522-5bfd-b1de-23fea23e7e96",frontmatter:{title:"Modal",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Navbar/navbar"},id:"d11b6694-4b01-552c-bfd6-52e1ad65e3ac",frontmatter:{title:"Navbar",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Pagination/pagination"},id:"07a5dbc0-1aa0-5a7a-94c1-148e3f8e7699",frontmatter:{title:"Pagination",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Popover/popover"},id:"f140334f-cea2-5096-8a9e-6dd078fa054c",frontmatter:{title:"Popovers",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Radio/radios"},id:"98066bf8-2970-578b-bc99-9b2e98f79bcb",frontmatter:{title:"Radio",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Ratings/ratings"},id:"9fa51c56-71b7-5f27-818b-797071f5276d",frontmatter:{title:"Ratings",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Spinners/spinners"},id:"8c30112e-8a7d-580b-84e8-df9e82c30885",frontmatter:{title:"Spinners",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Table/tables"},id:"61c6e995-5537-52b9-8e01-648c2b4d947a",frontmatter:{title:"Tables",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Tabs/tabs"},id:"613b029e-152a-5b20-a2ed-bce9fa1148bb",frontmatter:{title:"Tabs",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Text-Input/text-Input"},id:"4750afd9-8566-59ca-8d45-32e9533129da",frontmatter:{title:"Text Input",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Toast/toast"},id:"7ce3acc5-a7a2-504b-a57b-30b84b637aa1",frontmatter:{title:"Toasts",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Toggles/toggles"},id:"c6eaf6df-7661-55e7-acc9-6df1ca6be838",frontmatter:{title:"Toggle / Switch",parents:["Components"]}}},{node:{fields:{slug:"/docs/components/Tooltip/tooltips"},id:"7bb1a5df-a3e5-59ce-beeb-6fe5ce647ddc",frontmatter:{title:"Tooltips",parents:["Components"]}}},{node:{fields:{slug:"/docs/content/graphic-treatment"},id:"6fa50edb-4a43-54e6-80b8-73d8d8a5249a",frontmatter:{title:"Graphic Treatment",parents:["Content"]}}},{node:{fields:{slug:"/docs/content/photography"},id:"24c227f4-4311-5493-9170-f7e766a20a14",frontmatter:{title:"Photography",parents:["Content"]}}},{node:{fields:{slug:"/docs/content/voice-tone"},id:"2d2fd3eb-8666-5c3c-a284-668a34beab27",frontmatter:{title:"Voice & Tone",parents:["Content"]}}},{node:{fields:{slug:"/docs/design/accessible-design"},id:"c1d8361e-0f3b-5f0a-9fb6-54225141e919",frontmatter:{title:"Accessible Design",parents:["Design"]}}},{node:{fields:{slug:"/docs/design/colours"},id:"439dc6ba-fc99-575e-b30b-ff10810b0983",frontmatter:{title:"Colours",parents:["Design"]}}},{node:{fields:{slug:"/docs/design/content"},id:"764de13f-23e7-5f2d-a4b0-43a266ce40d9",frontmatter:{title:"Content",parents:["Design"]}}},{node:{fields:{slug:"/docs/design/grid"},id:"b682e3a3-2a82-50b8-9910-67b1f3569fd5",frontmatter:{title:"Grid",parents:["Design"]}}},{node:{fields:{slug:"/docs/design/iconography"},id:"6e60248f-3c83-5086-884c-b4662e6f80a9",frontmatter:{title:"Iconography",parents:["Design"]}}},{node:{fields:{slug:"/docs/design/illustration"},id:"2ea92431-1bb8-5169-b8f6-6641183d2899",frontmatter:{title:"Illustration",parents:["Design"]}}},{node:{fields:{slug:"/docs/design/typography"},id:"12df0939-8723-5a46-b816-4f9f2f1a1cac",frontmatter:{title:"Typography",parents:["Design"]}}},{node:{fields:{slug:"/docs/getting-started"},id:"1fcaf288-29b9-5f5a-9a87-6752804ab882",frontmatter:{title:"Introduction",parents:["Getting Started"]}}},{node:{fields:{slug:"/docs/guides-templates/accessibility"},id:"d3f58930-ffc3-51a6-99fa-e77b14841b86",frontmatter:{title:"Accessibility",parents:["Guides & Templates"]}}},{node:{fields:{slug:"/docs/resources-download"},id:"29287d87-55cc-53da-b692-c46e8d7fe51d",frontmatter:{title:"Resources & Downloads",parents:["Getting Started"]}}}]}}}},387:function(e,t,n){"use strict";n.r(t);n(89),n(90),n(65),n(47),n(41),n(91);var a=n(10),o=n.n(a),s=n(1),r=n.n(s),i=n(0),d=n.n(i),l=n(139),c=n(16);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var f=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach(function(t){o()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json))};f.propTypes={location:d.a.shape({pathname:d.a.string.isRequired}).isRequired},t.default=f},388:function(e,t,n){(function(t){e.exports={siteMetadata:{title:"Staples Design System"},plugins:["gatsby-plugin-typescript","gatsby-plugin-react-helmet",{resolve:"@stackbit/gatsby-plugin-menus",options:{pageContextProperty:"menus",sourceUrlPath:"fields.url"}},{resolve:"gatsby-source-filesystem",options:{name:"images",path:t+"/src/images"}},{resolve:"gatsby-transformer-json",options:{typeName:"MenuItems"}},{resolve:"gatsby-source-filesystem",options:{name:"menuItems",path:t+"/src/menuItems"}},{resolve:"gatsby-source-filesystem",options:{name:"contents",path:t+"/contents"}},{resolve:"gatsby-source-filesystem",options:{name:"icons",path:t+"/src/images/icons"}},"gatsby-transformer-sharp","gatsby-plugin-sharp",{resolve:"gatsby-plugin-manifest",options:{name:"gatsby-starter-markdown",short_name:"starter",start_url:"/",background_color:"#663399",theme_color:"#663399",display:"minimal-ui",icon:"src/images/gatsby-icon.png"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-default-html-attrs",options:{table:"table"}},"gatsby-remark-katex",{resolve:"gatsby-remark-autolink-headers",options:{className:"post-toc-anchor"}},{resolve:"gatsby-transformer-remark",options:{tableOfContents:{heading:null,maxDepth:6}}}]}},{resolve:"gatsby-mdx",options:{defaultLayouts:{default:378},extensions:[".mdx",".md"],remarkPlugins:[n(409)],gatsbyRemarkPlugins:["gatsby-remark-katex",{resolve:"gatsby-remark-autolink-headers",options:{className:"post-toc-anchor"}},{resolve:"gatsby-remark-vscode",options:{colorTheme:{defaultTheme:"OneDark-Pro",prefersDarkTheme:"OneDark-Pro",prefersLightTheme:"Quiet Light"},wrapperClassName:"html",injectStyles:!1,extensions:[{identifier:"zhuangtongfa.Material-theme",version:"2.26.0"}],languageAliases:{},replaceColor:function(e){return{"var(--primary)":"var(--red)"}[e.toLowerCase()]||e},getLineClassName:function(e){e.content,e.index,e.language,e.codeFenceOptions;return""}}}]}},"gatsby-plugin-remove-trailing-slashes"],pathPrefix:"/gatsby-antd-docs"}}).call(this,"/")},389:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNOTA0IDE2MEgxMjBDMTE1LjYgMTYwIDExMiAxNjMuNiAxMTIgMTY4VjIzMkMxMTIgMjM2LjQgMTE1LjYgMjQwIDEyMCAyNDBIOTA0QzkwOC40IDI0MCA5MTIgMjM2LjQgOTEyIDIzMlYxNjhDOTEyIDE2My42IDkwOC40IDE2MCA5MDQgMTYwWk05MDQgNzg0SDEyMEMxMTUuNiA3ODQgMTEyIDc4Ny42IDExMiA3OTJWODU2QzExMiA4NjAuNCAxMTUuNiA4NjQgMTIwIDg2NEg5MDRDOTA4LjQgODY0IDkxMiA4NjAuNCA5MTIgODU2Vjc5MkM5MTIgNzg3LjYgOTA4LjQgNzg0IDkwNCA3ODRaTTkwNCA0NzJIMTIwQzExNS42IDQ3MiAxMTIgNDc1LjYgMTEyIDQ4MFY1NDRDMTEyIDU0OC40IDExNS42IDU1MiAxMjAgNTUySDkwNEM5MDguNCA1NTIgOTEyIDU0OC40IDkxMiA1NDRWNDgwQzkxMiA0NzUuNiA5MDguNCA0NzIgOTA0IDQ3MloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-e47e1accd50c9e527453.js.map
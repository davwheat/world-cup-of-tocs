(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1Yd/":function(e,t,n){"use strict";var a=n("FdF9"),l=n("1zJl");t.a=function(e){var t=e.title;return"undefined"==typeof window?null:a.default.createElement(a.default.Fragment,null,a.default.createElement(l.Title,null,t?t+" | World Cup of TOCs":"World Cup of TOCs"),a.default.createElement(l.Meta,{name:"description"},"Track Geoff Marshall's World Cup of Train Operators live!"))}},IjGz:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return f}));var a=n("RD7I"),l=n("iuhU"),r=n("FdF9"),i=Object(a.a)({root:{paddingBottom:12,lineHeight:1.4},noPad:{paddingBottom:0},bold:{fontWeight:600},centred:{textAlign:"center"}}),o=function(e){var t=e.children,n=e.className,a=e.noPadding,o=e.inline,d=e.bold,c=e.center,u=i(),m={className:Object(l.a)(u.root,a&&u.noPad,d&&u.bold,c&&u.centred,n)};return o?r.default.createElement("span",m,t):r.default.createElement("p",m,t)},d=Object(a.a)({root:{fontWeight:700,fontSize:76,paddingBottom:16,letterSpacing:1.5,"@media (max-width: 1280px)":{fontSize:64,letterSpacing:1.2},"@media (max-width: 767px)":{fontSize:54,letterSpacing:.8},"@media (max-width: 599px)":{fontSize:42,letterSpacing:.4}},noPad:{paddingBottom:0}}),c=function(e){var t=e.children,n=e.className,a=e.noPadding,i=d();return r.default.createElement("h1",{className:Object(l.a)(i.root,a&&i.noPad,n)},t)},u=Object(a.a)({root:{fontWeight:600,fontSize:48,paddingBottom:24,letterSpacing:.3,"@media (max-width: 767px)":{fontSize:36,letterSpacing:0},"@media (max-width: 599px)":{fontSize:28}},noPad:{paddingBottom:0}}),m=function(e){var t=e.children,n=e.className,a=e.noPadding,i=u();return r.default.createElement("h1",{className:Object(l.a)(i.root,a&&i.noPad,n)},t)},s=Object(a.a)({root:{paddingBottom:6,lineHeight:1.2,fontSize:16},noPad:{paddingBottom:0},bold:{fontWeight:600},centred:{textAlign:"center"}}),f=function(e){var t=e.children,n=e.className,a=e.noPadding,i=e.bold,o=e.center,d=e.inline,c=void 0!==d&&d,u=s(),m={className:Object(l.a)(u.root,a&&u.noPad,i&&u.bold,o&&u.centred,n)};return c?r.default.createElement("span",m,t):r.default.createElement("p",m,t)}},Mrdh:function(e,t,n){"use strict";var a=n("zLVn"),l=n("FdF9"),r=n("RD7I"),i=n("iuhU"),o=Object(r.a)({root:{display:"flex",padding:"0 32px",alignItems:"center",flexDirection:"column"},space:{paddingTop:32,paddingBottom:32},inner:{maxWidth:900,width:"100%"},noMaxWidth:{maxWidth:"none"}});t.a=function(e){var t=e.children,n=e.noSpacing,r=e.className,d=e.noMaxWidth,c=e.innerClassName,u=Object(a.a)(e,["children","noSpacing","className","noMaxWidth","innerClassName"]),m=o();return l.default.createElement("section",Object.assign({className:Object(i.a)(m.root,!n&&m.space,r)},u),l.default.createElement("div",{className:Object(i.a)(m.inner,d&&m.noMaxWidth,c)},t))}},PFoT:function(e,t,n){},hfLc:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return i}));var a={api:{hostname:"https://toc-api.davwheat.dev"}},l={primary:"#0087dc",dark:"#203647",offWhite:"#fff"},r={upTo:{large:"(max-width: 767px)",medium:"(max-width: 579px)"},downTo:{medium:"(min-width: 768px)",small:"(min-width: 580px)"}},i={pollGame:{width:350,height:65,barHeight:30}}},"i6+/":function(e,t,n){"use strict";n.r(t);var a=n("FdF9"),l=n("RD7I"),r=n("soUV"),i=n("nQb1"),o=n("Mrdh"),d=n("1Yd/"),c=n("IjGz"),u=Object(l.a)({heading:{textAlign:"center",marginTop:8,marginBottom:16}});t.default=function(){var e=u();return a.default.createElement(r.a,null,a.default.createElement(d.a,{title:"Page not found"}),a.default.createElement(c.c,{noPadding:!0,className:e.heading},"World Cup of TOCs"),a.default.createElement(o.a,null,a.default.createElement(c.c,null,"This page doesn't exist"),a.default.createElement(c.b,null,a.default.createElement(i.a,{internal:!0,className:e.linkOrBtn,url:"/"},"Go to home page"))))}},jx6z:function(e,t,n){},kiQV:function(e){e.exports=JSON.parse('{"a":"1.0.0"}')},nQb1:function(e,t,n){"use strict";var a=n("RD7I"),l=n("iuhU"),r=n("FdF9"),i=n("hfLc");function o(e){window.scroll({top:e,behavior:"smooth"})}o.ID=function(e){if(!e)return!1;var t=document.getElementById(e);return!!t&&(o.Element(t),!0)},o.Element=function(e){if(!e)return!1;var t=e.getBoundingClientRect(),n=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return o(t.top+window.scrollY+t.height/2-n/2),!0},o.Ref=function(e){var t=e.current;return!!t&&(o.Element(t),!0)};var d=o,c=n("Wbzz"),u=Object(a.a)({link:{color:i.b.primary,display:"inline-block",borderBottom:"2px solid "+i.b.primary,lineHeight:1,cursor:"pointer",textDecoration:"none",fontWeight:600}});t.a=function(e){var t=e.internal,n=void 0!==t&&t,a=e.url,i=e.title,o=e.onClick,m=e.className,s=e.id,f=e.children,h=e.textColor,g=e.borderColor,p=e.color,b=e.target,E=u(),v="string"==typeof a&&a.startsWith("#"),w={className:Object(l.a)(E.link,m),href:a,onClick:v?function(e){d.ID(a.substr(1)),e.preventDefault(),"function"==typeof o&&o(e)}:o,style:{color:h||p,borderBottomColor:g||p},rel:"noopener noreferrer",title:i,id:s,target:b};return n?r.default.createElement(c.Link,Object.assign({to:w.href},w),f):a?r.default.createElement("a",w,f):r.default.createElement("button",w,f)}},o5L7:function(e,t,n){},qVaI:function(e,t,n){},soUV:function(e,t,n){"use strict";var a=n("FdF9"),l=(n("o5L7"),n("jx6z"),n("qVaI"),n("PFoT"),n("zlTn")),r=n("IjGz"),i=n("RD7I"),o=n("hfLc"),d=n("iuhU"),c=Object(i.a)({separator:{display:"inline-block",verticalAlign:"middle",transformOrigin:"50% 50%",transform:"scale(1.75)",marginLeft:8,marginRight:8,color:o.b.dark},light:{color:o.b.offWhite}}),u=function(e){var t=e.color,n=void 0===t?"dark":t,l=c();return a.default.createElement("span",{className:Object(d.a)(l.separator,"light"===n&&l.light)},"•")},m=n("nQb1"),s=n("Mrdh"),f=n("kiQV"),h=Object(i.a)({contactLinks:{display:"flex",justifyContent:"space-around",marginTop:24,paddingBottom:16,"& > div > p":{textAlign:"center",paddingBottom:4}}}),g=function(){var e=h();return a.default.createElement(s.a,null,a.default.createElement(r.d,{bold:!0},"Made with"," ",a.default.createElement("span",{role:"img","aria-label":"love"},a.default.createElement("img",{draggable:"false",className:"twemoji",alt:"❤️",src:"https://twemoji.maxcdn.com/v/13.0.1/72x72/2764.png"}))," ","by David Wheatley & Kishan Singh - © ",(new Date).getFullYear()," All Rights Reserved"),a.default.createElement(r.d,null,"All train operating company names listed above are trademarks of their respective owners."),a.default.createElement(r.d,null,"Website version ",f.a,a.default.createElement(u,null),a.default.createElement(m.a,{onClick:function(){return window.cookiehub.openSettings()}},"Cookie settings")),a.default.createElement("div",{className:e.contactLinks},a.default.createElement("div",null,a.default.createElement(r.b,{noPadding:!0},"Find David"),a.default.createElement(r.d,null,a.default.createElement(m.a,{target:"_blank",url:"https://github.com/davwheat"},"GitHub"),a.default.createElement(u,null),a.default.createElement(m.a,{target:"_blank",url:"https://twitter.com/davwheat_"},"Twitter"),a.default.createElement(u,null),a.default.createElement(m.a,{target:"_blank",url:"mailto:hi@davwheat.dev"},"Email"))),a.default.createElement("div",null,a.default.createElement(r.b,{noPadding:!0},"Find Kishan"),a.default.createElement(r.d,null,a.default.createElement(m.a,{target:"_blank",url:"https://github.com/Gum-Joe"},"GitHub"),a.default.createElement(u,null),a.default.createElement(m.a,{target:"_blank",url:"https://twitter.com/official_gumjoe"},"Twitter"),a.default.createElement(u,null),a.default.createElement(m.a,{target:"_blank",url:"mailto:jaskishansaran@gmail.com"},"Email")))))};t.a=function(e){var t=e.children;return a.default.createElement(l.a,null,a.default.createElement("div",null,a.default.createElement("main",null,t),a.default.createElement(g,null)))}},zlTn:function(e,t,n){"use strict";var a=n("dI71"),l=n("FdF9"),r=n("ucgz"),i=n("IjGz"),o=n("nQb1"),d=n("iuhU"),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={hasError:!1},n}return Object(a.a)(t,e),t.getDerivedStateFromError=function(e){return console.error(e),{hasError:!0}},t.prototype.render=function(){var e=this.props,t=e.classes,n=e.inline;return this.state.hasError?n?l.default.createElement("section",{className:Object(d.a)(t.root,t.inline)},l.default.createElement(i.b,null,"Uh oh, something went wrong."),l.default.createElement(i.d,null,"Please try ",l.default.createElement(o.a,{onClick:function(){return window.location.reload()}},"refreshing the page"),"."),l.default.createElement(i.d,null,"Still having issues? Let me know ",l.default.createElement(o.a,{url:"https://twitter.com/davwheat_"},"on Twitter"),".")):l.default.createElement("main",{className:t.root},l.default.createElement(i.c,null,"Uh oh, something went wrong."),l.default.createElement(i.b,{bold:!0},"It's not you, it's us."),l.default.createElement(i.b,null,"Please try ",l.default.createElement(o.a,{onClick:function(){return window.location.reload()}},"refreshing the page"),"."),l.default.createElement(i.b,null,"Still having issues? Let me know ",l.default.createElement(o.a,{url:"https://twitter.com/davwheat_"},"on Twitter"),".")):this.props.children},t}(l.default.Component);t.a=Object(r.a)((function(){return{root:{padding:32,maxWidth:900,margin:"auto"},inline:{background:"rgba(128, 128, 128, 0.075)"}}}))(c)}}]);
//# sourceMappingURL=component---src-pages-404-tsx-853f0e07b5b7eb5feab2.js.map
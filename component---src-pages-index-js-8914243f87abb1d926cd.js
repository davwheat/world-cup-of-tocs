(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{GrlX:function(t,e,r){var n=r("T016"),a=r("JRS9"),o={};for(var i in n)n.hasOwnProperty(i)&&(o[n[i]]=i);var l=t.exports={to:{},get:{}};function s(t,e,r){return Math.min(Math.max(e,t),r)}function u(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}l.get=function(t){var e,r;switch(t.substring(0,3).toLowerCase()){case"hsl":e=l.get.hsl(t),r="hsl";break;case"hwb":e=l.get.hwb(t),r="hwb";break;default:e=l.get.rgb(t),r="rgb"}return e?{model:r,value:e}:null},l.get.rgb=function(t){if(!t)return null;var e,r,a,o=[0,0,0,1];if(e=t.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(a=e[2],e=e[1],r=0;r<3;r++){var i=2*r;o[r]=parseInt(e.slice(i,i+2),16)}a&&(o[3]=parseInt(a,16)/255)}else if(e=t.match(/^#([a-f0-9]{3,4})$/i)){for(a=(e=e[1])[3],r=0;r<3;r++)o[r]=parseInt(e[r]+e[r],16);a&&(o[3]=parseInt(a+a,16)/255)}else if(e=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(r=0;r<3;r++)o[r]=parseInt(e[r+1],0);e[4]&&(o[3]=parseFloat(e[4]))}else{if(!(e=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)))return(e=t.match(/(\D+)/))?"transparent"===e[1]?[0,0,0,0]:(o=n[e[1]])?(o[3]=1,o):null:null;for(r=0;r<3;r++)o[r]=Math.round(2.55*parseFloat(e[r+1]));e[4]&&(o[3]=parseFloat(e[4]))}for(r=0;r<3;r++)o[r]=s(o[r],0,255);return o[3]=s(o[3],0,1),o},l.get.hsl=function(t){if(!t)return null;var e=t.match(/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(e){var r=parseFloat(e[4]);return[(parseFloat(e[1])+360)%360,s(parseFloat(e[2]),0,100),s(parseFloat(e[3]),0,100),s(isNaN(r)?1:r,0,1)]}return null},l.get.hwb=function(t){if(!t)return null;var e=t.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(e){var r=parseFloat(e[4]);return[(parseFloat(e[1])%360+360)%360,s(parseFloat(e[2]),0,100),s(parseFloat(e[3]),0,100),s(isNaN(r)?1:r,0,1)]}return null},l.to.hex=function(){var t=a(arguments);return"#"+u(t[0])+u(t[1])+u(t[2])+(t[3]<1?u(Math.round(255*t[3])):"")},l.to.rgb=function(){var t=a(arguments);return t.length<4||1===t[3]?"rgb("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+")":"rgba("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+", "+t[3]+")"},l.to.rgb.percent=function(){var t=a(arguments),e=Math.round(t[0]/255*100),r=Math.round(t[1]/255*100),n=Math.round(t[2]/255*100);return t.length<4||1===t[3]?"rgb("+e+"%, "+r+"%, "+n+"%)":"rgba("+e+"%, "+r+"%, "+n+"%, "+t[3]+")"},l.to.hsl=function(){var t=a(arguments);return t.length<4||1===t[3]?"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)":"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+t[3]+")"},l.to.hwb=function(){var t=a(arguments),e="";return t.length>=4&&1!==t[3]&&(e=", "+t[3]),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+e+")"},l.to.keyword=function(t){return o[t.slice(0,3)]}},JRS9:function(t,e,r){"use strict";var n=r("uPr3"),a=Array.prototype.concat,o=Array.prototype.slice,i=t.exports=function(t){for(var e=[],r=0,i=t.length;r<i;r++){var l=t[r];n(l)?e=a.call(e,o.call(l)):e.push(l)}return e};i.wrap=function(t){return function(){return t(i(arguments))}}},RXBc:function(t,e,r){"use strict";r.r(e);var n=r("FdF9"),a=r("sOrj");var o=r("Bl7J"),i=r("vrFN"),l=r("RD7I"),s=r("iuhU"),u=r("Y8Tw"),c=Object(l.a)({root:{width:"100%",padding:"12px 16px",background:a.b.dark,color:a.b.offWhite,fontSize:18},afterHeading:{marginTop:-6},title:{paddingBottom:4},padBottom:{marginBottom:16},alternateBackground:{background:a.b.primaryDark}});function h(t){var e=t.title,r=t.message,a=t.noPadding,o=t.afterHeading,i=t.alternateColor,l=t.innerClassName,h=c();return n.default.createElement("section",{className:Object(s.a)(h.root,!a&&h.padBottom,o&&h.afterHeading,i&&h.alternateBackground)},n.default.createElement("div",{className:l},n.default.createElement(u.b,{className:h.title,bold:!0},e),n.default.createElement(u.b,{noPadding:!0},r)))}var f=r("rxcZ");function d(){return n.default.createElement("noscript",null,n.default.createElement(h,{title:"Error",message:"This site requires Javascript to run. Please enable Javascript in your browser to use this site."}))}var m=r("zLVn"),g=Object(l.a)({root:{display:"flex",padding:"0 8px",alignItems:"center",flexDirection:"column"},space:{paddingTop:32,paddingBottom:32},inner:{maxWidth:900,width:"100%"},noMaxWidth:{maxWidth:"none"}});function p(t){var e=t.children,r=t.noSpacing,a=t.className,o=t.noMaxWidth,i=t.innerClassName,l=Object(m.a)(t,["children","noSpacing","className","noMaxWidth","innerClassName"]),u=g();return n.default.createElement("section",Object.assign({className:Object(s.a)(u.root,!r&&u.space,a)},l),n.default.createElement("div",{className:Object(s.a)(u.inner,o&&u.noMaxWidth,i)},e))}var v={KnockoutRounds:Object.freeze([{team1:"vt",team2:"em",date:"2021-01-15"},{team1:"me",team2:"aw",date:"2021-01-16"},{team1:"ln",team2:"cc",date:"2021-01-17"},{team1:"cs",team2:"il",date:"2021-01-18"},{team1:"gc",team2:"sr",date:"2021-01-19"},{team1:"es",team2:"cr",date:"2021-01-20"},{team1:"xc",team2:"tl",date:"2021-01-21"},{team1:"gn",team2:"tp",date:"2021-01-22"},{team1:"hx",team2:"gw",date:"2021-01-23"},{team1:"lo",team2:"le",date:"2021-01-24"},{team1:"gr",team2:"ie",date:"2021-01-25"},{team1:"nt",team2:"ni",date:"2021-01-26"},{team1:"sn",team2:"se",date:"2021-01-27"},{team1:"sw",team2:"ht",date:"2021-01-28"},{team1:"gx",team2:"lm",date:"2021-01-29"},{team1:"xr",team2:"sx",date:"2021-01-30"}])},b=Object.freeze({vt:"#004354",em:"#ffa500",me:"#f1bc1e",aw:"#ff4500",ln:"#014133",cc:"#b7007c",cs:"#1d2e35",il:"#1e90ff",gc:"#1d1d1b",sr:"#1c4074",es:"#ffd700",cr:"#00bfff",xc:"#660f21",tl:"#e9438d",gn:"#0099ff",tp:"#010385",hx:"#523e63",gw:"#0a493e",lo:"#ff7518",le:"#d70428",gr:"#ce0e2d",ie:"#43a93b",nt:"#223262",ni:"#00d899",sn:"#8cc63e",se:"#00afe8",sw:"#0192cc",ht:"#de005c",gx:"#eb1e2d",lm:"#ff8200",xr:"#0019a8",sx:"#6b717a"}),y=Object.freeze({vt:"Avanti West Coast",em:"East Midlands Railway",me:"Merseyrail",aw:"Transport for Wales",ln:"London Northwestern",cc:"c2c",cs:"Caledonian Sleeper",il:"Island Line",gc:"Grand Central",sr:"ScotRail",es:"Eurostar",cr:"Chiltern Railways",xc:"CrossCountry",tl:"Thameslink",gn:"Great Northern",tp:"TransPennine Express",hx:"Heathrow Express",gw:"GWR",lo:"London Overground",le:"Greater Anglia",gr:"LNER",ie:"Irish Rail",nt:"Northern Trains",ni:"Translink",sn:"Southern",se:"Southeastern",sw:"South Western Railway",ht:"Hull Trains",gx:"Gatwick Expressssss",lm:"West Midlands Railway",xr:"TfL Rail",sx:"Stansted Express"});function w(t){var e=t.toString().toLowerCase();return y[e]||"Unknown"}function M(t){var e=t.toString().toLowerCase();return b[e]||"#000"}var x=r("Wgwc"),k=r.n(x);var $,E=r("aSns"),O=r.n(E),S=new Uint8Array(16);function N(){if(!$&&!($="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return $(S)}var D=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var j=function(t){return"string"==typeof t&&D.test(t)},T=[],C=0;C<256;++C)T.push((C+256).toString(16).substr(1));var A=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(T[t[e+0]]+T[t[e+1]]+T[t[e+2]]+T[t[e+3]]+"-"+T[t[e+4]]+T[t[e+5]]+"-"+T[t[e+6]]+T[t[e+7]]+"-"+T[t[e+8]]+T[t[e+9]]+"-"+T[t[e+10]]+T[t[e+11]]+T[t[e+12]]+T[t[e+13]]+T[t[e+14]]+T[t[e+15]]).toLowerCase();if(!j(r))throw TypeError("Stringified UUID is invalid");return r};var L=function(t,e,r){var n=(t=t||{}).random||(t.rng||N)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(var a=0;a<16;++a)e[r+a]=n[a];return e}return A(n)};function W(t,e){return void 0===e&&(e="geofftech"),e&&t?"https://twitter.com/"+e+"/status/"+t:null}var H=a.c.pollGame,R=Object(l.a)({root:{overflow:"visible"},rect:{"&:hover":{outline:"2px solid #fff",boxShadow:"0 0 0 2px #000"}},gameText:{fontSize:14,textAnchor:"middle",dominantBaseline:"middle",transform:"translateY(1px)",verticalAlign:"middle",userSelect:"none"},tocName:{fontWeight:600,fontSize:18,marginRight:2},lightText:{fill:"#fff"},darkText:{fill:"#000"}});function I(t){var e=t.voteInfo,r=t.teamInfo,a=t.tweetId,o=t.hasStarted,i=R(),l=r.team1,u=r.team2,c=r.team1color,h=r.team2color,f={0:{isLight:O()(c).isLight(),normal:c,gradientUuid:L()},1:{isLight:O()(h).isLight(),normal:h,gradientUuid:L()}};if(!o)return n.default.createElement("svg",{viewBox:"0 0 "+H.width+" "+H.height,width:H.width,className:i.root},n.default.createElement("a",{className:i.rect,target:"_blank",href:a?W(a):null,rel:"noreferrer"},n.default.createElement("title",null,"Game not started"),n.default.createElement("rect",{x:"0",y:"0",height:H.barHeight,width:H.width,fill:c}),n.default.createElement("text",{x:H.width/2,y:H.barHeight/2,className:Object(s.a)(i.gameText,f[0].isLight?i.darkText:i.lightText)},n.default.createElement("tspan",{className:i.tocName},l))),n.default.createElement("a",{className:i.rect,target:"_blank",href:a?W(a):null,rel:"noreferrer"},n.default.createElement("title",null,"Game not started"),n.default.createElement("rect",{x:"0",y:H.height-H.barHeight,height:H.barHeight,width:H.width,fill:h}),n.default.createElement("text",{x:H.width/2,y:H.height-H.barHeight/2,className:Object(s.a)(i.gameText,f[1].isLight?i.darkText:i.lightText)},n.default.createElement("tspan",{className:i.tocName},u))));var d=e.votes1,m=e.votes2,g=d+m;function p(t){return 0===t?0:Math.round(t/g*100*100)/100}function v(t){var e=b.votesPct[t]+"%";return n.default.createElement("linearGradient",{id:f[t].gradientUuid},n.default.createElement("stop",{offset:"0%",stopColor:f[t].alt}),n.default.createElement("stop",{offset:e,stopColor:f[t].alt}),n.default.createElement("stop",{offset:e,stopColor:f[t].normal}),n.default.createElement("stop",{offset:"100%",stopColor:f[t].normal}))}var b={teams:{0:l,1:u},votes:{0:d,1:m},votesPct:{0:p(d),1:p(m)}};return f[0].alt=f[0].isLight?O()(f[0].normal).darken(.15):O()(f[0].normal).lighten(.15),f[1].alt=f[1].isLight?O()(f[1].normal).darken(.15):O()(f[1].normal).lighten(.15),n.default.createElement("svg",{viewBox:"0 0 "+H.width+" "+H.height,width:H.width,className:i.root},n.default.createElement("defs",null,v(0),v(1)),n.default.createElement("a",{className:i.rect,target:"_blank",href:W(a),rel:"noreferrer"},n.default.createElement("title",null,b.votes[0]+" votes"),n.default.createElement("rect",{x:"0",y:"0",height:H.barHeight,width:H.width,fill:"url(#"+f[0].gradientUuid+")"}),n.default.createElement("text",{x:H.width/2,y:H.barHeight/2,className:Object(s.a)(i.gameText,f[0].isLight?i.darkText:i.lightText)},n.default.createElement("tspan",{className:i.tocName},b.teams[0])," ",n.default.createElement("tspan",null,"(",b.votesPct[0],"%)"))),n.default.createElement("a",{className:i.rect,target:"_blank",href:W(a),rel:"noreferrer"},n.default.createElement("title",null,b.votes[1]+" votes"),n.default.createElement("rect",{x:"0",y:H.height-H.barHeight,height:H.barHeight,width:H.width,fill:"url(#"+f[1].gradientUuid+")"}),n.default.createElement("text",{x:H.width/2,y:H.height-H.barHeight/2,className:Object(s.a)(i.gameText,f[1].isLight?i.darkText:i.lightText)},n.default.createElement("tspan",{className:i.tocName},b.teams[1])," ",n.default.createElement("tspan",null,"(",b.votesPct[1],"%)"))))}var z=Object(l.a)({knockoutRoundsContainer:{display:"flex",flexWrap:"wrap",gap:8,margin:"auto",alignItems:"center",justifyContent:"center"},gameContainer:{marginTop:8,width:"max-content"}});function _(t){var e=t.knockoutRoundData,r=z();return n.default.createElement("section",{className:r.knockoutRoundsContainer},e.map((function(t,e){var a,o={team1:w(t.team1),team2:w(t.team2),team1color:M(t.team1),team2color:M(t.team2)};return n.default.createElement("div",{className:r.gameContainer,key:e},n.default.createElement(u.d,{center:!0,bold:!0},(a=t.date,k()(a).format("ddd D MMM"))),n.default.createElement(I,{teamInfo:o}))})))}function F(t){return function(t){if(null==t)throw new TypeError("Cannot destructure undefined")}(t),n.default.createElement(n.default.Fragment,null,n.default.createElement(p,null,n.default.createElement(u.c,null,"Knockout rounds"),n.default.createElement(u.b,null,"Knockout rounds begin on Friday 15 January and end on Saturday 30 January.")),n.default.createElement(_,{knockoutRoundData:v.KnockoutRounds}))}function P(){var t=Object(n.useRef)(null);return n.default.createElement("article",null,n.default.createElement(u.d,{center:!0,bold:!0},"Refreshing in ",n.default.createElement("span",{ref:t},"60")," seconds."),n.default.createElement("section",{id:"game-board"},n.default.createElement(F,null)))}e.default=function(){return n.default.createElement(o.a,null,n.default.createElement(i.a,null),n.default.createElement(f.a,null,n.default.createElement(u.a,null,"World Cup of TOCs"),n.default.createElement(u.b,null,"Watch the results for Geoff Marshall's World Cup of TOCs in real time."),n.default.createElement(d,null),"undefined"!=typeof window&&window.matchMedia(a.a.upTo.medium).matches&&n.default.createElement(h,{title:"Warning",message:"This page is best viewed on a larger device."})),n.default.createElement(P,null))}},T016:function(t,e,r){"use strict";t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},Wgwc:function(t,e,r){t.exports=function(){"use strict";var t="millisecond",e="second",r="minute",n="hour",a="day",o="week",i="month",l="quarter",s="year",u="date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},d=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},m={s:d,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),a=r%60;return(e<=0?"+":"-")+d(n,2,"0")+":"+d(a,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),a=e.clone().add(n,i),o=r-a<0,l=e.clone().add(n+(o?-1:1),i);return+(-(n+(r-a)/(o?a-l:l-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:i,y:s,w:o,d:a,D:u,h:n,m:r,s:e,ms:t,Q:l}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",p={};p[g]=f;var v=function(t){return t instanceof M},b=function(t,e,r){var n;if(!t)return g;if("string"==typeof t)p[t]&&(n=t),e&&(p[t]=e,n=t);else{var a=t.name;p[a]=t,n=a}return!r&&n&&(g=n),n||!r&&g},y=function(t,e){if(v(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new M(r)},w=m;w.l=b,w.i=v,w.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function f(t){this.$L=b(t.locale,null,!0),this.parse(t)}var d=f.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(c);if(n){var a=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return w},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var r=y(t);return this.startOf(e)<=r&&r<=this.endOf(e)},d.isAfter=function(t,e){return y(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<y(t)},d.$g=function(t,e,r){return w.u(t)?this[e]:this.set(r,t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,l){var c=this,h=!!w.u(l)||l,f=w.p(t),d=function(t,e){var r=w.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return h?r:r.endOf(a)},m=function(t,e){return w.w(c.toDate()[t].apply(c.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},g=this.$W,p=this.$M,v=this.$D,b="set"+(this.$u?"UTC":"");switch(f){case s:return h?d(1,0):d(31,11);case i:return h?d(1,p):d(0,p+1);case o:var y=this.$locale().weekStart||0,M=(g<y?g+7:g)-y;return d(h?v-M:v+(6-M),p);case a:case u:return m(b+"Hours",0);case n:return m(b+"Minutes",1);case r:return m(b+"Seconds",2);case e:return m(b+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(o,l){var c,h=w.p(o),f="set"+(this.$u?"UTC":""),d=(c={},c[a]=f+"Date",c[u]=f+"Date",c[i]=f+"Month",c[s]=f+"FullYear",c[n]=f+"Hours",c[r]=f+"Minutes",c[e]=f+"Seconds",c[t]=f+"Milliseconds",c)[h],m=h===a?this.$D+(l-this.$W):l;if(h===i||h===s){var g=this.clone().set(u,1);g.$d[d](m),g.init(),this.$d=g.set(u,Math.min(this.$D,g.daysInMonth())).$d}else d&&this.$d[d](m);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[w.p(t)]()},d.add=function(t,l){var u,c=this;t=Number(t);var h=w.p(l),f=function(e){var r=y(c);return w.w(r.date(r.date()+Math.round(e*t)),c)};if(h===i)return this.set(i,this.$M+t);if(h===s)return this.set(s,this.$y+t);if(h===a)return f(1);if(h===o)return f(7);var d=(u={},u[r]=6e4,u[n]=36e5,u[e]=1e3,u)[h]||1,m=this.$d.getTime()+t*d;return w.w(m,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var r=t||"YYYY-MM-DDTHH:mm:ssZ",n=w.z(this),a=this.$locale(),o=this.$H,i=this.$m,l=this.$M,s=a.weekdays,u=a.months,c=function(t,n,a,o){return t&&(t[n]||t(e,r))||a[n].substr(0,o)},f=function(t){return w.s(o%12||12,t,"0")},d=a.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:w.s(l+1,2,"0"),MMM:c(a.monthsShort,l,u,3),MMMM:c(u,l),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:c(a.weekdaysMin,this.$W,s,2),ddd:c(a.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(o),HH:w.s(o,2,"0"),h:f(1),hh:f(2),a:d(o,i,!0),A:d(o,i,!1),m:String(i),mm:w.s(i,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:n};return r.replace(h,(function(t,e){return e||m[t]||n.replace(":","")}))},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,u,c){var h,f=w.p(u),d=y(t),m=6e4*(d.utcOffset()-this.utcOffset()),g=this-d,p=w.m(this,d);return p=(h={},h[s]=p/12,h[i]=p,h[l]=p/3,h[o]=(g-m)/6048e5,h[a]=(g-m)/864e5,h[n]=g/36e5,h[r]=g/6e4,h[e]=g/1e3,h)[f]||g,c?p:w.a(p)},d.daysInMonth=function(){return this.endOf(i).$D},d.$locale=function(){return p[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=b(t,e,!0);return n&&(r.$L=n),r},d.clone=function(){return w.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},f}(),x=M.prototype;return y.prototype=x,[["$ms",t],["$s",e],["$m",r],["$H",n],["$W",a],["$M",i],["$y",s],["$D",u]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),y.extend=function(t,e){return t.$i||(t(e,M,y),t.$i=!0),y},y.locale=b,y.isDayjs=v,y.unix=function(t){return y(1e3*t)},y.en=p[g],y.Ls=p,y.p={},y}()},aSns:function(t,e,r){"use strict";var n=r("GrlX"),a=r("uxXc"),o=[].slice,i=["keyword","gray","hex"],l={};Object.keys(a).forEach((function(t){l[o.call(a[t].labels).sort().join("")]=t}));var s={};function u(t,e){if(!(this instanceof u))return new u(t,e);if(e&&e in i&&(e=null),e&&!(e in a))throw new Error("Unknown model: "+e);var r,c;if(null==t)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(t instanceof u)this.model=t.model,this.color=t.color.slice(),this.valpha=t.valpha;else if("string"==typeof t){var h=n.get(t);if(null===h)throw new Error("Unable to parse color from string: "+t);this.model=h.model,c=a[this.model].channels,this.color=h.value.slice(0,c),this.valpha="number"==typeof h.value[c]?h.value[c]:1}else if(t.length){this.model=e||"rgb",c=a[this.model].channels;var f=o.call(t,0,c);this.color=d(f,c),this.valpha="number"==typeof t[c]?t[c]:1}else if("number"==typeof t)t&=16777215,this.model="rgb",this.color=[t>>16&255,t>>8&255,255&t],this.valpha=1;else{this.valpha=1;var m=Object.keys(t);"alpha"in t&&(m.splice(m.indexOf("alpha"),1),this.valpha="number"==typeof t.alpha?t.alpha:0);var g=m.sort().join("");if(!(g in l))throw new Error("Unable to parse color from object: "+JSON.stringify(t));this.model=l[g];var p=a[this.model].labels,v=[];for(r=0;r<p.length;r++)v.push(t[p[r]]);this.color=d(v)}if(s[this.model])for(c=a[this.model].channels,r=0;r<c;r++){var b=s[this.model][r];b&&(this.color[r]=b(this.color[r]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function c(t,e,r){return(t=Array.isArray(t)?t:[t]).forEach((function(t){(s[t]||(s[t]=[]))[e]=r})),t=t[0],function(n){var a;return arguments.length?(r&&(n=r(n)),(a=this[t]()).color[e]=n,a):(a=this[t]().color[e],r&&(a=r(a)),a)}}function h(t){return function(e){return Math.max(0,Math.min(t,e))}}function f(t){return Array.isArray(t)?t:[t]}function d(t,e){for(var r=0;r<e;r++)"number"!=typeof t[r]&&(t[r]=0);return t}u.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(t){var e=this.model in n.to?this:this.rgb(),r=1===(e=e.round("number"==typeof t?t:1)).valpha?e.color:e.color.concat(this.valpha);return n.to[e.model](r)},percentString:function(t){var e=this.rgb().round("number"==typeof t?t:1),r=1===e.valpha?e.color:e.color.concat(this.valpha);return n.to.rgb.percent(r)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var t={},e=a[this.model].channels,r=a[this.model].labels,n=0;n<e;n++)t[r[n]]=this.color[n];return 1!==this.valpha&&(t.alpha=this.valpha),t},unitArray:function(){var t=this.rgb().color;return t[0]/=255,t[1]/=255,t[2]/=255,1!==this.valpha&&t.push(this.valpha),t},unitObject:function(){var t=this.rgb().object();return t.r/=255,t.g/=255,t.b/=255,1!==this.valpha&&(t.alpha=this.valpha),t},round:function(t){return t=Math.max(t||0,0),new u(this.color.map(function(t){return function(e){return function(t,e){return Number(t.toFixed(e))}(e,t)}}(t)).concat(this.valpha),this.model)},alpha:function(t){return arguments.length?new u(this.color.concat(Math.max(0,Math.min(1,t))),this.model):this.valpha},red:c("rgb",0,h(255)),green:c("rgb",1,h(255)),blue:c("rgb",2,h(255)),hue:c(["hsl","hsv","hsl","hwb","hcg"],0,(function(t){return(t%360+360)%360})),saturationl:c("hsl",1,h(100)),lightness:c("hsl",2,h(100)),saturationv:c("hsv",1,h(100)),value:c("hsv",2,h(100)),chroma:c("hcg",1,h(100)),gray:c("hcg",2,h(100)),white:c("hwb",1,h(100)),wblack:c("hwb",2,h(100)),cyan:c("cmyk",0,h(100)),magenta:c("cmyk",1,h(100)),yellow:c("cmyk",2,h(100)),black:c("cmyk",3,h(100)),x:c("xyz",0,h(100)),y:c("xyz",1,h(100)),z:c("xyz",2,h(100)),l:c("lab",0,h(100)),a:c("lab",1),b:c("lab",2),keyword:function(t){return arguments.length?new u(t):a[this.model].keyword(this.color)},hex:function(t){return arguments.length?new u(t):n.to.hex(this.rgb().round().color)},rgbNumber:function(){var t=this.rgb().color;return(255&t[0])<<16|(255&t[1])<<8|255&t[2]},luminosity:function(){for(var t=this.rgb().color,e=[],r=0;r<t.length;r++){var n=t[r]/255;e[r]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),r=t.luminosity();return e>r?(e+.05)/(r+.05):(r+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},isDark:function(){var t=this.rgb().color;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},isLight:function(){return!this.isDark()},negate:function(){for(var t=this.rgb(),e=0;e<3;e++)t.color[e]=255-t.color[e];return t},lighten:function(t){var e=this.hsl();return e.color[2]+=e.color[2]*t,e},darken:function(t){var e=this.hsl();return e.color[2]-=e.color[2]*t,e},saturate:function(t){var e=this.hsl();return e.color[1]+=e.color[1]*t,e},desaturate:function(t){var e=this.hsl();return e.color[1]-=e.color[1]*t,e},whiten:function(t){var e=this.hwb();return e.color[1]+=e.color[1]*t,e},blacken:function(t){var e=this.hwb();return e.color[2]+=e.color[2]*t,e},grayscale:function(){var t=this.rgb().color,e=.3*t[0]+.59*t[1]+.11*t[2];return u.rgb(e,e,e)},fade:function(t){return this.alpha(this.valpha-this.valpha*t)},opaquer:function(t){return this.alpha(this.valpha+this.valpha*t)},rotate:function(t){var e=this.hsl(),r=e.color[0];return r=(r=(r+t)%360)<0?360+r:r,e.color[0]=r,e},mix:function(t,e){if(!t||!t.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof t);var r=t.rgb(),n=this.rgb(),a=void 0===e?.5:e,o=2*a-1,i=r.alpha()-n.alpha(),l=((o*i==-1?o:(o+i)/(1+o*i))+1)/2,s=1-l;return u.rgb(l*r.red()+s*n.red(),l*r.green()+s*n.green(),l*r.blue()+s*n.blue(),r.alpha()*a+n.alpha()*(1-a))}},Object.keys(a).forEach((function(t){if(-1===i.indexOf(t)){var e=a[t].channels;u.prototype[t]=function(){if(this.model===t)return new u(this);if(arguments.length)return new u(arguments,t);var r="number"==typeof arguments[e]?e:this.valpha;return new u(f(a[this.model][t].raw(this.color)).concat(r),t)},u[t]=function(r){return"number"==typeof r&&(r=d(o.call(arguments),e)),new u(r,t)}}})),t.exports=u},onlc:function(t,e,r){var n=r("t1N5");function a(t){var e=function(){for(var t={},e=Object.keys(n),r=e.length,a=0;a<r;a++)t[e[a]]={distance:-1,parent:null};return t}(),r=[t];for(e[t].distance=0;r.length;)for(var a=r.pop(),o=Object.keys(n[a]),i=o.length,l=0;l<i;l++){var s=o[l],u=e[s];-1===u.distance&&(u.distance=e[a].distance+1,u.parent=a,r.unshift(s))}return e}function o(t,e){return function(r){return e(t(r))}}function i(t,e){for(var r=[e[t].parent,t],a=n[e[t].parent][t],i=e[t].parent;e[i].parent;)r.unshift(e[i].parent),a=o(n[e[i].parent][i],a),i=e[i].parent;return a.conversion=r,a}t.exports=function(t){for(var e=a(t),r={},n=Object.keys(e),o=n.length,l=0;l<o;l++){var s=n[l];null!==e[s].parent&&(r[s]=i(s,e))}return r}},t1N5:function(t,e,r){var n=r("T016"),a={};for(var o in n)n.hasOwnProperty(o)&&(a[n[o]]=o);var i=t.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var l in i)if(i.hasOwnProperty(l)){if(!("channels"in i[l]))throw new Error("missing channels property: "+l);if(!("labels"in i[l]))throw new Error("missing channel labels property: "+l);if(i[l].labels.length!==i[l].channels)throw new Error("channel and label counts mismatch: "+l);var s=i[l].channels,u=i[l].labels;delete i[l].channels,delete i[l].labels,Object.defineProperty(i[l],"channels",{value:s}),Object.defineProperty(i[l],"labels",{value:u})}i.rgb.hsl=function(t){var e,r,n=t[0]/255,a=t[1]/255,o=t[2]/255,i=Math.min(n,a,o),l=Math.max(n,a,o),s=l-i;return l===i?e=0:n===l?e=(a-o)/s:a===l?e=2+(o-n)/s:o===l&&(e=4+(n-a)/s),(e=Math.min(60*e,360))<0&&(e+=360),r=(i+l)/2,[e,100*(l===i?0:r<=.5?s/(l+i):s/(2-l-i)),100*r]},i.rgb.hsv=function(t){var e,r,n,a,o,i=t[0]/255,l=t[1]/255,s=t[2]/255,u=Math.max(i,l,s),c=u-Math.min(i,l,s),h=function(t){return(u-t)/6/c+.5};return 0===c?a=o=0:(o=c/u,e=h(i),r=h(l),n=h(s),i===u?a=n-r:l===u?a=1/3+e-n:s===u&&(a=2/3+r-e),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*u]},i.rgb.hwb=function(t){var e=t[0],r=t[1],n=t[2];return[i.rgb.hsl(t)[0],100*(1/255*Math.min(e,Math.min(r,n))),100*(n=1-1/255*Math.max(e,Math.max(r,n)))]},i.rgb.cmyk=function(t){var e,r=t[0]/255,n=t[1]/255,a=t[2]/255;return[100*((1-r-(e=Math.min(1-r,1-n,1-a)))/(1-e)||0),100*((1-n-e)/(1-e)||0),100*((1-a-e)/(1-e)||0),100*e]},i.rgb.keyword=function(t){var e=a[t];if(e)return e;var r,o,i,l=1/0;for(var s in n)if(n.hasOwnProperty(s)){var u=n[s],c=(o=t,i=u,Math.pow(o[0]-i[0],2)+Math.pow(o[1]-i[1],2)+Math.pow(o[2]-i[2],2));c<l&&(l=c,r=s)}return r},i.keyword.rgb=function(t){return n[t]},i.rgb.xyz=function(t){var e=t[0]/255,r=t[1]/255,n=t[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*e+.7152*r+.0722*n),100*(.0193*e+.1192*r+.9505*n)]},i.rgb.lab=function(t){var e=i.rgb.xyz(t),r=e[0],n=e[1],a=e[2];return n/=100,a/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(r-n),200*(n-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]},i.hsl.rgb=function(t){var e,r,n,a,o,i=t[0]/360,l=t[1]/100,s=t[2]/100;if(0===l)return[o=255*s,o,o];e=2*s-(r=s<.5?s*(1+l):s+l-s*l),a=[0,0,0];for(var u=0;u<3;u++)(n=i+1/3*-(u-1))<0&&n++,n>1&&n--,o=6*n<1?e+6*(r-e)*n:2*n<1?r:3*n<2?e+(r-e)*(2/3-n)*6:e,a[u]=255*o;return a},i.hsl.hsv=function(t){var e=t[0],r=t[1]/100,n=t[2]/100,a=r,o=Math.max(n,.01);return r*=(n*=2)<=1?n:2-n,a*=o<=1?o:2-o,[e,100*(0===n?2*a/(o+a):2*r/(n+r)),100*((n+r)/2)]},i.hsv.rgb=function(t){var e=t[0]/60,r=t[1]/100,n=t[2]/100,a=Math.floor(e)%6,o=e-Math.floor(e),i=255*n*(1-r),l=255*n*(1-r*o),s=255*n*(1-r*(1-o));switch(n*=255,a){case 0:return[n,s,i];case 1:return[l,n,i];case 2:return[i,n,s];case 3:return[i,l,n];case 4:return[s,i,n];case 5:return[n,i,l]}},i.hsv.hsl=function(t){var e,r,n,a=t[0],o=t[1]/100,i=t[2]/100,l=Math.max(i,.01);return n=(2-o)*i,r=o*l,[a,100*(r=(r/=(e=(2-o)*l)<=1?e:2-e)||0),100*(n/=2)]},i.hwb.rgb=function(t){var e,r,n,a,o,i,l,s=t[0]/360,u=t[1]/100,c=t[2]/100,h=u+c;switch(h>1&&(u/=h,c/=h),n=6*s-(e=Math.floor(6*s)),0!=(1&e)&&(n=1-n),a=u+n*((r=1-c)-u),e){default:case 6:case 0:o=r,i=a,l=u;break;case 1:o=a,i=r,l=u;break;case 2:o=u,i=r,l=a;break;case 3:o=u,i=a,l=r;break;case 4:o=a,i=u,l=r;break;case 5:o=r,i=u,l=a}return[255*o,255*i,255*l]},i.cmyk.rgb=function(t){var e=t[0]/100,r=t[1]/100,n=t[2]/100,a=t[3]/100;return[255*(1-Math.min(1,e*(1-a)+a)),255*(1-Math.min(1,r*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]},i.xyz.rgb=function(t){var e,r,n,a=t[0]/100,o=t[1]/100,i=t[2]/100;return r=-.9689*a+1.8758*o+.0415*i,n=.0557*a+-.204*o+1.057*i,e=(e=3.2406*a+-1.5372*o+-.4986*i)>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,[255*(e=Math.min(Math.max(0,e),1)),255*(r=Math.min(Math.max(0,r),1)),255*(n=Math.min(Math.max(0,n),1))]},i.xyz.lab=function(t){var e=t[0],r=t[1],n=t[2];return r/=100,n/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116)-16,500*(e-r),200*(r-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]},i.lab.xyz=function(t){var e,r,n,a=t[0];e=t[1]/500+(r=(a+16)/116),n=r-t[2]/200;var o=Math.pow(r,3),i=Math.pow(e,3),l=Math.pow(n,3);return r=o>.008856?o:(r-16/116)/7.787,e=i>.008856?i:(e-16/116)/7.787,n=l>.008856?l:(n-16/116)/7.787,[e*=95.047,r*=100,n*=108.883]},i.lab.lch=function(t){var e,r=t[0],n=t[1],a=t[2];return(e=360*Math.atan2(a,n)/2/Math.PI)<0&&(e+=360),[r,Math.sqrt(n*n+a*a),e]},i.lch.lab=function(t){var e,r=t[0],n=t[1];return e=t[2]/360*2*Math.PI,[r,n*Math.cos(e),n*Math.sin(e)]},i.rgb.ansi16=function(t){var e=t[0],r=t[1],n=t[2],a=1 in arguments?arguments[1]:i.rgb.hsv(t)[2];if(0===(a=Math.round(a/50)))return 30;var o=30+(Math.round(n/255)<<2|Math.round(r/255)<<1|Math.round(e/255));return 2===a&&(o+=60),o},i.hsv.ansi16=function(t){return i.rgb.ansi16(i.hsv.rgb(t),t[2])},i.rgb.ansi256=function(t){var e=t[0],r=t[1],n=t[2];return e===r&&r===n?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)},i.ansi16.rgb=function(t){var e=t%10;if(0===e||7===e)return t>50&&(e+=3.5),[e=e/10.5*255,e,e];var r=.5*(1+~~(t>50));return[(1&e)*r*255,(e>>1&1)*r*255,(e>>2&1)*r*255]},i.ansi256.rgb=function(t){if(t>=232){var e=10*(t-232)+8;return[e,e,e]}var r;return t-=16,[Math.floor(t/36)/5*255,Math.floor((r=t%36)/6)/5*255,r%6/5*255]},i.rgb.hex=function(t){var e=(((255&Math.round(t[0]))<<16)+((255&Math.round(t[1]))<<8)+(255&Math.round(t[2]))).toString(16).toUpperCase();return"000000".substring(e.length)+e},i.hex.rgb=function(t){var e=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];var r=e[0];3===e[0].length&&(r=r.split("").map((function(t){return t+t})).join(""));var n=parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},i.rgb.hcg=function(t){var e,r=t[0]/255,n=t[1]/255,a=t[2]/255,o=Math.max(Math.max(r,n),a),i=Math.min(Math.min(r,n),a),l=o-i;return e=l<=0?0:o===r?(n-a)/l%6:o===n?2+(a-r)/l:4+(r-n)/l+4,e/=6,[360*(e%=1),100*l,100*(l<1?i/(1-l):0)]},i.hsl.hcg=function(t){var e=t[1]/100,r=t[2]/100,n=1,a=0;return(n=r<.5?2*e*r:2*e*(1-r))<1&&(a=(r-.5*n)/(1-n)),[t[0],100*n,100*a]},i.hsv.hcg=function(t){var e=t[1]/100,r=t[2]/100,n=e*r,a=0;return n<1&&(a=(r-n)/(1-n)),[t[0],100*n,100*a]},i.hcg.rgb=function(t){var e=t[0]/360,r=t[1]/100,n=t[2]/100;if(0===r)return[255*n,255*n,255*n];var a,o=[0,0,0],i=e%1*6,l=i%1,s=1-l;switch(Math.floor(i)){case 0:o[0]=1,o[1]=l,o[2]=0;break;case 1:o[0]=s,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=l;break;case 3:o[0]=0,o[1]=s,o[2]=1;break;case 4:o[0]=l,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=s}return a=(1-r)*n,[255*(r*o[0]+a),255*(r*o[1]+a),255*(r*o[2]+a)]},i.hcg.hsv=function(t){var e=t[1]/100,r=e+t[2]/100*(1-e),n=0;return r>0&&(n=e/r),[t[0],100*n,100*r]},i.hcg.hsl=function(t){var e=t[1]/100,r=t[2]/100*(1-e)+.5*e,n=0;return r>0&&r<.5?n=e/(2*r):r>=.5&&r<1&&(n=e/(2*(1-r))),[t[0],100*n,100*r]},i.hcg.hwb=function(t){var e=t[1]/100,r=e+t[2]/100*(1-e);return[t[0],100*(r-e),100*(1-r)]},i.hwb.hcg=function(t){var e=t[1]/100,r=1-t[2]/100,n=r-e,a=0;return n<1&&(a=(r-n)/(1-n)),[t[0],100*n,100*a]},i.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},i.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},i.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},i.gray.hsl=i.gray.hsv=function(t){return[0,0,t[0]]},i.gray.hwb=function(t){return[0,100,t[0]]},i.gray.cmyk=function(t){return[0,0,0,t[0]]},i.gray.lab=function(t){return[t[0],0,0]},i.gray.hex=function(t){var e=255&Math.round(t[0]/100*255),r=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(r.length)+r},i.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]}},uPr3:function(t,e){t.exports=function(t){return!(!t||"string"==typeof t)&&(t instanceof Array||Array.isArray(t)||t.length>=0&&(t.splice instanceof Function||Object.getOwnPropertyDescriptor(t,t.length-1)&&"String"!==t.constructor.name))}},uxXc:function(t,e,r){var n=r("t1N5"),a=r("onlc"),o={};Object.keys(n).forEach((function(t){o[t]={},Object.defineProperty(o[t],"channels",{value:n[t].channels}),Object.defineProperty(o[t],"labels",{value:n[t].labels});var e=a(t);Object.keys(e).forEach((function(r){var n=e[r];o[t][r]=function(t){var e=function(e){if(null==e)return e;arguments.length>1&&(e=Array.prototype.slice.call(arguments));var r=t(e);if("object"==typeof r)for(var n=r.length,a=0;a<n;a++)r[a]=Math.round(r[a]);return r};return"conversion"in t&&(e.conversion=t.conversion),e}(n),o[t][r].raw=function(t){var e=function(e){return null==e?e:(arguments.length>1&&(e=Array.prototype.slice.call(arguments)),t(e))};return"conversion"in t&&(e.conversion=t.conversion),e}(n)}))})),t.exports=o}}]);
//# sourceMappingURL=component---src-pages-index-js-8914243f87abb1d926cd.js.map
import{w as ee,v as te}from"./runtime-dom.esm-bundler-aafc7534.js";import{P as U,C as k,g as re}from"./playlist-859584b6.js";import{X as s,a6 as j,J as x,as as ae,a as v,e as S,ac as h,l as y,m as g,p as o,u as p,R as f,aS as se,aT as ne,ao as I,ap as O,aq as w,V as b,W as T,F as oe,a3 as ie,Q as ce,U as le,M as ue,aU as V,aV as de,S as _e,az as F,aW as fe}from"./nprogress-ef20a486.js";import{I as C}from"./index-261134ad.js";const ve=C("dislike",!0,function(e){return s("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[s("path",{d:"M24 31L21 26L28 20L19 15L20 9.19942C18.4999 8.43256 16.8004 8 15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C31.1996 8 29.5001 8.43256 28 9.19942",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),ye=C("go-end",!0,function(e){return s("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[s("path",{d:"M14 12L26 24L14 36",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),s("path",{d:"M34 12V36",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),be=C("radio-one",!0,function(e){return s("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[s("rect",{x:"5",y:"14",width:"38",height:"28",rx:"2",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),s("path",{d:"M32 22H36",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),s("path",{d:"M32 28H36",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),s("path",{d:"M32 34H36",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),s("circle",{cx:"18",cy:"28",r:"7",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth},null),s("path",{d:"M10 14V6H38V14",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])});var pe=Math.floor,ge=Math.random;function me(e,t){return e+pe(ge()*(t-e+1))}var he=me,ke=he;function je(e){var t=e.length;return t?e[ke(0,t-1)]:void 0}var W=je;function Te(e,t){for(var r=-1,i=e==null?0:e.length,n=Array(i);++r<i;)n[r]=t(e[r],r,e);return n}var $e=Te,Ae=$e;function xe(e,t){return Ae(t,function(r){return e[r]})}var we=xe;function Le(e,t){for(var r=-1,i=Array(e);++r<e;)i[r]=t(r);return i}var Se=Le,Ie=typeof j=="object"&&j&&j.Object===Object&&j,K=Ie,Oe=K,Ce=typeof self=="object"&&self&&self.Object===Object&&self,Me=Oe||Ce||Function("return this")(),N=Me,Pe=N,Fe=Pe.Symbol,q=Fe,B=q,X=Object.prototype,Be=X.hasOwnProperty,Ee=X.toString,m=B?B.toStringTag:void 0;function Re(e){var t=Be.call(e,m),r=e[m];try{e[m]=void 0;var i=!0}catch{}var n=Ee.call(e);return i&&(t?e[m]=r:delete e[m]),n}var ze=Re,De=Object.prototype,Ge=De.toString;function Ue(e){return Ge.call(e)}var Ve=Ue,E=q,We=ze,Ke=Ve,Ne="[object Null]",qe="[object Undefined]",R=E?E.toStringTag:void 0;function Xe(e){return e==null?e===void 0?qe:Ne:R&&R in Object(e)?We(e):Ke(e)}var M=Xe;function He(e){return e!=null&&typeof e=="object"}var P=He,Ye=M,Je=P,Qe="[object Arguments]";function Ze(e){return Je(e)&&Ye(e)==Qe}var et=Ze,z=et,tt=P,H=Object.prototype,rt=H.hasOwnProperty,at=H.propertyIsEnumerable,st=z(function(){return arguments}())?z:function(e){return tt(e)&&rt.call(e,"callee")&&!at.call(e,"callee")},nt=st,ot=Array.isArray,Y=ot,$={},it={get exports(){return $},set exports(e){$=e}};function ct(){return!1}var lt=ct;(function(e,t){var r=N,i=lt,n=t&&!t.nodeType&&t,d=n&&!0&&e&&!e.nodeType&&e,l=d&&d.exports===n,a=l?r.Buffer:void 0,_=a?a.isBuffer:void 0,u=_||i;e.exports=u})(it,$);var ut=9007199254740991,dt=/^(?:0|[1-9]\d*)$/;function _t(e,t){var r=typeof e;return t=t??ut,!!t&&(r=="number"||r!="symbol"&&dt.test(e))&&e>-1&&e%1==0&&e<t}var ft=_t,vt=9007199254740991;function yt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=vt}var J=yt,bt=M,pt=J,gt=P,mt="[object Arguments]",ht="[object Array]",kt="[object Boolean]",jt="[object Date]",Tt="[object Error]",$t="[object Function]",At="[object Map]",xt="[object Number]",wt="[object Object]",Lt="[object RegExp]",St="[object Set]",It="[object String]",Ot="[object WeakMap]",Ct="[object ArrayBuffer]",Mt="[object DataView]",Pt="[object Float32Array]",Ft="[object Float64Array]",Bt="[object Int8Array]",Et="[object Int16Array]",Rt="[object Int32Array]",zt="[object Uint8Array]",Dt="[object Uint8ClampedArray]",Gt="[object Uint16Array]",Ut="[object Uint32Array]",c={};c[Pt]=c[Ft]=c[Bt]=c[Et]=c[Rt]=c[zt]=c[Dt]=c[Gt]=c[Ut]=!0;c[mt]=c[ht]=c[Ct]=c[kt]=c[Mt]=c[jt]=c[Tt]=c[$t]=c[At]=c[xt]=c[wt]=c[Lt]=c[St]=c[It]=c[Ot]=!1;function Vt(e){return gt(e)&&pt(e.length)&&!!c[bt(e)]}var Wt=Vt;function Kt(e){return function(t){return e(t)}}var Nt=Kt,A={},qt={get exports(){return A},set exports(e){A=e}};(function(e,t){var r=K,i=t&&!t.nodeType&&t,n=i&&!0&&e&&!e.nodeType&&e,d=n&&n.exports===i,l=d&&r.process,a=function(){try{var _=n&&n.require&&n.require("util").types;return _||l&&l.binding&&l.binding("util")}catch{}}();e.exports=a})(qt,A);var Xt=Wt,Ht=Nt,D=A,G=D&&D.isTypedArray,Yt=G?Ht(G):Xt,Jt=Yt,Qt=Se,Zt=nt,er=Y,tr=$,rr=ft,ar=Jt,sr=Object.prototype,nr=sr.hasOwnProperty;function or(e,t){var r=er(e),i=!r&&Zt(e),n=!r&&!i&&tr(e),d=!r&&!i&&!n&&ar(e),l=r||i||n||d,a=l?Qt(e.length,String):[],_=a.length;for(var u in e)(t||nr.call(e,u))&&!(l&&(u=="length"||n&&(u=="offset"||u=="parent")||d&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||rr(u,_)))&&a.push(u);return a}var ir=or,cr=Object.prototype;function lr(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||cr;return e===r}var ur=lr;function dr(e,t){return function(r){return e(t(r))}}var _r=dr,fr=_r,vr=fr(Object.keys,Object),yr=vr,br=ur,pr=yr,gr=Object.prototype,mr=gr.hasOwnProperty;function hr(e){if(!br(e))return pr(e);var t=[];for(var r in Object(e))mr.call(e,r)&&r!="constructor"&&t.push(r);return t}var kr=hr;function jr(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Tr=jr,$r=M,Ar=Tr,xr="[object AsyncFunction]",wr="[object Function]",Lr="[object GeneratorFunction]",Sr="[object Proxy]";function Ir(e){if(!Ar(e))return!1;var t=$r(e);return t==wr||t==Lr||t==xr||t==Sr}var Or=Ir,Cr=Or,Mr=J;function Pr(e){return e!=null&&Mr(e.length)&&!Cr(e)}var Fr=Pr,Br=ir,Er=kr,Rr=Fr;function zr(e){return Rr(e)?Br(e):Er(e)}var Dr=zr,Gr=we,Ur=Dr;function Vr(e){return e==null?[]:Gr(e,Ur(e))}var Wr=Vr,Kr=W,Nr=Wr;function qr(e){return Kr(Nr(e))}var Xr=qr,Hr=W,Yr=Xr,Jr=Y;function Qr(e){var t=Jr(e)?Hr:Yr;return t(e)}var Zr=Qr;const ea=e=>(I("data-v-42b43680"),e=e(),O(),e),ta=["src"],ra=ea(()=>o("div",{class:"container"},[o("div",{class:"title-box"},[o("div",{class:"title"},[o("span",null,"每"),o("span",null,"日"),o("span",null,"推"),o("span",null,"荐")])])],-1)),aa=x({__name:"DailyTracksCard",setup(e){const t=ae();v(!1);const r=["https://p2.music.126.net/0-Ybpa8FrDfRgKYCTJD8Xg==/109951164796696795.jpg","https://p2.music.126.net/QxJA2mr4hhb9DZyucIOIQw==/109951165422200291.jpg","https://p1.music.126.net/AhYP9TET8l-VSGOpWAKZXw==/109951165134386387.jpg"],i=t.dailyTracks,n=S(()=>{var l;return`${((l=i[0])==null?void 0:l.al.picUrl)||Zr(r)}?param=1024y1024`});function d(){se()&&ne().then(l=>{t.updateDailyTracks(l.data.dailySongs)})}return i.length===0&&d(),(l,a)=>{const _=h("el-icon");return y(),g("div",{class:"daily-recommend-card",onClick:a[1]||(a[1]=()=>{})},[o("img",{src:p(n),loading:"lazy"},null,8,ta),ra,o("button",{class:"play-button",onClick:a[0]||(a[0]=ee(()=>{},["stop"]))},[s(_,{size:"24"},{default:f(()=>[s(p(U))]),_:1})])])}}});const sa=w(aa,[["__scopeId","data-v-42b43680"]]),na={class:"artist-in-line"},oa={key:1},ia={key:2,class:"separator"},ca=x({__name:"ArtistsInLine",props:{artists:{type:Array,required:!0},exclude:{type:String,default:""},prefix:{type:String,default:""}},setup(e){const t=e,r=S(()=>{var n;return(n=t.artists)==null?void 0:n.filter(d=>d.name!==t.exclude)}),i=S(()=>r.value.length!==0?t.prefix:"");return(n,d)=>{const l=h("router-link");return y(),g("span",na,[b(T(p(i))+" ",1),(y(!0),g(oe,null,ie(p(r),(a,_)=>(y(),g("span",{key:_},[a.id!==0?(y(),ce(l,{key:0,to:`/artist/${a.id}`},{default:f(()=>[b(T(a.name),1)]),_:2},1032,["to"])):(y(),g("span",oa,T(a.name),1)),_!==p(r).length-1?(y(),g("span",ia,",")):le("",!0)]))),128))])}}});const la=w(ca,[["__scopeId","data-v-4faa7b3c"]]),ua=e=>(I("data-v-05f8b259"),e=e(),O(),e),da=["src"],_a=["src"],fa={class:"right-part"},va={class:"info"},ya=ua(()=>o("div",{class:"title"},T("测试"),-1)),ba={class:"artist"},pa={class:"controls"},ga={class:"buttons"},ma={class:"card-name"},ha=x({__name:"FMCard",setup(e){const t=v(""),r=v(""),i=(d,l=512)=>{if(!d)return"";let a=d;return d.slice(0,5)!=="https"&&(a="https"+d.slice(4)),`${a}?param=${l}y${l}`},n=()=>{};return(d,l)=>{const a=h("el-icon"),_=h("el-button");return y(),g("div",{class:"fm",style:ue({background:t.value}),"data-theme":"dark"},[o("img",{src:r.value,style:{display:"none"},loading:"lazy"},null,8,da),o("img",{class:"cover",src:i("https://p1.music.126.net/3zmjzsIbgqSiSXyuan-5uA==/109951168170954273.jpg"),loading:"lazy",onClick:n},null,8,_a),o("div",fa,[o("div",va,[ya,o("div",ba,[s(la,{artists:["周杰伦"]})])]),o("div",pa,[o("div",ga,[s(_,{title:"不喜欢"},{icon:f(()=>[s(a,{size:32},{default:f(()=>[s(p(ve),{theme:"filled"})]),_:1})]),_:1}),s(_,{class:"play"},{icon:f(()=>[s(a,{size:32},{default:f(()=>[s(p(U),{theme:"filled"})]),_:1})]),_:1}),s(_,null,{icon:f(()=>[s(a,{size:32},{default:f(()=>[s(p(ye),{theme:"filled"})]),_:1})]),_:1})]),o("div",ma,[s(a,{size:18},{default:f(()=>[s(p(be),{theme:"filled"})]),_:1}),b(" 私人FM ")])])])],4)}}});const ka=w(ha,[["__scopeId","data-v-05f8b259"]]);function ja(e=null){const t={type:null};return e&&(t.type=e),V({url:"/toplist/artist",method:"get",params:t})}function Ta(e){return V({url:"/album/new",method:"get",params:e})}const Q=e=>(I("data-v-2215e0f0"),e=e(),O(),e),$a={class:"home"},Aa={class:"index-row"},xa={class:"title"},wa={class:"index-row"},La=Q(()=>o("div",{class:"title"}," For You",-1)),Sa={class:"for-you-row"},Ia={class:"index-row"},Oa=Q(()=>o("div",{class:"title"},"推荐艺人",-1)),Ca={class:"index-row"},Ma={class:"title"},Pa={class:"index-row"},Fa={class:"title"},Ba=x({__name:"home",setup(e){const t=v({item:[]}),r=v([]),i=v(!1),n=v({items:[],indexs:[]}),d=v(),l=v({items:[],ids:[19723756,180106,60198,3812895,60131]});return de(()=>{setTimeout(()=>{i.value||F.start()},1e3),re(10).then(a=>{r.value=a.data.result,F.done(),i.value=!0}),ja().then(a=>{const _=a.data;let u=[];for(;u.length<6;){let L=~~(Math.random()*100);u.includes(L)||u.push(L)}n.value.indexs=u,n.value.items=_.list.artists.filter((L,Z)=>u.includes(Z))}),fe().then(a=>{const _=a.data;l.value.items=_.list.filter(u=>l.value.ids.includes(u.id))}),Ta({area:"ALL",limit:10}).then(a=>{t.value.item=a.data.albums})}),(a,_)=>{const u=h("router-link");return _e((y(),g("div",$a,[o("div",Aa,[o("div",xa,[b(" 推荐歌单 "),s(u,{to:"/explore?category=推荐歌单"},{default:f(()=>[b(" 查看更多 ")]),_:1})]),s(k,{type:"playlist",items:r.value,"sub-text":"copywriter"},null,8,["items"])]),o("div",wa,[La,o("div",Sa,[s(sa,{ref_key:"DailyTracksCardRef",ref:d},null,512),s(ka)])]),o("div",Ia,[Oa,s(k,{type:"artist",items:n.value.items,"column-number":6},null,8,["items"])]),o("div",Ca,[o("div",Ma,[b(" 新专速递 "),s(u,{to:"/new-album"},{default:f(()=>[b("查看更多")]),_:1})]),s(k,{type:"album",items:t.value.item,"sub-text":"artist"},null,8,["items"])]),o("div",Pa,[o("div",Fa,[b(" 排行榜 "),s(u,{to:"/explore?category=排行榜"},{default:f(()=>[b("查看更多")]),_:1})]),s(k,{type:"playlist",items:l.value.items,"sub-text":"updateFrequency"},null,8,["items"])])],512)),[[te,i.value]])}}});const Ga=w(Ba,[["__scopeId","data-v-2215e0f0"]]);export{Ga as default};

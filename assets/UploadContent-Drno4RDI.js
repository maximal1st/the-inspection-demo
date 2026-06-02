import{a as F,a$ as G,aH as s,a8 as i,ay as d,aR as v,a7 as c,a5 as y,ax as x,bw as I,bz as R,bF as N,az as A,a6 as m,bG as r,aa as E,ac as p,aZ as H,bp as Z,b2 as q,aN as b}from"./index-CRrGQ5qb.js";import{b as J,c as K,_ as L}from"./MediaList-BVMGsDus.js";import{c as k}from"./contentService-B6Xypm8U.js";var O=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,Q={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},W=F.extend({name:"card",style:O,classes:Q}),X={name:"BaseCard",extends:G,style:W,provide:function(){return{$pcCard:this,$parentInstance:this}}},z={name:"Card",extends:X,inheritAttrs:!1};function Y(e,w,f,n,g,l){return s(),i("div",d({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(s(),i("div",d({key:0,class:e.cx("header")},e.ptm("header")),[v(e.$slots,"header")],16)):c("",!0),y("div",d({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(s(),i("div",d({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(s(),i("div",d({key:0,class:e.cx("title")},e.ptm("title")),[v(e.$slots,"title")],16)):c("",!0),e.$slots.subtitle?(s(),i("div",d({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[v(e.$slots,"subtitle")],16)):c("",!0)],16)):c("",!0),y("div",d({class:e.cx("content")},e.ptm("content")),[v(e.$slots,"content")],16),e.$slots.footer?(s(),i("div",d({key:1,class:e.cx("footer")},e.ptm("footer")),[v(e.$slots,"footer")],16)):c("",!0)],16)],16)}z.render=Y;const P={class:"grid grid-cols-1 gap-4"},_=["src"],ee=["textContent"],te={key:1,class:"p-4 text-center"},oe={__name:"UploadContent",props:x({avatar:Boolean,disabled:Boolean,id:String,mode:String,title:String,type:String},{visible:{},visibleModifiers:{}}),emits:x(["count","reset"],["update:visible"]),setup(e,{emit:w}){const f=I(e,"visible"),n=e,g=w,l=b([]),C=b(0),$=b(),S=R("list"),B=b(!1);N(()=>l.value.length,o=>{$.value=!1,A(()=>{$.value=o})}),N(f,o=>{o?/\#camera_open/.test(n.mode)&&!n.disabled&&h(!0):/\#camera_open/.test(n.mode)&&!B.value&&!n.disabled&&g("reset",null)});const T=async()=>{for(;l.value.length;){const o=l.value.shift(),t=await k.upload(n,o,n.avatar);t&&(S.value.add(t),B.value=!0)}},h=async o=>{const t=await k.takePhoto(o);t&&l.value.unshift(t)},M=async()=>{const o=await k.pickFile();o&&l.value.unshift(o)};return(o,t)=>{const U=K,V=J,u=H,j=z,D=q;return s(),m(D,{class:"w-full",visible:f.value,"onUpdate:visible":t[6]||(t[6]=a=>f.value=a),header:`${o.$t(n.avatar?"avatar_for":"content_for")} ${n.title}`,"pt:header:class":"border-b mb-4","pt:title:class":"text-base",position:"right"},{default:r(()=>[y("div",P,[e.disabled?c("",!0):(s(),m(j,{key:0,class:"overflow-hidden relative border","pt:footer:class":"flex flex-wrap justify-end gap-4"},E({header:r(()=>[$.value?(s(),m(V,{key:0,contentClass:"text-center",value:l.value,circular:l.value.length>1,showNavigators:!1,"onUpdate:page":t[0]||(t[0]=a=>C.value=a)},{item:r(a=>[/^video/.test(a.data.mimeType)?(s(),i("video",{key:0,controls:"",src:a.data.webPath},null,8,_)):/^image/.test(a.data.mimeType)||a.data.format?(s(),m(U,{key:1,src:a.data.webPath,preview:""},null,8,["src"])):(s(),i("div",{key:2,class:"flex items-center justify-center h-full p-4",textContent:Z(a.data.name)},null,8,ee))]),_:1},8,["value","circular"])):(s(),i("div",te,[...t[7]||(t[7]=[y("i",{class:"fa fa-image text-gray-400 text-9xl"},null,-1)])]))]),subtitle:r(()=>[]),content:r(()=>[]),footer:r(()=>[p(u,{disabled:!l.value.length,icon:"fa fa-trash",severity:"secondary",outlined:"",rounded:"",onClick:t[1]||(t[1]=a=>l.value.splice(C.value,1))},null,8,["disabled"]),p(u,{icon:"fa fa-folder-open",severity:"secondary",outlined:"",rounded:"",onClick:M}),/\#camera/.test(n.mode)?c("",!0):(s(),m(u,{key:0,icon:"fa fa-image",severity:"secondary",outlined:"",rounded:"",onClick:t[2]||(t[2]=a=>h(!1))})),p(u,{icon:"fa fa-camera",_label:"$t('photo')",severity:"secondary",outlined:"",rounded:"",onClick:t[3]||(t[3]=a=>h(!0))}),p(u,{disabled:!l.value.length,icon:"fa fa-cloud-upload",_label:"$t('upload')",severity:"secondary",outlined:"",rounded:"",onClick:T},null,8,["disabled"])]),_:2},[l.value.length?{name:"title",fn:r(()=>[]),key:"0"}:void 0]),1024)),p(u,{class:"ms-auto",icon:"fa fa-times",label:o.$t("close"),severity:"secondary",outlined:"",rounded:"",onClick:t[4]||(t[4]=a=>f.value=!1)},null,8,["label"]),p(L,{ref_key:"list",ref:S,disabled:n.disabled,id:n.id,type:n.type,onCount:t[5]||(t[5]=a=>g("count",a))},null,8,["disabled","id","type"])])]),_:1},8,["visible","header"])}}};export{oe as _};

import{B as E,q as I,f as i,o as n,k as c,a as b,p as d,t as v,aR as x,aS as R,r as y,d as q,e as A,y as N,E as F,c as m,w as r,g as p,aL as G,l as L,a1 as H,a8 as J}from"./index-CKqtZ3Vr.js";import{b as K,c as O,_ as Q}from"./MediaList-CNIusqaN.js";import{c as k}from"./contentService-D3HnNxQe.js";var W=`
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
`,X={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Y=E.extend({name:"card",style:W,classes:X}),Z={name:"BaseCard",extends:I,style:Y,provide:function(){return{$pcCard:this,$parentInstance:this}}},T={name:"Card",extends:Z,inheritAttrs:!1};function P(e,w,f,s,g,l){return n(),i("div",d({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(n(),i("div",d({key:0,class:e.cx("header")},e.ptm("header")),[v(e.$slots,"header")],16)):c("",!0),b("div",d({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(n(),i("div",d({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(n(),i("div",d({key:0,class:e.cx("title")},e.ptm("title")),[v(e.$slots,"title")],16)):c("",!0),e.$slots.subtitle?(n(),i("div",d({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[v(e.$slots,"subtitle")],16)):c("",!0)],16)):c("",!0),b("div",d({class:e.cx("content")},e.ptm("content")),[v(e.$slots,"content")],16),e.$slots.footer?(n(),i("div",d({key:1,class:e.cx("footer")},e.ptm("footer")),[v(e.$slots,"footer")],16)):c("",!0)],16)],16)}T.render=P;const _={class:"grid grid-cols-1 gap-4"},ee=["src"],te=["textContent"],ae={key:1,class:"p-4 text-center"},le={__name:"UploadContent",props:x({avatar:Boolean,disabled:Boolean,id:String,mode:String,title:String,type:String},{visible:{},visibleModifiers:{}}),emits:x(["count","reset"],["update:visible"]),setup(e,{emit:w}){const f=R(e,"visible"),s=e,g=w,l=y([]),C=y(0),$=y(),S=q("list"),B=y(!1);A(()=>`${s.type}/${s.id}/content`),N(()=>l.value.length,o=>{$.value=!1,F(()=>{$.value=o})}),N(f,o=>{o?/\#camera_open/.test(s.mode)&&!s.disabled&&h(!0):/\#camera_open/.test(s.mode)&&!B.value&&!s.disabled&&g("reset",null)});const M=async()=>{for(;l.value.length;){const o=l.value.shift(),t=await k.upload(s,o,s.avatar);t&&(S.value.add(t),B.value=!0)}},h=async o=>{const t=await k.takePhoto(o);t&&l.value.unshift(t)},U=async()=>{const o=await k.pickFile();o&&l.value.unshift(o)};return(o,t)=>{const V=O,j=K,u=L,z=T,D=J;return n(),m(D,{class:"w-full",visible:f.value,"onUpdate:visible":t[6]||(t[6]=a=>f.value=a),header:`${o.$t(s.avatar?"avatar_for":"content_for")} ${s.title}`,"pt:header:class":"border-b mb-4","pt:title:class":"text-base",position:"right"},{default:r(()=>[b("div",_,[e.disabled?c("",!0):(n(),m(z,{key:0,class:"overflow-hidden relative border","pt:footer:class":"flex flex-wrap justify-end gap-4"},G({header:r(()=>[$.value?(n(),m(j,{key:0,contentClass:"text-center",value:l.value,circular:l.value.length>1,showNavigators:!1,"onUpdate:page":t[0]||(t[0]=a=>C.value=a)},{item:r(a=>[/^video/.test(a.data.mimeType)?(n(),i("video",{key:0,controls:"",src:a.data.webPath},null,8,ee)):/^image/.test(a.data.mimeType)||a.data.format?(n(),m(V,{key:1,src:a.data.webPath,preview:""},null,8,["src"])):(n(),i("div",{key:2,class:"flex items-center justify-center h-full p-4",textContent:H(a.data.name)},null,8,te))]),_:1},8,["value","circular"])):(n(),i("div",ae,[...t[7]||(t[7]=[b("i",{class:"fa fa-image text-gray-400 text-9xl"},null,-1)])]))]),subtitle:r(()=>[]),content:r(()=>[]),footer:r(()=>[p(u,{disabled:!l.value.length,icon:"fa fa-trash",severity:"secondary",outlined:"",rounded:"",onClick:t[1]||(t[1]=a=>l.value.splice(C.value,1))},null,8,["disabled"]),p(u,{icon:"fa fa-folder-open",severity:"secondary",outlined:"",rounded:"",onClick:U}),/\#camera/.test(s.mode)?c("",!0):(n(),m(u,{key:0,icon:"fa fa-image",severity:"secondary",outlined:"",rounded:"",onClick:t[2]||(t[2]=a=>h(!1))})),p(u,{icon:"fa fa-camera",_label:"$t('photo')",severity:"secondary",outlined:"",rounded:"",onClick:t[3]||(t[3]=a=>h(!0))}),p(u,{disabled:!l.value.length,icon:"fa fa-cloud-upload",_label:"$t('upload')",severity:"secondary",outlined:"",rounded:"",onClick:M},null,8,["disabled"])]),_:2},[l.value.length?{name:"title",fn:r(()=>[]),key:"0"}:void 0]),1024)),p(u,{class:"ms-auto",icon:"fa fa-times",label:o.$t("close"),severity:"secondary",outlined:"",rounded:"",onClick:t[4]||(t[4]=a=>f.value=!1)},null,8,["label"]),p(Q,{ref_key:"list",ref:S,disabled:s.disabled,id:s.id,type:s.type,onCount:t[5]||(t[5]=a=>g("count",a))},null,8,["disabled","id","type"])])]),_:1},8,["visible","header"])}}};export{le as _};

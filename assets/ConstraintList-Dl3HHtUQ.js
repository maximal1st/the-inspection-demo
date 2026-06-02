import{_ as Y}from"./NoData-9iC3lWYZ.js";import{s as Z}from"./index-BnL9V6Hc.js";import{a as J,aH as i,a8 as c,a5 as l,ay as x,aR as K,be as W,ag as X,bv as tt,aN as C,as as et,U as j,bF as nt,k as $,aQ as A,ac as B,a7 as b,a6 as P,by as at,aM as ot,a3 as I,bG as lt,bp as u,ab as st,b3 as it,bt as g,c as L,aA as S,R as dt,n as z,ad as D,bn as rt,ae as ct,a4 as gt}from"./index-CFDzJ-7g.js";import{s as ht}from"./index-BmnhjfLI.js";import{_ as ut}from"./DictSelect-C_hyTjcd.js";import{c as pt}from"./constraintService-DQl4PGXI.js";import"./index-Djk5pi4V.js";import"./index-fAMemWR_.js";var bt=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`,wt={root:{position:"relative"}},ft={root:function(a){var d=a.instance,p=a.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":d.checked,"p-disabled":p.disabled,"p-invalid":d.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},vt=J.extend({name:"toggleswitch",style:bt,classes:ft,inlineStyles:wt}),_t={name:"BaseToggleSwitch",extends:W,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:vt,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},R={name:"ToggleSwitch",extends:_t,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(a){var d=a==="root"?this.ptmi:this.ptm;return d(a,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(a){if(!this.disabled&&!this.readonly){var d=this.checked?this.falseValue:this.trueValue;this.writeValue(d,a),this.$emit("change",a)}},onFocus:function(a){this.$emit("focus",a)},onBlur:function(a){var d,p;this.$emit("blur",a),(d=(p=this.formField).onBlur)===null||d===void 0||d.call(p,a)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return X({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},kt=["data-p-checked","data-p-disabled","data-p"],mt=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"],yt=["data-p"],xt=["data-p"];function Ct(e,a,d,p,F,n){return i(),c("div",x({class:e.cx("root"),style:e.sx("root")},n.getPTOptions("root"),{"data-p-checked":n.checked,"data-p-disabled":e.disabled,"data-p":n.dataP}),[l("input",x({id:e.inputId,type:"checkbox",role:"switch",class:[e.cx("input"),e.inputClass],style:e.inputStyle,checked:n.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-checked":n.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:a[0]||(a[0]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)}),onBlur:a[1]||(a[1]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)}),onChange:a[2]||(a[2]=function(){return n.onChange&&n.onChange.apply(n,arguments)})},n.getPTOptions("input")),null,16,mt),l("div",x({class:e.cx("slider")},n.getPTOptions("slider"),{"data-p":n.dataP}),[l("div",x({class:e.cx("handle")},n.getPTOptions("handle"),{"data-p":n.dataP}),[K(e.$slots,"handle",{checked:n.checked})],16,xt)],16,yt)],16,kt)}R.render=Ct;const St={key:0,class:"constraints"},Tt={key:0,class:"flex gap-4 items-center justify-stretch py-4"},Vt=["textContent"],$t={class:"flex items-center gap-1"},Bt={class:"table table-fixed font-bold text-sm"},Pt={key:0},Ft={class:"bg-2",colspan:"2"},Nt={key:1},Ot={class:"!p-0",colspan:"2"},Et=["onClick"],Ut={class:"p-2"},jt={class:"flex flex-col gap-1"},At=["textContent"],It=["textContent"],Lt=["textContent"],zt={class:"flex gap-3 text-lg"},Dt={key:0,class:"fa fa-pen-to-square"},Rt={key:1,class:"fa fa-file-lines"},Gt={class:"p-2 text-right"},Mt={class:"flex flex-col gap-1"},qt=["textContent"],Ht=["textContent"],Qt=["textContent"],Yt={key:0,class:"fa fa-bolt text-lg text-teal-600"},ae={__name:"ConstraintList",props:{active:Boolean,indId:String,objCode:String},emits:["count"],setup(e,{expose:a,emit:d}){const{t:p}=tt(),F=at(),n=e,G=d,M=C([{label:()=>p("create"),icon:"fa fa-magic-wand",command:()=>F.push({name:"constraint_action",params:{action:"create"}}),disabled:et([j.INSPECTOR,j.GUEST])}]),T=C([]),f=C([]),v=C();n.active&&(v.value=!0);const h=ot({constraint_type:0,relevance:0,date_to:null}),_=I(()=>{var o;return(o=f.value)==null?void 0:o.filter(s=>{var m,y;for(name in h)if(h[name]&&s[name]&&(((m=s[name])==null?void 0:m.code)||((y=s[name])==null?void 0:y.replace(/T.+$/,"")))!=h[name])return!1;return!(v.value&&!s.is_active)})}),k=I(()=>f.value.filter(o=>(o==null?void 0:o.date_to)&&(!v.value||o.is_active)).map(o=>{const s=new Date(o.date_to+"Z");return s.id=o.id,s}).sort((o,s)=>s.getDate()-o.getDate())),N=async()=>{var o;f.value=await pt.getAll(n),G("count",(o=f.value)==null?void 0:o.length)};return nt([()=>n.objCode,()=>gt.locale],N,{immediate:!0}),a({load:N,menu:M}),(o,s)=>{var O;const m=ht,y=R,q=it,H=Z,Q=Y;return(O=f.value)!=null&&O.length?(i(),c("div",St,[n.active?b("",!0):(i(),c("div",Tt,[(i(!0),c($,null,A(Object.keys(h).filter(t=>t!="date_to"),t=>(i(),P(m,{variant:"on",class:"w-1/2"},{default:lt(()=>[B(ut,{modelValue:h[t],"onUpdate:modelValue":w=>h[t]=w,all:!0,name:t,size:"small"},null,8,["modelValue","onUpdate:modelValue","name"]),l("label",{textContent:u(o.$t(t.replace("constraint_","")))},null,8,Vt)]),_:2},1024))),256)),l("label",$t,[B(y,{modelValue:v.value,"onUpdate:modelValue":s[0]||(s[0]=t=>v.value=t),binary:"",title:o.$t("is_active")},null,8,["modelValue","title"]),s[1]||(s[1]=l("i",{class:"fa fa-bolt text-gray-600"},null,-1))])])),l("table",Bt,[l("tbody",null,[(i(!0),c($,null,A(_.value,(t,w)=>{var E,U;return i(),c($,null,[w==0||t.constraint_type.code!=_.value[w-1].constraint_type.code?(i(),c("tr",Pt,[l("td",Ft,[st(u(t.constraint_type.name)+" ",1),B(q,{class:"ms-2",value:_.value.filter(r=>r.constraint_type.code==_.value[w].constraint_type.code).length,severity:"secondary",size:"small"},null,8,["value"])])])):b("",!0),w==0&&t.constraint_type.code==g(L).DATE?(i(),c("tr",Nt,[l("td",Ot,[(E=k.value)!=null&&E.length?(i(),P(H,{key:0,modelValue:T.value,defaultValue:k.value,inline:"",panelClass:"border-y-0 rounded-none",selectionMode:"multiple",fluid:"","onUpdate:modelValue":r=>{r=r.map(V=>V.getTime()),r=k.value.find(V=>!r.includes(V.getTime())),r&&(r=r.toISOString().replace(/T.+$/,""),h.date_to=h.date_to==r?null:r),T.value=[],o.$nextTick(()=>T.value=k.value)}},null,8,["modelValue","defaultValue","onUpdate:modelValue"])):b("",!0)])])):b("",!0),l("tr",{class:S(["align-text-top cursor-pointer text-gray-400",{archived:t.is_archived||t.relevance.code!=g(dt).ACTUAL}]),onClick:r=>o.$router.push({name:"constraint",params:{id:t.id}})},[l("td",Ut,[l("div",jt,[l("div",{class:S(`text-${g(z)}`),textContent:u(t.name)},null,10,At),l("div",{class:"text-sky-600",textContent:u(t.object.name)},null,8,It),l("div",{class:"text-blue-600",textContent:u(t.todo_description)},null,8,Lt),l("div",zt,[t.template?(i(),c("i",Dt)):b("",!0),t.report?(i(),c("i",Rt)):b("",!0)])])]),l("td",Gt,[l("div",Mt,[l("div",{class:S(`text-${g(z)}`),textContent:u((t.value_from||t.date_from?(t.value_from?o.$n(t.value_from):g(D)(t.date_from,!1))+"–":"")+(t.value_to?o.$n(t.value_to):g(D)(t.date_to,!1)))},null,10,qt),l("div",{class:S(`text-${g(rt)(t.object_status_after.code)}`),textContent:u(t.object_status_after.name)},null,10,Ht),l("div",{textContent:u(t.constraint_type.code==g(L).DATE?g(ct)(t.remind_before):(U=t.remind_before)==null?void 0:U.replace(/;/g,"; "))},null,8,Qt),t.is_active?(i(),c("i",Yt)):b("",!0)])])],10,Et)],64)}),256))])])])):(i(),P(Q,{key:1}))}}};export{ae as default};

import{_ as Y}from"./NoData-BdKb6lSZ.js";import{s as H}from"./index-BruGn-dP.js";import{B as J,f as c,o as i,a as l,p as x,t as K,aZ as Q,aC as X,v as tt,r as C,a3 as et,i as nt,a4 as I,aW as ot,e as L,y as at,c as B,k as b,F as $,C as U,g as P,w as lt,a1 as u,ao as st,ab as it,u as g,aq as A,a0 as S,aM as dt,ad as z,aP as D,ae as rt,ar as ct,b as gt}from"./index-mYP2TR4O.js";import{s as ht}from"./index-CqW586Qg.js";import{_ as ut}from"./DictSelect-CSZIuVg3.js";import{c as pt}from"./constraintService-Bt7wDIV5.js";import"./index-Dq-dYClP.js";import"./index-BGJoY-yo.js";var bt=`
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
`,wt={root:{position:"relative"}},ft={root:function(o){var d=o.instance,p=o.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":d.checked,"p-disabled":p.disabled,"p-invalid":d.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},vt=J.extend({name:"toggleswitch",style:bt,classes:ft,inlineStyles:wt}),_t={name:"BaseToggleSwitch",extends:Q,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:vt,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},R={name:"ToggleSwitch",extends:_t,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(o){var d=o==="root"?this.ptmi:this.ptm;return d(o,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(o){if(!this.disabled&&!this.readonly){var d=this.checked?this.falseValue:this.trueValue;this.writeValue(d,o),this.$emit("change",o)}},onFocus:function(o){this.$emit("focus",o)},onBlur:function(o){var d,p;this.$emit("blur",o),(d=(p=this.formField).onBlur)===null||d===void 0||d.call(p,o)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return X({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},kt=["data-p-checked","data-p-disabled","data-p"],mt=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"],yt=["data-p"],xt=["data-p"];function Ct(e,o,d,p,F,n){return i(),c("div",x({class:e.cx("root"),style:e.sx("root")},n.getPTOptions("root"),{"data-p-checked":n.checked,"data-p-disabled":e.disabled,"data-p":n.dataP}),[l("input",x({id:e.inputId,type:"checkbox",role:"switch",class:[e.cx("input"),e.inputClass],style:e.inputStyle,checked:n.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-checked":n.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:o[0]||(o[0]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)}),onBlur:o[1]||(o[1]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)}),onChange:o[2]||(o[2]=function(){return n.onChange&&n.onChange.apply(n,arguments)})},n.getPTOptions("input")),null,16,mt),l("div",x({class:e.cx("slider")},n.getPTOptions("slider"),{"data-p":n.dataP}),[l("div",x({class:e.cx("handle")},n.getPTOptions("handle"),{"data-p":n.dataP}),[K(e.$slots,"handle",{checked:n.checked})],16,xt)],16,yt)],16,kt)}R.render=Ct;const St={key:0,class:"constraints"},Tt={key:0,class:"flex gap-4 items-center justify-stretch py-4"},Vt=["textContent"],Bt={class:"flex items-center gap-1"},$t={class:"table table-fixed font-bold text-sm"},Pt={key:0},Ft={class:"bg-2",colspan:"2"},Ot={key:1},Et={class:"!p-0",colspan:"2"},Nt=["onClick"],jt={class:"p-2"},It={class:"flex flex-col gap-1"},Lt=["textContent"],Ut=["textContent"],At=["textContent"],zt={class:"flex gap-3 text-lg"},Dt={key:0,class:"fa fa-pen-to-square"},Rt={key:1,class:"fa fa-file-lines"},qt={class:"p-2 text-right"},Mt={class:"flex flex-col gap-1"},Zt=["textContent"],Gt=["textContent"],Wt=["textContent"],Yt={key:0,class:"fa fa-bolt text-lg text-teal-600"},oe={__name:"ConstraintList",props:{active:Boolean,indId:String,objCode:String},emits:["count"],setup(e,{expose:o,emit:d}){const{t:p}=tt(),F=nt(),n=e,q=d,M=C([{label:()=>p("create"),icon:"fa fa-magic-wand",command:()=>F.push({name:"constraint_action",params:{action:"create"}}),disabled:et([I.INSPECTOR,I.GUEST])}]),T=C([]),f=C([]),v=C();n.active&&(v.value=!0);const h=ot({constraint_type:0,relevance:0,date_to:null}),_=L(()=>{var a;return(a=f.value)==null?void 0:a.filter(s=>{var m,y;for(name in h)if(h[name]&&s[name]&&(((m=s[name])==null?void 0:m.code)||((y=s[name])==null?void 0:y.replace(/T.+$/,"")))!=h[name])return!1;return!(v.value&&!s.is_active)})}),k=L(()=>f.value.filter(a=>(a==null?void 0:a.date_to)&&(!v.value||a.is_active)).map(a=>{const s=new Date(a.date_to+"Z");return s.id=a.id,s}).sort((a,s)=>s.getDate()-a.getDate())),O=async()=>{var a;f.value=await pt.getAll(n),q("count",(a=f.value)==null?void 0:a.length)};return at([()=>n.objCode,()=>gt.locale],O,{immediate:!0}),o({load:O,menu:M}),(a,s)=>{var E;const m=ht,y=R,Z=it,G=H,W=Y;return(E=f.value)!=null&&E.length?(i(),c("div",St,[n.active?b("",!0):(i(),c("div",Tt,[(i(!0),c($,null,U(Object.keys(h).filter(t=>t!="date_to"),t=>(i(),B(m,{variant:"on",class:"w-1/2"},{default:lt(()=>[P(ut,{modelValue:h[t],"onUpdate:modelValue":w=>h[t]=w,all:!0,name:t,size:"small"},null,8,["modelValue","onUpdate:modelValue","name"]),l("label",{textContent:u(a.$t(t.replace("constraint_","")))},null,8,Vt)]),_:2},1024))),256)),l("label",Bt,[P(y,{modelValue:v.value,"onUpdate:modelValue":s[0]||(s[0]=t=>v.value=t),binary:"",title:a.$t("is_active")},null,8,["modelValue","title"]),s[1]||(s[1]=l("i",{class:"fa fa-bolt text-gray-600"},null,-1))])])),l("table",$t,[l("tbody",null,[(i(!0),c($,null,U(_.value,(t,w)=>{var N,j;return i(),c($,null,[w==0||t.constraint_type.code!=_.value[w-1].constraint_type.code?(i(),c("tr",Pt,[l("td",Ft,[st(u(t.constraint_type.name)+" ",1),P(Z,{class:"ms-2",value:_.value.filter(r=>r.constraint_type.code==_.value[w].constraint_type.code).length,severity:"secondary",size:"small"},null,8,["value"])])])):b("",!0),w==0&&t.constraint_type.code==g(A).DATE?(i(),c("tr",Ot,[l("td",Et,[(N=k.value)!=null&&N.length?(i(),B(G,{key:0,modelValue:T.value,defaultValue:k.value,inline:"",panelClass:"border-y-0 rounded-none",selectionMode:"multiple",fluid:"","onUpdate:modelValue":r=>{r=r.map(V=>V.getTime()),r=k.value.find(V=>!r.includes(V.getTime())),r&&(r=r.toISOString().replace(/T.+$/,""),h.date_to=h.date_to==r?null:r),T.value=[],a.$nextTick(()=>T.value=k.value)}},null,8,["modelValue","defaultValue","onUpdate:modelValue"])):b("",!0)])])):b("",!0),l("tr",{class:S(["align-text-top cursor-pointer text-gray-400",{archived:t.is_archived||t.relevance.code!=g(dt).ACTUAL}]),onClick:r=>a.$router.push({name:"constraint",params:{id:t.id}})},[l("td",jt,[l("div",It,[l("div",{class:S(`text-${g(z)}`),textContent:u(t.name)},null,10,Lt),l("div",{class:"text-sky-600",textContent:u(t.object.name)},null,8,Ut),l("div",{class:"text-blue-600",textContent:u(t.todo_description)},null,8,At),l("div",zt,[t.template?(i(),c("i",Dt)):b("",!0),t.report?(i(),c("i",Rt)):b("",!0)])])]),l("td",qt,[l("div",Mt,[l("div",{class:S(`text-${g(z)}`),textContent:u((t.value_from||t.date_from?(t.value_from?a.$n(t.value_from):g(D)(t.date_from,!1))+"–":"")+(t.value_to?a.$n(t.value_to):g(D)(t.date_to,!1)))},null,10,Zt),l("div",{class:S(`text-${g(rt)(t.object_status_after.code)}`),textContent:u(t.object_status_after.name)},null,10,Gt),l("div",{textContent:u(t.constraint_type.code==g(A).DATE?g(ct)(t.remind_before):(j=t.remind_before)==null?void 0:j.replace(/;/g,"; "))},null,8,Wt),t.is_active?(i(),c("i",Yt)):b("",!0)])])],10,Nt)],64)}),256))])])])):(i(),B(W,{key:1}))}}};export{oe as default};

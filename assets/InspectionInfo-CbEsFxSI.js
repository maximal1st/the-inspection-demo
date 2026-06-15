import{bw as G,bF as q,aH as o,a6 as D,bG as I,a5 as c,bp as x,ac as _,aX as he,a8 as p,k as N,aQ as j,aZ as ie,ax as te,a3 as oe,aN as E,a as $e,bd as Ce,ag as we,ay as le,b2 as Ve,at as Ne,aA as K,aD as me,az as Re,bv as ce,bt as n,aj as De,aJ as Be,b as m,bo as ue,d as fe,ai as _e,a7 as M,bn as z,t as g,aT as Pe,bJ as ee,n as ye,bH as ve,a_ as ze,ad as ge,aY as Ue,bA as Le,bm as Ie,as as ne,U as X,bu as Me,by as je,aS as Fe,ab as be,bD as Ae,aU as He,z as qe,ak as xe,a4 as Ke}from"./index-Dq3S2xTf.js";import{s as Ge,a as Ye,b as Xe,c as Ze,d as Je}from"./index-atlLrB6O.js";import{s as Ee}from"./index-CDMJNqGZ.js";import{i as F}from"./inspectionService-DcqeawJs.js";import{s as We}from"./index-Dv9NAzr8.js";import{s as Qe,_ as et}from"./MediaList-BTzgnA0A.js";import{s as tt}from"./index-D4gBNHPZ.js";import{s as at}from"./index-d-R_Ajhl.js";import{s as nt}from"./index-BnXoREQN.js";import{s as lt}from"./index-CbWegTSJ.js";import{_ as ot}from"./UploadContent-wd3fQlW3.js";import{_ as it}from"./ReportList-Ukyhrzv-.js";import"./index-SsP84v7S.js";import"./index-BGL-pTBg.js";import"./index-DSpH_FfS.js";import"./index-C3ihauqw.js";import"./useZoomPan-b4rk_FhQ.js";import"./contentService-iro2kdrT.js";const st=["textContent"],ut={class:"border rounded-md px-4 pt-6 pb-2"},dt=["textContent"],rt={class:"flex flex-wrap gap-4"},ct={__name:"PredefinedText",props:{visible:{},visibleModifiers:{}},emits:te(["input"],["update:visible"]),setup(t,{emit:a}){G(t,"visible");const e=a,r=E([]),b=E(),d=oe(()=>[...new Set(r.value.map(k=>k.field_of_activity))]),h=oe(()=>[...new Set(r.value.filter(k=>k.field_of_activity==b.value).map(k=>k.content_type))]);return(async()=>{r.value=await F.getHints()})(),q(d,k=>b.value=k==null?void 0:k[0]),(k,u)=>{const y=he,f=Ee,w=Xe,P=Ye,O=ie,R=Je,v=Ze,l=Ge;return o(),D(f,{variant:"on"},{default:I(()=>[c("label",{textContent:x(k.$t("predefined_text"))},null,8,st),c("div",ut,[_(f,{variant:"on"},{default:I(()=>[_(y,{modelValue:b.value,"onUpdate:modelValue":u[0]||(u[0]=B=>b.value=B),options:d.value},null,8,["modelValue","options"]),c("label",{textContent:x(k.$t("field_of_activity"))},null,8,dt)]),_:1}),_(l,{value:0,scrollable:""},{default:I(()=>[_(P,null,{default:I(()=>[(o(!0),p(N,null,j(h.value,(B,S)=>(o(),D(w,{value:S,textContent:x(B)},null,8,["value","textContent"]))),256))]),_:1}),_(v,null,{default:I(()=>[(o(!0),p(N,null,j(h.value,(B,S)=>(o(),D(R,{value:S},{default:I(()=>[c("div",rt,[(o(!0),p(N,null,j(r.value.filter(U=>U.field_of_activity==b.value&&U.content_type==B),U=>(o(),D(O,{class:"text-xs",label:U.content_value,severity:"contrast",outlined:"",onClick:$=>e("input",U.content_value)},null,8,["label","onClick"]))),256))])]),_:2},1032,["value"]))),256))]),_:1})]),_:1})])]),_:1})}}};var pt=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`,vt={root:function(a){var e=a.instance,r=a.props;return["p-textarea p-component",{"p-filled":e.$filled,"p-textarea-resizable ":r.autoResize,"p-textarea-sm p-inputfield-sm":r.size==="small","p-textarea-lg p-inputfield-lg":r.size==="large","p-invalid":e.$invalid,"p-variant-filled":e.$variant==="filled","p-textarea-fluid":e.$fluid}]}},bt=$e.extend({name:"textarea",style:pt,classes:vt}),mt={name:"BaseTextarea",extends:Ce,props:{autoResize:Boolean},style:bt,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function de(t){"@babel/helpers - typeof";return de=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},de(t)}function ft(t,a,e){return(a=_t(a))in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function _t(t){var a=yt(t,"string");return de(a)=="symbol"?a:a+""}function yt(t,a){if(de(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var r=e.call(t,a);if(de(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}var Te={name:"Textarea",extends:mt,inheritAttrs:!1,observer:null,mounted:function(){var a=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){a.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){if(this.$el.offsetParent){var a=this.$el.style.height,e=parseInt(a)||0,r=this.$el.scrollHeight,b=!e||r>e,d=e&&r<e;d?(this.$el.style.height="auto",this.$el.style.height="".concat(this.$el.scrollHeight,"px")):b&&(this.$el.style.height="".concat(r,"px"))}},onInput:function(a){this.autoResize&&this.resize(),this.writeValue(a.target.value,a)}},computed:{attrs:function(){return le(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return we(ft({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},ht=["value","name","disabled","aria-invalid","data-p"];function gt(t,a,e,r,b,d){return o(),p("textarea",le({class:t.cx("root"),value:t.d_value,name:t.name,disabled:t.disabled,"aria-invalid":t.invalid||void 0,"data-p":d.dataP,onInput:a[0]||(a[0]=function(){return d.onInput&&d.onInput.apply(d,arguments)})},d.attrs),null,16,ht)}Te.render=gt;const xt=["textContent"],Oe={__name:"EditComment",props:te({name:String},{visible:{},visibleModifiers:{},modelValue:{},modelModifiers:{}}),emits:["update:visible","update:modelValue"],setup(t){const a=G(t,"visible"),e=t,r=G(t,"modelValue"),b=E();return q(a,()=>b.value=r.value),(d,h)=>{const s=Te,k=Ee,u=ct,y=ie,f=Ve;return o(),D(f,{class:"w-full","pt:content:class":"flex flex-col gap-4","pt:footer:class":"flex justify-end gap-4","pt:title:class":"text-base",visible:a.value,"onUpdate:visible":h[4]||(h[4]=w=>a.value=w),header:`${d.$t("add_comments_for")} ${e.name}`,modal:""},{footer:I(()=>[_(y,{label:d.$t("cancel"),icon:"fa fa-times",outlined:"",severity:"secondary",onClick:h[2]||(h[2]=w=>{b.value="",a.value=!1})},null,8,["label"]),_(y,{label:d.$t("add"),icon:"fa fa-check",outlined:"",severity:"secondary",onClick:h[3]||(h[3]=w=>{r.value=b.value,a.value=!1})},null,8,["label"])]),default:I(()=>[_(k,{class:"mt-2",variant:"on"},{default:I(()=>[_(s,{class:"w-full",modelValue:b.value,"onUpdate:modelValue":h[0]||(h[0]=w=>b.value=w),rows:"5",cols:"30",autofocus:""},null,8,["modelValue"]),c("label",{textContent:x(d.$t("comment"))},null,8,xt)]),_:1}),_(u,{onInput:h[1]||(h[1]=w=>b.value=b.value?b.value+" "+w:w)})]),_:1},8,["visible","header"])}}};var kt=`
    .p-radiobutton {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
    }

    .p-radiobutton-input {
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
        border: 1px solid transparent;
        border-radius: 50%;
    }

    .p-radiobutton-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid dt('radiobutton.border.color');
        background: dt('radiobutton.background');
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
        transition:
            background dt('radiobutton.transition.duration'),
            color dt('radiobutton.transition.duration'),
            border-color dt('radiobutton.transition.duration'),
            box-shadow dt('radiobutton.transition.duration'),
            outline-color dt('radiobutton.transition.duration');
        outline-color: transparent;
        box-shadow: dt('radiobutton.shadow');
    }

    .p-radiobutton-icon {
        transition-duration: dt('radiobutton.transition.duration');
        background: transparent;
        font-size: dt('radiobutton.icon.size');
        width: dt('radiobutton.icon.size');
        height: dt('radiobutton.icon.size');
        border-radius: 50%;
        backface-visibility: hidden;
        transform: translateZ(0) scale(0.1);
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        border-color: dt('radiobutton.hover.border.color');
    }

    .p-radiobutton-checked .p-radiobutton-box {
        border-color: dt('radiobutton.checked.border.color');
        background: dt('radiobutton.checked.background');
    }

    .p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.checked.color');
        transform: translateZ(0) scale(1, 1);
        visibility: visible;
    }

    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        border-color: dt('radiobutton.checked.hover.border.color');
        background: dt('radiobutton.checked.hover.background');
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.checked.hover.color');
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.focus.border.color');
        box-shadow: dt('radiobutton.focus.ring.shadow');
        outline: dt('radiobutton.focus.ring.width') dt('radiobutton.focus.ring.style') dt('radiobutton.focus.ring.color');
        outline-offset: dt('radiobutton.focus.ring.offset');
    }

    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.checked.focus.border.color');
    }

    .p-radiobutton.p-invalid > .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }

    .p-radiobutton.p-variant-filled .p-radiobutton-box {
        background: dt('radiobutton.filled.background');
    }

    .p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
        background: dt('radiobutton.checked.background');
    }

    .p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
        background: dt('radiobutton.checked.hover.background');
    }

    .p-radiobutton.p-disabled {
        opacity: 1;
    }

    .p-radiobutton.p-disabled .p-radiobutton-box {
        background: dt('radiobutton.disabled.background');
        border-color: dt('radiobutton.checked.disabled.border.color');
    }

    .p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.disabled.color');
    }

    .p-radiobutton-sm,
    .p-radiobutton-sm .p-radiobutton-box {
        width: dt('radiobutton.sm.width');
        height: dt('radiobutton.sm.height');
    }

    .p-radiobutton-sm .p-radiobutton-icon {
        font-size: dt('radiobutton.icon.sm.size');
        width: dt('radiobutton.icon.sm.size');
        height: dt('radiobutton.icon.sm.size');
    }

    .p-radiobutton-lg,
    .p-radiobutton-lg .p-radiobutton-box {
        width: dt('radiobutton.lg.width');
        height: dt('radiobutton.lg.height');
    }

    .p-radiobutton-lg .p-radiobutton-icon {
        font-size: dt('radiobutton.icon.lg.size');
        width: dt('radiobutton.icon.lg.size');
        height: dt('radiobutton.icon.lg.size');
    }
`,$t={root:function(a){var e=a.instance,r=a.props;return["p-radiobutton p-component",{"p-radiobutton-checked":e.checked,"p-disabled":r.disabled,"p-invalid":e.$pcRadioButtonGroup?e.$pcRadioButtonGroup.$invalid:e.$invalid,"p-variant-filled":e.$variant==="filled","p-radiobutton-sm p-inputfield-sm":r.size==="small","p-radiobutton-lg p-inputfield-lg":r.size==="large"}]},box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},Ct=$e.extend({name:"radiobutton",style:kt,classes:$t}),wt={name:"BaseRadioButton",extends:Ce,props:{value:null,binary:Boolean,readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ct,provide:function(){return{$pcRadioButton:this,$parentInstance:this}}};function re(t){"@babel/helpers - typeof";return re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},re(t)}function Vt(t,a,e){return(a=It(a))in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function It(t){var a=Et(t,"string");return re(a)=="symbol"?a:a+""}function Et(t,a){if(re(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var r=e.call(t,a);if(re(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}var Se={name:"RadioButton",extends:wt,inheritAttrs:!1,emits:["change","focus","blur"],inject:{$pcRadioButtonGroup:{default:void 0}},methods:{getPTOptions:function(a){var e=a==="root"?this.ptmi:this.ptm;return e(a,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(a){if(!this.disabled&&!this.readonly){var e=this.binary?!this.checked:this.value;this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.writeValue(e,a):this.writeValue(e,a),this.$emit("change",a)}},onFocus:function(a){this.$emit("focus",a)},onBlur:function(a){var e,r;this.$emit("blur",a),(e=(r=this.formField).onBlur)===null||e===void 0||e.call(r,a)}},computed:{groupName:function(){return this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.groupName:this.$formName},checked:function(){var a=this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.d_value:this.d_value;return a!=null&&(this.binary?!!a:Ne(a,this.value))},dataP:function(){return we(Vt({invalid:this.$invalid,checked:this.checked,disabled:this.disabled,filled:this.$variant==="filled"},this.size,this.size))}}},Tt=["data-p-checked","data-p-disabled","data-p"],Ot=["id","value","name","checked","tabindex","disabled","readonly","aria-labelledby","aria-label","aria-invalid"],St=["data-p"],Nt=["data-p"];function Rt(t,a,e,r,b,d){return o(),p("div",le({class:t.cx("root")},d.getPTOptions("root"),{"data-p-checked":d.checked,"data-p-disabled":t.disabled,"data-p":d.dataP}),[c("input",le({id:t.inputId,type:"radio",class:[t.cx("input"),t.inputClass],style:t.inputStyle,value:t.value,name:d.groupName,checked:d.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,onFocus:a[0]||(a[0]=function(){return d.onFocus&&d.onFocus.apply(d,arguments)}),onBlur:a[1]||(a[1]=function(){return d.onBlur&&d.onBlur.apply(d,arguments)}),onChange:a[2]||(a[2]=function(){return d.onChange&&d.onChange.apply(d,arguments)})},d.getPTOptions("input")),null,16,Ot),c("div",le({class:t.cx("box")},d.getPTOptions("box"),{"data-p":d.dataP}),[c("div",le({class:t.cx("icon")},d.getPTOptions("icon"),{"data-p":d.dataP}),null,16,Nt)],16,St)],16,Tt)}Se.render=Rt;const Dt=["disabled","value"],ke={__name:"InputNumber",props:te({disabled:Boolean,fluid:Boolean,invalid:Boolean,options:Object},{modelValue:{},modelModifiers:{}}),emits:te(["update:modelValue"],["update:modelValue"]),setup(t,{emit:a}){const e=G(t,"modelValue"),r=t,b=E(""),d=oe(()=>me(.1).replace(/\d/g,"")),h=u=>typeof u=="number"?u:u?(u=u.replace(new RegExp("[^\\-\\d\\"+d.value+"]","g"),"").replace(",","."),parseFloat(u)):0,s=u=>u?me(h(u))+(/[\.\,]$/.test(u)?d.value:""):"",k=u=>{const y=s(u.target.value);b.value="",Re(()=>b.value=y)};return q(e,u=>b.value=s(u),{immediate:!0}),(u,y)=>(o(),p("input",{class:K(["p-inputtext p-component",{"p-inputtext-fluid":r.fluid,"p-invalid":r.invalid}]),"data-type":"number",disabled:t.disabled,type:"text",value:b.value,onInput:k,onChange:y[0]||(y[0]=f=>u.$emit("update:modelValue",h(b.value)))},null,42,Dt))}},Bt={class:"info border-t"},Pt={key:0},zt=["innerHTML"],Ut=["textContent"],Lt=["textContent"],Mt=["textContent"],jt=["textContent"],Ft=["textContent"],At=["textContent"],Ht=["textContent"],qt=["textContent"],Kt={class:"flex justify-end pt-6"},Gt={__name:"ItemInfo",props:{modelValue:{},modelModifiers:{},visible:{},visibleModifiers:{}},emits:["update:modelValue","update:visible"],setup(t){const{t:a}=ce({useScope:"global"}),e=G(t,"modelValue"),r=G(t,"visible"),b=["name","description","type_check.name","result_value","item_list_values","type_interpretation_val","valid_range","quality_interpretation_val","quality_range","indicator_sub_code","indicator_last_value (indicator_last_value_date)","updated_by.full_name","updated_at"];return(d,h)=>{const s=ie,k=Ve;return o(),D(k,{class:"w-full",visible:r.value,"onUpdate:visible":h[1]||(h[1]=u=>r.value=u),position:"left"},{default:I(()=>[c("table",Bt,[c("tbody",null,[(o(),p(N,null,j(b,u=>{var y;return o(),p(N,null,[n(De)(e.value,u.replace(/\s.+$/,""))!==null?(o(),p("tr",Pt,[c("td",{class:"overflow-hidden text-ellipsis",innerHTML:n(a)(n(Be)(u).replace(/^(indicator|result)_/,""))},null,8,zt),/^r/.test(u)?(o(),p(N,{key:0},[e.value.type_check.code==n(m).CHECK_3||e.value.type_check.code==n(m).CHECK_5?(o(),p("td",{key:0,textContent:x(d.$t(n(ue)(e.value[u])))},null,8,Ut)):e.value.type_check.code==n(m).YES_NO||e.value.type_check.code==n(m).CONFIRM?(o(),p("td",{key:1,textContent:x(d.$t(e.value[u]?"yes":"no"))},null,8,Lt)):e.value.type_check.code==n(m).ON_OFF?(o(),p("td",{key:2,textContent:x(d.$t(e.value[u]?"on":"off"))},null,8,Mt)):e.value.type_check.code==n(m).DATE?(o(),p("td",{key:3,textContent:x(new Date(e.value[u]).toLocaleString().replace(",","").replace(/:\d+$/,""))},null,8,jt)):e.value.type_check.code==n(m).PERIOD?(o(),p("td",{key:4,textContent:x(Object.values(e.value[u]).map(f=>new Date(f).toLocaleString().replace(/[, ].+$/,"")).join(" - "))},null,8,Ft)):e.value.type_check.code==n(m).MONEY?(o(),p("td",{key:5,textContent:x(n(me)(e.value[u].value)+" "+(((y=n(fe))==null?void 0:y[e.value[u].name])||""))},null,8,At)):(o(),p("td",{key:6,textContent:x(n(_e)(e.value,u))},null,8,Ht))],64)):(o(),p("td",{key:1,textContent:x(n(_e)(e.value,u))},null,8,qt))])):M("",!0)],64)}),64))])]),c("div",Kt,[_(s,{label:n(a)("close"),icon:"fa fa-times",severity:"secondary",outlined:"",onClick:h[0]||(h[0]=u=>r.value=!1)},null,8,["label"])])]),_:1},8,["visible"])}}},Yt={__name:"ValidityMenu",props:{modelValue:{},modelModifiers:{},menu:{},menuModifiers:{}},emits:["update:modelValue","update:menu"],setup(t){const{t:a}=ce({useScope:"global"}),e=G(t,"modelValue"),r=G(t,"menu"),b=E([{label:()=>a("ok"),icon:`fa fa-check-circle text-${z(g.V_OK)}`},{label:()=>a("undefined"),icon:`fa fa-question-circle text-${z(g.V_UNDEFINED)}`,command:()=>{d(g.V_UNDEFINED)}},{label:()=>a("not_correct"),icon:`fa fa-times-circle text-${z(g.V_NOT_CORRECT)}`,command:()=>{d(g.V_NOT_CORRECT)}},{label:()=>a("not_rated"),icon:`fa fa-minus-circle text-${z(g.V_NOT_RATED)}`,command:()=>{d(g.V_NOT_RATED)}}]),d=h=>{e.value.validation_status={code:h}};return(h,s)=>{const k=lt;return o(),D(k,{ref_key:"menu",ref:r,model:b.value,popup:""},null,8,["model"])}}},Xt={class:"leading-none border-b text-center text-slate-500 dark:text-zinc-200"},Zt={class:"flex items-center justify-stretch bg-gray-300 dark:bg-zinc-700"},Jt=["textContent"],Wt={class:"w-10 grow-0 shrink-0"},Qt={class:"flex items-center justify-stretch bg-white dark:bg-zinc-800"},ea={class:"w-8 grow-0 shrink-0"},ta={class:"p-4 grow"},aa={key:0,class:"flex flex-row-reverse justify-center gap-6"},na={key:1,class:"w-full flex justify-center"},la={key:5,class:"flex items-center justify-between gap-2 text-left"},oa=["for","textContent"],ia={key:6,class:"flex items-center justify-between gap-2 text-left"},sa=["for","textContent"],ua={class:"w-10 grow-0 shrink-0"},da={class:"w-10 grow-0 shrink-0 flex justify-center"},ra={class:"flex items-center justify-between gap-4 p-2 bg-gray-100 dark:bg-zinc-700 text-sm"},ca={key:0,class:"grow text-left"},pa={key:0,class:"fa fa-pen-to-square me-1"},va=["innerHTML"],ba=["textContent"],ma={class:"flex flex-nowrap"},fa=["textContent"],_a={__name:"InspectionItem",props:te({disabled:Boolean,id:Array},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const{t:a}=ce(),e=G(t,"modelValue"),r=t,b=oe(()=>[...r.id,e.value.id]),d={[m.CHECK_3]:[g.CRITICAL,g.ATTENTION,g.OK],[m.CHECK_5]:[g.DISREPAIR,g.BADLY,g.PASSABLY,g.GOOD,g.EXCELLENT]},h={[g.V_OK]:a("ok"),[g.V_UNDEFINED]:a("undefined"),[g.V_NOT_CORRECT]:a("not_correct"),[g.V_NOT_RATED]:a("not_rated")},s=E(),k=E(),u=E(),y=E(),f=E(!0),w=E();let P=!1;const O=()=>{/\#camera_open/.test(e.value.ext_code)&&(w.value=!0)},R=()=>{var v,l,B,S;switch(parseInt(e.value.type_check.code)){case m.DATE:s.value=e.value.result_value?new Date(e.value.result_value):new Date;break;case m.PERIOD:s.value=e.value.result_value?[new Date((v=e.value.result_value)==null?void 0:v.date_from),new Date((l=e.value.result_value)==null?void 0:l.date_to)]:e.value.result_value;break;case m.MONEY:s.value={value:((B=e.value.result_value)==null?void 0:B.value)||null,name:((S=e.value.result_value)==null?void 0:S.name)||F.getCurrency()};break}};return q(e,R,{immediate:!0}),q(s,v=>{if(v!==null)switch(parseInt(e.value.type_check.code)){case m.DATE:e.value.result_value=v;break;case m.PERIOD:v!=null&&v[0]&&(v!=null&&v[1])&&(e.value.result_value={date_from:v[0],date_to:v[1]});break;case m.MONEY:v.value!==null&&(e.value.result_value=v);break}},{deep:!0}),q(()=>e.value.result_value,async v=>{var l,B,S;if(v===null)e.value.result_value_timestamp=null,e.value.result_comment=null,e.value.result_status={code:0},e.value.validation_status=null,R();else{switch(parseInt(e.value.type_check.code)){case m.CHECK_3:e.value.result_status={code:v},e.value.result_comment=v<g.OK?a(ue(v)):null;break;case m.CHECK_5:e.value.result_status={code:parseInt(v.toString().split("").toSpliced(-1,1,"0").join(""))},e.value.result_comment=v<g.OK?a(ue(v)):null;break;case m.YES_NO:case m.ON_OFF:case m.CONFIRM:e.value.result_status={code:((l=e.value.type_interpretation_ids)==null?void 0:l[+!v])||g.OK};break;case m.VALUE:if(e.value.valid_range.length>1&&(e.value.result_value<e.value.valid_range[0]||e.value.result_value>e.value.valid_range[1]))return;e.value.result_status={code:((S=e.value.quality_interpretation_ids)==null?void 0:S[(B=e.value.quality_range_val)==null?void 0:B.reduce(($,C,Z)=>C<v?Z+1:$,0)])||g.OK};break;case m.TEXT:case m.LIST:case m.DATE:case m.PERIOD:case m.MONEY:e.value.result_status={code:g.OK};break}e.value.validation_status={code:g.V_OK};const U=F.update(b.value,{result_value:v});if(U){P=!0;for(const $ in U)["quality_aggr","result_value"].includes($)||(e.value[$]=U[$])}}},{deep:!0}),q(()=>e.value.result_value_timestamp,async v=>{if(P){P=!1;return}v!==null&&F.update(b.value,{result_value_timestamp:v})}),q(()=>e.value.result_comment,async v=>{v&&F.update(b.value,{result_comment:v})}),q(()=>e.value.validation_status,async v=>{e.value.result_value===null&&(e.value.result_status={code:[g.V_UNDEFINED,g.V_NOT_CORRECT].includes(parseInt(v==null?void 0:v.code))&&g.ATTENTION||parseInt(v==null?void 0:v.code)==g.V_NOT_RATED&&g.OK||0},v?(e.value.result_comment=h[v.code],F.update(b.value,{validation_status_code:v.code.toString()})):F.delete(b.value))}),(v,l)=>{var pe,se,T,A,V,H,J;const B=Se,S=ie,U=nt,$=at,C=ze,Z=he,Y=tt,W=Qe,ae=Pe("keyboard");return o(),p(N,null,[c("div",Xt,[c("div",Zt,[c("div",{class:"grow leading-none p-2 text-left",textContent:x(`${e.value.item_num}. ${e.value.name}`)},null,8,Jt),c("div",Wt,[c("a",{href:"#",class:K(["inline-flex items-center justify-center border h-6 w-6 rounded-md",`bg-${n(z)(e.value.result_status.code)}`]),onClick:l[0]||(l[0]=ee(i=>{t.disabled||(e.value[e.value.result_value!==null?"result_value":"validation_status"]=null)},["prevent"]))},[t.disabled?M("",!0):(o(),p("i",{key:0,class:K(["fa fa-times",e.value.result_value!==null||e.value.validation_status!==null?"text-white":"text-transparent"])},null,2))],2)])]),c("div",Qt,[c("div",ea,[c("a",{href:"#",onClick:l[1]||(l[1]=ee(i=>y.value=!0,["prevent"]))},[...l[28]||(l[28]=[c("i",{class:"fa fa-info-circle text-xl text-slate-500 dark:text-zinc-500"},null,-1)])])]),c("div",ta,[[n(m).CHECK_3,n(m).CHECK_5].includes(parseInt(e.value.type_check.code))?(o(),p("div",aa,[(o(!0),p(N,null,j(d[e.value.type_check.code],i=>(o(),D(B,{modelValue:e.value.result_value,"onUpdate:modelValue":l[2]||(l[2]=L=>e.value.result_value=L),"pt:box:class":`bg-${n(z)(i)} rounded-md`,"pt:icon:class":"bg-transparent fa fa-check text-white",value:i.toString(),name:e.value.id,title:n(a)(n(ue)(i)),disabled:t.disabled},null,8,["modelValue","pt:box:class","value","name","title","disabled"]))),256))])):[n(m).YES_NO,n(m).ON_OFF,n(m).CONFIRM].includes(parseInt(e.value.type_check.code))?(o(),p("div",na,[_($,{"pt:pcBadge:root:class":(pe=e.value.type_interpretation_ids)!=null&&pe.length?`bg-${n(z)(e.value.result_value===null?0:e.value.type_interpretation_ids[+!e.value.result_value])}`:"bg-transparent outline-transparent",severity:"null"},{default:I(()=>[_(U,{class:"inline"},{default:I(()=>{var i,L;return[_(S,{class:K(["min-w-20",e.value.result_value===!0?`bg-${n(z)(((i=e.value.type_interpretation_ids)==null?void 0:i[0])||n(ye))} text-white`:""]),label:e.value.type_check.code==n(m).YES_NO&&n(a)("yes")||e.value.type_check.code==n(m).ON_OFF&&n(a)("on")||"",icon:e.value.type_check.code==n(m).CONFIRM?"fa fa-check":"",severity:"secondary",outlined:"",disabled:t.disabled,onClick:l[3]||(l[3]=Q=>{e.value.result_value=!0,O()})},null,8,["class","label","icon","disabled"]),_(S,{class:K(["min-w-20",e.value.result_value===!1?`bg-${n(z)(((L=e.value.type_interpretation_ids)==null?void 0:L[1])||n(ye))} text-white`:""]),label:e.value.type_check.code==n(m).YES_NO&&n(a)("no")||e.value.type_check.code==n(m).ON_OFF&&n(a)("off")||"",icon:e.value.type_check.code==n(m).CONFIRM?"fa fa-times":"",severity:"secondary",outlined:"",disabled:t.disabled,onClick:l[4]||(l[4]=Q=>{e.value.result_value=!1,O()})},null,8,["class","label","icon","disabled"])]}),_:1})]),_:1},8,["pt:pcBadge:root:class"])])):e.value.type_check.code==n(m).VALUE?(o(),D($,{key:2,"pt:pcBadge:root:class":e.value.ext_code.search("#result_value_timestamp")!=-1?`bg-${n(z)(n(g).UNDEFINED)}`:"bg-transparent outline-transparent",severity:"null"},{default:I(()=>[ve(_(ke,{modelValue:e.value.result_value,"onUpdate:modelValue":l[5]||(l[5]=i=>e.value.result_value=i),id:e.value.id,invalid:e.value.valid_range.length>1&&(e.value.result_value<e.value.valid_range[0]||e.value.result_value>e.value.valid_range[1]),disabled:t.disabled,fluid:""},null,8,["modelValue","id","invalid","disabled"]),[[ae]])]),_:1},8,["pt:pcBadge:root:class"])):e.value.type_check.code==n(m).TEXT?ve((o(),D(C,{key:3,modelValue:e.value.result_value,id:e.value.id,disabled:t.disabled,fluid:"",onBlur:l[6]||(l[6]=i=>{i.target.value||(e.value.result_value=" ")}),onChange:l[7]||(l[7]=i=>e.value.result_value=i.target.value)},null,8,["modelValue","id","disabled"])),[[ae]]):e.value.type_check.code==n(m).LIST?(o(),D(Z,{key:4,class:"text-left",modelValue:e.value.result_value,"onUpdate:modelValue":l[8]||(l[8]=i=>e.value.result_value=i),options:e.value.item_list_values.split(","),disabled:t.disabled,fluid:""},null,8,["modelValue","options","disabled"])):e.value.type_check.code==n(m).DATE?(o(),p("div",la,[c("label",{class:"w-full",for:e.value.id,textContent:x(((se=s.value)==null?void 0:se.toLocaleString().replace(",","").replace(f.value?/:\d+$/:/ .+$/,""))||e.value.name)},null,8,oa),_(Y,{modelValue:s.value,"onUpdate:modelValue":l[9]||(l[9]=i=>s.value=i),disabled:t.disabled,icon:"fa fa-calendar-day",iconDisplay:"input",inputClass:"hidden",inputId:e.value.id,manualInput:!1,"pt:inputIcon:class":"text-slate-500 text-xl","pt:inputIconContainer:class":"block static m-0",showIcon:"",showTime:f.value,stepMinute:15},null,8,["modelValue","disabled","inputId","showTime"]),_(S,{icon:f.value?"fa fa-stopwatch-20 text-xl":"fa fa-stopwatch text-xl",severity:"secondary",variant:"text",onClick:l[10]||(l[10]=i=>f.value=!f.value)},null,8,["icon"])])):e.value.type_check.code==n(m).PERIOD?(o(),p("div",ia,[c("label",{for:e.value.id,textContent:x(((T=s.value)==null?void 0:T.map(i=>i==null?void 0:i.toLocaleString().replace(/[, ].+$/,"")).join(" - "))||e.value.name)},null,8,sa),_(Y,{modelValue:s.value,"onUpdate:modelValue":l[11]||(l[11]=i=>s.value=i),disabled:t.disabled,hideOnRangeSelection:!0,icon:"fa fa-calendar-week",iconDisplay:"input",inputClass:"hidden",inputId:e.value.id,manualInput:!1,"pt:inputIcon:class":"text-slate-500 text-xl","pt:inputIconContainer:class":"block static m-0",selectionMode:"range",showIcon:""},null,8,["modelValue","disabled","inputId"])])):e.value.type_check.code==n(m).MONEY?(o(),D(U,{key:7},{default:I(()=>[ve(_(ke,{modelValue:s.value.value,"onUpdate:modelValue":l[12]||(l[12]=i=>s.value.value=i),id:e.value.id,disabled:t.disabled,fluid:""},null,8,["modelValue","id","disabled"]),[[ae]]),_(Z,{class:"grow-0 w-auto",modelValue:s.value.name,"onUpdate:modelValue":l[13]||(l[13]=i=>s.value.name=i),disabled:t.disabled,options:Object.keys(n(fe)).map(i=>({name:n(fe)[i],value:i})),optionLabel:"name",optionValue:"value","pt:dropdown:class":"w-6","pt:label:class":"inline-flex items-center grow-0 w-auto"},null,8,["modelValue","disabled","options"])]),_:1})):M("",!0)]),c("div",ua,[c("a",{href:"#",class:K(["inline-block rounded-full",`text-${n(z)((A=e.value.validation_status)==null?void 0:A.code)}`]),onClick:l[14]||(l[14]=ee(i=>{e.value.result_value===null&&!t.disabled&&k.value.show(i)},["prevent"]))},[c("i",{class:K(["fa text-xl",(V=e.value.validation_status)!=null&&V.code?"fa-dot-circle":"fa-circle"])},null,2)],2)]),c("div",da,[c("a",{href:"#",onClick:l[15]||(l[15]=ee(i=>w.value=e.value.result_value!==null,["prevent"]))},[_($,{value:e.value.content_count,"pt:pcBadge:root:class":{hidden:!e.value.content_count},severity:"danger",size:"small"},{default:I(()=>[...l[29]||(l[29]=[c("i",{class:"fa fa-image text-xl text-slate-500 dark:text-zinc-500"},null,-1)])]),_:1},8,["value","pt:pcBadge:root:class"])])])]),c("div",ra,[e.value.result_comment||!t.disabled?(o(),p("div",ca,[c("a",{href:"#",onClick:l[16]||(l[16]=ee(i=>u.value=!t.disabled,["prevent"]))},[t.disabled?M("",!0):(o(),p("i",pa)),c("span",{class:"text-slate-500 dark:text-zinc-500",innerHTML:((H=e.value.result_comment)==null?void 0:H.replace(`
`,"<br>"))||n(a)("comment")},null,8,va)])])):M("",!0),e.value.ext_code.search("#result_value_timestamp")!=-1&&e.value.result_value&&!t.disabled?(o(),D(W,{key:1,"pt:display:class":"p-0"},{display:I(()=>[c("div",{textContent:x(n(ge)(e.value.result_value_timestamp||new Date().toISOString()))},null,8,ba)]),content:I(({closeCallback:i})=>[c("div",ma,[_(Y,{modelValue:e.value.result_value_timestamp?new Date(e.value.result_value_timestamp):new Date,hideOnDateTimeSelect:!0,iconDisplay:"input",showIcon:"",showTime:f.value,stepMinute:15,size:"small","onUpdate:modelValue":l[17]||(l[17]=L=>{f.value||L.setHours(0,0,0),e.value.result_value_timestamp=L.toISOString()})},null,8,["modelValue","showTime"]),_(S,{icon:f.value?"fa fa-stopwatch-20":"fa fa-stopwatch",severity:"secondary",variant:"text",onClick:l[18]||(l[18]=L=>{if(f.value=!f.value,!f.value){const Q=new Date(e.value.result_value_timestamp);Q.setHours(0,0,0),e.value.result_value_timestamp=Q.toISOString()}})},null,8,["icon"]),_(S,{icon:"fa fa-times",severity:"secondary",variant:"text",onClick:i},null,8,["onClick"])])]),_:1})):(o(),p("div",{key:2,class:"shrink-0",textContent:x(n(ge)(e.value.result_value_timestamp))},null,8,fa))])]),_(Oe,{visible:u.value,"onUpdate:visible":l[19]||(l[19]=i=>u.value=i),modelValue:e.value.result_comment,"onUpdate:modelValue":l[20]||(l[20]=i=>e.value.result_comment=i),name:e.value.name},null,8,["visible","modelValue","name"]),_(Gt,{visible:y.value,"onUpdate:visible":l[21]||(l[21]=i=>y.value=i),modelValue:e.value,"onUpdate:modelValue":l[22]||(l[22]=i=>e.value=i)},null,8,["visible","modelValue"]),_(ot,{visible:w.value,"onUpdate:visible":l[23]||(l[23]=i=>w.value=i),disabled:t.disabled,id:e.value.id,mode:e.value.ext_code,title:e.value.name,user:(J=e.value.updated_by)==null?void 0:J.id,type:"inspection_check_list_item",onCount:l[24]||(l[24]=i=>e.value.content_count=i),onReset:l[25]||(l[25]=i=>e.value.result_value=i)},null,8,["visible","disabled","id","mode","title","user"]),_(Yt,{menu:k.value,"onUpdate:menu":l[26]||(l[26]=i=>k.value=i),modelValue:e.value,"onUpdate:modelValue":l[27]||(l[27]=i=>e.value=i)},null,8,["menu","modelValue"])],64)}}},ya={class:"grow leading-none py-2"},ha={__name:"InspectionDetails",props:{disabled:Boolean,id:Array},emits:["status"],setup(t,{emit:a}){const e=t,r=a,b=E(null),d=E([]);q(b,s=>{s.forEach((u,y)=>{let f=[0,0,0,0];u.items.forEach(w=>{f[w.result_status.code/10]++}),d.value[y]=f.toReversed()});const k=[0,0,0,0];d.value.forEach(u=>{u.forEach((y,f)=>{k[f]+=y})}),r("status",k)},{deep:!0});async function h(){b.value=await F.getItems(e.id)}return h(),(s,k)=>{const u=_a;return o(!0),p(N,null,j(b.value,(y,f)=>(o(),p(N,null,[y?(o(),p(N,{key:0},[(o(),p("div",{class:"flex items-center justify-between gap-4 px-2 bg-gray-400 dark:bg-zinc-600 text-white",key:y.id},[c("div",ya,x(s.$t("group"))+" "+x(f+1)+": "+x(y.name)+" ("+x(y.items.length)+") ",1),c("div",{class:K(["px-2 rounded-sm",`bg-${n(z)(d.value[f])}`])},x(d.value[f].join("/")),3)])),(o(!0),p(N,null,j(y.items,(w,P)=>(o(),D(u,{modelValue:y.items[P],"onUpdate:modelValue":O=>y.items[P]=O,key:w.id,id:e.id,disabled:t.disabled},null,8,["modelValue","onUpdate:modelValue","id","disabled"]))),128))],64)):M("",!0)],64))),256)}}},ga={__name:"TransferResponsibility",props:te({insId:String,usrId:String},{modelValue:{},modelModifiers:{}}),emits:te(["change"],["update:modelValue"]),setup(t,{emit:a}){const{t:e}=ce({useScope:"global"}),r=G(t,"modelValue"),b=t,d=a,h=E(),s=E(),k=async()=>{var y,f,w;s.value=await Le.getAll({...b.usrId&&{id:b.usrId},...ne([X.INSPECTOR,X.MANAGER])&&{uniId:(f=(y=Ie.user)==null?void 0:y.business_unit)==null?void 0:f.id}}),(w=s.value)!=null&&w.length&&(h.value=s.value[0].id)},u=async()=>{const y=await F.delegate(b.insId,h.value);y&&d("change",y),h.value=null,r.value=!1};return k(),(y,f)=>{const w=he,P=ie,O=Ue;return o(),D(O,{visible:r.value,"onUpdate:visible":f[2]||(f[2]=R=>r.value=R),"pt:title:class":"text-base",header:n(e)("transfer_responsibility"),modal:""},{footer:I(()=>[_(P,{label:n(e)("cancel"),icon:"fa fa-times",outlined:"",severity:"secondary",onClick:f[1]||(f[1]=R=>r.value=!1)},null,8,["label"]),_(P,{label:n(e)("ok"),icon:"fa fa-check",disabled:!h.value,outlined:"",severity:"secondary",onClick:u,autofocus:""},null,8,["label","disabled"])]),default:I(()=>[_(w,{modelValue:h.value,"onUpdate:modelValue":f[0]||(f[0]=R=>h.value=R),options:s.value,optionLabel:R=>`${R==null?void 0:R.first_name} ${R==null?void 0:R.last_name}`,optionValue:"id",disabled:!s.value,overlayClass:"overflow-hidden",_showClear:"",required:"",fluid:""},null,8,["modelValue","options","optionLabel","disabled"])]),_:1},8,["visible","header"])}}},xa={key:0,class:"inspection flex flex-col gap-6 text-gray-600"},ka={class:"info"},$a=["textContent"],Ca=["textContent"],wa=["textContent"],Va={class:"table text-sm"},Ia=["textContent"],Ea=["textContent"],Ta=["textContent"],Oa=["textContent"],Sa={key:0,class:"fa fa-pen-to-square me-1"},Na=["innerHTML"],Ra={key:0,class:"fa fa-pen-to-square me-1"},Da=["innerHTML"],Ba={key:0,class:"flex justify-between gap-4"},en={__name:"InspectionInfo",props:{id:String},setup(t,{expose:a}){const{t:e}=ce(),r=t,b=Me(),d=je(),h=E([{label:()=>e("transfer_responsibility"),icon:"fa fa-user-group",command:()=>{f.value=!0},disabled:()=>O.value||ne(X.GUEST).value},{label:()=>e("repeat_inspection"),icon:"fa fa-refresh",command:()=>d.push({name:"repeat_inspection",params:{id:r.id}}),disabled:()=>!O.value||ne(X.GUEST).value},{label:()=>e("update_inspection"),icon:"fa fa-repeat",command:()=>l(),disabled:()=>!O.value||parseInt(s.value.quality_status.code)==g.OK||ne(X.GUEST).value}]),s=E(null),k=E([]),u=E([]),y=E({}),f=E(!1),w=E(!1),P=E(!1),O=oe(()=>![g.NOT_STARTED,g.ACTIVE].includes(parseInt(s.value.operative_status.code))),R=oe(()=>u.value.reduce(($,C)=>$+C[3],0)),v=async()=>{s.value=null,k.value=[],u.value=[],s.value=await F.getById(r.id),k.value=await F.getDetails(r.id)};q([()=>r.id,()=>Ke.locale],v,{immediate:!0}),q(u,$=>{s.value&&(s.value.quality_count=$.reduce((C,Z)=>C.map((Y,W)=>C[W]+Z[W]),0),s.value.quality_status.name=e(ue(s.value.quality_count)))});const l=async()=>{b.require({message:e("confirm_update_inspection"),icon:"fa fa-question-circle",acceptProps:{label:e("yes"),icon:"fa fa-check",severity:"secondary",outlined:!0},rejectProps:{label:e("no"),icon:"fa fa-times",severity:"secondary",outlined:!0},accept:async()=>{const $=await F.copy(r.id);b.require({message:e($?"notify_inspection_updated":"notify_inspection_not_updated"),icon:"fa fa-info-circle",rejectClass:"hidden",acceptProps:{label:e("ok"),icon:"fa fa-check",severity:"secondary",outlined:!0},accept:()=>{$&&(xe.created=$,d.push({name:"inspection",params:{id:$.id}}))}})}})},B=$=>{b.require({message:e($==g.COMPLETED?"confirm_complete_inspection":"confirm_cancel_inspection"),icon:"fa fa-question-circle",acceptProps:{label:e("yes"),icon:"fa fa-check",severity:"secondary",outlined:!0},rejectProps:{label:e("no"),icon:"fa fa-times",severity:"secondary",outlined:!0},accept:async()=>{s.value.operative_status={code:$},await F.complete(r.id,{operative_status_code:$.toString(),note:s.value.note||"",action_note:s.value.action_note||""})&&(xe.reload=7,v())}})},S=[["name","schedule_type.name","schedule.name","assigned_time","started_at","finished_at","operative_status.name (responsible.full_name)","quality_status.name quality_count","valid_count"],["inspection_object","check_list"],["name","created_at"]],U={media_content:et,reports:it};return a({load:v,menu:h}),($,C)=>{var se;const Z=Fe("RouterLink"),Y=We,W=Oe,ae=ie,pe=qe;return s.value?(o(),p("div",xa,[c("table",ka,[c("caption",{textContent:x($.$t("inspection_info"))},null,8,$a),c("tbody",null,[(o(!0),p(N,null,j(S[0],T=>(o(),p("tr",null,[c("td",{textContent:x($.$t(T.replace(/\s.+$/,"").replace(/\.(full_)*name$/,"").replace(".","_")))},null,8,Ca),c("td",{class:K(/quality_status/.test(T)?`bg-${n(z)(s.value.quality_count)} text-white`:""),textContent:x(n(_e)(s.value,T))},null,10,wa)]))),256))])]),_(Y,{toggleable:""},{header:I(()=>[be(x($.$t("inspection_detail")),1)]),default:I(()=>[c("table",Va,[c("thead",null,[c("tr",null,[(o(!0),p(N,null,j(S[1],T=>(o(),p("th",{textContent:x($.$t(T))},null,8,Ia))),256))])]),c("tbody",null,[(o(!0),p(N,null,j(k.value,(T,A)=>(o(),p("tr",null,[(o(!0),p(N,null,j(S[1],(V,H)=>{var J,i,L,Q;return o(),p("td",null,[!(H%2)||!n(ne)([n(X).INSPECTOR,n(X).GUEST]).value?(o(),D(Z,{key:0,to:{name:V.replace(/^.+_/,""),params:{id:(J=T[V])==null?void 0:J[H%2?"id":"object_id"]}},textContent:x((i=T[V])==null?void 0:i.name)},null,8,["to","textContent"])):(o(),p("div",{key:1,textContent:x((L=T[V])==null?void 0:L.name)},null,8,Ea)),H%2?(o(),p("div",{key:2,class:K(`text-${n(z)(u.value[A])}`),textContent:x((Q=u.value[A])==null?void 0:Q.join("/"))},null,10,Ta)):M("",!0)])}),256))]))),256))])])]),_:1}),(o(),p(N,null,j(U,(T,A)=>ve(_(Y,{toggleable:"",collapsed:"",header:$.$t(A)},{default:I(()=>[(o(),D(He(T),{id:r.id,type:"inspection",onCount:V=>y.value[A]=V},null,40,["id","onCount"]))]),_:2},1032,["header"]),[[Ae,y.value[A]]])),64)),_(Y,{toggleable:"","pt:content:class":"flex flex-col gap-6"},{header:I(()=>[be(x($.$t("inspection_result")),1)]),default:I(()=>{var T,A;return[(o(!0),p(N,null,j(k.value,(V,H)=>{var J;return o(),p(N,null,[u.value[H]?(o(),p("div",{key:0,class:K(["flex items-center justify-between gap-4 mt-6 px-2 py-1 text-white",`bg-${n(ye)}`])},[c("div",null,x(V.inspection_object.class_name)+" | "+x(V.inspection_object.name)+" | "+x(V.name)+" ("+x(u.value[H].reduce((i,L)=>i+L))+") ",1),c("div",{class:K(["px-2 rounded-sm",`bg-${n(z)(u.value[H])}`]),textContent:x(u.value[H].join("/"))},null,10,Oa)],2)):M("",!0),_(ha,{id:[t.id,V.id],disabled:O.value||s.value.responsible.id&&s.value.responsible.id!==((J=n(Ie).user)==null?void 0:J.id),onStatus:i=>u.value[H]=i},null,8,["id","disabled","onStatus"])],64)}),256)),c("div",null,[c("a",{href:"#",onClick:C[0]||(C[0]=ee(V=>w.value=!O.value,["prevent"]))},[O.value?M("",!0):(o(),p("i",Sa)),c("span",{class:"text-gray-600",innerHTML:((T=s.value.note)==null?void 0:T.replace(`
`,"<br>"))||$.$t("note")},null,8,Na)]),_(W,{visible:w.value,"onUpdate:visible":C[1]||(C[1]=V=>w.value=V),modelValue:s.value.note,"onUpdate:modelValue":C[2]||(C[2]=V=>s.value.note=V),name:s.value.name},null,8,["visible","modelValue","name"])]),c("div",null,[c("a",{href:"#",onClick:C[3]||(C[3]=ee(V=>P.value=!O.value,["prevent"]))},[O.value?M("",!0):(o(),p("i",Ra)),c("span",{class:"text-gray-600",innerHTML:((A=s.value.action_note)==null?void 0:A.replace(`
`,"<br>"))||$.$t("action_note")},null,8,Da)]),_(W,{visible:P.value,"onUpdate:visible":C[4]||(C[4]=V=>P.value=V),modelValue:s.value.action_note,"onUpdate:modelValue":C[5]||(C[5]=V=>s.value.action_note=V),name:s.value.name},null,8,["visible","modelValue","name"])]),O.value?M("",!0):(o(),p("div",Ba,[_(ae,{label:$.$t("cancel"),icon:"fa fa-times",severity:"secondary",outlined:"",disabled:O.value,onClick:C[6]||(C[6]=V=>B(n(g).CANCELED))},null,8,["label","disabled"]),_(ae,{icon:"fa fa-check",label:$.$t("complete"),severity:"secondary",outlined:"",disabled:R.value||O.value,onClick:C[7]||(C[7]=V=>B(n(g).COMPLETED))},null,8,["label","disabled"])]))]}),_:1}),n(ne)([n(X).ADMIN,n(X).OWNER]).value?(o(),D(Y,{key:0,toggleable:"",collapsed:""},{header:I(()=>[be(x($.$t("attributes")),1)]),default:I(()=>[_(pe,{item:s.value},null,8,["item"])]),_:1})):M("",!0),_(ga,{modelValue:f.value,"onUpdate:modelValue":C[8]||(C[8]=T=>f.value=T),insId:r.id,usrId:(se=s.value.responsible)==null?void 0:se.id,onChange:C[9]||(C[9]=T=>s.value.responsible=T.responsible)},null,8,["modelValue","insId","usrId"])])):M("",!0)}}};export{en as default};

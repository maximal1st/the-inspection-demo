import{f as c,o as d,a as i,p as o,be as v,B as C,Z as w,g as b,t as s,k as g,a1 as $,a0 as B,w as f,c as k,$ as A,z as P,A as S,a2 as I,R as T,l as D,bm as V,q as L,aC as E}from"./index-mYP2TR4O.js";var m={name:"PlusIcon",extends:v};function H(e){return N(e)||M(e)||j(e)||K()}function K(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(e,n){if(e){if(typeof e=="string")return h(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(e,n):void 0}}function M(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function N(e){if(Array.isArray(e))return h(e)}function h(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,p=Array(n);t<n;t++)p[t]=e[t];return p}function z(e,n,t,p,l,a){return d(),c("svg",o({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),H(n[0]||(n[0]=[i("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)])),16)}m.render=z;var O=`
    .p-panel {
        display: block;
        border: 1px solid dt('panel.border.color');
        border-radius: dt('panel.border.radius');
        background: dt('panel.background');
        color: dt('panel.color');
    }

    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('panel.header.padding');
        background: dt('panel.header.background');
        color: dt('panel.header.color');
        border-style: solid;
        border-width: dt('panel.header.border.width');
        border-color: dt('panel.header.border.color');
        border-radius: dt('panel.header.border.radius');
    }

    .p-panel-toggleable .p-panel-header {
        padding: dt('panel.toggleable.header.padding');
    }

    .p-panel-title {
        line-height: 1;
        font-weight: dt('panel.title.font.weight');
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }
`,R={root:function(n){var t=n.props;return["p-panel p-component",{"p-panel-toggleable":t.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},Z=C.extend({name:"panel",style:O,classes:R}),q={name:"BasePanel",extends:L,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:Z,provide:function(){return{$pcPanel:this,$parentInstance:this}}},U={name:"Panel",extends:q,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(n){this.d_collapsed=n}},methods:{toggle:function(n){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:n,value:this.d_collapsed})},onKeyDown:function(n){(n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&(this.toggle(n),n.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return E({toggleable:this.toggleable})}},components:{PlusIcon:m,MinusIcon:V,Button:D},directives:{ripple:T}},W=["data-p"],F=["data-p"],G=["id"],J=["id","aria-labelledby"];function Q(e,n,t,p,l,a){var y=w("Button");return d(),c("div",o({class:e.cx("root"),"data-p":a.dataP},e.ptmi("root")),[i("div",o({class:e.cx("header"),"data-p":a.dataP},e.ptm("header")),[s(e.$slots,"header",{id:e.$id+"_header",class:B(e.cx("title"))},function(){return[e.header?(d(),c("span",o({key:0,id:e.$id+"_header",class:e.cx("title")},e.ptm("title")),$(e.header),17,G)):g("",!0)]}),i("div",o({class:e.cx("headerActions")},e.ptm("headerActions")),[s(e.$slots,"icons"),e.toggleable?s(e.$slots,"togglebutton",{key:0,collapsed:l.d_collapsed,toggleCallback:function(u){return a.toggle(u)},keydownCallback:function(u){return a.onKeyDown(u)}},function(){return[b(y,o({id:e.$id+"_header",class:e.cx("pcToggleButton"),"aria-label":a.buttonAriaLabel,"aria-controls":e.$id+"_content","aria-expanded":!l.d_collapsed,unstyled:e.unstyled,onClick:n[0]||(n[0]=function(r){return a.toggle(r)}),onKeydown:n[1]||(n[1]=function(r){return a.onKeyDown(r)})},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:f(function(r){return[s(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:l.d_collapsed},function(){return[(d(),k(A(l.d_collapsed?"PlusIcon":"MinusIcon"),o({class:r.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","pt"])]}):g("",!0)],16)],16,F),b(I,o({name:"p-toggleable-content"},e.ptm("transition")),{default:f(function(){return[P(i("div",o({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[i("div",o({class:e.cx("content")},e.ptm("content")),[s(e.$slots,"default")],16),e.$slots.footer?(d(),c("div",o({key:0,class:e.cx("footer")},e.ptm("footer")),[s(e.$slots,"footer")],16)):g("",!0)],16,J),[[S,!l.d_collapsed]])]}),_:3},16)],16,W)}U.render=Q;export{U as s};

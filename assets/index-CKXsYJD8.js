import{aH as i,a8 as c,a5 as d,ay as a,bi as v,a as C,aS as w,aR as s,bp as $,a7 as g,aA as B,ac as b,bG as f,a6 as k,aU as A,bH as P,bD as S,T as I,r as T,aZ as D,bj as H,a$ as V,ag as L}from"./index-B2Dh0byL.js";var m={name:"PlusIcon",extends:v};function j(e){return N(e)||M(e)||K(e)||E()}function E(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(e,n){if(e){if(typeof e=="string")return h(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(e,n):void 0}}function M(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function N(e){if(Array.isArray(e))return h(e)}function h(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,p=Array(n);t<n;t++)p[t]=e[t];return p}function W(e,n,t,p,r,o){return i(),c("svg",a({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),j(n[0]||(n[0]=[d("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)])),16)}m.render=W;var O=`
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

    .p-panel-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-panel-content-wrapper {
        min-height: 0;
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }
`,R={root:function(n){var t=n.props;return["p-panel p-component",{"p-panel-toggleable":t.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",contentWrapper:"p-panel-content-wrapper",content:"p-panel-content",footer:"p-panel-footer"},U=C.extend({name:"panel",style:O,classes:R}),Z={name:"BasePanel",extends:V,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:U,provide:function(){return{$pcPanel:this,$parentInstance:this}}},z={name:"Panel",extends:Z,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(n){this.d_collapsed=n}},methods:{toggle:function(n){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:n,value:this.d_collapsed})},onKeyDown:function(n){(n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&(this.toggle(n),n.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return L({toggleable:this.toggleable})}},components:{PlusIcon:m,MinusIcon:H,Button:D},directives:{ripple:T}},G=["data-p"],q=["data-p"],F=["id"],J=["id","aria-labelledby"];function Q(e,n,t,p,r,o){var y=w("Button");return i(),c("div",a({class:e.cx("root"),"data-p":o.dataP},e.ptmi("root")),[d("div",a({class:e.cx("header"),"data-p":o.dataP},e.ptm("header")),[s(e.$slots,"header",{id:e.$id+"_header",class:B(e.cx("title")),collapsed:r.d_collapsed},function(){return[e.header?(i(),c("span",a({key:0,id:e.$id+"_header",class:e.cx("title")},e.ptm("title")),$(e.header),17,F)):g("",!0)]}),d("div",a({class:e.cx("headerActions")},e.ptm("headerActions")),[s(e.$slots,"icons"),e.toggleable?s(e.$slots,"togglebutton",{key:0,collapsed:r.d_collapsed,toggleCallback:function(u){return o.toggle(u)},keydownCallback:function(u){return o.onKeyDown(u)}},function(){return[b(y,a({id:e.$id+"_header",class:e.cx("pcToggleButton"),"aria-label":o.buttonAriaLabel,"aria-controls":e.$id+"_content","aria-expanded":!r.d_collapsed,unstyled:e.unstyled,onClick:n[0]||(n[0]=function(l){return o.toggle(l)}),onKeydown:n[1]||(n[1]=function(l){return o.onKeyDown(l)})},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:f(function(l){return[s(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:r.d_collapsed},function(){return[(i(),k(A(r.d_collapsed?"PlusIcon":"MinusIcon"),a({class:l.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","pt"])]}):g("",!0)],16)],16,q),b(I,a({name:"p-collapsible"},e.ptm("transition")),{default:f(function(){return[P(d("div",a({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[d("div",a({class:e.cx("contentWrapper")},e.ptm("contentWrapper")),[d("div",a({class:e.cx("content")},e.ptm("content")),[s(e.$slots,"default")],16),e.$slots.footer?(i(),c("div",a({key:0,class:e.cx("footer")},e.ptm("footer")),[s(e.$slots,"footer")],16)):g("",!0)],16)],16,J),[[S,!r.d_collapsed]])]}),_:3},16)],16,G)}z.render=Q;export{z as s};

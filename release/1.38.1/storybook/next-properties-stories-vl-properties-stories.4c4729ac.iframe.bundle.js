"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3710],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,r)=>{r.d(t,{f:()=>h});var s=r("../../node_modules/react/index.js"),l=r("../../node_modules/react-dom/client.js"),o=new Map,n=({callback:e,children:t})=>{let r=(0,s.useRef)();return(0,s.useLayoutEffect)(()=>{r.current!==e&&(r.current=e,e())},[e]),t},a=async(e,t)=>{let r=await d(t);return new Promise(t=>{r.render(s.createElement(n,{callback:()=>t(null)},e))})},i=(e,t)=>{let r=o.get(e);r&&(r.unmount(),o.delete(e))},d=async e=>{let t=o.get(e);return t||(t=l.createRoot(e),o.set(e,t)),t},c=r("../../node_modules/@storybook/blocks/dist/index.mjs"),p={code:c.XA,a:c.zE,...c.Sw},m=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:s.createElement(s.Fragment,null,t)}},h=class{constructor(){this.render=async(e,t,l)=>{let o={...p,...t?.components},n=c.kQ;return new Promise((i,d)=>{r.e(814).then(r.bind(r,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:r})=>a(s.createElement(m,{showException:d,key:Math.random()},s.createElement(r,{components:o},s.createElement(n,{context:e,docsParameter:t}))),l)).then(()=>i())})},this.unmount=e=>{i(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,r)=>{r.d(t,{Hl:()=>s.Hl,W8:()=>s.W8,kL:()=>s.kL,ov:()=>s.ov}),r("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var s=r("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/components/src/next/properties/stories/vl-properties.stories.ts":(e,t,r)=>{r.r(t),r.d(t,{PropertiesCollapsed:()=>A,PropertiesColumns:()=>H,PropertiesDefault:()=>S,PropertiesHtmlEnriched:()=>_,PropertiesWithProps:()=>W,__namedExportsOrder:()=>D,default:()=>P});var s=r("../../libs/common/storybook/src/index.ts"),l=r("../../libs/common/utilities/src/index.ts"),o=r("../../node_modules/lit-html/lit-html.js"),n=r("../../libs/common/utilities/src/css/global-styles-decorator.ts"),a=r("../../libs/elements/src/index.ts"),i=r("../../node_modules/lit/index.js");let d=e=>e.map(e=>e.cloneNode(!0)),c=e=>{let t=[],r=[],s=[];return e.forEach(e=>{switch(e.localName){case"label":r.length&&s.length&&(t.push({labels:r,data:s}),r=[],s=[]),r.push(e.children.length>0?d([...e.children]):e.innerHTML);break;case"data":s.push(e.children.length>0?d([...e.children]):e.innerHTML)}}),r.length&&t.push({labels:r,data:s}),t},p=e=>null==e||0==e.length?(console.warn("vl-properties - geen props opgegeven"),[]):e[0]?.localName==="div"?e.map(e=>({class:e.className,items:c([...e.children])})):[{items:c(e)}];var m=r("../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let h=e=>(0,i.AH)`
        width: calc(${e}% - 1rem);
    `,u=()=>(0,i.AH)`
        font-size: 1.6rem;
    `,b=()=>(0,i.AH)`
        grid-column: 1;
        font-size: 1.6rem;
    `,v=e=>(0,i.AH)`
        dl {
            grid-template-columns: [labels] ${e}rem [data] auto;
        }

        dl .item {
            grid-template-columns: [labels] ${e}rem [data] auto;
        }
    `,g=(0,i.AH)`
    :host {
        display: block;
    }

    .column {
        ${h(50)};
        float: left;
    }

    .column--full-width {
        ${h(100)};
        float: left;
    }

    dl {
        display: grid;
    }

    dl:has(.item) {
        display: initial;
    }

    dl .item {
        display: grid;
        padding-bottom: 2rem;
    }

    dt {
        font-size: 1.8rem;
        color: var(--vl-label-color);
        padding-right: 1rem;
        grid-column: 1;
    }

    .collapsed dt {
        ${u()}
    }

    dd {
        font-size: 1.8rem;
        grid-column: 2;
    }

    .collapsed dd {
        ${b()}
    }

    ${(0,m.i)((0,i.AH)`
            .column {
                ${h(100)};
            }

            dd {
                ${b()}
            }

            dt {
                ${u()}
            }
        `)};
`,f={labelWidth:17,props:[]};class x extends l.jW{static get styles(){return[a.hF,g]}static get properties(){return{props:{type:Array},aggregatedProps:{type:Array,state:!0},labelWidth:{type:Number,attribute:"label-width"}}}set props(e){this.attributeProps=e,this.buildInternalProperties()}get props(){return this.attributeProps}connectedCallback(){super.connectedCallback(),this.buildInternalProperties(),this.observeLightPropertiesChange()}firstUpdated(e){super.firstUpdated(e),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.labelWidthSheet])}updated(e){super.updated(e),e.has("labelWidth")&&this.labelWidth&&this.labelWidthSheet.replace(v(this.labelWidth).toString())}disconnectedCallback(){super.disconnectedCallback(),this.disconnectMutationObservers()}render(){return(0,i.qy)` <dl>${this.aggregatedProps.map(e=>this.renderColumn(e))}</dl> `}renderColumn(e){return e.class?(0,i.qy)` <div class="${e.class}">${e.items.map(e=>this.renderItem(e))}</div>`:(0,i.qy)` ${e.items.map(e=>this.renderItem(e))}`}renderItem(e){return(0,i.qy)` <div class="item">${this.renderLabels(e.labels)} ${this.renderData(e.data)}</div>`}renderLabels(e){return e.map(e=>(0,i.qy)` <dt>${e}</dt>`)}renderData(e){return e.map(e=>(0,i.qy)` <dd>${e}</dd>`)}buildInternalProperties(){this.aggregatedProps=[...this.attributeProps,...p([...this.children])]}disconnectMutationObservers(){this.mutationObserverList.forEach(e=>e.disconnect()),this.mutationObserverList=[]}observeLightPropertiesChange(){this.disconnectMutationObservers(),this.mutationObserverList=[...this.mutationObserverList,(0,l.U_)(this,e=>{this.buildInternalProperties(),this.observeLightPropertiesChange()})],this.children.length>0&&"div"===this.children[0].localName&&[...this.children].forEach(e=>this.mutationObserverList=[...this.mutationObserverList,(0,l.U_)(e,e=>{this.buildInternalProperties()})])}constructor(...e){super(...e),this.attributeProps=f.props,this.aggregatedProps=f.props,this.mutationObserverList=[],this.labelWidth=f.labelWidth,this.labelWidthSheet=new CSSStyleSheet}}x=function(e,t,r,s){var l,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(l=e[a])&&(n=(o<3?l(n):o>3?l(t,r,n):l(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n}([(0,n.n)(),(0,l.M1)("vl-properties-next")],x),r("../../node_modules/react/index.js");var $=r("../../node_modules/react/jsx-runtime.js"),j=r("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),y=r("../../node_modules/@storybook/addon-docs/dist/index.mjs");function w(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,j.RP)(),e.components),{VluxMetaData:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h1,{id:"properties---next",children:"Properties - next"}),"\n",(0,$.jsx)(r,{id:"components-next-properties"}),"\n",(0,$.jsxs)(t.p,{children:["Gebruik de ",(0,$.jsx)(t.code,{children:"properties-next"})," component om properties te tonen op een pagina. Je kan de properties specifiëren als\ninner-html of als json-structuur meegeven aan het ",(0,$.jsx)(t.code,{children:"props"})," attribuut."]}),"\n",(0,$.jsxs)(t.p,{children:["Deze component is de nieuwste variant die de (nog als element geschreven)\n",(0,$.jsx)(t.a,{href:"/docs/elements-properties--documentatie",children:"vl-properties"})," vervangt."]}),"\n",(0,$.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,$.jsx)(t.pre,{children:(0,$.jsx)(t.code,{className:"language-js",children:"import { VlPropertiesComponent } from '@domg-wc/components/next/properties';\n"})}),"\n",(0,$.jsx)(t.pre,{children:(0,$.jsx)(t.code,{className:"language-html",children:"<vl-properties-next></vl-properties-next>\n"})}),"\n",(0,$.jsx)(y.Hl,{of:S}),"\n",(0,$.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,$.jsx)(y.ov,{of:S}),"\n",(0,$.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,$.jsx)(t.p,{children:"De props zijn als volgt gespecifiëerd:"}),"\n",(0,$.jsx)(t.pre,{children:(0,$.jsx)(t.code,{className:"language-ts",children:"export type Props = Column[];\n\nexport interface Column {\n    class?: string; // column / column--full-width / collapsed\n    items: Item[];\n}\n\nexport interface Item {\n    labels: string[] | Node[][];\n    data: string[] | Node[][];\n}\n"})}),"\n",(0,$.jsx)(t.p,{children:"Bijvoorbeeld:"}),"\n",(0,$.jsx)(t.pre,{children:(0,$.jsx)(t.code,{className:"language-ts",children:"[\n    {\n        class: 'column',\n        items: [\n            {\n                labels: ['Straat'],\n                data: ['Appelstraat', 'Perenstraat'],\n            },\n        ],\n    },\n]\n"})}),"\n",(0,$.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,$.jsx)(t.h3,{id:"met-props",children:"Met props"}),"\n",(0,$.jsxs)(t.p,{children:["Door bovenstaande ",(0,$.jsx)(t.code,{children:"props"})," te zetten krijg je een mix van de attribuut-data en de via inner-html gespecifieerde data."]}),"\n",(0,$.jsx)(y.Hl,{of:W}),"\n",(0,$.jsx)(t.h3,{id:"met-html-verrijking",children:"Met html verrijking"}),"\n",(0,$.jsx)(t.p,{children:"Naast gewone tekst kan zowel in 'label' als in 'data' html-code gestoken worden die dan 1 op 1 wordt overgenomen."}),"\n",(0,$.jsx)(y.Hl,{of:_}),"\n",(0,$.jsx)(t.h3,{id:"collapsed",children:"Collapsed"}),"\n",(0,$.jsxs)(t.p,{children:["In mobiele-mode (< 767px) worden labels en data onder i.p.v. naast elkaar getoond. Deze layout kan ook expliciet\nafgedwongen worden via de ",(0,$.jsx)(t.code,{children:"collapsed"})," class."]}),"\n",(0,$.jsx)(y.Hl,{of:A}),"\n",(0,$.jsx)(t.h3,{id:"columns",children:"Columns"}),"\n",(0,$.jsxs)(t.p,{children:["M.b.v. de ",(0,$.jsx)(t.code,{children:"column"})," (en ",(0,$.jsx)(t.code,{children:"column--full-width"}),") class kunnen er 2 kolommen gespecifiëerd worden."]}),"\n",(0,$.jsx)(y.Hl,{of:H}),"\n",(0,$.jsx)(t.h2,{id:"gekende-beperkingen",children:"Gekende beperkingen"}),"\n",(0,$.jsxs)(t.p,{children:["Er is ondersteuning om meerdere labels en data op te geven in de lijst. 1 label met meerdere data waardes en\nmeerdere labels met 1 data waarde zien er logisch uit. De combinatie van meerdere labels en meerdere data waardes\nneemt meer wit ruimte in dan nodig. Dit fundamenteel oplossen kan met de\n",(0,$.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout",target:"_blank",rel:"nofollow noopener noreferrer",children:"Masonry layout"}),", deze wordt echter\nnog niet ondersteund door alle browsers, vandaar is dat momenteel niet voorzien. Een manier om er rond te werken\n(enkel als je het nodig hebt) is 1 label en 1 data te gebruiken en de verschillende waardes te wrappen in een ",(0,$.jsx)(t.code,{children:"<div>"}),"."]}),"\n",(0,$.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,$.jsxs)(t.p,{children:["Technisch zal de component zich in zijn shadow-dom renderen als een\n",(0,$.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl",target:"_blank",rel:"nofollow noopener noreferrer",children:"description list"}),"."]}),"\n",(0,$.jsxs)(t.p,{children:["De look & feel van de component is conform de\n",(0,$.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-properties",target:"_blank",rel:"nofollow noopener noreferrer",children:"Properties"}),"\ncomponent van Digitaal Vlaanderen."]})]})}let k={...s.D8,...f},z={...(0,s.RN)(!0),labelWidth:{name:"label-width",description:"De breedte van de labels, in REM. Heeft geen impact als de properties 'collapsed' worden.",table:{type:{summary:s.QE.NUMBER},category:s.R6.ATTRIBUTES,defaultValue:{summary:k.labelWidth}}},props:{name:"props",description:"De props in JSON formaat.",table:{type:{summary:s.QE.ARRAY},category:s.R6.PROPERTIES,defaultValue:{summary:k.props}}}};(0,l.gy)([x]);let P={id:"components-next-properties",title:"Components-next/properties",tags:["autodocs"],args:k,argTypes:z,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,j.RP)(),e.components);return t?(0,$.jsx)(t,Object.assign({},e,{children:(0,$.jsx)(w,e)})):w(e)}}}},S=(0,s._7)(k,({labelWidth:e,props:t})=>(0,o.qy)`
        <vl-properties-next label-width=${e} .props=${t}>
            <label>Woonplaats</label>
            <data>Brussel</data>
            <label>Postcode</label>
            <data>1000</data>
        </vl-properties-next>
    `).bind({});S.storyName="vl-properties-next - default";let W=S.bind({});W.storyName="vl-properties-next - with props",W.args={props:[{class:"column",items:[{labels:["Straat"],data:["Appelstraat","Perenstraat"]}]}]};let _=(0,s._7)(k,({labelWidth:e,props:t})=>(0,o.qy)`
        <vl-properties-next label-width=${e} .props=${t}>
            <label
                ><span is="vl-icon" data-vl-icon="location" data-vl-size="small" data-vl-before></span
                ><span>Woonplaats</span></label
            >
            <data
                ><span is="vl-icon" data-vl-icon="alert-triangle" data-vl-size="small" data-vl-before></span
                ><span>Brussel</span></data
            >
            <label>Postcode</label>
            <data>1000</data>
        </vl-properties-next>
    `);_.storyName="vl-properties-next - html enriched";let A=(0,s._7)(k,({labelWidth:e,props:t})=>(0,o.qy)`
        <vl-properties-next label-width=${e} .props=${t}>
            <div class="collapsed">
                <label>Woonplaats</label>
                <data>Brussel</data>
                <label>Postcode</label>
                <data>1000</data>
            </div>
        </vl-properties-next>
    `);A.storyName="vl-properties-next - collapsed";let H=(0,s._7)(k,({labelWidth:e,props:t})=>(0,o.qy)`
        <vl-properties-next label-width=${e} .props=${t}>
            <div class="column">
                <label>Woonplaats</label>
                <data>Brussel</data>
            </div>
            <div class="column">
                <label>Postcode</label>
                <data>1000</data>
            </div>
            <div class="column column--full-width">
                <label>Gewest</label>
                <data>Brussel</data>
            </div>
        </vl-properties-next>
    `);H.storyName="vl-properties-next - columns",S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html`\n        <vl-properties-next label-width=${labelWidth} .props=${props}>\n            <label>Woonplaats</label>\n            <data>Brussel</data>\n            <label>Postcode</label>\n            <data>1000</data>\n        </vl-properties-next>\n    `)",...S.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:"PropertiesTemplate.bind({})",...W.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:'story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html`\n        <vl-properties-next label-width=${labelWidth} .props=${props}>\n            <label\n                ><span is="vl-icon" data-vl-icon="location" data-vl-size="small" data-vl-before></span\n                ><span>Woonplaats</span></label\n            >\n            <data\n                ><span is="vl-icon" data-vl-icon="alert-triangle" data-vl-size="small" data-vl-before></span\n                ><span>Brussel</span></data\n            >\n            <label>Postcode</label>\n            <data>1000</data>\n        </vl-properties-next>\n    `)',..._.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:'story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html`\n        <vl-properties-next label-width=${labelWidth} .props=${props}>\n            <div class="collapsed">\n                <label>Woonplaats</label>\n                <data>Brussel</data>\n                <label>Postcode</label>\n                <data>1000</data>\n            </div>\n        </vl-properties-next>\n    `)',...A.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:'story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html`\n        <vl-properties-next label-width=${labelWidth} .props=${props}>\n            <div class="column">\n                <label>Woonplaats</label>\n                <data>Brussel</data>\n            </div>\n            <div class="column">\n                <label>Postcode</label>\n                <data>1000</data>\n            </div>\n            <div class="column column--full-width">\n                <label>Gewest</label>\n                <data>Brussel</data>\n            </div>\n        </vl-properties-next>\n    `)',...H.parameters?.docs?.source}}};let D=["PropertiesDefault","PropertiesWithProps","PropertiesHtmlEnriched","PropertiesCollapsed","PropertiesColumns"]},"../../node_modules/react-dom/client.js":(e,t,r)=>{var s=r("../../node_modules/react-dom/index.js");t.createRoot=s.createRoot,t.hydrateRoot=s.hydrateRoot},"../../libs/common/utilities/src/css/global-styles-decorator.ts":(e,t,r)=>{r.d(t,{n:()=>f});var s=r("../../node_modules/lit/index.js");let l=(0,s.AH)`
    :root {
        --vl-white: #ffffff;

        --vl-background-color: var(--vl-white);
        --vl-map-background-color: #ffffff;
        --vl-background-alt-color: #f7f9fc;
        --vl-accent-color: #ffe615;

        --vl-text-color: #333332;
        --vl-text-alt-color: #687483;
        --vl-light-text-color: #8695a8;

        --vl-border-color: #cbd2da;
        --vl-alt-border-color: #8695a8;
        --vl-doormat-graphic-border-color: #33333233;

        --vl-action-color: #0055cc;
        --vl-action-color--hover: #003bb0;
        --vl-action-color--active: #004099; /* --vl-action-color 10% darker */
        --vl-action-color--visited: #660599;
        --vl-action-color--disabled: #687483;
        --vl-action-background-color--disabled: #cbd2d9;

        --vl-action-tertiary-color: var(--vl-action-color); /* --vl-action-color */
        --vl-action-tertiary-color--hover: var(--vl-action-color); /* --vl-action-color */
        --vl-action-tertiary-border-color: #c6cdd3;
        --vl-action-tertiary-border-color--hover: #5990de;

        --vl-error-color: #d2373c;
        --vl-error-color--hover: #aa2729;

        --vl-focus-color: #0055cca6; /* --vl-action-color 65% opacity */

        --vl-label-color: #687483;
    }
`,o=(0,s.AH)`
    :root {
        --vl-border-radius: 0.3rem;
    }
`,n=(0,s.AH)`
    :root {
        --vl-spacing--xxsmall: 0.5rem;
        --vl-spacing--xsmall: 1rem;
        --vl-spacing--small: 1.5rem;
        --vl-spacing--normal: 2rem;
        --vl-spacing--medium: 3rem;
        --vl-spacing--large: 6rem;
    }
`;var a="https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/22.0.2",i="FlandersArtSans",d="FlandersArtSerif",c="vlaanderen-icon-classic",p="".concat(a,"/iconfont/").concat(c);let m=(0,s.AH)`
    :root {
        /* Flanders font */
        --vl-font: ${(0,s.iz)(i)}, sans-serif;
        --vl-accent-font: ${(0,s.iz)(d)}, serif;

        --vl-font-size--xxlarge: 2.8rem; /* DV: $vl-base-font-size--xxlarge */
        --vl-font-size--xlarge: 2.2rem; /* DV: $vl-base-font-size--xlarge */
        --vl-font-size--large: 2rem; /* DV: $vl-base-font-size--large */
        --vl-font-size: 1.8rem; /* DV: $vl-base-font-size */
        --vl-font-size--mobile: 1.6rem; /* DV: $vl-base-mobile-font-size */
        --vl-font-size--small: 1.6rem; /* DV: $vl-base-font-size--small */
        --vl-font-size--xsmall: 1.4rem; /* DV: $vl-base-font-size--xsmall */
        --vl-font-size--xxsmall: 1.2rem; /* DV: $vl-base-font-size--xxsmall */

        --vl-line-height: 1.5; /* DV: $vl-base-line-height */
        --vl-line-height--mobile: 1.33; /* DV: $vl-base-mobile-line-height */

        /* Icon font */
        --vl-icon-font: ${(0,s.iz)(c)};
    }
`,h=(e,t,r,l)=>(0,s.AH)`
    @font-face {
        font-family: ${(0,s.iz)(e)};
        src: url(${(0,s.iz)(`${t}.woff2`)}) format('woff2'),
            url(${(0,s.iz)(`${t}.woff`)}) format('woff');
        font-weight: ${(0,s.iz)(r)};
        font-style: ${(0,s.iz)(l)};
    }
`,u=(0,s.AH)`
    /* Flanders font */
    ${h(i,`${a}/flanders/sans/${i}-Light`,300,"normal")}
    ${h(i,`${a}/flanders/sans/${i}-Regular`,400,"normal")}
    ${h(i,`${a}/flanders/sans/${i}-Medium`,500,"normal")}
    ${h(i,`${a}/flanders/sans/${i}-Bold`,700,"normal")}

    ${h(i,`${a}/flanders/italic/${i}-Light`,300,"italic")}
    ${h(i,`${a}/flanders/italic/${i}-Regular`,400,"italic")}
    ${h(i,`${a}/flanders/italic/${i}-Medium`,500,"italic")}
    ${h(i,`${a}/flanders/italic/${i}-Bold`,700,"italic")}

    ${h(d,`${a}/flanders/serif/${d}-Light`,300,"normal")}
    ${h(d,`${a}/flanders/serif/${d}-Regular`,400,"normal")}
    ${h(d,`${a}/flanders/serif/${d}-Medium`,500,"normal")}
    ${h(d,`${a}/flanders/serif/${d}-Bold`,700,"normal")}

    /* Icon font */
    ${h(c,p,"normal","normal")}
`;var b=r("../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let v=[l,o,n,m,u,(0,s.AH)`
    html {
        font-family: var(--vl-font);
        /* 62.5% Font Size Trick  */
        font-size: 62.5%;
    }

    body {
        font-size: var(--vl-font-size);
        line-height: var(--vl-line-height);
        color: var(--vl-text-color);

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: none;

        ${(0,b.i)((0,s.AH)`
                font-size: var(--vl-font-size--mobile);
                line-height: var(--vl-line-height--mobile);
            `)}
    }
`];class g{static{this.registered=!1}static register(){this.registered||(document.adoptedStyleSheets=[...document.adoptedStyleSheets,...v.map(e=>e.styleSheet)],this.registered=!0,console.log("RegisterGlobalStyles: global styling toegevoegd aan het document"))}}let f=()=>e=>{g.register()}},"../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts":(e,t,r)=>{r.d(t,{M:()=>o,i:()=>l});var s=r("../../node_modules/lit/index.js");let l=e=>(0,s.AH)`
    @media screen and (max-width: 767px) {
        ${e}
    }
`,o=e=>(0,s.AH)`
    @media screen and (max-width: 1023px) {
        ${e}
    }
`}}]);
import{_ as n,o as c,c as p,a as t,t as a,p as l,f as d}from"./index-0407d089.js";const i=e=>(l("data-v-f614b517"),e=e(),d(),e),_={class:"container"},u={class:"row"},h={class:"col"},k=i(()=>t("h3",null,"Här ska data finnas",-1)),g={class:"col"},v={props:{page:{type:String,required:!0}},data(){return{kontent:'CORS blockar allt. Denna sida är bara för att visa att jag uppfyllt kravet om "Vue Router-adressparametervärde"!',scrapsida:""}},methods:{getBack(){this.$router.push("/")}}},f=Object.assign(v,{__name:"NyhetsFocus",setup(e){return(s,o)=>(c(),p("div",_,[t("div",u,[t("div",h,[k,t("p",null,"Som du kan se så är vi på nyhet "+a(s.$route.params.page),1)]),t("div",g,[t("p",null," Här ligger kontent: "+a(s.kontent)+" "+a(s.$route.params.page),1)]),t("button",{class:"getbackBTN",onClick:o[0]||(o[0]=(...r)=>s.getBack&&s.getBack(...r))},"Gå tillbaka till huvudsidan")])]))}}),b=n(f,[["__scopeId","data-v-f614b517"]]);export{b as default};

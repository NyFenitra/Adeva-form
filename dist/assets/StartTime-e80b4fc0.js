import{d as p,s as _,o as s,b as n,e as l,F as d,r as f,u as o,c as h,n as k,j as v}from"./index-27d7181d.js";import{I as S}from"./Item-94233541.js";import{u as x}from"./steps-87d8fb35.js";import{c as B}from"./data-84f01471.js";import"./_plugin-vue_export-helper-c27b6911.js";const C={class:"step-4 step"},I=l("h3",null,"When are you looking to start?",-1),T={class:"item-container d-flex flex-column"},z=p({__name:"StartTime",setup(b){const a=x(),{setSteps:c}=a,{steps:i,stepNumber:t}=_(a),u=v(),m=r=>{c(r,t.value-1),setTimeout(()=>{u.push({name:`step-${t.value+1}`})},1e3)};return(r,g)=>(s(),n("div",C,[I,l("div",T,[(s(!0),n(d,null,f(o(B),e=>(s(),h(S,{key:e.title,title:e.title,class:k({active:o(i)[o(t)-1]===e.title}),onClick:y=>m(e.title)},null,8,["title","class","onClick"]))),128))])]))}});export{z as default};

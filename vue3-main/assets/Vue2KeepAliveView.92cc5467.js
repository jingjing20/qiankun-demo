import{d as a,r as t,p as o,q as p,s as r,A as s,B as l,aG as u}from"./index.41512060.js";const c={name:"Vue2KeepAliveView"},d=a({...c,setup(i){const n=t(null);let e=null;return o(()=>{e=p({name:"vue2AppKeepAlive",entry:r,container:n.value,props:{path:"/tab-view"}})}),s(async()=>{e&&e.getStatus()==="MOUNTED"&&await e.unmount(),e=null}),(_,f)=>(l(),u("div",{ref_key:"container",ref:n},null,512))}});export{d as default};
import{d as a,r as t,p as o,q as r,z as p,A as l,B as c,aG as s}from"./index.41512060.js";const u={name:"React18KeepAliveView"},d=a({...u,setup(i){const n=t(null);let e=null;return o(()=>{e=r({name:"reactAppKeepAlive",entry:p,container:n.value,props:{path:"/tab-view"}})}),l(async()=>{console.log(1111),e&&e.getStatus()==="MOUNTED"&&await e.unmount(),e=null}),(_,f)=>(c(),s("div",{ref_key:"container",ref:n},null,512))}});export{d as default};
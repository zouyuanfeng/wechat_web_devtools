'use strict';!function(require,directRequire){async function a(a,b={}){const{appConfig:c,config:h,type:j}=b,{wxmlFiles:l,wxsFiles:o}=n(c,h);return new Promise(async(b,n)=>{const p=m.srcPath;let q=l.concat(o),r=!1;o&&0<o.length&&(r=!0,g('wxs_compile',a.appid)),q=q.map((a)=>`./${a}`);const s=h?`$${new Buffer(h.root).toString('hex')}`:'$gwx',t='>_<>_<'+Date.now();let u=[];try{u=await i.getCompileConfig(a,c,h)}catch(a){return n(a)}const v=['-d',j,u.join(t),'--split',t].concat(q).concat(['-gn',s]),w=d.getWXMLParsePath(),x=e(w,v,{cwd:p}),y=[],z=[];x.on('close',(c)=>{if(0===c){const a=Buffer.concat(y).toString();return b({code:a,name:s})}r&&g('wxs_compile_fail',a.appid);const d=Buffer.concat(z).toString(),e=new Error(k.config.COMPILE_WXML_ERROR_CONSOLE);return e.code=f,e.msgForConsole=d,n(e)}),x.stdout.on('data',(a)=>{y.push(a)}),x.stderr.on('data',(a)=>{z.push(a)})})}const b=require('path'),c=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),d=require('./d28a711224425b00101635efe1034c99.js'),{spawn:e}=require('child_process'),{TRANS_WXML_JS_ERR:f}=require('./949d8235c744ced2a80121e4dba34c28.js'),g=require('./da7c31daaf542cf1796023d8e344b98a.js'),h=require('./162bf2ee28b76d3b3d95b685cede4146.js'),i=require('./6b5520e429c60abf5d2f924c0fa05fd0.js'),j=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),k=require('./common/locales/index.js'),l=require('./2e9637e8a0816a626f7db9a0dee5efe8.js');let m;const n=(a,b)=>{let c=m.getAllWXMLFiles(),d=m.getAllWXSFiles();if(a.subPackages){const e=c.filter((b)=>{let c=!0;return a.subPackages.forEach((a)=>{0==b.indexOf(a.root)&&(c=!1)}),c}),f=d.filter((b)=>{let c=!0;return a.subPackages.forEach((a)=>{0==b.indexOf(a.root)&&(c=!1)}),c});b?(c=e.concat(c.filter((a)=>0==a.indexOf(b.root))),d=f.concat(d.filter((a)=>0==a.indexOf(b.root)))):(c=e,d=f)}return{wxmlFiles:c,wxsFiles:d}};module.exports=async function(b,d={}){m=await h(b);const e=await c(b),{app:f,page:g,cut:i}=d;let k,n='main';if(!f){if(k=j.checkIsInSubPackage(e,g)||'',!k)return{code:'',name:'$gwx'};n=`sub_${k.root}`}await l.init(b);const o=i?l.CACHE_KEYS.WXML_CUT:l.CACHE_KEYS.WXML_COMPLETE,p=n;let q=l.get(o,p);return q||(q=await a(b,{appConfig:e,config:k,type:i?'-xc':'-cc'}),l.set(o,p,q)),q}}(require('lazyload'),require);
import"./assets/modulepreload-polyfill-3cfb730f.js";import{i}from"./assets/vendor-ceb9b81e.js";const s=document.querySelector(".form");function a(r){r.preventDefault();const n=s.delay.value,o=s.state.value,t=Number(n);new Promise((e,m)=>{setTimeout(()=>{o==="fulfilled"?e(t):o==="rejected"&&m(t)},t)}).then(e=>{i.success({message:`✅ Fulfilled promise in ${e}ms`,position:"bottomCenter"})}).catch(e=>{i.error({message:`❌ Rejected promise in ${e}ms`,position:"bottomCenter"})})}s.addEventListener("submit",a);
//# sourceMappingURL=commonHelpers2.js.map

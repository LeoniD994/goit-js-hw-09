import"./assets/styles-c8fc8055.js";const e={email:"",message:""},s=document.querySelector(".feedback-form"),l=s.querySelector('input[name="email"]'),o=s.querySelector('textarea[name="message"]');window.addEventListener("submit",()=>{const a=localStorage.getItem("feedback-form-state");if(a){const t=JSON.parse(a);l.value=t.email,o.value=t.message}});s.addEventListener("input",a=>{const{name:t,value:r}=a.target;e[t]=r,localStorage.setItem("feedback-form-state",JSON.stringify(e))});s.addEventListener("submit",a=>{if(a.preventDefault(),e.email===""||e.message===""){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),l.value="",o.value="",e.email="",e.message=""});
//# sourceMappingURL=commonHelpers2.js.map
import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={formEl:document.querySelector(".form"),inputDelay:document.querySelector(".input-delay"),inputFulf:document.querySelector(".input-fulf"),inputReje:document.querySelector(".input-reje"),btnEl:document.querySelector(".btn-ntf")};e.formEl.addEventListener("submit",u=>{setTimeout(()=>{r(e.inputDelay.value,e.inputFulf.value||e.inputReje.value).then(t=>console.log(t)).catch(t=>console.error(t))},e.inputDelay.value),u.preventDefault()});function r(u,t){if(t===e.inputFulf.value)return Promise.resolve(`✅ Fulfilled promise in ${u}ms`);if(t===e.inputReje.value)return Promise.reject(`❌ Rejected promise in ${u}ms`)}
//# sourceMappingURL=commonHelpers2.js.map
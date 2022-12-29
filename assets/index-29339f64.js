(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function c(){const o=document.querySelector("button");o.disabled=!0,o.innerHTML='Dreaming... <span class="spinner">😴</span>'}function m(){const o=document.querySelector("button");o.disabled=!1,o.innerHTML="Dream"}function l(o){const n=`
    <label for="prompt">Prompt</label>
    <textarea name="prompt" maxlength="160"></textarea>
    <button type="submit">Dream</button>
  `;o.innerHTML=n,o.addEventListener("submit",async a=>{a.preventDefault(),c();const i="https://dreamify-api.netlify.app/",e=new FormData(o),t=await fetch(i+".netlify/functions/api/v1/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e.get("prompt")})});if(t.ok){const{image:r}=await t.json(),s=document.querySelector("#home__container");s.innerHTML=`<img src="${r}" alt="" />`}else{const r=await t.text();alert(r)}m()})}function u(o){const n=`
    <div class="home">
      <div class="home__title">
        <h1>dreamify</h1>
        <p>Create images from scratch based on a text prompt</p>
      </div>

      <div id="home__container" class="home__container">
        <div>Your image will appear here</div>
      </div>

      <form id="home__form" class="home__form"></form>
    </div>
  `;o.innerHTML=n,l(document.querySelector("#home__form"))}document.querySelector("#app").innerHTML=`
  <main id="main"></main>
`;u(document.querySelector("#main"));

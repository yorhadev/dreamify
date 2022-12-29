(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function c(r){const o=`
    <label for="prompt">Prompt</label>
    <textarea name="prompt" maxlength="160"></textarea>
    <button type="submit">Dream</button>
  `;r.innerHTML=o,r.addEventListener("submit",async a=>{a.preventDefault();const i="https://dreamify-api.netlify.app/",e=new FormData(r),t=await fetch(i+".netlify/functions/api/v1/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e.get("prompt")})}),{image:n}=await t.json(),s=document.querySelector("#home__container");s.innerHTML=`<img src="${n}" />`})}function m(r){const o=`
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
  `;r.innerHTML=o,c(document.querySelector("#home__form"))}document.querySelector("#app").innerHTML=`
  <main id="main"></main>
`;m(document.querySelector("#main"));

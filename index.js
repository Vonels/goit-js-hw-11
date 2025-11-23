import{a as c,S as y,i as n}from"./assets/vendor-CNqCr-V-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="53269765-cd39f78e40f469f4b1e9f0733",h="https://pixabay.com/api/";c.defaults.baseURL=h;async function b(o){return(await c.get("",{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}const u=document.querySelector(".gallery");let l;function L(){u.innerHTML=""}function w(o){const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:a,comments:d,downloads:g})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img class="gallery-image" src="${s}" alt="${e}" loading="lazy" />
          </a>

          <ul class="info">
            <li><b>Likes</b> ${t}</li>
            <li><b>Views</b> ${a}</li>
            <li><b>Comments</b> ${d}</li>
            <li><b>Downloads</b> ${g}</li>
          </ul>
        </li>
      `).join("");u.insertAdjacentHTML("beforeend",r),l?l.refresh():l=new y(".gallery a",{captionsData:"alt",captionDelay:250})}const f=document.querySelector(".form"),m=document.querySelector(".loader");f.addEventListener("submit",S);async function S(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query 🙂",position:"topRight"});return}L(),P();try{const s=await b(r);if(!s.length){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}w(s)}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{q(),f.reset()}}function P(){m.classList.remove("boost")}function q(){m.classList.add("boost")}
//# sourceMappingURL=index.js.map

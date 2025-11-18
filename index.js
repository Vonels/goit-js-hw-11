import{a as l,S as m,i as n}from"./assets/vendor-BkVuWn-o.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="53269765-cd39f78e40f469f4b1e9f0733",y="https://pixabay.com/api/";l.defaults.baseURL=y;async function d(a){return(await l.get("",{params:{key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}const c=document.querySelector(".gallery");function h(){c.innerHTML=""}function b(a){const r=a.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:i,comments:f,downloads:g})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img class="gallery-image" src="${o}" alt="${e}" loading="lazy" />
          </a>

          <ul class="info">
            <li><b>Likes</b> ${t}</li>
            <li><b>Views</b> ${i}</li>
            <li><b>Comments</b> ${f}</li>
            <li><b>Downloads</b> ${g}</li>
          </ul>
        </li>
      `).join("");lightbox?lightbox.refresh():lightbox=new SimpleLightbox(".gallery a",{captionsData:"alt",captionDelay:250}),c.insertAdjacentHTML("beforeend",r)}new m(".gallery a",{captionsData:"alt",captionDelay:250});const u=document.querySelector(".form");u.addEventListener("submit",L);async function L(a){a.preventDefault();const r=a.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query 🙂",position:"topRight"});return}h();try{const o=await d(r);if(!o.length){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o)}catch(o){n.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}finally{u.reset()}}
//# sourceMappingURL=index.js.map

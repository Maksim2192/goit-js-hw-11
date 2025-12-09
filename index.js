import{a as f,S as p,i as n}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="53621829-cf19c8a21cebf8f46d85bee56",y="https://pixabay.com/api/";async function h(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(y,{params:o})).data}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const o=s.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}">
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t.likes}</p>
          <p><b>Views:</b> ${t.views}</p>
          <p><b>Comments:</b> ${t.comments}</p>
          <p><b>Downloads:</b> ${t.downloads}</p>
        </div>
      </li>
      `).join("");u.insertAdjacentHTML("beforeend",o),g.refresh()}function L(){u.innerHTML=""}function w(){d.classList.remove("hidden")}function c(){d.classList.add("hidden")}const l=document.querySelector(".form");l.addEventListener("submit",async s=>{s.preventDefault();const o=l.elements["search-text"].value.trim();if(!o){n.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}L(),w();try{const t=await h(o);if(t.hits.length===0){c(),n.warning({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(t.hits)}catch{n.error({title:"Error",message:"Something went wrong. Try again later.",position:"topRight"})}finally{c()}});
//# sourceMappingURL=index.js.map

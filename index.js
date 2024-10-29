import{a as h,S as g,i as n}from"./assets/vendor-C4-ZuMk8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();async function v(r){return(await h.get("https://pixabay.com/api",{params:r})).data}let d=null;async function w(r){const t=document.querySelector(".photo-list"),s=await r.map(o=>`
      <li class="photo-item">
        <a href="${o.largeImageURL}" class="gallery-item">
          <img src="${o.webformatURL}" alt="${o.tags}" width="360" height="152" />
        </a>
        <div class="info">
          <div class="info-item">
            <p>Likes</p>
            <p>${o.likes}</p>
          </div>
          <div class="info-item">
            <p>Views</p>
            <p>${o.views}</p>
          </div>
          <div class="info-item">
            <p>Comments</p>
            <p>${o.comments}</p>
          </div>
          <div class="info-item">
            <p>Downloads</p>
            <p>${o.downloads}</p>
          </div>
        </div>
      </li>`).join("");t.insertAdjacentHTML("beforeend",s),d?d.refresh():d=new g(".gallery-item",{captionsData:"alt",captionDelay:250})}const b=document.querySelector(".form"),L=document.querySelector(".search-input"),u=document.querySelector(".loader"),l=document.querySelector(".load-button"),S=document.querySelector(".photo-list");let a=1,f=15,m=0,p="";b.addEventListener("submit",async r=>{r.preventDefault(),p=L.value.trim(),a=1,S.innerHTML="",l.style.display="none",await y()});l.addEventListener("click",async()=>{await y()});async function y(){if(!p)return;u.style.display="block";const r={key:"46706614-1dc051161d475bf769026fdc5",q:p,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:f,page:a};try{const t=await v(r);if(u.style.display="none",t.hits.length===0){n.error({title:"Error",message:"No images found. Try again with a different query."});return}m=t.totalHits,await w(t.hits),a++;const s=document.querySelector(".photo-item");if(s){const o=s.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}a*f>=m?(l.style.display="none",n.info({title:"End of results",message:"We're sorry, but you've reached the end of search results."})):l.style.display="block"}catch(t){u.style.display="none",n.error({title:"Error",message:`Something went wrong. Error: ${t.message}`})}}n.settings({timeout:1e4,position:"topRight",resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX"});
//# sourceMappingURL=index.js.map

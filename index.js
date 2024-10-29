import{a as h,S as g,i}from"./assets/vendor-C4-ZuMk8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();async function v(s){const t=await h.get("https://pixabay.com/api",{params:s});return console.log(t.config.url),t.data}let d=null;async function w(s){const t=document.querySelector(".photo-list"),l=await s.map(r=>`
      <li class="photo-item">
        <a href="${r.largeImageURL}" class="gallery-item">
          <img src="${r.webformatURL}" alt="${r.tags}" width="360" height="152" />
        </a>
        <div class="info">
          <div class="info-item">
            <p>Likes</p>
            <p>${r.likes}</p>
          </div>
          <div class="info-item">
            <p>Views</p>
            <p>${r.views}</p>
          </div>
          <div class="info-item">
            <p>Comments</p>
            <p>${r.comments}</p>
          </div>
          <div class="info-item">
            <p>Downloads</p>
            <p>${r.downloads}</p>
          </div>
        </div>
      </li>`).join("");t.insertAdjacentHTML("beforeend",l),d?d.refresh():d=new g(".gallery-item",{captionsData:"alt",captionDelay:250})}const b=document.querySelector(".form"),L=document.querySelector(".search-input"),u=document.querySelector(".loader"),a=document.querySelector(".load-button"),S=document.querySelector(".photo-list");let n=1,f=15,m=0,p="";b.addEventListener("submit",async s=>{s.preventDefault(),p=L.value.trim(),n=1,S.innerHTML="",a.style.display="none",await y()});a.addEventListener("click",async()=>{await y()});async function y(){if(!p)return;u.style.display="block";const s={key:"46706614-1dc051161d475bf769026fdc5",q:p,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:f,page:n};try{const t=await v(s);if(u.style.display="none",t.hits.length===0){i.error({title:"Error",message:"No images found. Try again with a different query."});return}m=t.totalHits,await w(t.hits),n++,n*f>=m?(a.style.display="none",i.info({title:"End of results",message:"We're sorry, but you've reached the end of search results."})):a.style.display="block"}catch(t){u.style.display="none",i.error({title:"Error",message:`Something went wrong. Error: ${t.message}`})}}i.settings({timeout:1e4,position:"topRight",resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX"});
//# sourceMappingURL=index.js.map

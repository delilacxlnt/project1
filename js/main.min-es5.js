!function(){let e=document.querySelector(".header");window.onscroll=()=>{window.pageYOffset>50?e.classList.add("header_active"):e.classList.remove("header_active")}}(),function(){let e=document.querySelector(".burger"),t=document.querySelector(".header__nav"),l=document.querySelector(".header__nav-close"),r=document.querySelectorAll(".header__link");if(e.addEventListener("click",()=>{t.classList.add("header__nav_active")}),l.addEventListener("click",()=>{t.classList.remove("header__nav_active")}),window.innerWidth<=768)for(let c=0;c<r.length;c+=1)r[c].addEventListener("click",()=>{t.classList.remove("header__nav_active")})}(),function(){let e=function(e,t){let l=document.querySelector(".header").clientHeight,r=document.querySelector(e).getBoundingClientRect().top-l,c=window.pageYOffset,n=null,a=function(e){var l,i,o,s;null===n&&(n=e);let d=e-n,u=(l=d,i=c,o=r,s=t,(l/=s/2)<1?o/2*l*l+i:-o/2*(--l*(l-2)-1)+i);window.scrollTo(0,u),d<t&&requestAnimationFrame(a)};requestAnimationFrame(a)};!function(){let t=document.querySelectorAll(".js-scroll");t.forEach(t=>{t.addEventListener("click",function(){let t=this.getAttribute("href");e(t,1e3)})})}()}();
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();const d=[{title:"Fresh Plates",items:[{name:"Appam (1/2 pcs)",price:"₹25/40"},{name:"Plain Idli (2/4 pcs)",price:"₹30/50"},{name:"Veggies Idli (2/4 pcs)",price:"₹35/60"},{name:"Paddu (6/12 pcs)",price:"₹50/90"},{name:"Mix Veg Uttapam (1 pc)",price:"₹70"},{name:"Aloo Parantha (1 pc)",price:"₹30"},{name:"Aloo Pyaaz Parantha (1 pc)",price:"₹35"}]},{title:"Liquids",items:[{name:"Aam Panna",price:"₹XX"},{name:"Mattha",price:"₹XX"},{name:"Lassi",price:"₹XX"}]},{title:"Sides",items:[{name:"Butter (10 g)",price:"₹10"},{name:"Curd (60 ml)",price:"₹10"},{name:"Ghee (5–6 ml)",price:"₹5"}]}],s={whatsapp:"https://whatsapp.com/channel/0029Vb6KjsJ1SWt2pEDw5f1z",phone:["728-200-2674","789-589-9800"],address:"Opposite Saanwara Sweets, Sec - 14, Panchkula, HR - 134103",email:"founder@mithahara.com"},u=["We are currently on monsoon break. We will be back once the weather settles."],h=[{question:"What is Mithahara?",answer:"Mithahara serves healthy, hygienic, sustainable vegetarian food with eco-friendly plating. Our menu features fresh plates like Appam, Idli, Uttapam, Paranthas, and more, prepared daily."},{question:"Since when are you serving?",answer:"We started on 11th January 2025!"},{question:"Where are you located?",answer:"We currently serve in Sector 14, Panchkula — opposite Saanwara Sweets."},{question:"Do you take bulk orders?",answer:"Yes. We accept bulk orders for offices, events, and gatherings. Reach us on WhatsApp to plan your order."}];class m{constructor(){this.isDarkTheme=localStorage.getItem("theme")==="dark",this.init()}init(){console.log("🌟 Mithahara Vite App Initialized"),this.isDarkTheme||document.body.classList.add("light-theme"),this.updateThemeIcon(),setTimeout(()=>{console.log("Starting to populate sections..."),this.populateMenu(),this.populateContacts(),this.populateFAQs(),console.log("All sections populated")},200),this.setupThemeToggle(),this.setupScrollEffects(),this.setupButtonAnimations(),this.setupNotifications(),u.length>0?setTimeout(()=>{this.showNotification(u[0],"warning")},1500):setTimeout(()=>{this.showNotification("Welcome to Mithahara! 🌟","success")},1e3)}setupThemeToggle(){const e=document.querySelector(".theme-toggle");e&&e.addEventListener("click",()=>{this.toggleTheme()})}toggleTheme(){this.isDarkTheme=!this.isDarkTheme,document.body.classList.toggle("light-theme",!this.isDarkTheme),localStorage.setItem("theme",this.isDarkTheme?"dark":"light"),this.updateThemeIcon(),this.showNotification(`Switched to ${this.isDarkTheme?"dark":"light"} theme`,"info")}updateThemeIcon(){const e=document.querySelector(".theme-toggle i");e&&(e.className=this.isDarkTheme?"fas fa-moon":"fas fa-sun")}setupScrollEffects(){window.addEventListener("scroll",()=>{const e=window.pageYOffset,n=document.querySelector(".hero-section");if(n){const t=e*-.5;n.style.transform=`translateY(${t}px)`}document.querySelectorAll(".feature-card").forEach((t,i)=>{const a=t.offsetTop,r=t.offsetHeight,l=window.innerHeight;window.pageYOffset+l>a+r*.1&&(t.style.opacity="1",t.style.transform="translateY(0)")})})}setupButtonAnimations(){document.querySelectorAll(".cta-button").forEach(n=>{n.addEventListener("click",o=>{const t=document.createElement("span"),i=n.getBoundingClientRect(),a=Math.max(i.width,i.height),r=o.clientX-i.left-a/2,l=o.clientY-i.top-a/2;if(t.style.cssText=`
          position: absolute;
          width: ${a}px;
          height: ${a}px;
          left: ${r}px;
          top: ${l}px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        `,!document.querySelector("#ripple-animation")){const c=document.createElement("style");c.id="ripple-animation",c.textContent=`
            @keyframes ripple {
              to {
                transform: scale(4);
                opacity: 0;
              }
            }
          `,document.head.appendChild(c)}n.style.position="relative",n.style.overflow="hidden",n.appendChild(t),setTimeout(()=>{t.remove()},600)}),n.textContent.includes("View Menu")?n.addEventListener("click",o=>{o.preventDefault(),console.log("View Menu clicked"),this.handleViewMenu()}):n.textContent.includes("Contact Us")&&n.addEventListener("click",o=>{o.preventDefault(),console.log("Contact Us clicked"),this.handleContactUs()})})}populateMenu(){const e=document.getElementById("menu-grid");if(!e){console.error("Menu grid element not found!");return}console.log("Populating menu with data:",d),e.innerHTML=d.map(n=>`
      <div class="menu-category">
        <h3 class="menu-category-title">${n.title}</h3>
        <ul class="menu-item-list">
          ${n.items.map(o=>`
            <li class="menu-item">
              <span class="menu-item-name">${o.name}</span>
              <span class="menu-item-price">${o.price}</span>
            </li>
          `).join("")}
        </ul>
      </div>
    `).join(""),console.log("Menu populated successfully")}populateContacts(){const e=document.getElementById("contact-grid");if(!e)return;const n=[{icon:"fab fa-whatsapp",label:"WhatsApp",value:`<a href="${s.whatsapp}" target="_blank">Join Channel</a>`},{icon:"fas fa-phone",label:"Phone",value:s.phone.join("<br>")},{icon:"fas fa-map-marker-alt",label:"Address",value:s.address},{icon:"fas fa-envelope",label:"Email",value:`<a href="mailto:${s.email}">${s.email}</a>`}];e.innerHTML=n.map(o=>`
      <div class="contact-item">
        <div class="contact-icon">
          <i class="${o.icon}"></i>
        </div>
        <div class="contact-label">${o.label}</div>
        <div class="contact-value">${o.value}</div>
      </div>
    `).join("")}populateFAQs(){const e=document.getElementById("faq-list");e&&(e.innerHTML=h.map((n,o)=>`
      <div class="faq-item">
        <button class="faq-question" data-index="${o}">
          <span>${n.question}</span>
          <i class="fas fa-chevron-down faq-toggle"></i>
        </button>
        <div class="faq-answer" id="faq-answer-${o}">
          ${n.answer}
        </div>
      </div>
    `).join(""),document.querySelectorAll(".faq-question").forEach(n=>{n.addEventListener("click",o=>{const t=parseInt(o.currentTarget.dataset.index);this.toggleFAQ(t,o.currentTarget)})}))}toggleFAQ(e,n){const o=document.getElementById(`faq-answer-${e}`);if(!n||!o)return;const t=n.classList.contains("active");document.querySelectorAll(".faq-question").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".faq-answer").forEach(i=>i.classList.remove("active")),t||(n.classList.add("active"),o.classList.add("active"))}handleViewMenu(){console.log("Scrolling to menu section...");const e=document.querySelector(".menu-section");e?(e.scrollIntoView({behavior:"smooth",block:"start"}),console.log("Scrolled to menu section")):console.error("Menu section not found!")}handleContactUs(){console.log("Scrolling to contact section...");const e=document.querySelector(".contact-section");e?(e.scrollIntoView({behavior:"smooth",block:"start"}),console.log("Scrolled to contact section")):console.error("Contact section not found!")}setupNotifications(){if(!document.querySelector("#notification-container")){const e=document.createElement("div");e.id="notification-container",e.style.cssText=`
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        display: flex;
        flex-direction: column;
        gap: 10px;
        pointer-events: none;
      `,document.body.appendChild(e)}}showNotification(e,n="info"){const o=document.querySelector("#notification-container");if(!o)return;const t=document.createElement("div"),i={success:"#10b981",error:"#ef4444",warning:"#f59e0b",info:"#3b82f6"};t.style.cssText=`
      background: ${i[n]||i.info};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      transform: translateX(100%);
      transition: transform 0.3s ease;
      pointer-events: auto;
      cursor: pointer;
      max-width: 300px;
      font-weight: 500;
    `,t.textContent=e,o.appendChild(t),setTimeout(()=>{t.style.transform="translateX(0)"},100);const a=setTimeout(()=>{this.removeNotification(t)},4e3);t.addEventListener("click",()=>{clearTimeout(a),this.removeNotification(t)})}removeNotification(e){e.style.transform="translateX(100%)",setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},300)}static formatDate(e){return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(e)}static debounce(e,n){let o;return function(...i){const a=()=>{clearTimeout(o),e(...i)};clearTimeout(o),o=setTimeout(a,n)}}static throttle(e,n){let o;return function(...i){o||(e.apply(this,i),o=!0,setTimeout(()=>o=!1,n))}}}document.addEventListener("DOMContentLoaded",()=>{window.app=new m});document.addEventListener("visibilitychange",()=>{!document.hidden&&window.app&&console.log("Welcome back to Mithahara! 👋")});window.MithaharaApp=m;

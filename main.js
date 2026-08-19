import './style.css';
import { menu, contacts, faqs, apps } from './data.js';

class MithaharaApp {
  constructor() {
    this.init();
    this.renderMenu();
    this.renderContacts();
    this.renderFAQ();
    this.renderApps();
    this.setupEventListeners();
  }

  init() {
    process.env.NODE_ENV === 'development' && console.log('Mithahara App Initialized');
  }

  renderMenu() {
    const menuGrid = document.querySelector('.menu-grid');
    if (!menuGrid) return;
    
    menuGrid.innerHTML = menu.map(category => `
      <div class="menu-category">
        <h3 class="menu-category-title">${category.title}</h3>
        <div class="menu-items">
          ${category.items.map(item => `
            <div class="menu-item">
              <span class="menu-item-name">${item.name}</span>
              <span class="menu-item-price">${item.price}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  renderContacts() {
    const contactGrid = document.querySelector('.contact-grid');
    if (!contactGrid) return;

    contactGrid.innerHTML = `
      <div class="contact-card">
        <span class="contact-email">${contacts.email}</span>
        <div class="contact-address">${contacts.address}</div>
        <a class="contact-whatsapp" href="${contacts.whatsapp}" target="_blank" rel="noopener noreferrer">→ join our WhatsApp channel</a>
      </div>
    `;
  }

  renderFAQ() {
    const faqList = document.querySelector('.faq-list');
    if (!faqList) return;

    faqList.innerHTML = faqs.map((faq, index) => `
      <div class="faq-item">
        <button class="faq-question" data-index="${index}">
          <span class="q-tag">Q</span>
          <span class="faq-question-text">${faq.question}</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" id="faq-answer-${index}">
          <p>${faq.answer}</p>
        </div>
      </div>
    `).join('');
  }

  renderApps() {
    const appsGrid = document.querySelector('.apps-grid');
    if (!appsGrid) return;

    appsGrid.innerHTML = apps.map(app => `
      <a class="app-card" href="${app.url}" target="_blank" rel="noopener noreferrer">
        <div class="app-card-head">
          <span class="app-card-name">${app.name}</span>
          <span class="log-tag">${app.platform}</span>
        </div>
        <p class="app-card-tagline">${app.tagline}</p>
      </a>
    `).join('');
  }

  setupEventListeners() {
    document.addEventListener('click', (e) => {
      const questionBtn = e.target.closest('.faq-question');
      if (questionBtn) {
        const index = questionBtn.dataset.index;
        const answer = document.getElementById(`faq-answer-${index}`);
        const icon = questionBtn.querySelector('.faq-icon');
        
        if (answer) {
          answer.classList.toggle('active');
          icon.textContent = answer.classList.contains('active') ? '−' : '+';
        }
      }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new MithaharaApp();
});

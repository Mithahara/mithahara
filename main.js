import './style.css';
import { menuCategories, contacts, faqs } from './data.js';

class MithaharaApp {
  constructor() {
    this.init();
    this.renderMenu();
    this.renderContacts();
    this.renderFAQ();
    this.setupEventListeners();
  }

  init() {
    process.env.NODE_ENV === 'development' && console.log('Mithahara App Initialized');
  }

  renderMenu() {
    const menuGrid = document.querySelector('.menu-grid');
    if (!menuGrid) return;
    
    menuGrid.innerHTML = menuCategories.map(category => `
      <div class="menu-category">
        <h3 class="menu-category-title">${category.name}</h3>
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

    contactGrid.innerHTML = contacts.map(contact => `
      <div class="contact-item">
        <div class="contact-icon">${this.getIconForType(contact.type)}</div>
        <h3 class="contact-label">${contact.label}</h3>
        <div class="contact-details">
          ${Array.isArray(contact.value) 
            ? contact.value.map(v => `<p>${v}</p>`).join('') 
            : `<p>${contact.value}</p>`}
        </div>
      </div>
    `).join('');
  }

  renderFAQ() {
    const faqList = document.querySelector('.faq-list');
    if (!faqList) return;

    faqList.innerHTML = faqs.map((faq, index) => `
      <div class="faq-item">
        <button class="faq-question" data-index="${index}">
          <span>${faq.question}</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" id="faq-answer-${index}">
          <p>${faq.answer}</p>
        </div>
      </div>
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

  getIconForType(type) {
    const icons = {
      whatsapp: '💬',
      phone: '📞',
      address: '📍',
      email: '✉️'
    };
    return icons[type] || '•';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new MithaharaApp();
});

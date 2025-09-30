// Mithahara - Vanilla JavaScript Application

// Import data from external module
import { menu, contacts, faqs, notifications } from './data.js'

class MithaharaApp {
  constructor() {
    this.isDarkTheme = localStorage.getItem('theme') === 'dark'
    this.init()
  }

  init() {
    console.log('🌟 Mithahara Vite App Initialized')
    
    // Apply saved theme
    if (!this.isDarkTheme) {
      document.body.classList.add('light-theme')
    }
    this.updateThemeIcon()
    
    // Populate data sections after DOM is ready
    setTimeout(() => {
      console.log('Starting to populate sections...')
      this.populateMenu()
      this.populateContacts()
      this.populateFAQs()
      console.log('All sections populated')
    }, 200)
    
    // Setup event listeners
    this.setupThemeToggle()
    this.setupScrollEffects()
    this.setupButtonAnimations()
    this.setupNotifications()
    
    // Show monsoon break notification if applicable
    if (notifications.length > 0) {
      setTimeout(() => {
        this.showNotification(notifications[0], 'warning')
      }, 1500)
    } else {
      // Show welcome notification
      setTimeout(() => {
        this.showNotification('Welcome to Mithahara! 🌟', 'success')
      }, 1000)
    }
  }

  setupThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle')
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        this.toggleTheme()
      })
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme
    document.body.classList.toggle('light-theme', !this.isDarkTheme)
    
    // Save preference
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light')
    
    // Update icon
    this.updateThemeIcon()
    
    // Show notification
    this.showNotification(
      `Switched to ${this.isDarkTheme ? 'dark' : 'light'} theme`, 
      'info'
    )
  }

  updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-toggle i')
    if (themeIcon) {
      themeIcon.className = this.isDarkTheme ? 'fas fa-moon' : 'fas fa-sun'
    }
  }

  setupScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset
      const heroSection = document.querySelector('.hero-section')
      
      if (heroSection) {
        const rate = scrolled * -0.5
        heroSection.style.transform = `translateY(${rate}px)`
      }
      
      // Fade in animation for feature cards
      const featureCards = document.querySelectorAll('.feature-card')
      featureCards.forEach((card, index) => {
        const cardTop = card.offsetTop
        const cardHeight = card.offsetHeight
        const windowHeight = window.innerHeight
        const scrollTop = window.pageYOffset
        
        if (scrollTop + windowHeight > cardTop + cardHeight * 0.1) {
          card.style.opacity = '1'
          card.style.transform = 'translateY(0)'
        }
      })
    })
  }

  setupButtonAnimations() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.cta-button')
    
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        // Create ripple effect
        const ripple = document.createElement('span')
        const rect = button.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2
        
        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        `
        
        // Add ripple animation CSS if not exists
        if (!document.querySelector('#ripple-animation')) {
          const style = document.createElement('style')
          style.id = 'ripple-animation'
          style.textContent = `
            @keyframes ripple {
              to {
                transform: scale(4);
                opacity: 0;
              }
            }
          `
          document.head.appendChild(style)
        }
        
        button.style.position = 'relative'
        button.style.overflow = 'hidden'
        button.appendChild(ripple)
        
        // Remove ripple after animation
        setTimeout(() => {
          ripple.remove()
        }, 600)
      })
      
      // Handle button actions
      if (button.textContent.includes('View Menu')) {
        button.addEventListener('click', (e) => {
          e.preventDefault()
          console.log('View Menu clicked')
          this.handleViewMenu()
        })
      } else if (button.textContent.includes('Contact Us')) {
        button.addEventListener('click', (e) => {
          e.preventDefault()
          console.log('Contact Us clicked')
          this.handleContactUs()
        })
      }
    })
  }

  populateMenu() {
    const menuGrid = document.getElementById('menu-grid')
    if (!menuGrid) {
      console.error('Menu grid element not found!')
      return
    }

    console.log('Populating menu with data:', menu)
    
    menuGrid.innerHTML = menu.map(category => `
      <div class="menu-category">
        <h3 class="menu-category-title">${category.title}</h3>
        <ul class="menu-item-list">
          ${category.items.map(item => `
            <li class="menu-item">
              <span class="menu-item-name">${item.name}</span>
              <span class="menu-item-price">${item.price}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('')
    
    console.log('Menu populated successfully')
  }

  populateContacts() {
    const contactGrid = document.getElementById('contact-grid')
    if (!contactGrid) return

    const contactItems = [
      {
        icon: 'fab fa-whatsapp',
        label: 'WhatsApp',
        value: `<a href="${contacts.whatsapp}" target="_blank">Join Channel</a>`
      },
      {
        icon: 'fas fa-phone',
        label: 'Phone',
        value: contacts.phone.join('<br>')
      },
      {
        icon: 'fas fa-map-marker-alt',
        label: 'Address',
        value: contacts.address
      },
      {
        icon: 'fas fa-envelope',
        label: 'Email',
        value: `<a href="mailto:${contacts.email}">${contacts.email}</a>`
      }
    ]

    contactGrid.innerHTML = contactItems.map(item => `
      <div class="contact-item">
        <div class="contact-icon">
          <i class="${item.icon}"></i>
        </div>
        <div class="contact-label">${item.label}</div>
        <div class="contact-value">${item.value}</div>
      </div>
    `).join('')
  }

  populateFAQs() {
    const faqList = document.getElementById('faq-list')
    if (!faqList) return

    faqList.innerHTML = faqs.map((faq, index) => `
      <div class="faq-item">
        <button class="faq-question" data-index="${index}">
          <span>${faq.question}</span>
          <i class="fas fa-chevron-down faq-toggle"></i>
        </button>
        <div class="faq-answer" id="faq-answer-${index}">
          ${faq.answer}
        </div>
      </div>
    `).join('')

    // Add click event listeners to FAQ questions
    document.querySelectorAll('.faq-question').forEach(button => {
      button.addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.dataset.index)
        this.toggleFAQ(index, e.currentTarget)
      })
    })
  }

  toggleFAQ(index, questionElement) {
    const answer = document.getElementById(`faq-answer-${index}`)
    
    if (!questionElement || !answer) return

    const isActive = questionElement.classList.contains('active')
    
    // Close all other FAQs
    document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'))
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('active'))
    
    // Toggle current FAQ
    if (!isActive) {
      questionElement.classList.add('active')
      answer.classList.add('active')
    }
  }

  handleViewMenu() {
    console.log('Scrolling to menu section...')
    // Smooth scroll to menu section
    const menuSection = document.querySelector('.menu-section')
    if (menuSection) {
      menuSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
      console.log('Scrolled to menu section')
    } else {
      console.error('Menu section not found!')
    }
  }

  handleContactUs() {
    console.log('Scrolling to contact section...')
    // Smooth scroll to contact section
    const contactSection = document.querySelector('.contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
      console.log('Scrolled to contact section')
    } else {
      console.error('Contact section not found!')
    }
  }

  setupNotifications() {
    // Create notification container if it doesn't exist
    if (!document.querySelector('#notification-container')) {
      const container = document.createElement('div')
      container.id = 'notification-container'
      container.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        display: flex;
        flex-direction: column;
        gap: 10px;
        pointer-events: none;
      `
      document.body.appendChild(container)
    }
  }

  showNotification(message, type = 'info') {
    const container = document.querySelector('#notification-container')
    if (!container) return

    const notification = document.createElement('div')
    const colors = {
      success: '#10b981',
      error: '#ef4444',
      warning: '#f59e0b',
      info: '#3b82f6'
    }

    notification.style.cssText = `
      background: ${colors[type] || colors.info};
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
    `
    
    notification.textContent = message
    container.appendChild(notification)

    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)'
    }, 100)

    // Auto remove after 4 seconds
    const timeoutId = setTimeout(() => {
      this.removeNotification(notification)
    }, 4000)

    // Remove on click
    notification.addEventListener('click', () => {
      clearTimeout(timeoutId)
      this.removeNotification(notification)
    })
  }

  removeNotification(notification) {
    notification.style.transform = 'translateX(100%)'
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 300)
  }

  // Utility methods for future features
  static formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date)
  }

  static debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  static throttle(func, limit) {
    let inThrottle
    return function executedFunction(...args) {
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.app = new MithaharaApp()
})

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && window.app) {
    console.log('Welcome back to Mithahara! 👋')
  }
})

// Make MithaharaApp globally available
window.MithaharaApp = MithaharaApp
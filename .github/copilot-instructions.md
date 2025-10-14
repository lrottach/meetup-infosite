# Static Website Development with HTML & Vanilla JavaScript

## Purpose / Context

This instruction defines best practices for developing modern, responsive static websites using semantic HTML5 and vanilla JavaScript. The focus is on creating fast, accessible, and maintainable websites with modern design principles while avoiding dependencies on frameworks or build tools.

## Best Practices

### Architecture & Design Principles

- **Progressive Enhancement**: Build core functionality with HTML, enhance with CSS, then add JavaScript for interactivity
- **Semantic HTML**: Use appropriate HTML5 semantic elements for better accessibility and SEO
- **Separation of Concerns**: Keep structure (HTML), presentation (CSS), and behavior (JavaScript) separate
- **Mobile-First Design**: Design for mobile devices first, then enhance for larger screens
- **Performance First**: Optimize for fast loading times and minimal resource usage
- **Accessibility**: Ensure websites are usable by everyone, including users with disabilities

### HTML Structure

- **Semantic Elements**: Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- **Proper Heading Hierarchy**: Use h1-h6 tags in logical order for document structure
- **Form Accessibility**: Include proper labels, fieldsets, and ARIA attributes
- **Image Optimization**: Use appropriate formats (WebP, AVIF) with fallbacks and proper alt text
- **Meta Tags**: Include viewport, description, and Open Graph tags
- **Valid HTML**: Ensure HTML validates according to W3C standards

### Modern CSS Design

- **CSS Grid & Flexbox**: Use modern layout techniques for responsive designs
- **CSS Custom Properties**: Use CSS variables for consistent theming and easy maintenance
- **Container Queries**: Use @container for component-based responsive design
- **Modern Units**: Use relative units (rem, em, vw, vh, ch) for scalability
- **CSS Logical Properties**: Use logical properties for better internationalization
- **Animation & Transitions**: Use CSS animations for smooth user interactions

### Vanilla JavaScript

- **ES6+ Features**: Use modern JavaScript features (modules, async/await, destructuring)
- **DOM Manipulation**: Use efficient DOM querying and manipulation techniques
- **Event Delegation**: Use event delegation for dynamic content
- **Web APIs**: Leverage browser APIs (Fetch, Local Storage, Intersection Observer)
- **Error Handling**: Implement proper error handling and user feedback
- **Performance**: Optimize JavaScript for minimal impact on page performance

### Security

- **Content Security Policy**: Implement CSP headers to prevent XSS attacks
- **Input Validation**: Sanitize and validate all user inputs
- **HTTPS**: Always serve content over HTTPS
- **Subresource Integrity**: Use SRI for external resources
- **Secure Headers**: Implement security headers (X-Frame-Options, X-Content-Type-Options)

### Code Organization

#### Project Structure

```text
website/
├── index.html              # Main entry point
├── assets/
│   ├── css/
│   │   ├── main.css       # Main stylesheet
│   │   ├── components/    # Component-specific styles
│   │   └── utilities/     # Utility classes
│   ├── js/
│   │   ├── main.js        # Main JavaScript file
│   │   ├── modules/       # JavaScript modules
│   │   └── utils/         # Utility functions
│   ├── images/            # Optimized images
│   │   ├── icons/         # SVG icons
│   │   └── photos/        # Content images
│   └── fonts/             # Web fonts (if any)
├── pages/                 # Additional HTML pages
└── README.md              # Project documentation
```

## Examples

### Semantic HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Modern static website built with vanilla HTML, CSS, and JavaScript"
    />
    <title>Modern Static Website</title>
    <link rel="stylesheet" href="assets/css/main.css" />
  </head>
  <body>
    <header class="site-header">
      <nav class="nav" aria-label="Main navigation">
        <a href="#" class="nav__logo">Logo</a>
        <ul class="nav__list">
          <li><a href="#home" class="nav__link">Home</a></li>
          <li><a href="#about" class="nav__link">About</a></li>
          <li><a href="#contact" class="nav__link">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main class="main-content">
      <section id="home" class="hero">
        <h1 class="hero__title">Welcome to Our Website</h1>
        <p class="hero__description">
          Building modern web experiences with vanilla technologies
        </p>
        <button class="hero__cta" type="button">Get Started</button>
      </section>
    </main>

    <footer class="site-footer">
      <p>&copy; 2024 Modern Static Website. All rights reserved.</p>
    </footer>

    <script src="assets/js/main.js" type="module"></script>
  </body>
</html>
```

### Modern CSS with Grid and Custom Properties

```css
/* CSS Custom Properties */
:root {
  --color-primary: #2563eb;
  --color-secondary: #64748b;
  --color-background: #ffffff;
  --color-text: #1e293b;
  --font-family-base: system-ui, -apple-system, sans-serif;
  --font-size-base: 1rem;
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --border-radius: 0.5rem;
}

/* Modern CSS Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: var(--font-family-base);
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-background);
}

/* Layout with CSS Grid */
.site-header {
  position: sticky;
  top: 0;
  background: var(--color-background);
  border-bottom: 1px solid #e2e8f0;
  z-index: 100;
}

.nav {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  max-width: 1200px;
  margin: 0 auto;
}

.nav__list {
  display: flex;
  gap: var(--spacing-md);
  list-style: none;
  margin: 0;
  padding: 0;
  justify-self: end;
}

.hero {
  display: grid;
  place-items: center;
  min-height: 70vh;
  padding: var(--spacing-lg);
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.hero__cta {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hero__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
  }

  .nav__list {
    justify-self: center;
  }
}
```

### Vanilla JavaScript Module

```javascript
// main.js
import { Navigation } from "./modules/navigation.js";
import { ScrollAnimations } from "./modules/animations.js";
import { ContactForm } from "./modules/form.js";

class App {
  constructor() {
    this.init();
  }

  init() {
    // Initialize when DOM is ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    // Initialize modules
    new Navigation();
    new ScrollAnimations();
    new ContactForm();

    // Setup global event listeners
    this.setupGlobalEvents();
  }

  setupGlobalEvents() {
    // Handle CTA button clicks
    const ctaButton = document.querySelector(".hero__cta");
    if (ctaButton) {
      ctaButton.addEventListener("click", this.handleCTAClick.bind(this));
    }
  }

  handleCTAClick(event) {
    event.preventDefault();

    // Smooth scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
}

// Start the application
new App();
```

### JavaScript Module Example

```javascript
// modules/navigation.js
export class Navigation {
  constructor() {
    this.nav = document.querySelector(".nav");
    this.navLinks = document.querySelectorAll(".nav__link");
    this.init();
  }

  init() {
    this.setupSmoothScrolling();
    this.setupActiveStates();
    this.setupMobileMenu();
  }

  setupSmoothScrolling() {
    this.navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }

  setupActiveStates() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeLink = document.querySelector(
              `[href="#${entry.target.id}"]`
            );

            // Remove active class from all links
            this.navLinks.forEach((link) =>
              link.classList.remove("nav__link--active")
            );

            // Add active class to current link
            if (activeLink) {
              activeLink.classList.add("nav__link--active");
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });
  }

  setupMobileMenu() {
    // Add mobile menu functionality if needed
    // This would include hamburger menu toggle, etc.
  }
}
```

## Anti-Patterns

### HTML Anti-Patterns

- **Div Soup**: Avoid excessive div elements when semantic elements are more appropriate
- **Inline Styles**: Don't use inline styles; keep all styling in CSS files
- **Missing Alt Text**: Always provide meaningful alt text for images
- **Non-Semantic Markup**: Avoid using generic elements when semantic ones exist
- **Poor Form Structure**: Don't forget labels, fieldsets, and proper form organization

### CSS Anti-Patterns

- **!important Overuse**: Avoid using !important except in specific utility classes
- **Magic Numbers**: Don't use arbitrary values; use consistent spacing and sizing systems
- **Overly Specific Selectors**: Keep CSS selectors simple and maintainable
- **No Responsive Design**: Don't ignore mobile and tablet viewports
- **Unused CSS**: Remove unused styles to keep files lean

### JavaScript Anti-Patterns

- **Global Variables**: Avoid polluting the global namespace
- **Inline Event Handlers**: Don't use onclick attributes; use addEventListener
- **jQuery-style DOM Manipulation**: Use modern DOM APIs instead of outdated patterns
- **Blocking JavaScript**: Avoid synchronous operations that block the main thread
- **No Error Handling**: Always handle potential errors gracefully

### Performance Anti-Patterns

- **Unoptimized Images**: Don't serve large images without optimization
- **Render-Blocking Resources**: Avoid blocking CSS and JavaScript in the critical path
- **Memory Leaks**: Clean up event listeners and references properly
- **Excessive HTTP Requests**: Minimize and optimize resource requests

## References

- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [Google Web Fundamentals](https://developers.google.com/web/fundamentals)
- [Can I Use - Browser Compatibility](https://caniuse.com/)
- [Web.dev - Performance](https://web.dev/performance/)
- [A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

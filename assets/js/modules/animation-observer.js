// modules/animation-observer.js
export class AnimationObserver {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.addAnimationStyles();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        // Observe elements that should animate in
        const animatedElements = document.querySelectorAll(`
            .detail-card,
            .agenda__item,
            .location__info,
            .location__map,
            .register__info,
            .registration-form,
            .section-title
        `);

        animatedElements.forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    }

    addAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .animate-on-scroll {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .animate-on-scroll.animate-in {
                opacity: 1;
                transform: translateY(0);
            }
            
            .detail-card.animate-on-scroll {
                transition-delay: 0s;
            }
            
            .detail-card:nth-child(2).animate-on-scroll {
                transition-delay: 0.1s;
            }
            
            .detail-card:nth-child(3).animate-on-scroll {
                transition-delay: 0.2s;
            }
            
            .detail-card:nth-child(4).animate-on-scroll {
                transition-delay: 0.3s;
            }
            
            .agenda__item.animate-on-scroll {
                transition-delay: 0s;
            }
            
            .agenda__item:nth-child(2).animate-on-scroll {
                transition-delay: 0.1s;
            }
            
            .agenda__item:nth-child(3).animate-on-scroll {
                transition-delay: 0.2s;
            }
            
            .agenda__item:nth-child(4).animate-on-scroll {
                transition-delay: 0.3s;
            }
            
            .agenda__item:nth-child(5).animate-on-scroll {
                transition-delay: 0.4s;
            }
            
            .agenda__item:nth-child(6).animate-on-scroll {
                transition-delay: 0.5s;
            }
            
            .agenda__item:nth-child(7).animate-on-scroll {
                transition-delay: 0.6s;
            }
            
            @media (prefers-reduced-motion: reduce) {
                .animate-on-scroll {
                    transition: none;
                    opacity: 1;
                    transform: none;
                }
            }
        `;
        document.head.appendChild(style);
    }
}
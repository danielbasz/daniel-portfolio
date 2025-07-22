document.addEventListener('DOMContentLoaded', () => {
    const profilePhoto = document.getElementById('dynamic-profile-photo');
    const mockImage = new Image();
    mockImage.src = '/Users/danielbarboza/Downloads/image-1753081659519.jpg';
    mockImage.onload = function() {
        profilePhoto.src = mockImage.src;
    };
});

// Portfolio Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all project cards for animations
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observe section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(20px)';
        header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(header);
    });

    // Add loading states for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
        }
    });

    // Add hover effect enhancement for project cards
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform += ' scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = this.style.transform.replace(' scale(1.02)', '');
        });
    });

    // Add typing effect to the hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }

    // Add scroll-based header background change (if we add a fixed header later)
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add parallax effect to hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        lastScrollTop = scrollTop;
    });

    // Add click tracking for project links (for analytics)
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Here you could add analytics tracking
            console.log('Project link clicked:', this.textContent);
            
            // If the link is a placeholder (#), prevent navigation
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                alert('This is a placeholder link. Replace with actual project URL.');
            }
        });
    });

    // Add form validation for contact form (if added later)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const email = this.querySelector('input[type="email"]');
            const message = this.querySelector('textarea');
            
            if (!email.value || !message.value) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Here you would typically send the form data
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
        });
    }

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Add any keyboard shortcuts here
        if (e.key === 'Escape') {
            // Close any modals or overlays
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });

    // Add performance monitoring
    window.addEventListener('load', function() {
        // Log page load time
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log('Page load time:', loadTime + 'ms');
    });

    // Add lazy loading for images (modern browsers support this natively)
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add resize handler with debounce
const handleResize = debounce(function() {
    // Handle window resize events
    console.log('Window resized:', window.innerWidth + 'x' + window.innerHeight);
}, 250);

window.addEventListener('resize', handleResize);

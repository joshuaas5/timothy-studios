/* ============================================
   ZENE ODONTOLOGIA - Main JavaScript
   ============================================ */

(function() {
    'use strict';

    // ============================================
    // DOM Ready
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        initNavigation();
        initScrollReveal();
        initSmoothScroll();
        initContactForm();
        initBackToTop();
        initGalleryLightbox();
    });

    // ============================================
    // Navigation
    // ============================================
    function initNavigation() {
        const nav = document.querySelector('.nav');
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        const navLinksItems = document.querySelectorAll('.nav-links a');

        if (!nav || !navToggle || !navLinks) return;

        // Toggle mobile menu
        navToggle.addEventListener('click', function() {
            const isOpen = navLinks.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isOpen);
            
            // Animate hamburger to X
            const spans = navToggle.querySelectorAll('span');
            if (isOpen) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close mobile menu on link click
        navLinksItems.forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });

        // Navbar scroll effect
        let lastScroll = 0;
        const scrollThreshold = 50;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            if (currentScroll > scrollThreshold) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });
    }

    // ============================================
    // Scroll Reveal (Intersection Observer)
    // ============================================
    function initScrollReveal() {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements with data-reveal attribute
        const revealElements = document.querySelectorAll('[data-reveal]');
        revealElements.forEach(function(el) {
            observer.observe(el);
        });

        // Default reveal for common sections if no data-reveal
        const sections = document.querySelectorAll('section');
        sections.forEach(function(section) {
            const heading = section.querySelector('.section-header');
            if (heading && !heading.hasAttribute('data-reveal')) {
                heading.setAttribute('data-reveal', '');
                observer.observe(heading);
            }
        });
    }

    // ============================================
    // Smooth Scroll for anchor links
    // ============================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (!targetElement) return;

                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });
        });
    }

    // ============================================
    // Contact Form
    // ============================================
    function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Basic validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(function(field) {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ff4444';
                    setTimeout(function() {
                        field.style.borderColor = '';
                    }, 3000);
                }
            });

            if (!isValid) {
                showFormMessage(form, 'Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }

            // Email validation
            const emailField = form.querySelector('input[type="email"]');
            if (emailField && !isValidEmail(emailField.value)) {
                showFormMessage(form, 'Por favor, insira um email válido.', 'error');
                return;
            }

            // Show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';

            // Simulate form submission (replace with actual endpoint)
            setTimeout(function() {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                showFormMessage(form, 'Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
                form.reset();
            }, 1500);

            // Uncomment for real submission:
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                showFormMessage(form, 'Mensagem enviada com sucesso!', 'success');
                form.reset();
            })
            .catch(error => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                showFormMessage(form, 'Erro ao enviar. Tente novamente.', 'error');
            });
            */
        });
    }

    function showFormMessage(form, message, type) {
        // Remove existing messages
        const existing = form.querySelector('.form-message');
        if (existing) existing.remove();

        const msgDiv = document.createElement('div');
        msgDiv.className = 'form-message ' + type;
        msgDiv.textContent = message;
        msgDiv.style.cssText = `
            padding: 1rem;
            margin-top: 1rem;
            font-size: 0.9rem;
            font-weight: 500;
            text-align: center;
            transition: opacity 0.3s ease;
        `;

        if (type === 'success') {
            msgDiv.style.background = 'rgba(201, 169, 110, 0.1)';
            msgDiv.style.color = 'var(--color-gold)';
            msgDiv.style.border = '1px solid rgba(201, 169, 110, 0.3)';
        } else {
            msgDiv.style.background = 'rgba(255, 68, 68, 0.1)';
            msgDiv.style.color = '#ff6666';
            msgDiv.style.border = '1px solid rgba(255, 68, 68, 0.3)';
        }

        form.appendChild(msgDiv);

        setTimeout(function() {
            msgDiv.style.opacity = '0';
            setTimeout(function() { msgDiv.remove(); }, 300);
        }, 5000);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // ============================================
    // Back to Top Button
    // ============================================
    function initBackToTop() {
        const btn = document.createElement('button');
        btn.className = 'back-to-top';
        btn.setAttribute('aria-label', 'Voltar ao topo');
        btn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg>';
        btn.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 48px;
            height: 48px;
            background: var(--color-gold);
            color: var(--color-black);
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
        `;

        document.body.appendChild(btn);

        btn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 500) {
                btn.style.opacity = '1';
                btn.style.visibility = 'visible';
            } else {
                btn.style.opacity = '0';
                btn.style.visibility = 'hidden';
            }
        });
    }

    // ============================================
    // Gallery Lightbox
    // ============================================
    function initGalleryLightbox() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        if (!galleryItems.length) return;

        // Create lightbox elements
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 2000;
            cursor: pointer;
        `;

        const lightboxImg = document.createElement('img');
        lightboxImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            transform: scale(0.9);
            transition: transform 0.3s ease;
        `;

        const lightboxClose = document.createElement('button');
        lightboxClose.innerHTML = '&times;';
        lightboxClose.style.cssText = `
            position: absolute;
            top: 2rem;
            right: 2rem;
            font-size: 2.5rem;
            color: var(--color-white);
            background: none;
            border: none;
            cursor: pointer;
            line-height: 1;
        `;

        lightbox.appendChild(lightboxImg);
        lightbox.appendChild(lightboxClose);
        document.body.appendChild(lightbox);

        // Open lightbox
        galleryItems.forEach(function(item) {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                if (!img) return;

                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightbox.style.opacity = '1';
                lightbox.style.visibility = 'visible';
                lightboxImg.style.transform = 'scale(1)';
                document.body.style.overflow = 'hidden';
            });
        });

        // Close lightbox
        function closeLightbox() {
            lightbox.style.opacity = '0';
            lightbox.style.visibility = 'hidden';
            lightboxImg.style.transform = 'scale(0.9)';
            document.body.style.overflow = '';
        }

        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox || e.target === lightboxClose) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.style.visibility === 'visible') {
                closeLightbox();
            }
        });
    }

    // ============================================
    // Counter Animation for Stats
    // ============================================
    function initCounters() {
        const counters = document.querySelectorAll('[data-counter]');
        if (!counters.length) return;

        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        counters.forEach(function(counter) {
            observer.observe(counter);
        });
    }

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-counter'));
        const duration = 2000;
        const start = performance.now();
        const startValue = 0;

        function update(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(startValue + (target - startValue) * easeProgress);
            
            element.textContent = current.toLocaleString('pt-BR');

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    // Initialize counters
    initCounters();

})();
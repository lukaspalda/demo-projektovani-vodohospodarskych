(function() {
    'use strict';

    // ── Theme Toggle ──
    var themeToggle = document.getElementById('theme-toggle');
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            var current = document.documentElement.getAttribute('data-theme');
            setTheme(current === 'dark' ? 'light' : 'dark');
        });
    }

    // ── Mobile Menu ──
    var navToggle = document.getElementById('nav-toggle');
    var navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        navMenu.querySelectorAll('.nav-link').forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // ── Sticky Navbar ──
    var navbar = document.getElementById('navbar');
    if (navbar && !navbar.classList.contains('scrolled')) {
        window.addEventListener('scroll', function() {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }, { passive: true });
    }

    // ── Smooth Scroll ──
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ── Scroll Animations ──
    var animElements = document.querySelectorAll('[data-animate]');
    if (animElements.length > 0 && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        animElements.forEach(function(el) { observer.observe(el); });
    }

    // ── FAQ Accordion (only one open at a time) ──
    document.querySelectorAll('.faq-item').forEach(function(item) {
        item.addEventListener('toggle', function() {
            if (this.open) {
                document.querySelectorAll('.faq-item').forEach(function(other) {
                    if (other !== item) other.removeAttribute('open');
                });
            }
        });
    });

    // ── Contact Form (Netlify Forms) ──
    document.querySelectorAll('form[data-netlify="true"]').forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var btn = form.querySelector('button[type="submit"]');
            var origText = btn.textContent;
            btn.textContent = 'Odesílání…';
            btn.disabled = true;

            var data = new FormData(form);
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(data).toString()
            })
            .then(function(res) {
                if (res.ok) {
                    btn.textContent = 'Odesláno!';
                    form.reset();
                    setTimeout(function() {
                        btn.textContent = origText;
                        btn.disabled = false;
                    }, 3000);
                } else {
                    btn.textContent = 'Chyba — zkuste to znovu';
                    btn.disabled = false;
                    setTimeout(function() { btn.textContent = origText; }, 3000);
                }
            })
            .catch(function() {
                btn.textContent = 'Chyba — zkuste to znovu';
                btn.disabled = false;
                setTimeout(function() { btn.textContent = origText; }, 3000);
            });
        });
    });

    // ── Cookie Banner ──
    var banner = document.getElementById('cookie-banner');
    if (banner && !localStorage.getItem('cookies-consent')) {
        banner.hidden = false;
    }
    var acceptBtn = document.getElementById('cookie-accept');
    var rejectBtn = document.getElementById('cookie-reject');
    if (acceptBtn) acceptBtn.addEventListener('click', function() { localStorage.setItem('cookies-consent', 'accepted'); banner.hidden = true; });
    if (rejectBtn) rejectBtn.addEventListener('click', function() { localStorage.setItem('cookies-consent', 'rejected'); banner.hidden = true; });

})();

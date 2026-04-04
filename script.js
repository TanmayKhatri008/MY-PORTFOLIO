/* ========================================
   Portfolio Website – JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // Typing Animation
    // ========================================
    const typingText = document.getElementById('typingText');
    const titles = [
        'Frontend Developer',
        'MERN Stack Enthusiast',
        'React.js Developer',
        'Problem Solver',
        'UI/UX Builder'
    ];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const current = titles[titleIndex];
        if (isDeleting) {
            typingText.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        let delay = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === current.length) {
            delay = 2200;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            delay = 400;
        }

        setTimeout(typeEffect, delay);
    }

    typeEffect();

    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.getElementById('navbar');

    function handleNavScroll() {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavScroll);
    handleNavScroll();

    // ========================================
    // Active Nav Link on Scroll
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        const scrollY = window.scrollY + 150;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    // ========================================
    // Mobile Navigation Toggle
    // ========================================
    const navToggle = document.getElementById('navToggle');
    const navLinksList = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinksList.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinksList.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinksList.classList.remove('active');
        });
    });

    // ========================================
    // Scroll Reveal (IntersectionObserver)
    // ========================================
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ========================================
    // Smooth Scroll for anchor links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ========================================
    // Parallax effect on hero glows
    // ========================================
    const heroGlow1 = document.querySelector('.hero-glow-1');
    const heroGlow2 = document.querySelector('.hero-glow-2');

    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;

        if (heroGlow1) {
            heroGlow1.style.transform = `translate(${x}px, ${y}px)`;
        }
        if (heroGlow2) {
            heroGlow2.style.transform = `translate(${-x}px, ${-y}px)`;
        }
    });
});

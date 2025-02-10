document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page');
    const contactButton = document.getElementById('contact-button');
    const contactForm = document.getElementById('contact-form');

    // Only proceed if elements exist
    if (navLinks.length > 0 && sections.length > 0) {
        // Handle navigation link clicks
        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    // Remove 'active' class from all sections and add to the target section
                    sections.forEach(section => {
                        section.classList.remove('active');
                    });
                    targetSection.classList.add('active');

                    // Remove 'active' class from all navigation links and add to the clicked link
                    navLinks.forEach(navLink => {
                        navLink.classList.remove('active');
                    });
                    this.classList.add('active');

                    // Smooth scroll to the target section
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // Handle contact button click
    if (contactButton) {
        contactButton.addEventListener('click', function () {
            const contactSection = document.getElementById('contact');

            // Remove 'active' class from all sections and add to the contact section
            sections.forEach(section => {
                section.classList.remove('active');
            });
            contactSection.classList.add('active');

            // Remove 'active' class from all navigation links and add to the contact link
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            document.querySelector('a[href="#contact"]').classList.add('active');

            // Smooth scroll to the contact section
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Handle contact form submission if it exists
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            alert(`Message Sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
            contactForm.reset();
        });
    }

    // Initial page load animation
    const profilePage = document.getElementById('profile-page');
    if (profilePage) {
        profilePage.classList.add('active');
    }

    // Cursor animation
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-glow');
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor animation
    function animate() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animate);
    }
    animate();

    // Mobile navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('header nav ul');

    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('show');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            navToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('header')) {
            navMenu.classList.remove('show');
            navToggle.classList.remove('active');
        }
    });

    // Hover effects for cards
    const cards = document.querySelectorAll('.card, .content-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cursor.style.width = '50px';
            cursor.style.height = '50px';
        });
        
        card.addEventListener('mouseleave', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
        });
    });
});

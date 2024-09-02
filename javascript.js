document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page');
    const contactButton = document.getElementById('contact-button');
    const contactForm = document.getElementById('contact-form');

    // Handle navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

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
        });
    });

    // Handle contact button click
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

    // Handle contact form submission
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Message Sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        contactForm.reset();
    });

    // Initial page load animation
    const profilePage = document.getElementById('profile-page');
    profilePage.classList.add('active');
});

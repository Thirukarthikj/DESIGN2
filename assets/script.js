
// Mobile navigation
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (menu && nav) {
    menu.addEventListener('click', () => {
        nav.classList.toggle('open');
        menu.textContent =
            nav.classList.contains('open') ? '×' : '☰';
    });
}

// Scroll reveal animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});

// Gallery filters
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.filter;

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');

        document.querySelectorAll('.gallery-card').forEach(card => {
            card.style.display =
                category === 'all' ||
                    card.dataset.category === category
                    ? 'block' : 'none';
        });
    });
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        question.parentElement.classList.toggle('open');
    });
});

// WhatsApp enquiry
const form = document.querySelector('#enquiry-form');

if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();

        const data = new FormData(form);

        const message = [
            'Hello Classic Interior!',
            `Name: ${data.get('name')}`,
            `Phone: ${data.get('phone')}`,
            `Project: ${data.get('project')}`,
            `Message: ${data.get('message')}`
        ].join('\n');

        window.open(
            'https://wa.me/917010097602?text=' +
            encodeURIComponent(message),
            '_blank'
        );
    });
}

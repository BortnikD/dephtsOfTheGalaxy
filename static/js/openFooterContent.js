var footer = document.querySelector('footer');

document.querySelectorAll('.footer-list__item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('expanded');
    });
});
const footerItems = document.querySelectorAll('.footer-list__item');

footerItems.forEach(item => {
    item.addEventListener('click', (event) => {
        if (!event.target.closest('.footer-content')) {
            item.classList.toggle('expanded');
        }
    });
});

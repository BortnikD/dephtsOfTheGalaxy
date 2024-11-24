const newsItems = document.querySelectorAll('.news-list__item');

newsItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.stopPropagation();
        if(!event.target.closest('.article-content')){
            item.classList.toggle('active');
        }
    });
});

document.addEventListener('click', (event) => {
    newsItems.forEach(item => {
        if (!item.contains(event.target)) {
            item.classList.remove('active');
        }
    });
});

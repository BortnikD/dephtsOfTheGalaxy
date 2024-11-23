function openArticle() {
    document.body.classList.add('no-scroll'); // Добавляем класс no-scroll к body
    document.querySelector('.article-full').classList.add('visible');
}

function closeArticle() {
    document.body.classList.remove('no-scroll'); // Удаляем класс no-scroll с body
    document.querySelector('.article-full').classList.remove('visible');
}

document.querySelectorAll('.articles__link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        openArticle();
    });
});

document.querySelector('.article-full').addEventListener('click', function(event) {
    if (event.target.classList.contains('article-full')) {
        closeArticle();
    }
});

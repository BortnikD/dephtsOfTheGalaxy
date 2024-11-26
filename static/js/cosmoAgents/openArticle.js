let articles = [];

async function loadContentArticles() {
    try {
        const response = await fetch('../media/json/agents/articles.json');
        const json = await response.json();
        articles = json['articles'];
    } catch (error) {
        console.log(error);
    }
}

const articleContent = document.querySelector('.article-full__content');

function putArticleContent(article_id) {
    const article = articles.find(article => article.id === article_id);
    if (article) {
        const content = `
        <div class="article-full__text">
            <div class="article-wraper">
                <h1>${article.title}</h1>
                <img src="${article.image}" alt="${article.title}">
                <div>${article.content}</div> 
            </div>
        </div>
        `;
        articleContent.innerHTML = content;
    } else {
        console.error(`Article with id ${article_id} not found`);
    }
}

function openArticle() {
    document.body.classList.add('no-scroll'); // Добавляем класс no-scroll к body
    document.querySelector('.article-full').classList.add('visible');
}

function closeArticle() {
    document.body.classList.remove('no-scroll'); // Удаляем класс no-scroll с body
    document.querySelector('.article-full').classList.remove('visible');
}

document.querySelectorAll('.articles-list__item').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        putArticleContent(link.id);
        openArticle();
    });
});

document.querySelector('.article-full').addEventListener('click', function (event) {
    if (event.target.classList.contains('article-full')) {
        closeArticle();
    }
});

// Загружаем статьи при загрузке страницы
loadContentArticles();

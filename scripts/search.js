document.addEventListener("DOMContentLoaded", function () {
    const articles = document.querySelectorAll(".news-list article");

    articles.forEach(article => {
        article.style.display = "block";
        article.classList.add('visible');
    });
});

function searchArticles() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const articles = document.querySelectorAll(".news-list article");

    articles.forEach(article => {
        const title = article.dataset.title.toLowerCase();
        if (title.includes(searchTerm)) {
            article.style.display = "block";
            article.classList.add('visible');
            article.classList.remove('not-visible');
        } else {
            article.classList.remove('visible');
            article.classList.add('not-visible');

            setTimeout(() => {
                article.style.display = "none";
            }, 150);
        }
    });
}

function clearSearch() {
    const searchBar = document.getElementById("search-bar");
    searchBar.value = "";
    searchArticles();
}

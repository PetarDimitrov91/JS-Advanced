function getArticleGenerator(articles) {
    const divRef = document.getElementById('content');
    let arr = articles;
    return () => {
        if (arr.length > 0) {
            let paragraph = document.createElement('article');
            paragraph.textContent = arr.shift();
            divRef.appendChild(paragraph);
        }
    }
}

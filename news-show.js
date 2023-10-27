document.addEventListener('DOMContentLoaded', function () {
    const articleContainer = document.getElementById('article-container');
    const searchInput = document.getElementById('search-bar'); // Add the search input element

    // Tri des articles par date (du plus récent au plus ancien)
    articles.sort((a, b) => {
        const dateA = new Date(a.date.split('-').reverse().join('-'));
        const dateB = new Date(b.date.split('-').reverse().join('-'));
        return dateB - dateA;
    });

    // Function to filter and display articles based on the search input
    function filterArticles() {
        const searchTerm = searchInput.value.toLowerCase();
        
        // Clear the current articles in the container
        articleContainer.innerHTML = '';

        // Filter and display articles that match the search term
        articles.forEach(article => {
            if (
                article.title.toLowerCase().includes(searchTerm) ||
                article.description.toLowerCase().includes(searchTerm)
            ) {
                const card = document.createElement('div');
                card.classList.add('article-card');
            
                const image = document.createElement('img');
                image.src = article.image;
                image.alt = article.title;
            
                const title = document.createElement('h2');
                title.textContent = article.title;
            
                const description = document.createElement('p');
                description.textContent = article.description;
            
                const date = document.createElement('p');
                date.textContent = `Date: ${article.date}`;
            
                const readMoreButton = document.createElement('a');
                readMoreButton.classList.add('article-button');
                readMoreButton.textContent = 'Read More';
                readMoreButton.href = article.path;
            
                card.appendChild(image);
                card.appendChild(title);
                card.appendChild(description);
                card.appendChild(date);
                card.appendChild(readMoreButton);
            
                articleContainer.appendChild(card);
            }
        });
    }

    // Add an input event listener to the search bar
    searchInput.addEventListener('input', filterArticles);
    
    // Initial call to filterArticles to display all articles
    filterArticles();
});

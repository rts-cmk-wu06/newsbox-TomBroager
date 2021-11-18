const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=uZRSzVe9ulL9BEMO9EaG0pGFLxHHHulT";
const main = document.querySelector('main');

axios.get(url).then(response => {
    const article = response.data.results;
    console.log(article);
    article.forEach(article => {
        
    });

});
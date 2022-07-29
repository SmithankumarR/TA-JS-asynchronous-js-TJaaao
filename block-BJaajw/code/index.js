let url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=30`;
let newsElm = document.querySelector('.news');
let select = document.querySelector('select');
let allNews = [];
function rendernews(news) {
    newsElm.innerHTML = '';
    news.forEach((newsItem) => {
        let li = document.createElement('li');
        li.classList.add('flex' , 'pcc' , 'jcb');
        let imgdiv = document.createElement('div');
        imgdiv.classList.add('flex-50');
        let img = document.createElement('img');
        img.src = newsItem.imageUrl;
        img.alt = newsItem.title;
        let div = document.createElement('div');
        div.classList.add('flex-50');
        let span = document.createElement('span');
        span.classList.add('btn', 'btn-pri');
        span.innerText = newsItem.newsSite;
        let h3 = document.createElement('h3');
        h3.innerText = newsItem.title;
        let a = document.createElement('a');
        a.href = newsItem.url;
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-sec');
        button.innerText = 'Read More';
        a.append(button);
        imgdiv.append(img)
        div.append(span, h3, a);
        li.append(imgdiv,div);
        newsElm.append(li);
    });
}
function displayOptions(sources) {
    sources.forEach((source) => {
        let option = document.createElement('option');
        option.innerText = source;
        option.value = source;
        select.append(option);
    });
}

fetch(url)
    .then((res) => {
        if (!res.ok) {
            alert('Checkout your internet connection ❌ ' )
        }
        return res.json()}
        )
    .then((news) => {
        alert("Loading News ▪ ▪ ▪ ▪ ");
        if(!navigator.onLine) {
            newsElm.innerHtml = "Checkout your internet connection ❌ "
        }
        allNews = news;
        rendernews(news);
        let allSources = Array.from(new Set(news.map((n) => n.newsSite)));
        displayOptions(allSources);
    });
select.addEventListener('change', (event) => {
    let source = event.target.value.trim();
    if (source) {
      var  filteredNews = allNews.filter((news) => news.newsSite === source);
    } else {
        filteredNews = allNews;
    }
    rendernews(filteredNews);
});

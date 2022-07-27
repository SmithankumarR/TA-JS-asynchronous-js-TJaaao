let search = document.querySelector('.search');
let root = document.querySelector('.all-div');
let count = 0;

function createUI(ele) {
    let div = document.createElement('div');
    div.classList.add('flex-25');
    let image = document.createElement('img');
    image.src = ele.urls.regular;
    div.append(image);
    root.append(div);
    console.log(count);
    count++;
}
function fetch(e) {
    return new Promise((resolve, reject) => {
        let val = e.target.value;
        let key = 'hoHhEXhBKLz7MyWocyjvRhHuE6N2YSDDnLPfVh5VV4E';
        let url = `https://api.unsplash.com/search/photos?query=${val}&client_id=${key}`;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => {
            setTimeout(() => resolve(JSON.parse(xhr.response), createUI(e)), 5000);
        }
        xhr.onerror = () => setTimeout(() => reject("something went wrong"), 5000);
        xhr.send();
    });
}
search.addEventListener('keyup', (e) => {
    fetch(e);
});
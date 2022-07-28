function fetch(url){

    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = () => setTimeout( () => resolve(JSON.parse(xhr.responseText)),5000);
        xhr.onerror = () => setTimeout(() => {
            reject("something went wrong");
        }, 5000);
        xhr.send();
    });
}
let data = fetch();
console.log(data.name);
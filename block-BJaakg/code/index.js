let book = document.querySelector('.book');
let bookContent = document.querySelector('.bookContainer');
let url = (https = //www.anapioficeandfire.com/api/books);




fetch(url)

.then((res) => res.json)
.then(console.log)
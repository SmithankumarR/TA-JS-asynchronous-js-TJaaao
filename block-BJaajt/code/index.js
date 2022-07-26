const input = document.querySelector('input');
const img = document.querySelector('img');
const Uname = document.querySelector('h3');
const workingAt = document.querySelector('p');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');

function displayUI(data) {
  img.src = data.avatar_url;
  Uname.innerText = data.name;
  workingAt.innerText = data.company;
  followers.innerText = `Followers : ${data.followers_url}`;
  following.innerText = `Following : ${data.following_url}`;
}
// 3EaNL3GXO-XKEmOPAauXXOI3kF5mQ9fzSEvOAG7J0F4
// https://unsplash.com/photos/random
function handleChange(event) {
  if (event.keyCode === 13) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET',`https://api.github.com/users/${event.target.value}`);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      displayUI(userData);
    };
    xhr.onerror = function () {
      console.log('Something went wrong');
    };
    xhr.send();
    event.target.value = "";
  }
}

input.addEventListener('keyup', handleChange);

'use strict';

let likeButtons = $('button');
// document.getElementsByTagName('button');

let source = $('entry-template').innerHTML;
// document.getElementById("entry-template").innerHTML;
let template = Handlebars.compile(source);
let context = { title: "My New Post", body: "This is my first post!" };
let html = template(context);

console.log('🎀');
let moreChars = $('#morechars').on('click', getNewCharacters);

let currentPage = 2;

function getNewCharacters(){
  let newPage = currentPage++;
  $.ajax(`/characters?page=${newPage}`, {method:'GET', dataType: 'JSON'})
    .then(characters => {
      console.log(characters, '🎁');
      ////////////taKe characters, loop over it, append data to html with handlebars////////
    })
  console.log('hello!');
}


for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener('click', likeMe);
}

function likeMe(e) {
  let character = e.target.parentNode;
  let counter = character.getElementsByTagName('span')[0];
  let count = parseInt(counter.textContent);
  count++;
  counter.textContent = count;
}

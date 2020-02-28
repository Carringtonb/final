'use strict';

let likeButtons = $('button');
// document.getElementsByTagName('button');

console.log('🎀');
let moreChars = $('#morechars').on('click', getNewCharacters);

let currentPage = 2;

function getNewCharacters(){
  let newPage = currentPage++;
  $.ajax(`/characters?page=${newPage}`, {method:'GET', dataType: 'JSON'})
    .then(characters => {
      console.log(characters, '🎁');
        characters.results.forEach(legend => {
         let thisChar = legend.name;
         let charLikes = legend.likes;
         console.log(thisChar, '💉');
         console.log(charLikes, '💊');
let source = document.getElementById("entry-template").innerHTML;
let template = Handlebars.compile(source);
let context = { title: $(thisChar), body: $(charLikes) };
let html = template(context);
console.log('heyyy');
        })
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

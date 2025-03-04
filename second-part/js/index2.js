console.log('loaded index.js');

const title = document.getElementById('title');
title.textContent = new Date().toLocaleTimeString();
title.style.color = 'red';
title.style.backgroundColor = 'black';

console.log( title);


const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);


const list = document.getElementsByClassName('list-item');
list[0].innerHTML = '<li><strong> ITEM 1</strong></li>'
console.log('loaded index.js');

const title = document.getElementById('title');
title.textContent = 'DOM Manipulated';
title.style.color = 'red';
title.style.backgroundColor = 'black';

console.log( title);


const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
// console.log('loaded index.js');

// const title = document.getElementById('title');
// title.innerText = new Date().toLocaleTimeString();
// title.style.color = 'red';
// title.style.backgroundColor = 'black';

// console.log( title);

// const paragraphs = document.getElementsByTagName('p');
// console.log(paragraphs);

// const list = document.getElementsByClassName('list-item');
// list[0].innerHTML = '<li><strong> ITEM 1</strong></li>';

const input = document.getElementById("input");

input.addEventListener("keydown", function (event) {
  if (event.key === "y") {
    console.log("You pressed Y!");
  } else {
    console.log(event.target.value);
  }
});


const myParentDiv = document.querySelector('.myParentDiv');
const a = myParentDiv.firstElementChild.firstElementChild;
a.setAttribute('href', 'https://www.google.com');
// console.log( a.getAttribute('href'));


const imgElement = document.getElementsByTagName('img')[0];
// console.log( imgElement.removeAttribute('src'));
imgElement.setAttribute('alt', 'this is an image');



const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function(){
    const myLastDiv = document.getElementById('myLastDiv');
    myLastDiv.classList.toggle('bg-red'); 
    myLastDiv.classList.toggle('text-black');  
    myLastDiv.classList.toggle('toggle')
});


// const bigContainer = document.getElementsByClassName('bigContainer');
const myList = document.querySelector('#myList');

const myNewElement = document.createElement('li');
myNewElement.innerText = 'Item 4';
myList.appendChild(myNewElement);
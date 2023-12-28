//DOM Manipulation

//Styling Elements
var title = document.querySelector('#main-heading');
title.style.color = 'red';
const listItems = document.querySelectorAll('.list-items');
//Changing font size of every items
for (i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '19px'
    
}
console.log(listItems);

//Creating Elements
const ul = document.getElementsByTagName('ul');
const li = document.createElement('li')

//Adding Element 


// var heading = document.getElementById('main-heading');
// console.log(heading);
// var byClass = document.getElementsByClassName('list-items');
// var byQuerySelector = document.querySelector('div');
//var byQuerySelector = document.querySelectorAll('div');
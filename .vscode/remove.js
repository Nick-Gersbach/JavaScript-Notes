/*

REPLACE AN ELEMENT

 */

//THIS EXERCISE HAS US REPLACE THE H5 THAT SAYS TASK LIST ABOVE THE ADDED TASKS TO AN H2 THAT SAYS SHIT TODO

//Create Element
const newHeading = document.createElement('h2');
// console.log(newHeading);

//Add id
newHeading.id = 'task-title';
// console.log(newHeading);

//Create new text node
newHeading.appendChild(document.createTextNode('Shit ToDo'));
console.log(newHeading);

//Get the old heading we want to replace
const oldHeading = document.getElementById('task-title');

//Parent
const cardAction = document.querySelector('.card-action');

//Replace (what you want to replace it with, what you want to replace)
cardAction.replaceChild(newHeading, oldHeading);


/*



REMOVE AN ELEMENT



*/

//Assign and select elements by storing them in variables
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove List items
lis[0].remove(); //remove the first li
lis[2].remove(); //remove the 3rd li

//Remove child element (take lis away by selecting them as children of ul)
list.removeChild(lis[1]);


/*



REPLACE AND REMOVE CLASSES AND ATTRIBUTES



*/

//Grab the first li and then grab the link attribute and put them both in variables
const firstLi = document.querySelector('li:first-child');
//This gives us the link attribute
const link = firstLi.children[0];


//Classes
let val;

val = link.className;
console.log(val);

val = link.classList;
console.log(val);

val = link.classList[0];
console.log(val);

val = link.classList.add('test');
console.log(val);

//Attributes

//get an attribute
val = link.getAttribute('href');
console.log(val);

//Edit attribute
val = link.setAttribute('href', 'http://google.com');
console.log(val);

//Making a test change
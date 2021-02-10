/*
Event Bubbling - The bubbling up of events through the DOM. When an event happens on the DOM, it will bubble up from parent element to parent element until it reaches the top and fires off.

Event Delegation - This is when we put an event in a parent element and use logic to fire it off for a child element. So it bubbles down instead of up
 */


// //Event Bubbling
// document.querySelector('.card-title').addEventListener('click', function() {
// console.log('You clicked on the card title!')
// });

// //Event Bubbling
// document.querySelector('.card-content').addEventListener('click', function() {
// console.log('You clicked on card content!')
// });

// //Event Bubbling
// document.querySelector('.card').addEventListener('click', function() {
// console.log('You clicked on card!')
// });

// //Event Bubbling
// document.querySelector('.col').addEventListener('click', function() {
// console.log('You clicked on col!')
// });

//When you click on task list all of the events will bubble up and fire off even though you didn't click everything individually. You can witness this happening in the console.

//Delegation Example - Putting an event on the ul instead of the li

// const deleteItem = document.querySelector('.delete-item');

// deleteItem.addEventListener('click', deleteItemFunc);

// function deleteItemFunc() {
// console.log('delete item');
// }

//If you set it up like this, the event will only fire off on the first li. This is why we need to use event delegation. You'll also need to use event delegation if you dynamically insert an element into the DOM with JS

//Below we will use event delegation with the event object and an if statement to tell js to fire the event off if an element contains certain classes

const deleteItem = document.querySelector('.delete-item');

//We selected off the entire body so that it would can all elements for delete item and the event would fire off for all of them when clicked.
document.body.addEventListener('click', deleteItemFunc);

function deleteItemFunc(e) {
// console.log('delete item');

if(e.target.parentElement.classList.contains('delete-item')) {
  console.log('delete-item');
  //This code below will actually remove the item from the DOM when the x is clicked
  e.target.parentElement.parentElement.remove();
}
}

/*

 ADD AN EVENT USING THE EVENT OBJECT (e)

 */

//Add click event with anonymous function. e is the event object (parameter). we use that when we want to stop the default behavior of an element adn just have it fire off our event only. We used it in this case because the default action of a form button is to submit the form and reload a new page, which we don't want to happen in the todo app.
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('You fired off a click event');

//   e.preventDefault();// You must add this method for the event object (e parameter) to do it's intended job of stopping the default behavior
// })

//You could also just make sure you have a # in href to stop the default behavior of links

/*

 ADD AN EVENT USING A NAMED FUNCTION

 STEP 1 - Select your class/id you want to manipulate...
 document.querySelector('.clear-tasks').addEventListener('click', onClick); (onClick is the name of the function this code will be looking for)

STEP 2 - Add a named function underneath your selector code

function onClick(e) {
console.log('clicked');
}

Having a named function is more organized than unnamed functions everywhere.

 */

document.querySelector('.clear-tasks').addEventListener('click', onClick);


function onClick(e) {
// console.log('clicked');
 e.preventDefault();

//Looking at the event object

let val;

val = e;

//Event target element
val = e.target;
val = e.target.id;
val = e.target.className;
val = e.target.classList;

//Event type
val = e.type;

//Timestamp
val = e.timeStamp;

console.log(val);
}

/*

- Vaniila js has two types of DOM element selectors, Single element Selectors and multiple element selectors

//SINGLE ELEMENT SELECTORS
- Single element selectors grab an html element by it's id or class
- If you grab an element with a single element selector by a class or id that is assigned to multiple elements, js will only grab the first one that appears in the DOM

*/


/*

SINGLE ELEMENT SELECTOR EXAMPLES

*/

//document.getElementById();
console.log(document.getElementById('task-title'));

//Get id from the element
console.log(document.getElementById('task-title').id);

//Get class from the element
console.log(document.getElementById('task-title').className);

//Change Styling (Do not use this in place of css. This is used for dynamic activity done with event handlers)
document.getElementById('task-title').style.background = 'gray';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '10px';
// document.getElementById('task-title').style.display= 'none';

//Change Content
document.getElementById('task-title').textContent = 'Task Master';
document.getElementById('task-title').innerText = 'Shit To DO';
document.getElementById('task-title').innerHTML = '<span style=color:red>Task List</span>';

/*

YOU WILL USUALLY PUT SELECTORS AND ELEMENTS INTO VARIABLES TO MAKE SELECTING AND MANIPULATING THEM EASIER

*/

const btn = document.querySelector('.btn');
btn.style.color = 'yellow';

const title = document.querySelector('.card-title');
title.style.background = 'purple';
title.style.color = '#fff';
title.style.padding = '10px';
title.style.borderRadius = '50px';
title.style.textAlign = 'center';
title.style.fontWeight = 'bold';


//TARGET ELEMENTS EVEN IF THEIR IS MORE THAN 1 (list items)
const list = document.querySelector('li');
list.style.background = 'orange';
//Get last li (just use pseudo classed)
document.querySelector('li:nth-child(3)').style.background = 'green';





//Create am element from scratch
const li = document.createElement('li');
// console.log(li);

//Add a class to our li
li.className = 'collection-item';
// console.log(li);

//Add an ID to li
li.id = 'new-item';
console.log(li);

//Add attribute
li.setAttribute('title', 'New Item');
console.log(li);

//Create text node and append (add it to the element)
li.appendChild(document.createTextNode('Added with JS'));
console.log(li);

//Create New Link (x)
const link = document.createElement('a');
//Add the classes for the x
link.className = 'delete-item secondary-content';
//Add icon html (the font awesome i element with classes)
link.innerHTML = '<i class="fa fa-remove"></i>';

//Append link into the li so the x actually shows on the page
li.appendChild(link);

//Append li as child to ul (make our new li appear in the ul with the other collection items)
document.querySelector('ul.collection').appendChild(li);
console.log(li);



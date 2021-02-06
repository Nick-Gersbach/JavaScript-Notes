/*

Multiple Element Selectors Notes


- Multiple element DOM selectors are used to select more than one element at a time and return either an HTML collection or a node list

- Node lists and HTML element collections are similar to arrays with some differences in what you can do with them. However, you can convert them into arrays at any time in order to use built in array properties with them.



*/

//document.getElementsByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items);
//The above code returns an HTML collection of all our list items. There are 5 items numbered (indexed from 0 on up) just like an array

console.log(items[0]);
//You can access specific lis by using their indexed position in between []

//Make the first li red
items[0].style.color = 'red';

//Change the text of third indexed item
items[3].textContent = 'Hello';

//You can specify which elements you want to select that have a class of collection-item by using the parent element (ul). This will only select the collection-item class elements within a ul. Any other element that has that class that isn't in a ul will not be selected.

//document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
//The above code will select all lis on the page globally

//All of the same things applt to manipulating them like we did above with class name
//Make the first li red
lis[4].style.color = 'purple';

//Change the text of third indexed item
lis[2].textContent = 'Hello';

//Convert HTML collection into an array
lis = Array.from(lis);
lis.reverse();
//The above code makes our HTML collection an array and unlocks all array properties for them

//We can also now use functions with forEach since we converted lis to an array
lis.forEach(function(li){
console.log(li.className);
li.textContent = 'Hello';
//Now they all say hello
});

//Query Selector All
//querySelectorAll is very similar to the first two selectors except that it returns a node list which allows us to use some (not all) built in array methods without having to convert the node list into an array manually

const newItems = document.querySelectorAll('li');
console.log(newItems);

//We can now use forEach functions and arrays methods without converting
newItems.forEach(function(li){
console.log(li.className);
li.textContent = 'poop';
//Now they all say poop
});






/*

- Travering the DOM means moving up and down 

If you use nodeType this is the key
1 = Element
2 = Attribute
3 = Text Node
8 = Comment
9 = Document itself
10 = Doctype

If it's more than one the values will be added together 2 + 9 = 11 which means attribute and the document itself

*/

let val;

const list = document.querySelector('ul.collection');
const listItem =  document.querySelector('li.collection-item:first-child');

val = listItem;
console.log(val);

val = list;
console.log(val);

//Get child nodes (line breaks count as text nodes FYI) This returns a node list
val = list.childNodes;
console.log(val);
val = list.hasChildNodes[0];
console.log(val);

//Get Children Element Nodes (this returns an HTML collection)
val = list.children;
console.log(val);

val = list.children[0];
console.log(val);

val = list.children[0];
val = list.textContent = 'Fuck Off';

//Get children of children
val = list.children[3].children[0].id = 'New ID';
console.log(val);

//Just watch the video if you have to. All it is is children.childrenschildren blah blah blah
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

//Clear Input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

//Key Down
taskInput.addEventListener('keydown', runEvent);

//Key up (WHen you lift the key up)
taskInput.addEventListener('keyup', runEvent);

//Key press (fires right when key is pressed)
taskInput.addEventListener('keypress', runEvent);


//focus
taskInput.addEventListener('focus', runEvent);

//blur
taskInput.addEventListener('blur', runEvent);

function runEvent(e) {
  console.log(`Event Type: ${e.type}`);

  console.log(e.target.value);

  heading.innerText = e.target.value;

  //Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
} 
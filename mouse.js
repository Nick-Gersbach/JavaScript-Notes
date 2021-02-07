const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//Click
clearBtn.addEventListener('click', runEvent);

//DoubleClick
clearBtn.addEventListener('dblclick', runEvent);

//Mouse Down (click and hold)
clearBtn.addEventListener('mousedown', runEvent);

//Mouse up (fire when you let go of mouse)
clearBtn.addEventListener('mouseup', runEvent);

//Mouse Enter
//Mouse Down (click and hold)
clearBtn.addEventListener('mouseenter', runEvent);

//Mouse Leave (mouse leave)
clearBtn.addEventListener('mouseleave', runEvent);

//Mouseover
card.addEventListener('mouseover', runEvent);

//Mouseout
card.addEventListener('mouseout', runEvent);

//mouse move
heading.addEventListener('mousemove', runEvent);

//Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  // e.preventDefault();

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40`;
}
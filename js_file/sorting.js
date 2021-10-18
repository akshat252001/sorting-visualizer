const createArray = document.getElementById('create-array');
const divContainer = document.getElementById('hero');

// heightarray sotres the height of the bar elemetns
let heightArray = [];
let scale = 5;
let barCount = 100;

function createcreateArray() {
  
  for (let i = 0; i < barCount; i++) {
    // generating 100 random numbers 
    heightArray.push(Math.floor(Math.random() * 100) + 1);
    // creating a div elemnt and adding a class 'style-bar' to it
    const bar = document.createElement('DIV');
    bar.classList.add('style-bar');
    // scaling the height and assigning it to the div element
    bar.style.height = `${heightArray[i] * scale}px`;
    // appending the div element to .hero class
    divContainer.appendChild(bar);
  }
}

function clearArray() {
  // clears the existing array every for the next function call
  while (divContainer.hasChildNodes()) {  
    divContainer.removeChild(divContainer.firstChild);
  }
  heightArray = [];

  createcreateArray();
}

createArray.addEventListener('click', clearArray);
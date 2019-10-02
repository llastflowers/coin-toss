// initialize/fetch DOM elements
const myButton = document.getElementById('my-button');

// set some initial state
let correctGuesses = 0;
let totalGuesses = 0;


// add event listener
myButton.addEventListener('click', () => {
    
    const selectedRadioButton = document.querySelector('input:checked');

    const myValue = selectedRadioButton.value;

    // alert(myValue);
});
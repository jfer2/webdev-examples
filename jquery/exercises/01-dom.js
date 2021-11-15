// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area

$('document').ready(() => {
  $('#copy').on('click', () => {
    $('#output1').text($('#userInput1').val());
  })

})

$('document').ready(() => {
  $('#userInput2').on('input', () => {
    $('#output2').text($('#userInput2').val());
  })

})

// let userInput = document.querySelector('#userInput1');
// let copy = document.querySelector('#copy');
// let output = document.querySelector('#output');

// copy.addEventListener('click', handleClick);

// function handleClick(event) {
//   console.log('click event', event);
//   output.textContent = userInput.value;
// }

// Option #2
// document.getElementById('copy').onclick = () => {
//   let userInput = document.getElementById('userInput1');
//   let output = document.getElementById('output');

//   output.textContent = userInput.value;
// };

// Option #3
// document.getElementById('copy').onclick = () => {
//   document.getElementById('output').textContent = document.getElementById(
//     'userInput1'
//   ).value;
// };

// Exercise #2:
// When the user enters input text, copy the user input to the output area

// let userInput2 = document.querySelector('#userInput2');

// userInput2.addEventListener('input', handleInput);

// let element = document.createElement('div');
// element.setAttribute('class', 'output');
// document.querySelector('#inputEventExample').append(element);

// function handleInput(event) {
//   console.log('click event', event);
//   element.textContent = userInput2.value;
// }

const displayWindow = document.querySelector('.display-window');
let realValue = document.querySelectorAll('.calculator button');

let realValueArray = Array.from(realValue);
console.log(realValueArray);
realValueArray.forEach(button => {
    button.addEventListener('click', ()=>
    {

        (button.value == 'AC') ? displayWindow.value = ' ' :
        (button.value == 'DE') ? displayWindow.value = displayWindow.value.toString().slice(0, -1) :
        (button.value == '=') ? displayWindow.value = eval(displayWindow.value) :
        displayWindow.value += button.value;

    });
});
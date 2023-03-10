let elementSelector = document.querySelectorAll('#select-element');

function optionFunc(value) {
    console.log(`My value is: ${value}`);
}

elementSelector.addEventListener("change", optionFunc(elementSelector.value));

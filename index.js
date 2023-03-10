let elementSelector = document.getElementById('select-element');

async function optionFunc(value) {
    console.log("ran");

    if (value == "-1") {
        console.log("no element selected");
    } else {
        console.log(`My value is: ${value}`);

        let apiData = await fetch(`https://neelpatel05.pythonanywhere.com/element/atomicnumber?atomicnumber=${value}`);
    
        console.log("made it");
    
        let jsonData = apiData.json();
    
        await console.log(jsonData);
    
    }
}

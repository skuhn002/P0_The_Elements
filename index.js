let elementSelector = document.getElementById('select-element');

const imageUrls = {
    1: {
            src: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/918/516/image-of-hydrogen-atom-1.jpg?ve=1&tl=1",
            alt: "hydrogen image"
        }
}

async function elementsUpdate(value) {
    console.log("ran");

    if (value == "-1") {
        console.log("no element selected");
    } else {
        console.log(`Atomic Number: ${value}`);

        //get element info
        let apiData = await fetch(`https://neelpatel05.pythonanywhere.com/element/atomicnumber?atomicnumber=${value}`);
        let jsonData = await apiData.json();
    
        console.log(jsonData);
    
        //update element info section
        document.getElementById("element-title").innerHTML = await jsonData.name;
        let elementImage = document.getElementById("element-image");
        elementImage.src = imageUrls[1].src;
        elementImage.alt = imageUrls[1].alt;        
    }
}

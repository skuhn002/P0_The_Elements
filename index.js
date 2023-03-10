let elementSelector = document.getElementById('select-element');

const imageUrls = {
    1: {
            src: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/918/516/image-of-hydrogen-atom-1.jpg?ve=1&tl=1",
            alt: "hydrogen image"
        },
    6: {
            src: "https://img-aws.ehowcdn.com/877x500p/photos.demandstudios.com/getty/article/130/170/sb10065243h-001.jpg",
            alt: "carbon image - diamonds and coal"
        },
    8: {
            src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Liquid_oxygen_in_a_beaker_4.jpg",
            alt: "oxygen image - liquid form - it's a beautiful light blue color"
        },
    26: {
            src: "https://imgs.search.brave.com/r_EH-V2SSusPxcMLSddZK4s_ftNUzdAlbseaiAo0F-o/rs:fit:600:480:1/g:ce/aHR0cHM6Ly9hazYu/cGljZG4ubmV0L3No/dXR0ZXJzdG9jay92/aWRlb3MvMjE4ODYv/dGh1bWIvMS5qcGc_/aTEwYz1pbWcucmVz/aXplKGhlaWdodDox/NjAp",
            alt: "iron image - molten iron poured into a cast"
        },
    79: {
            src: "https://imgs.search.brave.com/io3UzPX6c9fI3XS7Hud7tZ44hijWB8hS4Uvwkpj9ZLE/rs:fit:1200:637:1/g:ce/aHR0cHM6Ly9laXRy/YXdtYXRlcmlhbHMu/ZXUvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDYvb3JlLmpw/Zw",
            alt: "gold image - small nugget of gold ore"
        },
    87: {
            src: "https://studiousguy.com/wp-content/uploads/2020/10/Francium-properties.jpg",
            alt: "francium image - small red rock"
        },
    99: {
            src: "https://images.theconversation.com/files/382276/original/file-20210203-15-1jxhhxv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=1090&fit=crop&dpr=1",
            alt: "einsteinium image - small amount of glowing blue liquid in test tube"
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
        elementImage.src = imageUrls[value].src;
        elementImage.alt = imageUrls[value].alt;        
    }
}

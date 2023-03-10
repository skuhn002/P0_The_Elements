let elementSelector = document.getElementById('select-element');

const elementSpecifics = {
    1: {
            src: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/918/516/image-of-hydrogen-atom-1.jpg?ve=1&tl=1",
            alt: "hydrogen image",
            funFact: "Hydrogen is the most simple element with only one proton, that's why it looks like a perfect sphere in this image. In a way, the Hydrogen atom is the bridge between physics and chemistry."
        },
    6: {
            src: "https://img-aws.ehowcdn.com/877x500p/photos.demandstudios.com/getty/article/130/170/sb10065243h-001.jpg",
            alt: "carbon image - diamonds and coal",
            funFact: "Carbon is the basis of all life on Earth, because it can easily form 4 bonds at a time. This allows it to store energy whether that is in food or coal. Clear diamonds are also made of pure carbon!"
        },
    8: {
            src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Liquid_oxygen_in_a_beaker_4.jpg",
            alt: "oxygen image - liquid form - it's a beautiful light blue color",
            funFact: "Not many people know this, but Oxygen is actually slightly blue! This is the real reason why the sky is blue. It's easier to tell when you cool the oxygen down and see it as a liquid like this."
        },
    26: {
            src: "https://imgs.search.brave.com/r_EH-V2SSusPxcMLSddZK4s_ftNUzdAlbseaiAo0F-o/rs:fit:600:480:1/g:ce/aHR0cHM6Ly9hazYu/cGljZG4ubmV0L3No/dXR0ZXJzdG9jay92/aWRlb3MvMjE4ODYv/dGh1bWIvMS5qcGc_/aTEwYz1pbWcucmVz/aXplKGhlaWdodDox/NjAp",
            alt: "iron image - molten iron poured into a cast",
            funFact: "Iron is an important element, because it is very strong in it's solid form, but we can melt it down into a liquid form to shape it however we need to. This is how tools have been made for centuries!"
        },
    79: {
            src: "https://imgs.search.brave.com/io3UzPX6c9fI3XS7Hud7tZ44hijWB8hS4Uvwkpj9ZLE/rs:fit:1200:637:1/g:ce/aHR0cHM6Ly9laXRy/YXdtYXRlcmlhbHMu/ZXUvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDYvb3JlLmpw/Zw",
            alt: "gold image - small nugget of gold ore",
            funFact: "Gold is also a metal, but it is much more maleable than iron. Some people used to test the validity of gold coins by biting them slightly to see if their teeth left an imprint."
        },
    87: {
            src: "https://studiousguy.com/wp-content/uploads/2020/10/Francium-properties.jpg",
            alt: "francium image - small red rock",
            funFact: "Francium is one of the largest and most reactive common elements. You'll probably never find Francium, but if you do, do not drop water on it unless you want to see some massive fireworks."
        },
    99: {
            src: "https://images.theconversation.com/files/382276/original/file-20210203-15-1jxhhxv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=1090&fit=crop&dpr=1",
            alt: "einsteinium image - small amount of glowing blue liquid in test tube",
            funFact: "Einsteinium is named after Albert Einstein. Elements this large aren't very common, because powerful nuclear reactions are required to create them, and they are very unstable. However, because elements this large tend to be very unstable, they tend to be radioactive and therefore tend to glow."
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
        document.getElementById("element-title").innerHTML = await jsonData.name + ` (#${value})`;
        let elementImage = document.getElementById("element-image");
        elementImage.src = elementSpecifics[value].src;
        elementImage.alt = elementSpecifics[value].alt;
        
        document.getElementById("fun-fact").innerHTML = elementSpecifics[value].funFact;

        document.getElementById("year-discovered-label").innerHTML = "Approximate Discovery Date: &nbsp";        
        document.getElementById("year-discovered").innerHTML = jsonData.yearDiscovered;

        document.getElementById("ion-states-label").innerHTML = await `${jsonData.name} Ionization States: `;
        document.getElementById("ion-states").innerHTML = jsonData.oxidationStates
        
        let ionInfoP = document.createElement("P");
        ionInfoP.innerHTML = "The Ioniztion state of an element tells you what states of charge it normally accepts. An ionization state of -1 for example means the element has 1 more electron than it would need for the charge of it's protons to perfectly balance out the charge of it's electrons.";

        let ionInfoNode = document.getElementById("ion-extra-info");

        ionInfoNode.append(ionInfoP);
    }
}

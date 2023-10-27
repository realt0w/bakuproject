function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const BakuganList = document.getElementById("Bakugan-list");
    const BakuganPopup = document.getElementById("Bakugan-popup");
    const popupImage = document.getElementById("popup-image");
    const popupTypeImage = document.getElementById("popup-type-image");
    const popupText = document.getElementById("popup-text");
    const closePopup = document.getElementById("close-popup");
    const BakuganType = document.getElementById("Bakugan-type");

    const BakuganData = [
        {
            type: "Pyrus",
            image: "./images/Bakugan/PyrusHarpus.png",
            title: "Harpus",
            description: "Harpus may have super sharp claws, but her tongue is her best weapon. Harpus taunts, teases, and makes fun of opponent on the field. Her frustrated foe will lose focus in battle so that Harpus can make her move. Nobody can argue like Harpus!",
            power: "370 G",
            price: "6.000 HSP",
        },
        {
            type: "Pyrus",
            image: "./images/Bakugan/PyrusDualHydranoid.png",
            title: "Dual Hydranoid",
            description: "This Bakugan is extremely strong, and it steals energy from Bakugan sent to the Doom Dimension to become stronger. Only a cruel and heartless creature could do that! In battle, Hydranoid is hard to defeat, thanks to its tough outer skin and double heads. It lashes out at opponents with its long tail. Hydranoid may not be able to move fast, but it makes up for its lack of speed with the sheer force of its attacks.",
            power: "480 G",
            price: "12.500 HSP",
        },
        {
            type: "Darkus",
            image: "./images/Bakugan/DarkusSerpenoid.png",
            title: "Serpenoid",
            description: "The slow squeeze is Serpenoid's method of choice to subdue its enemies. The snakelike Bakugan wraps itself around a foe and slowly and painfully squeezes. Serpenoid will drain energy as it does this, making itself stronger while sucking all of its enemy's power. You'll often see Serpenoid slithering on the ground, but watch out. It can spring up and attack without a moment's notice.",
            power: "290 G",
            price: "2.250 HSP",
        },
        {
            type: "Pyrus",
            image: "./images/Bakugan/PyrusTentaclear.png",
            title: "Tentaclear",
            description: "This Bakugan has its eye on you! It's one giant eyeball with six tentacles around it. The eyeball can emit a shining beam of light to blind its enemy. And each of the tentacles can deliver a sharp sting.",
            power: "370 G",
            price: "6.500 HSP",
        },
        {
            type: "Pyrus",
            image: "./images/Bakugan/PyrusSirenoid.png",
            title: "Sirenoid",
            description: "You won't find this mermaid-like Bakugan in any fairy tale! It's true when Sirenoid plays her lyre it can calm the souls of everyone around. And she can use her long tail to swim gracefully through the water. But Sirenoid can also create a forceful wave that will boost her power-and to destroy her opponents.",
            power: "370 G",
            price: "7.500 HSP",
        },
        {
            type: "Pyrus",
            image: "./images/Bakugan/PyrusRobotalion.png",
            title: "Robotallion",
            description: "Some Bakugan are driven by anger or a lust for power, but not Robotallion. It has a strong sense of justice and will do anything to serve and protect its friends. If anything gets in its way, Robotallion will slice through it with the giant blades that extend from its body.",
            power: "290 G",
            price: "3.500 HSP",
        },
        {
            type: "Pyrus",
            image: "./images/Bakugan/PyrusDragonoid.png",
            title: "Dragonoid",
            description: "Even though Dragonoid gets more and more powerful with each evolved form, his original form is one to be reckoned with. He can raise so much fiery energy during a battle that everything around him melts. His unusually high intelligence allows him to strategize on the field. Dragonoid's main weakness is that he's not extremely agile, but what he loses in mobility he makes up for with his powerful strikes.",
            power: "340 G",
            price: "8.000 HSP",
        },
        {
            type: "Ventus",
            image: "./images/Bakugan/VentusFearRipper.png",
            title: "Fear Ripper",
            description: "Fear Ripper gets its name from its monstrous claws. Each one is three times bigger than its head! Fear Ripper can use them to slash its enemies on the battlefield.",
            power: "300 G",
            price: "4.000 HSP",
        },
        {
            type: "Ventus",
            image: "./images/Bakugan/VentusGorem.png",
            title: "Gorem",
            description: "This giant is normally gentle, but it can get very angry in the heat of battle. When that happens, watch out! Gorem uses its massive fist to pound its opponents. Its strong shield can lower the G-Power of any Bakugan. Attackers have a hard time making a dent in Gorem's hard body. That's because the cells in its body are very dense.",
            power: "380 G",
            price: "6.750 HSP",
        },
        {
            type: "Ventus",
            image: "./images/Bakugan/VentusLeonidas.png",
            title: "Leonidas",
            description: "Leonidas is a Bakugan born directly within the Doom Dimension. He has an amazing yet unknown power and intense anger toward other Bakugan. Only trust and friendship can help Leonidas escape his cursed birth and awaken his true power.",
            power: "400 G",
            price: "10.000 HSP",
        },
        {
            type: "Ventus",
            image: "./images/Bakugan/VentusLaserman.png",
            title: "Laserman",
            description: "The first thing you'll notice about this giant robot is the three enormous laser cannons on its shoulders. Each laser has a different ability. One can extinguish the fire, the other can freeze water, and the third can explode rock. That means Laserman is equipped to take down just about any Bakugan!",
            power: "370 G",
            price: "5.500 HSP",
        },
        {
            type: "Ventus",
            image: "./images/Bakugan/VentusMonarus.png",
            title: "Monarus",
            description: "This Bakugan looks like a beautiful butterfly, but don't be fooled by its good looks. When it flaps its wings, it can create a mighty hurricane wind to blow its opponents away! Lightweight Monarus is a super-fast flyer, and it can soar right over a Gate card to escape its effects.",
            power: "330 G",
            price: "3.750 HSP",
        },
        {
            type: "Ventus",
            image: "./images/Bakugan/VentusDualHydranoid.png",
            title: "Dual Hydranoid",
            description: "This Bakugan is extremely strong, and it steals energy from Bakugan sent to the Doom Dimension to become stronger. Only a cruel and heartless creature could do that! In battle, Hydranoid is hard to defeat, thanks to its tough outer skin and double heads. It lashes out at opponents with its long tail. Hydranoid may not be able to move fast, but it makes up for its lack of speed with the sheer force of its attacks.",
            power: "480 G",
            price: "12.500 HSP",
        },
        {
            type: "Ventus",
            image: "./images/Bakugan/VentusGargonoid.png",
            title: "Gargonoid",
            description: "Gargonoid resembles a gargoyle, one of those creepy stone statues mounted on buildings to scare off evil spirits. On the field, Gargonoid does a good job of scaring his opponents. His wings are tipped with sharp spikes. His long, curved horns are dangerous weapons and his clawed hands can shred just about anything in his path. Top that off with a scary gargoyle face and you've got one frightening foe.",
            power: "320 G",
            price: "2.250 HSP",
        },
        // Add more Bakugan data as needed
    ];
    
    shuffleArray(BakuganData);

    // Function to create Bakugan elements
    function createBakugan(BakuganInfo) {
        const Bakugan = document.createElement("div");
        Bakugan.classList.add("Bakugan");
        Bakugan.setAttribute("data-type", BakuganInfo.type);

        const BakuganImage = document.createElement("img");
        BakuganImage.src = BakuganInfo.image;
        BakuganImage.alt = BakuganInfo.title;

        const BakuganInfoContainer = document.createElement("div");
        BakuganInfoContainer.classList.add("Bakugan-info-container");
    
        const additionalImage = document.createElement("img");
    
        // Set the second image source based on the Bakugan's element
        switch ((BakuganInfo.type?BakuganInfo.type:'').toLowerCase()) {
            case "aquos":
                additionalImage.src = "./images/aquos.svg";
                break;
            case "pyrus":
                additionalImage.src = "./images/pyrus.svg";
                break;
            case "haos":
                additionalImage.src = "./images/haos.svg";
                break;
            case "darkus":
                additionalImage.src = "./images/darkus.svg";
                break;
            case "ventus":
                additionalImage.src = "./images/ventus.svg";
                break;
            case "subterra":
                additionalImage.src = "./images/subterra.svg";
                break;
            default:
                additionalImage.src = "./images/default.svg";
        }

        const BakuganTitle = document.createElement("h2");
        BakuganTitle.textContent = BakuganInfo.title;

        const BakuganDescription = document.createElement("p");
        BakuganDescription.textContent = BakuganInfo.description;

        const BakuganPower = document.createElement("p");
        BakuganPower.textContent = BakuganInfo.power;

        const BakuganPrice = document.createElement("p");
        BakuganPrice.textContent = BakuganInfo.price;

        BakuganInfoContainer.appendChild(additionalImage);
        BakuganInfoContainer.appendChild(BakuganTitle);

        Bakugan.appendChild(BakuganImage);
        Bakugan.appendChild(BakuganInfoContainer);
        Bakugan.appendChild(BakuganDescription);
        Bakugan.appendChild(BakuganPower);
        Bakugan.appendChild(BakuganPrice);

        BakuganList.appendChild(Bakugan);
    }

    // Populate Bakugan list with data
    BakuganData.forEach(BakuganInfo => {
        createBakugan(BakuganInfo);
    });

    BakuganList.querySelectorAll(".Bakugan").forEach(Bakugan => {
        Bakugan.addEventListener("click", () => {
            const BakuganImage = Bakugan.querySelector("img");
            const BakuganTitle = Bakugan.querySelector("h2");
            const BakuganDescription = Bakugan.querySelector("p");
            const BakuganPrice = Bakugan.querySelector("p");
            const BakuganPower = Bakugan.querySelector("p");
    
            popupImage.src = BakuganImage.src;
            popupImage.alt = BakuganImage.alt;
            popupText.querySelector("h2").textContent = BakuganTitle.textContent;
            popupText.querySelector("p").textContent = BakuganDescription.textContent;
            popupText.querySelector("p").textContent = BakuganPower.textContent;
            popupText.querySelector("p").textContent = BakuganPrice.textContent;
    
            // Get the Bakugan type for the image source
            const BakuganType = Bakugan.getAttribute("data-type");
            switch ((BakuganType?BakuganType:'').toLowerCase()) {
                case "aquos":
                    popupTypeImage.src = "./images/aquos.svg";
                    break;
                case "pyrus":
                    popupTypeImage.src = "./images/pyrus.svg";
                    break;
                case "haos":
                    popupTypeImage.src = "./images/haos.svg";
                    break;
                case "darkus":
                    popupTypeImage.src = "./images/darkus.svg";
                    break;
                case "ventus":
                    popupTypeImage.src = "./images/ventus.svg";
                    break;
                case "subterra":
                    popupTypeImage.src = "./images/subterra.svg";
                    break;
                default:
                    // Set a default image if needed
                    popupTypeImage.src = "./images/default.svg";
            }
    
            BakuganPopup.style.display = "flex";
        });
    });
    

    closePopup.addEventListener("click", () => {
        BakuganPopup.style.display = "none";
    });
	
window.onkeydown = function(e) {
  var keyCode = e.key || e.keyIdentifier || e.keyCode;
  if (keyCode == 27 || keyCode == 'Escape') {
    BakuganPopup.style.display = "none";
  }
}

    BakuganType.addEventListener("change", () => {
        const selectedType = BakuganType.value;
        BakuganList.querySelectorAll(".Bakugan").forEach(Bakugan => {
            const BakuganDataType = Bakugan.getAttribute("data-type");
            if (selectedType === "all" || selectedType === BakuganDataType) {
                Bakugan.style.display = "block";
            } else {
                Bakugan.style.display = "none";
            }
        });
    });
    const searchBar = document.getElementById("search-bar");

searchBar.addEventListener("input", function () {
    const searchQuery = searchBar.value.toLowerCase();

    BakuganList.querySelectorAll(".Bakugan").forEach(Bakugan => {
        const BakuganTitle = Bakugan.querySelector("h2");

        const titleText = BakuganTitle.textContent.toLowerCase();

        if (titleText.includes(searchQuery)) {
            Bakugan.style.display = "block";
        } else {
            Bakugan.style.display = "none";
        }
    });
});

});

document.addEventListener("DOMContentLoaded", function () {
    const cardList = document.getElementById("card-list");
    const cardPopup = document.getElementById("card-popup");
    const popupImage = document.getElementById("popup-image");
    const popupTypeImage = document.getElementById("popup-type-image");
    const popupText = document.getElementById("popup-text");
    const closePopup = document.getElementById("close-popup");
    const cardType = document.getElementById("card-type");
    const cardAttribute = document.getElementById("card-attribute");

    const cardData = [
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "haos",
            title: "Haos - 30",
            description: "Haos bakugan present on the gate card gain +30 G's.",
            price: "??? HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "haos",
            title: "Haos - 50",
            description: "Haos bakugan present on the gate card gain +50 G's.",
            price: "??? HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "haos",
            title: "Haos - 70",
            description: "Haos bakugan present on the gate card gain +70 G's.",
            price: "??? HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "pyrus",
            title: "Pyrus - 30",
            description: "Pyrus bakugan present on the gate card gain +30 G's.",
            price: "??? HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "pyrus",
            title: "Pyrus - 50",
            description: "Pyrus bakugan present on the gate card gain +50 G's.",
            price: "??? HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "pyrus",
            title: "Pyrus - 70",
            description: "Pyrus bakugan present on the gate card gain +70 G's.",
            price: "??? HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "ventus",
            title: "Ventus - 30",
            description: "Ventus bakugan present on the gate card gain +30 G's.",
            price: "??? HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "ventus",
            title: "Ventus - 50",
            description: "Ventus bakugan present on the gate card gain +50 G's.",
            price: "??? HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "ventus",
            title: "Ventus - 70",
            description: "Ventus bakugan present on the gate card gain +70 G's.",
            price: "??? HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "darkus",
            title: "Darkus - 30",
            description: "Darkus bakugan present on the gate card gain +30 G's.",
            price: "??? HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "darkus",
            title: "Darkus - 50",
            description: "Darkus bakugan present on the gate card gain +50 G's.",
            price: "??? HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "darkus",
            title: "Darkus - 70",
            description: "Darkus bakugan present on the gate card gain +70 G's.",
            price: "??? HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "subterra",
            title: "Subterra - 30",
            description: "Subterra bakugan present on the gate card gain +30 G's.",
            price: "??? HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "subterra",
            title: "Subterra - 50",
            description: "Subterra bakugan present on the gate card gain +50 G's.",
            price: "??? HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "subterra",
            title: "Subterra - 70",
            description: "Subterra bakugan present on the gate card gain +70 G's.",
            price: "??? HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "aquos",
            title: "Aquos - 30",
            description: "Aquos bakugan present on the gate card gain +30 G's.",
            price: "??? HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "aquos",
            title: "Aquos - 50",
            description: "Aquos bakugan present on the gate card gain +50 G's.",
            price: "??? HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "aquos",
            title: "Aquos - 70",
            description: "Aquos bakugan present on the gate card gain +70 G's.",
            price: "??? HSP"
        },
        {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Battle Sham",
            description: "If there only are two bakugan from the same team present, one of them attcks a random adjacent enemy bakugan.",
            price: "??? HSP"
        },
        {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Leap Sting",
            description: "???",
            price: "??? HSP"
        },
        {
            type: "CHGC",
            image: "./images/cards/ReaperGateCards.png",
            title: "Reaper",
            description: "???",
            price: "??? HSP"
        },
        {
            type: "SAC",
            image: "./images/cards/Anthemusa.png",
            title: "Anthemusa",
            description: "All weaker adjacent Bakugan are moved to Sirenoid's gate card and immediately defeated.",
            price: "??? HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            attribute: "pyrus",
            title: "Fire Wall",
            description: "An opponent's Bakugan loses -50 G's.",
            price: "??? HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Diagonal Link - Pyrus & Darkus",
            description: "If there is a Pyrus/Darkus Bakugan on the field, your opposite Attributed Bakugan gains +100 G's. If the other Bakugan was an ally, it gains +100 G's as well.",
            price: "??? HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/GateBuilding.png",
            title: "Gate Building",
            description: "Set a Gate Card down during battle.",
            price: "??? HSP"
        },
        {
            type: "CGC",
            image: "./images/cards/CheeringBattle.png",
            title: "Cheering Battle",
            description: "Add an additional Bakugan to the battle but it's power level is reduced by 100 until it's 100 or less.",
            price: "??? HSP"
        },
        {
            type: "CHGC",
            image: "./images/cards/SiegeGateCards.png",
            title: "Siege",
            description: "Siege's power level is doubled.",
            price: "??? HSP"
        },
        // Add more card data as needed
    ];

// Function to create card elements
function createCard(cardInfo) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-type", cardInfo.type);
    card.setAttribute("data-attribute", cardInfo.attribute);

    const cardImage = document.createElement("img");
    cardImage.src = cardInfo.image;
    cardImage.alt = cardInfo.title;

    const cardInfoContainer = document.createElement("div");
    cardInfoContainer.classList.add("card-info-container");

    const additionalImage = document.createElement("img");

    // Set the second image source based on the card's element
    switch (cardInfo.attribute) {
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

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = cardInfo.title;

    const cardDescription = document.createElement("p");
    cardDescription.textContent = cardInfo.description;

    const cardPrice = document.createElement("p");
    cardPrice.textContent = cardInfo.price;

    cardInfoContainer.appendChild(additionalImage);
    cardInfoContainer.appendChild(cardTitle);

    card.appendChild(cardImage);
    card.appendChild(cardInfoContainer);
    card.appendChild(cardDescription);
    card.appendChild(cardPrice);

    cardList.appendChild(card);
}

// Populate card list with data
cardData.forEach(cardInfo => {
    createCard(cardInfo);
});



    cardList.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            const cardImage = card.querySelector("img");
            const cardTitle = card.querySelector("h2");
            const cardDescription = card.querySelector("p");
            const cardPrice = card.querySelector("p");

            popupImage.src = cardImage.src;
            popupImage.alt = cardImage.alt;
            popupText.querySelector("h2").textContent = cardTitle.textContent;
            popupText.querySelector("p").textContent = cardDescription.textContent;
            popupText.querySelector("p").textContent = cardPrice.textContent;
    
            // Get the Bakugan type for the image source
            const cardAttribute = card.getAttribute("data-attribute");
            switch (cardAttribute) {
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

            cardPopup.style.display = "flex";
        });
    });

    closePopup.addEventListener("click", () => {
        cardPopup.style.display = "none";
    });

    cardType.addEventListener("change", () => {
        const selectedType = cardType.value;
        cardList.querySelectorAll(".card").forEach(card => {
            const cardDataType = card.getAttribute("data-type");
            if (selectedType === "all" || selectedType === cardDataType) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
    
    const searchBar = document.getElementById("search-bar");

searchBar.addEventListener("input", function () {
    const searchQuery = searchBar.value.toLowerCase();

    cardList.querySelectorAll(".card").forEach(card => {
        const cardTitle = card.querySelector("h2");

        const titleText = cardTitle.textContent.toLowerCase();

        if (titleText.includes(searchQuery)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
});

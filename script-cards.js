document.addEventListener("DOMContentLoaded", function () {
    const cardList = document.getElementById("card-list");
    const cardPopup = document.getElementById("card-popup");
    const popupImage = document.getElementById("popup-image");
    const popupText = document.getElementById("popup-text");
    const closePopup = document.getElementById("close-popup");
    const cardType = document.getElementById("card-type");

    const cardData = [
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            title: "Haos - 30",
            description: "Haos bakugan present on the gate card gain +30 G's.",
            price: "??? HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            title: "Haos - 50",
            description: "Haos bakugan present on the gate card gain +50 G's.",
            price: "??? HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            title: "Haos - 70",
            description: "Haos bakugan present on the gate card gain +70 G's.",
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
            description: "TBD",
            price: "??? HSP"
        },
        {
            type: "CHGC",
            image: "./images/cards/ReaperGateCards.png",
            title: "Reaper",
            description: "TBD",
            price: "??? HSP"
        },
        // Add more card data as needed
    ];

    // Function to create card elements
    function createCard(cardInfo) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-type", cardInfo.type);

        const cardImage = document.createElement("img");
        cardImage.src = cardInfo.image;
        cardImage.alt = cardInfo.title;

        const cardTitle = document.createElement("h2");
        cardTitle.textContent = cardInfo.title;

        const cardDescription = document.createElement("p");
        cardDescription.textContent = cardInfo.description;

        const cardPrice = document.createElement("p");
        cardPrice.textContent = cardInfo.price;

        card.appendChild(cardImage);
        card.appendChild(cardTitle);
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
});

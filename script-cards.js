function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const cardList = document.getElementById("card-list");
    const cardPopup = document.getElementById("card-popup");
    const popupImage = document.getElementById("popup-image");
    const popupTypeImage = document.getElementById("popup-type-image");
    const popupText = document.getElementById("popup-text");
    const closePopup = document.getElementById("close-popup");
    const cardType = document.getElementById("card-type");
    const cardAttribute = document.getElementById("card-attribute");	
    const cardsAttribute = document.getElementById("cards-attribute");//Selected one
	

    const cardData = [
	    {
            type: "CHGC",
            image: "./images/cards/BeeStrikerGateCards.png",
            title: "Bee Striker",
            description: "Bee Striker's power level is doubled.",
            price: "2,000 HSP"		    
        },
	    {
            type: "CHGC",
            image: "./images/cards/SirenoidGateCards.png",
            title: "Sirenoid",
            description: "Sirenoid's power level is doubled.",
            price: "??? HSP"		    
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "haos",
            title: "Haos - 30",
            description: "Haos bakugan present on the gate card gain +30 G's.",
            price: "250 HSP"
        },	
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "haos",
            title: "Haos - 50",
            description: "Haos bakugan present on the gate card gain +50 G's.",
            price: "500 HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "haos",
            title: "Haos - 70",
            description: "Haos bakugan present on the gate card gain +70 G's.",
            price: "1,000 HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "pyrus",
            title: "Pyrus - 30",
            description: "Pyrus bakugan present on the gate card gain +30 G's.",
            price: "250 HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "pyrus",
            title: "Pyrus - 50",
            description: "Pyrus bakugan present on the gate card gain +50 G's.",
            price: "500 HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "pyrus",
            title: "Pyrus - 70",
            description: "Pyrus bakugan present on the gate card gain +70 G's.",
            price: "1,000 HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "ventus",
            title: "Ventus - 30",
            description: "Ventus bakugan present on the gate card gain +30 G's.",
            price: "250 HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "ventus",
            title: "Ventus - 50",
            description: "Ventus bakugan present on the gate card gain +50 G's.",
            price: "500 HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "ventus",
            title: "Ventus - 70",
            description: "Ventus bakugan present on the gate card gain +70 G's.",
            price: "1,000 HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "darkus",
            title: "Darkus - 30",
            description: "Darkus bakugan present on the gate card gain +30 G's.",
            price: "250 HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "darkus",
            title: "Darkus - 50",
            description: "Darkus bakugan present on the gate card gain +50 G's.",
            price: "500 HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "darkus",
            title: "Darkus - 70",
            description: "Darkus bakugan present on the gate card gain +70 G's.",
            price: "1,000 HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "subterra",
            title: "Subterra - 30",
            description: "Subterra bakugan present on the gate card gain +30 G's.",
            price: "250 HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "subterra",
            title: "Subterra - 50",
            description: "Subterra bakugan present on the gate card gain +50 G's.",
            price: "500 HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "subterra",
            title: "Subterra - 70",
            description: "Subterra bakugan present on the gate card gain +70 G's.",
            price: "1,000 HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "aquos",
            title: "Aquos - 30",
            description: "Aquos bakugan present on the gate card gain +30 G's.",
            price: "250 HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "aquos",
            title: "Aquos - 50",
            description: "Aquos bakugan present on the gate card gain +50 G's.",
            price: "500 HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "aquos",
            title: "Aquos - 70",
            description: "Aquos bakugan present on the gate card gain +70 G's.",
            price: "1,000 HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "pyrus",
            title: "Pyrus - 100",
            description: "Pyrus bakugan present on the gate card gain +100 G's.",
            price: "2,000 HSP"
        },
		{
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "ventus",
            title: "Ventus - 100",
            description: "Ventus bakugan present on the gate card gain +100 G's.",
            price: "2,000 HSP"
        },
		{
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "darkus",
            title: "Darkus - 100",
            description: "Darkus bakugan present on the gate card gain +100 G's.",
            price: "2,000 HSP"
        },
		{
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "aquos",
            title: "Aquos - 100",
            description: "Aquos bakugan present on the gate card gain +100 G's.",
            price: "2,000 HSP"
        },
		{
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "subterra",
            title: "Subterra - 100",
            description: "Subterra bakugan present on the gate card gain +100 G's.",
            price: "2,000 HSP"
        },
		{
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "haos",
            title: "Haos - 100",
            description: "Haos bakugan present on the gate card gain +100 G's.",
            price: "2,000 HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "pyrus",
            title: "Pyrus - 150",
            description: "Pyrus bakugan present on the gate card gain +150 G's.",
            price: "3,500 HSP"
        },
		{
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "ventus",
            title: "Ventus - 150",
            description: "Ventus bakugan present on the gate card gain +150 G's.",
            price: "3,500 HSP"
        },
		{
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "darkus",
            title: "Darkus - 150",
            description: "Darkus bakugan present on the gate card gain +150 G's.",
            price: "3,500 HSP"
        },
		{
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "aquos",
            title: "Aquos - 150",
            description: "Aquos bakugan present on the gate card gain +150 G's.",
            price: "3,500 HSP"
        },
		{
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "subterra",
            title: "Subterra - 150",
            description: "Subterra bakugan present on the gate card gain +150 G's.",
            price: "3,500 HSP"
        },
		{
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "haos",
            title: "Haos - 150",
            description: "Haos bakugan present on the gate card gain +150 G's.",
            price: "3,500 HSP"
        },
        {
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "pyrus",
            title: "Pyrus - 200",
            description: "Pyrus bakugan present on the gate card gain +200 G's.",
            price: "5,000 HSP"
        },
		{
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "ventus",
            title: "Ventus - 200",
            description: "Ventus bakugan present on the gate card gain +200 G's.",
            price: "5,000 HSP"
        },
		{
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "darkus",
            title: "Darkus - 200",
            description: "Darkus bakugan present on the gate card gain +200 G's.",
            price: "5,000 HSP"
        },
		{
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "aquos",
            title: "Aquos - 200",
            description: "Aquos bakugan present on the gate card gain +200 G's.",
            price: "5,000 HSP"
        },
		{
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "subterra",
            title: "Subterra - 200",
            description: "Subterra bakugan present on the gate card gain +200 G's.",
            price: "5,000 HSP"
        },
		{
            type: "NGC",
            image: "./images/cards/NormallGateCards.png",
            attribute: "haos",
            title: "Haos - 200",
            description: "Haos bakugan present on the gate card gain +200 G's.",
            price: "5,000 HSP"
        },
        {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Battle Sham",
            description: "If there only are two bakugan from the same team present, one of them attcks a random adjacent enemy bakugan.",
            price: "??? HSP"
        },
        {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Positive Delta",
            description: "If the opponent's Bakugan is Pyrus, Aquos or Haos, it loses -200 G's. Otherwise the user's Bakugan loses -200 G's.",
            price: "??? HSP"
        },
	    {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Negative Delta",
            description: "If the opponent's Bakugan is Darkus, Subterra or Ventus, it loses -200 G's. Otherwise the user's Bakugan loses -200 G's.",
            price: "2,750 HSP"
        },
	    {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Final Judgement",
            description: "All non-Haos Bakugan on the gate card have their power levels reduced to 0.",
            price: "??? HSP"
        },
        {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Leap Sting",
            description: "An opponent's Bakugan loses 50 G's, and Laserman can attack it from anywhere on the field. If it was defeated, Laserman is returned to your hand.",
            price: "??? HSP"
        }, 
	    {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Forcing Wave",
            description: "Sirenoid gains +100 G's.",
            price: "2,000 HSP"
        },  
	{
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Green Nobility - Violent Wind",
            description: "Skyress gains +100 G's",
            price: "2000 HSP"
        },     
         {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Dimension Four",            
            description: "Nullify the attribute gate card Reaper is standing on.",
            price: "??? HSP"
        }, //Putting a non attributed version as it seems all attributes may be able to use? seen Haos, Ventus and Darkus
        {
            type: "CHGC",
            image: "./images/cards/ReaperGateCards.png",
            title: "Reaper",
            description: "Reaper's power level is doubled.",
            price: "3500 HSP"
        },
        {
            type: "SAC",
            image: "./images/cards/Anthemusa.png",
            title: "Anthemusa",
            description: "All weaker adjacent Bakugan are moved to Sirenoid's gate card and immediately defeated.",
            price: "??? HSP"
        },
	{
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Dark Sphere Impact",
            description: "An opponent's Bakugan loses -200 G's.",
            price: "??? HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/FireWall.png",
            attribute: "pyrus",
            title: "Fire Wall",
            description: "An opponent's Bakugan loses -50 G's.",
            price: "750 HSP"
        },
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            attribute: "ventus",
            title: "Backdraft",
            description: "Return a Bakugan to it's owner.",
            price: "2,500 HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Diagonal Link - Pyrus & Darkus",
            description: "If there is a Pyrus/Darkus Bakugan on the field, your opposite Attributed Bakugan gains +100 G's. If the other Bakugan was an ally, it gains +100 G's as well.",
            price: "1,500 HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/GateBuilding.png",
	    title: "Gate Building",
	    attribute: "subterra",
            description: "Draw a Gate Card from your Deck, then set a Gate Card on the field.",
            price: "1,750 HSP"
        },
        {
            type: "CGC",
            image: "./images/cards/CheeringBattle.png",
            title: "Cheering Battle",
            description: "Add an additional Bakugan to the battle but it's power level is reduced by 100 until it's 100 or less.",
            price: "??? HSP"
        },
	    {
            type: "CGC",
            image: "./images/cards/CheeringBattle.png",
            title: "Joker's Wild",
            description: "If the gate card contains both Darkus and Pyrus Bakugan, all non-Darkus Bakugan are immediately defeated.",
            price: "5,000 HSP"
        },
	{
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Reinforcement",
            description: "Your Bakugan's Power Level increasesby 100 G's for each other Bakugan on your side of the field with the same attribute.",
            price: "3,500 HSP"
        },	
        {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Peacemaker",
            description: "All Bakugan on the gate card are returned to their owner's hands.",
            price: "2,250 HSP"
        },
        {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Additional Task",
            description: "The last Bakugan thrown on the gate card is returned to it's owner and is replaced by another Bakugan from their hand.",
            price: "??? HSP"
        },
	    {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Trade-Off",
            description: "Either side with a combined power level of over 400 G's is defeated.",
            price: "3000 HSP"
        },
        {
            type: "CHGC",
            image: "./images/cards/SiegeGateCards.png",
            title: "Siege",
            description: "Siege's power level is doubled.",
            price: "3,000 HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            attribute: "pyrus",
            title: "Correlation - Pyrus & Subterra",
            description: "If there is a Subterra Bakugan on the field, your Pyrus Bakugan gains +100 G's. If the other Bakugan was an ally, both Bakugan gain +50 G's instead.",
            price: "1,250 HSP"
        },
	{
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            attribute: "ventus",
            title: "Reverse Blow",
            description: "Return your Ventus Bakugan to your hand.",
	    price: "800 HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            attribute: "Subterra",
            title: "Correlation - Subterra & Haos",
            description: "If there is a Haos Bakugan on the field, your Subterra Bakugan gains +100 G's. If the other Bakugan was an ally, both Bakugan gain +50 G's instead.",
            price: "1,500 HSP"
        },
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            attribute: "Ventus",
            title: "Correlation - Ventus & Pyrus",
            description: "If there is a Pyrus Bakugan on the field, your Ventus Bakugan gains +100 G's. If the other Bakugan was an ally, both Bakugan gain +50 G's instead.",
            price: "1,500 HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            attribute: "Haos",
            title: "Correlation - Haos & Darkus",
            description: "If there is a Darkus Bakugan on the field, your Haos Bakugan gains +100 G's. If the other Bakugan was an ally, both Bakugan gain +50 G's instead.",
            price: "??? HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            attribute: "subterra",
            title: "Earth Power",
            description: "Increase your Subterra Bakugan's power level by +50 G's.",
            price: "??? HSP"
        },
        {
            type: "SAC",
            image: "./images/cards/Anthemusa.png",
            attribute: "subterra",
            title: "Mega Impact",
            description: "Gorem gains +50 G's, and an opponent's Bakugan loses -100 G's.",
            price: "??? HSP"
        },
	{
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",            
            title: "Face of Grief",
            description: "Immediately nullify the opponent's last ability card.",
            price: "2,500 HSP"
        },
	    {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",            
            title: "Face of Rage",
            description: "Fourtress gains +50 G's, and your opponent's Bakugan loses -50 G's.",
            price: "??? HSP"
        },
        {
            type: "CGC",
            image: "./images/cards/QuartetBattle.png",
            title: "Quartet Battle",
            description: "Both sides add Bakugan to the gate card until at least 4 are present.",
            price: "??? HSP"
        },
         {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Double Battle",
            description: "Both players add an additional Bakugan to the battle.",
            price: "4,000 HSP"
        },
        {
            type: "SAC",
            image: "./images/cards/AlphaBlaster.png",            
            title: "Alpha Blaster",
            description: "Leonidas gains +200 G's",
            price: "3,500 HSP"
        },
        {
            type: "SAC",
            image: "./images/cards/FireTornado.png",
            attribute: "pyrus",
            title: "Fire Tornado",
            description: "Transfer 100 G's from an opponent to your Pyrus Bakugan.",
            price: "3,500 HSP"
        },
        {
            type: "SAC",
            image: "./images/cards/BoostedDragon.png",
            attribute: "pyrus",
            title: "Boosted Dragon",
            description: "Dragonoid gains +100 G's for the rest of the battle.",
            price: "3,500 HSP"
        },
        {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png", 
            title: "Double Dimension",
            description: "Nullifies your opponent's last ability card.",
            price: "1,500 HSP"
        },
	    {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Gamma Ray",
            description: "Nullify an opponent's ability card in battle, or that targets Tentaclear.",
            price: "2,000 HSP"
        },//Double Dimension does not seem attributed in game, usuable by multiple       
        {
            type: "NAC",
            image: "./images/cards/CorrelationDarkusPyrus.png",
            attribute: "darkus",
            title: "Correlation - Darkus & Pyrus",
            description: "If your opponent has a Pyrus Bakugan on the field, your Darkus Bakugan gains +100 G's.",
            price: "??? HSP"
        },
	{
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Magma Providence",
	    attribute: "subterra",
            description: "Change a gate card's attribute to Subterra.",
            price: "1,500 HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            attribute: "aquos",
            title: "Correlation - Aquos & Ventus",
            description: "If your opponent has a Ventus Bakugan on the field, your Aquos Bakugan gains +100 G's.",
            price: "??? HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            attribute: "darkus",
            title: "Correlation - Darkus & Aquos",
            description: "If your opponent has a Aquos Bakugan on the field, your Darkus Bakugan gains +100 G's.",
            price: "??? HSP"
        },
         {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            attribute: "subterra",
            title: "Grand Slide",
            description: "Move an opponent's gate card next to the gate card your Subterra Bakugan is on, then your Subterra Bakugan can move to it.",
            price: "2,750 HSP"
        },
         {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            attribute: "darkus",
            title: "Grand Down",
            description: "Nullify the gate card your Darkus Bakugan is battling on.",
            price: "??? HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            attribute: "ventus",
            title: "Scarlet Twister",
            description: "Move a Bakugan to another gate card. If the Bakugan was in battle, your Ventus Bakugan is defeated and the other Bakugan is returned to it's owner instead.",
            price: "1,000 HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            attribute: "aquos",
            title: "Dive Mirage",
            description: "Move your Aquos Bakugan to an adjacent gate card, nullifying it.",
            price: "??? HSP"
        },
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            attribute: "aquos",
            title: "Water Refrain",
            description: "All previous abilities used this chain are nullified.",
            price: "??? HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            attribute: "Haos",
            title: "Lightning Shield",
            description: "The gate card your Haos Bakugan is standing on is nullified.",
            price: "??? HSP"
        },
        {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Fire Sword",
            attribute: "pyrus",
            description: "Pyrus Siege gains +100 G's.",
            price: "??? HSP"
        },
	    {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Feather Storm",
            description: "Harpus gains +100 G's.",
            price: "2,500 HSP"
        },
        {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Slash Zero",            
            description: "Fear Ripper gains +80 G's for the rest of the battle.",
            price: "1,750 HSP"
        },
	    {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Saurus Glow",            
            description: "Saurus gains +50 G's for the rest of the battle.",
            price: "??? HSP"
        },
	    {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Dual Gazer",            
            description: "If Dual Hydranoid is your last remaining Bakugan,it gains +50 G's and attacks two Bakugan on the field.",
            price: "??? HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Diagonal Link - Aquos & Subterra",
            description: "If there is a Aquos/Subterra Bakugan on the field, your opposite Attributed Bakugan gains +100 G's. If the other Bakugan was an ally, it gains +100 G's as well.",
            price: "2,000 HSP"
        },
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Tsunami Wave",
	    attribute: "aquos",
            description: "If you control Aquos Siege and two other Aquos Bakugan, all Bakugan on the field besides Aquos Siege are defeated.",
            price: "??? HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Diagonal Link - Ventus & Haos",
            description: "If there is a Ventus/Haos Bakugan on the field, your opposite Attributed Bakugan gains +100 G's. If the other Bakugan was an ally, it gains +100 G's as well.",
            price: "2,000 HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Rapid Fire",
            attribute: "pyrus",
            description: "Add an additional Pyrus Bakugan into battle. If the Bakugan is a teammate's, it can be any attribute.",
            price: "??? HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Rapid Haos",
            attribute: "haos",
            description: "Add an additional Haos Bakugan into battle. If the Bakugan is a teammate's, it can be any attribute.",
            price: "3,000 HSP"
        },
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Haos Triple Chain - Haos Stasis",
            attribute: "haos",
            description: "If there are three Haos Bakugan on the field, your Haos Bakugan gains +100 G's and you draw 2 cards. Any teammates draw a card each.",
            price: "3,500 HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Water Slap",
            attribute: "aquos",
            description: "Your opponent's Bakugan loses -50 G's.",
            price: "??? HSP"
        },
         {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Shade Ability",
            attribute: "haos",
            description: "Nullify all ability card effects and power level changes on an opponent's Bakugan",
            price: "2,500 HSP"
        },
        {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Blue Stealth",            
            description: "Preyas gains +50 G's and nullifies the gate card he's standing on.",
            price: "2,000 HSP"
        },
	    {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Aqua Javelin",     
	    attribute: "aquos",
            description: "Swap the gate card Aquos Siege is currently on with another adjacent card.",
            price: "2000 HSP"
        },
	    {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Cut In Slayer",     
	    description: "All Bakugan on the user's side are defeated except for one, and their G's are added to the remaining Bakugan.",
            price: "4,500 HSP"
        },
	    {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Merge Shield",     
	    description: "Hydranoid copies all G's gained by an opponent's Bakugan this battle.",
            price: "5,500 HSP"
        },
	    {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Cut In Saber",     
	    description: "Allows Tigrerra to enter the current battle.",
            price: "??? HSP"
        },
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Storm Breaker",     
	    attribute: "ventus",
            description: "Nullify the gate card your Ventus Bakugan is battling on.",
            price: "2,000 HSP"
        },
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Pure Light",     
	    attribute: "haos",
            description: "Revive a defeated Bakugan and give it to an ally with less than three Bakugan in their deck.",
            price: "5,000 HSP"
        },
        {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Aqua Merge",
            description: "All non-Subterra Bakugan on the field have their attribute changed to Aquos.",
            price: "3,000 HSP"
        },
            {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Grand Spirit",
            description: "Your Bakugan gains +50 G's for each gate card on the field.",
            price: "??? HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Earth Power",
            attribute: "subterra",
            description: "Increase your Subterra Bakugan's power level by +50 G's.",
            price: "??? HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Blow Away",
            attribute: "ventus",
            description: "Move an opponent's Bakugan to another gate card.",
            price: "??? HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Fire Judge",
            attribute: "pyrus",
            description: "Your Pyrus Bakugan gains +100 G's.",
            price: "2,750 HSP"
        },
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Solar Ray",
            attribute: "haos",
            description: "Your Haos Tentaclear gains +100 G's in battle.",
            price: "3,500 HSP"
        },
        {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Lightning Tornado",
            attribute: "haos",
            description: "Transfer 100 G's from an opponent to your Haos Bakugan.",
            price: "3,500 HSP"
        },
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Power Charge",
            attribute: "pyrus",
            description: "Your Pyrus Bakugan gains +100 G's, and can move to an opponent's gate card.",
            price: "3,000 HSP"
        },
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Venomous Beast Torrent Attack",
            attribute: "haos",
            description: "Your Haos Bakugan is defeated and replaced with another of your currently defeated Haos Bakugan.",
            price: "3,000 HSP"
        },
	{
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Oregano Revenge",
            attribute: "darkus",
            description: "Each of your opponent’s Bakugan in battle loses -100 G’s, and up to the same number of yours in battle gains +100 G’s",
            price: "3,500 HSP"
        },
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Spirit Canyon",
            attribute: "subterra",
            description: "Copy any power level gains from an opponent's gate card to your Bakugan",
            price: "??? HSP"
        },
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Darkus Gravity",
            attribute: "darkus",
            description: "Move a Darkus Bakugan to an adjacent Darkus Bakugan's Gate Card.",
            price: "2,000 HSP"
        },
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Doom Companion",
            attribute: "darkus",
            description: "All Bakugan on your Darkus Bakugan's gate card are removed from play for the rest of the game.",
            price: "??? HSP"
        },
        {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Backfire",
            attribute: "pyrus",
            description: "Nullify the gate card your Pyrus Bakugan is battling on.",
            price: "1,750 HSP"
        },
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Frame Fire",
            attribute: "pyrus",
            description: "Pyrus Falconeer gains +100 G's.",
            price: "2,250 HSP"
        },
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Triple Node - Pyrus, Aquos, & Haos",            
            description: "If your field contains a Pyrus, Aquos, & Haos Bakugan they each gain +200 G's.",
            price: "2,500 HSP"
        },
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Triple Node - Darkus, Ventus, & Subterra",            
            description: "If your field contains a Darkus, Ventus, & Subterra Bakugan they each gain +200 G's.",
            price: "2,500 HSP"
        },
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Air Battle",   
	    attribute: "ventus",    
            description: "Move your Ventus Bakugan to another gate card and prevent it from opening.",
            price: "??? HSP"
        },
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Jump Over",   
	    attribute: "ventus",    
            description: "Move your Ventus Bakugan to an adjacent gate card.",
            price: "1,250 HSP"
        },
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Ability Counter",   
	    attribute: "Haos",    
            description: "Nullify an opponent's ability card in battle, or that targets your Haos Bakugan.",
            price: "1,750 HSP"
        },
	     {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Haos Freeze",   
	    attribute: "Haos",    
            description: "Immediately add an additional Haos Bakugan into battle. If the Bakugan is a teammate's, it can be any attribute.",
            price: "3,500 HSP"
        },
        {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Level Down",
            description: "Any Bakugan on the gate card with a power level of 400 G's or higher loses -100 G's.",
            price: "??? HSP"
        },
	    {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Warp Gate",
            description: "All Bakugan on this gate card are moved to another.",
            price: "??? HSP"
        },
	   {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Revive",
            description: "The winning player revives a defeated Bakugan",
            price: "??? HSP"
        }, 
        {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Switchback",
            description: "All Bakugan on the gate card are changed to their original attributes.",
            price: "2000 HSP"
        },
        {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Level Down",
            description: "Any Bakugan on the gate card with a power level of 400 G's or higher loses -100 G's.",
            price: "??? HSP"
        },
        {
            type: "CHGC",
            image: "./images/cards/FalconeerGateCards.png",
            title: "Falconeer",
            description: "Falconeer's power level is doubled.",
            price: "1,750 HSP"
        },
	    {
            type: "CHGC",
            image: "./images/cards/HarpusGateCards.png",
            title: "Harpus",
            description: "Harpus's power level is doubled.",
            price: "??? HSP"
        },
	    {
            type: "CHGC",
            image: "./images/cards/SkyressGateCards.png",
            title: "Skyress",
            description: "Skyress's power level is doubled.",
            price: "??? HSP"
        },	
        {
            type: "CHGC",
            image: "./images/cards/LasermanGateCards.png",
            title: "Laserman",
            description: "Laserman's power level is doubled.",
            price: "??? HSP"
        },
	    {
            type: "CHGC",
            image: "./images/cards/LeonidasGateCards.png",
            title: "Leonidas",
            description: "Leonidas's power level is doubled.",
            price: "5,000 HSP"
        },
	    {
            type: "CHGC",
            image: "./images/cards/WariusGateCards.png",
            title: "Warius",
            description: "Warius's power level is doubled.",
            price: "3,000 HSP"
        },
	    {
            type: "CHGC",
            image: "./images/cards/PreyasGateCards.png",
            title: "Preyas",
            description: "Preyas's power level is doubled.",
            price: "??? HSP"
        },
        {
            type: "CHGC",
            image: "./images/cards/MonarusGateCards.png",
            title: "Monarus",
            description: "Monarus's power level is doubled.",
            price: "??? HSP"
        },
        {
            type: "CHGC",
            image: "./images/cards/SerpenoidGateCards.png",
            title: "Serpenoid",
            description: "Serpenoid's power level is doubled.",
            price: "1500 HSP"
        },
        {
            type: "CHGC",
            image: "./images/cards/FearRipperGateCards.png",
            title: "Fear Ripper",
            description: "Fear Ripper's power level is doubled.",
            price: "??? HSP"
        },     
        {
            type: "CHGC",
            image: "./images/cards/RobotallionGateCards.png",
            title: "Robotallion",
            description: "Robotallion's power level is doubled.",
            price: "??? HSP"
        },
        {
            type: "CHGC",
            image: "./images/cards/RavenoidGateCards.png",
            title: "Ravenoid",
            description: "Ravenoid's power level is doubled.",
            price: "2000 HSP"
        },
	    {
            type: "CHGC",
            image: "./images/cards/DualHydranoidGateCards.png",
            title: "Dual Hydranoid",
            description: "Dual Hydranoid's power level is doubled.",
            price: "??? HSP"
        },
	    {
            type: "CHGC",
            image: "./images/cards/TentaclearGateCards.png",
            title: "Tentaclear",
            description: "Tentaclear's power level is doubled.",
            price: "4250 HSP"
        },
	    {
            type: "CHGC",
            image: "./images/cards/DragonoidGateCards.png",
            title: "Dragonoid",
            description: "Dragonoid's power level is doubled.",
            price: "5,000 HSP"
        },
	    {
            type: "CHGC",
            image: "./images/cards/TigrerraGateCards.png",
            title: "Tigrerra",
            description: "Tigrerra's power level is doubled.",
            price: "3,750 HSP"
        },
	{
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Energy Merge",
            description: "100 G's are transferred from the last Bakugan to stand on the gate card to the first.",
            price: "??? HSP"
        },
	    {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Hyper Merge",
            description: "Transfer 100 G's from an opponent's Bakugan to each of yours currently in battle.",
            price: "??? HSP"
        },
	    {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Aquos Hazard",
            description: "All Bakugan on the gate card are changed to Aquos.",
            price: "2500 HSP"
        },
	{
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Ventus Hazard",
            description: "All Bakugan on the gate card are changed to Ventus.",
            price: "??? HSP"
        },
	    {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Subterra Hazard",
            description: "All Bakugan on the gate card are changed to Subterra.",
            price: "??? HSP"
        },
	{
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Pyrus Hazard",
            description: "All Bakugan on the gate card are changed to Pyrus.",
            price: "??? HSP"
        },
	    {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Darkus Hazard",
            description: "All Bakugan on the gate card are changed to Darkus.",
            price: "??? HSP"
        },
	    {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Haos Hazard",
            description: "All Bakugan on the gate card are changed to Haos.",
            price: "??? HSP"
        },
	    {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Supernova",
            description: "All Bakugan present on the gate cards have their power levels swapped.",
            price: "??? HSP"
        },
	    {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Fair Hands",
            description: "A random gate card from both player's used pile are placed back on the field, open. Command cards lose their effects.",
            price: "3500 HSP"
        },
	    {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Third Judgement",
            description: "The battle can only start when there are three Bakugan on the gate card, and only one Bakugan can win.",
            price: "??? HSP"
        },
	    {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Intercept",
            description: "The battle is put on hold until another Bakugan is added to the gate card.",
            price: "??? HSP"
        },
	    {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Mine Ghost",
            description: "All Bakugan present on the gate card are defeated.",
            price: "??? HSP"
        },
	    {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Triple Battle",
            description: "The user can add an additional Bakugan to the battle, or the battle is put on hold until there are at least three present on the gate card.",
            price: "??? HSP"
        },
	    {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Magma Fuse",
            description: "After the battle is over, all gate cards on the field are destroyed and all Bakugan are returned to their owners.",
            price: "3500 HSP"
        },
	    {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Wall Lock",
            description: "All power level changes for Bakugan on this gate card are nullified.",
            price: "3,000 HSP"
        },
	    {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Scapegoat",
            description: "The owner of the first Bakugan to land on the gate card can decide to continue the battle or return all Bakugan present to their owner's hands.",
            price: "??? HSP"
        },
	    {
            type: "CGC",
            image: "./images/cards/CommandGateCards.png",
            title: "Transformation",
            description: "Your Bakugan's G-Power becomes equal to that of the strongest undefeated Bakugan you have in your hand.",
            price: "3,000 HSP"
        },
	    {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Flare Blinder",
            attribute: "Haos",
            description: "If you control a Haos Tentaclear in battle, the opponenent cannot activate any ability or gate cards while the battle is ongoing.",
            price: "??? HSP"
        },
	    {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Crystal Fang",
            attribute: "Haos",
            description: "Tigrerra gains +80 G's.",
            price: "1750 HSP"
        },
	    {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Shadow Scratch",
            attribute: "Darkus",
            description: "Nullify the attribute gate card your Ravenoid is standing on, and an opponent's Bakugan loses -50 G's.",
            price: "??? HSP"
        },
	    {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Mega Flare Blinder",
            attribute: "Haos",
            description: "Haos Tentaclear gains +100 G's, and if it's in battle the opponenent cannot activate any ability or gate cards while the battle is ongoing.",
            price: "??? HSP"
        },
		{
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Tornado Pandemonium",
            attribute: "Ventus",
            description: "Nullify the opponent's attribute gate card Ventus Ravenoid is standing on.",
            price: "2,000 HSP"
        },
	    {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Spark Out",
            attribute: "Haos",
            description: "Haos Ravenoid gains +50 G's and the opponent's gate card is nullified.",
            price: "2,500 HSP"
        },
	    {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Robotallion Enforcement",            
            description: "Robotallion gains +50 G's for the rest of the battle.",
            price: "??? HSP"
        },
	    {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Gravity Chamber",            
            description: "All adjacent Bakugan are moved to Hydranoid's gate card, and any weaker ones are immediately defeated.",
            price: "??? HSP"
        },	    
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Black Is Darkness",   
	    attribute: "darkus",    
            description: "Bring all adjacent enemy Bakugan to your Darkus Bakugan's gate card",
            price: "3,500 HSP"
        },
	     {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Ventus Triple Chain - Winds of Fury",         
	    attribute: "ventus",
            description: "If you control three Ventus Bakugan on the field, each of your opponent's Bakugan loses -100 G's, then one of your Ventus Bakugan can attack each of them.",
            price: "3,500 HSP"
        },
	     {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Holograph Divide",
	    attribute: "aquos",
            description: "Your Aquos Bakugan gains +50 G's at the start of each of your turns.",
            price: "??? HSP"
	},
	     {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Depth Tornado",            
            description: "Juggernoid gains +100 G's.",
            price: "??? HSP"	
	},
	    {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Stare Down",            
            description: "All opponent’s Bakugan adjacent to Cycloid lose -50Gs.",
            price: "??? HSP"	
	},
	    {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Right Giganti",            
            description: "Cycloid gains +100 G's.",
            price: "2,000 HSP"	
	},
	    {
            type: "SAC",
            image: "./images/cards/SpecialAbilityCards.png",
            title: "Face of Joy",            
            description: "Immediately nullify the Gate Card Fourtress is standing on.",
            price: "??? HSP"	
	},
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Dark Eye Superior",   
	    attribute: "darkus",    
            description: "Nullify an opponent's ability card in battle, or that targets your Darkus Bakugan.",
            price: "1,500 HSP"
	},
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Enhancement",      
            description: "An allied Bakugan gains +50 G’s.",
            price: "1,500 HSP"
        },
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Terra Crunch",   
	    attribute: "subterra",    
            description: "Your Subterra Bakugan gains +20 G’s for each Gate Card on the field (+15 in team battles).",
            price: "1,500 HSP"
	},
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Destroy Force Down",   
	    attribute: "darkus",    
            description: "Every Bakugan on the field unowned by you loses -25 G’s (-15 in team battles).",
            price: "1,500 HSP"
	},
	    {
            type: "NAC",
            image: "./images/cards/NormalAbilityCards.png",
            title: "Copycat",   
	    attribute: "subterra",    
            description: "Copy any power level changes from your opponent's last ability.",
            price: "2,500 HSP"
	},
        // Add more card data as needed
    ];
    
    shuffleArray(cardData);

// Function to create card elements
function createCard(cardInfo) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-type", cardInfo.type);
    card.setAttribute("data-attribute", cardInfo.attribute);
    card.setAttribute("data-limit", cardInfo.limit);

    const cardImage = document.createElement("img");
    cardImage.src = cardInfo.image;
    cardImage.alt = cardInfo.title;

    const cardInfoContainer = document.createElement("div");
    cardInfoContainer.classList.add("card-info-container");

    const additionalImage = document.createElement("img");

    // Set the second image source based on the card's element
switch ((cardInfo.attribute?cardInfo.attribute:'').toLowerCase()) {
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
            switch ((cardAttribute?cardAttribute:'').toLowerCase()) {
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

	window.onkeydown = function(e) {
  var keyCode = e.key || e.keyIdentifier || e.keyCode;
  if (keyCode == 27 || keyCode == 'Escape') {
    cardPopup.style.display = "none";
  }
}

    

    cardType.addEventListener("change", () => {
        const selectedType = cardType.value;
		const selectedAttribute = cardsAttribute.value;
        cardList.querySelectorAll(".card").forEach(card => {
            const cardDataType = card.getAttribute("data-type");
			const cardDataAttribute = card.getAttribute("data-attribute");
            if ((selectedType === "all" || selectedType === cardDataType)&& (selectedAttribute === "all" || selectedAttribute === cardDataAttribute)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
	cardsAttribute.addEventListener("change", () => {
		const selectedType = cardType.value;
        const selectedAttribute = cardsAttribute.value;
        cardList.querySelectorAll(".card").forEach(card => {
			const cardDataType = card.getAttribute("data-type");
            const cardDataAttribute = card.getAttribute("data-attribute");
            if ((selectedType === "all" || selectedType === cardDataType)&& (selectedAttribute === "all" || selectedAttribute === cardDataAttribute)) {
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

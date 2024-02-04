function getCostumeInfo() {
    var dropdown = document.getElementById("creature-dropdown");
    var selectedCreature = dropdown.options[dropdown.selectedIndex].text;

    var costumeInfo = generateCostumeInfo(selectedCreature);

    document.getElementById("costume-info").innerText = costumeInfo;
}

function generateCostumeInfo(creature) {
    // Add your creative costume details here based on the selected creature
    switch (creature) {
        case "Wizard":
            return "Wizards should wear pointy hats and carry wands! Imagine the adventures they'll have with their magical attire.";
        case "Dragon":
            return "Dragons should wear fiery costumes and breathe imaginary fire! Picture the awe-inspiring sight of a dragon in a dazzling ensemble.";
        case "Fairy":
            return "Fairies should wear sparkly dresses and spread glitter magic! Envision the enchanting world of fairies adorned in shimmering costumes.";
        case "Unicorn":
            return "Unicorns should wear horned headbands and have rainbow-colored manes! Picture the majestic unicorns with their vibrant and magical costumes.";
        default:
            return "No costume information available.";
    }
}
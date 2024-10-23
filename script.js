console.log("hello world")

var numberOfParts = [0,1,2,3,4,5,100]

//constructor fuctions for monster w 4 properties
function Monster(heads, eyes, toes, teeth){
    this.heads = heads;
    this.eyes = eyes;
    this.toes = toes;
    this.teeth = teeth;
}

// Function to generate a random number from numberOfParts (googled)
function getRandomPart() {
    return numberOfParts[Math.floor(Math.random() * numberOfParts.length)];
}

//function that gets called when button is clicked
function createMonsters() {

    var monster1 = new Monster(getRandomPart(), getRandomPart(), getRandomPart(), getRandomPart());
    var monster2 = new Monster(getRandomPart(), getRandomPart(), getRandomPart(), getRandomPart());
    var monster3 = new Monster(getRandomPart(), getRandomPart(), getRandomPart(), getRandomPart());

    //Output the monsters properties
    document.getElementById("unique1").textContent = 
        "Monster 1 has " + monster1.heads + " heads, " + monster1.eyes + " eyes, " + monster1.toes + " toes, and " + monster1.teeth + " teeth.";
    
    document.getElementById("unique2").textContent = 
        "Monster 2 has " + monster2.heads + " heads, " + monster2.eyes + " eyes, " + monster2.toes + " toes, and " + monster2.teeth + " teeth.";

    document.getElementById("unique3").textContent = 
        "Monster 3 has " + monster3.heads + " heads, " + monster3.eyes + " eyes, " + monster3.toes + " toes, and " + monster3.teeth + " teeth.";
}


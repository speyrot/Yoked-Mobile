// body part selection
const bodyPart = [
    'back',
    'arms',
    'chest',
    'legs',
    'core'
];

/* ----BACK WORKOUT -----*/


// back excersise choices 
const backExcercise = [
   'Deadlift: 5 sets of 5 reps',
   'Pull ups: 3 sets to failure',
   'Bent-over Rows: 3 sets of 8 reps',
   'Chest Supported Rows: 3 sets of 8-10 reps',
   'Lat Pulldown: 3 sets of 8-10 reps',
   'Straight Arm Pulldown: 4 sets of 10-12 reps',
   'Inverted Row: 3 sets of 12-15 reps'
];

//function for back excersises

function listBack() {
    const usedIndices = [];
    console.log('Here is today\'s workout:')
    for (let i = 0; i < 4; i++) {
    let randomIndex; // Declare a variable to store the random index
    do { // Start a do-while loop
    randomIndex = Math.floor(Math.random() * backExcercise.length); // Generate a random index for the array
    } while (usedIndices.includes(randomIndex)); // Continue generating random indices until we find one that hasn't been used yet
    usedIndices.push(randomIndex); // Add the new index to the list of used indices
    console.log(backExcercise[randomIndex]);
    }  
}

/* ---- END BACK------ */


/* ----ARM WORKOUT -----*/


// Arm excersise choices 
const armExcercise = [
    '',
    '',
    '',
    '',
    '',
    '',
    ''
];
 
//function for back excersises
 
function listBack() {
    const usedIndices = [];
    console.log('Here is today\'s workout:')
    for (let i = 0; i < 4; i++) {
        let randomIndex; // Declare a variable to store the random index
        do { // Start a do-while loop
            randomIndex = Math.floor(Math.random() * armExcercise.length); // Generate a random index for the array
        } while (usedIndices.includes(randomIndex)); // Continue generating random indices until we find one that hasn't been used yet
            usedIndices.push(randomIndex); // Add the new index to the list of used indices
            console.log(armExcercise[randomIndex]);
    }  
}
 
/* ---- END ARM------ */

/* ----ARM WORKOUT -----*/


 // Arm excersise choices 
const armExcercise = [
    '',
    '',
    '',
    '',
    '',
    '',
    ''
 ];
 
 //function for back excersises
 
 function listBack() {
     const usedIndices = [];
     console.log('Here is today\'s workout:')
     for (let i = 0; i < 4; i++) {
     let randomIndex; // Declare a variable to store the random index
     do { // Start a do-while loop
     randomIndex = Math.floor(Math.random() * armExcercise.length); // Generate a random index for the array
     } while (usedIndices.includes(randomIndex)); // Continue generating random indices until we find one that hasn't been used yet
     usedIndices.push(randomIndex); // Add the new index to the list of used indices
     console.log(armExcercise[randomIndex]);
     }  
 }
 
 /* ---- END ARM------ */



































// arm excersise choices
const armExcercise = [
    '',
    '',
    '',
    '',
    '' 
];

// arm excersise randomizer
const getArm = armExcercise[Math.floor(Math.random() * armExcercise.length)];


// chest excersise choices
const chestExcercise = [
    '',
    '',
    '',
    '',
    '' 
];

// chest excersise randomizer
const getChest = chestExcercise[Math.floor(Math.random() * chestExcercise.length)];


// leg excersise choices
const legExcercise = [
    '',
    '',
    '',
    '',
    '' 
];

// leg excersise randomizer
const getLeg = legExcercise[Math.floor(Math.random() * legExcercise.length)];


// core excersise choices
const coreExcercise = [
    '',
    '',
    '',
    '',
    ''  
];

// core excersise randomizer
const getCore = coreExcercise[Math.floor(Math.random() * coreExcercise.length)];


/*
function generateMessage() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const author = authors[Math.floor(Math.random() * authors.length)];
    return `"${quote}" - ${author}`;
}
*/


// body part selection
const bodyPart = [
    'back',
    'arms',
    'chest',
    'legs',
    'core'
];

/* ---- BREAK --- */



/* ----BACK WORKOUT -----*/


// back excersise choices 
const backExercise = [
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
    console.log('Here is today\'s main workout:')
    for (let i = 0; i < 4; i++) {
    let randomIndex; // Declare a variable to store the random index
    do { // Start a do-while loop
    randomIndex = Math.floor(Math.random() * backExercise.length); // Generate a random index for the array
    } while (usedIndices.includes(randomIndex)); // Continue generating random indices until we find one that hasn't been used yet
    usedIndices.push(randomIndex); // Add the new index to the list of used indices
    console.log(backExercise[randomIndex]);
    }  
}

/* ---- END BACK------ */





/* ----ARM WORKOUT -----*/


// Arm excersise choices 
const armExercise = [
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
    console.log('Here is today\'s main workout:')
    for (let i = 0; i < 4; i++) {
        let randomIndex; // Declare a variable to store the random index
        do { // Start a do-while loop
            randomIndex = Math.floor(Math.random() * armExercise.length); // Generate a random index for the array
        } while (usedIndices.includes(randomIndex)); // Continue generating random indices until we find one that hasn't been used yet
            usedIndices.push(randomIndex); // Add the new index to the list of used indices
            console.log(armExercise[randomIndex]);
    }  
}
 
/* ---- END ARM------ */





/* ----Chest WORKOUT -----*/


// Arm excersise choices 
const chestExercise = [
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
    console.log('Here is today\'s main workout:')
    for (let i = 0; i < 4; i++) {
        let randomIndex; // Declare a variable to store the random index
        do { // Start a do-while loop
            randomIndex = Math.floor(Math.random() * chestExercise.length); // Generate a random index for the array
        } while (usedIndices.includes(randomIndex)); // Continue generating random indices until we find one that hasn't been used yet
            usedIndices.push(randomIndex); // Add the new index to the list of used indices
            console.log(chestExercise[randomIndex]);
    }  
}
 
/* ---- END CHEST------ */




/* ----Chest WORKOUT -----*/


// Arm excersise choices 
const legExercise = [
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
    console.log('Here is today\'s main workout:')
    for (let i = 0; i < 4; i++) {
        let randomIndex; // Declare a variable to store the random index
        do { // Start a do-while loop
            randomIndex = Math.floor(Math.random() * legExercise.length); // Generate a random index for the array
        } while (usedIndices.includes(randomIndex)); // Continue generating random indices until we find one that hasn't been used yet
            usedIndices.push(randomIndex); // Add the new index to the list of used indices
            console.log(legExercise[randomIndex]);
    }  
}
 
/* ---- END LEG------ */




/* ----CORE WORKOUT -----*/


// Arm excersise choices 
const coreExercise = [
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
    console.log('Here is today\'s core workout:')
    for (let i = 0; i < 4; i++) {
        let randomIndex; // Declare a variable to store the random index
        do { // Start a do-while loop
            randomIndex = Math.floor(Math.random() * coreExercise.length); // Generate a random index for the array
        } while (usedIndices.includes(randomIndex)); // Continue generating random indices until we find one that hasn't been used yet
            usedIndices.push(randomIndex); // Add the new index to the list of used indices
            console.log(coreExercise[randomIndex]);
    }  
}
 
/* ---- END CORE------ */
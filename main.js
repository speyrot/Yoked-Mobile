// Define the workout options for each body part
const backExercises = [
    '- Dead-lift: 5 sets of 5 reps',
    '- Pull ups: 3 sets to failure',
    '- Bent-over Rows: 3 sets of 8 reps',
    '- Chest Supported Rows: 3 sets of 8-10 reps',
    '- Lat Pulldown: 3 sets of 8-10 reps',
    '- Straight Arm Pulldown: 4 sets of 10-12 reps',
    '- Inverted Row: 3 sets of 12-15 reps'
 ];
 
 const armsExercises = [
    '- Biceps Curl: 3 sets of 8-10 reps',
    '- Triceps Dip: 3 sets of 8-10 reps',
    '- Hammer Curl: 3 sets of 8-10 reps',
    '- Skull Crushers: 3 sets of 8-10 reps',
    '- Preacher Curl: 3 sets of 8-10 reps',
    '- Triceps Push-down: 3 sets of 8-10 reps',
    '- Concentration Curl: 3 sets of 8-10 reps'
 ];
 
 const chestExercises = [
    '- Bench Press: 5 sets of 5 reps',
    '- Incline Bench Press: 3 sets of 8-10 reps',
    '- Chest Fly: 3 sets of 8-10 reps',
    '- Push Ups: 3 sets to failure',
    '- Chest Press Machine: 3 sets of 8-10 reps',
    '- Dumbbell Pullover: 3 sets of 8-10 reps',
    '- Decline Bench Press: 3 sets of 8-10 reps'
 ];
 
 const legsExercises = [
    '- Squats: 5 sets of 5 reps',
    '- Leg Press: 3 sets of 8-10 reps',
    '- Leg Extensions: 3 sets of 8-10 reps',
    '- Lunges: 3 sets of 8-10 reps',
    '- Leg Curls: 3 sets of 8-10 reps',
    '- Calf Raises: 3 sets of 15-20 reps',
    '- Dead-lift: 3 sets of 8-10 reps'
 ];

 const shoulderExercises = [
    '- Military Press: 5 sets of 5 reps',
    '- Arnold Press: 3 sets of 8-10 reps',
    '- Dumbbell Lateral Raises: 3 sets of 12-15 reps',
    '- Barbell Front Raises: 3 sets of 8-10 reps',
    '- Upright Row: 3 sets of 8-10 reps',
    '- Bent-Over Lateral Raises: 3 sets of 12-15 reps',
    '- Reverse Fly: 3 sets of 12-15 reps'
];

 const coreExercise = [
    '- Crunches: 3 sets of 20 reps',
    '- Plank: 3 sets for 60 seconds',
    '- Russian Twist: 3 sets of 20 reps',
    '- Bicycle Crunch: 3 sets of 20 reps',
    '- Leg Raises: 3 sets of 12-15 reps',
    '- Oblique Crunch: 3 sets of 20 reps per side',
    '- Reverse Crunch: 3 sets of 12-15 reps'
];




const usedIndices = [];
function displayWorkoutOptions(bodyPart) {
    switch (bodyPart) {
      case 'back':
        console.log('Here are your back workout options:');
        for (let i = 0; i < 4; i++) {
          let randomIndex;
          do {
            randomIndex = Math.floor(Math.random() * backExercises.length);
          } while (usedIndices.includes(randomIndex));
          usedIndices.push(randomIndex);
          console.log(backExercises[randomIndex]);
        }
    break;
    case 'arms':
        console.log('Here are your arm workout options:');
        for (let i = 0; i < 4; i++) {
          let randomIndex;
          do {
            randomIndex = Math.floor(Math.random() * armsExercises.length);
          } while (usedIndices.includes(randomIndex));
          usedIndices.push(randomIndex);
          console.log(armsExercises[randomIndex]);
        }
    break;
    case 'chest':
        console.log('Here are your chest workout options:');
        for (let i = 0; i < 4; i++) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * chestExercises.length);
            } while (usedIndices.includes(randomIndex));
                usedIndices.push(randomIndex);
                console.log(chestExercises[randomIndex]);
            }
    break;
    case 'legs':
        console.log('Here are your leg workout options:');
        for (let i = 0; i < 4; i++) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * legsExercises.length);
            } while (usedIndices.includes(randomIndex));
                usedIndices.push(randomIndex);
                console.log(legsExercises[randomIndex]);
            }
    break;
    case 'shoulders':
        console.log('Here are your core workout options:');
        for (let i = 0; i < 4; i++) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * shoulderExercises.length);
            } while (usedIndices.includes(randomIndex));
                usedIndices.push(randomIndex);
                console.log(shoulderExercises[randomIndex]);
            }
    break;
    case 'core':
        console.log('Here are your core workout options:');
        for (let i = 0; i < 4; i++) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * coreExercise.length);
            } while (usedIndices.includes(randomIndex));
                usedIndices.push(randomIndex);
                console.log(coreExercise[randomIndex]);
            }
    break;
    default:
        console.log('Invalid body part selected. Please try again.');
    }
}
  
  


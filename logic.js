let jsonString = require("./exercises.json");

// let jsonString = {
//   upperBody: [
//     "pushUp",
//     "chinUps",
//     "mountainClimbers",
//     "overheadPress",
//     "chestPress",
//   ],
//   lowerBody: ["squat", "deadLift", "bulgarianSquat", "lunge", "stepUp"],
//   core: ["sitUp", "plank", "birdDog", "russianTwist", "deadBug"],
//   glute: [
//     "hipHinge",
//     "standingKickback",
//     "gluteBridge",
//     "goodMorning",
//     "lateralWalk",
//   ],
// };

const data = JSON.parse(jsonString);

const exerciseName = jsonString.map(({ upperBody: data }) => data);
console.log(exerciseName);

//hiba:
//Uncaught SyntaxError SyntaxError: "[object Object]" is not valid JSON
//  at <anonymous> (c:\Users\horva\Desktop\Personal projects\training-app\logic.js:22:19)

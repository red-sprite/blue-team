// Array to hold results
let results = [];

// Select a random number
const selectNum = () => Math.round(Math.random() * 9);

// Convert number to letter
const selectLetter = () => {
  const letters = [`A`, `B`, `C`, `D`, `E`, `F`, `J`, `H`, `I`, `J`];
  const n = selectNum();
  return letters[n];
};

// Select coordinates to fire at
const selectCoordinates = previousShots => {
  let x = selectNum();
  let y = selectNum();

  const target = {
    x,
    y
  };

  // While loop

  // if (previousShots.includes(target)) {
  //   // Generate new target
  // } else {
  //   return target;
  // }

  return target;
};

// handleHit = (location) => {
// do something clever when we hit something
// }

export const fire = (handleResponse, previousShots) => {
  const target = selectCoordinates(previousShots);
  handleResponse(target);
  // shoot(target.x, target.y, handleResponse);
};

// fire();

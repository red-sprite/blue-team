// Array to hold results
let results = [];

// Select a random number
const selectNum = () => (
  Math.round(Math.random()*9)
);

// Convert number to letter
const selectLetter = () => {
  const letters = [`A`,`B`,`C`,`D`,`E`,`F`,`J`,`H`,`I`,`J`];
  const n = selectNum();
  return(letters[n]);
};

// Select coordinates to fire at
const selectCoordinates = () => {
  const x = selectNum();
  const y = selectNum();

  const target = {
    x,
    y,
  };

  return target;

}

handleHit = (location) => {

  // do something clever when we hit something

}

export const fire = (handleResponse) => {
  const target = selectCoordinates();
  console.log(`fired at: ${target.x} ${target.y}`);
  handleResponse(target);
  // shoot(target.x, target.y, handleResponse);
}



// fire();

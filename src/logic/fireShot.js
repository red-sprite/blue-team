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

const handleResponse = (res) => {
  console.log(res);
  results.push(res);
  if(results.length < 10) {
    fire()
  }
  
}

const fire = () => {
  const target = selectCoordinates();
  console.log(target);
  shoot(target.x, target.y, handleResponse);
}

const fireAt = selectCoordinates();

console.log(fireAt);






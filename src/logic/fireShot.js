const selectNum = () => (
  Math.round(Math.random()*9)
);

const selectLetter = () => {
  const letters = [`A`,`B`,`C`,`D`,`E`,`F`,`J`,`H`,`I`,`J`];
  const n = selectNum();
  return(letters[n]);
};

const fire = () => {
  const x = selectNum();
  const y = selectNum();

  const target = {
    x,
    y,
  };

  return target;

}

const firedAt = fire();

console.log(firedAt);






'use strict';

function initArray(num) {
  return new Array(num).fill(false);
}

function visitDoors(arr, mul) {
  const doors = [...arr];
  
  for(let i = 0; i < doors.length; i += 1) {
    if((i + 1) % mul === 0) {
     doors[i] = !doors[i];
    }
  }
  return doors;
};

function calcState(numOfDoors) {
  let doors = initArray(numOfDoors);
  for(let i = 1; i <= numOfDoors; i += 1) {
    doors = visitDoors(doors, i);
  }
  return doors;
}

// console.log(calcState(100))

module.exports = {
  initArray,
  visitDoors,
  calcState
};

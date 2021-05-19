'use strict';

const func = require('./hiker');

describe('answer', () => {
  // Zeros meaning close doors
  it('Initialize array with falses.', () => {
    const arr = func.initArray(10);
    const checkFalse = (element) => !element;
    
    expect(arr.length).toEqual(10);
    expect(arr.every(checkFalse)).toBeTruthy();
  });
  
  it('Visit doors', () => {
    const doors = [true, false, false, true, false, true, true];
    // Visiting doors which are multiple of 2
    const result = [true, true, false, false, false, false, true];
    
    expect(func.visitDoors(doors, 2)).toEqual(result);
  });
  
  it('Calculate state of doors after certain passes', () => {
    const doors = [false, false];
    // Visiting doors which are multiple of 2
    const result = [true, false];
    
    expect(func.calcState(2)).toEqual(result);
  });
});

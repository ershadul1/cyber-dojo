'use strict'

const maxColumnSize = (input) => {
  let result = [];
  for(let i = 0; i < input.length; i += 1) {
    for(let j = 0; j < input[i].length; j += 1) {
      if(!result[j]) {
        result.push(input[i][j].length);
      } else {
        if(input[i][j].length > result[j]) {
          result[j] = input[i][j].length;
        }
      }
    }
  }
  return result;
};

const splitInput = (input) => {
  let result = [];
  const lines = input.split('\n');
  for(let i = 0; i < lines.length; i += 1) {
    const currLine = lines[i].split('$');
    const filtered = currLine.filter((el) => {
      return el.length != 0;
    });
    result.push(filtered);
  };
  return result;
};

const leftAlign = (input) => {
  const inputArr = [...input]
  const columnSizes = maxColumnSize(inputArr);
  for(let i = 0; i < inputArr.length; i += 1) {
    for(let j = 0; j < inputArr[i].length; j += 1) {
      if(inputArr[i][j].length !== columnSizes[j]) {
        const diff = columnSizes[j] - inputArr[i][j].length;
        inputArr[i][j] += ' '.repeat(diff);
      }
    }
  };
  return inputArr;
};

const rightAlign = (input) => {
  const inputArr = [...input]
  const columnSizes = maxColumnSize(inputArr);
  for(let i = 0; i < inputArr.length; i += 1) {
    for(let j = 0; j < inputArr[i].length; j += 1) {
      if(inputArr[i][j].length !== columnSizes[j]) {
        const diff = columnSizes[j] - inputArr[i][j].length;
        inputArr[i][j] = ' '.repeat(diff) + inputArr[i][j];
      }
    }
  };
  return inputArr;
};

const centerAlign = (input) => {
  const inputArr = [...input]
  const columnSizes = maxColumnSize(inputArr);
  for(let i = 0; i < inputArr.length; i += 1) {
    for(let j = 0; j < inputArr[i].length; j += 1) {
      if(inputArr[i][j].length !== columnSizes[j]) {
        const diff = columnSizes[j] - inputArr[i][j].length;
        if(diff % 2 === 0) {
          inputArr[i][j] = ' '.repeat(diff/2) +
          inputArr[i][j] +  ' '.repeat(diff/2);
        } else {
          inputArr[i][j] = ' '.repeat(Math.round(diff/2)) +
          inputArr[i][j] +  ' '.repeat(diff - Math.round(diff/2));
        }
      }
    }
  };
  return inputArr;
};

const joinText = (input) => {
  let result = '';
  for(let i = 0; i < input.length; i += 1) {
    result += input[i].join(' ');
    if(i !== input.length - 1) result += '\n';
  }
  return result;
};

const alignText = (input, type) => {
  const inputArr = splitInput(input);

  if(type === 'left') {
    const leftAlignedArr = leftAlign(inputArr);
    return joinText(leftAlignedArr);
  }

  if(type === 'right') {
    const rightAlignedArr = rightAlign(inputArr);
    return joinText(rightAlignedArr);
  }

  if(type === 'center') {
    const centerAlignedArr = centerAlign(inputArr);
    return joinText(centerAlignedArr);
  }
};

module.exports = {
  maxColumnSize,
  splitInput,
  leftAlign,
  rightAlign,
  centerAlign,
  joinText,
  alignText
};
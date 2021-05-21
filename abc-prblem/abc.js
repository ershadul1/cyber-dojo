'use strict';

const blocks = [ 
  ['B', 'O'],
  ['X', 'K'],
  ['D', 'Q'],
  ['C', 'P'],
  ['N', 'A'],
  ['G', 'T'],
  ['R', 'E'],
  ['T', 'G'],
  ['Q', 'D'],
  ['F', 'S'],
  ['J', 'W'],
  ['H', 'U'],
  ['V', 'I'],
  ['A', 'N'],
  ['O', 'B'],
  ['E', 'R'],
  ['F', 'S'],
  ['L', 'Y'],
  ['P', 'C'],
  ['Z', 'M'] 
];

const findAlphabet = (blocks, alphabet) => {
  let indices = []
  for(let i = 0; i < blocks.length; i += 1) {
    if(blocks[i][0] === alphabet || blocks[i][1] == alphabet) {
      indices.push(i);
    }
  }
  return indices;
};

const getBlocksAtIndex = (blocks, indices) => {
  let result = [];
  for(let i = 0; i < indices.length; i += 1) {
    result.push(blocks[indices[i]]);
  }
  return result;
};

const  selectBlock = (blocks, remainingChars, currentChar) => {
  for(let i = 0; i < blocks.length; i += 1) {
    const one = blocks[i][0] === currentChar && !remainingChars[blocks[i][1]];
    const two = blocks[i][1] === currentChar && !remainingChars[blocks[i][0]];
    if(one || two) {
      return i;
    };
  }
  return 0;
};

const genHash = (arr) => {
  const hash = {}
  for(let i = 0; i < arr.length; i += 1) {
    if(!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]] += 1;
    }
  }
  return hash;
}

const canMakeWord = (blocks, word) => {
  const blocksArr = [...blocks];
  const charArr = word.split('');
  const remainingChars = genHash(charArr);
  
  for(let i = 0; i < charArr.length; i += 1) {
    remainingChars[charArr[i]] -= 1;
    const indices = findAlphabet(blocksArr, charArr[i]);
    const blocksContainingChar = getBlocksAtIndex(blocksArr, indices);
    if(blocksContainingChar.length === 0) return false;
    const selectedBlockIndex = selectBlock(blocksContainingChar, remainingChars, charArr[i]);
    blocksArr.splice(indices[selectedBlockIndex], 1);
  };
  return true;
};

module.exports = {
  blocks,
  findAlphabet,
  getBlocksAtIndex,
  selectBlock,
  genHash,
  canMakeWord
};
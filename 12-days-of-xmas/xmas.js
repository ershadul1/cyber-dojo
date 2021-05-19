'use strict';

function genFirstLine(day) {
  const numbers = [
      'zero', 'first', 'second', 'third', 'forth', 'fifth', 'sixth',
      'seventh', 'eight', 'ninth', 'tenth', 'eleventh', 'Twelfth'
    ];
  
  return `On the ${numbers[day]} day of Christmas,\nMy true love gave to me:`;
}

function genLastLine(day) {
 if(day === 12) {
  return `Two turtle doves\nAnd a partridge in a pear tree.`;
 }
 return `Two turtle doves and\nA partridge in a pear tree.`;
}

function generate() {
  const lyrics = [
    'Twelve drummers drumming',
    'Eleven pipers piping',
    'Ten lords a-leaping',
    'Nine ladies dancing',
    'Eight maids a-milking',
    'Seven swans a-swimming',
    'Six geese a-laying',
    'Five golden rings',
    'Four calling birds',
    'Three french hens',
    ];
  let midPart = '';
  
  let result = genFirstLine(1) + '\n' + 'A partridge in a pear tree.' + '\n\n';
  result += genFirstLine(2) + '\n' + genLastLine(2) + '\n\n';
  
  for(let i = 3; i <= 12; i += 1) {
    let total = '';
    total += genFirstLine(i) + '\n';
    midPart = lyrics[12-i] + '\n' + midPart;
    total += midPart + genLastLine(i);
    result += total;
    i === 12 ? result : result += '\n\n';
  }
  return result;
};

module.exports = { 
  generate,
  genFirstLine,
  genLastLine,
};

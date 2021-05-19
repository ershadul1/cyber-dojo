'use strict';

const func = require('./xmas');

describe('answer', () => {
  it('generate first line of para 1', () => {
    const firstLine = `On the first day of Christmas,
My true love gave to me:`;
    expect(func.genFirstLine(1)).toEqual(firstLine);
  });
  
  it('generate first line of para 5', () => {
    const firstLine = `On the fifth day of Christmas,
My true love gave to me:`;
    expect(func.genFirstLine(5)).toEqual(firstLine);
  });
  
  it('generate last line of para 3', () => {
    const lastLine = `Two turtle doves and
A partridge in a pear tree.`;
    expect(func.genLastLine(3)).toEqual(lastLine);
  });
  
  it('generate last line of para 12', () => {
    const lastLine = `Two turtle doves
And a partridge in a pear tree.`;
    expect(func.genLastLine(12)).toEqual(lastLine);
  });
  
  it('should match the desired output', () => {
    const xmas = 
          `On the first day of Christmas,
My true love gave to me:
A partridge in a pear tree.

On the second day of Christmas,
My true love gave to me:
Two turtle doves and
A partridge in a pear tree.

On the third day of Christmas,
My true love gave to me:
Three french hens
Two turtle doves and
A partridge in a pear tree.

On the forth day of Christmas,
My true love gave to me:
Four calling birds
Three french hens
Two turtle doves and
A partridge in a pear tree.

On the fifth day of Christmas,
My true love gave to me:
Five golden rings
Four calling birds
Three french hens
Two turtle doves and
A partridge in a pear tree.

On the sixth day of Christmas,
My true love gave to me:
Six geese a-laying
Five golden rings
Four calling birds
Three french hens
Two turtle doves and
A partridge in a pear tree.

On the seventh day of Christmas,
My true love gave to me:
Seven swans a-swimming
Six geese a-laying
Five golden rings
Four calling birds
Three french hens
Two turtle doves and
A partridge in a pear tree.

On the eight day of Christmas,
My true love gave to me:
Eight maids a-milking
Seven swans a-swimming
Six geese a-laying
Five golden rings
Four calling birds
Three french hens
Two turtle doves and
A partridge in a pear tree.

On the ninth day of Christmas,
My true love gave to me:
Nine ladies dancing
Eight maids a-milking
Seven swans a-swimming
Six geese a-laying
Five golden rings
Four calling birds
Three french hens
Two turtle doves and
A partridge in a pear tree.

On the tenth day of Christmas,
My true love gave to me:
Ten lords a-leaping
Nine ladies dancing
Eight maids a-milking
Seven swans a-swimming
Six geese a-laying
Five golden rings
Four calling birds
Three french hens
Two turtle doves and
A partridge in a pear tree.

On the eleventh day of Christmas,
My true love gave to me:
Eleven pipers piping
Ten lords a-leaping
Nine ladies dancing
Eight maids a-milking
Seven swans a-swimming
Six geese a-laying
Five golden rings
Four calling birds
Three french hens
Two turtle doves and
A partridge in a pear tree.

On the Twelfth day of Christmas,
My true love gave to me:
Twelve drummers drumming
Eleven pipers piping
Ten lords a-leaping
Nine ladies dancing
Eight maids a-milking
Seven swans a-swimming
Six geese a-laying
Five golden rings
Four calling birds
Three french hens
Two turtle doves
And a partridge in a pear tree.`;
          
    expect(func.generate()).toEqual(xmas);
  });
});

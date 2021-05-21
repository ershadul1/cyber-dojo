'use strict';

const answer = require('./abc');

describe('answer', () => {
  it('find alphabet', () => {
    const blocks = answer.blocks;
    // This array would contain the indexes of blocks where the alphabet is present
    const arr = answer.findAlphabet(blocks, 'A');
    const result = [4, 13];
    expect(arr).toEqual(result);
  });

  it('get blocks at indices', () => {
    const blocks = answer.blocks;
    const result =  [['N', 'A'],  ['A', 'N']];
    const indices = [4, 13];
    expect(answer.getBlocksAtIndex(blocks, indices)).toEqual(result);
  });

  it('select block',  () => {
    const blocks = [['N', 'A'],  ['A', 'N'], ['A', 'C']];
    const remainingChars = {'B': true, 'N':true};
    const currentChar = 'A';
    expect(answer.selectBlock(blocks, remainingChars, currentChar)).toEqual(2)
  });

  it('generate hash with chars of word', () => {
    const charArr = ['C', 'O', 'M', 'M', 'O', 'N'];
    const result = { 'C': 1, 'O': 2, 'M': 2, 'N': 1 };
    expect(answer.genHash(charArr)).toEqual(result);
  });

  it('can make word A', () => {
    const blocks = answer.blocks;
    expect(answer.canMakeWord(blocks, 'A')).toEqual(true);
  });

  it('can make word BARK', () => {
    const blocks = answer.blocks;
    expect(answer.canMakeWord(blocks, 'BARK')).toEqual(true);
  });

  it('cant make word BOOK', () => {
    const blocks = answer.blocks;
    expect(answer.canMakeWord(blocks, 'BOOK')).toEqual(false);
  });

  it('can make word TREAT', () => {
    const blocks = answer.blocks;
    expect(answer.canMakeWord(blocks, 'TREAT')).toEqual(true);
  });

  it('cant make word COMMON', () => {
    const blocks = answer.blocks;
    expect(answer.canMakeWord(blocks, 'COMMON')).toEqual(false);
  });

  it('can make word SQUAD', () => {
    const blocks = answer.blocks;
    expect(answer.canMakeWord(blocks, 'SQUAD')).toEqual(true);
  });

  it('can make word CONFUSE', () => {
    const blocks = answer.blocks;
    expect(answer.canMakeWord(blocks, 'CONFUSE')).toEqual(true);
  });
});

'use strict';

const answer = require('./align');

describe('answer', () => {
  it('find max length of columns', () => {
    const input = [
      ['Hello,', 'My', 'Dear', 'Friend'],
      ['Hi,', 'how', 'are', 'doing?', 'bro']
    ];

    const output = [6, 3, 4, 6, 3];
    expect(answer.maxColumnSize(input)).toEqual(output);
  });

  it('split input into nested arrays', () => {
    const input = `Given$a$text$file$of$many$lines,$where$fields$within$a$line$
are$delineated$by$a$single$'dollar'$character,$write$a$program`;

    const output = [
      ['Given', 'a', 'text', 'file', 'of', 'many', 'lines,', 'where', 'fields', 'within', 'a', 'line'],
      ['are', 'delineated', 'by', 'a', 'single', "'dollar'", 'character,', 'write', 'a', 'program']
    ];

    expect(answer.splitInput(input)).toEqual(output);
  });

  it('add spaces for left align', () => {
    const input = [
      ['Hello,', 'My', 'Dear', 'Friend'],
      ['Hi,', 'how', 'are', 'doing?', 'bro']
    ];

    const output = [
      ['Hello,', 'My ', 'Dear', 'Friend'],
      ['Hi,   ', 'how', 'are ', 'doing?', 'bro']
    ];

    expect(answer.leftAlign(input)).toEqual(output);
  });

  it('align input to left', () => {
    const input = `Hello,$My$Dear$Friend$
Hi,$how$are$you$doing?`;

    const output = `Hello, My  Dear Friend
Hi,    how are  you    doing?`;

    expect(answer.alignText(input, 'left')).toEqual(output);
  });

  it('join text from array', () => {
    const input = [
      ['Hello,', 'My ', 'Dear', 'Friend'],
      ['Hi,   ', 'how', 'are ', 'doing?', 'bro']
    ];

    const output = `Hello, My  Dear Friend
Hi,    how are  doing? bro`;

    expect(answer.joinText(input)).toEqual(output);
  });

  it('add spaces for right align', () => {
    const input = [
      ['Hello,', 'My', 'Dear', 'Friend'],
      ['Hi,', 'how', 'are', 'doing?', 'bro']
    ];

    const output = [
      ['Hello,', ' My', 'Dear', 'Friend'],
      ['   Hi,', 'how', ' are', 'doing?', 'bro']
    ];

    expect(answer.rightAlign(input)).toEqual(output);
  });

  it('align input to right', () => {
    const input = `Hello,$My$Dear$Friend$
Hi,$how$are$you$doing?`;

    const output = `Hello,  My Dear Friend
   Hi, how  are    you doing?`;

    expect(answer.alignText(input, 'right')).toEqual(output);
  });

  it('add spaces for center align', () => {
    const input = [
      ['Hello,', 'My', 'Dear', 'Friend'],
      ['Hi,', 'how', 'are', 'doing?', 'bro']
    ];

    const output = [
      ['Hello,', ' My', 'Dear', 'Friend'],
      ['  Hi, ', 'how', ' are', 'doing?', 'bro']
    ];

    expect(answer.centerAlign(input)).toEqual(output);
  });

  it('align input to center', () => {
    const input = `Hello,$My$Dear$Friend$
Hi,$how$are$you$doing?`;

    const output = `Hello,  My Dear Friend
  Hi,  how  are   you  doing?`;

    expect(answer.alignText(input, 'center')).toEqual(output);
  });

  it('align the given input to left', () => {
    const input = `Given$a$text$file$of$many$lines,$where$fields$within$a$line$
are$delineated$by$a$single$'dollar'$character,$write$a$program
that$aligns$each$column$of$fields$by$ensuring$that$words$in$each$
column$are$separated$by$at$least$one$space.`;

    const output = `Given  a          text      file   of     many     lines,     where    fields within  a  line
are    delineated by        a      single 'dollar' character, write    a      program
that   aligns     each      column of     fields   by         ensuring that   words   in each
column are        separated by     at     least    one        space.  `;
  
    expect(answer.alignText(input, 'left')).toEqual(output);
  });

  it('align the given input to right', () => {
    const input = `Given$a$text$file$of$many$lines,$where$fields$within$a$line$
are$delineated$by$a$single$'dollar'$character,$write$a$program
that$aligns$each$column$of$fields$by$ensuring$that$words$in$each$
column$are$separated$by$at$least$one$space.`;

    const output = ` Given          a      text   file     of     many     lines,    where fields  within  a line
   are delineated        by      a single 'dollar' character,    write      a program
  that     aligns      each column     of   fields         by ensuring   that   words in each
column        are separated     by     at    least        one   space.`;
  
    expect(answer.alignText(input, 'right')).toEqual(output);
  });

  it('align the given input to center', () => {
    const input = `Given$a$text$file$of$many$lines,$where$fields$within$a$line$
are$delineated$by$a$single$'dollar'$character,$write$a$program
that$aligns$each$column$of$fields$by$ensuring$that$words$in$each$
column$are$separated$by$at$least$one$space.`;
    
    const output = ` Given      a        text    file    of     many     lines,     where  fields  within  a line
  are  delineated     by       a   single 'dollar' character,   write     a   program
 that    aligns      each   column   of    fields      by     ensuring  that   words  in each
column     are    separated   by     at     least      one     space. `;
    
    
    expect(answer.alignText(input, 'center')).toEqual(output);
  });
});
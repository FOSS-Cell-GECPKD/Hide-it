import textToZeroWidth from "../textToZeroWidth";
import zeroWidthToText from "../zeroWidthToText";

describe('Test for Functions', () => {
  test('Test Rendering', () => {
    const input ="Test string";
    const output=zeroWidthToText(textToZeroWidth(input).replace(/[^​‌‍﻿]/g, ''));
    expect (input).toBe(output);
  })
})
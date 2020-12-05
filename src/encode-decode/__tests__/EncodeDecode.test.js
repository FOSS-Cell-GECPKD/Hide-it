import textToZeroWidth from "../textToZeroWidth";
import zeroWidthToText from "../zeroWidthToText";

describe('Test for Functions', () => {
  test('Test Rendering', () => {
    const input ="Test string";
    const output=zeroWidthToText(textToZeroWidth(input));
    expect (input).toBe(output);
  })
})

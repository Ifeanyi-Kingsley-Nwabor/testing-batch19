const { add } = require("./utilities");

// test("Add", () => {
//   expect(add(1, 2)).toBe(3);
// });

describe("Utilities test suite", () => {
  it("Should correctly return the sum of two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("Should throw an error if the values passed are not numbers", () => {
    expect(() => add(1, NaN)).toThrow();
  });
  it("Should correctly return the sum of any numbers", () => {
    expect(add(1, 1, 1, 1)).toBe(4);
  });
  it("Should correctly return the sum of any decimal numbers", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

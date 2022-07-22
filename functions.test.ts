const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  // CODE HERE
  test("This is to test 2 functionalities.", async () => {
    let testArray1 = [2, 3, 4, 5, 7];
    let testArray2 = shuffleArray(testArray1);
    expect(testArray2.length).toBe(testArray1.length);
    expect(Array.isArray(testArray2)).toBe(true);
  });
});

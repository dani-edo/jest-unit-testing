const chuckArray = require("./chuck");

test("test chuck", () => {
  expect(chuckArray).toBeDefined();
});

test("test array", () => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chuckArr = chuckArray(number, len);

  expect(chuckArr).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});

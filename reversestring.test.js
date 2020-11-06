const reverseString = require("./reversestring");

test("reverse string function exist?", () => {
  expect(reverseString).toBeDefined();
});

test("string reverse()", () => {
  expect(reverseString("helo")).toEqual("oleh");
});

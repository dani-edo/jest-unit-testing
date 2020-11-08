const isAnagram = require("./anagram");

test("is function", () => {
  expect(typeof isAnagram).toEqual("function");
});

test('"cinema" is anagram of "iceman', () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test('"Dormitory" is anagram of "dirty room&&&"', () => {
  expect(isAnagram("Dormitory", "dirty room&&&")).toBeTruthy(); // &&& dan spasi tidak terbaca karena di anagram ada regex replace(/[^\w]/g, "") yang emastikan selain word direplace menjadi kosong
});

test('"Hello" is anagram of "aloha"', () => {
  expect(isAnagram("Hello", "aloha")).toBeFalsy();
});

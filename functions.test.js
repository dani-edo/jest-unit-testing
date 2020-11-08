const functions = require("./functions");

// pemanggilan di setiap test di bawah dijalankan
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// pemanggilan di sebelum dan setlah seluruh test di bawah ini dijalankan
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log("Database Initialized...");
// const closeDatabase = () => console.log("Database Closed...");

// group of test
const nameCheck = () => console.log("Checking name...");
describe("Checking names", () => {
  beforeEach(() => nameCheck());
  test("check name scoped", () => {
    const user = "Dani";
    expect(user).toBe("Dani");
  });
  test("check name scoped", () => {
    const user = "Dani";
    expect(user).toBe("Dani");
  });
});

// toBe (for primitive type)
test("2 + 2 sama denan 4 ra yo?", () => {
  expect(functions.add(2, 2)).toBe(4); //expected value to be 4 (if you change this, it'll be error )
});

test("2 + 2 NOT sama denan 4 ra yo?", () => {
  expect(functions.add(2, 2)).not.toBe(69); //value not expected to be 69 (if you change this to 4, it'll be error )
});

// toBeNull
test("harusnya Null", () => {
  expect(functions.isNull()).toBeNull(); //value is expected to be null
});

// toBeFalsy
test("should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy(); //value is expected to be falsy value (null, 0, false, NaN, 0n, undefined, "") https://medium.com/coding-at-dawn/what-are-falsy-values-in-javascript-ca0faa34feb4
});

// toEqual (buat type object dan array)
test("user seharusnya kampret tenan object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Kampret",
    lastName: "tenan",
  });
});

// toBeLessThanOrEqual
test("seharusnya kurang dari", () => {
  const load1 = 800,
    load2 = 700;
  expect(load1 + load2).toBeLessThanOrEqual(1500);
});

test("regexx", () => {
  expect("kampret Daniedo").not.toMatch(/daniedo/);
});

test("array", () => {
  username = ["dani", "edo", "kammpret"];
  expect(username).toContain("dani");
});

// API request (working with async data)
test('name should be "Leanne Graham"', () => {
  expect.assertions(1); // assertion harus disertakan dengan return (di bawah ini)
  return functions
    .fetchUser()
    .then((name) => expect(name).toEqual("Leanne Grahamkampret")); // "name" di sini sudah auto mengambil return nya yg di function.js
});

// async await
test('name should be "Leanne Graham"', async () => {
  expect.assertions(1); // assertion harus disertakan dengan return (di bawah ini)
  const name = await functions.fetchUser();
  expect(name).toEqual("Leanne Grahamkampret"); // "name" di sini sudah auto mengambil return nya yg di function.js
});

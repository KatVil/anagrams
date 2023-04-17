const isAnagrams = require("../index");

test("Функция должна быть определена", () => {
  expect(isAnagrams("lemon", "melon")).toBeDefined();
});

test("Функция должна находить анаграммы", () => {
  expect(isAnagrams("melon", "lemon")).toBe(true);
  expect(isAnagrams("melo2n", "lemon2")).toBe(true);
  expect(isAnagrams("lemon", "melon")).toBeTruthy();
  expect(isAnagrams("le2mon", "melon")).toBeFalsy();
  expect(isAnagrams("MELON", "melon")).toBe(true);
  expect(isAnagrams("kilso", "osilk")).toBeTruthy();
});

//Напиши метод isAnagrams(), который принимает два строчных аргумента
// и выводит true, если строки являются анаграммами, и false, если строки ими не являются.

const isAnagrams = (str1, str2) => {
  return str1.split("").sort().join() == str2.split("").sort().join()
    ? true
    : false;
};
console.log(isAnagrams("lem2on", "mel2on"));

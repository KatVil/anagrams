//Напиши метод isAnagrams(), который принимает два строчных аргумента
// и выводит true, если строки являются анаграммами, и false, если строки ими не являются.

function isAnagrams(str1, str2) {
  return str1.toLowerCase().split("").sort().join() ==
    str2.toLowerCase().split("").sort().join()
    ? true
    : false;
}
console.log(isAnagrams("lem2oncello", "mcelloel2on"));

module.exports = isAnagrams;

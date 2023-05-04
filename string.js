//property & method
// let num = 10;
// let str = "\t \n Diyorbek ${num}";
// let str3 = `Diyorbek ${num}`;
// console.log(str);
// console.log(str2.slice(1, 6));
// console.log(str2.substring(1, 6));
// console.log(str2.substr(1, 6));
// console.log(str2[-1]);
// console.log(str2.charAt(1));
// console.log(str2.includes("d")); //boolean
// console.log(str2.endsWith("v"));
// console.log(str2.startsWith("D"));
// console.log(str2.padStart(3, 2));
// console.log(str2.trimEnd() + 1);
// console.log(str2.trimStart() + 1);
// console.log(str2.trim() + 1);
// console.log(str + str2);
// console.log(str.split("+", 2));
// let str = "10";
// let str1 = "6";
// console.log(eval(str % str1));
// let n = 22;
// if (n > 20 && n < 50) {
//   console.log(parseInt(Math.random(n) * 10 + 20));
// }
// let min = 20;
// let max = 50;
// function minmax(min, max) {
//   return parseInt(Math.random() * (max - min) + min);
// }
// console.log(minmax(min, max));
// let sum = 0;
// for (i = 1; i < 20; ) {
//   //   sum += i;
//   console.log(i);
//   i += i;
//   //   if (sum === 91) break;
// }
// 4- masala
let title = "webbrain academy Diyorbek";
title = title.toLowerCase();
let res = "";
for (let i = 97; i <= 122; i++) {
  for (let j = 0; j < title.length; j++) {
    if (title.charCodeAt(j) === i) {
      res += title[j];
    }
  }
}
console.log(res);

// 1 chi savol

let str = "+998 94 430 2100";
let count = str.substring(0, 4);
let reg = str.substring(5, 7);
let cit = str.substring(8, 11);
let num = str.substring(11, str.length);

let response = {
  country: count,
  region: reg,
  city: cit,
  number: num,
};
console.log(response);

// 3 - masala

let obj = {
  c1: [3, 2, 4], // [1,1,1] = (9+4+16) = 5.1
  c2: [1, 2, 2], // [1,4,4] = (9) = 3
  c3: [7, 4, 1], // [49,16,1] = (66) = 8.4
  c4: [2, 2, 2], // [4,4,4] = (12) = 3.3
};
let a = 0;
let b = 0;
let c = 0;
let d = 0;
for (key of obj.c1) a += Math.pow(key, 2);
for (key of obj.c2) b += Math.pow(key, 2);
for (key of obj.c3) c += Math.pow(key, 2);
for (key of obj.c4) d += Math.pow(key, 2);
console.log((Math.sqrt(a) + Math.sqrt(b) + Math.sqrt(c) + Math.sqrt(d)) / 4);

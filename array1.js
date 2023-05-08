// //1. array ichida berilgan sonlarni ikkiga kuppaytiruvchi funksiya yozing.

// // For example:
// // [1, 2, 3]-- > [2, 4, 6]

// // 2. stringni teskariga aylantiring.

// // For example:
// // 'world'  => 'dlrow'
// // 'word'   => 'drow'
// // solution('world'), => 'dlrow';

// // 3.shart: array ichidagi valuelar length ga qarab joylashtirish.

// // For example
// // Order(["Bozor", "Stakan", "Ko'z", "   Muzlatkich"])

// // Your function would return the following array:
// // Order(["Ko'z", "Bozor", "Stakan", "Muzlatkich"])

// // 4. bo'sh joylaarni olib tashlaydigan  funksiya yozing

// // Examples:
// // Input -> Output
// // Get("8 j 8   mBliB8g  imjB8B8  jl  B") -> Get("8j8mBliB8gimjB8B8jlB")

// // 5.Arifmetik amallarni bajaruvchi funksiya yozing.

// // solve('+', 4, 7) => 11;
// // solve('-', 15, 18) => -3;
// // solve('*', 5, 5) => 25;
// // solve('/', 49, 7)=>  7;

//Javoblar

// // 2- masala
// let str = "Diyorbek Ergashev";
// let str1;

// str1 = str.split("").reverse();
// for (i = 0; i < str1.length; i++) {
//   console.log(str1[i]);
// }

//5- Masala with switch case
function solve(operation, x, y) {
  switch (operation) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
    default:
      return;
  }
}

console.log(solve("+", 4, 7)); // Output: 11
console.log(solve("-", 15, 18)); // Output: -3
console.log(solve("*", 5, 5)); // Output: 25
console.log(solve("/", 49, 7)); // Output: 7

//5- Masala with if else
// function solve(operator, a, b) {
//   if (operator == "+") {
//     return a + b;
//   } else if (operator == "-") {
//     return a - b;
//   } else if (operator == "*") {
//     return a * b;
//   } else if (operator == "/") {
//     return a / b;
//   }
// }

// // Test

// console.log(solve("+", 4, 8)); // Output: 11
// console.log(solve("*", 15, 18)); // Output: -3
// console.log(solve("*", 5, 5)); // Output: 25
// console.log(solve("*", 49, 7)); // Output: 7
// function removeSpaces(str) {
//   return str.replace(/\s+/g, "");
// }

// console.log(removeSpaces("8 j 8   mBliB8g  imjB8B8  jl  B")); // Output: "8j8mBliB8gimjB8B8jlB"

// function multiplyByTwo(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] * 2);
//   }
//   return result;
// }

// // test
// console.log(multiplyByTwo(["webbrain", 2, 3])); // [2, 4, 6]
// console.log(5 | 1);
// let arrr = ["webbrain", 2, 3];
// console.log(arrr.indexOf("webbrain"));

let str = ["Orange", "Apple", "Kiwi", "Banana"];
let num = [1, 3, 5, 7, 9, 13, 35, 68, 89, 4, 2, 75, 21, 34];
console.log(str.sort((a, b) => a.localeCompare(b)));
console.log(num.sort((c, b) => c - b));

function Order(arr) {
  const newArr = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    // Nested for loopini yaratamiz
    for (let j = i + 1; j < length; j++) {
      // Birinchi indexdagi element kichik bolsa
      if (arr[j].length < arr[min].length) {
        // "min" ga "j" ni tayinlaymiz
        min = j;
      }
    }
    // "i" va "min" ni almashtiramiz agar ular bir-biriga teng bolmasa
    if (i != min) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
    // Yangi value "newArr" ga qo'shamiz
    newArr.push(arr[i]);
  }
  // "newArr" ni chiqaramiz
  return newArr;
}

console.log(Order(["Bozor", "Stakan", "Ko'z", "Muzlatkich"])); // ["Ko'z", "Bozor", "Stakan", "Muzlatkich"]
let str2 = "Webbrain academy";
let str3;
str3 = str2.split("").sort((a, b) => a.localeCompare(b));
console.log(str3.join(""));

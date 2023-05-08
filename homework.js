//1-masala
function multiplyByTwo(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}

console.log(multiplyByTwo([1, 2, 3]));

// 2-masala

let str = "Diyorbek Ergashev";
let str1;

str1 = str.split("").reverse();
for (i = 0; i < str1.length; i++) {
  console.log(str1[i]);
}

// 3-masala
function Koz(arr) {
  let newArr = [];
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j].length < arr[min].length) {
        min = j;
      }
    }
    if (i != min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(Koz(["Bozor", "Stakan", "Ko'z", "Muzlatkich"])); // ["Ko'z", "Bozor", "Stakan", "Muzlatkich"]

//5- Masala with switch case
function masala(sum, x, y) {
  switch (sum) {
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
console.log(masala("+", 4, 7));
console.log(masala("-", 15, 18));
console.log(masala("*", 5, 5));
console.log(masala("/", 49, 7));

//5- Masala with if else
function solve(operator, a, b) {
  if (operator == "+") {
    return a + b;
  } else if (operator == "-") {
    return a - b;
  } else if (operator == "*") {
    return a * b;
  } else if (operator == "/") {
    return a / b;
  }
}

console.log(solve("+", 4, 8));
console.log(solve("-", 15, 18));
console.log(solve("*", 5, 5));
console.log(solve("/", 49, 7));

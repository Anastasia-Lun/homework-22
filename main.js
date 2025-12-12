console.log("#5. JavaScript homework example file");

/*
 * #1
 * counter() — лічильник на замиканні
 */

const counter = (function () {
  let count = 0;

  return function (n) {
    if (typeof n === "number") {
      count = n;
      return count;
    }
    return count++;
  };
})();

// console.log(counter()) // 0
// console.log(counter()) // 1
// console.log(counter(100)) // 100
// console.log(counter()) // 101
// console.log(counter()) // 102
// console.log(counter(500)) // 500
// console.log(counter()) // 501
// console.log(counter()) // 502
// console.log(counter(0)) // 0
// console.log(counter()) // 0
// console.log(counter()) // 1

/*
 * #2
 * counterFactory — обʼєкт з методами
 */

const counterFactory = (function () {
  let value = 0;

  return {
    value(n) {
      if (typeof n === "number") {
        value = n;
      }
      return value;
    },
    increment() {
      value += 1;
    },
    decrement() {
      value -= 1;
    },
  };
})();

// console.log(counterFactory.value()) // 0
// counterFactory.increment()
// counterFactory.increment()
// counterFactory.increment()
// console.log(counterFactory.value()) // 3
// counterFactory.decrement()
// counterFactory.decrement()
// console.log(counterFactory.value()) // 1
// console.log(counterFactory.value(100)) // 100
// counterFactory.decrement()
// console.log(counterFactory.value()) // 99
// console.log(counterFactory.value(200)) // 200
// counterFactory.increment()
// console.log(counterFactory.value()) // 201

/*
 * #3
 * Рекурсія + callback
 */

const myPrint = (a, b, res) => `${a}^${b}=${res}`;

const myPow = (a, b, myPrint) => {
  if (b === 0) return myPrint(a, b, 1);
  if (b < 0) return myPrint(a, b, 1 / myPow(a, -b, (x, y, r) => r));

  const pow = (a, b) => (b === 1 ? a : a * pow(a, b - 1));
  return myPrint(a, b, pow(a, b));
};

// console.log(myPow(3, 4, myPrint)) // 3^4=81
// console.log(myPow(2, 3, myPrint)) // 2^3=8
// console.log(myPow(2, 0, myPrint)) // 2^0=1
// console.log(myPow(2, -2, myPrint)) // 2^-2=0.25

/*
 * #4
 * Максимальне число з масиву
 */

const myMax = (arr) => Math.max.apply(null, arr);

// const list = [12, 23, 100, 34, 56, 9, 233]
// console.log(myMax(list)) // 233

/*
 * #5
 * Множення та bind
 */

const myMul = (a, b) => a * b;

const myDouble = myMul.bind(null, 2);
const myTriple = myMul.bind(null, 3);

// console.log(myDouble(3)) // 6
// console.log(myDouble(4)) // 8
// console.log(myDouble(5)) // 10

// console.log(myTriple(3)) // 9
// console.log(myTriple(4)) // 12
// console.log(myTriple(5)) // 15

export { counter, counterFactory, myPow, myMax, myMul, myDouble, myTriple };

const generateRandomNumbers = (amount) => {
  let numbers = [];

  for (let i = 0; i < amount; i++) {
    numbers.push(Math.ceil(Math.random() * 50));
  }
  return numbers;
};

const random = generateRandomNumbers(10);

// const oddIndexNumbers = [];
// const evenIndexNumbers = [];

// for (const key in random) {
//   console.log(key);
//   if (key % 2 === 1) {
//     oddIndexNumbers.push(random[key]);
//   } else if (key % 2 === 0) {
//     evenIndexNumbers.push(random[key]);
//   }
// }
// console.log(oddIndexNumbers);
// console.log(evenIndexNumbers);

const getArrayByIndex = (oddOrEven, fromArray) => {
  let choice = oddOrEven.toLowerCase();
  let result = [];

  if (choice === "odd") {
    for (const key in fromArray) {
      if (key % 2 === 1) {
        result.push(fromArray[key]);
      }
    }
  } else if (choice === "even") {
    for (const key in fromArray) {
      if (key % 2 === 0) {
        result.push(fromArray[key]);
      }
    }
  }
  return result;
};

const getMaxOrMin = (maxOrMin, fromArray) => {
  let choice = maxOrMin.toLowerCase();
  let max = fromArray[0];
  let min = fromArray[0];

  if (choice === "max") {
    for (let i = 0; i < fromArray.length; i++) {
      if (fromArray[i] > max) {
        max = fromArray[i];
      }
    }
    return max;
  } else if (choice === "min") {
    for (let i = 0; i < fromArray.length; i++) {
      if (fromArray[i] < min) {
        min = fromArray[i];
      }
    }
    return min;
  }
};

console.log(random);
const oddIndexNumbers = getArrayByIndex("odd", random);
const evenIndexNumbers = getArrayByIndex("even", random);
const maxOddIndexNumbers = getMaxOrMin("max", oddIndexNumbers);
const maxEvenIndexNumbers = getMaxOrMin("max", evenIndexNumbers);
const minOddIndexNumbers = getMaxOrMin("min", oddIndexNumbers);
const minEvenIndexNumbers = getMaxOrMin("min", evenIndexNumbers);
console.log(oddIndexNumbers);
console.log(evenIndexNumbers);
console.log(maxOddIndexNumbers);
console.log(minOddIndexNumbers);
console.log(maxEvenIndexNumbers);
console.log(minEvenIndexNumbers);

const sumArray = (array) => {
  let sum = 0;

  for (const value of array) {
    sum += value;
  }
  return sum;
};

const averageArray = (array) => {
  let sum = 0;

  for (const value of array) {
    sum += value;
  }
  return sum / array.length;
};

const sumEven = sumArray(evenIndexNumbers);
const avgEven = averageArray(evenIndexNumbers);
const sumOdd = sumArray(oddIndexNumbers);
const avgOdd = averageArray(oddIndexNumbers);
console.log(sumEven);
console.log(avgEven);
console.log(sumOdd);
console.log(avgOdd);

const compareMax = (maxOdd, maxEven) => {
  if (maxOdd > maxEven) return `Nilai maksimum lebih besar array ganjil ${maxOdd} vs ${maxEven}`;
  if (maxOdd < maxEven) return `Nilai maksimum lebih besar array genap`;
  if (maxOdd === maxEven) return `Nilai maksimum kedua array sama`;
};

console.log(compareMax(maxOddIndexNumbers, maxEvenIndexNumbers));

const compareMin = (minOdd, minEven) => {
  if (minOdd > minEven) return `Nilai minimum lebih besar array ganjil ${minOdd} vs ${minEven}`;
  if (minOdd < minEven) return `Nilai minimum lebih besar array genap`;
  if (minOdd === minEven) return `Nilai minimum kedua array sama`;
};

const compareSum = (sumOdd, sumEven) => {
  if (sumOdd > sumEven) return `Nilai total lebih besar array ganjil ${sumOdd} vs ${sumEven}`;
  if (sumOdd < sumEven) return `Nilai total lebih besar array genap`;
  if (sumOdd === sumEven) return `Nilai total kedua array sama`;
};

const compareAvg = (avgOdd, avgEven) => {
  if (avgOdd > avgEven) return `Nilai rata-rata lebih besar array ganjil ${avgOdd} vs ${avgEven}`;
  if (avgOdd < avgEven) return `Nilai rata-rata lebih besar array genap`;
  if (avgOdd === avgEven) return `Nilai rata-rata kedua array sama`;
};

console.log(compareMin(minOddIndexNumbers, minEvenIndexNumbers));
console.log(compareMax(maxOddIndexNumbers, maxEvenIndexNumbers));
console.log(compareSum(sumOdd, sumEven));
console.log(compareAvg(avgOdd, avgEven));

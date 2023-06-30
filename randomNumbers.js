// Functions
const generateRandomNumbers = (amount) => {
  let numbers = [];

  for (let i = 0; i < amount; i++) {
    numbers.push(Math.ceil(Math.random() * 50));
  }
  return numbers;
};

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

const compareMax = (maxOdd, maxEven) => {
  if (maxOdd > maxEven) return `Nilai Max: array ganjil > array genap (${maxOdd} vs ${maxEven})`;
  if (maxOdd < maxEven) return `Nilai Max: array ganjil < array genap (${maxOdd} vs ${maxEven})`;
  if (maxOdd === maxEven) return `Nilai Max: array ganjil = array genap (${maxOdd} vs ${maxEven})`;
};

const compareMin = (minOdd, minEven) => {
  if (minOdd > minEven) return `Nilai Min: array ganjil > array genap (${minOdd} vs ${minEven})`;
  if (minOdd < minEven) return `Nilai Min: array ganjil < array genap (${minOdd} vs ${minEven})`;
  if (minOdd === minEven) return `Nilai Min: array ganjil = array genap (${minOdd} vs ${minEven})`;
};

const compareSum = (sumOdd, sumEven) => {
  if (sumOdd > sumEven)
    return `Nilai total penjumlahan: array ganjil > array genap (${sumOdd} vs ${sumEven})`;
  if (sumOdd < sumEven)
    return `Nilai total penjumlahan: array ganjil < array genap (${sumOdd} vs ${sumEven})`;
  if (sumOdd === sumEven)
    return `Nilai total penjumlahan: array ganjil = array genap (${sumOdd} vs ${sumEven})`;
};

const compareAvg = (avgOdd, avgEven) => {
  if (avgOdd > avgEven)
    return `Nilai rata-rata: array ganjil > array genap (${avgOdd} vs ${avgEven})`;
  if (avgOdd < avgEven)
    return `Nilai rata-rata: array ganjil < array genap (${avgOdd} vs ${avgEven})`;
  if (avgOdd === avgEven)
    return `Nilai rata-rata: array ganjil = array genap (${avgOdd} vs ${avgEven})`;
};
//Functions END

// Penggunaan Functions
const random = generateRandomNumbers(100);
console.log(`Angka acak yang didapatkan adalah: ${random.join(", ")}`);

// Array index ganjil
console.log(`\nArray dengan index ganjil:`);
const oddIndexNumbers = getArrayByIndex("odd", random);
console.log(`Berisi: ${oddIndexNumbers.join(", ")}`);

const maxOdd = getMaxOrMin("max", oddIndexNumbers);
console.log(`Nilai Max: ${maxOdd}`);

const minOdd = getMaxOrMin("min", oddIndexNumbers);
console.log(`Nilai Min: ${minOdd}`);

const sumOdd = sumArray(oddIndexNumbers);
console.log(`Total penjumlahan: ${sumOdd}`);

const avgOdd = averageArray(oddIndexNumbers);
console.log(`Rata-rata: ${avgOdd}`);

//Array index genap
console.log(`\nArray dengan index genap:`);
const evenIndexNumbers = getArrayByIndex("even", random);
console.log(`Berisi: ${evenIndexNumbers.join(", ")}`);

const maxEven = getMaxOrMin("max", evenIndexNumbers);
console.log(`Nilai Max: ${maxEven}`);

const minEven = getMaxOrMin("min", evenIndexNumbers);
console.log(`Nilai Min: ${minEven}`);

const sumEven = sumArray(evenIndexNumbers);
console.log(`Total penjumlahan: ${sumEven}`);

const avgEven = averageArray(evenIndexNumbers);
console.log(`Rata-rata: ${avgEven}`);

//Perbandingan array
console.log(`\nPerbandingan array ganjil vs genap:`);
console.log(compareMax(maxOdd, maxEven));
console.log(compareMin(minOdd, minEven));
console.log(compareSum(sumOdd, sumEven));
console.log(compareAvg(avgOdd, avgEven));

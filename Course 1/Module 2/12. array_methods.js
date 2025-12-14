const dailyStepsArr = [10000, 12000, 18000, 15000, 11000, 19000, 13000];

const areAllOver10k = dailyStepsArr.every(function (stepCount) {
  // every method
  return stepCount >= 10000;
});

console.log(areAllOver10k);

const areSomeOver10k = dailyStepsArr.some(function (stepCount) {
  // some method
  return stepCount >= 10000;
});

console.log(areSomeOver10k);

const firstOver15k = dailyStepsArr.find(function (stepCount) {
  // find method
  return stepCount > 15000;
});

console.log(firstOver15k);

const firstOver15kIndex = dailyStepsArr.findIndex(function (stepCount) {
  // findIndex method
  return stepCount > 15000;
});

console.log(firstOver15kIndex);

// indexof, at
const indexOf18k = dailyStepsArr.indexOf(18000); // indexOf method
console.log(indexOf18k);

const lastStepCount = dailyStepsArr.at(-1); // at method
console.log(lastStepCount);

// ---------- Normal function ------------

// console.log(getSpendAlert(200));

// function getSpendAlert(amount) {
//   return `Warning! You just spent £${amount}!`;
// }

// is hoisted

// ----------- Function Expression -----------

console.log(getSpendAlert(200)); // error

const getSpendAlert = function (amount) {
  return `Warning! You just spent £${amount}!`;
};

console.log(getSpendAlert(200)); // correct

// not hoisted

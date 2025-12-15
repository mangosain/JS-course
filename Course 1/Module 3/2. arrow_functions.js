const getSpendAlert = (amount) => {
  return `Warning! You just spent £${amount}!`;
};

console.log(getSpendAlert(150));

// also not hoisted

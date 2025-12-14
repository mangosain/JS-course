let num = BigInt(9007199254740992); // anything over 9007199254740991 is not safe, i.e, precision cannot be guaranteed
num = 9007199254740992n;

console.log(num);
console.log(typeof num);
console.log(9007199254740992 === num);

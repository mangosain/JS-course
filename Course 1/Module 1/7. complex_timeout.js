function answer(city, points = 5) {
  console.log(`The answer is ${city}. You get ${points}`);
}

console.log("What is the Capital of Peru?");
setTimeout(answer, 3000, "Peru", 10);

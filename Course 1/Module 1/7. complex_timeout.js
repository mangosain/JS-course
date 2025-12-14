function answer(city, points) {
  console.log(`The answer is ${city}. You get ${points}`);
}

console.log("What is the Capital of Peru?");
setTimeout(answer, 3000, "Peru", 10);

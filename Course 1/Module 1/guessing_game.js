player_guess = 3;
correct_answer = 6;

const message =
  player_guess === correct_answer
    ? "Correct"
    : player_guess < correct_answer
    ? "Too low"
    : "Too high";

console.log(message);

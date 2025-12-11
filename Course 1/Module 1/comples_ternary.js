const exercise_time = 50;

const message =
  exercise_time < 30
    ? "Very Fatty"
    : exercise_time < 60
    ? "Still Fatty"
    : "Maybe Not Fatty";

console.log(message);

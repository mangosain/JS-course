function startCountdown(seconds) {
  const cntInt = setInterval(function () {
    console.log(`Your device will shutdown in ${seconds} seconds`);
    seconds--;

    if (seconds == 0) {
      console.log(`Your device is shutting down`);
      clearInterval(cntInt);
    }
  }, 1000);
}

startCountdown(3);

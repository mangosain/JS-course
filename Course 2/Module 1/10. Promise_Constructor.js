// when you want to create your own async/awat funciton

const promise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  if (success) {
    resolve("Operation successfull");
  } else {
    reject("Operation failed");
  }
});

promise.then((reponse) => console.log(reponse));

try {
  const response = await promise;
  console.log(response);
} catch (err) {
  console.log(err);
}

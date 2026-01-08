// upload a file
function uploadFile(fileName, callback) {
  console.log("Step 1: Uploading file...");
  setTimeout(() => {
    callback(fileName);
  }, 1000);
}
// process a file
function processFile(fileName, callback) {
  console.log("Step 2: Processing file...");
  setTimeout(() => {
    callback(fileName);
  }, 1000);
}
// notify a user
function notifyUser(fileName, callback) {
  console.log("Step 3: Notifying user...");
  setTimeout(() => {
    callback();
  }, 1000);
}

/* 
Challenge:
1. Try to invoke these functions so they run in sequence. 
   The callback function passed to the final function (notifyUser) 
   can just be an anonymous function that logs 'All steps completed!'
   
   You will come up against a gotcha here! 
   hint.md is here to help!
*/

// expected output:

// Step 1: Uploading file...
// Step 2: Processing file...
// Step 3: Notifying user...
// All steps completed!

uploadFile("myFile.txt", function (fileName) {
  processFile(fileName, function (fileName) {
    notifyUser(fileName, function () {
      console.log("All steps completed!");
    });
  });
});

function checkUsername(username) {
  if (username) {
    console.log(username);
  } else {
    console.log("I execute");
    throw new Error("username not found");
    console.log("I do not execute");
  }
}

checkUsername();

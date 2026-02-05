person = {
  name: "Alice",
  username: "alice123",
};

const displayName =
  person.displayName || person.name || person.username || "Anonymous";
console.log(displayName); // Output: Alice

person.name === "Alice" && console.log("Short circuited!");

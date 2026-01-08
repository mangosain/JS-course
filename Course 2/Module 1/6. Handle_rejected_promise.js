try {
  const response = await fetch("https://api.scrimba.com/bored/api/activity");
  const data = await response.json();

  console.log(data);
} catch (err) {
  console.error("Error fetching activity");
} finally {
  console.log("Fetch attempt finished.");
}

// OR

fetch("https://api.scrimba.com/bored/api/activity").then((response) =>
  response
    .json()
    .then((data) => console.log(data))
    .catch((err) => {
      console.log("Error fetching activity");
    })
    .finally(() => {
      console.log("Fetch attempt finished.");
    })
);

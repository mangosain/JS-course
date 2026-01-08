fetch("https://apis.scrimba.com/bored/api/activity").then((response) => {
  if (!response.ok) {
    throw Error("URL not found");
  }
  response.json().then((data) => console.log(data));
});

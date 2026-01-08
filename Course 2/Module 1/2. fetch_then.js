fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random").then(
  (response) => {
    if (!response.ok) {
      throw Error("Something went wrong");
    }
    response.json().then((data) => {
      console.log(data);
    });
  }
);

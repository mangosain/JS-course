try {
  const response = await fetch(
    "https://apis.scrimba.com/dog.ceo/api/breeds/images/random"
  );
  if (!response.ok) {
    throw Error("Couldn't Fetch");
  }
  const data = await response.json();

  console.log(data);
} catch (err) {
  console.log(err);
} finally {
  console.log("Finished fetch attmept");
}

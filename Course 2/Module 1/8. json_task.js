try {
  const response = await fetch(
    "https://apis.scrimba.com/jsonplaceholder/posts",
    { method: "GET" }
  );
  if (!response.ok) {
    throw Error("Couldn't fetch data");
  }
  const data = await response.json();

  console.log(data);
} catch (err) {
  console.log(err);
} finally {
  console.log("Finished execution");
}

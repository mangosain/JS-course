try {
  const response = await fetch(
    "https://apis.scrimba.com/jsonplaceholder/posts",
    {
      method: "POST",
      body: JSON.stringify({
        title: "Holiday Nightmare",
        body: "When I was kidnapped in Scotland....",
        userID: 100,
      }),
      headers: {
        "Content-Type": "appllication/json",
      },
    }
  );
  if (!response.ok) {
    throw Error("Problem occurred");
  }
  const data = await response.json();
  console.log(data);
} catch (err) {
  console.log(err);
} finally {
  console.log("Finished attempting fetch");
}

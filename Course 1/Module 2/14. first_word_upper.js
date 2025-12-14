const paragraph =
  "javaScript is the backbone of the internet. it was created in 1995. before JS, websites were so boring";

let updated = paragraph
  .split(". ")
  .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
  .join(". ");

console.log(updated);

updated = paragraph.replaceAll(/(?:^|\.\s)([A-Za-z])/g, function (word) {
  return word.toUpperCase();
});

console.log(updated);

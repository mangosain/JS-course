const characters = [
  {
    title: "Ninja",
    emoji: "🥷",
    powers: ["agility", "stealth", "martial arts"],
  },
  {
    title: "Wizard",
    emoji: "🧙‍♂️",
    powers: ["magic", "alchemy", "teleportation"],
  },
  {
    title: "Robot",
    emoji: "🤖",
    powers: ["strength", "intelligence", "durability"],
  },
  {
    title: "Elf",
    emoji: "🧝‍♀️",
    powers: ["archery", "nature magic", "enhanced senses"],
  },
  {
    title: "Pirate",
    emoji: "🏴‍☠️",
    powers: ["navigation", "swordsmanship", "treasure hunting"],
  },
];

for (let character of characters) {
  console.log(character);
}

for (let character of characters) {
  for (let power of character.powers) {
    console.log(power);
  }
}

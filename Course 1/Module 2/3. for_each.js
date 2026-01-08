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

characters.forEach((character, index) => {
  console.log(index, character.title);
});

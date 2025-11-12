export type Game = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  youtubeUrl?: string;
  youtubePreviewStart?: number;
  youtubePreviewDuration?: number;
  price: number | string;
  genre?: string;
  publisher?: string;
  releaseDate?: string;
  platforms?: string[];
  rating?: string;
  features?: string[];
  screenshots?: string[];
  tags?: string[];
};

// Helper function (not part of export, just for data building)
function makeScreenshots(img: string): string[] {
  return [img, img]; // two times the main image
}

export const featuredGames: Game[] = [
  {
    id: 1,
    title: "Grand Theft Auto VI",
    description:
      "Live the high life or the criminal underworld in a vast city teeming with secrets. Race, strategize, and build your empire through singleplayer campaigns or wild online multiplayer.",
    imageUrl: "/gta-img.webp",
    videoUrl: "/gta6.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=QdBZY2fkU-0",
    youtubePreviewStart: 10,
    youtubePreviewDuration: 10,
    price: 69.99,
    genre: "Action Adventure",
    publisher: "Rockstar Games",
    releaseDate: "2025-12-01",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    rating: "PEGI 18",
    features: [
      "Open world metropolis",
      "Dynamic missions",
      "Car and gear upgrades",
      "Online world"
    ],
    screenshots: makeScreenshots("/gta-img.webp"),
    tags: ["Crime", "Shooter", "Sandbox"],
  },
  {
    id: 2,
    title: "Cyberpunk 2077",
    description:
      "Dive into the neon-drenched streets of Night City: deep questlines, brutal battles, character upgrades, and a living dystopian world shaped by your choices.",
    imageUrl: "/cyberpunk.jpg",
    videoUrl: "/cyberpunk2077.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=8X2kIfS6fb8",
    youtubePreviewStart: 10,
    youtubePreviewDuration: 10,
    price: 42.5,
    genre: "RPG",
    publisher: "CD Projekt Red",
    releaseDate: "2022-12-10",
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    rating: "PEGI 18",
    features: [
      "Branching story",
      "Customization & hacking",
      "Large city to explore",
      "Combat & stealth options"
    ],
    screenshots: makeScreenshots("/cyberpunk.jpg"),
    tags: ["Cyberpunk", "Singleplayer", "FPS"],
  },
  {
    id: 3,
    title: "Red Dead Redemption II",
    description:
      "Become an outlaw in the untamed Old West. Choose your path, build your camp, and ride through stunning landscapes in a dramatic, branching story.",
    imageUrl: "/red-dead-redemption.jpg",
    videoUrl: "/rdr2.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=gmA6MrX81z4",
    youtubePreviewStart: 10,
    youtubePreviewDuration: 10,
    price: 34.99,
    genre: "Adventure",
    publisher: "Rockstar Games",
    releaseDate: "2018-10-26",
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    rating: "PEGI 18",
    features: [
      "Expansive wild west",
      "Horse and resource management",
      "Moral choices",
      "Action-packed gunfights"
    ],
    screenshots: makeScreenshots("/red-dead-redemption.jpg"),
    tags: ["Western", "Adventure", "Open World"],
  },
];

export const PCGames: Game[] = [
  {
    id: 4,
    title: "Grand Theft Auto VI",
    description:
      "Live the high life or the criminal underworld in a vast city teeming with secrets. Race, strategize, and build your empire through singleplayer campaigns or wild online multiplayer.",
    imageUrl: "/gta-img.webp",
    videoUrl: "/gta6.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=QdBZY2fkU-0",
    youtubePreviewStart: 10,
    youtubePreviewDuration: 10,
    price: 69.99,
    genre: "Action Adventure",
    publisher: "Rockstar Games",
    releaseDate: "2025-12-01",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    rating: "PEGI 18",
    features: [
      "Open world metropolis",
      "Dynamic missions",
      "Car and gear upgrades",
      "Online world"
    ],
    screenshots: makeScreenshots("/gta-img.webp"),
    tags: ["Crime", "Shooter", "Sandbox"],
  },
  {
    id: 5,
    title: "Cyberpunk 2077",
    description:
      "Dive into the neon-drenched streets of Night City: deep questlines, brutal battles, character upgrades, and a living dystopian world shaped by your choices.",
    imageUrl: "/cyberpunk.jpg",
    videoUrl: "/cyberpunk2077.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=8X2kIfS6fb8",
    youtubePreviewStart: 10,
    youtubePreviewDuration: 10,
    price: 42.5,
    genre: "RPG",
    publisher: "CD Projekt Red",
    releaseDate: "2022-12-10",
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    rating: "PEGI 18",
    features: [
      "Branching story",
      "Customization & hacking",
      "Large city to explore",
      "Combat & stealth options"
    ],
    screenshots: makeScreenshots("/cyberpunk.jpg"),
    tags: ["Cyberpunk", "Singleplayer", "FPS"],
  },
  {
    id: 6,
    title: "Red Dead Redemption II",
    description:
      "Become an outlaw in the untamed Old West. Choose your path, build your camp, and ride through stunning landscapes in a dramatic, branching story.",
    imageUrl: "/red-dead-redemption.jpg",
    videoUrl: "/rdr2.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=gmA6MrX81z4",
    youtubePreviewStart: 10,
    youtubePreviewDuration: 10,
    price: 34.99,
    genre: "Adventure",
    publisher: "Rockstar Games",
    releaseDate: "2018-10-26",
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    rating: "PEGI 18",
    features: [
      "Expansive wild west",
      "Horse and resource management",
      "Moral choices",
      "Action-packed gunfights"
    ],
    screenshots: makeScreenshots("/red-dead-redemption.jpg"),
    tags: ["Western", "Adventure", "Open World"],
  },
  {
    id: 7,
    title: "Elden Ring",
    description:
      "Venture into a mysterious fantasy world. Battle titanic enemies, uncover ancient lore, and master versatile combat, solo or in online co-op.",
    imageUrl: "/elden-ring.avif",
    videoUrl: "/eldenring.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=E3Huy2cdih0",
    youtubePreviewStart: 10,
    youtubePreviewDuration: 10,
    price: 49.9,
    genre: "Action RPG",
    publisher: "FromSoftware",
    releaseDate: "2022-02-25",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    rating: "PEGI 16",
    features: [
      "Open fantasy world",
      "Legendary bosses",
      "Flexible builds",
      "Online co-op/invasion"
    ],
    screenshots: makeScreenshots("/elden-ring.avif"),
    tags: ["Fantasy", "Dark", "Soulslike"],
  },
  {
    id: 8,
    title: "Minecraft",
    description:
      "Build, explore, and survive in infinite block worlds solo or with friends. Design, battle, trade and create anything your imagination dreams up.",
    imageUrl: "/minecraft.jpg",
    videoUrl: "/minecraft.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=MmB9b5njVbA",
    youtubePreviewStart: 10,
    youtubePreviewDuration: 10,
    price: 24.99,
    genre: "Sandbox",
    publisher: "Mojang Studios",
    releaseDate: "2011-11-18",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"],
    rating: "PEGI 7",
    features: [
      "Infinite building",
      "Online co-op",
      "Adventures & survival",
      "Mods & redstone"
    ],
    screenshots: makeScreenshots("/minecraft.jpg"),
    tags: ["Sandbox", "Survival", "Creative"],
  },
  {
    id: 9,
    title: "The Witcher 3 - Wild Hunt",
    description:
      "Play as Geralt the monster hunter. Travel a vast fantasy world, take on contracts, find love and change fate with choices in gripping quests.",
    imageUrl: "/the-witcher.jpg",
    videoUrl: "/witcher3.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=ndl1W4ltcmg",
    youtubePreviewStart: 10,
    youtubePreviewDuration: 10,
    price: 19.99,
    genre: "RPG",
    publisher: "CD Projekt Red",
    releaseDate: "2015-05-19",
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    rating: "PEGI 18",
    features: [
      "Huge fantasy world",
      "Monster contracts",
      "Deep storylines",
      "Alchemy & gear upgrades"
    ],
    screenshots: makeScreenshots("/the-witcher.jpg"),
    tags: ["Fantasy", "Story-rich", "Quest"],
  },
  {
    id: 10,
    title: "Hogwarts Legacy",
    description:
      "Discover Hogwarts in the 1800s. Attend classes, learn magic, fly, explore secret dungeons, and determine your own destiny in a magical open world.",
    imageUrl: "/hogwarts-legacy.jpg",
    videoUrl: "/hogwarts-legacy.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=BtyBjOW8sGY",
    youtubePreviewStart: 10,
    youtubePreviewDuration: 10,
    price: 59.99,
    genre: "Action RPG",
    publisher: "Warner Bros. Games",
    releaseDate: "2023-02-10",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    rating: "PEGI 12",
    features: [
      "Wizard spells",
      "Castle & world exploration",
      "Flying on brooms & mounts",
      "Character upgrades"
    ],
    screenshots: makeScreenshots("/hogwarts-legacy.jpg"),
    tags: ["Magic", "Adventure", "Story"],
  },
  {
    id: 11,
    title: "Battlefield 6",
    description:
      "Join massive online battles across destructible maps and dynamic weather. Lead squads, pilot vehicles, and adapt tactics to win against rivals worldwide.",
    imageUrl: "/battlefield.jpg",
    videoUrl: "/battlefield.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=ASzOzrB-a9E",
    youtubePreviewStart: 10,
    youtubePreviewDuration: 10,
    price: 54.9,
    genre: "Shooter",
    publisher: "EA DICE",
    releaseDate: "2024-10-20",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    rating: "PEGI 18",
    features: [
      "Large destructible maps",
      "Squad-based multiplayer",
      "Realistic vehicles",
      "Dynamic weather & graphics"
    ],
    screenshots: makeScreenshots("/battlefield.jpg"),
    tags: ["Multiplayer", "Battle", "Shooter"],
  },
];


export const PlayGames: Game[] = PCGames.map((game, i) => ({
  ...game,
  id: 100 + i,
}));
export const XBoxGames: Game[] = PCGames.map((game, i) => ({
  ...game,
  id: 200 + i,
}));
export const SwitchGames: Game[] = PCGames.map((game, i) => ({
  ...game,
  id: 300 + i,
}));

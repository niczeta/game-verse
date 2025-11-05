import { GameCard } from '../components/Card'

type Game = {
  id: number
  title: string
  description: string
  imageUrl: string
  videoUrl: string
  price: number | string
}

const featuredGames: Game[] = [
  {
    id: 1,
    title: 'Cyber Quest',
    description: 'Dive into an immersive futuristic RPG with huge open-world cities, advanced gear upgrades, and epic battles against powerful foes. Customize your character, explore hidden districts, and uncover a branching narrative shaped by your choices.',
    imageUrl: "/gta-img.webp",
    videoUrl: "/gta6.mp4",
    price: 34.99,
  },
  {
    id: 2,
    title: 'Space Raiders',
    description: 'Engage in intense space battles as you pilot advanced ships through asteroid belts and hostile warzones. Tackle solo missions, team up for multiplayer raids, upgrade your arsenal, and rise through galactic ranks to become a legendary raider.',
    imageUrl: "/gta-img.webp",
    videoUrl: "/gta6.mp4",
    price: 22.49,
  },
  {
    id: 3,
    title: 'Mystic Lands',
    description: 'Explore mystical realms filled with magic, danger, and ancient secrets. Solve environmental puzzles, master powerful spells, and fight mythical creatures to protect the world from a looming darkness. Your decisions determine the fate of old kingdoms!',
    imageUrl: "/gta-img.webp",
    videoUrl: "/gta6.mp4",
    price: "FREE",
  },
];

export const FeaturedGames = () => {
  return (
    <section 
      className="bg-gray-950 p-4 sm:p-6 md:p-10" 
      id="featured-games"
      style={{ scrollMarginTop: "80px" }}
    >
      <h2 className="text-white text-3xl font-bold mb-6 text-center md:text-left mt-4">
        🔥 Featured Games 🔥
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {featuredGames.map(({ id, title, description, imageUrl, videoUrl, price }) => (
          <div key={id} className="group">
            <GameCard
              id={id}
              title={title}
              description={description}
              imageUrl={imageUrl}
              videoUrl={videoUrl}
              price={price}
              onDetailsClick={() => alert(`Opening details for ${title}`)}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

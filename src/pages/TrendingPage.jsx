import { games } from '../data/games'
import GameCard from '../components/GameCard'

function TrendingPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-6xl font-black">
          Trending Universe
        </h1>

        <button className="glass px-6 py-3 rounded-2xl">
          Live Rankings
        </button>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}

export default TrendingPage

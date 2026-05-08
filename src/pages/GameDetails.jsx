import { useParams } from 'react-router-dom'
import { games } from '../data/games'

function GameDetails() {
  const { id } = useParams()

  const game =
    games.find(g => g.id === Number(id)) || games[0]

  return (
    <div>
      <div className="relative rounded-[40px] overflow-hidden h-[70vh] mb-10">
        <img
          src={game.banner}
          alt={game.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="absolute bottom-10 left-10 max-w-3xl">
          <h1 className="text-6xl font-black mb-4">
            {game.title}
          </h1>

          <p className="text-white/70 text-lg mb-6">
            {game.description}
          </p>

          <div className="flex gap-4">
            <button className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-black">
              Launch Game
            </button>

            <button className="glass px-8 py-4 rounded-2xl">
              Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameDetails

import { useParams } from 'react-router-dom'
import { games } from '../data/games'

function WatchVideo() {
  const { id } = useParams()

  const game =
    games.find(g => g.id === Number(id)) || games[0]

  return (
    <div className="grid lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div className="glass rounded-[30px] overflow-hidden border border-cyan-400/20">
          <video
            controls
            className="w-full aspect-video"
            src={game.video}
          />
        </div>

        <div className="glass rounded-3xl p-8 mt-6">
          <h1 className="text-4xl font-black mb-4">
            {game.title} Gameplay
          </h1>

          <p className="text-white/70 leading-relaxed">
            Elite futuristic gameplay with cinematic combat systems.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WatchVideo

import { games } from '../data/games'

function ContinueWatchingPage() {
  return (
    <div>
      <h1 className="text-6xl font-black mb-10">
        Continue Watching
      </h1>

      <div className="space-y-6">
        {games.slice(0, 10).map(game => (
          <div
            key={game.id}
            className="glass rounded-[30px] p-5 flex flex-col lg:flex-row gap-6 items-center border border-white/10"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full lg:w-80 h-48 object-cover rounded-2xl"
            />

            <div className="flex-1 w-full">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-3xl font-black">
                  {game.title}
                </h2>

                <span className="text-cyan-400">
                  {game.progress}%
                </span>
              </div>

              <p className="text-white/70 mb-5">
                Continue your futuristic gaming journey.
              </p>

              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden mb-5">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                  style={{ width: `${game.progress}%` }}
                />
              </div>

              <button className="bg-cyan-400 text-black px-8 py-3 rounded-2xl font-black">
                Resume
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContinueWatchingPage

import { motion } from 'framer-motion'
import { FaPlay, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function GameCard({ game }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      className="relative min-w-[280px] rounded-3xl overflow-hidden glass border border-cyan-400/20 shadow-neon group"
    >
      <img src={game.image} className="w-full h-44 object-cover group-hover:scale-110 transition duration-500" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute top-4 right-4 bg-cyan-400 text-black px-3 py-1 rounded-full text-xs font-black">
        ⭐ {game.rating}
      </div>

      <div className="absolute bottom-0 p-4 w-full">
        <div className="flex gap-2 mb-2">
          <span className="bg-purple-500/30 border border-purple-400 px-2 py-1 rounded-full text-xs">
            {game.genre}
          </span>
        </div>

        <h3 className="font-bold text-lg mb-2">{game.title}</h3>

        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-3">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500" style={{ width: `${game.progress}%` }} />
        </div>

        <div className="flex items-center gap-3">
          <Link to={`/watch/${game.id}`} className="flex-1">
            <button className="w-full bg-cyan-400 text-black font-bold py-2 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition">
              <FaPlay /> Play
            </button>
          </Link>

          <button className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-purple-500/30">
            <FaPlus />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default GameCard

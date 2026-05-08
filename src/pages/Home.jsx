import HeroSlider from '../components/HeroSlider'
import { games } from '../data/games'
import GameCard from '../components/GameCard'
import { motion } from 'framer-motion'

function Row({ title, items }) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-3xl font-black">{title}</h2>
        <button className="text-cyan-400">View All</button>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {items.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <HeroSlider />

      <div className="grid lg:grid-cols-4 gap-6 my-12">
        <div className="glass rounded-3xl p-6 border border-cyan-400/20">
          <h3 className="font-black text-2xl mb-3">Live Updates</h3>
          <p className="text-white/70">
            Server optimization patch deployed globally.
          </p>
        </div>

        <div className="glass rounded-3xl p-6 border border-purple-400/20">
          <h3 className="font-black text-2xl mb-3">Trending Now</h3>
          <p className="text-white/70">
            Cyber Drift dominating weekly charts.
          </p>
        </div>

        <div className="glass rounded-3xl p-6 border border-pink-400/20">
          <h3 className="font-black text-2xl mb-3">Anime Games</h3>
          <p className="text-white/70">
            Top anime RPG adventures updated daily.
          </p>
        </div>

        <div className="glass rounded-3xl p-6 border border-green-400/20">
          <h3 className="font-black text-2xl mb-3">Bug Fixes</h3>
          <p className="text-white/70">
            New FPS optimization fixes available.
          </p>
        </div>
      </div>

      <Row title="Trending Games" items={games.slice(0, 10)} />
      <Row title="Continue Watching" items={games.slice(10, 20)} />
      <Row title="Anime Universe" items={games.slice(5, 15)} />
      <Row title="Recommended For You" items={games.slice(15, 25)} />

      <footer className="mt-20 glass rounded-[40px] p-10 border border-white/10">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-black text-2xl mb-5">NEON HUB</h3>
            <p className="text-white/60 leading-relaxed">
              Ultimate futuristic OTT gaming launcher with immersive
              experiences.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Explore</h4>

            <div className="space-y-2 text-white/60">
              <p>Games</p>
              <p>Streaming</p>
              <p>Esports</p>
              <p>Anime</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Community</h4>

            <div className="space-y-2 text-white/60">
              <p>Forums</p>
              <p>Creators</p>
              <p>Events</p>
              <p>Updates</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Platform</h4>

            <div className="space-y-2 text-white/60">
              <p>Vercel Ready</p>
              <p>GitHub Ready</p>
              <p>Netlify Ready</p>
              <p>Responsive UI</p>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}

export default Home

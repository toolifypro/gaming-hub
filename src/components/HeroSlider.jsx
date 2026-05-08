import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { games } from '../data/games'
import { motion } from 'framer-motion'

function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3500 }}
      loop
      className="rounded-[40px] overflow-hidden h-[75vh]"
    >
      {games.slice(0, 6).map(game => (
        <SwiperSlide key={game.id}>
          <div className="relative h-[75vh]">
            <img src={game.banner} className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-20 left-10 max-w-2xl"
            >
              <span className="px-4 py-2 rounded-full glass border border-cyan-400/40 text-sm inline-block mb-4">
                Featured AAA Experience
              </span>

              <h1 className="text-6xl font-black mb-5 neon-text">
                {game.title}
          

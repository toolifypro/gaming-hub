export const games = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: [
    'Cyber Drift',
    'Neon Assault',
    'Shadow Nexus',
    'Galaxy Breakers',
    'Samurai X',
    'Phantom Zero',
    'Titan Protocol',
    'Dragon Matrix',
    'Inferno Ops',
    'Omega Trigger'
  ][i % 10] + ' ' + (i + 1),
  rating: (4 + Math.random()).toFixed(1),
  genre: ['RPG', 'FPS', 'Anime', 'Open World', 'Sci-Fi'][i % 5],
  progress: Math.floor(Math.random() * 100),
  image: `https://picsum.photos/seed/game${i}/800/450`,
  banner: `https://picsum.photos/seed/banner${i}/1600/900`,
  description: 'Massive futuristic gaming experience with cinematic visuals and elite combat systems.',
  video: 'https://www.w3schools.com/html/mov_bbb.mp4'
}))

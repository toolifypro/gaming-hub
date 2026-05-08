export const videos = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  title: `Patch Fix Deep Dive Episode ${i + 1}`,
  creator: 'Neon Dev Studio',
  views: `${(i + 1) * 12}K views`,
  thumbnail: `https://picsum.photos/seed/video${i}/600/340`,
  duration: `${10 + i}:2${i % 6}`,
  category: ['Crashes', 'Performance', 'FPS', 'Multiplayer'][i % 4],
  comments: Math.floor(Math.random() * 300),
  likes: Math.floor(Math.random() * 5000)
}))

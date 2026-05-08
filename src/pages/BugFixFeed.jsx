import { videos } from '../data/videos'

function BugFixFeed() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {videos.map(video => (
        <div
          key={video.id}
          className="glass rounded-3xl overflow-hidden border border-white/10"
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-52 object-cover"
          />

          <div className="p-5">
            <h3 className="font-black text-lg mb-2">
              {video.title}
            </h3>

            <p className="text-white/60 text-sm">
              {video.views}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BugFixFeed

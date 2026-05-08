function ProfilePage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="glass rounded-[40px] overflow-hidden">
        <div className="h-56 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />

        <div className="p-10 -mt-20 relative z-10">
          <div className="w-40 h-40 rounded-full border-8 border-[#050816] overflow-hidden mb-6">
            <img
              src="https://picsum.photos/300"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-5xl font-black mb-3">
            Elite Gamer
          </h1>

          <p className="text-white/70 mb-10">
            Cyberpunk strategist • Anime explorer • FPS grinder
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {['Games', 'Hours', 'Followers', 'Achievements'].map(
              (item, i) => (
                <div
                  key={item}
                  className="glass rounded-3xl p-6 text-center"
                >
                  <h3 className="text-4xl font-black mb-2">
                    {(i + 1) * 120}
                  </h3>

                  <p className="text-white/60">
                    {item}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

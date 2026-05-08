function SearchPage() {
  return (
    <div className="glass rounded-[40px] p-10">
      <h1 className="text-5xl font-black mb-6">
        Search Universe
      </h1>

      <input
        placeholder="Search games..."
        className="w-full bg-black/30 border border-white/10 rounded-2xl p-5 outline-none"
      />
    </div>
  )
}

export default SearchPage

import { categories } from '../data/categories'

function CategoriesPage() {
  return (
    <div>
      <h1 className="text-6xl font-black mb-10">
        Game Categories
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {categories.map(item => (
          <div
            key={item}
            className="glass rounded-[30px] p-10 border border-white/10 hover:border-cyan-400/40 transition h-56 flex flex-col justify-between"
          >
            <span className="text-7xl">🎮</span>

            <div>
              <h2 className="text-3xl font-black mb-2">
                {item}
              </h2>

              <p className="text-white/60">
                Explore elite {item} experiences.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoriesPage

import { Link } from 'react-router-dom'
import { FaGamepad, FaSearch, FaBell, FaUserCircle } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-neon">
          <FaGamepad />
        </div>
        <h1 className="text-2xl font-black neon-text">NEON HUB</h1>
      </div>

      <div className="hidden lg:flex items-center gap-8 text-sm font-semibold">
        <Link to="/">Home</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/bug-fixes">Bug Fix Feed</Link>
        <Link to="/continue">Continue Watching</Link>
        <Link to="/notes">Notes</Link>
      </div>

      <div className="flex items-center gap-4 text-xl">
        <Link to="/search"><FaSearch /></Link>
        <FaBell />
        <Link to="/profile"><FaUserCircle /></Link>
      </div>
    </nav>
  )
}

export default Navbar

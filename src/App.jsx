import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import GameDetails from './pages/GameDetails'
import WatchVideo from './pages/WatchVideo'
import BugFixFeed from './pages/BugFixFeed'
import SearchPage from './pages/SearchPage'
import NotesPage from './pages/NotesPage'
import ProfilePage from './pages/ProfilePage'
import CategoriesPage from './pages/CategoriesPage'
import TrendingPage from './pages/TrendingPage'
import ContinueWatchingPage from './pages/ContinueWatchingPage'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/watch/:id" element={<WatchVideo />} />
        <Route path="/bug-fixes" element={<BugFixFeed />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/continue" element={<ContinueWatchingPage />} />
      </Routes>
    </MainLayout>
  )
}

export default App

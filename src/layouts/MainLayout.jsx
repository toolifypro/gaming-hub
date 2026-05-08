import Navbar from '../components/Navbar'

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-grid bg-[#050816] text-white">
      <Navbar />
      <main className="px-6 lg:px-10 py-8">
        {children}
      </main>
    </div>
  )
}

export default MainLayout

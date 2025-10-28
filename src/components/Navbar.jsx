import { Search, Bell, ChevronDown, User } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <a href="#" className="text-red-600 font-extrabold text-2xl tracking-tight">
              NETFLIX
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-200">
              <a href="#" className="hover:text-white">Home</a>
              <a href="#" className="hover:text-white">TV Shows</a>
              <a href="#" className="hover:text-white">Movies</a>
              <a href="#" className="hover:text-white">New & Popular</a>
              <a href="#" className="hover:text-white">My List</a>
            </nav>
          </div>

          <div className="flex items-center gap-4 text-gray-200">
            <button aria-label="Search" className="p-2 hover:text-white">
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="Notifications" className="p-2 hover:text-white">
              <Bell className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded bg-gray-500/60 grid place-items-center">
                <User className="h-4 w-4" />
              </div>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

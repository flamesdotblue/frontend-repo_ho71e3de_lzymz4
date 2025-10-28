import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function MovieTile({ item }) {
  return (
    <div className="relative group shrink-0 w-40 sm:w-48 mr-3">
      <img
        src={item.image}
        alt={item.title}
        className="h-56 w-full object-cover rounded-md transition duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 rounded-md bg-black/0 group-hover:bg-black/30 transition" />
      <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition">
        <p className="text-xs font-semibold text-white line-clamp-2 drop-shadow">
          {item.title}
        </p>
      </div>
    </div>
  )
}

export default function Row({ title, items = [] }) {
  const scrollRef = useRef(null)

  const scrollByAmount = (dir) => {
    const el = scrollRef.current
    if (!el) return
    const amount = dir === 'left' ? -el.clientWidth : el.clientWidth
    el.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section className="relative">
      <h2 className="text-lg md:text-2xl font-semibold text-white mb-3 px-4 lg:px-8">{title}</h2>
      <div className="relative">
        <button
          onClick={() => scrollByAmount('left')}
          aria-label="Scroll left"
          className="hidden md:grid place-items-center absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar pl-4 lg:pl-8 pr-4 lg:pr-8"
        >
          {items.map((item) => (
            <MovieTile key={item.id} item={item} />
          ))}
        </div>
        <button
          onClick={() => scrollByAmount('right')}
          aria-label="Scroll right"
          className="hidden md:grid place-items-center absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}

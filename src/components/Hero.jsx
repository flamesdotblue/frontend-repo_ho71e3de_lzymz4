import { Play, Info } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[75vh] w-full bg-black">
      <img
        src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1920&auto=format&fit=crop"
        alt="Feature backdrop"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 pt-32 md:pt-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow">
            Watch the stories that move the world
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-200">
            Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded bg-white text-black font-semibold px-5 py-2.5 hover:bg-gray-200 transition">
              <Play className="h-5 w-5" /> Play
            </button>
            <button className="inline-flex items-center gap-2 rounded bg-gray-500/30 text-white font-semibold px-5 py-2.5 hover:bg-gray-500/40 transition">
              <Info className="h-5 w-5" /> More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

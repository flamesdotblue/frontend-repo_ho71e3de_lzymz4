import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Row from './components/Row'
import Footer from './components/Footer'

function generateItems(seedPrefix, count = 12) {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${seedPrefix}-${i + 1}`,
    title: `Sample Title ${i + 1}`,
    image: `https://picsum.photos/seed/${seedPrefix}-${i + 1}/400/600`,
  }))
}

function App() {
  const trending = generateItems('trending')
  const topRated = generateItems('top')
  const newReleases = generateItems('new')
  const thrillers = generateItems('thrillers')

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <div className="space-y-8 -mt-8">
          <Row title="Trending Now" items={trending} />
          <Row title="Top Rated" items={topRated} />
          <Row title="New Releases" items={newReleases} />
          <Row title="Thrillers" items={thrillers} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10 text-sm text-gray-400">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="space-y-2">
            <a href="#" className="block hover:underline">Audio Description</a>
            <a href="#" className="block hover:underline">Investor Relations</a>
            <a href="#" className="block hover:underline">Legal Notices</a>
          </div>
          <div className="space-y-2">
            <a href="#" className="block hover:underline">Help Center</a>
            <a href="#" className="block hover:underline">Jobs</a>
            <a href="#" className="block hover:underline">Cookie Preferences</a>
          </div>
          <div className="space-y-2">
            <a href="#" className="block hover:underline">Gift Cards</a>
            <a href="#" className="block hover:underline">Terms of Use</a>
            <a href="#" className="block hover:underline">Corporate Information</a>
          </div>
          <div className="space-y-2">
            <a href="#" className="block hover:underline">Media Center</a>
            <a href="#" className="block hover:underline">Privacy</a>
            <a href="#" className="block hover:underline">Contact Us</a>
          </div>
        </div>
        <p className="mt-8">© {new Date().getFullYear()} Netflix Clone — for demo purposes</p>
      </div>
    </footer>
  )
}

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" 
            alt="MeMate"
            className="h-10 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>About</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <a href="#" className="hover:text-blue-500">Pricing</a>
          <a href="#" className="hover:text-blue-500">News</a>
          <a href="#" className="hover:text-blue-500">Contact us</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="px-5 py-2 text-sm font-semibold border border-black rounded-full hover:bg-gray-100">
            Request a Demo
          </button>
          <button className="px-5 py-2 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800 relative">
            <span className="absolute inset-0 rounded-full border-2 border-blue-400 translate-x-1 translate-y-1 z-[-1]"></span>
            Log In
          </button>
        </div>
      </div>
    </header>
  );
}

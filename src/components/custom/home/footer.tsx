export default function Footer() {
    return (
      <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Top curved border */}
        <div className="bg-white">
          <div className="h-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-t-[2rem]"></div>
        </div>
  
        {/* Decorative blurred gradients */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
  
        <div className="px-6 py-20 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Main content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              {/* Left side - Logo and description */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">P</span>
                  </div>
                  <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent">ProjectShelf</span>
                </div>
  
                <p className="text-gray-300 text-lg max-w-md leading-relaxed">
                  Build, showcase, and share stunning project portfolios effortlessly.
                </p>
  
                {/* Trust Badges */}
                
              </div>
  
              {/* Right side - Navigation links */}
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h3 className="font-semibold text-white mb-6">Explore</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Showcase</a></li>
                  </ul>
                </div>
  
                <div>
                  <h3 className="font-semibold text-white mb-6">Connect</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                  </ul>
                </div>
              </div>
            </div>
  
            {/* Bottom bar */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-8 border-t border-white/10 gap-6">
              <p className="text-gray-400 text-sm">
                © ProjectShelf {new Date().getFullYear()}. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
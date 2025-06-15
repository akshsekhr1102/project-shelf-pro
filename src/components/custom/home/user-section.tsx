import React from 'react';
import { Play, MousePointer2, ArrowRight, Sparkles, Zap, Eye } from 'lucide-react';

export default function UserJourneysSection() {
  return (
    <section className="py-24 px-4 bg-transparent/35 rounded-b-4xl relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/40 rounded-full px-4 py-2 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Portfolio Showcase</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent mb-6 leading-tight">
            Bring your work
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">to life visually</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcase your projects through interactive case studies, immersive demos, and rich media to leave a lasting impression.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Dynamic Videos Feature */}
          <div className="group text-center">
            <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-xl border border-white/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <div className="absolute -top-4 -right-4 z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                </div>
              </div>
              
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" />
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  { color: 'from-red-500 to-red-600', width: '75%' },
                  { color: 'from-blue-500 to-blue-600', width: '60%' },
                  { color: 'from-yellow-500 to-orange-500', width: '85%' },
                  { color: 'from-green-500 to-emerald-500', width: '45%' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-lg shadow-sm flex items-center justify-center`}>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 delay-${index * 200}`}
                        style={{ width: item.width }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <Eye className="w-5 h-5 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Case Study Videos</h3>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
              Add walkthroughs, animations, and video demos to highlight your process and outcomes with powerful storytelling.
            </p>
          </div>

          {/* Interactive Prototypes Feature */}
          <div className="group text-center">
            <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-xl border border-white/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <div className="absolute -top-4 -left-4 z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <MousePointer2 className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-3xl p-6 text-white max-w-56 mx-auto shadow-2xl relative overflow-hidden">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-700 rounded-full"></div>
                
                <div className="mt-4 space-y-4">
                  <div className="text-sm leading-relaxed text-gray-300">
                    Showcase real interactions,
                    <br />
                    user flows, and design details
                    <br />
                    to help visitors explore
                    <br />
                    your work like a live app.
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-gray-700 to-gray-600 h-16 rounded-xl shadow-inner relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse"></div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-700 to-gray-600 h-16 rounded-xl shadow-inner relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group">
                    Explore Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              
              <div className="absolute top-1/2 right-8 flex flex-col gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="relative">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-ping absolute"></div>
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">Interactive Demos</h3>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
              Let visitors interact directly with your projects, simulate real user experiences, and demonstrate functionality hands-on.
            </p>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Start Building Your Portfolio
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

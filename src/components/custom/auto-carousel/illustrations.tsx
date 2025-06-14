// Illustrations.tsx

import { BarChart3, Palette, Globe, Camera, Clock, Users } from "lucide-react";


export function Illustration({ type }: { type: string }) {
  switch (type) {
    case "portfolio":
      return (
        <div className="relative">
          <div className="w-72 h-48 bg-white rounded-lg shadow-lg p-4 relative">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Camera className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="w-20 h-2 bg-gray-300 rounded"></div>
                <div className="w-16 h-1.5 bg-gray-200 rounded mt-1"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="w-full h-16 bg-blue-200 rounded"></div>
              <div className="w-full h-16 bg-green-200 rounded"></div>
            </div>
            <div className="space-y-1">
              <div className="w-full h-1.5 bg-gray-200 rounded"></div>
              <div className="w-3/4 h-1.5 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center shadow-lg">
            <Users className="w-6 h-6 text-white" />
          </div>
        </div>
      );

    case "url":
      return (
        <div className="relative">
          <div className="w-80 h-52 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-8 bg-gray-100 flex items-center px-3 gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-1 bg-white rounded px-2 py-1 text-xs text-gray-600">
                projectshelf.com/johndoe
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-300 rounded-full"></div>
                <div>
                  <div className="w-24 h-3 bg-gray-300 rounded mb-1"></div>
                  <div className="w-20 h-2 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="w-full h-12 bg-green-200 rounded"></div>
                <div className="w-full h-12 bg-blue-200 rounded"></div>
                <div className="w-full h-12 bg-purple-200 rounded"></div>
              </div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
            <Globe className="w-8 h-8 text-white" />
          </div>
        </div>
      );

    case "themes":
      return (
        <div className="relative">
          <div className="w-72 h-48 bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <Palette className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-medium">Choose Theme</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-2">
                <div className="w-full h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded border-2 border-purple-500"></div>
                <div className="text-xs text-center">Modern</div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-16 bg-gradient-to-br from-green-400 to-green-600 rounded"></div>
                <div className="text-xs text-center">Creative</div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded"></div>
                <div className="text-xs text-center">Minimal</div>
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-500 text-center">Real-time preview</div>
          </div>
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
            <Palette className="w-6 h-6 text-white" />
          </div>
        </div>
      );

    case "analytics":
      return (
        <div className="relative">
          <div className="w-72 h-48 bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium">Analytics</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Portfolio Views</span>
                <span className="text-sm font-bold text-orange-600">2,847</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div className="w-3/4 h-2 bg-orange-500 rounded"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Case Study Clicks</span>
                <span className="text-sm font-bold text-orange-600">1,234</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div className="w-1/2 h-2 bg-orange-500 rounded"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Engagement Rate</span>
                <span className="text-sm font-bold text-orange-600">68%</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
        </div>
      );

    default:
      return null;
  }
}

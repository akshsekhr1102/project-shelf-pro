"use client"

import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const isMobile = useIsMobile()

  return (
    <div className="fixed top-0 left-0 w-full h-24 bg-transparent text-black flex flex-col items-center justify-center z-50">
      {/* Glassmorphic gradient container */}
      <div className="absolute bg-white/20 backdrop-blur-md border border-white/30 shadow-lg h-16 w-[95%] max-w-[600px] rounded-4xl flex items-center justify-between px-2 mx-4">
        <div className="px-4">
          <Image
            src={"/logo.svg"}
            height={100}
            width={100}
            alt="Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
          />
        </div>

        {isMobile ? (
          // Mobile Navigation
          <div>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="text-black hover:bg-white/20">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="bg-white/90 backdrop-blur-md border-white/30">
                <div className="flex flex-col space-y-6 p-6">
                  <Link href={"/"} className="text-lg font-medium hover:text-black/70 transition-colors py-2">
                    Pricing
                  </Link>
                  <Link href={"/signin"} className="text-lg font-medium hover:text-black/70 transition-colors py-2">
                    Log in
                  </Link>
                  <Link href={"/signup"} className="hover:scale-105 transition-transform inline-block">
                    <Button className="w-full bg-black/80 hover:bg-black text-white rounded-3xl h-12 backdrop-blur-sm">
                      Join us
                    </Button>
                  </Link>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        ) : (
          // Desktop Navigation
          <div>
            <ul className="flex space-x-6 items-center">
              <li>
                <Link href={"/"} className="hover:text-black/70 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href={"/signin"} className="hover:text-black/70 transition-colors">
                  Log in
                </Link>
              </li>
              <li>
                <Link href={"/signup"} className="hover:scale-105 transition-transform">
                  <Button className="w-32 bg-black/80 hover:bg-black text-white rounded-3xl h-12 backdrop-blur-sm">
                    Join us
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

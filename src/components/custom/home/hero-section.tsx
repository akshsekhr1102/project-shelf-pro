import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="min-h-svh flex flex-col items-center justify-center px-4 py-8 mt-10">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <Badge variant={'secondary'}>
            <Image src="/logo.svg" alt="ProjectShelf Logo" width={100} height={100} />
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 className="tracking-tight text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tighter">
          Build stunning portfolios <br /> without writing code.
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto tracking-tight">
          Create dynamic case studies, customize your themes, and track engagement —<br /> all in one platform made for creatives.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link href="/signup">
            <Button className="w-32 bg-black/80 hover:bg-black text-white rounded-3xl h-12 backdrop-blur-sm">
              Get Started
            </Button>
          </Link>
          <Button disabled variant="ghost" size="lg" className="min-w-32 text-black rounded-3xl h-12 backdrop-blur-sm text-center px-4">
            View Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

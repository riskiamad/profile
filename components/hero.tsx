import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Image className="mx-auto mb-6 bg-slate-900 rounded-full flex items-center justify-center" src="/profile.png" width={200} height={200} alt="Achmad Rizky Syahrani" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Achmad Rizky
            <span className="block text-slate-600">Syahrani</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">Software Engineer & Web Developer</p>

          <p className="text-lg text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting digital solutions with expertise in software architecture, third-party integrations, and full-stack
            development. Specialized in marketplace, fintech, and enterprise solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
              <Link href="mailto:rizkyachmadsyah@gmail.com" target="_blank" className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Link href="https://github.com/riskiamad" target="_blank" className="text-slate-600 hover:text-slate-900 transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com/in/rizky-achmad" target="_blank" className="text-slate-600 hover:text-slate-900 transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-slate-400" />
        </div>
      </div>
    </section>
  )
}

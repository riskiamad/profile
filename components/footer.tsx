import { Github, Linkedin, Mail, Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <span className="font-semibold">Achmad Rizky Syahrani</span>
              </div>
              <p className="text-slate-300 mb-4 max-w-md">
                Software Engineer specializing in crafting digital solutions, third-party integrations, and software
                architecture consulting.
              </p>
              <div className="flex space-x-4">
                <Link href="https://github.com/riskiamad" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://linkedin.com/in/rizky-achmad" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:rizkyachmadsyah@gmail.com"
                  target="_blank"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <span className="hover:text-white transition-colors">Digital Solutions</span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors">Third Party Integration</span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors">Software Architecture</span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors">Full-Stack Development</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">© {" "} {new Date().getFullYear()} Achmad Rizky Syahrani. All rights reserved.</p>
            <p className="text-slate-400 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

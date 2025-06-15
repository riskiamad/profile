import { Button } from "@/components/ui/button"
import { Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&#39;s Work Together</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your digital vision to life? I&#39;m available for new projects and consulting opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Mail className="h-8 w-8 mx-auto mb-4 text-slate-400" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-slate-300">rizkyachmadsyah@gmail.com</p>
            </div>

            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-slate-400" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-slate-300">Indonesia (Remote Available)</p>
            </div>

            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-4 text-slate-400" />
              <h3 className="text-lg font-semibold mb-2">Response Time</h3>
              <p className="text-slate-300">Within 24 hours</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              <Link href="mailto:rizkyachmadsyah@gmail.com" target="_blank" className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

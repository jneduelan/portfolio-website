import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import EnhancedBackground from "@/components/enhanced-background"

export default function Contact() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <EnhancedBackground />

      <main className="relative z-10 py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 mb-12 text-primary font-display text-lg hover:underline"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" /> BACK TO HOME
        </Link>

        <h1 className="font-display text-4xl sm:text-6xl font-bold mb-12 text-primary">CONTACT</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="font-display text-2xl font-bold text-primary mb-6">GET IN TOUCH</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group hover:bg-white/5 p-2 rounded-lg transition-colors">
                <Mail className="w-6 h-6 text-primary/70 mt-1 group-hover:text-primary transition-colors" />
                <div>
                  <h3 className="font-display text-lg font-bold text-primary">Email</h3>
                  <a
                    href="mailto:Jneduelan@icloud.com"
                    className="text-primary/80 hover:text-primary transition-colors"
                  >
                    Jneduelan@icloud.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group hover:bg-white/5 p-2 rounded-lg transition-colors">
                <Phone className="w-6 h-6 text-primary/70 mt-1 group-hover:text-primary transition-colors" />
                <div>
                  <h3 className="font-display text-lg font-bold text-primary">Phone</h3>
                  <a href="tel:+19728543244" className="text-primary/80 hover:text-primary transition-colors">
                    (972)-854-3244
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group hover:bg-white/5 p-2 rounded-lg transition-colors">
                <MapPin className="w-6 h-6 text-primary/70 mt-1 group-hover:text-primary transition-colors" />
                <div>
                  <h3 className="font-display text-lg font-bold text-primary">Location</h3>
                  <p className="text-primary/80">Dallas, TX</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group hover:bg-white/5 p-2 rounded-lg transition-colors">
                <Linkedin className="w-6 h-6 text-primary/70 mt-1 group-hover:text-primary transition-colors" />
                <div>
                  <h3 className="font-display text-lg font-bold text-primary">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/Jaylen-Neduelan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary/80 hover:text-primary transition-colors"
                  >
                    linkedin.com/in/Jaylen-Neduelan
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group hover:bg-white/5 p-2 rounded-lg transition-colors">
                <Github className="w-6 h-6 text-primary/70 mt-1 group-hover:text-primary transition-colors" />
                <div>
                  <h3 className="font-display text-lg font-bold text-primary">GitHub</h3>
                  <a
                    href="https://github.com/jneduelan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary/80 hover:text-primary transition-colors"
                  >
                    github.com/jneduelan
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="font-display text-2xl font-bold text-primary mb-6">SEND A MESSAGE</h2>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-display text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-primary transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-display text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-primary transition-all duration-300"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-display text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-primary resize-none transition-all duration-300"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-primary/20 hover:bg-primary/30 text-primary font-display text-lg rounded-lg transition-all duration-300 hover:translate-y-[-2px] shadow-md hover:shadow-lg"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}


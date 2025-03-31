import Link from "next/link"
import Image from "next/image"
import { MoveRight } from "lucide-react"
import InteractiveBackground from "@/components/interactive-background"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <InteractiveBackground />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6">
        <div className="max-w-5xl w-full mx-auto">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-center mb-4 text-primary animate-fade-in">
            JAYLEN NEDUELAN
          </h1>

          <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-center mb-8 text-primary/80">
            BUSINESS ANALYST @ TRIUMPHPAY
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Link
              href="/projects"
              className="group flex items-center gap-2 px-8 py-4 bg-primary/10 hover:bg-primary/20 text-primary font-display text-lg rounded-lg transition-all duration-300 hover:translate-x-1"
            >
              VIEW PROJECTS <MoveRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="group flex items-center gap-2 px-8 py-4 bg-primary/10 hover:bg-primary/20 text-primary font-display text-lg rounded-lg transition-all duration-300 hover:translate-x-1"
            >
              CONTACT ME <MoveRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Image
                src="/images/jaylen-neduelan-headshot.jpg"
                alt="Jaylen Neduelan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-primary/80 max-w-2xl mx-auto">
              Computer Science student at the University of North Texas with experience in Business Analysis, IT Project
              Management, and Software Development.
            </p>
          </div>

          <div className="mt-8 flex justify-center gap-6">
            <a
              href="https://github.com/jneduelan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/70 hover:text-primary transition-colors transform hover:scale-110 duration-300"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/Jaylen-Neduelan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/70 hover:text-primary transition-colors transform hover:scale-110 duration-300"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="mailto:Jneduelan@icloud.com"
              className="text-primary/70 hover:text-primary transition-colors transform hover:scale-110 duration-300"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}


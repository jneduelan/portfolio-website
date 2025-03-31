import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import EnhancedBackground from "@/components/enhanced-background"
import ResumeSection from "@/components/resume-section"

export default function Resume() {
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

        <h1 className="font-display text-4xl sm:text-6xl font-bold mb-12 text-primary">RESUME</h1>

        <ResumeSection />

        <div className="mt-12 flex justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-8 py-4 bg-primary/20 hover:bg-primary/30 text-primary font-display text-lg rounded-lg transition-all duration-300 hover:translate-y-[-2px] shadow-md hover:shadow-lg"
            rel="noreferrer"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </main>
    </div>
  )
}


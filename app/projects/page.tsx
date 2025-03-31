import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import EnhancedBackground from "@/components/enhanced-background"

const projects = [
  {
    title: "Asset Management Automation",
    company: "Triumph Financial",
    period: "Summer 2024",
    description:
      "Engineered SQL-based reports for automated asset tracking, including warranty and EOL statuses, improving data accuracy by 15%. Implemented validation processes, reducing unplanned purchases by 20% and increasing data accuracy by 25%.",
    technologies: ["SQL", "Freshservice CMDB", "Knowledge Base"],
    image: "/images/asset-management.svg",
  },
  {
    title: "Sonify for Graphs",
    company: "University of North Texas",
    period: "Sept 2024 – Apr 2025",
    description:
      "Developed a full web application that converts graph data into sound, improving accessibility for visually impaired users. Connected a Flask backend to a Next.js frontend to process and sonify data, storing user-generated files and metadata using Supabase.",
    technologies: ["Python", "Flask", "Next.js", "Supabase"],
    image: "/images/sonify.svg",
  },
  {
    title: "Sentiment Analysis with BERT and CNN Models",
    company: "University of North Texas",
    period: "Spring 2024",
    description:
      "Developed sentiment analysis models using BERT and CNN, achieving 85% classification accuracy. Leveraged TensorFlow for deep learning implementation, focusing on text tokenization and preprocessing.",
    technologies: ["Python", "TensorFlow", "BERT", "CNN"],
    image: "/images/sentiment-analysis.svg",
  },
]

export default function Projects() {
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

        <h1 className="font-display text-4xl sm:text-6xl font-bold mb-12 text-primary">PROJECTS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:translate-y-[-4px] border border-primary/10 shadow-lg hover:shadow-xl"
            >
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-primary mb-2">{project.title}</h2>
              <p className="text-primary/70 mb-4">
                {project.company} | {project.period}
              </p>

              <p className="text-primary/80 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary/90 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}


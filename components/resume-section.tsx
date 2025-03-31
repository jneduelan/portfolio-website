"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface ResumeItemProps {
  title: string
  subtitle: string
  date: string
  description: string[]
  technologies?: string[]
}

const ResumeItem = ({ title, subtitle, date, description, technologies }: ResumeItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-primary/10 hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div>
          <h3 className="font-display text-xl font-bold text-primary">{title}</h3>
          <p className="text-primary/80">{subtitle}</p>
          <p className="text-primary/60 text-sm">{date}</p>
        </div>
        <button
          className="text-primary/70 hover:text-primary p-1 rounded-full hover:bg-primary/10 transition-colors"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-4 space-y-3 animate-fade-in">
          <ul className="list-disc list-inside space-y-2 text-primary/80">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-primary/10 text-primary/90 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "skills">("experience")

  const experienceItems = [
    {
      title: "Business Analyst Intern",
      subtitle: "TLT - Tomorrow's Leaders Today",
      date: "Jan 2025 - April 2025",
      description: [
        "Developed 10+ KPIs and a data strategy to measure 50+ organizational programs.",
        "Designed logic models aligning programs with strategic goals, improving reporting efficiency by 10%.",
        "Analyzed data and created monthly impact reports, driving data-driven decision-making for stakeholders.",
      ],
      technologies: ["Data Analysis", "KPI Development", "Reporting"],
    },
    {
      title: "IT Project Management Intern",
      subtitle: "Triumph Financial",
      date: "June 2024 - August 2024",
      description: [
        "Developed automated asset reports using SQL in Freshservice CMDB, improving data accuracy from 70% to 95%.",
        "Managed data for 600+ assets, including EOL information and warranties, reducing unplanned asset purchases by 30%.",
        "Created and documented knowledge base articles on asset management and purchase order processes, improving operational efficiency by 15%.",
        "Collaborated with cross-functional teams to gather and analyze data, ensuring accurate and actionable asset records.",
      ],
      technologies: ["SQL", "Freshservice CMDB", "Asset Management", "Knowledge Base"],
    },
    {
      title: "Fleet Service Clerk",
      subtitle: "Envoy Air",
      date: "May 2022 - Present",
      description: [
        "Streamlined luggage processes using data-driven insights, improving efficiency by 15% and turnaround time by 20%.",
        "Coordinated with cross-functional teams, resulting in a 25% reduction in delays.",
      ],
      technologies: ["Process Optimization", "Team Coordination"],
    },
  ]

  const educationItems = [
    {
      title: "Bachelor of Science, Computer Science",
      subtitle: "The University of North Texas, Denton, TX",
      date: "August 2021 - May 2025",
      description: [
        "GPA: 3.75",
        "Relevant Coursework: Software Engineering, Data Structures & Algorithms, Operating Systems, Systems Programming, Internet Programming, Computer Networks, Probability and Statistics, Natural Language Processing, Fundamentals of Database Systems",
        "Honors & Awards: UNT Excellence Scholarship (Fall 2021-Present), Dean's/President's List (6 semesters)",
      ],
    },
  ]

  const skillsCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C/C++", "Java", "Go", "SQL", "HTML/CSS/JavaScript"],
    },
    {
      title: "Frameworks & Technologies",
      skills: [
        "TensorFlow",
        "Flask",
        "React (Next.js)",
        "Node.js",
        "Bash",
        "Supabase",
        "Cloud Computing",
        "Wireshark",
        "AWS(S3)",
        "REST APIs",
        "Networking",
      ],
    },
    {
      title: "Software & Tools",
      skills: [
        "Git",
        "MySQL",
        "Microsoft Office Suite",
        "Smartsheet",
        "Azure DevOps",
        "Jira",
        "Freshworks/Freshservice ITSM/CMDB",
        "Power BI",
        "Tableau",
        "Linux",
        "MacOS",
      ],
    },
    {
      title: "Project Management",
      skills: [
        "IT PM",
        "Agile (Scrum & Kanban)",
        "Asset Management",
        "Knowledge Base Software",
        "Financial Reporting & Analysis",
      ],
    },
    {
      title: "Certifications",
      skills: ["AWS Cloud Practitioner", "Koddi Commerce Media Foundations"],
    },
  ]

  return (
    <div className="py-12">
      <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8 text-primary text-center">RESUME</h2>

      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              activeTab === "experience"
                ? "bg-primary/20 text-primary"
                : "bg-white/5 text-primary/70 hover:bg-white/10 hover:text-primary"
            } transition-colors`}
          >
            EXPERIENCE
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "education"
                ? "bg-primary/20 text-primary"
                : "bg-white/5 text-primary/70 hover:bg-white/10 hover:text-primary"
            } transition-colors`}
          >
            EDUCATION
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              activeTab === "skills"
                ? "bg-primary/20 text-primary"
                : "bg-white/5 text-primary/70 hover:bg-white/10 hover:text-primary"
            } transition-colors`}
          >
            SKILLS
          </button>
        </div>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {activeTab === "experience" && (
          <div className="space-y-4 animate-fade-in">
            {experienceItems.map((item, index) => (
              <ResumeItem
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                date={item.date}
                description={item.description}
                technologies={item.technologies}
              />
            ))}
          </div>
        )}

        {activeTab === "education" && (
          <div className="space-y-4 animate-fade-in">
            {educationItems.map((item, index) => (
              <ResumeItem
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                date={item.date}
                description={item.description}
              />
            ))}
          </div>
        )}

        {activeTab === "skills" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
            {skillsCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-primary/10 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-display text-xl font-bold text-primary mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary/90 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}


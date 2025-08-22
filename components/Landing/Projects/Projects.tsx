"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Github, Globe, PlayCircle } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  links: {
    type: "github" | "demo" | "website"
    url: string
  }[]
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  useEffect(() => {
        if (typeof window !== 'undefined') {
            import('scrollreveal').then((ScrollReveal) => {
                ScrollReveal.default().reveal('.project-card', { 
                    delay: 300,
                    distance: '50px',
                    origin: 'bottom',
                    reset: false,
                    easing: 'ease-in-out',
                    interval: 200
                });
            });
        }
    }, []);

  const projects: Project[] = [
    {
      id: "jarvis",
      title: "Personal AI Assistant 'Jarvis'",
      description:
        "Built a phone-based assistant leveraging Twilio Webhooks and OpenAI's real-time WebSocket API for natural speech-to-speech interaction. Features a Node.js/Express backend with TwiML call routing and Postgres-backed memory, with an upcoming Next.js/React dashboard for conversation visualization.",
      technologies: ["NodeJS/Express", "Twilio/OpenAI", "PostgreSQL", "Render", "React/NextJS/Typescript"],
      image: "https://imageio.forbes.com/specials-images/imageserve/67bc72774820272afbc92a90//960x0.jpg?height=419&width=711&fit=bounds",
      links: [
        { type: "github", url: "https://github.com/Martinlacsamana/my-assistant" },
      ],
    },
    {
      id: "interview-prep",
      title: "Interview Prep AI-Agent",
      description:
        "Built with Flask + Uvicorn, this Telegram bot generates coding challenges and provides personalized feedback. Integrates OpenAI API, uses MongoDB for user data tracking, and features automated email alerts via SendGrid.",
      technologies: ["Flask", "OpenAI", "MongoDB", "Docker", "GCP"],
      image: "https://tii.imgix.net/production/articles/12694/e31f7eae-c356-478d-b311-98f1536297a8.jpg?auto=compress&fit=crop&auto=format",
      links: [
        { type: "github", url: "https://github.com/Martinlacsamana/interview-prep-assistant" },
      ],
    },
    {
      id: "patent-analyzer",
      title: "Patent Analyzer (P.AI)",
      description:
        "Built an AI-driven patent analysis platform for medical professionals and researchers. Streamlines patent discovery by enabling quick access to insights and interactive document analysis, reducing technical barriers in patent research.",
      technologies: ["React", "NextJS", "Redux", "TailwindCSS"],
      image: "https://personal-website-random-assets.s3.us-west-1.amazonaws.com/PAI.png",
      links: [
        { type: "demo", url: "https://www.youtube.com/watch?v=6zexBGYYj_w" },
        { type: "github", url: "https://github.com/Martinlacsamana/patent-analyzer" },
      ],
    },
    {
      id: "github-analyzer",
      title: "GitHub Commit Analyzer",
      description:
        "Processes and classifies over 1,500 commits across multiple repositories to provide insights into coding patterns and development workflows through systematic commit analysis (latter is under development).",
      technologies: ["Python", "Flask", "MongoDB", "GitHub API"],
      image: "https://www.dasca.org/Content/images/main/batch-data-pipeline.jpg",
      links: [
        { type: "github", url: "https://github.com/Martinlacsamana/learning-log" },
      ],
    },
    {
      id: "learnify",
      title: "Learnify",
      description:
        "A proof-of-concept testing page showcasing modern web development practices and UI/UX principles. Demonstrates responsive design and engaging user interfaces for an educational platform.",
      technologies: ["Next.js", "React", "Vercel"],
      image: "https://personal-website-random-assets.s3.us-west-1.amazonaws.com/Learnify.png",
      links: [
        { type: "website", url: "https://learnify-xoon.vercel.app/" },
        { type: "github", url: "https://github.com/Martinlacsamana/learnify/tree/main/learnify" },
        
      ],
    },
  ]

  return (
    <section className="w-full bg-black text-white py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div id="projects" className="text-center mb-12 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-2">PROJECTS</h2>
          <p className="text-lg">
            From <span className="text-yellow-500">passion projects</span> to quick builds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 md:w-full mx-auto gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="project-card bg-zinc-900 border-zinc-800 text-white overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-yellow-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden aspect-video">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.5s ease",
                  }}
                />
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="bg-zinc-800 border-zinc-700 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200 transition-colors text-xs px-2 py-0.5 rounded-md"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="py-2 flex-grow">
                <p className="text-sm text-zinc-400 line-clamp-6">{project.description}</p>
              </CardContent>

              <CardFooter className="pt-2 flex gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.type}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-zinc-400 hover:text-yellow-500 transition-colors"
                  >
                    {link.type === "website" && <Globe className="h-4 w-4 mr-1" />}
                    {link.type === "demo" && <PlayCircle className="h-4 w-4 mr-1" />}
                    {link.type === "github" && <Github className="h-4 w-4 mr-1" />}
                    {link.type.charAt(0).toUpperCase() + link.type.slice(1)}
                  </a>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
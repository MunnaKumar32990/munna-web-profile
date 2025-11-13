import { Card } from "./ui/card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Stripe",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Task Manager",
    description: "A beautiful and intuitive task management application",
    image: "/projects/taskmanager.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "#",
  },
  {
    title: "Weather App",
    description: "Real-time weather information with beautiful visualizations",
    image: "/projects/weather.jpg",
    tags: ["React", "OpenWeather API", "Chart.js"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-center text-slate-400"
        >
          Here are some of my recent projects that showcase my skills and
          experience.
        </motion.p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-slate-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
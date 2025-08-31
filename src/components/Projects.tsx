import { ExternalLink, Github } from 'lucide-react';
import ecommerceImg from '@/assets/project-ecommerce.jpg';
import bookstoreImg from '@/assets/project-bookstore.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Lighthearted Lollipop",
      description: "Modern e-commerce platform built with React and advanced UI/UX design principles.",
      image: ecommerceImg,
      technologies: ["React", "TypeScript", "Tailwind", "E-commerce"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Bookstore Client MERN",
      description: "Full-stack bookstore application using MongoDB, Express, React, and Node.js stack.",
      image: bookstoreImg,
      technologies: ["MERN", "MongoDB", "Express", "React", "Node.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Bookstore 2 Client",
      description: "Enhanced version of the bookstore with improved features and modern design.",
      image: bookstoreImg,
      technologies: ["React", "API Integration", "Modern UI", "Performance"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Laundry Website",
      description: "Professional service website for laundry business with booking functionality.",
      image: ecommerceImg,
      technologies: ["React", "Booking System", "Business Website"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Paisley Jewels",
      description: "Elegant jewelry showcase website with product galleries and e-commerce features.",
      image: ecommerceImg,
      technologies: ["React", "E-commerce", "Product Gallery", "Responsive"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mexivida USA",
      description: "Corporate website for health and wellness company with modern design.",
      image: bookstoreImg,
      technologies: ["React", "Corporate Website", "Health & Wellness"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Care at Home",
      description: "Healthcare service platform connecting patients with home care providers.",
      image: ecommerceImg,
      technologies: ["React", "Healthcare", "Service Platform", "Booking"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title fade-in">Featured Projects</h2>
            <p className="text-lg text-muted-foreground fade-in max-w-2xl mx-auto">
              A showcase of my recent work, featuring modern web applications and innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="portfolio-card group fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-primary hover:text-accent-red transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { ExternalLink, Github } from 'lucide-react';
import ecommerceImg from '@/assets/project-ecommerce.jpg';
import bookstoreImg from '@/assets/project-bookstore.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Pressure Wash Business Website",
      description: "Professional pressure washing service website featuring service showcases, booking system, and customer testimonials with modern responsive design.",
      image: ecommerceImg,
      technologies: ["React", "TypeScript", "Responsive Design", "Service Business"],
      liveUrl: "https://lighthearted-lollipop-5aeb49.netlify.app/",
      githubUrl: "#"
    },
    {
      title: "Bookstore Client MERN",
      description: "Full-stack bookstore application built with MERN stack featuring book catalog, user authentication, shopping cart, and inventory management.",
      image: bookstoreImg,
      technologies: ["MERN", "MongoDB", "Express", "React", "Node.js"],
      liveUrl: "https://bookstore-client-mern.netlify.app/",
      githubUrl: "#"
    },
    {
      title: "Bookstore 2 Client",
      description: "Enhanced bookstore platform with improved UI/UX, advanced search functionality, and optimized performance for better user experience.",
      image: bookstoreImg,
      technologies: ["React", "API Integration", "Modern UI", "Performance"],
      liveUrl: "https://bookstore2-client.netlify.app/",
      githubUrl: "#"
    },
    {
      title: "Laundry Service Website",
      description: "Professional laundry and dry cleaning service website with online booking, service pricing, pickup/delivery scheduling, and customer portal.",
      image: ecommerceImg,
      technologies: ["React", "Booking System", "Service Business", "Scheduling"],
      liveUrl: "https://laundrysite-web.netlify.app/",
      githubUrl: "#"
    },
    {
      title: "Paisley Jewels",
      description: "Elegant jewelry e-commerce store featuring product catalogs, secure payment integration, and sophisticated design for luxury brand experience.",
      image: ecommerceImg,
      technologies: ["React", "E-commerce", "Payment Integration", "Luxury Design"],
      liveUrl: "https://paisleyjewels.store/",
      githubUrl: "#"
    },
    {
      title: "Mexivida USA",
      description: "Corporate health and wellness company website showcasing products, services, and company information with professional branding and SEO optimization.",
      image: bookstoreImg,
      technologies: ["React", "Corporate Website", "Health & Wellness", "SEO"],
      liveUrl: "https://mexividausa.com/",
      githubUrl: "#"
    },
    {
      title: "Care at Home",
      description: "Healthcare service platform connecting patients with professional home care providers, featuring service booking, provider profiles, and care management.",
      image: ecommerceImg,
      technologies: ["React", "Healthcare Platform", "Service Booking", "Provider Management"],
      liveUrl: "https://ccareathome.com/",
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
                    target="_blank"
                    rel="noopener noreferrer"
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

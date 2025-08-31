import { Calendar, MapPin, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AI Developer",
      company: "Baraaq AI",
      location: "Remote",
      period: "Jan 2025 – June 2025",
      description: "Worked on AI-powered applications, NLP models, and integrating AI features into scalable solutions.",
      responsibilities: [
        "Developed NLP models for text processing and analysis",
        "Integrated AI features into web applications",
        "Collaborated on scalable AI solution architecture",
        "Optimized model performance and accuracy"
      ]
    },
    {
      title: "Website Developer & Manager",
      company: "Elifsoftwares", 
      location: "Remote",
      period: "June 2023 – September 2024",
      description: "Developed and managed client websites, handled deployments, optimized performance, and led digital campaigns.",
      responsibilities: [
        "Built responsive websites using modern frameworks",
        "Managed client deployments and hosting solutions",
        "Optimized website performance and SEO",
        "Led digital marketing campaigns and strategies"
      ]
    },
    {
      title: "IT Intern",
      company: "Bestway Cement Limited",
      location: "Lahore, Pakistan", 
      period: "Summer 2024",
      description: "Built an inventory management system using PHP & SQL, gained hands-on experience in enterprise IT workflows.",
      responsibilities: [
        "Developed inventory management system with PHP & SQL",
        "Collaborated with IT team on enterprise solutions",
        "Learned enterprise-level development practices",
        "Implemented database optimization techniques"
      ]
    },
    {
      title: "Game Developer Intern",
      company: "Mindstorm Studios",
      location: "Lahore, Pakistan",
      period: "2023",
      description: "Designed and developed a game prototype using Unity.",
      responsibilities: [
        "Created game prototypes using Unity engine",
        "Implemented game mechanics and physics",
        "Collaborated with design team on user experience",
        "Tested and debugged game functionality"
      ]
    },
    {
      title: "Microsoft Learn Student Ambassador",
      company: "Microsoft",
      location: "Global Program",
      period: "Ongoing",
      description: "Organized events, represented university, and collaborated with global student developer community.",
      responsibilities: [
        "Organized technical events and workshops",
        "Mentored fellow students in technology",
        "Represented university at Microsoft events",
        "Built connections in global developer community"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title fade-in">Work Experience</h2>
            <p className="text-lg text-muted-foreground fade-in max-w-2xl mx-auto">
              My professional journey through various roles in technology, from development to leadership.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className="portfolio-card slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-r from-primary to-accent-red rounded-lg">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-lg text-primary font-medium">{exp.company}</p>
                      </div>
                      
                      <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
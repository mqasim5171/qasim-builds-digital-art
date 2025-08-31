import { Code, Database, Cloud, Palette, Users, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Web Development",
      skills: ["React.js", "Django", "MERN Stack", "Tailwind CSS", "TypeScript", "Next.js"]
    },
    {
      icon: Database,
      title: "Software Development", 
      skills: ["PHP", "SQL", "Python", "Inventory Systems", "REST APIs", "Database Design"]
    },
    {
      icon: Cloud,
      title: "Cloud & Deployment",
      skills: ["Netlify", "Vercel", "AWS Basics", "Git/GitHub", "CI/CD", "Docker"]
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      skills: ["Responsive Design", "Figma", "User Experience", "Prototyping", "Design Systems"]
    },
    {
      icon: Users,
      title: "Team Collaboration",
      skills: ["Agile/Scrum", "Project Management", "Code Review", "Documentation", "Leadership"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: ["NLP", "MLOps Basics", "AI Integration", "TensorFlow", "AI-powered Solutions"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title fade-in">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground fade-in max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and methodologies for building exceptional digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.title}
                  className="portfolio-card group fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-primary to-accent-red rounded-lg mr-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="skill-tag"
                        style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
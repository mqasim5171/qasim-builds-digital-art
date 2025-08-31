const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title fade-in">About Me</h2>
          
          <div className="prose prose-lg mx-auto fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a passionate IT professional with extensive experience in web and software development. 
              My journey in technology has been driven by a deep interest in creating innovative solutions 
              that transform how organizations operate in the digital landscape.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With expertise spanning from full-stack web development to AI-powered applications, 
              I specialize in building scalable, user-centric solutions using modern technologies. 
              My experience includes working on enterprise systems, e-commerce platforms, and 
              cutting-edge AI integrations.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm particularly excited about the intersection of AI and web development, where I focus 
              on creating intelligent applications that enhance user experiences and drive business growth. 
              As a Microsoft Learn Student Ambassador, I'm also passionate about sharing knowledge and 
              building the developer community.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="portfolio-card text-center">
              <div className="text-2xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="portfolio-card text-center">
              <div className="text-2xl font-bold text-accent-red mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="portfolio-card text-center">
              <div className="text-2xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="portfolio-card text-center">
              <div className="text-2xl font-bold text-accent-red mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
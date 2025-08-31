import { Download, ArrowDown } from 'lucide-react';
import heroPortrait from '@/assets/hero-portrait.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-red/5"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Muhammad 
              <span className="block bg-gradient-to-r from-primary to-accent-red bg-clip-text text-transparent">
                Qasim
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
              Software & Web Developer | AI Enthusiast
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Building reliable, modern, and impactful digital solutions with cutting-edge technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="hero-button group">
                <Download className="w-5 h-5 mr-2 group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </button>
              
              <button className="accent-button">
                View Projects
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex justify-center slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent-red rounded-full blur-3xl opacity-20 scale-110"></div>
              <img
                src={heroPortrait}
                alt="Muhammad Qasim - Software Developer"
                className="relative w-80 h-80 rounded-full object-cover shadow-hero border-4 border-white"
              />
              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-accent-red rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-accent-red to-primary rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
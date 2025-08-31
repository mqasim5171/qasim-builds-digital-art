import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title fade-in">Get In Touch</h2>
            <p className="text-lg text-muted-foreground fade-in max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's connect and discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="fade-in">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, innovative projects, 
                and collaborations. Whether you have a question or just want to say hello, 
                feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:mqasim5171@gmail.com"
                  className="flex items-center group text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-sm">mqasim5171@gmail.com</div>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com/in/qasim5171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary group-hover:text-white transition-all">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">LinkedIn</div>
                    <div className="text-sm">linkedin.com/in/qasim5171</div>
                  </div>
                </a>
                
                <a
                  href="https://github.com/mqasim5171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary group-hover:text-white transition-all">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">GitHub</div>
                    <div className="text-sm">github.com/mqasim5171</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="slide-in-right">
              <div className="portfolio-card">
                <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Project discussion"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full hero-button justify-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-sm opacity-80">
            © {currentYear} Muhammad Qasim. All rights reserved.
          </p>
          <p className="text-xs opacity-60 mt-2">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
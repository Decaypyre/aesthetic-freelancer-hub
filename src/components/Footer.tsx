import { Instagram, Youtube, Globe, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-portfolioText text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/a817a5fa-5c4a-4fdf-8439-b91c24be6479.png" 
                alt="Portfolio Logo" 
                className="h-10 mr-2"
              />
              <span className="text-2xl font-serif font-bold">
                <span className="text-portfolioPrimary">Port</span>
                <span className="text-white">folio</span>
              </span>
            </a>
            <p className="mt-4 text-white/70 max-w-xs">
              Creating engaging digital experiences through creative services and solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-portfolioPrimary/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-portfolioPrimary/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-portfolioPrimary/20 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-portfolioPrimary/20 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/70 hover:text-portfolioPrimary transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-white/70 hover:text-portfolioPrimary transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-white/70 hover:text-portfolioPrimary transition-colors">About Me</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-portfolioPrimary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/70 hover:text-portfolioPrimary transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-white/70 hover:text-portfolioPrimary transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="text-white/70 hover:text-portfolioPrimary transition-colors">Video Editing</a></li>
              <li><a href="#services" className="text-white/70 hover:text-portfolioPrimary transition-colors">Social Media</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-white/70">
              <li><a href="#" className="hover:text-portfolioPrimary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-portfolioPrimary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

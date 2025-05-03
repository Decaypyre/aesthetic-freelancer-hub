
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute top-0 right-0 -z-10 w-full h-full">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-portfolioSecondary rounded-bl-full opacity-50" />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-portfolioAccent/20 animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-portfolioPrimary/20 animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:space-y-8">
          <p className="text-portfolioPrimary font-medium text-lg md:text-xl">Hello, I'm a</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Creative <span className="gradient-text">Freelancer</span>
          </h1>
          <p className="text-lg md:text-xl text-portfolioMuted max-w-md">
            I create stunning digital experiences through web development, UI/UX design, video editing, and social media content.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="bg-portfolioPrimary text-white px-6 py-3 rounded-full font-medium hover:bg-portfolioPrimary/90 transition-all flex items-center gap-2 group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="border border-portfolioPrimary text-portfolioPrimary px-6 py-3 rounded-full font-medium hover:bg-portfolioPrimary/5 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="hidden md:flex justify-center relative">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-portfolioPrimary/30 to-portfolioAccent/30 animate-float" />
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Freelancer working"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-portfolioText font-medium">5+ Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

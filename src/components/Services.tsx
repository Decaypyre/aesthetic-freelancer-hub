
import { Code, Layout, Film, Camera, Smartphone, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Web Development",
    description: "Custom responsive websites and web applications built with modern technologies.",
    icon: Code,
    iconClass: "bg-blue-50 text-blue-500",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that enhance user experience and engagement.",
    icon: Layout,
    iconClass: "bg-purple-50 text-purple-500",
  },
  {
    title: "Video Editing",
    description: "Professional video editing that tells your story with impact and clarity.",
    icon: Film,
    iconClass: "bg-red-50 text-red-500",
  },
  {
    title: "Content Creation",
    description: "Engaging content that resonates with your audience and builds your brand.",
    icon: Camera,
    iconClass: "bg-yellow-50 text-yellow-500",
  },
  {
    title: "Social Media Handling",
    description: "Strategic social media management to grow your brand and engage followers.",
    icon: Smartphone,
    iconClass: "bg-green-50 text-green-500",
  },
  {
    title: "Reel Making",
    description: "Eye-catching reels that promote your business and drive engagement.",
    icon: Users,
    iconClass: "bg-pink-50 text-pink-500",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-portfolioPrimary font-medium mb-2">My Services</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-portfolioMuted">
            I provide a range of creative services to help businesses and individuals establish
            their digital presence and engage with their audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="card hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", service.iconClass)}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-portfolioMuted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

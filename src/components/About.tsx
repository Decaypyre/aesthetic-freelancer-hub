
import { Check } from "lucide-react";

const skillGroups = [
  {
    title: "Development",
    skills: ["HTML & CSS", "JavaScript", "React.js", "Responsive Design", "WordPress"],
  },
  {
    title: "Design",
    skills: ["UI/UX Design", "Adobe XD", "Figma", "Wireframing", "Prototyping"],
  },
  {
    title: "Media",
    skills: ["Video Editing", "Adobe Premiere Pro", "After Effects", "Content Creation", "Social Media Strategy"],
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -z-10 top-0 left-0 w-full h-full bg-portfolioPrimary/20 rounded-3xl transform -rotate-6"></div>
              <div className="absolute -z-10 top-0 left-0 w-full h-full bg-portfolioAccent/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="About Me"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-portfolioPrimary font-medium">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Creative Freelancer with <span className="gradient-text">5+ Years</span> of Experience
            </h2>
            <p className="text-portfolioMuted">
              I'm a passionate freelancer bringing your digital ideas to life. With expertise 
              spanning web development, UI/UX design, video editing, and social media content 
              creation, I offer comprehensive creative solutions for businesses and individuals.
            </p>
            <p className="text-portfolioMuted">
              My approach combines technical skill with creative vision, ensuring 
              each project is not only visually striking but also functionally sound and 
              strategically effective.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-bold mb-4">My Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h4 className="font-bold mb-2">{group.title}</h4>
                    <ul className="space-y-2">
                      {group.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-2">
                          <Check className="text-portfolioPrimary w-5 h-5" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import { useState } from "react";
import { cn } from "@/lib/utils";

type Category = "all" | "web" | "ui" | "video" | "social";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Dev" },
  { id: "ui", label: "UI/UX" },
  { id: "video", label: "Video" },
  { id: "social", label: "Social Media" },
];

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    category: "web",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "#",
  },
  {
    id: 2,
    title: "Mobile App Interface",
    category: "ui",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
    link: "#",
  },
  {
    id: 3,
    title: "Brand Promo Video",
    category: "video",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    link: "#",
  },
  {
    id: 4,
    title: "Social Media Campaign",
    category: "social",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    link: "#",
  },
  {
    id: 5,
    title: "Portfolio Website",
    category: "web",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    link: "#",
  },
  {
    id: 6,
    title: "Instagram Content Series",
    category: "social",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    link: "#",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="section-padding bg-portfolioSecondary/30">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-portfolioPrimary font-medium mb-2">My Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-portfolioMuted">
            Explore my recent work across different creative disciplines, from web
            development to video content creation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "py-2 px-4 md:px-6 rounded-full transition-all",
                activeCategory === category.id
                  ? "bg-portfolioPrimary text-white"
                  : "bg-white text-portfolioText hover:bg-portfolioPrimary/10"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <a
              href={project.link}
              key={project.id}
              className="group relative rounded-xl overflow-hidden aspect-video bg-white shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                <p className="text-white/80">{categories.find(c => c.id === project.category)?.label}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

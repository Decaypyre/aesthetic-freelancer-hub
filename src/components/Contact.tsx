
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission to your backend
    console.log("Form submitted:", formData);
    toast.success("Thank you for your message! I'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-portfolioPrimary font-medium mb-2">Contact Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-portfolioMuted">
            Have a project in mind or want to explore how we can work together?
            Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            
            <div className="flex items-start gap-3">
              <div className="bg-portfolioSecondary p-3 rounded-lg">
                <Mail className="text-portfolioPrimary w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:hello@yourname.com" className="text-portfolioMuted hover:text-portfolioPrimary">
                  hello@yourname.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-portfolioSecondary p-3 rounded-lg">
                <Phone className="text-portfolioPrimary w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <a href="tel:+1234567890" className="text-portfolioMuted hover:text-portfolioPrimary">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-portfolioSecondary p-3 rounded-lg">
                <MapPin className="text-portfolioPrimary w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-portfolioMuted">
                  Available for remote work worldwide
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-portfolioPrimary/20 focus:border-portfolioPrimary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-portfolioPrimary/20 focus:border-portfolioPrimary"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-portfolioPrimary/20 focus:border-portfolioPrimary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-portfolioPrimary/20 focus:border-portfolioPrimary"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-portfolioPrimary text-white px-6 py-3 rounded-full font-medium hover:bg-portfolioPrimary/90 transition-all flex items-center justify-center gap-2 w-full md:w-auto"
              >
                Send Message
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

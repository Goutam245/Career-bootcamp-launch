import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-serif">Career Bootcamp</h3>
            <p className="text-sm opacity-90">
              Switzerland's leading boutique for executive and career coaching
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/programs/accelerate" className="hover:text-accent transition-colors">
                  Accelerate
                </Link>
              </li>
              <li>
                <Link to="/programs/elevate" className="hover:text-accent transition-colors">
                  Elevate
                </Link>
              </li>
              <li>
                <Link to="/programs/executive" className="hover:text-accent transition-colors">
                  Executive
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-accent transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-accent transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@careerbootcamp.ch" className="hover:text-accent transition-colors">
                  info@careerbootcamp.ch
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+41123456789" className="hover:text-accent transition-colors">
                  +41 12 345 67 89
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4" />
                <a
                  href="https://linkedin.com/company/careerbootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Follow on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-sm text-center opacity-80">
          <p>&copy; {new Date().getFullYear()} Career Bootcamp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

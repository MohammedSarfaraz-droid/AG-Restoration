import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  { label: "Roofing", path: "/roofing" },
  { label: "Commercial Roofing", path: "/commercial-roofing" },
  { label: "Remodeling", path: "/remodeling" },
  { label: "Gallery", path: "/gallery" },
];

const towns = [
  "Elizabeth", "Linden", "Rahway", "Westfield", "Cranford",
  "Union", "Clark", "Scotch Plains", "Plainfield", "Roselle",
];

const Footer = () => {
  return (
    <footer className="bg-navy text-silver/80">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
                <span className="font-heading text-navy font-bold text-xl">AG</span>
              </div>
              <span className="font-heading text-white text-lg tracking-wider uppercase">AG Restorations</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Precision roofing & restoration services built to endure. Proudly serving Union County, NJ.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:9733424134" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" /> 973-342-4134
              </a>
              <a href="mailto:antoniogutama@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" /> antoniogutama@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" /> 63 Elmwood Terrace, Linden, NJ
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-white text-lg uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading text-white text-lg uppercase tracking-wider mb-4">Service Areas</h4>
            <ul className="space-y-1">
              {towns.map((town) => (
                <li key={town} className="text-sm">{town}</li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-white text-lg uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/service-areas" className="text-sm hover:text-primary transition-colors">Service Areas</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-steel/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-silver/50">© {new Date().getFullYear()} AG Restorations. All rights reserved.</p>
          <p className="text-xs text-silver/50">Certified · Licensed · Bonded · Insured</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

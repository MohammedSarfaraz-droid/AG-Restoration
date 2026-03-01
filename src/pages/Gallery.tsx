import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import residentialImage from "@/assets/residential-roofing.jpg";
import commercialImage from "@/assets/commercial-roofing.jpg";
import remodelingImage from "@/assets/remodeling.jpg";
import roofingDetailImage from "@/assets/roofing-detail.jpg";
import powerWashingImage from "@/assets/power-washing.jpg";
import flatRoofImage from "@/assets/flat-roof.jpg";
import bathroomImage from "@/assets/bathroom-remodel.jpg";
import crewImage from "@/assets/crew-working.jpg";

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>{children}</motion.div>;
}

const categories = ["All", "Roofing", "Commercial", "Remodeling", "Metal", "Power Washing"];

const galleryItems = [
  { src: heroImage, category: "Roofing", title: "Metal Roof Installation" },
  { src: commercialImage, category: "Commercial", title: "Commercial Flat Roof" },
  { src: remodelingImage, category: "Remodeling", title: "Kitchen Remodel" },
  { src: roofingDetailImage, category: "Metal", title: "Standing Seam Detail" },
  { src: powerWashingImage, category: "Power Washing", title: "Driveway Cleaning" },
  { src: flatRoofImage, category: "Commercial", title: "TPO Membrane Installation" },
  { src: bathroomImage, category: "Remodeling", title: "Bathroom Renovation" },
  { src: residentialImage, category: "Roofing", title: "Residential Metal Roof" },
  { src: crewImage, category: "Roofing", title: "Professional Installation" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? galleryItems : galleryItems.filter(i => i.category === active);

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${roofingDetailImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/60" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-heading text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">Our <span className="text-primary">Gallery</span></h1>
            <div className="w-16 h-1 bg-primary mb-6" />
            <p className="text-silver/80 text-lg max-w-xl">See our work — real projects, real transformations.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-concrete">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2 font-heading uppercase tracking-wider text-sm rounded-sm transition-all ${
                  active === cat
                    ? "bg-primary text-navy"
                    : "bg-white border border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <Section>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.title + i}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-sm break-inside-avoid"
                >
                  <img src={item.src} alt={item.title} className="w-full group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-colors flex items-end">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                      <span className="text-primary text-xs font-heading uppercase tracking-wider">{item.category}</span>
                      <h4 className="text-white font-heading uppercase tracking-wider">{item.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-navy via-steel to-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl text-white uppercase tracking-wider mb-6">Like What You <span className="text-primary">See?</span></h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"><Button size="lg" className="bg-primary text-navy font-heading uppercase tracking-wider text-lg px-8 py-6">Get Free Estimate</Button></Link>
            <a href="tel:9733424134"><Button size="lg" variant="outline" className="border-silver/30 text-white font-heading uppercase text-lg px-8 py-6 hover:bg-white/10"><Phone className="w-5 h-5 mr-2" />973-342-4134</Button></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

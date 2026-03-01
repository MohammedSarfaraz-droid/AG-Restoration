import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/service-areas.jpg";

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>{children}</motion.div>;
}

const towns = [
  { name: "Elizabeth", desc: "Full roofing and restoration services for Elizabeth residents and businesses." },
  { name: "Plainfield", desc: "Expert roof repair and remodeling throughout Plainfield." },
  { name: "Rahway", desc: "Trusted roofing contractor for Rahway homeowners." },
  { name: "Westfield", desc: "Premium roofing solutions in the heart of Westfield." },
  { name: "Fanwood", desc: "Reliable restoration services for Fanwood properties." },
  { name: "Garwood", desc: "Local roofing expertise serving Garwood." },
  { name: "Kenilworth", desc: "Quality craftsmanship for Kenilworth homes." },
  { name: "Mountainside", desc: "Precision roofing for Mountainside residences." },
  { name: "New Providence", desc: "Full-service roofing in New Providence." },
  { name: "Roselle", desc: "Comprehensive roof solutions for Roselle." },
  { name: "Roselle Park", desc: "Expert installations in Roselle Park." },
  { name: "Berkeley Heights", desc: "Premium services for Berkeley Heights." },
  { name: "Clark", desc: "Trusted roofing partner for Clark residents." },
  { name: "Cranford", desc: "Quality roofing solutions throughout Cranford." },
  { name: "Hillside", desc: "Professional restoration for Hillside properties." },
  { name: "Linden", desc: "Our hometown — proudly serving Linden with excellence." },
  { name: "Scotch Plains", desc: "Expert roofing for Scotch Plains homeowners." },
  { name: "Springfield", desc: "Reliable services for Springfield communities." },
  { name: "Union", desc: "Full roofing and restoration in Union Township." },
  { name: "Winfield", desc: "Quality craftsmanship for Winfield residents." },
];

const ServiceAreas = () => {
  return (
    <div>
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/60" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-heading text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">Service <span className="text-primary">Areas</span></h1>
            <div className="w-16 h-1 bg-primary mb-6" />
            <p className="text-silver/80 text-lg max-w-xl">Proudly serving Union County and surrounding NJ communities.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-concrete">
        <div className="container mx-auto px-4 lg:px-8">
          <Section>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {towns.map(town => (
                <motion.div key={town.name} variants={fadeInUp} className="bg-white border border-border p-6 rounded-sm hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <h4 className="font-heading text-navy uppercase tracking-wider text-sm">{town.name}</h4>
                  </div>
                  <p className="text-muted-foreground text-xs">{town.desc}</p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-navy via-steel to-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl text-white uppercase tracking-wider mb-6">Serving <span className="text-primary">Your Area?</span></h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"><Button size="lg" className="bg-primary text-navy font-heading uppercase tracking-wider text-lg px-8 py-6">Get Free Estimate</Button></Link>
            <a href="tel:9733424134"><Button size="lg" variant="outline" className="border-silver/30 text-white font-heading uppercase text-lg px-8 py-6 hover:bg-white/10"><Phone className="w-5 h-5 mr-2" />973-342-4134</Button></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceAreas;

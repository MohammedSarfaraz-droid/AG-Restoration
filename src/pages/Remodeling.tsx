import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle } from "lucide-react";
import heroImage from "@/assets/remodeling.jpg";
import bathroomImage from "@/assets/bathroom-remodel.jpg";

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>{children}</motion.div>;
}

const Remodeling = () => {
  return (
    <div>
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/60" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-heading text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">General <span className="text-primary">Remodeling</span></h1>
            <div className="w-16 h-1 bg-primary mb-6" />
            <p className="text-silver/80 text-lg max-w-xl">Transform your space with expert interior and exterior remodeling.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-concrete">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Section>
            <motion.h2 variants={fadeInUp} className="font-heading text-4xl text-navy uppercase tracking-wider mb-6">Complete <span className="text-primary">Transformations</span></motion.h2>
            <motion.div variants={fadeInUp} className="w-16 h-1 bg-primary mb-6" />
            <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-6">
              From kitchen renovations to full home remodels, AG Restorations brings architectural precision to every interior and exterior project. We combine modern design with expert craftsmanship.
            </motion.p>
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3">
              {["Kitchen Remodeling", "Bathroom Renovation", "Interior Painting", "Exterior Painting", "Flooring", "Custom Cabinetry"].map(s => (
                <div key={s} className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />{s}</div>
              ))}
            </motion.div>
          </Section>
          <Section>
            <motion.img variants={fadeInUp} src={bathroomImage} alt="Bathroom remodel" className="rounded-sm shadow-xl w-full" />
          </Section>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-navy via-steel to-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl text-white uppercase tracking-wider mb-6">Start Your <span className="text-primary">Transformation</span></h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"><Button size="lg" className="bg-primary text-navy font-heading uppercase tracking-wider text-lg px-8 py-6">Get Free Estimate</Button></Link>
            <a href="tel:9733424134"><Button size="lg" variant="outline" className="border-silver/30 text-white font-heading uppercase text-lg px-8 py-6 hover:bg-white/10"><Phone className="w-5 h-5 mr-2" />973-342-4134</Button></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Remodeling;

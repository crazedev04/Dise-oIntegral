"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Menu, X, ArrowRight, Instagram, MessageCircle, 
  House, Palette, Ruler, Eye, Building2, Layers
} from "lucide-react";
import { siteConfig, services, projects, processSteps } from "@/lib/config";

// Types
interface NavLink {
  label: string;
  href: string;
}

// WhatsApp link generator
const getWhatsAppLink = (message: string = "") => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;
};

// Components
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const navLinks: NavLink[] = [
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ];

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 40));
  }, [scrollY]);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/95 backdrop-blur-md border-b border-border" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2">
            <img 
              src="/assets/Logo.png" 
              alt="DB Diseño Integral" 
              className="h-10 w-auto"
            />
            <span className="font-serif text-lg lg:text-xl hidden sm:block">
              {siteConfig.brandName}
            </span>
          </a>
          
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-db-green transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="hidden lg:block">
            <a 
              href={getWhatsAppLink("Hola! Quiero consultar por un proyecto")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
          
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menú"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isOpen && (
          <motion.div 
            className="lg:hidden absolute top-16 left-0 right-0 bg-bg border-b border-border p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="block py-3 text-text-muted hover:text-text transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href={getWhatsAppLink("Hola! Quiero consultar por un proyecto")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 text-sm text-center"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 80]);

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-bg-alt/30 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Izquierda - Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-medium tracking-[0.2em] text-sage uppercase mb-4">
              Estudio de diseño de espacios · Interior / Exterior
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
              Diseño integral para espacios funcionales y habitables
            </h1>
            
            <p className="text-lg md:text-xl text-text-muted mb-8 max-w-xl">
              Transformamos ideas en espacios pensados para vivir, trabajar y {`${"disfrutar"}`}, 
              combinando estética, funcionalidad y una mirada integral del proyecto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={getWhatsAppLink("Hola! Me interesa consultar por un proyecto de diseño integral")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={18} />
                Consultar por WhatsApp
              </a>
              <a href="#proyectos" className="btn-outline">
                Ver proyectos
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Derecha - Imagen visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ y }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[3/3] bg-gradient-to-br from-stone-200 via-stone-100 to-stone-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="db-monogram text-8xl mb-4"> <img 
              src="https://plus.unsplash.com/premium_photo-1681487772142-e97e8c90a6c6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Proyecto de diseño integral" 
              className="w-full h-full object-cover"
            /></div>
                 
                </div>
              </div>
            </div>
           
            {/* Decoración */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-db-green/20 rounded-br-lg" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-db-green/20 rounded-tl-lg" />
          </motion.div>

          {/* Mobile image - visible solo en móvil */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:hidden aspect-[4/3] bg-gradient-to-br from-stone-200 via-stone-100 to-stone-200 rounded-lg overflow-hidden mt-8"
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="db-monogram text-6xl mb-2">{siteConfig.brandNameShort}</div>
                <p className="text-text-muted text-xs uppercase tracking-widest">
                  Visualización de proyecto
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowRight className="rotate-90 text-text-muted" size={20} />
      </motion.div>
    </section>
  );
}

function Services() {
  const icons = [<House />, <Palette />, <Ruler />, <Eye />, <Building2 />, <Layers />];

  return (
    <section id="servicios" className="section-padding bg-white-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-sage text-xs font-medium uppercase tracking-widest">
            Servicios
          </span>
          <h2 className="text-3xl md:text-4xl mt-3">
            Soluciones pensadas para cada etapa
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-hover bg-white-warm p-6 lg:p-8 rounded-lg border border-border relative group"
            >
              {/* Número */}
              <span className="absolute top-4 right-4 text-4xl font-serif text-sage/30 group-hover:text-sage/50 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              <div className="text-db-green mb-4">
                {icons[index]}
              </div>
              <h3 className="text-lg mb-2">{service.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="section-padding bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-sage text-xs font-medium uppercase tracking-widest">
            Proceso
          </span>
          <h2 className="text-3xl md:text-4xl mt-3">
            Un camino claro hacia tu espacio ideal
          </h2>
        </motion.div>

        {/* Desktop - Timeline horizontal */}
        <div className="hidden lg:block relative">
          {/* Línea conectora */}
          <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid grid-cols-5 gap-4 relative">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                {/* Número grande */}
                <div className="text-5xl font-serif text-sage mb-4">
                  {item.step}
                </div>
                <h3 className="text-base font-medium mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile - Timeline vertical */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-db-green/10 flex items-center justify-center">
                  <span className="text-xl font-serif text-db-green">{item.step}</span>
                </div>
                {/* Línea vertical */}
                {index < processSteps.length - 1 && (
                  <div className="w-px h-12 bg-border mx-auto mt-2" />
                )}
              </div>
              <div>
                <h3 className="text-base font-medium mb-1">{item.title}</h3>
                <p className="text-text-muted text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const portfolioItems = projects;

  return (
    <section id="proyectos" className="section-padding bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-sage text-xs font-medium uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl mt-3">
            Proyectos y visualizaciones
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            Una selección de proyectos, renders y propuestas visuales pensadas para anticipar cómo puede transformarse cada espacio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioItems.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-hover group rounded-lg overflow-hidden bg-white"
            >
              {/* Imagen */}
              <div className="h-56 project-card-bg relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <a 
                    href={getWhatsAppLink(`Me interesa el proyecto: ${project.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm font-medium px-4 py-2 border border-white/50 rounded hover:bg-white/20"
                  >
                    Consultar por este estilo
                  </a>
                </div>
              </div>
              
              {/* Info */}
              <div className="p-6">
                <span className="text-xs text-sage uppercase tracking-wider font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl mt-1 mb-2">{project.title}</h3>
                <p className="text-text-muted text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA ver más */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a 
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Ver más en Instagram
            <ArrowRight size={16} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const diferenciales = [
    {
      title: "Funcionalidad",
      description: "Cada espacio se diseña para ser vivido, no solo admirado.",
    },
    {
      title: "Estética",
      description: "Una búsqueda constante de lo bello y lo atemporal.",
    },
    {
      title: "Planificación",
      description: "Proyecto integral desde el primer croquis hasta el detalle final.",
    },
  ];

  return (
    <section className="section-padding bg-white-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Izquierda - Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sage text-xs font-medium uppercase tracking-widest">
              Sobre DB
            </span>
            <h2 className="text-3xl md:text-4xl mt-3 mb-6">
              Diseño con mirada integral
            </h2>
            <p className="text-text-muted mb-6">
              DB Diseño Integral es un estudio dedicado a transformar espacios 
              a través de una mirada integral: funcional, estética y planificada.
            </p>
            <p className="text-text-muted mb-8">
              Cada proyecto es único. Nos interesa entender cómo vivís, cómo trabajás, 
              qué necesitás hoy y qué vas a necesitar mañana. De ahí nace un diseño 
              que acompaña, que sirve, que permanece.
            </p>

            {/* Diferenciales */}
            <div className="space-y-4">
              {diferenciales.map((diff, i) => (
                <div key={diff.title} className="flex gap-3">
                  <span className="text-db-green text-lg">●</span>
                  <div>
                    <span className="font-medium">{diff.title}</span>
                    <span className="text-text-muted"> — {diff.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Derecha - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-stone-200 via-stone-100 to-stone-200 rounded-lg">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="db-monogram text-7xl mb-4 text-db-green">
                    {siteConfig.brandNameShort}
                  </div>
                  <p className="text-text-muted text-sm">
                    Daiana Barragán
                  </p>
                  <p className="text-text-muted text-xs mt-1">
                    Fundadora y directora
                  </p>
                </div>
              </div>
            </div>
            {/* Borde decorativo */}
            <div className="absolute -inset-4 border border-db-green/10 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contacto" className="section-padding bg-db-green text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-white-warm">
            ¿Tenés un espacio que querés transformar?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Contanos tu idea y demos el primer paso para convertirla en una propuesta clara, 
            funcional y visualmente pensada para vos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={getWhatsAppLink("Hola! Quiero consultar por un proyecto de diseño integral")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-db-green hover:bg-white-warm"
            >
              <MessageCircle size={18} />
              Consultar por WhatsApp
            </a>
            <a 
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white/30 text-white hover:border-white hover:text-white"
            >
              <Instagram size={18} />
              Ver Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bg border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
              <img 
                src="/assets/Logo.png" 
                alt="DB Diseño Integral" 
                className="h-8 w-auto"
              />
              <span className="font-serif text-lg">{siteConfig.brandName}</span>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-db-green transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={getWhatsAppLink("Hola! Quiero consultar por un proyecto")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-db-green transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <p className="text-text-muted text-sm">
            © {currentYear} {siteConfig.brandName}. Todos los derechos reservados.
          </p>
          
          <p className="text-text-muted text-xs">
            Sitio desarrollado por{" "}
            <a 
              href={siteConfig.developerUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors"
            >
              {siteConfig.developerName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
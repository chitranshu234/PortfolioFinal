import React from 'react';
import { cn } from "@/lib/utils";
import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';

// Icon component for contact details
const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
    const icons = {
        website: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#c8c2b4]">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" x2="22" y1="12" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        ),
        phone: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#c8c2b4]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
        ),
        address: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#c8c2b4]">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
        ),
    };
    return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};


// Prop types for the HeroSection component
interface HeroSectionProps extends Omit<HTMLMotionProps<"section">, 'title'> {
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction?: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
  personName?: string;
  personRole?: string;
}

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo, personName = "Chitranshu Pandey", personRole = "Full Stack & GenAI Engineer", ...props }, ref) => {
    
    // Animation variants for the container to orchestrate children animations
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.14,
          delayChildren: 0.1,
        },
      },
    };

    // Animation variants for individual text/UI elements
    const itemVariants: Variants = {
      hidden: { y: 25, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    };

    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Diagonal cut on desktop; clean unclipped rectangular on mobile
    const imageVariants: Variants = {
      hidden: isMobile
        ? { opacity: 0.3 }
        : {
            clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
            opacity: 0.3,
          },
      visible: isMobile
        ? {
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }
        : {
            clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)',
            opacity: 1,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
          },
    };
    
    return (
      <motion.section
        ref={ref as React.Ref<HTMLElement>}
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-[#1a1a17] text-[#c8c2b4] md:flex-row",
          className
        )}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        {...props}
      >
        {/* Left Side: Content */}
        <motion.div 
          className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16"
          variants={containerVariants}
        >
            {/* Top Section: Main Content */}
            <div>
                {logo && (
                    <motion.header className="mb-12" variants={itemVariants}>
                        <div className="flex items-center">
                            <img src={logo.url} alt={logo.alt} className="mr-3 h-8 rounded-full" />
                            <div>
                                {logo.text && <p className="text-lg font-bold text-[#c8c2b4]">{logo.text}</p>}
                                {slogan && <p className="text-xs tracking-[0.3em] uppercase text-[#a09888]/60">{slogan}</p>}
                            </div>
                        </div>
                    </motion.header>
                )}

                <div className="space-y-6">
                    <motion.h1 className="font-display text-4xl font-bold leading-tight text-[#c8c2b4] md:text-5xl lg:text-6xl tracking-wider" variants={itemVariants}>
                        {title}
                    </motion.h1>
                    <motion.div 
                      className="h-[2px] w-20 bg-[#c8c2b4]" 
                      variants={{
                        hidden: { scaleX: 0, opacity: 0 },
                        visible: { scaleX: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
                      }}
                      style={{ originX: 0 }}
                    />
                    <motion.p className="max-w-xl text-base text-[#a09888]/80 leading-relaxed font-light" variants={itemVariants}>
                        {subtitle}
                    </motion.p>
                    {callToAction && (
                        <motion.a
                            href={callToAction.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-sm font-medium tracking-[0.3em] uppercase text-[#c8c2b4] transition-all hover:text-white border border-[rgba(200,194,180,0.2)] px-6 py-3 rounded-lg hover:border-[rgba(200,194,180,0.5)]"
                            variants={itemVariants}
                        >
                            {callToAction.text}
                        </motion.a>
                    )}
                </div>
            </div>

            {/* Bottom Section: Footer Info (Desktop only; on mobile, displayed in the Profile Card) */}
            <motion.footer className="mt-12 w-full hidden md:block" variants={itemVariants}>
                <div className="grid grid-cols-1 gap-6 text-xs text-[#a09888]/70 sm:grid-cols-3">
                    <a 
                      href={contactInfo.website.startsWith('http') ? contactInfo.website : `https://${contactInfo.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center hover:text-[#c8c2b4] transition-colors"
                    >
                        <InfoIcon type="website" />
                        <span className="truncate">{contactInfo.website}</span>
                    </a>
                    <a 
                      href={`tel:${contactInfo.phone}`} 
                      className="flex items-center hover:text-[#c8c2b4] transition-colors"
                    >
                        <InfoIcon type="phone" />
                        <span>{contactInfo.phone}</span>
                    </a>
                    <div className="flex items-center">
                        <InfoIcon type="address" />
                        <span>{contactInfo.address}</span>
                    </div>
                </div>
            </motion.footer>
        </motion.div>

        {/* Right Side: On Mobile -> Profile Card with Info / On Desktop -> Full Height Diagonal Image */}
        <div className="w-full px-4 pb-12 md:p-0 md:w-1/2 md:self-stretch lg:w-2/5 flex flex-col justify-center">
          <motion.div 
            className="w-full max-w-sm sm:max-w-md md:max-w-none md:h-full rounded-3xl md:rounded-none overflow-hidden border border-[rgba(200,194,180,0.15)] md:border-0 bg-[#221f1a] md:bg-transparent shadow-2xl shadow-black/60 md:shadow-none flex flex-col"
            variants={isMobile ? {
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
            } : undefined}
          >
            {/* Portrait Image */}
            <motion.div 
              className="w-full aspect-[672/902] bg-cover bg-center md:aspect-auto md:w-full md:h-full hero-diagonal-image md:bg-[center_18%]"
              style={{ 
                backgroundImage: `url(${backgroundImage})`,
              }}
              variants={!isMobile ? imageVariants : undefined}
            />

            {/* Mobile Card Info Panel */}
            <div className="md:hidden bg-[#1a1a17] p-5 border-t border-[rgba(200,194,180,0.12)]">
              <div className="flex items-center justify-between mb-3.5">
                <div>
                  <h3 className="font-display text-2xl tracking-wider text-[#c8c2b4] leading-none">{personName}</h3>
                  <p className="text-[11px] tracking-[0.22em] uppercase text-[#a09888] font-medium mt-1">{personRole}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(200,194,180,0.06)] border border-[rgba(200,194,180,0.15)] text-[11px] text-[#c8c2b4]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </span>
              </div>

              <div className="space-y-2.5 pt-3 border-t border-[rgba(200,194,180,0.08)] text-xs text-[#a09888]">
                <a 
                  href={contactInfo.website.startsWith('http') ? contactInfo.website : `https://${contactInfo.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-[#c8c2b4] transition-colors"
                >
                  <InfoIcon type="website" />
                  <span className="truncate">{contactInfo.website}</span>
                </a>
                <a 
                  href={`tel:${contactInfo.phone}`} 
                  className="flex items-center hover:text-[#c8c2b4] transition-colors"
                >
                  <InfoIcon type="phone" />
                  <span>{contactInfo.phone}</span>
                </a>
                <div className="flex items-center">
                  <InfoIcon type="address" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };

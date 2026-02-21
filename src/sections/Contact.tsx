import { motion } from 'framer-motion';

const contactLinks = [
    {
        label: 'EMAIL',
        href: 'mailto:chitranshupandey234@gmail.com',
    },
    {
        label: 'LINKEDIN',
        href: 'https://linkedin.com/in/chitranshupandey',
    },
    {
        label: 'GITHUB',
        href: 'https://github.com/chitranshu234',
    },
    {
        label: 'PHONE',
        href: 'tel:+918937987102',
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen section-padding flex flex-col items-center justify-center relative"
            style={{ backgroundColor: '#c8c2b4' }}
        >
            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="font-display text-[clamp(3.5rem,14vw,12rem)] text-[#1a1a17] leading-[0.85] tracking-wider">
                    GET IN
                </h2>
                <h2 className="font-display text-[clamp(3.5rem,14vw,12rem)] text-[#1a1a17] leading-[0.85] tracking-wider ml-[10%]">
                    TOUCH
                </h2>
            </motion.div>

            {/* CTAs */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center gap-4 mb-12"
            >
                <a
                    href="mailto:chitranshupandey234@gmail.com"
                    className="flex items-center gap-2 text-[#1a1a17] text-sm tracking-widest uppercase font-light hover:opacity-70 transition-opacity"
                >
                    <span></span> SEND A REQUEST
                </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-3"
            >
                {contactLinks.map((link, i) => (
                    <motion.a
                        key={link.label}
                        href={link.href}
                        target={link.label !== 'EMAIL' && link.label !== 'PHONE' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-[#1a1a17]/60 text-sm tracking-[0.3em] uppercase font-light hover:text-[#1a1a17] transition-colors duration-300"
                    >
                        {link.label}
                    </motion.a>
                ))}
            </motion.div>

            {/* Footer */}
            <div className="absolute bottom-6 left-0 right-0 flex flex-col md:flex-row items-center justify-between px-8 text-[#1a1a17]/60 text-[10px] tracking-[0.2em] uppercase">
                <span>© {new Date().getFullYear()} · ALL RIGHTS RESERVED</span>
                <span className="mt-2 md:mt-0">DESIGN: CHITRANSHU PANDEY</span>
            </div>
        </section>
    );
}

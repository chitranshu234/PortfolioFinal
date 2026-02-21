import { motion } from 'framer-motion';
import DecayCard from '../components/DecayCard';

interface Project {
    number: string;
    title: string;
    tech: string;
    description: string;
    image: string;
    github: string;
    liveDemo?: string;
}

const projects: Project[] = [
    {
        number: '01',
        title: 'SHOPSPHERE',
        tech: 'Spring Boot · React.js · MySQL',
        description:
            'Comprehensive e-commerce platform with MVC architecture, secured RESTful APIs, and integrated MySQL database.',
        image: '/shopsphere.png',
        github: 'https://github.com/chitranshu234/E-com',
        liveDemo: 'https://shopsphere-umber.vercel.app/',
    },
    {
        number: '02',
        title: 'GOURMET GLIDE',
        tech: 'React.js · Tailwind CSS · REST API',
        description:
            'Dynamic recipe application consuming external APIs with Local Storage preferences and optimized load times.',
        image: '/gourmetglide.png',
        github: 'https://github.com/chitranshu234/Gourmet_Glide',
        liveDemo: 'https://gourmetglide.vercel.app/',
    },
    {
        number: '03',
        title: 'MEDICONNECT',
        tech: 'React Native · TypeScript · Zego Cloud',
        description:
            'Cross-platform telemedicine app with real-time video consultations, doctor search, and prescription management.',
        image: '/telemedicine.png',
        github: 'https://github.com/chitranshu234/ConsumerDoctorApp',
    },
    {
        number: '04',
        title: 'LEAFLINK',
        tech: 'Node.js · Express.js · QR Code',
        description:
            'Supply chain traceability solution. Ranked 6th out of 500+ teams at Smart India Hackathon 2025.',
        image: '/leaflink.png',
        github: 'https://github.com/chitranshu234/leaflinkSIH',
        liveDemo: 'https://leaflinksihprototype.vercel.app/',
    },
];

/* GitHub SVG icon */
const GitHubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

/* External link icon */
const ExternalLinkIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

export default function Work() {
    return (
        <section
            id="work"
            className="min-h-screen section-padding relative overflow-hidden"
            style={{ backgroundColor: '#1a1a17' }}
        >
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="font-display text-[clamp(4rem,15vw,12rem)] text-[#c8c2b4] text-center leading-[0.9] mb-4"
            >
                WORK
            </motion.h2>
            <p className="text-center text-[#a09888]/50 text-xs tracking-[0.3em] uppercase mb-16">
                Selected Projects
            </p>

            {/* Staggered Projects Grid */}
            <div className="max-w-6xl mx-auto">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.number}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        viewport={{ once: true, margin: '-50px' }}
                        className={`mb-20 flex flex-col items-center md:items-start md:flex-row gap-8 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'
                            }`}
                    >
                        {/* Card */}
                        <div className="flex-shrink-0">
                            {project.image ? (
                                <DecayCard
                                    width={280}
                                    height={350}
                                    image={project.image}
                                >
                                    <span className="font-display text-[#c8c2b4] text-6xl block mb-1 opacity-40">
                                        {project.number}
                                    </span>
                                    <span className="font-display text-[#c8c2b4] text-xl tracking-wider">
                                        {project.title}
                                    </span>
                                </DecayCard>
                            ) : (
                                /* GitHub logo card for projects without images */
                                <DecayCard
                                    width={280}
                                    height={350}
                                    image=""
                                >
                                    <div className="flex flex-col items-center justify-center h-full gap-4">
                                        <svg width="80" height="80" viewBox="0 0 24 24" fill="#c8c2b4" opacity={0.3}>
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                        <span className="font-display text-[#c8c2b4] text-6xl block mb-1 opacity-40">
                                            {project.number}
                                        </span>
                                        <span className="font-display text-[#c8c2b4] text-xl tracking-wider">
                                            {project.title}
                                        </span>
                                    </div>
                                </DecayCard>
                            )}
                        </div>

                        {/* Info */}
                        <div className="flex flex-col justify-end max-w-sm text-center md:text-left mt-4 md:mt-auto md:pb-4">
                            <p className="text-[#a09888]/40 text-xs tracking-[0.2em] uppercase mb-2">
                                {project.tech}
                            </p>
                            <p className="text-[#a09888]/60 text-sm font-light leading-relaxed mb-5">
                                {project.description}
                            </p>

                            {/* Links */}
                            <div className="flex items-center justify-center md:justify-start gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[#c8c2b4] text-xs tracking-wider uppercase hover:text-white transition-colors duration-300"
                                    style={{
                                        padding: '8px 16px',
                                        border: '1px solid rgba(200, 194, 180, 0.2)',
                                        borderRadius: '6px',
                                    }}
                                >
                                    <GitHubIcon />
                                    GitHub
                                </a>
                                {project.liveDemo && (
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-[#1a1a17] text-xs tracking-wider uppercase hover:opacity-80 transition-opacity duration-300"
                                        style={{
                                            padding: '8px 16px',
                                            background: '#c8c2b4',
                                            borderRadius: '6px',
                                        }}
                                    >
                                        <ExternalLinkIcon />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

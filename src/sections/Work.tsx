import { motion } from 'framer-motion';
import GlassFolder from '../components/ui/glass-folder-cards';

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

interface Project {
    number: string;
    title: string;
    tech: string;
    description: string;
    bullets: string[];
    github: string;
    liveDemo?: string;
    folderArt: "aurora" | "ember" | "dusk" | "glacier" | "verdant";
    folderSeed: number;
    folderTone: "light" | "dark";
    files: { name: string; meta?: string; art?: "aurora" | "ember" | "dusk" | "glacier" | "verdant" }[];
}

const projects: Project[] = [
    {
        number: '01',
        title: 'SENSEI',
        tech: 'Java · Spring Boot · Python · FastAPI · React · TypeScript · ChromaDB · LangChain · LangGraph',
        description: 'AI Codebase Analysis and Onboarding Platform',
        bullets: [
            'Built a three-service platform for analyzing GitHub repositories across Java, Python, C, C++, and JavaScript, supporting architecture exploration, code browsing, and AI-powered onboarding.',
            'Authored language-specific parsers to extract code structure and dependencies, visualized relationships with React Flow, and indexed code in ChromaDB for RAG chat with file and line citations.',
            'Integrated Server-Sent Events for streaming AI responses, along with JWT and Google OAuth2 authentication, access-controlled file retrieval, model fallback, and an optional LangGraph agent.',
        ],
        github: 'https://github.com/chitranshu234/Sensei',
        liveDemo: 'https://sensei234.vercel.app/',
        folderArt: 'ember',
        folderSeed: 7,
        folderTone: 'dark',
        files: [
            { name: 'Backend — Spring Boot', meta: 'Java · REST API', art: 'ember' },
            { name: 'AI Service — FastAPI', meta: 'Python · LangChain', art: 'dusk' },
            { name: 'Frontend — React', meta: 'TypeScript · React Flow' },
        ],
    },
    {
        number: '02',
        title: 'RETRYX',
        tech: 'Java 21 · Spring Boot 3 · PostgreSQL · Docker · React · TypeScript · Tailwind CSS',
        description: 'Distributed Webhook Delivery and Retry Engine',
        bullets: [
            'Engineered a multi-worker delivery engine using PostgreSQL as a concurrent queue (FOR UPDATE SKIP LOCKED) with zero duplicate sends and no message broker.',
            'Implemented exponential backoff with jitter (2–32s) and status-based retry policies for transient failures (5xx, 429, and timeouts), achieving 99.9% eventual delivery under a 20% simulated failure rate.',
            'Enforced SSRF prevention, AES-256-GCM secrets, HMAC-SHA256 signatures and idempotency via Idempotency-Key.',
            'Delivered a real-time React 19 and TypeScript dashboard for throughput, p95 latency, failure diagnostics and 1-click dead-letter replay.',
        ],
        github: 'https://github.com/chitranshu234/RetryX',
        liveDemo: 'https://retry-x.vercel.app/',
        folderArt: 'aurora',
        folderSeed: 3,
        folderTone: 'dark',
        files: [
            { name: 'Delivery Engine', meta: 'Java 21 · PostgreSQL', art: 'aurora' },
            { name: 'Dashboard', meta: 'React 19 · TypeScript', art: 'glacier' },
            { name: 'Security Module', meta: 'AES-256 · HMAC' },
        ],
    },
    {
        number: '03',
        title: '3D PORTFOLIO',
        tech: 'React · TypeScript · Three.js · WebGL · GSAP · Framer Motion',
        description: 'Interactive 3D Developer Portfolio',
        bullets: [
            'Crafted an interactive 3D portfolio featuring a custom WebGL glass effect, a draggable 3D skills grid, and cinematic scroll animations.',
            'Assembled 10+ reusable React components and boosted 3D performance with lazy loading and instanced rendering.',
        ],
        github: 'https://github.com/chitranshu234/PortfolioFinal',
        liveDemo: 'https://chitranshu234.vercel.app/',
        folderArt: 'verdant',
        folderSeed: 5,
        folderTone: 'dark',
        files: [
            { name: 'WebGL Effects', meta: 'Three.js · Shaders', art: 'verdant' },
            { name: 'Animations', meta: 'GSAP · Framer Motion' },
        ],
    },
];

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

            {/* Glass Folder Cards Row */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-x-14 gap-y-10 mb-20"
            >
                {projects.map((project, i) => (
                    <GlassFolder
                        key={project.number}
                        label={project.title}
                        meta={project.tech.split(' · ').slice(0, 3).join(' · ')}
                        tone={project.folderTone}
                        art={project.folderArt}
                        seed={project.folderSeed}
                        action="none"
                        labelPlacement={i === 0 ? 'bottom-left' : i === 1 ? 'top-left' : 'top-right'}
                        appear
                        appearDelay={i * 140}
                        width={320}
                        files={project.files}
                        onFileSelect={() => {}}
                    />
                ))}
            </motion.div>

            {/* Project Details */}
            <div className="max-w-6xl mx-auto">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.number}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        viewport={{ once: true, margin: '-50px' }}
                        className="mb-20"
                    >
                        <div className="flex flex-col md:flex-row items-start gap-8">
                            {/* Number + Title */}
                            <div className="flex-shrink-0 md:w-64">
                                <span className="font-display text-[#c8c2b4]/20 text-6xl block mb-2">
                                    {project.number}
                                </span>
                                <h3 className="font-display text-[#c8c2b4] text-2xl tracking-wider mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-[#a09888]/40 text-xs tracking-[0.2em] uppercase mb-4">
                                    {project.tech}
                                </p>

                                {/* Links */}
                                <div className="flex items-center gap-4">
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

                            {/* Bullets */}
                            <div className="flex-1">
                                <p className="text-[#c8c2b4]/80 text-base font-light mb-4 italic">
                                    {project.description}
                                </p>
                                <ul className="space-y-3">
                                    {project.bullets.map((bullet, j) => (
                                        <motion.li
                                            key={j}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: j * 0.1, duration: 0.4 }}
                                            viewport={{ once: true }}
                                            className="text-[#a09888]/70 text-sm font-light leading-relaxed flex gap-3"
                                        >
                                            <span className="text-[#c8c2b4] mt-0.5 flex-shrink-0">▸</span>
                                            {bullet}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Separator */}
                        {i < projects.length - 1 && (
                            <div
                                className="mt-16 h-px w-full"
                                style={{ background: 'linear-gradient(to right, transparent, rgba(200,194,180,0.15), transparent)' }}
                            />
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

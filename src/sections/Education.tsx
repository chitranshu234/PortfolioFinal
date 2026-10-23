import { motion } from 'framer-motion';
import HowItWorks from '../components/ui/how-it-works';
import MagicBento from '../components/MagicBento';

/* ─── Certification Data (for MagicBento) ─── */
const certificationCards = [
    {
        color: '#1a1a17',
        title: 'Generative AI with LLMs',
        description: 'DeepLearning.AI & AWS · Foundation models, fine-tuning, and LLM deployment',
        label: 'March 2026',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/EWE4WCIR2FCK',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8c2b4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
            </svg>
        ),
    },
    {
        color: '#1a1a17',
        title: 'Cloud Native, Microservices, Containers, DevOps and Agile',
        description: 'IBM · Cloud-native application development and DevOps practices',
        label: 'January 2026',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/records/NAH7XBG4A9CF',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8c2b4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
            </svg>
        ),
    },
    {
        color: '#1a1a17',
        title: 'Introduction to HTML, CSS, & JavaScript',
        description: 'Comprehensive web development fundamentals',
        label: 'July 2025',
        credentialUrl: 'https://coursera.org/verify/KBW9KEXV6FWO',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8c2b4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
    },
];

export default function Education() {
    return (
        <div id="education" style={{ backgroundColor: '#1a1a17' }}>
            {/* ─── Section Title ─── */}
            <motion.h2
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="font-display text-[clamp(3rem,12vw,10rem)] text-[#c8c2b4] text-center leading-[0.9] pt-20 mb-4"
            >
                MY JOURNEY
            </motion.h2>
            <p className="text-center text-[#a09888]/50 text-xs tracking-[0.3em] uppercase mb-4">
                Education · Experience · Growth
            </p>

            {/* ─── HowItWorks Journey Cards ─── */}
            <HowItWorks />

            {/* ─── Achievements ─── */}
            <section className="section-padding relative overflow-hidden" style={{ backgroundColor: '#1a1a17' }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-20"
                >
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <div
                            className="px-6 py-4 rounded-xl border border-[rgba(200,194,180,0.1)] text-center"
                            style={{ background: 'rgba(200,194,180,0.03)' }}
                        >
                            <p className="font-display text-[#c8c2b4] text-3xl tracking-wider">6th</p>
                            <p className="text-[#a09888]/50 text-xs tracking-wider uppercase mt-1">SIH 2025 National Rank</p>
                        </div>
                        <div
                            className="px-6 py-4 rounded-xl border border-[rgba(200,194,180,0.1)] text-center"
                            style={{ background: 'rgba(200,194,180,0.03)' }}
                        >
                            <p className="font-display text-[#c8c2b4] text-3xl tracking-wider">400+</p>
                            <p className="text-[#a09888]/50 text-xs tracking-wider uppercase mt-1">LeetCode Questions</p>
                        </div>
                        <div
                            className="px-6 py-4 rounded-xl border border-[rgba(200,194,180,0.1)] text-center"
                            style={{ background: 'rgba(200,194,180,0.03)' }}
                        >
                            <p className="font-display text-[#c8c2b4] text-3xl tracking-wider">7.6</p>
                            <p className="text-[#a09888]/50 text-xs tracking-wider uppercase mt-1">CGPA (B.Tech)</p>
                        </div>
                    </div>
                </motion.div>

                {/* ─── Certifications Title ─── */}
                <motion.h3
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="font-display text-[clamp(2rem,8vw,5rem)] text-[#c8c2b4] text-center leading-[0.9] mb-4"
                >
                    CERTIFICATIONS
                </motion.h3>
                <p className="text-center text-[#a09888]/50 text-xs tracking-[0.3em] uppercase mb-12">
                    Professional Development
                </p>

                {/* ─── Bento Certification Cards ─── */}
                <div className="flex justify-center">
                    <MagicBento
                        cardData={certificationCards}
                        textAutoHide={true}
                        enableStars
                        enableSpotlight
                        enableBorderGlow={true}
                        enableTilt={false}
                        enableMagnetism={false}
                        clickEffect
                        spotlightRadius={400}
                        particleCount={12}
                        glowColor="200, 194, 180"
                        disableAnimations={false}
                    />
                </div>
            </section>
        </div>
    );
}

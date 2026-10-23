import { motion } from 'framer-motion';
import InfiniteMenu from '../components/InfiniteMenu';
import type { MenuItem } from '../components/InfiniteMenu';

const skillItems: MenuItem[] = [
    // ── Languages ──
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        link: '#',
        title: 'Java',
        description: 'Language',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        link: '#',
        title: 'Python',
        description: 'Language',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        link: '#',
        title: 'JavaScript',
        description: 'Language',
    },
    {
        image: '/icons/sql.svg',
        link: '#',
        title: 'SQL',
        description: 'Language',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        link: '#',
        title: 'HTML5',
        description: 'Language',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        link: '#',
        title: 'CSS3',
        description: 'Language',
    },

    // ── Backend ──
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        link: '#',
        title: 'Spring Boot',
        description: 'Backend Framework',
    },
    {
        image: '/icons/spring.svg',
        link: '#',
        title: 'Spring Data JPA',
        description: 'Backend',
    },
    {
        image: '/icons/spring-security.svg',
        link: '#',
        title: 'Spring Security',
        description: 'Backend',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg',
        link: '#',
        title: 'Hibernate',
        description: 'ORM',
    },
    {
        image: '/icons/rest-api.svg',
        link: '#',
        title: 'REST APIs',
        description: 'Backend',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
        link: '#',
        title: 'FastAPI',
        description: 'Backend Framework',
    },

    // ── Frontend ──
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        link: '#',
        title: 'React.js',
        description: 'Frontend Framework',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        link: '#',
        title: 'React Native',
        description: 'Mobile Framework',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        link: '#',
        title: 'TypeScript',
        description: 'Language',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        link: '#',
        title: 'Tailwind CSS',
        description: 'CSS Framework',
    },

    // ── AI & LLM ──
    {
        image: '/icons/langchain.svg',
        link: '#',
        title: 'LangChain',
        description: 'AI & LLM',
    },
    {
        image: '/icons/langgraph.svg',
        link: '#',
        title: 'LangGraph',
        description: 'AI & LLM',
    },
    {
        image: '/icons/rag.svg',
        link: '#',
        title: 'RAG',
        description: 'AI & LLM',
    },
    {
        image: '/icons/chromadb.svg',
        link: '#',
        title: 'ChromaDB',
        description: 'Vector Database',
    },
    {
        image: '/icons/embeddings.svg',
        link: '#',
        title: 'Embeddings',
        description: 'AI & LLM',
    },

    // ── Databases ──
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        link: '#',
        title: 'PostgreSQL',
        description: 'Database',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        link: '#',
        title: 'MySQL',
        description: 'Database',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        link: '#',
        title: 'MongoDB',
        description: 'Database',
    },

    // ── Tools ──
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        link: '#',
        title: 'Git',
        description: 'Tool',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        link: '#',
        title: 'GitHub',
        description: 'Tool',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
        link: '#',
        title: 'Postman',
        description: 'Tool',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
        link: '#',
        title: 'Vercel',
        description: 'Cloud Platform',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
        link: '#',
        title: 'Android Studio',
        description: 'Tool',
    },

    // ── Core Concepts ──
    {
        image: '/icons/oop.svg',
        link: '#',
        title: 'Object-Oriented Programming',
        description: 'Core Concept',
    },
    {
        image: '/icons/dsa.svg',
        link: '#',
        title: 'Data Structures & Algorithms',
        description: 'Core Concept',
    },
    {
        image: '/icons/mvc.svg',
        link: '#',
        title: 'MVC Architecture',
        description: 'Core Concept',
    },
    {
        image: '/icons/database-design.svg',
        link: '#',
        title: 'Database Design',
        description: 'Core Concept',
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen py-16 px-4 md:section-padding relative overflow-hidden flex flex-col"
            style={{ backgroundColor: '#1a1a17' }}
        >
            <motion.h2
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="font-display text-[clamp(3rem,10vw,8rem)] text-[#c8c2b4] text-center leading-[0.9] mb-4"
            >
                SKILLS
            </motion.h2>
            <p className="text-center text-[#a09888]/50 text-xs tracking-[0.3em] uppercase mb-4">
                Technologies & Tools
            </p>

            {/* Interactive hint badge */}
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-center mb-6"
            >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(200,194,180,0.05)] border border-[rgba(200,194,180,0.12)] text-[11px] tracking-wider uppercase text-[#a09888] select-none shadow-sm">
                    <svg className="w-3.5 h-3.5 text-[#c8c2b4] animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M3.6 9h16.8" />
                        <path d="M3.6 15h16.8" />
                        <path d="M12 3a14.5 14.5 0 0 0 0 18" />
                        <path d="M12 3a14.5 14.5 0 0 1 0 18" />
                    </svg>
                    <span className="hidden sm:inline">Click & drag to rotate sphere</span>
                    <span className="sm:hidden">Swipe to rotate sphere</span>
                </div>
            </motion.div>

            <div className="w-full h-[520px] md:h-[620px] relative">
                <InfiniteMenu items={skillItems} scale={1} />
            </div>
        </section>
    );
}

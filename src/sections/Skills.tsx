import { motion } from 'framer-motion';
import InfiniteMenu from '../components/InfiniteMenu';
import type { MenuItem } from '../components/InfiniteMenu';

// Helper to generate a text-based SVG data URI for skills without a logo
function textIcon(label: string): string {
    const lines = label.split('\n');
    const fontSize = lines.length > 1 ? 28 : 36;
    const textElements = lines
        .map(
            (line, i) =>
                `<text x="64" y="${64 - ((lines.length - 1) * fontSize * 0.6) / 2 + i * fontSize * 0.7}" font-family="sans-serif" font-size="${fontSize}" font-weight="600" fill="%23c8c2b4" text-anchor="middle" dominant-baseline="central">${line}</text>`
        )
        .join('');
    return `data:image/svg+xml,${encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="%231a1a17"/>${textElements}</svg>`
    )}`;
}

const skillItems: MenuItem[] = [
    // ── Programming Languages ──
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        link: '#',
        title: 'Java',
        description: 'Programming Language',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        link: '#',
        title: 'JavaScript (ES6+)',
        description: 'Programming Language',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        link: '#',
        title: 'TypeScript',
        description: 'Programming Language',
    },
    {
        image: textIcon('SQL'),
        link: '#',
        title: 'SQL',
        description: 'Programming Language',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        link: '#',
        title: 'HTML5',
        description: 'Programming Language',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        link: '#',
        title: 'CSS3',
        description: 'Programming Language',
    },

    // ── Frameworks & Libraries ──
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        link: '#',
        title: 'Spring Boot',
        description: 'Framework',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        link: '#',
        title: 'React.js',
        description: 'Framework',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        link: '#',
        title: 'React Native',
        description: 'Mobile Framework',
    },
    {
        image: textIcon('Expo'),
        link: '#',
        title: 'Expo',
        description: 'Mobile Framework',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        link: '#',
        title: 'Node.js',
        description: 'Runtime',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        link: '#',
        title: 'Express.js',
        description: 'Framework',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        link: '#',
        title: 'Tailwind CSS',
        description: 'CSS Framework',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        link: '#',
        title: 'Bootstrap',
        description: 'CSS Framework',
    },

    // ── Developer Tools ──
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        link: '#',
        title: 'Git',
        description: 'Developer Tool',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        link: '#',
        title: 'GitHub',
        description: 'Developer Tool',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        link: '#',
        title: 'VS Code',
        description: 'Developer Tool',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
        link: '#',
        title: 'IntelliJ IDEA',
        description: 'Developer Tool',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
        link: '#',
        title: 'Postman',
        description: 'Developer Tool',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
        link: '#',
        title: 'Android Studio',
        description: 'Developer Tool',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        link: '#',
        title: 'Figma',
        description: 'Design Tool',
    },

    // ── Databases & Cloud ──
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
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        link: '#',
        title: 'PostgreSQL',
        description: 'Database',
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
        link: '#',
        title: 'Vercel',
        description: 'Cloud Platform',
    },
    {
        image: textIcon('REST\nAPIs'),
        link: '#',
        title: 'RESTful APIs',
        description: 'Cloud & APIs',
    },
    {
        image: textIcon('JSON'),
        link: '#',
        title: 'JSON',
        description: 'Data Format',
    },

    // ── Core Concepts ──
    {
        image: textIcon('Micro\nservices'),
        link: '#',
        title: 'Microservices',
        description: 'Core Concept',
    },
    {
        image: textIcon('OOP'),
        link: '#',
        title: 'Object-Oriented Programming',
        description: 'Core Concept',
    },
    {
        image: textIcon('DSA'),
        link: '#',
        title: 'Data Structures & Algorithms',
        description: 'Core Concept',
    },
    {
        image: textIcon('MVC'),
        link: '#',
        title: 'MVC Architecture',
        description: 'Core Concept',
    },
    {
        image: textIcon('State\nMgmt'),
        link: '#',
        title: 'State Management',
        description: 'Core Concept',
    },
    {
        image: textIcon('API\nInteg.'),
        link: '#',
        title: 'API Integration',
        description: 'Core Concept',
    },
    {
        image: textIcon('Security'),
        link: '#',
        title: 'Security Implementation',
        description: 'Core Concept',
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen section-padding relative overflow-hidden flex flex-col"
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
            <p className="text-center text-[#a09888]/50 text-xs tracking-[0.3em] uppercase mb-8">
                Technologies & Tools
            </p>

            <div className="flex-1 min-h-[500px] md:min-h-[600px]">
                <InfiniteMenu items={skillItems} scale={1} />
            </div>
        </section>
    );
}

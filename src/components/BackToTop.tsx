import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    style={{
                        position: 'fixed',
                        bottom: 64,
                        right: 32,
                        zIndex: 50,
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        border: '1px solid rgba(200, 194, 180, 0.2)',
                        background: 'rgba(26, 26, 23, 0.8)',
                        backdropFilter: 'blur(10px)',
                        color: '#c8c2b4',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 18,
                        transition: 'border-color 0.3s, background 0.3s',
                    }}
                    whileHover={{
                        borderColor: 'rgba(200, 194, 180, 0.5)',
                        background: 'rgba(200, 194, 180, 0.1)',
                    }}
                >
                    ↑
                </motion.button>
            )}
        </AnimatePresence>
    );
}

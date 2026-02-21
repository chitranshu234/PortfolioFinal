import { motion } from 'framer-motion';

export default function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: '#1a1a17' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <div className="font-display text-6xl tracking-wider text-[#c8c2b4] mb-4">CP</div>
                <p
                    className="text-[#a09888]/50 text-sm font-light tracking-[0.3em] uppercase"
                >
                    Loading
                </p>
            </motion.div>
        </div>
    );
}

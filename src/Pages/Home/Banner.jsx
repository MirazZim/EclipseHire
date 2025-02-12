import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="hero bg-gray-100 min-h-96 flex items-center justify-center px-6">
            <div className="hero-content flex flex-col lg:flex-row-reverse gap-10 max-w-6xl w-full">
                
                {/* Image Section */}
                <motion.div 
                    className="flex-1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    whileHover={{ scale: 1.03 }}
                >
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-3xl shadow-xl"
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div 
                    className="flex-1 text-center lg:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-semibold text-gray-900"
                        animate={{ x: [0, 10, 0] }} 
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        Find Your Dream Job
                    </motion.h1>
                    <p className="py-6 text-gray-600 text-lg">
                        Explore top opportunities in your field and take the next step in your career with ease.
                    </p>
                    
                    {/* Buttery Smooth Hover Effect */}
                    <motion.button
                        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md transition-all"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.10 }}
                        transition={{ type: "spring", stiffness: 500, damping: 10000000, mass: 0.5 }}
                    >
                        Get Started
                    </motion.button>
                </motion.div>

            </div>
        </div>
    );
};

export default Banner;

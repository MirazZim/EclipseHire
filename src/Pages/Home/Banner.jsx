import { motion } from "framer-motion";
import Team1 from '../../assets/Team/Team1.jpg'
import Team2 from '../../assets/Team/Team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-gray-100 min-h-96 flex items-center justify-center px-6">
            <div className="hero-content flex flex-col lg:flex-row-reverse gap-10 max-w-6xl w-full">
                
                {/* Image Section */}
                <motion.div className="flex-1 flex gap-2">
                    <motion.img
                        src={Team1}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-600 shadow-xl"
                        animate={{
                            y: [10, -50, 10]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.img
                        src={Team2} 
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-600 shadow-xl"
                        animate={{
                            x: [10, -50, 10]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
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
                        className="text-4xl md:text-5xl font-semibold"
                        animate={{
                            color: [
                                '#000000', // black
                                '#3B82F6', // blue-600
                                '#4B5563', // gray-600
                                '#000000'  // back to black to complete loop
                            ]
                        }}
                        transition={{ 
                            repeat: Infinity,
                            duration: 3,
                            ease: "linear"
                        }}
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

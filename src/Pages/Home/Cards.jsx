import React from 'react';
import { motion } from 'framer-motion';

const jobCategories = [
    {
        id: 1,
        title: "Software Development",
        count: "1.2k+ Jobs",
        icon: "💻"
    },
    {
        id: 2,
        title: "Marketing & Sales", 
        count: "850+ Jobs",
        icon: "📈"
    },
    {
        id: 3,
        title: "Design & Creative",
        count: "650+ Jobs", 
        icon: "🎨"
    },
    {
        id: 4,
        title: "Finance & Banking",
        count: "950+ Jobs",
        icon: "💰"
    }
];

const Cards = () => {
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Job Categories
                </h1>
                <p className="text-lg text-gray-600">
                    Explore opportunities across different sectors
                </p>
            </motion.div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {jobCategories.map((category, index) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-full p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 backdrop-blur-sm"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-4">
                                <span className="text-4xl transform hover:scale-110 transition-transform duration-300">{category.icon}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                                {category.title}
                            </h3>
                            <p className="text-gray-600 bg-gray-50 px-4 py-1 rounded-full text-sm">{category.count}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
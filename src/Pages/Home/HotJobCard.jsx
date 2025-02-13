import { motion } from "framer-motion";


const HotJobCard = ({ job }) => {
    const { title, jobType, location, category, salaryRange, applicationDeadline, company, company_logo } = job;    
    
    return (
        <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="space-y-3">
                {/* Company Logo and Job Type */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <img 
                            src={company_logo} 
                            alt={company} 
                            className="w-10 h-10 rounded-xl object-cover"
                        />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                            <p className="text-sm text-gray-500">{company}</p>
                        </div>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
                        {jobType}
                    </span>
                </div>

                {/* Location and Category */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{location}</span>
                    </div>
                    <span className="px-2.5 py-0.5 text-xs bg-gray-50 text-gray-600 rounded-full">
                        {category}
                    </span>
                </div>

                {/* Salary and Deadline */}
                <div className="flex justify-between items-center pt-3 border-t border-gray-50">
                    <div>
                        <p className="text-xs text-gray-500">Salary Range</p>
                        <p className="text-sm font-medium text-gray-800">
                            {salaryRange.min.toLocaleString()} - {salaryRange.max.toLocaleString()} {salaryRange.currency.toUpperCase()}
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-gray-500">Apply Before</p>
                        <p className="text-sm font-medium text-gray-800">
                            {new Date(applicationDeadline).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </p>
                    </div>
                </div>

                {/* Apply Button */}
                <motion.button 
                    className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 500, damping: 10000000, mass: 0.5 }}
                >
                    Apply Now
                </motion.button>
            </div>
        </div>
    );
};

export default HotJobCard;
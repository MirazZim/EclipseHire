import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,    
    title,
    jobType,
    location,
    category,
    salaryRange,
    applicationDeadline,
    company,
    company_logo,
    requirements,
    description,
    responsibilities,
    status,
    hr_email,
    hr_name,
  } = job;

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="space-y-6">
        {/* Company Logo and Job Type */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src={company_logo}
              alt={company}
              className="w-16 h-16 rounded-2xl object-cover shadow-sm"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
              <p className="text-sm text-gray-500">{company}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="px-4 py-1.5 text-xs font-medium bg-blue-50 text-blue-600 rounded-full shadow-sm">
              {jobType}
            </span>
            <span
              className={`px-4 py-1.5 text-xs font-medium ${
                status === "active"
                  ? "bg-green-50 text-green-600"
                  : "bg-red-50 text-red-600"
              } rounded-full shadow-sm`}
            >
              {status}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="bg-gray-50 p-4 rounded-2xl">
          <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Location and Category */}
        <div className="flex items-center gap-4">
          <div className="flex items-center text-gray-600 text-sm">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{location}</span>
          </div>
          <span className="px-3 py-1 text-xs bg-gray-50 text-gray-600 rounded-full shadow-sm">
            {category}
          </span>
        </div>

        {/* Requirements */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Requirements
          </h4>
          <div className="flex flex-wrap gap-2">
            {requirements?.map((req, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {req}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Responsibilities */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Responsibilities
          </h4>
          <ul className="list-disc list-inside space-y-1">
            {responsibilities?.map((resp, index) => (
              <li key={index} className="text-sm text-gray-600">
                {resp}
              </li>
            ))}
          </ul>
        </div>

        {/* HR Contact */}
        <div className="bg-blue-50 p-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700">{hr_name}</p>
              <p className="text-xs text-gray-500">{hr_email}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Apply Before</p>
              <p className="text-sm font-medium text-gray-800">
                {new Date(applicationDeadline).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Salary */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500">Salary Range</p>
            <p className="text-sm font-medium text-gray-800">
              {salaryRange.min.toLocaleString()} -{" "}
              {salaryRange.max.toLocaleString()}{" "}
              {salaryRange.currency.toUpperCase()}
            </p>
          </div>
          {/* Apply Button */}
          <Link to = {`/Jobs/${_id}`}>
          <motion.button
            className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors duration-300 text-sm font-medium shadow-md"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 10000000,
            mass: 0.5,
              }}
            >
              Apply Now
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;

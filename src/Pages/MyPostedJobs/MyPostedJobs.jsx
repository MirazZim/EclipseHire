import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/Jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            My Posted Jobs
          </h1>
          <p className="text-xl text-gray-600 font-light">
            Managing {jobs.length} job posting{jobs.length !== 1 ? "s" : ""}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <motion.div
              key={job._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="p-8">
                <div className="flex items-center gap-6 mb-6">
                  <img
                    src={job.company_logo}
                    alt={job.company}
                    className="w-20 h-20 rounded-xl object-cover shadow-sm"
                  />
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                      {job.title}
                    </h2>
                    <p className="text-gray-500 font-medium">{job.company}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-gray-600 line-clamp-2 leading-relaxed">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">
                      {job.category}
                    </span>
                    <span className="px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium">
                      {job.jobType}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 pt-6 border-t border-gray-100">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors font-medium"
                  >
                    <FaEdit className="text-lg" />
                    <span>Edit</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition-colors font-medium"
                  >
                    <FaTrash className="text-lg" />
                    <span>Delete</span>
                  </motion.button>
                  <Link to={`/viewApplications/${job._id}`} className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-xl hover:bg-emerald-600 transition-colors font-medium"
                    >
                      <span>View</span>
                      <FaEye className="text-lg" />
                    </motion.button>
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                  <span className="text-sm font-medium text-gray-500">
                    Applications: <span className="text-indigo-600">{job.applicationCount || 0}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {jobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-2xl text-gray-500 font-light">
              You haven't posted any jobs yet.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MyPostedJobs;

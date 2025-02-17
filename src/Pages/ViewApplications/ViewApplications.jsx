import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

const ViewApplications = () => {
  const applications = useLoaderData();
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredApplications = selectedStatus === "all" 
    ? applications
    : applications.filter(app => app.status === selectedStatus);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Job Applications
          </h1>
          <p className="text-xl text-gray-600 font-light">
            {applications.length} application{applications.length !== 1 ? "s" : ""} received
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center gap-4">
          {["all", "pending", "accepted", "rejected"].map((status) => (
            <motion.button
              key={status}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedStatus(status)}
              className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all
                ${selectedStatus === status
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
            >
              {status}
            </motion.button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredApplications.map((application, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-2xl text-gray-600">{application.name?.[0]}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {application.name}
                  </h3>
                  <p className="text-sm text-gray-500">{application.email}</p>
                  {application.phone && (
                    <p className="text-sm text-gray-500">{application.phone}</p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Job Details:</h4>
                  <p className="text-sm font-medium text-gray-800">{application.job_title}</p>
                  <p className="text-sm text-gray-600">{application.company}</p>
                  <p className="text-xs text-gray-500">Applied on: {new Date(application.appliedDate).toLocaleDateString()}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Cover Letter:</h4>
                  <p className="text-sm text-gray-600">{application.coverLetter}</p>
                </div>

                <div className="flex flex-col gap-2">
                  {application.resume_link && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Resume</span>
                      <a
                        href={application.resume_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                      >
                        View Resume
                      </a>
                    </div>
                  )}

                  {application.portfolio && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Portfolio</span>
                      <a
                        href={application.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                      >
                        View Portfolio
                      </a>
                    </div>
                  )}

                  {application.linkedin && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">LinkedIn</span>
                      <a
                        href={application.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                      >
                        View Profile
                      </a>
                    </div>
                  )}
                </div>

                <div>
                  <span className="text-sm text-gray-500">Status</span>
                  <span className={`ml-2 px-3 py-1 rounded-full text-xs font-medium
                    ${application.status === 'accepted' ? 'bg-green-50 text-green-600' :
                      application.status === 'rejected' ? 'bg-red-50 text-red-600' :
                      'bg-yellow-50 text-yellow-600'}`}
                  >
                    {application.status}
                  </span>
                </div>

                <div className="pt-4 border-t border-gray-100 flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-4 py-2 bg-green-500 text-white rounded-xl text-sm font-medium hover:bg-green-600 transition-colors"
                  >
                    Accept
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-4 py-2 bg-red-500 text-white rounded-xl text-sm font-medium hover:bg-red-600 transition-colors"
                  >
                    Reject
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredApplications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-2xl text-gray-500 font-light">
              No applications found.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ViewApplications;
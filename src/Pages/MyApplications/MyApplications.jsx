import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";


const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* fetch(`https://job-portal-server-kappa-two.vercel.app/Job_Applications?email=${user?.email}`,{})
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      }); */

    axios.get(`https://job-portal-server-kappa-two.vercel.app/Job_Applications?email=${user?.email}`,{
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        }
    })  
    .then((res) => {
        setJobs(res.data);
        setLoading(false);
    })
    .catch((err) => {
        console.log(err);
    })
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            My Applications
          </h1>
          <p className="text-xl text-gray-600">
            You have submitted {jobs.length} application
            {jobs.length !== 1 ? "s" : ""}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <motion.div
              key={job._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={job.company_logo}
                    alt={job.company}
                    className="w-16 h-16 rounded-lg object-cover shadow-sm"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {job.job_title}
                    </h2>
                    <p className="text-gray-600">Company: {job.company}</p>
                    <p className="text-gray-600">Location: {job.location}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-4">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Your Application Details:
                  </h3>
                  <p className="text-gray-600">Name: {job.name}</p>
                  <p className="text-gray-600">Email: {job.email}</p>
                  <p className="text-gray-600">
                    Resume Link: {job.resume_link}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {job.job_category}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                    {job.salary_range}
                  </span>
                </div>

                <div className="text-sm text-gray-500 border-t border-gray-200 pt-4">
                  <p>
                    Applied on:{" "}
                    {new Date(job.application_date).toLocaleDateString()}
                  </p>
                  <p>
                    Application Status:{" "}
                    <span className="font-medium text-blue-600">
                      {job.status || "Pending"}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {jobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-600">
              You haven't submitted any applications yet.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MyApplications;

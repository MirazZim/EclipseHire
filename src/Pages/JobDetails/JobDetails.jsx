import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const JobDetails = () => {
  // 1. Gets the data loaded from the router using useLoaderData hook
  // 2. Retrieves job details passed through route loader
  // 3. Stores router data in loaderData variable
  // 4. useLoaderData is a React Router hook for accessing loader data
  // 5. This line fetches data that was pre-loaded during route transition
  const loaderData = useLoaderData();

  // 1. Handles both nested and flat data structures
  // 2. Uses fallback if data is not nested under .data property
  // 3. Assigns final data object for use in component
  // 4. Provides flexibility in API response format
  // 5. Short-circuits to loaderData if .data property doesn't exist
  const data = loaderData.data || loaderData;

  if (!data) {
    return <div>No job data available</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white min-h-screen">
      <div className="bg-white rounded-[2rem] shadow-2xl p-10 space-y-10 border border-gray-200">
        {/* Header Section */}
        <div className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl">
          <div className="flex items-center gap-8">
            <div className="relative">
              <img
                src={data.company_logo}
                alt={data.company}
                className="w-24 h-24 rounded-2xl object-cover shadow-lg ring-4 ring-gray-200"
              />
              <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-lg shadow-md">
                <span className={`px-3 py-1 rounded-md text-xs font-semibold ${
                  data.status === "active" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                }`}>
                  {data.status}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{data.title}</h1>
              <p className="text-xl text-gray-600">{data.company}</p>
              <div className="flex gap-4 mt-3">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium inline-flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {data.jobType}
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium inline-flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {data.location}
                </span>
              </div>
            </div>
          </div>
          <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-2">Salary Range</p>
            <p className="text-2xl font-bold text-gray-900">
              {data.salaryRange?.min?.toLocaleString()} - {data.salaryRange?.max?.toLocaleString()}
              <span className="text-sm font-medium ml-1">{data.salaryRange?.currency?.toUpperCase()}</span>
            </p>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Role</h2>
          <p className="text-gray-700 leading-relaxed text-lg">{data.description}</p>
        </div>

        {/* Requirements Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Required Skills</h2>
          <div className="flex flex-wrap gap-3">
            {data.requirements?.map((req, index) => (
              <motion.span
                key={index}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium shadow-sm"
                whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                whileTap={{ scale: 0.95 }}
              >
                {req}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Responsibilities Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">What You'll Do</h2>
          <div className="grid gap-4">
            {data.responsibilities?.map((resp, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-200">
                <span className="w-8 h-8 bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center font-semibold">
                  {index + 1}
                </span>
                <p className="text-gray-700">{resp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-900">{data.hr_name}</h3>
              <p className="text-gray-600 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {data.hr_email}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600 mb-1">Application Deadline</p>
              <p className="text-lg font-bold text-gray-900">
                {data.applicationDeadline && new Date(data.applicationDeadline).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <div className="flex justify-center pt-6">
         <Link to={`/jobApply/${data.id} `}>
           
            <motion.button
            className="px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl text-lg font-medium shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.98 }}
          >
            Apply for this Position
          </motion.button></Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

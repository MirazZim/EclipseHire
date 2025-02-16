import { motion } from "framer-motion";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const AddJob = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();   

  // Handle form submission and collect all form data
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // Get basic job details
    const jobTitle = form.jobTitle.value;
    const companyName = form.companyName.value;
    const jobCategory = form.jobCategory.value;
    const jobType = form.jobType.value;
    const location = form.location.value;

    // Get salary information
    const minSalary = form.minSalary.value;
    const maxSalary = form.maxSalary.value;
    const currency = form.currency.value;

    // Get detailed job information
    const jobDescription = form.jobDescription.value;
    const applicationDeadline = form.applicationDeadline.value;

    // Split comma-separated lists into arrays and trim whitespace
    const requirements = form.requirements.value
      .split(",")
      .map((req) => req.trim());
    const responsibilities = form.responsibilities.value
      .split(",")
      .map((resp) => resp.trim());

    // Get poster email from authenticated user
    const posterEmail = user.email;

    // Get HR information
    const hrName = form.hrName.value;
    const hrEmail = form.hrEmail.value;
    const companyLogo = form.companyLogo.value;

    // Construct job data object
    const jobData = {
      title: jobTitle,
      company: companyName,
      category: jobCategory,
      jobType,
      location,
      salaryRange: {
        min: parseInt(minSalary),
        max: parseInt(maxSalary),
        currency,
      },
      description: jobDescription,
      applicationDeadline,
      requirements,
      responsibilities,
      posterEmail,
      hr_name: hrName,
      hr_email: hrEmail,
      company_logo: companyLogo
    };

    console.log(jobData);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Job posted successfully",
            icon: "success",
          });
          navigate("/MyPostedJobs");    
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Main container with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        {/* Form header section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Post a New Job</h2>
          <p className="mt-2 text-gray-600">
            Fill in the details to create a new job posting
          </p>
        </div>

        {/* Main form with animation */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Grid layout for form fields */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Job Title field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                placeholder="e.g. Senior Software Engineer"
                className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Company Name field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="e.g. Tech Solutions Inc."
                className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Job Category dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Category
              </label>
              <select
                name="jobCategory"
                className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
                required
              >
                <option value="">Select a category</option>
                <option value="Teaching">Teaching</option>
                <option value="Software Development">
                  Software Development
                </option>
                <option value="Marketing & Sales">Marketing & Sales</option>
                <option value="Design & Creative">Design & Creative</option>
              </select>
            </div>

            {/* Job Type dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Type
              </label>
              <select
                name="jobType"
                className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
                required
              >
                <option value="">Select job type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Intern">Intern</option>
                <option value="Contract">Contract</option>
              </select>
            </div>

            {/* Location field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="e.g. New York, NY or Remote"
                className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Currency dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Currency
              </label>
              <select
                name="currency"
                className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
                required
              >
                <option value="bdt">BDT</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
              </select>
            </div>

            {/* Minimum Salary field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Minimum Salary
              </label>
              <input
                type="number"
                name="minSalary"
                placeholder="e.g. 50000"
                className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Maximum Salary field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Maximum Salary
              </label>
              <input
                type="number"
                name="maxSalary"
                placeholder="e.g. 80000"
                className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Application Deadline field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Application Deadline
              </label>
              <input
                type="date"
                name="applicationDeadline"
                className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* HR Name field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                HR Name
              </label>
              <input
                type="text"
                name="hrName"
                placeholder="e.g. John Smith"
                className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* HR Email field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                HR Email
              </label>
              <input
                type="email"
                name="hrEmail"
                placeholder="e.g. hr@company.com"
                className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Company Logo URL field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Logo URL
              </label>
              <input
                type="url"
                name="companyLogo"
                placeholder="e.g. https://company.com/logo.png"
                className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
                required
              />
            </div>
          </div>

          {/* Job Description textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Description
            </label>
            <textarea
              name="jobDescription"
              rows="4"
              placeholder="Provide a detailed description of the job role, responsibilities, and requirements..."
              className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
              required
            ></textarea>
          </div>

          {/* Requirements textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Requirements (comma-separated)
            </label>
            <textarea
              name="requirements"
              rows="3"
              placeholder="e.g. Bachelor's degree in Computer Science, 5+ years experience in software development, Strong problem-solving skills"
              className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
              required
            ></textarea>
          </div>

          {/* Responsibilities textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Responsibilities (comma-separated)
            </label>
            <textarea
              name="responsibilities"
              rows="3"
              placeholder="e.g. Develop and maintain web applications, Collaborate with cross-functional teams, Write clean and efficient code"
              className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
              required
            ></textarea>
          </div>

          {/* Submit button container */}
          <div className="flex justify-end">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 500, damping: 10000000, mass: 0.5 }}
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              type="submit"
            >
              Post Job
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default AddJob;

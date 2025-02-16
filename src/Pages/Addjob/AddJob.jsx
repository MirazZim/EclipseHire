import { motion } from 'framer-motion';
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';

const AddJob = () => {
    const { user } = useContext(AuthContext);

    // Handle form submission and collect all form data
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const jobTitle = form.jobTitle.value;
        const companyName = form.companyName.value;
        const jobCategory = form.jobCategory.value;
        const salaryRange = form.salaryRange.value;
        const jobDescription = form.jobDescription.value;
        const jobPostingDate = form.jobPostingDate.value;
        const applicationDeadline = form.applicationDeadline.value;
        const jobApplicants = form.jobApplicants.value;
        const posterEmail = user.email;


        const jobData = {
            jobTitle,
            companyName,
            jobCategory,
            salaryRange,
            jobDescription,
            jobPostingDate,
            applicationDeadline,
            jobApplicants,
            posterEmail
        }
        

        console.log(jobData);

        // Create new job object with collected form data
        const newJob = {
            jobTitle,
            companyName,
            jobCategory,
            salaryRange,
            jobDescription,
            jobPostingDate,
            applicationDeadline,
            jobApplicants,
            posterEmail
        }

        // Add job posting logic here
    }

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
                    <p className="mt-2 text-gray-600">Fill in the details to create a new job posting</p>
                </div>

                {/* Main form with animation */}
                <motion.form 
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {/* Grid container for form fields */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Job Title input field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Job Title</label>
                            <input type="text" name="jobTitle" className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none" required />
                        </div>

                        {/* Company Name input field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Company Name</label>
                            <input type="text" name="companyName" className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none" required />
                        </div>

                        {/* Job Category dropdown */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Job Category</label>
                            <select name="jobCategory" className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none" required>
                                <option value="">Select a category</option>
                                <option value="Software Development">Software Development</option>
                                <option value="Marketing & Sales">Marketing & Sales</option>
                                <option value="Design & Creative">Design & Creative</option>
                                <option value="Finance & Banking">Finance & Banking</option>
                            </select>
                        </div>

                        {/* Salary Range input field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Salary Range</label>
                            <input type="text" name="salaryRange" placeholder="e.g. $50,000 - $70,000" className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none" required />
                        </div>

                        {/* Job Posting Date input field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Posting Date</label>
                            <input type="date" name="jobPostingDate" className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none" required />
                        </div>

                        {/* Application Deadline input field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Application Deadline</label>
                            <input type="date" name="applicationDeadline" className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none" required />
                        </div>

                        {/* Job Applicants Number input field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Job Applicants Number</label>
                            <input type="number" name="jobApplicants" placeholder="0" className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none" required />
                        </div>
                    </div>

                    {/* Job Description textarea */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Job Description</label>
                        <textarea name="jobDescription" rows="4" className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none" required></textarea>
                    </div>

                    {/* Submit button container */}
                    <div className="flex justify-end">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
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
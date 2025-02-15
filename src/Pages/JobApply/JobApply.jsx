import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';
import useAuth from '../../Hooks/useAuth';
import { Link, useNavigate  } from 'react-router-dom';
import Swal from 'sweetalert2';

const JobApply = () => {
    const loaderData = useLoaderData();
    const data = loaderData.data || loaderData;
    const {user} = useAuth();

    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        name: user?.displayName || '',
        email: user?.email || '',
        phone: '',
        resume_link: '',
        coverLetter: '',
        portfolio: '',
        linkedin: ''
    }); 

    const SubmitJobApplication = (e) => {
        e.preventDefault();
        
        try {
            // Create form data object
            const applicationData = {
                ...formData,
                job_id: data._id,
                job_title: data.title,
                company: data.company,
                appliedDate: new Date().toISOString(),
                status: 'pending'
            };
              
            fetch('http://localhost:5000/Job_Applications',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(applicationData)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: "Vamos!",
                        text: "You Have Successfully Applied for this Job!",
                        icon: "success"
                      });
                      navigate('/MyApplications');
                }
            })

            // TODO: Send application data to backend
            console.log('Submitting application:', applicationData);

            // Show success message
           
            
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('Failed to submit application. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Please sign in to apply</h2>
                    <Link 
                        to="/signin"
                        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-12 border border-gray-100">
                    {/* Header Section */}
                    <div className="text-center space-y-4">
                        <motion.h1 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                        >
                            Apply for {data.title}
                        </motion.h1>
                        <p className="text-gray-600 text-lg font-medium">at {data.company}</p>
                        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Application Form */}
                    <form onSubmit={SubmitJobApplication} className="space-y-10">
                        {/* Personal Information Section */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-gray-700 font-medium block">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-gray-700 font-medium block">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                                        required
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Professional Links Section */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold text-gray-800">Professional Links</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-gray-700 font-medium block">LinkedIn Profile</label>
                                    <input
                                        type="url"
                                        name="linkedin"
                                        value={formData.linkedin}
                                        onChange={handleChange}
                                        placeholder="https://linkedin.com/in/username"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-gray-700 font-medium block">Portfolio Website</label>
                                    <input
                                        type="url"
                                        name="portfolio"
                                        value={formData.portfolio}
                                        onChange={handleChange}
                                        placeholder="https://yourportfolio.com"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Documents Section */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold text-gray-800">Application Documents</h2>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-gray-700 font-medium block">Resume Link</label>
                                    <input
                                        type="url"
                                        name="resume_link"
                                        value={formData.resume_link}
                                        onChange={handleChange}
                                        placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                                        required
                                    />
                                    <p className="text-sm text-gray-500 mt-1">Please provide a link to your resume hosted online</p>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-gray-700 font-medium block">Cover Letter</label>
                                    <textarea
                                        name="coverLetter"
                                        value={formData.coverLetter}
                                        onChange={handleChange}
                                        placeholder="Tell us why you're the perfect fit for this role..."
                                        rows="6"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                                        required
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <motion.button
                                type="submit"
                                className="w-full py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-200"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Submit Application
                            </motion.button>
                            <p className="text-center text-gray-500 text-sm mt-4">
                                By submitting, you agree to our Terms of Service and Privacy Policy
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApply;
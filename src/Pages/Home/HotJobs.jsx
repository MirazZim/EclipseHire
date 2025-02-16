import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/Jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])  


    return (
        <div>
            <div className="text-center mb-12 mt-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-3">Featured Opportunities</h2>
                <p className="text-lg text-gray-600">Discover your next career move</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobs.map(job => (
                    <HotJobCard key={job._id} job={job}></HotJobCard>
                ))}
            </div>
        </div>
    );
};

export default HotJobs;
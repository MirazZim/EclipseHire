import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const applications = useLoaderData();

  const handleStatusUpdate = (e, id) => {
    const status = e.target.value;
    console.log(status, id);
    const data = {
      status: e.target.value,
    }
    
    fetch(`https://job-portal-server-kappa-two.vercel.app/Job_applications/${id}`,{
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)  
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        Swal.fire({
          title: 'Success',
          text: 'Status updated successfully',
          icon: 'success'
        })
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Status update failed',
          icon: 'error'
        })
      } 
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Applications Dashboard <span className="text-blue-600">({applications.length})</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((application, index) => (
            <div key={application._id} className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    #{index + 1}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">{application.appliedDate}</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{application.job_title}</h3>
                    <p className="text-gray-600 font-medium">{application.name}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm font-medium text-gray-600 mb-1">Contact Email</p>
                    <p className="text-gray-800">{application.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Application Status</p>
                    <select
                      onChange={(e) => handleStatusUpdate(e, application._id)}
                      defaultValue={application.Status || "Change Status"}
                      className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-200 rounded-xl 
                        shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent
                        transition-all duration-200 hover:border-blue-200"
                    >
                      <option disabled>Change Status</option>
                      <option>Under Review</option>
                      <option>Set for Interview</option>
                      <option>Hired</option>
                      <option>Rejected</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewApplications;

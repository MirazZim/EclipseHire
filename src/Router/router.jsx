import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";  
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/Addjob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Jobs/:id",
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "JobApply/:id", 
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
        
      },
      {
        path: "viewApplications/:job_id",
        element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/job_applications/jobs/${params.job_id}`),
      },
      {
        path: "addJob",
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
      },
      {
        path: "MyPostedJobs",
        element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "MyApplications",
        element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>,
      },
    ],
  },
]);

export default router;

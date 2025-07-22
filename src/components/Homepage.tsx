import React from 'react';
import { Link } from 'react-router-dom';


const Homepage: React.FC = () => {
    return (
        <div className="homepage-container">
            <div className="content">
                <h1>Welcome to ToothFixers</h1>
                <div className="description">
                    <h2>Why Choose Our Clinic DBMS?</h2>
                    <p>
                        In the fast-paced world of healthcare, efficiency and accuracy are paramount. Our Clinic DBMS is more than just a software solution; it's a comprehensive tool that enhances the quality of patient care, streamlines administrative tasks, and optimizes clinic operations. Join the growing number of healthcare providers who trust our system to keep their practices running smoothly.
                    </p>
                    <p>
                        Explore our website to learn more about how our Clinic DBMS can transform your practice. Take the first step towards a more organized, efficient, and patient-centric clinic today!
                    </p>
                    <h3>Get Started</h3>
                    <p>
                        Ready to experience the benefits of a cutting-edge Clinic DBMS? Contact us to schedule a demo, or sign up now to get started. Your path to a better-managed clinic begins here.
                    </p>
                </div>
                <div className="nav-links">
                    <Link to="/patients/create" className="nav-link">Create Patient.</Link>
                    <Link to="/patients" className="nav-link">View Patients </Link>
                    <Link to="/clinical-records/create" className="nav-link">Create Clinical Record </Link>
                    <Link to="/clinical-records" className="nav-link">View Clinical Records </Link>
                    <Link to="/patients/UpdateDelete" className="nav-link">Update/Delete Patients</Link>
                    <Link to="/patients/UpdateDeleteClinicalRecord" className="nav-link">Update or Delete Clinical reord</Link>
            </div>
                </div>
            </div>
        
    );
};

export default Homepage
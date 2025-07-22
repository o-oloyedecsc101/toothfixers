import React from 'react';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">ToothFixers</Link>
                <div className="navbar-links">
                    <Link to="/patients/create" className="nav-link">Create Patient</Link>
                    <Link to="/patients" className="nav-link">View Patients</Link>
                    <Link to="/clinical-records/create" className="nav-link">Create Clinical Record</Link>
                    <Link to="/clinical-records" className="nav-link">View Clinical Records</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

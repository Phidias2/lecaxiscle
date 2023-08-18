import { signOut, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { ref, onValue } from 'firebase/database';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [forms, setForms] = useState([])
    const [selectedForm, setSelectedForm] = useState({});


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = (form) => {
        setShow(true)
        setSelectedForm(form)
    }
    

    useEffect(() => {
        // Get a database reference to our posts
    
        onAuthStateChanged(auth, (user) => {
            if (user) {
            } else {
                navigate("/");
            }
        });
    
    }, [navigate]);
    

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
<>
    <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
            <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
                <div className="container-fluid">

                    <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>



                    <div className="navbar-user d-lg-none">
 
                        <div className="dropdown">


 
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                                <a href="#" className="dropdown-item">Profile</a>
                                <a href="#" className="dropdown-item">Settings</a>
                                <a href="#" className="dropdown-item">Billing</a>
                                <hr className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">Logout</a>
                            </div>
                        </div>
                    </div>
 
                    <div className="collapse navbar-collapse" id="sidebarCollapse">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-house"></i> Dashboard
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-bar-chart"></i> Analitycs
                                </a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-bookmarks"></i> Coupons
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-people"></i> Utilisateurs
                                </a>
                            </li>
                        </ul>

                        <hr className="navbar-divider my-5 opacity-20" />

                            <div className="mt-auto"></div>

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="bi bi-person-square"></i> Profile
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">
                                        <i className="bi bi-box-arrow-left" to="/" onClick={handleLogout}></i> Se déconnecter
                                    </Link>
                                </li>
                            </ul>
                    </div>
                </div>
            </nav>

            <div className="h-screen flex-grow-1 overflow-y-lg-auto">

                <header className="bg-surface-primary border-bottom pt-6">
                    <div className="container-fluid">
                        <div className="mb-npx">
                            <div className="row align-items-center">
                                <div className="col-sm-6 col-12 mb-4 mb-sm-0">

                                    <h1 className="h2 mb-0 ls-tight">Application</h1>
                                </div>
 

                            </div>
 
                            {/* <ul className="nav nav-tabs mt-4 overflow-x border-0">
                                <li className="nav-item ">
                                    <a href="#" className="nav-link active">All files</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link font-regular">Shared</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link font-regular">File requests</a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </header>

                <main className="py-6 bg-surface-secondary">
                    <div className="container-fluid">

                        <div className="row g-6 mb-6">
                            {/* <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card shadow border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Coupons</span>
                                                <span className="h3 font-bold mb-0">{forms.length}</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                    <i className="bi bi-credit-card"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2 mb-0 text-sm">
                                            <span className="badge badge-pill bg-soft-success text-success me-2">
                                                <i className="bi bi-arrow-up me-1"></i>13%
                                            </span>
                                            <span className="text-nowrap text-xs text-muted">Since last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card shadow border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Utilisateurs</span>
                                                <span className="h3 font-bold mb-0">215</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                                    <i className="bi bi-people"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card shadow border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total hours</span>
                                                <span className="h3 font-bold mb-0">1.400</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                                                    <i className="bi bi-clock-history"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2 mb-0 text-sm">
                                            <span className="badge badge-pill bg-soft-danger text-danger me-2">
                                                <i className="bi bi-arrow-down me-1"></i>-5%
                                            </span>
                                            <span className="text-nowrap text-xs text-muted">Since last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card shadow border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Work load</span>
                                                <span className="h3 font-bold mb-0">95%</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                                    <i className="bi bi-minecart-loaded"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2 mb-0 text-sm">
                                            <span className="badge badge-pill bg-soft-success text-success me-2">
                                                <i className="bi bi-arrow-up me-1"></i>10%
                                            </span>
                                            <span className="text-nowrap text-xs text-muted">Since last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="card shadow border-0 mb-7">
                            <div className="card-header">
                                <h5 className="mb-0">Applications</h5>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover table-nowrap">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Pays</th>
                                            <th scope="col">email</th>
                                            <th scope="col">Statut</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                    <span className="text-heading font-semibold">
                                                        Robert Fox
                                                    </span>
                                            </td>
                                            <td>
                                                Feb 15, 2021
                                            </td>
                                            <td>
                                                Benin
                                            </td>
                                            <td>
                                                $3.500
                                            </td>
                                            <td>
                                                <span className="badge badge-lg badge-dot">
                                                    <i className="bg-success"></i>Scheduled
                                                </span>
                                            </td>
                                            <td className="text-end">
                                                <a href="#" className="btn btn-sm btn-neutral">View</a>
                                                <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer border-0 py-5">
                                <span className="text-muted text-sm">Showing 10 items out of 250 results found</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        </>
        )
}
export default Dashboard

import { signOut, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { ref, onValue } from 'firebase/database';
import { useNavigate, Link } from 'react-router-dom';

const DashboardCoupon = () => {
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
        const couponsRef = ref(db, 'coupons/');

        onValue(couponsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const formsArray = Object.values(data);
                setForms(formsArray);
                console.log(data);
            }
        });

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

                                <Link to="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="avatar-parent-child">
                                        <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar- rounded-circle" />
                                        <span className="avatar-child avatar-badge bg-success"></span>
                                    </div>
                                </Link>

                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                                    <Link to="#" className="dropdown-item">Profile</Link>
                                    <Link to="#" className="dropdown-item">Settings</Link>
                                    <Link to="#" className="dropdown-item">Billing</Link>
                                    <hr className="dropdown-divider" />
                                    <Link to="#" className="dropdown-item">Logout</Link>
                                </div>
                            </div>
                        </div>

                        <div className="collapse navbar-collapse" id="sidebarCollapse">

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        <i className="bi bi-house"></i> Dashboard
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    <i className="bi bi-bar-chart"></i> Analitycs
                                </Link>
                            </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        <i className="bi bi-bookmarks"></i> Coupons
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        <i className="bi bi-people"></i> Utilisateurs
                                    </Link>
                                </li>
                            </ul>

                            <hr className="navbar-divider my-5 opacity-20" />

                            <div className="mt-auto"></div>

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        <i className="bi bi-person-square"></i> Profile
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
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

                                    <div className="col-sm-6 col-12 text-sm-end">
                                        <div className="mx-n1">
                                            <Link to="/admin/coupon/create" className="btn d-inline-flex btn-sm btn-primary mx-1">
                                                <span className=" pe-2">
                                                    <i className="bi bi-plus"></i>
                                                </span>
                                                <span>Creer un coupon</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <main className="py-6 bg-surface-secondary">
                        <div className="container-fluid">

                            <div className="row g-6 mb-6">
                                <div className="col-xl-3 col-sm-6 col-12">
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
                                            {/* <div className="mt-2 mb-0 text-sm">
                                            <span className="badge badge-pill bg-soft-success text-success me-2">
                                                <i className="bi bi-arrow-up me-1"></i>13%
                                            </span>
                                            <span className="text-nowrap text-xs text-muted">Since last month</span>
                                        </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow border-0 mb-7">
                                <div className="card-header">
                                    <h5 className="mb-0">Applications</h5>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover table-nowrap">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col">Coupon</th>
                                                <th scope="col">Cote</th>
                                                <th scope="col">Code</th>
                                                <th scope="col">Fiabilite</th>
                                                <th scope="col">Statut</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                forms.map(coupon => (
                                                    <tr>
                                                        <td>
                                                            <img alt="..." src={coupon.image} width={50} height={100} />
                                                        </td>
                                                        <td>
                                                            {coupon.cote}
                                                        </td>
                                                        <td>
                                                        {coupon.code}
                                                        </td>
                                                        <td>
                                                        {coupon.fiabilite}
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-lg badge-dot">
                                                                <i className="bg-success"></i>
                                                            </span>
                                                        </td>
                                                        <td className="text-end">
                                                            <Link to="#" className="btn btn-sm btn-neutral">Voir</Link>
                                                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                                <i className="bi bi-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }

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
export default DashboardCoupon

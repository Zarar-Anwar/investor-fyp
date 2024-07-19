import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Store } from "../../../Services/Store"
import logo from '../../../footer-logo.png'


const Header = () => {
    const {state,dispatch} = useContext(Store)
    const {UserInfo} = state
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('UserInfo');
        dispatch({ type: 'ClearUserInfo', payload: null })
        navigate('/login');
        window.location.reload()
    };
    return (
        <>
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        {/* LOGO */}
                        <div className="navbar-brand-box">
                           
                            <Link to="/" className="logo logo-light">
                                {/* <span className="logo-sm"> */}
                                    <img src={logo} alt="img" height={20} />
                                {/* </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo-light.svg" alt="imh" height={19} />
                                </span> */}
                           </Link>
                        </div>
                        <button
                            type="button"
                            className="btn btn-sm px-3 font-size-16 header-item waves-effect"
                            id="vertical-menu-btn"
                        >
                            <i className="fa fa-fw fa-bars" />
                        </button>
                        {/* App Search*/}
                       
                       

                    </div>
                    <div className="d-flex">
                        <div className="dropdown d-inline-block d-lg-none ms-2">
                            <button
                                type="button"
                                className="btn header-item noti-icon waves-effect"
                                id="page-header-search-dropdown"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <i className="mdi mdi-magnify" />
                            </button>
                            <div
                                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                aria-labelledby="page-header-search-dropdown"
                            >
                                <form className="p-3">
                                    <div className="form-group m-0">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search ..."
                                                aria-label="Recipient's username"
                                            />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="submit">
                                                    <i className="mdi mdi-magnify" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    
                        <div className="dropdown d-inline-block">
                            <button
                                type="button"
                                className="btn header-item waves-effect"
                                id="page-header-user-dropdown"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <img
                                    className="rounded-circle header-profile-user"
                                    src="assets/images/users/avatar-1.jpg"
                                    alt="Header Avatar"
                                />
                                <span className="d-none d-xl-inline-block ms-1" key="t-henry">
                                    {UserInfo.name}
                                </span>
                                <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                {/* item*/}
                                <Link className="dropdown-item" to="/admin/dashboard">
                                    <i className="bx bx-user font-size-16 align-middle me-1" />{" "}
                                    <span key="t-profile">Profile</span>
                                </Link>
                               
                                <div className="dropdown-divider" />
                                <Link className="dropdown-item text-danger" onClick={handleLogout}>
                                    <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />{" "}
                                    <span key="/logout">Logout</span>
                                </Link>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header
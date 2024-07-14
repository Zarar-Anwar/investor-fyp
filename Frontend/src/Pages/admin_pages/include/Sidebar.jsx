import { Link, useNavigate } from "react-router-dom";
import { Store } from "../../../Services/Store";
import { useContext } from "react";

const Sidebar = () => {
    const { state, dispatch } = useContext(Store)
    const { UserInfo } = state
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('UserInfo');
        dispatch({ type: 'ClearUserInfo', payload: null })
        navigate('/login');
        window.location.reload()
    };
    return (
        <>
            <div className="vertical-menu">
                <div data-simplebar="init" className="h-100">
                    <div className="simplebar-wrapper" style={{ margin: 0 }}>
                        <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer" />
                        </div>
                        <div className="simplebar-mask">
                            <div className="simplebar-offset" style={{ right: "-17px", bottom: 0 }}>
                                <div
                                    className="simplebar-content-wrapper"
                                    style={{ height: "100%", overflow: "hidden scroll" }}
                                >
                                    <div className="simplebar-content" style={{ padding: 0 }}>
                                        {/*- Sidemenu */}
                                        <div id="sidebar-menu" className="mm-active">
                                        <p className="mb-2 ml-4"><b>{UserInfo.category.toUpperCase()} DASHBOARD</b></p>
                                            {/* {UserInfo.category == "skilled_person" ? */}
                                            {UserInfo.category == "skilled" ?
                                                <ul className="metismenu list-unstyled mm-show" id="side-menu">
                                                    <li className='menu-title' id='key-menu'>
                                                        Sidebar
                                                    </li>
                                                    <li>
                                                        <Link to="/admin/dashboard" className="waves-effect">
                                                            <i className="bx bx-home" />
                                                            <span key="t-chat">Profile</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/admin/gigs" className="waves-effect">
                                                            <i className="bx bx-bulb" />
                                                            <span key="t-chat">My Gigs</span>
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link to="/admin/add/gigs" className="waves-effect">
                                                            <i className="bx bx-file" />
                                                            <span key="t-chat">Upload Gigs</span>
                                                        </Link>
                                                    </li>

                                                    <li onClick={handleLogout}>
                                                        <Link className="waves-effect">
                                                            <i className="bx bx-power-off" />
                                                            <span key="t-chat">Logout</span>
                                                        </Link>
                                                    </li>
                                                </ul> : UserInfo.category == "entrepreneur" ?

                                                    <ul className="metismenu list-unstyled mm-show" id="side-menu">
                                                        <li className='menu-title' id='key-menu'>
                                                            Sidebar
                                                        </li>
                                                        <li>
                                                            <Link to="/admin/dashboard" className="waves-effect">
                                                                <i className="bx bx-home" />
                                                                <span key="t-chat">Profile</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/admin/ideas" className="waves-effect">
                                                                <i className="bx bx-bulb" />
                                                                <span key="t-chat">My Ideas</span>
                                                            </Link>
                                                        </li>

                                                        <li>
                                                            <Link to="/admin/skilled_person" className="waves-effect">
                                                                <i className="bx bx-file" />
                                                                <span key="t-chat">Skilled Person</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/admin/contracts" className="waves-effect">
                                                                <i className="bx bx-book" />
                                                                <span key="t-chat">Contracts</span>
                                                            </Link>
                                                        </li>
                                                        <li onClick={handleLogout}>
                                                            <Link className="waves-effect">
                                                                <i className="bx bx-power-off" />
                                                                <span key="t-chat">Logout</span>
                                                            </Link>
                                                        </li>
                                                    </ul> : UserInfo.is_admin ?
                                                        <ul className="metismenu list-unstyled mm-show" id="side-menu">
                                                            <li className='menu-title' id='key-menu'>
                                                                Sidebar
                                                            </li>
                                                            <li>
                                                                <Link to="/admin/dashboard" className="waves-effect">
                                                                    <i className="bx bx-home" />
                                                                    <span key="t-chat">Profile</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/admin/all/investor" className="waves-effect">
                                                                    <i className="bx bx-bulb" />
                                                                    <span key="t-chat">Investor</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/admin/all/enterprenuer" className="waves-effect">
                                                                    <i className="bx bx-book" />
                                                                    <span key="t-chat">Enterprenuer</span>
                                                                </Link>
                                                            </li>

                                                            <li>
                                                                <Link to="/admin/all/Skilled_Person" className="waves-effect">
                                                                    <i className="bx bx-book" />
                                                                    <span key="t-chat">Skilled_person</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/admin/all/ideas" className="waves-effect">
                                                                    <i className="bx bx-book" />
                                                                    <span key="t-chat">Ideas</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/admin/all/contracts" className="waves-effect">
                                                                    <i className="bx bx-book" />
                                                                    <span key="t-chat">Contract</span>
                                                                </Link>
                                                            </li>
                                                            <li onClick={handleLogout}>
                                                                <Link className="waves-effect">
                                                                    <i className="bx bx-power-off" />
                                                                    <span key="t-chat">Logout</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        :

                                                        <ul className="metismenu list-unstyled mm-show" id="side-menu">
                                                            <li className='menu-title' id='key-menu'>
                                                                Sidebar
                                                            </li>
                                                            <li>
                                                                <Link to="/admin/dashboard" className="waves-effect">
                                                                    <i className="bx bx-home" />
                                                                    <span key="t-chat">Profile</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/admin/all/ideas" className="waves-effect">
                                                                    <i className="bx bx-bulb" />
                                                                    <span key="t-chat">Ideas</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/admin/contracts" className="waves-effect">
                                                                    <i className="bx bx-book" />
                                                                    <span key="t-chat">Contracts</span>
                                                                </Link>
                                                            </li>
                                                            <li onClick={handleLogout}>
                                                                <Link className="waves-effect">
                                                                    <i className="bx bx-power-off" />
                                                                    <span key="t-chat">Logout</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                            }

                                        </div>
                                        {/* Sidebar */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="simplebar-placeholder"
                            style={{ width: "auto", height: 1237 }}
                        />
                    </div>
                    <div
                        className="simplebar-track simplebar-horizontal"
                        style={{ visibility: "hidden" }}
                    >
                        <div
                            className="simplebar-scrollbar"
                            style={{ transform: "translate3d(0px, 0px, 0px)", display: "none" }}
                        />
                    </div>
                    <div
                        className="simplebar-track simplebar-vertical"
                        style={{ visibility: "visible" }}
                    >
                        <div
                            className="simplebar-scrollbar"
                            style={{
                                height: 618,
                                transform: "translate3d(0px, 0px, 0px)",
                                display: "block"
                            }}
                        />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Sidebar
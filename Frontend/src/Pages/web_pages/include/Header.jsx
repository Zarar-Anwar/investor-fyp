import { useContext } from "react"
import { Link } from "react-router-dom"
import { Store } from '../../../Services/Store'
const Header = ({ header }) => {
    const { state } = useContext(Store)
    const { UserInfo } = state
    return (
        <>
            <div id="hw-hero">
                <div className="header header1">
                    {/* TOP BAR */}
                    <div className="topbar">
                        <div className="row">
                            <div className="col-sm-6">
                                <ul className="phone">
                                    <li>
                                        <span className="typcn typcn-phone-outline" /> 800.1148.800
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fa fa-facebook" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fa fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fa fa-linkedin" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    {/* END OF TOP BAR */}
                    {/* SEARCH FORM */}
                    <div id="search">
                        <button type="button" className="close">
                            ×
                        </button>
                        <form>
                            <span>Type and Press enter</span>
                            <input type="search" defaultValue="" placeholder="" />
                        </form>
                    </div>
                    {/* END OF SEARCH FORM */}
                    {/* LOGO & NAVIGATION */}
                    <div className="header-navigation">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="logonav">
                                    <div className="row no-gutter">
                                        <div className="col-sm-3">
                                            <div className="logo">
                                                <Link to="index.html">
                                                    <img src="images/logo.png" alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-sm-9">
                                            <nav id="desktop-menu">
                                                <ul
                                                    className="sf-menu sf-js-enabled sf-arrows"
                                                    id="navigation"
                                                    style={{ touchAction: "pan-y" }}
                                                >
                                                    <li>
                                                        <Link to="/">Home</Link>
                                                    </li> <li>
                                                        <Link to="/services">Services</Link>
                                                    </li><li>
                                                        <Link to="/about">About</Link>
                                                    </li>

                                                    {UserInfo ?
                                                        <li>
                                                            <Link to="/admin/dashboard">Dashboard</Link>
                                                        </li> : <>
                                                            <li>
                                                                <Link to="/login">Login</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/signup">Signup</Link>
                                                            </li>
                                                        </>}
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END OF LOGO & NAVIGATION */}
                </div>
                {/* SLIDER */}
                <div id="page-header" class="about2">
                    <div class="title-breadcrumbs">
                        <h1>{header}</h1>
                        <div class="thebreadcumb">
                            <ul class="breadcrumb">
                            </ul>
                        </div>
                    </div>

                </div>
                {/* END OF SLIDER */}
            </div>


        </>
    )
}

export default Header
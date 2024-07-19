import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <section className="footer" >
                <div className="footer-elements">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row no-gutter">

                                {/* FOOTER TOP ELEMENT */}
                                <div className="col-sm-4">
                                    <div className="footer-element">
                                        <span className="typcn typcn-location-outline" />
                                        <p>
                                            4771 WEST FIELD MINT,<span>SALT LAKE CITY, UT 72883</span>
                                        </p>
                                    </div>
                                </div>
                                {/* FOOTER TOP ELEMENT */}
                                {/* FOOTER TOP ELEMENT */}
                                <div className="col-sm-4">
                                    <div className="footer-element">
                                        <span className="typcn typcn-mail" />
                                        <p>
                                            E-MAIL:
                                            <span>
                                                <a href="#">INFO@GOODGROWTH.COM</a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                {/* FOOTER TOP ELEMENT */}
                                {/* FOOTER TOP ELEMENT */}
                                <div className="col-sm-4">
                                    <div className="footer-element">
                                        <span className="typcn typcn-phone-outline" />
                                        <p>
                                            CALL US:<span>800.1148.800</span>
                                        </p>
                                    </div>
                                </div>
                                {/* FOOTER TOP ELEMENT */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-widgets" style={{backgroundColor:'#666',marginTop:"50px"}}>
                    <div className="row">
                        {/* FOOTER WIDGET */}
                        <div className="col-sm-6">
                            <div className="footer-widget mb-5">
                                <div className="small-logo">
                                    <img src="images/footer-logo.png" alt="" />
                                </div>
                                <p>
  Efficiently enable valuable resources and cost-effective solutions. 
  We synthesize principle-centered information to foster ethical communities 
  and drive sustainable growth.
</p>

                                <ul className="social-links">
                                    <li>
                                        <a href="#" title="Twitter">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Facebook">
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Linkedin">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Pinterest">
                                            <i className="fa fa-pinterest-p" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* END FOOTER WIDGET */}
                        {/* FOOTER WIDGET */}
                    
                        {/* END FOOTER WIDGET */}
                        {/* FOOTER WIDGET */}
                        <div className="col-sm-6">
                            <div className="footer-widget">
                                <h5>LINKS</h5>
                                <ul className="posts">
                                    <li>
                                        <Link to="/">HOME</Link>
                                    </li>
                                    <li>
                                        <Link to="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        {/* END FOOTER WIDGET */}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
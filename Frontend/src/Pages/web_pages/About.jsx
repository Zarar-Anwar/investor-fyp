const About = () => {
    return (
        <>

            <section className="introtext">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>
                            SPECIALIZING IN <span>PERSONALIZED</span> INVESTMENT
                        </h2>
                        <p className="text-center">
                            Join BPC Portal for personalized investment solutions tailored to your needs.
                            Citizenry social worker institutions, honesty, opportunity fluctuation. Transform,
                            social analysis, developing, dedicated countries.
                        </p>

                    </div>
                </div>
                <div className="spacing-65" />
                {/* VIDEO BACKGROUND */}
                <div className="row custom-width-90">
                    <div className="col-sm-12">
                        <div id="about2-video">
                            <div className="about2-video-container">
                                <div className="videocaption">
                                    <div
                                        className="videocaption-content  wow fadeIn"
                                        data-wow-duration="500ms"
                                        data-wow-delay="200ms"
                                        style={{ visibility: "visible" }}
                                    >
                                        <h2>SERVICES FOR INDIVIDUALS &amp; INSTITUTIONS</h2>
                                        <hr className="small" />
                                        <p>
                                            Join BPC Portal for services tailored to individuals and institutions seeking efficient market-driven innovation. Seamlessly engage high-payoff infomediaries rather than client-centric imperatives.
                                        </p>

                                    </div>
                                </div>
                                <video
                                    autoPlay=""
                                    loop=""
                                    muted=""
                                    poster="images/video-poster.jpg"
                                    className="hidden-xs"
                                >
                                    <source src="video/video2.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END OF VIDEO BACKGROUND */}
            </section>


            <section className="about2-team">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>
                            MEET <span>OUR TEAM</span>
                        </h2>
                        <p className="text-center">
                            Objectively innovate empowered manufactured products while dominating extensible testing procedures for reliable supply chains. Engage top-line web services with cutting-edge deliverables and envision proactive multimedia-based expertise.
                        </p>

                        <div className="block-grid-md-3 block-grid-sm-2 block-grid-xs-1 team2-grid">
                            {/* TEAM 1 */}
                            <div
                                className="block-grid-item black wow fadeInUp"
                                data-wow-duration="500ms"
                                data-wow-delay="100ms"
                                style={{ visibility: "visible" }}
                            >
                                <div className="shadow-effect">
                                    <img src="images/team2-1.jpg" alt="" />
                                    <div className="team-details">
                                        <h3>DAVID MONREAL</h3>
                                        <h6>CEO</h6>
                                        <p>
                                            Rapaciously seize adaptive infomediaries and user-centric
                                            intellectual capital. Collaboratively unleash market-driven.
                                        </p>
                                        <ul className="team-social-links">
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
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* END OF TEAM 1 */}
                            {/* TEAM 2 */}
                            <div
                                className="block-grid-item black wow fadeInUp"
                                data-wow-duration="500ms"
                                data-wow-delay="200ms"
                                style={{ visibility: "visible" }}
                            >
                                <div className="shadow-effect">
                                    <img src="images/team2-2.jpg" alt="" />
                                    <div className="team-details">
                                        <h3>ANGELA FERNANDEZ</h3>
                                        <h6>STRATEGY</h6>
                                        <p>
                                            Rapaciously seize adaptive infomediaries and user-centric
                                            intellectual capital. Collaboratively unleash market-driven.
                                        </p>
                                        <ul className="team-social-links">
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
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* END OF TEAM 2 */}
                            {/* TEAM 3 */}
                            <div
                                className="block-grid-item black wow fadeInUp"
                                data-wow-duration="500ms"
                                data-wow-delay="300ms"
                                style={{ visibility: "visible" }}
                            >
                                <div className="shadow-effect">
                                    <img src="images/team2-3.jpg" alt="" />
                                    <div className="team-details">
                                        <h3>MATIAS VALERO</h3>
                                        <h6>GENERAL COUNSEL</h6>
                                        <p>
                                            Rapaciously seize adaptive infomediaries and user-centric
                                            intellectual capital. Collaboratively unleash market-driven.
                                        </p>
                                        <ul className="team-social-links">
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
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* END OF TEAM 3 */}

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
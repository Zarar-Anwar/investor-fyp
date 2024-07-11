import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>


      <section className="introtext">
        <div className="row">
          <div className="col-sm-12">
            <>
              <>
                <h2>
                  HOW CAN AN <span>ACCOUNTANT</span> HELP YOU?
                </h2>
                <p className="text-center">
                  Discover unique opportunities with an accountant's expertise. Navigate
                  through exclusive investment prospects and innovative business concepts.
                  Seamlessly connect with partners and maximize your ventures with confidence
                  and ease. Enhance your financial portfolio effortlessly.

                  Leverage the power of strategic financial planning. Accountants can help you
                  dive into a network of potential investors and skilled professionals. Share
                  your visionary business ideas and thorough market research. Elevate your
                  entrepreneurial journey with professional financial guidance.

                  Partner with an accountant to unlock new opportunities. Connect with
                  entrepreneurs and investors seeking financial expertise. Seamlessly showcase
                  your skills and talents, and take the next step in your professional
                  journey. Achieve your business goals with the support of an accountant
                  today.
                </p>
              </>

            </>

          </div>
        </div>
        <div className="row spacing-45">
          <div className="col-sm-12">
            <div className="block-grid-sm-4 block-grid-xs-1">
              <div className='row'>
                <div className='col-lg-4'>
                  {/* FEATURE 1 */}
                  <div
                    className="block-grid-item wow fadeInLeft"
                    data-wow-duration="300ms"
                    data-wow-delay="300ms"
                    style={{ visibility: "visible" }}
                  >
                    <div className="shadow-effect">
                      <span className="typcn typcn-chart-area-outline" />
                      <h3>INVESTOR</h3>
                      <p>
                        Explore exclusive investment
                        prospects through BPC Portal. Dive
                        into a diverse array of visionary
                        entrepreneurs and cutting-edge
                        business concepts. Seamlessly
                        connect with potential partners and
                        seize lucrative ventures. Elevate your
                        investment portfolio effortlessly with
                        confidence and convenience.
                      </p>
                      {/* <a className="btn btn-default" href="#" role="button">
                        Read More
                      </a> */}
                    </div>
                  </div>
                  {/* END OF FEATURE 1 */}
                </div>
                <div className='col-lg-4'>
                  {/* FEATURE 2 */}
                  <div
                    className="block-grid-item wow fadeInLeft"
                    data-wow-duration="500ms"
                    data-wow-delay="400ms"
                    style={{ visibility: "visible" }}
                  >
                    <div className="shadow-effect">
                      <span className="typcn typcn-chart-bar" />
                      <h3>ENTREPRENEUR</h3>
                      <p>
                        Harness the power of innovation with
                        BPC Portal for entrepreneurs. Dive
                        into a dynamic network of potential
                        investors and skilled professionals.
                        Seamlessly share your
                        groundbreaking business ideas and
                        market research. Take your
                        entrepreneurial journey to new
                        heights with BPC Portal by your side.
                      </p>

                    </div>
                  </div>
                  {/* END OF FEATURE 2 */}</div>
                <div className='col-lg-4'>   {/* FEATURE 3 */}
                  <div
                    className="block-grid-item wow fadeInRight"
                    data-wow-duration="600ms"
                    data-wow-delay="600ms"
                    style={{ visibility: "visible" }}
                  >
                    <div className="shadow-effect">
                      <span className="typcn typcn-chart-line-outline" />
                      <h3>SKILLED PERSON</h3>
                      <p>
                        Join BPC Portal as a skilled individual
                        and unlock new opportunities.
                        Connect with entrepreneurs and
                        investors seeking your expertise.
                        Seamlessly showcase your skills and
                        talents on our platform. Take the next
                        step in your professional journey with
                        BPC Portal today.
                      </p>
                    </div>
                  </div>
                  {/* END OF FEATURE 3 */}</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="aboutus">
        <div className="row">
          <div
            className="col-sm-8 col-md-6 wow fadeInLeft"
            data-wow-duration="600ms"
            data-wow-delay="600ms"
            style={{ visibility: "visible" }}
          >
            <hr className="small" />
            <h2>
              A FEW <span>DETAILS</span> ABOUT US
            </h2>
            <h4>Empowering Your Financial Journey</h4>
            <p>
              Discover exclusive investment prospects and innovative business concepts with our expert guidance. Seamlessly connect with visionary entrepreneurs and skilled professionals. We provide the support you need to elevate your financial portfolio effortlessly and confidently.
            </p>
            <p>
              Our platform allows you to harness the power of innovation, enabling entrepreneurs to share groundbreaking business ideas and thorough market research. Join our dynamic network and take your entrepreneurial journey to new heights with our professional financial guidance.
            </p>
            <p>
              Whether you're an investor, entrepreneur, or skilled professional, our platform offers unparalleled opportunities. Connect with potential partners and showcase your expertise. Achieve your business goals with confidence and convenience, supported by our dedicated team.
            </p>
            <Link className="btn btn-default" to="/about" role="button">
              Read more about us
            </Link>
          </div>
          <div className="col-sm-4 col-md-6"></div>
        </div>
      </section>


      <section className="numbers">
        <div className="row">
          <div className="col-sm-4 col-md-6"></div>
          <div className="col-sm-8 col-md-6">
            <h2>
              THE MOST <span>COST-EFFECTIVE</span> FINANCE SOLUTION
            </h2>
            <div
              className="row no-gutter wow fadeInUp"
              data-wow-duration="600ms"
              data-wow-delay="600ms"
              style={{ visibility: "visible" }}
            >
              <div className="col-sm-9">
                <div className="numbersbox">
                  <h4>PROMPT AND ACCURATE VALUATIONS</h4>
                  <hr className="small" />
                  <p>
                    Experience the synergy of advanced financial technologies. Deploy strategic networks with ease and confidence. Our platform offers prompt and accurate valuations to ensure your financial decisions are well-informed and effective.
                  </p>
                  <p>
                    Exploit optimal alignments for enhanced financial bandwidth. Coordinate quickly and efficiently to achieve your financial goals. Trust in our expertise to provide highly efficient solutions tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home

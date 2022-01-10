import Link from 'next/link';

function AboutUs() {
    return (
      <>  
          <section className="content-inner">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/about/img4.png" className="move-1" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h6 className="sub-title bgl-primary m-b20 text-primary">About Us</h6>
                              <h2 className="title">How We Can Help You Achieve Your Business Goal</h2>
                          </div>
                          <p>We are coming out with an unfailing strategy to achieve those targets. Out social media experts share your dreams, limitations, and nature of the brand and they come up with the best possible media buying option and advertising strategy. In your success and achieving targets lies our success.</p>
                          <p className="m-b30">Interested? Get your free proposal on how we can help you on social media marketing.</p>
                          {/* <img src="images/sign.png" alt=""/>
                          <h4 className="m-b30">CEO Jhone Doe</h4> */}
                         <Link href="about-us-2"><a  className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Learn More</a></Link> 
                      </div>
                  </div>
              </div>
          </section>
      </>
    )
  }
  
  export default AboutUs;
import Link from "next/link";

function AboutUs_2({ourVision}) {
    return (
      <>
        {/* <!-- About us --> */}
		<section className="content-inner about-wraper-1" style={{"backgroundImage":"url(images/background/bg15.png)","backgroundSize":"contain","backgroundPosition":"center right","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media left">
							<img src="images/about/pic1.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-3">
							<h6 className="sub-title text-primary bgl-primary m-b15">{ourVision}</h6>
							<h2 className="title m-b20">We Have Creative Team To Build Your Website Better</h2>
							<p>We Communicate with advertising agencies and media owners to develop media strategies & get details of media places from advertising agencies to plane or nest ad places.</p>
						</div>
						<ul className="list-check primary m-b30">
							<li>From Design to finish product.</li>
							<li>Unlimited Revision.</li>
							<li>Modern Point of view and work with any budget.</li>
							<li>We will plan to make your goal unique.</li>
						</ul>
						<Link href="/about-us-2"><a className="btn btn-primary rounded-xl gradient">Learn More</a></Link>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default AboutUs_2;
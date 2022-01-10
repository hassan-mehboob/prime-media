import { useState } from "react";

function OurServices2() {
    const [open, setOpen] = useState("p2")
    return (
      <>
      
		{/* <!-- Services --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg2.png)","backgroundSize":"contain","backgroundPosition":"center","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-3 mb-4">
							<h6 className="sub-title text-primary bgl-primary m-b15">OUR SERVICES</h6>
							<h2 className="title">Behind The Story Of Prime Media Digital Agency</h2>
						</div>
						<p>We Communicate with advertising agencies and media owners to develop media strategies & get details of media places from advertising agencies to plane or nest ad places.</p>
						<p>Our vision is to provide solutions in social media in Pakistan, TVC Productions, Creative and Marketing by adopting creative and unique approach.</p>
						<p className="m-b30">Our vision is to create a better every-day life for many people.With energy, pride and speed, we active talk with our clients to deliver our services.</p>
					</div>
					<div className="col-lg-7">
					<div className={`${open === "p1" ? "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight active" : "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx-sm radius"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-idea"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Idea &amp; Analysis Gathering</h4>
								<p>Step 1: In this step we gather the idea related our work and make some research</p>
							</div>
						</div>
						<div className={`${open === "p2" ? "icon-bx-wraper style-3 left box-hover m-l100 m-b30 wow fadeInRight active" : "icon-bx-wraper style-3 left box-hover m-l100 m-b30 wow fadeInRight"}`} onMouseOver={() => setOpen("p2")}>
							<div className="icon-bx-sm radius"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-coding"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Design &amp; Developing</h4>
								<p>Step 2: In the second step we converts idea into a beautiful desigin and also make complete development of your project.</p>
							</div>
						</div>
						<div className={`${open === "p3" ? "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight active" : "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx-sm radius"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-rocket"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Testing &amp; Lunching</h4>
								<p>Step 3: Last step is testing and launching. In this step first we test you product after passing all the tests then we launch your app or website.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
    )
  }
  
  export default OurServices2;
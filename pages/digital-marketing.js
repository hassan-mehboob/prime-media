import Footer2 from '../layout/footer-2';
import Header2 from '../layout/header-2';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import ClientSlider from '../component/clientSlider';
import AllServices2 from '../element/all-services-2';
import Testimonial2 from '../element/testimonial-2';
import Link from 'next/link';


function digitalMarketing() {
	const [isOpen, setOpen] = useState(false)
	const [open, setOpens] = useState("p2")
  return (
    <>
    <Header2/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Digital Marketing</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Digital Marketing</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Services Details --> */}
		<section className="content-inner-2">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="dlab-media m-b30 rounded-md">
							<img src="images/blog/default/thum2.jpg" alt=""/>
						</div>
						<div className="dlab-content">
							<div className="m-b40">
								<h3>Digital Marketing</h3>
								<h4>We always do research on your brand and then come up with some of the best marketing tactics for you.</h4>
								<p>We will love to hear from you and we want your thinking that how you want to see your products and services in the next 20 years. All the trends of the markets are changing with every passing day. We are working on the brand new ideas of marketing because we know how to set the newer trends in the market for the better sale and for the bright future of our clients. We have one of the professional team in digital media in Pakistan. They can take responsibility for the work. They are efficient and always meet the deadlines which were settled in the first meeting with customers. We hate to drag things out to a long time and never even work for the extra-large time span. We love to have your ideas in the marketing campaigns. We always ask for your recommendations and work according to that.</p>
							</div>
							<div className="row align-items-center m-b30">
								<div className="col-lg-6 m-b30">
									<h3>Traditional ways of Marketing Vs Digital media marketing:</h3>
									<p>We offer digital media marketing solutions to our clients and tell them that how this is better now to do digital media marketing. Traditional ways of marketing were costly and time taking but the digital media marketing is very easy and consumes the lesser time of the client. Now we are living in modern age so the traditional way of market product will never work for longer for a product so you can have both or focused digital media Every bigger brand is doing both traditional and digital media marketing because they know how to grab all the audience in order to get more value of the product. We are offering customized packages for social media marketing. You will be charged for what we are doing for you. We have almost every solution of marketing on digital media but the choice is yours that what you want to see.</p>
									{/* <ul className="list-arrow primary">
										<li>Lorem Ipsum is simply dummy text of the printing.</li>
										<li>Lorem Ipsum has been the industry's standard dummy text ever.</li>
										<li>when an unknown printer took a galley of type and scrambled.</li>
										<li>It has survived not only five centuries, but also the leap.</li>
										<li>Recently with desktop publishing software like Aldus PageMaker.</li>
										<li>Lorem Ipsum is simply dummy text of the printing industry.</li>
									</ul> */}
								</div>
								<div className="col-lg-6">
									<div className="progress-bx overflow-hidden mb-3">
										<div className="progress-info">
											<span className="title">SEO</span>
											<span className="progress-value">80%</span>
										</div>
										<div className="progress mb-3">
											<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width":"80%"}}></div>
										</div>
									</div>
									<div className="progress-bx overflow-hidden mb-3">
										<div className="progress-info">
											<span className="title">Facebook Marketing</span>
											<span className="progress-value">90%</span>
										</div>
										<div className="progress mb-3">
											<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width":"90%"}}></div>
										</div>
									</div>
									<div className="progress-bx overflow-hidden mb-3">
										<div className="progress-info">
											<span className="title">Instagram Marketing</span>
											<span className="progress-value">85%</span>
										</div>
										<div className="progress mb-3">
											<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width":"85%"}}></div>
										</div>
									</div>
									<div className="progress-bx overflow-hidden">
										<div className="progress-info">
											<span className="title">YouTube Marketing</span>
											<span className="progress-value">70%</span>
										</div>
										<div className="progress mb-3">
											<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width":"70%"}}></div>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- Video --> */}
							<div className="row">
								<div className="col-lg-12">
									<div className="video-bx style-1 overlay-black-light">
										<img src="images/video/pic1.jpg" alt=""/>
										<div className="video-btn">
										<a href="#" className="popup-youtube" onClick={()=> setOpen(true)}><i className="flaticon-play"></i></a>
											<h2 className="title">Watch US</h2>
										</div>
										<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="UpolBSznWp0" onClose={() => setOpen(false)} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		{/* <!-- Service --> */}
		{/* <AllServices2/> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg2.png)"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
						<div className={`${open === "p1" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpens("p1")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-office"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Strategy & Research</h4>
								<p>Before starting any project startegy and research is the important thing to do. Without this we cant't grab audience in your project.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className={`${open === "p2" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpens("p2")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-website"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">24X7 Support</h4>
								<p>We are 24*7 available for providing you support for your every digital marketing related problem. If you face any issue feel free to contact us.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
						<div className={`${open === "p3" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpens("p3")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-pie-charts"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">SEO</h4>
								<p>Search Engine Optimization of the website is very essential to keep the website alive and to have ever increasing clients and increased sales.</p>
							</div>
						</div>
					</div>
					{/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className={`${open === "p4" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p4")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-dollar"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Web Solution</h4>
								<p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis venenatis.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
						<div className={`${open === "p5" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p5")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-line-graph"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">SEO & Marketing</h4>
								<p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis venenatis.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p6" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-help"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Growth Tracking</h4>
								<p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis venenatis.</p>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</section>
		{/* <!-- Testimonials --> */}
		{/* <Testimonial2/> */}
		
		{/* <!-- Clients Logo --> */}
		<div className="content-inner-3 bg-white">
			<div className="container">
				<div className="clients-carousel owl-none m-b30 owl-carousel">
					<ClientSlider/>
				</div>
			</div>
		</div>
		
	</div>
     <Footer2/>
    </>
  )
}

export default digitalMarketing;
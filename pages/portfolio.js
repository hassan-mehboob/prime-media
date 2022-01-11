import Footer2 from '../layout/footer-2';
import Header2 from '../layout/header-2';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import ClientSlider from '../component/clientSlider';
import Projects2 from "../element/Projects-2";
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
					<h1>Portfolio</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Portfolio</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		<Projects2 />
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
import Link from 'next/link';
import { useState } from 'react';
function Header2() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    return (
        <>
            <header className="site-header mo-left header-transparent">
                <div className="container">
                    <div className="top-bar">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="dlab-topbar-left">
                                <ul>
                                    <li>
                                        <i className="la la-envelope"></i>{" "}
                                        info@primemedia.pk
                                    </li>
                                    <li>
                                        <i className="la la-phone-volume"></i> +92
                                        42 3 578 1788                                        
                                    </li>
                                    <li>
                                        <i className="la la-phone   "></i> +92
                                        321 888 3377 (Whatsapp)                                       
                                    </li>
                                </ul>                                
                            </div>
                            <div className="dlab-topbar-right">
                                <ul className="dlab-social-icon">
                                    <li>
                                        <a
                                            className="fa fa-google-plus"
                                            href="https://www.facebook.com/MediaBuyingAdvertisingAgencyinLahorePakistan/"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-facebook"
                                            href="https://www.facebook.com/MediaBuyingAdvertisingAgencyinLahorePakistan/"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-linkedin"
                                            href="https://www.linkedin.com/company/prime-media-pakistan/"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-twitter"
                                            href="https://twitter.com/primemediapk"
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header --> */}
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">
                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion logo-dark">
                                <Link href="/">
                                    <a>
                                        <img className="custom-logo-white" src="images/logoprime.png" alt="" />
                                        <img className="custom-logo" src="images/logoprime.png" alt="" />
                                    </a>
                                </Link>
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button
                                className={`navbar-toggler collapsed navicon justify-content-end ${
                                    show ? "open" : ""
                                }`}
                                onClick={() => setShow(!show)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                <Link href="/contact-us-2">
                                        <a className="btn btn-primary rounded-xl gradient shadow">Send us Enquiry</a>
                                    </Link>
                                </div>
                            </div>
                            <div
                                className={`header-nav navbar-collapse collapse justify-content-end ${
                                    show ? "show" : ""
                                }`}
                                id="navbarNavDropdown"
                            >
                                <div className="logo-header">
                                    <Link href="/">
                                        <a>
                                            <img src="images/logo-2.png" alt="" />
                                        </a>
                                    </Link>
                                </div>

                                <ul className="nav navbar-nav navbar">
                                   
									<li><Link href="/"><a>Home</a></Link></li>
                                    <li
                                        className={`${
                                            open === "about" ? "open" : ""
                                        }`}
                                    >
                                        <a onClick={() => setOpen("about")}>
                                            <span>About</span>
                                            <i className="fa fa-chevron-down"></i>
                                        </a>
                                        <ul className="sub-menu">
                                            <li><Link href="/our-vision"><a>Our Vision</a></Link></li>
                                            <li><Link href="/our-creative"><a>Our Creative</a></Link></li>
                                            <li><Link href="/about-us-2"><a>Our Approach</a></Link></li>
                                            <li><Link href="/about-us-2"><a>Our Philosophy</a></Link></li>
                                            <li><Link href="/about-us-2"><a>What We do</a></Link></li>
                                            <li><Link href="/about-us-2"><a>How We do</a></Link></li>
                                            <li><Link href="/about-us-2"><a>Client Services</a></Link></li>
                                            <li><Link href="/about-us-2"><a>Why Choose Us</a></Link></li>

                                        </ul>
                                    </li>
                                    <li
                                        className={`${
                                            open === "about" ? "open" : ""
                                        }`}
                                    >
                                        <a onClick={() => setOpen("about")}>
                                            <span>Services</span>
                                            <i className="fa fa-chevron-down"></i>
                                        </a>
                                        <ul className="sub-menu">
											{/* <li><Link href="/faq-2"><a>Faq</a></Link></li>
											<li><Link href="/pricing-table-2"><a>Pricing Table</a></Link></li>
											<li><Link href="/team-2"><a>Team</a></Link></li>
                                            <li><Link href="/coming-soon"><a>Coming Soon</a></Link></li>
                                            <li><Link href="/error-404"><a>Error 404</a></Link></li> */}
                                            {/* <li><Link href="/services-2"><a>Services</a></Link></li>
											<li><Link href="/services-details-2"><a>Services Details</a></Link></li>
                                            <li><Link href="/sitedown"><a>Site Down</a></Link></li> */}
                                            <li><Link href="/digital-marketing"><a>Digital Marketing</a></Link></li>
                                            <li><Link href="/online-marketing"><a>Online Marketing</a></Link></li>
                                            <li><Link href="/digital-marketing"><a>Facebook Marketing</a></Link></li>
                                            <li><Link href="/digital-marketing"><a>Google Adwards</a></Link></li>
                                            <li><Link href="/digital-marketing"><a>Print Media</a></Link></li>
                                            <li><Link href="/digital-marketing"><a>Outdoor Media</a></Link></li>
                                            <li><Link href="/digital-marketing"><a>Digital Marketing</a></Link></li>
                                            <li><Link href="/digital-marketing"><a>Social Marketing</a></Link></li>
                                            <li><Link href="/digital-marketing"><a>Electronic Media</a></Link></li>
                                            <li><Link href="/digital-marketing"><a>TVC Production</a></Link></li>
                                            <li><Link href="/digital-marketing"><a>Web Designing</a></Link></li>
                                            <li><Link href="/digital-marketing"><a>Advertising</a></Link></li>
                                            <li><Link href="/digital-marketing"><a>SEO</a></Link></li>


                                        </ul>
                                    </li>
                                    {/* ading media buying section ... */}
									<li><Link href="/about-us-2"><a>Media Buying</a></Link></li>
									<li className={`${open === "blog" ? "open" : ""}`}><a onClick={() => setOpen("blog")}><span>Blogs</span><i className="fa fa-chevron-down"></i></a>
										<ul className="sub-menu">
											<li><Link href="/blog-digital-marketing"><a>Digital Marketing</a></Link></li>
											<li><Link href="/blog-print-media"><a>Print Media</a></Link></li>
											<li><Link href="/blog-social-media"><a>Social Media</a></Link></li>

										</ul>
									</li>
									<li><Link href="/portfolio"><a>Portfolio</a></Link></li>
                                    {/* <li className={`${open === "blog" ? "open" : ""}`}><a onClick={() => setOpen("blog")}><span>Portfolio</span><i className="fa fa-chevron-down"></i></a>
										<ul className="sub-menu">
											<li><Link href="/portfolio-web-designing"><a>Web Designing</a></Link></li>
											<li><Link href="/portfolio-graphic-designing"><a>Graphic Designing</a></Link></li>
											<li><Link href="/portfolio-logo-designing"><a>Logo Designing</a></Link></li>
											<li><Link href="/blog-details-2"><a>Profile Designing</a></Link></li>
										</ul>
									</li> */}
									<li><Link href="/contact-us-2"><a>Contact Us</a></Link></li>
									
                                </ul>
                                <div className="dlab-social-icon">
                                    <ul>
                                        <Link href="https://en-gb.facebook.com/">
                                            <a className="fa fa-facebook"></a>
                                        </Link>
                                        <Link href="https://twitter.com/login?lang=en">
                                            <a className="fa fa-twitter"></a>
                                        </Link>
                                        <Link href="https://www.linkedin.com/login">
                                            <a className="fa fa-linkedin"></a>
                                        </Link>
                                        <Link href="https://www.instagram.com/">
                                            <a className="fa fa-instagram"></a>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header End --> */}
            </header>
        </>
    );
}

export default Header2;

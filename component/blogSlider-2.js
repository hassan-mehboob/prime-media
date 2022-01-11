import Link from "next/link";
import Slider from "react-slick";

function BlogSlider2() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <>
            <Slider
                {...settings}
                className="blog-carousel2 owl-carousel owl-none"
            >
					<div className="item">
						<div className="dlab-blog style-2 m-b10">
							<div className="dlab-media rounded-md">
							<img src="images/blog/blog-grid-2/advertising04.jpg" alt=""/>
							</div>
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><span>25</span> March</li>
										<li className="post-category">
											<a href="javascript:void(0);">Print</a>
											<a href="javascript:void(0);">Media</a>
										</li>
									</ul>
								</div>
								<h4 className="dlab-title"><Link href="/blog-print-media"><a>Print Media In Pakistan</a></Link></h4>
								<p className="m-b20">Newspapers are also great source of advertisement. In Pakistan there are number of daily newspapers which are published on regular basis. Most news sources are owned by a few media conglomerates with Jang Group.  Nawai Waqt Group, and Dawn Group. </p>
								<Link href="/blog-print-media"><a className="btn-link style-1">Read More</a></Link>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="dlab-blog style-2 m-b10">
							<div className="dlab-media rounded-md">
							<img src="images/blog/blog-grid-2/advertising01.jpg" alt=""/>
							</div>
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><span>25</span> March</li>
										<li className="post-category">
											<a href="javascript:void(0);">Digital</a>
											<a href="javascript:void(0);">Marketing</a>
										</li>
									</ul>
								</div>
								<h4 className="dlab-title"><Link href="/blog-digital-marketing"><a>Importance of creating a digital marketing strategy for your company</a></Link></h4>
								<p className="m-b20">There are different types of techniques of the digital media marketing that can be used according to your requirement to improve the digital experience of your websites such as social media marketing, email marketing and search marketing. You should add smart objective in your digital media strategy to make it more practical and applicable.</p>
								<Link href="/blog-digital-marketing"><a className="btn-link style-1">Read More</a></Link>
							</div>
						</div>
					</div>
                    <div className="item">
						<div className="dlab-blog style-2 m-b10">
							<div className="dlab-media rounded-md">
								<img src="images/blog/blog-grid-2/advertising03.jpg" alt=""/>
							</div>
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><span>25</span> March</li>
										<li className="post-category">
											<a href="javascript:void(0);">Social</a>
											<a href="javascript:void(0);">Media</a>
										</li>
									</ul>
								</div>
								<h4 className="dlab-title"><Link href="/blog-social-media"><a>How does a digital agency help in social media marketing?</a></Link></h4>
								<p className="m-b20">Social media marketing is very much important in this digital era for the growth of your business. A professional guideline helps you a lot for maximum growth, so you should hire a well reputed and professional digital media agency for the best social media and digital marketing</p>
								<Link href="/blog-social-media"><a className="btn-link style-1">Read More</a></Link>
							</div>
						</div>
					</div>
                    <div className="item">
						<div className="dlab-blog style-2 m-b10">
							<div className="dlab-media rounded-md">
							<img src="images/blog/blog-grid-2/advertising02.jpg" alt=""/>
							</div>
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><span>25</span> March</li>
										<li className="post-category">
											<a href="javascript:void(0);">Marketing</a>
											<a href="javascript:void(0);">Myths</a>
										</li>
									</ul>
								</div>
								<h4 className="dlab-title"><Link href="/blog-marketing-myths"><a>Today in this fast world where everything is going to be digitalized.</a></Link></h4>
								<p className="m-b20">It’s a vast field where there are a lot of opportunities to explore to achieve maximum results. If you want more sales than SEO is for you. SEO boost sales of of your company.</p>
								<Link href="/blog-marketing-myths"><a className="btn-link style-1">Read More</a></Link>
							</div>
						</div>
					</div>
            </Slider>
        </>
    );
}

export default BlogSlider2;

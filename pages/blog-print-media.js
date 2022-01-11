import Footer2 from "../layout/footer-2";
import Header2 from "../layout/header-2";
import Link from 'next/link';


function BlogDetails2() {
	return (
		<>
			<Header2 />
			<div className="page-content bg-white">
				{/* <!-- Banner  --> */}
				<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{ "backgroundImage": "url(images/banner/bnr1.jpg)" }}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1>Blog</h1>
							{/* <!-- Breadcrumb Row --> */}
							<nav aria-label="breadcrumb" className="breadcrumb-row">
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
									<li className="breadcrumb-item active" aria-current="page">blog-digital-marketing</li>
								</ul>
							</nav>
							{/* <!-- Breadcrumb Row End --> */}
						</div>
					</div>
				</div>
				{/* <!-- Banner End --> */}

				{/* <!-- Blog Large --> */}
				<section className="content-inner bg-img-fix" style={{ "backgroundImage": "url(images/background/bg2.png)", "backgroundSize": "contain" }}>
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								{/* <!-- blog start --> */}
								<div className="dlab-blog blog-single style-2">
									<div className="dlab-media rounded-md shadow">
										<img src="images/blog/blog-grid-2/advertising04.jpg" alt="" />
									</div>
									<div className="dlab-meta m-t30">
										<ul>
											<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
											<li className="post-author"><i className="flaticon-user m-r10"></i>By Prime Media</li>
											{/* <li className="post-comment"><Link href="#"><a><i className="flaticon-speech-bubble"></i><span>15</span></a></Link></li> */}
											{/* <li className="post-share"><i className="flaticon-share"></i>
												<ul>
													<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
													<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
													<li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
												</ul>
											</li> */}
										</ul>
									</div>
									<h4 className="dlab-title">Importance of creating a digital marketing strategy for your company.</h4>
									<div className="dlab-post-text">
										<p>There are different types of techniques of the digital media marketing that can be used according to your requirement to improve the digital experience of your websites such as social media marketing, email marketing and search marketing. You should add smart objective in your digital media strategy to make it more practical and applicable.</p>
										<p>You have to define required digital marketing activities which cover the full customer journey. Within each digital marketing practice, there are lots of comprehensive that should be assessed and arranged, for example from lively content for email automation, website personalization to programmatic, regretting and skyscraper content for organic search.</p>
										<blockquote className="blockquote style-2">
											<h4 className="blockquote-content">Opportunity, strategy and then action approach helps in making the strategy of your digital marketing. Through this, you find opportunities and then create strategies through smart objectives. In the next step, proper implementation and action plan help for appropriate execution.</h4>
										</blockquote>
										<p>There are the following reasons that you should have a perfect digital marketing strategy;	</p>
										<h4 className="m-b30">A digital marketing strategy gives you a direction to achieve your smart goals through a proper plan and impeccable execution. It helps a lot for the systematic growth of your business.</h4>
										<img className="alignleft rounded-md shadow" width="300" src="images/blog/blog-grid/pic1.jpg" alt="" />
										<p>Without a proper digital market strategy, you can’t understand the current trends of the market place. It’s different from traditional marketing trends where there are set patterns for consumers behaviors, market trends, options of market communication and competitors. By technological advancement, now various tools are available on digital platforms according to your plan and strategies to understand customers behavior and demands. Through these, you can make it clear how to use the different activities to highlight your products and services to attract more target audience to your website or any social media platform.</p>
										<p>To beat the heat of extreme competition in this digital agency, you should have a clear plan; otherwise, you will never find a prominent place in this competitive field.</p>
										<p>    A proper digital and content marketing strategy helps to make and sustain more and more customers and then turn them into the loyal. Through appropriate planning of content marketing, you can achieve maximum results in terms of more engagement and attract more customers</p>
									</div>
									<div className="dlab-meta meta-bottom border-top">
										<div className="post-tags">
											Tags:
												<Link href="#"><a>#Child </a></Link> ,
												<Link href="#"><a>#Eduction </a></Link> ,
												<Link href="#"><a>#Money </a></Link> ,
												<Link href="#"><a>#Resturent </a></Link>
										</div>
										{/* <div className="dlab-social-icon primary-light">
											<ul>
												<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
												<li><a className="fa fa-instagram" href="https://www.instagram.com/"></a></li>
												<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
											</ul>
										</div> */}
									</div>
								</div>
								<div className="row extra-blog style-2">
									<div className="col-lg-12 m-b30">
										<h2 className="blog-title">Related Blogs</h2>
										<div className="dlab-separator style-1"></div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="dlab-blog style-1 m-b30">
											<div className="dlab-info">
												<div className="dlab-meta">
													<ul>
														<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
														<li className="post-comment"><Link href="#"><a><i className="flaticon-speech-bubble"></i><span>15</span></a></Link></li>
														<li className="post-share"><i className="flaticon-share"></i>
															<ul>
																<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
																<li><a className="fa fa-twitter"  href="https://ads.twitter.com/login"></a></li>
																<li><a className="fa fa-linkedin" href="https://in.linkedin.com/"></a></li>
															</ul>
														</li>
													</ul>
												</div>
												<h5 className="dlab-title">
													<Link href="/blog-print-media"><a>Importance of creating a digital marketing strategy for your company.</a></Link>
												</h5>
												<p className="m-b0">Newspapers are also source of advertisement in Pakistan.</p>
											</div>
											<div className="dlab-media">
												<Link href="/blog-print-media"><a><img src="images/blog/blog-grid-2/advertising04.jpg" alt="" /></a></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="dlab-blog style-1 m-b30">
											<div className="dlab-info">
												<div className="dlab-meta">
													<ul>
														<li className="post-date"><i className="flaticon-clock m-r10"></i>8 Feb, 2020</li>
														<li className="post-comment"><Link href="#"><a><i className="flaticon-speech-bubble"></i><span>15</span></a></Link></li>
														<li className="post-share"><i className="flaticon-share"></i>
															<ul>
																<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
																<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
																<li><a className="fa fa-linkedin" href="https://in.linkedin.com/"></a></li>
															</ul>
														</li>
													</ul>
												</div>
												<h5 className="dlab-title">
													<Link href="/blog-social-media"><a>How does digital agency helps in social media marketing.</a></Link>
												</h5>
												<p className="m-b0">Social media marketing is very much important in this digital era for the growth of your business</p>
											</div>
											<div className="dlab-media">
												<Link href="/blog-social-media"><a><img src="images/blog/blog-grid-2/advertising03.jpg" alt="" /></a></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="dlab-blog style-1 m-b30">
											<div className="dlab-info">
												<div className="dlab-meta">
													<ul>
														<li className="post-date"><i className="flaticon-clock m-r10"></i>17 March, 2020</li>
														<li className="post-comment"><Link href="#"><a><i className="flaticon-speech-bubble"></i><span>15</span></a></Link></li>
														<li className="post-share"><i className="flaticon-share"></i>
															<ul>
																<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
																<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
																<li><a className="fa fa-linkedin" href="https://in.linkedin.com/"></a></li>
															</ul>
														</li>
													</ul>
												</div>
												<h5 className="dlab-title">
													<Link href="/blog-digital-marketing"><a>Importance of creating a digital marketing.</a></Link>
												</h5>
												<p className="m-b0">There are different types of techniques of the digital media marketing that can be used according to your requirement.</p>
											</div>
											<div className="dlab-media">
												<img src="images/blog/blog-grid-2/advertising01.jpg" alt="" />
											</div>
										</div>
									</div>
								</div>
								<div className="row clear" id="comment-list">
									{/* comments start */}

									{/* comments end */}

									<div className="col-lg-6">
										{/* <!-- Form --> */}
										<div className="comment-respond style-2" id="respond">
											<h2 className="comment-reply-title" id="reply-title">Leave a Reply
												<small>
													<Link href="#"><a style={{ "display": "none" }} id="cancel-comment-reply-link" rel="nofollow">Cancel reply</a></Link>
												</small>
											</h2>
											<div className="dlab-separator style-1 m-b30"></div>
											<form className="comment-form m-t30" id="commentform" method="post">
												<p className="comment-form-author">
													<label htmlFor="author">Name <span className="required">*</span></label>
													<input type="text" name="Author" placeholder="Author" id="author" />
												</p>
												<p className="comment-form-email">
													<label htmlFor="email">Email <span className="required">*</span></label>
													<input type="text" placeholder="Email" name="email" id="email" />
												</p>
												<p className="comment-form-url">
													<label htmlFor="url">Website</label>
													<input type="text" placeholder="Website" name="url" id="url" />
												</p>
												<p className="comment-form-comment">
													<label htmlFor="comment">Comment</label>
													<textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
												</p>
												<p className="form-submit">
													<input type="submit" value="Submit Now" className="submit btn btn-primary gradient rounded-xl" id="submit" name="submit" />
												</p>
											</form>
										</div>
										{/* <!-- Form --> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			</div>
			<Footer2 />
		</>
	)
}

export default BlogDetails2;
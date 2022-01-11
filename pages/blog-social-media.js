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
									<li className="breadcrumb-item active" aria-current="page">blog-social-media</li>
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
										<img src="images/blog/blog-grid-2/advertising03.jpg" alt="" />
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
									<h4 className="dlab-title">How does a digital agency help in social media marketing?</h4>
									<div className="dlab-post-text">
										<p>Social media marketing is essential because it helps to strengthen your brand through a strong social media presence you will have a chance to interact with your potential customers at different platforms of social media like Facebook, LinkedIn, Twitter and many more. There are following advantages of hiring a digital media agency for your business;</p>
										<p>These agencies help to promote social media marketing ultimately helps in business growth strategically. Marketing is essential for any business, so digital media agencies promote your products and services, make a strong social media presence of your business, and attract maximum people towards your business.</p>
										<blockquote className="blockquote style-2">
											<h4 className="blockquote-content">Digital media agencies help to establish brand recognition. Being the professionals of their field, they know the current trends and techniques on how to make a strong image of your brand by using different strategies on different platforms of social media. In this way, they can take your brand at the top level for maximum outputs.</h4>
										</blockquote>
										<p>There are the following reasons that you should have a perfect social media strategy;	</p>
										<h4 className="m-b30">Turning Visitors into Clients</h4>
										<img className="alignleft rounded-md shadow" width="300" src="images/blog/blog-grid/pic1.jpg" alt="" />
										<p>Digital media agency helps in social media marketing, and professional social media managers engage the users into different activities on social media to make your business accessible. In this way, the primary objective is to turn the potential users into buyers and then permanent loyal clients. Through different activities, posts, shares, tweets the social media managers help to engage the visitors and generate more web traffic. This leads to create strong brand recognition for your business growth.</p>
										<h4>Brand Values</h4>
										<p>Digital media agencies having expertise in this field of social media marketing promote emotional, practical, and other benefits of the company's products and services. They help to promote the positive image of the brand without compromising the brand values. Through these strategies, social media users can quickly determine your brand value</p>
										<h4>Brand Promotion</h4>
										<p>Brand promotion is an important aspect of social media marketing, and digital media agency helps to promote your brand effectively through different strategies on different social media platforms.</p>
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
													<Link href="/blog-marketing-myths"><a>Myths about Digital Marketking in this world</a></Link>
												</h5>
												<p className="m-b0">Today in this fast world where everything is going to be digitalized. It is a vast field with a lot of opportunities.</p>
											</div>
											<div className="dlab-media">
												<Link href="/blog-marketing-myths"><a><img src="images/blog/blog-grid-2/advertising02.jpg" alt="" /></a></Link>
											</div>
										</div>
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
																<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
																<li><a className="fa fa-linkedin" href="https://in.linkedin.com/"></a></li>
															</ul>
														</li>
													</ul>
												</div>
												<h5 className="dlab-title">
													<Link href="/blog-digital-marketing"><a>How does digital agency helps in social media marketing.</a></Link>
												</h5>
												<p className="m-b0">Social media marketing is very much important in this digital era for the growth of your business</p>
											</div>
											<div className="dlab-media">
												<Link href="/blog-digital-marketing"><a><img src="images/blog/blog-grid-2/advertising01.jpg" alt="" /></a></Link>
											</div>
										</div>
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
																<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
																<li><a className="fa fa-linkedin" href="https://in.linkedin.com/"></a></li>
															</ul>
														</li>
													</ul>
												</div>
												<h5 className="dlab-title">
													<Link href="/blog-print-media"><a>Print Media In Pakistan and Its importance in fast growing world</a></Link>
												</h5>
												<p className="m-b0">Newspapers are also great source of advertisement. In Pakistan there are numbers of daily new Papers.</p>
											</div>
											<div className="dlab-media">
												<img src="images/blog/blog-grid-2/advertising04.jpg" alt="" />
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
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
									<li className="breadcrumb-item active" aria-current="page">blog-marketing-myths</li>
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
										<img src="images/blog/blog-grid-2/advertising02.jpg" alt="" />
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
									<h4>Myth 1:</h4>
									<h4 className="dlab-title">No need for multiple Platforms</h4>
									<div className="dlab-post-text">
										<p>It's a myth in digital marketing that there is no need for various platforms and medium. But the fact is that multiple platforms help in the growth of your business extensively. You have to give equal importance to each platform to approach and target your potential customers in digital marketing. It will provide you with maximum results and best growth and development rate. To promote your products and services, you have to focus on social media, mobile apps as well as search for more engagement with the target audience.</p>
										<h4>Myth 2:</h4>
										<h4>All type of content is effective</h4>
										<p>It’s a myth that in digital media marketing, any content helps to promote your business. Content is the basic foundation in digital media marketing. The best and engaging content that helps in high engagement works in digital media marketing. One more thing that should be kept in mind is the consistency and frequency of the effective content on all the platforms of digital media marketing</p>
										<h4>Myth 3:</h4>
										<h4>Information about internet technology</h4>
										<p>Although digital marketing is related to technology, still some rules of marketing should be followed to make a strategy, plan and perfect execution for more engagement and to increase conversions.</p>
										<h4>Myth 4:</h4>
										<h4>All about increasing traffic</h4>
										<p>Though increasing website traffic leads to success and growth, but digital marketing is not all about creating an attractive website to engage and increase traffic. You need that relevant traffic which also plays a vital role to make the transaction to increase sale. These are two different aspects so to increase only traffic don’t increase sales so try to make effective and practical strategies according to that.</p>
										<blockquote className="blockquote style-2">
											<h4 className="blockquote-content">In short Digital media marketing is helping every business big and small to engage their target audience, increase revenues, conversions as well as to create brand awareness and strengthen your brand image</h4>
										</blockquote>
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
														<li className="post-date"><i className="flaticon-clock m-r10"></i>8 March, 2020</li>
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
														<li className="post-date"><i className="flaticon-clock m-r10"></i>9 Feb, 2020</li>
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
												<Link href="/blog-print-media"><a>
													
												<img src="images/blog/blog-grid-2/advertising04.jpg" alt="" />
													</a></Link>
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
import Footer2 from "../layout/footer-2";
import Header2 from "../layout/header-2";
import Link from 'next/link';


function BlogGrid2() {
  return (
   <>
	<Header2/>
      <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Portfolio Graphic Designing</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">portfolio-graphic-designing</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Blog Large --> */}
		<section className="content-inner" style={{"backgroundImage":"url(images/background/bg2.png)"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dlab-blog style-1 m-b50 bg-white">
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By Prime Media</li>
									</ul>
								</div>
								<h4 className="dlab-title">
									<Link href="/"><a className="text-center display-block" target="_blank">Hubsols</a></Link>
								</h4>
							</div>
							<div className="dlab-media dlab-img-effect zoom">
								<img src="images/blog/blog-grid/graphicDesigning/graphicDesigning06.jpg" alt=""/>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="dlab-blog style-1 m-b50 bg-white">
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>17 Feb, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By Prime Media</li>
									</ul>
								</div>
								<h4 className="dlab-title">
									<Link href="/"><a target="_blank">Ajwa</a></Link>
								</h4>
							</div>
							<div className="dlab-media dlab-img-effect zoom">
								<img src="images/blog/blog-grid/graphicDesigning/graphicDesigning02.png" alt=""/>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="dlab-blog style-1 m-b50 bg-white">
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>20 March, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By Prime Media</li>
									</ul>
								</div>
								<h4 className="dlab-title">
									<Link href="/"><a>Ali Akbar</a></Link>
								</h4>
							</div>
							<div className="dlab-media dlab-img-effect zoom">
								<img src="images/blog/blog-grid/graphicDesigning/graphicDesigning03.png" alt=""/>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="dlab-blog style-1 m-b50 bg-white">
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>17 April, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By Prime Media</li>										
									</ul>
								</div>
								<h4 className="dlab-title">
									<Link href="/"><a>Warda Eyelesh</a></Link>
								</h4>
							</div>
							<div className="dlab-media dlab-img-effect zoom">
								<img src="images/blog/blog-grid/graphicDesigning/graphicDesigning04.png" alt=""/>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.0s">
						<div className="dlab-blog style-1 m-b50 bg-white">
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 April, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By Prime Media</li>
									</ul>
								</div>
								<h4 className="dlab-title">
									<Link href="/"><a>Warda Lens Box</a></Link>
								</h4>
							</div>
							<div className="dlab-media dlab-img-effect zoom">
								<img src="images/blog/blog-grid/graphicDesigning/graphicDesigning05.png" alt=""/>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.2s">
						<div className="dlab-blog style-1 m-b50 bg-white">
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>17 May, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By Prime Media</li>
									</ul>
								</div>
								<h4 className="dlab-title">
									<Link href="https://www.mzastructural.com/"><a>Sparco Paints</a></Link>
								</h4>
							</div>
							<div className="dlab-media dlab-img-effect zoom">
								<img src="images/blog/blog-grid/graphicDesigning/graphicDesigning01.png" alt=""/>
							</div>
						</div>
					</div>
                </div>
			</div>
		</section>
		
	</div>
	<Footer2/>
    </>
  )
}

export default BlogGrid2;
// import Image1 from "images/projects/grid/pic1";
import Image from "next/image";
import { useEffect, useState } from "react";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 

function Portfolio2() {
  const portfolio = [
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/webDesigning/web-designing01.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "logo_design", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/logoDesign/logoDesign06.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "logo_design", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/logoDesign/logoDesign05.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/webDesigning/web-designing02.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "seo"],
      img: (
        <Image
          src="/images/projects/pic3.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/webDesigning/web-designing03.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "seo"],
      img: (
        <Image
          src="/images/blog/blog-grid/webDesigning/web-designing09.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "seo"],
      img: (
        <Image
          src="/images/blog/blog-grid/webDesigning/web-designing05.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "seo"],
      img: (
        <Image
          src="/images/blog/blog-grid/webDesigning/web-designing06.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["web_design", "seo"],
      img: (
        <Image
          src="/images/projects/pic5.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["web_design", "branding"],
      img: (
        <Image
          src="/images/projects/pic6.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["graphic_designing", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/graphicDesigning/graphicDesigning02.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["graphic_designing", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/graphicDesigning/graphicDesigning03.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["graphic_designing", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/graphicDesigning/graphicDesigning04.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["logo_design", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/logoDesign/logoDesign01.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["logo_design", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/logoDesign/logoDesign02.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["logo_design", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/logoDesign/logoDesign03.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["logo_design", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/logoDesign/logoDesign04.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["profile_design", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/profileDesigning/profile01.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["profile_design", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/profileDesigning/profile02.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["profile_design", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/profileDesigning/profile03.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["profile_design", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/profileDesigning/profile04.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["profile_design", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/profileDesigning/profile05.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["profile_design", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/profileDesigning/profile06.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["profile_design", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/profileDesigning/profile07.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["profile_design", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/profileDesigning/profile08.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["profile_design", "branding"],
      img: (
        <Image
          src="/images/blog/blog-grid/profileDesigning/profile09.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    }
  ];

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <div className="site-filters style-2 clearfix center m-b40">
        <ul className="filters">
          <li className={`btn ${filter === "all" ? "active" : ""}`}>
            <a active={"all"} onClick={() => setFilter("all")}>
              All
            </a>
          </li>
          <li className={`btn ${filter === "web_design" ? "active" : ""}`}>
            <a
              active={"web_design"}
              onClick={() => setFilter("web_design")}
            >
              Web Design
            </a>
          </li>
          <li className={`btn ${filter === "graphic_designing" ? "active" : ""}`}>
            <a
              active={"graphic_designing"}
              onClick={() => setFilter("graphic_designing")}
            >
              Graphic Designing
            </a>
          </li>
          <li className={`btn ${filter === "logo_design" ? "active" : ""}`}>
            <a
              active={"logo_design"}
              onClick={() => setFilter("logo_design")}
            >
              Logo Design
            </a>
          </li>
          <li className={`btn ${filter === "profile_design" ? "active" : ""}`}>
            <a active={"profile_design"} onClick={() => setFilter("profile_design")}>
              Profile Design
            </a>
          </li>
        </ul>
      </div>
        <SimpleReactLightbox>
            <SRLWrapper >
              <div className="clearfix">
                <ul id="masonry" className="row" data-column-width="3">
                  {projects.map((item) =>
                    item.filtered === true ? (
                      <>
                        <li
                          className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"
                          data-wow-duration="2s"
                          data-wow-delay="0.1s"
                        >
                          <div className="dlab-box  style-2 m-b30">
                            <div className="dlab-media ">
                              {item.img}
                            </div>
                            {/* <div className="dlab-info">
                              <h5 className="title">
                                <a href="javascript:void(0);">{item.title}</a>
                              </h5>
                              <p className="post-author">
                                By <a href="javascript:void(0);">{item.author}</a>
                              </p>
                            </div> */}
                          </div>
                        </li>
                      </>
                    ) : (
                      ""
                    )
                  )}
                </ul>
              </div>
            </SRLWrapper >      
          </SimpleReactLightbox> 
    </>
  );
}

export default Portfolio2;

import { useEffect } from "react";
import AboutUs from "../element/aboutUs";
import Head from 'next/head'
import Blog2 from "../element/blog-2";
import Clients2 from "../element/clients-2";
// import Counter2 from "../element/counter2";
import OurServices2 from "../element/our-services-2";
// import Pricing2 from "../element/pricing-2";
import Projects2 from "../element/Projects-2";
import Service from "../element/service";
import Service2nd from "../element/service2nd";
import Slider2 from "../element/slider-2";
// import Testimonial2 from "../element/testimonial-2";
import Footer2 from "../layout/footer-2";
import Header2 from "./../layout/header-2";
// import "../css/skin/skin-1.css";

function Index2() {
 
  return (
    <>
      <Head>
        <title>Social Media Marketing</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header2 />
      <div className="page-content bg-white">
        <Slider2 />
        <AboutUs/>
        <Service />
        <Service2nd/>
        {/* <Counter2 /> */}
        <OurServices2 />
        {/* <Projects2 /> */}
        {/* <Pricing2 /> */}
        {/* <Testimonial2 /> */}
        <Blog2 />
        <Clients2 />
      </div>
      <Footer2 />
    </>
  );
}

export default Index2;

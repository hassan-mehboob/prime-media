import { useEffect, useState } from "react";
// import { WOW } from "wowjs";

function Service2nd() {
  const [open, setOpen] = useState("");
  // useEffect(() => {
  //   const wow = new WOW({
  //     offset: 100,
  //     mobile: false,
  //     live: true,
  //   });

  //   wow.init();
  // }, []);
  return (
    <>
      <section
        className="content-inner-2 wow fadeInUp"
        style={{ backgroundImage: "url(images/background/bg1.png)" }}
      >
        <div className="container">

          <div className="row">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div
                className={`${
                  open === "p1"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p1")}
              >
                <div className="icon-bx-md radius bg-orange shadow-orange">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-line-graph"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">SEO & Marketing</h4>
                  <p>
                    Fusce sit amet dui vitae urna tristique imperdiet. Donec
                    eget sapien euismod, faucibus nibh non, consequat elit.
                    Praesent sed vehicula.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div
                className={`${
                  open === "p2"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p2")}
              >
                <div className="icon-bx-md radius bg-info shadow-green">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-pie-charts"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Google Adwards</h4>
                  <p>
                    Fusce sit amet dui vitae urna tristique imperdiet. Donec
                    eget sapien euismod, faucibus nibh non, consequat elit.
                    Praesent sed vehicula.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div
                className={`${
                  open === "p3"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p3")}
              >
                <div className="icon-bx-md radius bg-blue shadow-blue">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-office"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">TVC Production</h4>
                  <p>
                    Fusce sit amet dui vitae urna tristique imperdiet. Donec
                    eget sapien euismod, faucibus nibh non, consequat elit.
                    Praesent sed vehicula.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Second Part  */}
          
        </div>
      </section>
    </>
  );
}

export default Service2nd;

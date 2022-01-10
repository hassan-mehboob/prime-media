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
                  <h4 className="dlab-title">SEO</h4>
                  <p>
                  Search Engine Optimization Services
Prime media provide you cost-effective SEO and Social media marketing services in Pakistan in order to enhance your business criteria and visitors for your E-business site by top listing in search engines results.
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
                  <h4 className="dlab-title">Outdoor Media</h4>
                  <p>
                  Outdoor Media Pakistan is an everlasting and never declining medium to advertise. If you are thinking about launching an Outdoor Media campaign in Pakistan or online media buying for advertisement.
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
                  TVC ProductionServices
Now prim media provide Tvc Commercial making in Lahore, best video productions and Documentaries maker in Pakistan. Television Commercial Production is a growing industry nowadays. People are investing more and more budget on it.
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

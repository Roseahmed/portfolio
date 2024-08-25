const Services = () => {
  return (
    <div className="container bg-white pt-5 pb-3">
      <div className="row px-3">
        <div className="col-12">
          <h2 className="title position-relative pb-2 mb-4">Services</h2>
        </div>
        <div className="col-md-6 service-item text-center mb-3">
          <i className="fa fa-2x fa-laptop-code mx-auto mb-4"></i>
          <h5 className="mb-2">Web Development</h5>
          <p style={{ textAlign: "center" }}>
            Transform your business with a website that not only attracts but
            converts. Let’s work together to build a digital experience that
            leaves a lasting impression on your audience. Contact me today for a
            consultation!
          </p>
        </div>
        <div className="col-md-6 service-item text-center mb-3">
          <i className="fab fa-2x fa-android mx-auto mb-4"></i>
          <h5 className="mb-2">Apps Development</h5>
          <p style={{ textAlign: "center" }}>
            Unlock the full potential of your business with a mobile app that
            not only engages but also retains users. Let’s collaborate to create
            an app that stands out in the marketplace and drives growth. Contact
            me today to discuss your project!
          </p>
        </div>
        <div className="col-md-6 service-item text-center mb-3">
          <i className="fa fa-2x fa-search mx-auto mb-4"></i>
          <h5 className="mb-2">SEO</h5>
          <p style={{ textAlign: "center" }}>
            Achieve higher rankings, increase your visibility, and drive more
            qualified traffic to your website with our comprehensive SEO
            services. Let’s work together to unlock your website’s full
            potential. Contact me today for a consultation!
          </p>
        </div>
        <div className="col-md-6 service-item text-center mb-3">
          {/* <i className="fa fa-2x fa-edit mx-auto mb-4"></i> */}
          {/* fas fa-film */}
          <i className="fa fa-2x fas fa-video mx-auto mb-4"></i>
          <h5 className="mb-2">Video Editing</h5>
          <p style={{ textAlign: "center" }}>
            Elevate your video content with professional editing that captures
            attention and leaves a lasting impression. Let’s collaborate to
            create videos that truly shine. Contact me today to discuss your
            project!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;

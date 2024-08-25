import ProfilePhoto from "../assets/profile.jpg";
import { ReactTyped } from "react-typed";
import { Config } from "../config/config";

const config = new Config();

export default function Profile() {
  const designation = [
    "Software Engineer",
    "Web Developer",
    "Web Designer",
    "Full Stack Developer",
    "System Design",
  ];

  return (
    <>
      <div className="sidebar-text d-flex flex-column h-100 justify-content-center text-center">
        <img className="w-100 img-fluid mb-4" src={ProfilePhoto} alt="Image" />
        <h1 className="mt-2">Rose Ahmed</h1>
        <div className="mb-4" style={{ height: "22px" }}>
          {/* <h4 className="typed-text-output d-inline-block text-body"></h4>
          <div className="typed-text d-none">
            Web Designer, Web Developer, Front End Developer, Apps Designer,
            Apps Developer
          </div> */}

          <ReactTyped
            strings={designation}
            typeSpeed={100}
            backSpeed={20}
            smartBackspace={false}
            loop
          />
        </div>
        <div className="d-flex justify-content-center mt-auto mb-3">
          <a className="mx-2" href={config.linkedin} target="_blank">
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="mx-2" href={config.x} target="_blank">
            <i className="fab fa-x" />
          </a>
          <a className="mx-2" href={config.facebook} target="_blank">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="mx-2" href={config.instagram} target="_blank">
            <i className="fab fa-instagram" />
          </a>
          {/* <a className="mx-2" href="#">
            <i className="fab fa-youtube" />
          </a> */}
        </div>
        <div className="d-flex align-items-end justify-content-between">
          <a href="" className="btn btn-block border-right">
            Download CV
          </a>
          <a href="#contact" className="btn btn-block btn-scroll">
            Contact Me
          </a>
        </div>
      </div>
      <div className="sidebar-icon d-flex flex-column h-100 justify-content-center text-right">
        <i className="fas fa-2x fa-angle-double-right text-primary" />
      </div>
    </>
  );
}

import { Config } from "../config/config";
const config = new Config();

export default function Footer() {
  return (
    <div className="container-fluid bg-white pt-5 px-0">
      <div className="container bg-dark text-light text-center py-5">
        <div className="d-flex justify-content-center mb-4">
          <a
            className="btn btn-outline-primary btn-square mr-2"
            href={config.linkedin}
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="btn btn-outline-primary btn-square mr-2"
            href={config.x}
            target="_blank"
          >
            <i className="fab fa-x"></i>
          </a>
          <a
            className="btn btn-outline-primary btn-square mr-2"
            href={config.facebook}
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className="btn btn-outline-primary btn-square"
            href={config.instagram}
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <a className="text-white" href="#">
            Privacy
          </a>
          <span className="px-3">|</span>
          <a className="text-white" href="#">
            Terms
          </a>
          <span className="px-3">|</span>
          <a className="text-white" href="#">
            FAQs
          </a>
          <span className="px-3">|</span>
          <a className="text-white" href="#">
            Help
          </a>
        </div>
        <p className="m-0">
          &copy; All Rights Reserved. Designed by Rose Ahmed.
          {/* <a href="https://htmlcodex.com">HTML Codex</a> */}
        </p>
      </div>
    </div>
  );
}

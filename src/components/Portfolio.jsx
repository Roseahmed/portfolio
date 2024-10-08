import { useState, useEffect } from "react";
// import Portfolio1 from "../assets/portfolio-1.jpg";
// import Portfolio2 from "../assets/portfolio-2.jpg";
// import Portfolio3 from "../assets/portfolio-3.jpg";
// import Portfolio4 from "../assets/portfolio-4.jpg";

import Portfolio1 from "../assets/portfolio-1l.png";
import Portfolio2 from "../assets/portfolio-2l.png";
import Portfolio3 from "../assets/portfolio-3l.jpeg";
import Portfolio4 from "../assets/portfolio-4l.jpeg";

import "./Portfolio.css";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolios = [
    {
      src: Portfolio1,
      category: "design",
      title: "Education Consultancy",
      url: "https://www.educonnect.org.in",
      description:
        "This is a sleek, responsive, and informative static website designed for an education consultancy firm. The website serves as a digital front for the consultancy, providing potential clients with essential information about the services offered, success stories, and the expertise of the consultancy team.",
    },
    {
      src: Portfolio2,
      category: "development",
      title: "Travel Agency",
      url: "https://example.com/project2",
      description:
        "This B2B flight booking platform empowers businesses to take control of their travel arrangements with ease and efficiency. By providing a user-friendly interface combined with powerful management tools, the platform reduces the time and effort required to book and manage flights, leading to cost savings and improved productivity for corporate clients.",
    },
    {
      src: Portfolio3,
      category: "design",
      title: "Travel Guide",
      url: "https://example.com/project3",
      description:
        "The Travel Guide Website offers a rich and engaging experience for travelers, providing everything they need to plan and enjoy their trips in one place. By combining detailed guides, user-generated content, and interactive tools, the platform not only inspires but also empowers users to explore the world with confidence.",
    },
    {
      src: Portfolio4,
      category: "development",
      title: "Organisation Management",
      url: "https://example.com/project4",
      description:
        "This Organization Management Platform empowers organizations to operate more efficiently by centralizing key functions into a single, user-friendly interface. It simplifies the complexities of managing members, events, and internal processes, making it an essential tool for any organization looking to enhance productivity and communication.",
    },
  ];

  useEffect(() => {
    // Toggle no-scroll class on body when popup is open
    if (selectedProject) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    // Cleanup to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [selectedProject]);

  const filteredPortfolios =
    activeFilter === "*"
      ? portfolios
      : portfolios.filter((item) => item.category === activeFilter);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container bg-white pt-5 pb-3">
      <div className="row px-3">
        <div className="col-12">
          <h2 className="title position-relative pb-2 mb-4">Portfolio</h2>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 text-center mb-2">
              <ul className="list-inline mb-4" id="portfolio-filters">
                <li
                  className={`btn btn-outline-primary ${
                    activeFilter === "*" ? "active" : ""
                  }`}
                  onClick={() => handleFilter("*")}
                >
                  <i className="fa fa-star mr-2"></i>All
                </li>
                <li
                  className={`btn btn-outline-primary ${
                    activeFilter === "design" ? "active" : ""
                  }`}
                  onClick={() => handleFilter("design")}
                >
                  <i className="fa fa-laptop-code mr-2"></i>Design
                </li>
                <li
                  className={`btn btn-outline-primary ${
                    activeFilter === "development" ? "active" : ""
                  }`}
                  onClick={() => handleFilter("development")}
                >
                  <i className="fa fa-mobile-alt mr-2"></i>Development
                </li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            {filteredPortfolios.map((item, index) => (
              <div className="col-md-6 mb-4 portfolio-item" key={index}>
                <div
                  className="position-relative overflow-hidden mb-2"
                  onClick={() => handleProjectClick(item)}
                >
                  <img
                    className="img-fluid w-100"
                    src={item.src}
                    alt={`portfolio-${index}`}
                  />
                  <div className="portfolio-btn d-flex align-items-center justify-content-center">
                    <a
                      // href={item.src}
                      data-lightbox="portfolio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-4x fa-plus text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <h2>{selectedProject.title}</h2>
            <img
              src={selectedProject.src}
              alt={selectedProject.title}
              className="img-fluid mb-3"
            />
            <p className="text-align">{selectedProject.description}</p>
            <a
              href={selectedProject.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

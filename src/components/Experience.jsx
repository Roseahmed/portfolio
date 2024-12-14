const expericenceData = [
  {
    position: "Software Engineer",
    companyName: "TELIBRAHMA SOFTWARE SERVICES LLP",
    startDate: "May, 2024",
    endDate: "Present",
    roles: [
      "1. Spearheaded the setup and management of large-scale projects, ensuring on-time delivery and adherence to agile methodologies.",
      "2. Engineered and optimized complex APIs, leading to a 40% increase in system performance.",
      "3. Seamlessly integrated APIs with React-based frontend applications, driving a 15% improvement in load times.",
      "4. Deployed and managed applications on AWS, ensuring high availability, scalability, and optimal performance through automated CI/CD pipelines.",
    ],
  },
  {
    position: "Senior Software Developer",
    companyName: "Flyerssoft Private Limited",
    startDate: "Jan, 2023",
    endDate: "Jan, 2024",
    roles: [
      "1. Led the setup and management of key client projects, ensuring a 15% reduction in project launch times.",
      "2. Developed and improved APIs, enhancing response times by 25% and reducing server load.",
      "3. Incorporated APIs with React frontend, cutting down the average data fetching time by 30%.",
      "4. Deployed applications on AWS, ensuring a zero-downtime deployment process and achieving a 99.9% service availability rate.",
    ],
  },
  {
    position: "Software Developer",
    companyName: "Triofi Technologies Private Limited",
    startDate: "May, 2022",
    endDate: "Dec, 2022",
    roles: [
      "1. Directed the end-to-end setup of software development projects, accelerating the release cycle by 20%.",
      "2. Designed and enhanced APIs, reducing request-response times by 30%.",
      "3. Enhanced the efficiency of API integration, enabling real-time data syncing with 99% accuracy.",
      "4. Deployed AWS applications and resolved 95% of issues pre-release by implementing early error-detection mechanisms.",
    ],
  },
  {
    position: "Web Development Intern",
    companyName: "Triofi Technologies Private Limited",
    startDate: "Jan, 2022",
    endDate: "Apr, 2022",
    roles: [
      "1. Developed APIs for internal tools and client projects, streamlining workflows and improving process efficiency by 15%.",
      "2. Conducted API testing with Postman, identifying and resolving issues before production release.",
      "3. Blended APIs with React frontend, leading to a 20% improvement in load times.",
    ],
  },
];

export default function Expericence() {
  return (
    <div className="container bg-white py-5">
      <div className="row px-3">
        <div className="col-12">
          <h2 className="title position-relative pb-2 mb-4">Expericence</h2>
        </div>
        <div className="col-12">
          <div className="border-left border-primary pt-2 pl-4 ml-2">
            {expericenceData?.map((item, index) => (
              <div className="position-relative mb-4" key={index}>
                <i
                  className="fa fa-arrow-right text-primary position-absolute"
                  style={{ top: "3px", left: "-24px" }}
                />
                <h5 className="mb-1"> {item.position}</h5>
                <p className="mb-2">
                  {item.companyName} |{" "}
                  <small>
                    {item.startDate} - {item.endDate}
                  </small>
                </p>
                <p>
                  {item.roles.map((role, index) => (
                    <>
                      <small key={index}>{role}</small>
                      <br />
                    </>
                  ))}
                </p>
                {/* <p>{item.roles}</p> */}
              </div>
            ))}
            {/* <div className="position-relative mb-4">
              <i
                className="fa fa-arrow-right text-primary position-absolute"
                style={{ top: "3px", left: "-24px" }}
              />
              <h5 className="mb-1">Web Designer</h5>
              <p className="mb-2">
                Soft Company | <small>2000 - 2050</small>
              </p>
              <p>
                Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit
                amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd
                sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
              </p>
            </div>
            <div className="position-relative mb-4">
              <i
                className="fa fa-arrow-right text-primary position-absolute"
                style={{ top: "3px", left: "-24px" }}
              />
              <h5 className="mb-1">Web Designer</h5>
              <p className="mb-2">
                Soft Company | <small>2000 - 2050</small>
              </p>
              <p>
                Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit
                amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd
                sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
              </p>
            </div>
            <div className="position-relative mb-4">
              <i
                className="fa fa-arrow-right text-primary position-absolute"
                style={{ top: "3px", left: "-24px" }}
              />
              <h5 className="mb-1">Web Designer</h5>
              <p className="mb-2">
                Soft Company | <small>2000 - 2050</small>
              </p>
              <p>
                Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit
                amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd
                sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

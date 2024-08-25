const expericenceData = [
  {
    position: "Software Engineer",
    companyName: "TELIBRAHMA SOFTWARE SERVICES LLP",
    startDate: "May, 2024",
    endDate: "Present",
    roles: [
      "1. Designing website using React Js.",
      "2. Creating robustfull backend server using Node Js, Express Js, Nest Js.",
      "3. Data Management using postgreSQL and MongoDB.",
      "4. Deloyment in services: AWS, Digital Ocean.",
    ],
  },
  {
    position: "Senior Software Developer",
    companyName: "Flyerssoft Private Limited",
    startDate: "Jan, 2023",
    endDate: "Jan, 2024",
    roles: [
      "1. Setup and management of projects.(Node Js, Express js)",
      "2. Development of complex APIs with a focus on optimization for improved performance.",
      "3. Integration of APIs with frontend applications.",
      "4. Deployment of projects on cloud services such as AWS, ensuring seamless operation.",
    ],
  },
  {
    position: "Software Developer",
    companyName: "Triofi Technologies Private Limited",
    startDate: "May, 2022",
    endDate: "Dec, 2022",
    roles: [
      "1. Setup and management of projects.(Node Js, Express js)",
      "2. Development of complex APIs with a focus on optimization for improved performance.",
      "3. Integration of APIs with frontend applications.",
      "4. Deployment of projects on cloud services such as AWS, ensuring seamless operation.",
    ],
  },
  {
    position: "Web Development Intern",
    companyName: "Triofi Technologies Private Limited",
    startDate: "Jan, 2022",
    endDate: "Apr, 2022",
    roles: [
      "1. Development of API.",
      "2. Testing the API using postman.",
      "3. Integration of APIs with frontend applications.",
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

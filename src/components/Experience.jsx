const expericenceData = [
  {
    position: "Software Engineer",
    companyName: "Mexo Technologies Private Limited",
    startDate: "Jan, 2026",
    endDate: "Present",
    roles: [
      "1. Architecting a multi-tenant SaaS platform (MES) within a TypeScript monorepo, leveraging Bun, Hono, and Drizzle ORM for ultra-fast, highly optimized API execution and database management.",
      "2. Enforcing strict end-to-end type safety and robust payload validation by sharing Zod schemas across the full stack, seamlessly bridging backend data models with the frontend interface.",
      "3. Developing a high-performance React.js (Vite) frontend, integrating TanStack Query for intelligent server-state caching to ensure seamless real-time data visualization across isolated enterprise environments.",
    ],
  },
  {
    position: "Software Engineer",
    companyName: "TELIBRAHMA SOFTWARE SERVICES LLP",
    startDate: "May, 2024",
    endDate: "Dec, 2025",
    roles: [
      "1. Engineered and delivered the initial R&D phase of the MES for industrial clients (Unimech), optimizing complex APIs to drive a 40% increase in system performance.",
      "2. Developed a full-stack sports academy management system using React, NestJS, and MySQL to streamline the scheduling and administration of publicly available athletic fields.",
      "3. Transformed Figma UI/UX designs into modular React components, improving frontend development efficiency by 20%",
      "4. Deployed and managed applications on AWS, ensuring high availability, scalability, and optimal performance through automated CI/CD pipelines.",
    ],
  },
  {
    position: "Software Developer",
    companyName: "Flyerssoft Private Limited",
    startDate: "Jan, 2023",
    endDate: "Jan, 2024",
    roles: [
      "1. Led the backend infrastructure development for an ongoing Industrial IoT application, improving API response times by 25% and reducing server load.",
      "2. Conducted on-site technical troubleshooting at client facilities to diagnose and resolve critical software-to-hardware integration issues in real-world environments.",
      "3. Incorporated APIs with the React frontend, cutting down the average data fetching time by 30%",
    ],
  },
  {
    position: "Software Developer",
    companyName: "Triofi Technologies Private Limited",
    startDate: "May, 2022",
    endDate: "Dec, 2022",
    roles: [
      "1. Architected an internal project management and ticketing platform (similar to Jira) using Node.js, Express, MongoDB, and TypeScript, accelerating the release cycle by 20%.",
      "2. Directed the end-to-end setup of software development projects, enhancing API integration efficiency to enable real-time data syncing with 99% accuracy.",
      "3. Deployed applications in AWS (EC2) and resolved 95% of issues pre-release by implementing early error-detection mechanisms.",
    ],
  },
  {
    position: "Web Development Intern",
    companyName: "Triofi Technologies Private Limited",
    startDate: "Jan, 2022",
    endDate: "Apr, 2022",
    roles: [
      "1. Developed APIs for internal tools and client projects, streamlining workflows and improving process efficiency by 15%, streamlining workflows and improving process efficiency by 15%.",
      "2. Conducted rigorous testing and bug-fixing on legacy systems using TypeScript and JavaScript to stabilize the existing codebase prior to production releases",
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

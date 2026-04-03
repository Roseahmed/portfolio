const About = () => {
  return (
    <div className="container bg-white py-5">
      <div className="row px-3">
        <div className="col-12">
          <h2 className="title position-relative pb-2 mb-4">About Me</h2>
        </div>
        <div className="col-12">
          <p>
            Results-driven Software Engineer with 4+ years of experience
            specializing in high-performance backend architecture and scalable
            system design. Proven ability to architect and deploy type-safe,
            multi-tenant web applications utilizing modern ecosystems
            (TypeScript, Bun, Hono, Drizzle ORM). Proficient at collaborating
            with cross-functional teams to translate complex business
            requirements into highly optimized, full-stack SaaS solutions.
          </p>
          <div className="row">
            <div className="col-sm-6 py-1">
              <h5 className="d-inline text-primary">Name:</h5> Rose Ahmed
            </div>
            <div className="col-sm-6 py-1">
              <h5 className="d-inline text-primary">Experience:</h5> 4+ Years
            </div>
            <div className="col-sm-6 py-1">
              <h5 className="d-inline text-primary">Phone:</h5> +91 9706736327
            </div>
            <div className="col-sm-6 py-1">
              <h5 className="d-inline text-primary">Email: </h5>
              roseahmed2013@gmail.com
            </div>
            <div className="col-sm-6 py-1">
              <h5 className="d-inline text-primary">Degree:</h5> MCA
            </div>
            <div className="col-sm-6 py-1">
              <h5 className="d-inline text-primary">Birthday:</h5> 15 February
              1999
            </div>
            <div className="col-sm-6 py-1">
              <h5 className="d-inline text-primary">Address:</h5> BTM Layout,
              Bengaluru, Karnataka, 560076
            </div>

            {/* <div className="col-sm-6 py-1">
              <h5 className="d-inline text-primary">Freelance:</h5> Available
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

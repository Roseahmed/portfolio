import { useEffect, useRef } from "react";

export default function Skills() {
  const progressBarsRef = useRef([]);

  useEffect(() => {
    // Function to update the width of progress bars
    const updateProgressBars = () => {
      progressBarsRef.current.forEach((bar) => {
        if (bar) {
          bar.style.width = bar.getAttribute("aria-valuenow") + "%";
        }
      });
    };

    // Observer options
    const options = {
      threshold: 0.2, // 20% visibility triggers the callback
    };

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateProgressBars();
        }
      });
    };

    // Create an observer instance
    const observer = new IntersectionObserver(observerCallback, options);

    // Observe each progress bar
    progressBarsRef.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });

    // Cleanup function
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="container bg-white py-5">
      <div className="row px-3">
        <div className="col-12">
          <h2 className="title position-relative pb-2 mb-4">Skills</h2>
        </div>
        {/* left side screen */}
        <div className="col-sm-6">
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">Javascript</p>
              <p className="mb-2">95%</p>
            </div>
            <div className="progress">
              <div
                ref={(el) => (progressBarsRef.current[1] = el)}
                className="progress-bar master"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">HTML</p>
              <p className="mb-2">95%</p>
            </div>
            <div className="progress">
              <div
                ref={(el) => (progressBarsRef.current[2] = el)}
                className="progress-bar expert"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">CSS</p>
              <p className="mb-2">75%</p>
            </div>
            <div className="progress">
              <div
                ref={(el) => (progressBarsRef.current[3] = el)}
                className="progress-bar intermediate"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          {/* added skills in left side of screen */}
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">Typescript</p>
              <p className="mb-2">85%</p>
            </div>
            <div className="progress">
              <div
                ref={(el) => (progressBarsRef.current[4] = el)}
                className="progress-bar advanced"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">MongoDB</p>
              <p className="mb-2">90%</p>
            </div>
            <div className="progress">
              <div
                ref={(el) => (progressBarsRef.current[5] = el)}
                className="progress-bar expert"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">PostgreSQL</p>
              <p className="mb-2">90%</p>
            </div>
            <div className="progress">
              <div
                ref={(el) => (progressBarsRef.current[6] = el)}
                className="progress-bar expert"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">C++</p>
              <p className="mb-2">70%</p>
            </div>
            <div className="progress">
              <div
                ref={(el) => (progressBarsRef.current[7] = el)}
                className="progress-bar intermediate"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        {/* Right side screen */}
        <div className="col-sm-6">
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">Node JS</p>
              <p className="mb-2">95%</p>
            </div>
            <div className="progress">
              <div
                ref={(el) => (progressBarsRef.current[8] = el)}
                className="progress-bar expert"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">Express JS</p>
              <p className="mb-2">95%</p>
            </div>
            <div className="progress">
              <div
                ref={(el) => (progressBarsRef.current[9] = el)}
                className="progress-bar expert"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">React JS</p>
              <p className="mb-2">85%</p>
            </div>
            <div className="progress">
              <div
                ref={(el) => (progressBarsRef.current[10] = el)}
                className="progress-bar intermediate"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          {/* add skill right side of screen */}
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">Nest JS</p>
              <p className="mb-2">85%</p>
            </div>
            <div className="progress">
              <div
                ref={(el) => (progressBarsRef.current[11] = el)}
                className="progress-bar intermediate"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">AWS</p>
              <p className="mb-2">75%</p>
            </div>
            <div className="progress">
              <div
                ref={(el) => (progressBarsRef.current[12] = el)}
                className="progress-bar intermediate"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">Docker</p>
              <p className="mb-2">85%</p>
            </div>
            <div className="progress">
              <div
                ref={(el) => (progressBarsRef.current[13] = el)}
                className="progress-bar intermediate"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">Linux</p>
              <p className="mb-2">90%</p>
            </div>
            <div className="progress">
              <div
                ref={(el) => (progressBarsRef.current[14] = el)}
                className="progress-bar expert"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

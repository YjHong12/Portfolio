import React from "react";

function Resume() {
  const resumeURL = "/resumePDF.pdf";

  return (
    <div className="Resume">
      <h2 className="sectionHead">Resume.</h2>
      <div className="resume-pdf">
        <iframe
          title="Resume PDF"
          src={resumeURL}
          width="100%"
          height="100%"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;

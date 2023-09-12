import React from "react";

export default function Privacy(){

    const pdfURL = "/privacy-policy.pdf";
return(
    <>
      <div>
      <object
        data={pdfURL}
        type="application/pdf"
        width="100%"
        height="1000px"
      >
        <p>
          Your browser does not support PDF files.{" "}
          <a href={pdfURL} target="_blank" rel="noopener noreferrer">
            Download the file instead
          </a>
        </p>
      </object>
    </div>

    </>
)

}
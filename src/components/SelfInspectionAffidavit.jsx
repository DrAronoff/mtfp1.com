import React from "react";
import { Link } from 'react-router-dom';

export function SelfInspectionAffidavit() {
    return (
        <>
       <br></br>
       <br></br>

       <br></br>
       <br></br>
        <center>
       <p><strong><Link to="/smoke-detector-application" target="_blank" rel="noreferrer noopener">Smoke Detector Application</Link> must be filled out first </strong></p>
       </center>
       <iframe
      id="JotFormIFrame-211894443199163"
      title="Monroe Township Fire District #1 Affidavit/Self Inspection	"
      onload="window.parent.scrollTo(0,0)"
      allowtransparency="true"
      allowfullscreen="true"
      allow="geolocation; microphone; camera"
      src="https://form.jotform.com/form/211894443199163"
      frameborder="0"
      class="iframe"
      
    >
    </iframe>


    
        </>
    )
}
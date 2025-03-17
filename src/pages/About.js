// import React from "react";
// import "./About.css";

// function About() {
//   return (
//     <div className="about-container">
//       <h1>About Us</h1>
//       <p>
//         Career Solutions Private Limited is a leading recruitment and staffing solutions provider, dedicated to connecting top talent with esteemed organizations.
//       </p>
//     </div>
//   );
// }

// export default About;

// import React from "react";
// import "../styles/common.css";


// function About() {
//   return (
//     <div className="container">
//       <h1>About Us</h1>
//       <p>
//         Career Solutions Private Limited is a leading recruitment and staffing 
//         solutions provider, dedicated to connecting top talent with esteemed organizations.
//       </p>
//     </div>
//   );
// }

// export default About;

import React from "react";
import "../styles/common.css";

function About() {
  return (
    <div className="container">
      <h1>About Us</h1>
      <p>
        Career Solutions Private Limited is a leading recruitment and staffing 
        solutions provider, dedicated to connecting top talent with esteemed organizations.
      </p>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>To empower businesses and job seekers with the best recruitment and staffing solutions.</p>
        
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Industry Expertise</li>
          <li>Personalized Solutions</li>
          <li>Proven Track Record</li>
        </ul>
      </div>
    </div>
  );
}

export default About;


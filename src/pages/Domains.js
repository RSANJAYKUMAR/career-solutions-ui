// import React from "react";

// function Domains() {
//   return (
//     <div className="page-container">
//       <h1>Domains of Research</h1>
//       <p>Explore various research fields including AI, IoT, Embedded Systems, and more.</p>
//       <ul>
//         <li>Embedded Systems</li>
//         <li>Networking</li>
//         <li>Automotives</li>
//         <li>Biometrics</li>
//         <li>Wireless Sensor Networks</li>
//         <li>Internet of Things (IoT)</li>
//         <li>Artificial Intelligence (AI)</li>
//         <li>Machine Learning</li>
//         <li>Robotics</li>
//         <li>Data Science</li>
//         <li>Astrophysics</li>
//       </ul>
//     </div>
//   );
// }

// export default Domains;

// import React from "react";

// const domains = [
//   { 
//     name: "Wireless Sensor Network", 
//     image: "/assets/courses/8051 Micro Controller.jpeg",
//     description: "Explore sensor networks, IoT communication, and real-time monitoring applications."
//   },
//   { 
//     name: "Artificial Intelligence", 
//     image: "/assets/domains/artificial_intelligence.jpeg",
//     description: "Dive into AI, machine learning, and neural networks to build intelligent systems."
//   },
//   { 
//     name: "Astrophysics", 
//     image: "/assets/domains/astrophysics.jpeg",
//     description: "Study celestial bodies, black holes, and cosmic phenomena shaping the universe."
//   },
//   { 
//     name: "Automotives", 
//     image: "/assets/domains/automotives.jpeg",
//     description: "Learn about automotive engineering, electric vehicles, and smart transportation."
//   },
//   { 
//     name: "Biometric", 
//     image: "/assets/domains/biometric.jpeg",
//     description: "Discover biometric security, fingerprint recognition, and facial authentication."
//   },
//   { 
//     name: "ARM Processor", 
//     image: "/assets/domains/arm_processor.jpeg",
//     description: "Understand ARM architecture, microprocessor design, and embedded systems."
//   },
//   { 
//     name: "Arduino", 
//     image: "/assets/domains/arduino.jpeg",
//     description: "Work with Arduino hardware, IoT projects, and real-world automation."
//   },
//   { 
//     name: "8051 Microcontroller", 
//     image: "/assets/domains/8051_microcontroller.jpeg",
//     description: "Master 8051 microcontroller programming and embedded system design."
//   },
// ];

// const Domains = () => {
//   return (
//     <div className="container">
//       <h2 className="page-title">Our Research Domains</h2>
//       <div className="grid-container">
//         {domains.map((domain, index) => (
//           <div className="card" key={index}>
//             <img className="card-image" src={domain.image} alt={domain.name} />
//             <h3 className="card-title">{domain.name}</h3>
//             <p className="card-description">{domain.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Domains;

import React from "react";

const domains = [
  {
    name: "8051 Micro Controller",
    image: "/assets/courses/8051 Micro Controller.jpeg",
    description: "Learn embedded system programming and microcontroller architecture."
},
  { 
    name: "Artificial Intelligence", 
    image: "/assets/domains/artificial_intelligence.jpeg",
    description: "Dive into AI, machine learning, and neural networks to build intelligent systems."
  },
  { 
    name: "Astrophysics", 
    image: "/assets/domains/astrophysics.jpeg",
    description: "Study celestial bodies, black holes, and cosmic phenomena shaping the universe."
  },
  { 
    name: "Automotives", 
    image: "/assets/domains/automotives.jpeg",
    description: "Learn about automotive engineering, electric vehicles, and smart transportation."
  },
  { 
    name: "Biometric", 
    image: "/assets/domains/biometric.jpeg",
    description: "Discover biometric security, fingerprint recognition, and facial authentication."
  },
  { 
    name: "ARM Processor", 
    image: "/assets/domains/arm_processor.jpeg",
    description: "Understand ARM architecture, microprocessor design, and embedded systems."
  },
  { 
    name: "Arduino", 
    image: "/assets/domains/arduino.jpeg",
    description: "Work with Arduino hardware, IoT projects, and real-world automation."
  },
  { 
    name: "8051 Microcontroller", 
    image: "/assets/domains/8051_microcontroller.jpeg",
    description: "Master 8051 microcontroller programming and embedded system design."
  },
];

const Domains = () => {
  return (
    <div className="container">
      <h1 className="page-title">Our Research Domains</h1>
      <p className="page-description">We specialize in various research fields that drive innovation and technological advancements.</p>
      
      <div className="grid-container">
        {domains.map((domain, index) => (
          <div className="card" key={index}>
            <img className="card-image" src={domain.image} alt={domain.name} />
            <h3 className="card-title">{domain.name}</h3>
            <p className="card-description">{domain.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Domains;

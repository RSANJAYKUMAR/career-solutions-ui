// import React from "react";
// import "../styles/common.css";

// const courses = [
//   {
//     id: 1,
//     title: "8051 Microcontroller",
//     description: "Introduced in 1981 by Intel, 8051 is one of the first and most popular microcontrollers, also known as MCS-51.",
//     image: "https://source.unsplash.com/300x200/?microcontroller",
//   },
//   {
//     id: 2,
//     title: "PIC Microcontroller",
//     description: "PIC microcontrollers are used in smartphones, audio accessories, and advanced medical devices.",
//     image: "https://source.unsplash.com/300x200/?electronics",
//   },
//   {
//     id: 3,
//     title: "ARM Processor",
//     description: "Advanced RISC Machine (ARM) processors are used in mobile devices, wearables, and even supercomputers.",
//     image: "https://source.unsplash.com/300x200/?processor",
//   },
//   {
//     id: 4,
//     title: "Raspberry Pi",
//     description: "A series of small single-board computers used in embedded systems and IoT projects.",
//     image: "https://source.unsplash.com/300x200/?raspberrypi",
//   },
//   {
//     id: 5,
//     title: "Arduino",
//     description: "An open-source electronics platform based on easy-to-use hardware and software.",
//     image: "https://source.unsplash.com/300x200/?arduino",
//   },
//   {
//     id: 6,
//     title: "C Programming",
//     description: "A high-level programming language developed by Dennis Ritchie, known for efficiency and portability.",
//     image: "https://source.unsplash.com/300x200/?coding",
//   },
//   {
//     id: 7,
//     title: "C++ Programming",
//     description: "An extension of C with object-oriented features, widely used for building high-performance applications.",
//     image: "https://source.unsplash.com/300x200/?cplusplus",
//   },
//   {
//     id: 8,
//     title: "Java",
//     description: "A versatile programming language used for web applications, enterprise software, and cloud computing.",
//     image: "https://source.unsplash.com/300x200/?java",
//   },
//   {
//     id: 9,
//     title: ".NET",
//     description: "A free, open-source framework developed by Microsoft for building applications across platforms.",
//     image: "https://source.unsplash.com/300x200/?dotnet",
//   },
//   {
//     id: 10,
//     title: "MATLAB",
//     description: "A programming language and numeric computing platform used in engineering and scientific applications.",
//     image: "https://source.unsplash.com/300x200/?matlab",
//   },
//   {
//     id: 11,
//     title: "Linux Administration",
//     description: "Managing and maintaining Linux-based systems for security, performance, and reliability.",
//     image: "https://source.unsplash.com/300x200/?linux",
//   },
//   {
//     id: 12,
//     title: "CCNA",
//     description: "Cisco Certified Network Associate certification for networking professionals.",
//     image: "https://source.unsplash.com/300x200/?networking",
//   },
//   {
//     id: 13,
//     title: "Python",
//     description: "A high-level, general-purpose programming language known for its readability and simplicity.",
//     image: "https://source.unsplash.com/300x200/?python",
//   },
//   {
//     id: 14,
//     title: "R Programming",
//     description: "A statistical computing language widely used in data science and analytics.",
//     image: "https://source.unsplash.com/300x200/?data",
//   }
// ];

// function Courses() {
//   return (
//     <div className="container">
//       <h1>Our Courses</h1>
//       <div className="courses-container">
//         {courses.map((course) => (
//           <div key={course.id} className="course-card">
//             <img src={course.image} alt={course.title} className="course-image" />
//             <h3>{course.title}</h3>
//             <p>{course.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Courses;


// const courses = [
//     {
        // name: "8051 Micro Controller",
        // image: "/assets/courses/8051 Micro Controller.jpeg",
        // description: "Learn embedded system programming and microcontroller architecture."
//     },

//     {
//         name: "PIC Micro Controller",
//         image: "/assets/courses/Pic micro controller.jpeg",
//         description: "Master programming with Peripheral Interface Controllers for industrial applications."
//     },

//     {
        // name: "ARM Processor",
        // image: "/assets/courses/ARM Processor.jpeg",
        // description: "Understand ARM architecture for mobile and embedded systems."
//     },
//     {
        // name: "Raspberry Pi Models",
        // image: "/assets/courses/Raspberry pi model.jpeg",
        // description: "Develop IoT and automation projects using Raspberry Pi boards."
//     },
//     {
        // name: "Arduino",
        // image: "/assets/courses/Arduino.jpeg",
        // description: "Get hands-on with open-source electronics prototyping and Arduino boards."
//     },
    // {
    //     name: "C Programming",
    //     image: "/assets/courses/C Programming.jpeg",
    //     description: "Fundamental programming concepts and problem-solving techniques"
    // },
    // {
    //     name: "C++ Programming",
    //     image: "/assets/courses/C++ Programming.jpeg",
    //     description: "Object-oriented programming and advanced data structures."
    // },
    // {
    //     name: "Java",
    //     image: "/assets/courses/Java.jpeg",
    //     description: "Building scalable applications using Java and Spring framework."
    // },
    // {
    //     name: ".NET",
    //     image: "/assets/courses/net.jpeg",
    //     description: "Develop web and desktop applications using .NET framework."
    // },
    // {
    //     name: "Python",
    //     image: "/assets/courses/PYTHON.jpeg",
    //     description: "High-level programming for data analysis and machine learning."
    // },
//     {
//         name: "Astrophysics",
//         image: "/assets/courses/astrophysics.jpeg",
//         description: "Learn embedded system programming and microcontroller architecture."
//     },

// ];

// const Courses = () => {
//     return (
//         <div>
//             <h2>Our Courses</h2>
//             <div style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//                 gap: "20px"
//             }}>
//                 {courses.map((course, index) => (
//                     <div
//                         key={index}
//                         style={{
//                             textAlign: "center",
//                             padding: "15px",
//                             border: "1px solid #ddd",
//                             borderRadius: "10px",
//                             boxShadow: "0px 4px 6px rgba(0,0,0,0.1)"
//                         }}
//                     >
//                         <img
//                             src={course.image}
//                             alt={course.name}
//                             style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
//                         />
//                         <h3>{course.name}</h3>
//                         <p style={{ fontSize: "14px", color: "#555" }}>{course.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );

// };

// export default Courses;

// const Courses = () => {
//     return (
//       <div className="container">
//         <h2 className="page-title">Our Courses</h2>
//         <div className="grid-container">
//           {courses.map((course, index) => (
//             <div className="card" key={index}>
//               <img className="card-image" src={course.image} alt={course.name} />
//               <h3 className="card-title">{course.name}</h3>
//               <p className="card-description">{course.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default Courses;

import React, { useState } from "react";
import { Container, Typography, Tabs, Tab, Card, CardMedia, CardContent, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";  // Import for navigation
import "../styles/courses.css";

const StyledTabs = styled(Tabs)({
  backgroundColor: "#f0f0f0",
  borderRadius: "8px",
  padding: "5px",
  "& .MuiTab-root": {
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    margin: "5px",
    transition: "all 0.3s ease-in-out",
  },
  "& .MuiTab-root.Mui-selected": {
    backgroundColor: "#007bff",
    color: "white",
    boxShadow: "0px 4px 10px rgba(0, 123, 255, 0.4)",
  }
});

const hardwareCourses = [
  { 
    name: "8051 Micro Controller",
    image: "/assets/courses/8051 Micro Controller.jpeg",
    description: "Learn embedded system programming and microcontroller architecture.",
    fullDescription:""
  },
  { 
    name: "ARM Processor",
    image: "/assets/courses/ARM Processor.jpeg",
    description: "Understand ARM architecture for mobile and embedded systems.",
    fullDescription:""
  },
  { 
    name: "Arduino",
    image: "/assets/courses/Arduino.jpeg",
    description: "Get hands-on with open-source electronics prototyping and Arduino boards.",
    fullDescription:""
  },
  { 
    name: "Raspberry Pi Models",
    image: "/assets/courses/Raspberry pi model.jpeg",
    description: "Develop IoT and automation projects using Raspberry Pi boards.",
    fullDescription:""
  },
  { 
    name: "Pic Micro controller",
    image: "/assets/courses/Pic micro controller.jpeg",
    description: "Develop IoT and automation projects using Raspberry Pi boards.",
    fullDescription:""
  }
];

const softwareCourses = [
 {
    name: "C Programming",
    image: "/assets/courses/C Programming.jpeg",
    description: "Fundamental programming concepts and problem-solving techniques",
    fullDescription:""
},
{
    name: "C++ Programming",
    image: "/assets/courses/C++ Programming.jpeg",
    description: "Object-oriented programming and advanced data structures.",
    fullDescription:""
},
{
    name: "Java",
    image: "/assets/courses/Java.jpeg",
    description: "Building scalable applications using Java and Spring framework.",
    fullDescription:""
},
{
    name: ".NET",
    image: "/assets/courses/net.jpeg",
    description: "Develop web and desktop applications using .NET framework.",
    fullDescription:""
},
{
    name: "Python",
    image: "/assets/courses/PYTHON.jpeg",
    description: "High-level programming for data analysis and machine learning.",
    fullDescription:"aaaaaaaaaaaaaaaaaaassassadassd"
},
{
  name: "R-Programming ",
  image: "/assets/courses/R-Programming.jpeg",
  description: "High-level programming for data analysis and machine learning.",
  fullDescription:"aaaaaaaaaaaaaaaaaaassassadassd"
},
{
  name: "MATLAB ",
  image: "/assets/courses/MATLAB.jpeg",
  description: "High-level programming for data analysis and machine learning.",
  fullDescription:"aaaaaaaaaaaaaaaaaaassassadassd"
},
{
  name: "Linux administrator",
  image: "/assets/courses/Linux Administrators.jpeg",
  description: "High-level programming for data analysis and machine learning.",
  fullDescription:"aaaaaaaaaaaaaaaaaaassassadassd"
},
// {
//   name: "Linux with server",
//   image: "/assets/courses/PYTHON.jpeg",
//   description: "High-level programming for data analysis and machine learning.",
//   fullDescription:"aaaaaaaaaaaaaaaaaaassassadassd"
// },
{
  name: "CCNA",
  image: "/assets/courses/CCNA.jpeg",
  description: "High-level programming for data analysis and machine learning.",
  fullDescription:"aaaaaaaaaaaaaaaaaaassassadassd"
}
];

const Courses = () => {
    const [selectedCategory, setSelectedCategory] = useState("hardware");
    const navigate = useNavigate(); // Initialize navigation
  
    const handleCourseClick = (course) => {
        navigate(`/course-details`, { state: { course: { ...course, description: course.fullDescription } } });
      };
      

  
    return (
      <Container>
        <Typography variant="h4" align="center" gutterBottom >
          Our Courses
        </Typography>
        
        <StyledTabs value={selectedCategory} onChange={(event, newValue) => setSelectedCategory(newValue)} centered>
          <Tab label="🔧 Hardware Courses" value="hardware" />
          <Tab label="💻 Software Courses" value="software" />
        </StyledTabs>
  
        <Grid container spacing={3} justifyContent="center" style={{ marginTop: 20 }}>
          {(selectedCategory === "hardware" ? hardwareCourses : softwareCourses).map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card style={{ cursor: "pointer" }} onClick={() => handleCourseClick(course)}>
                <CardMedia component="img" height="200" image={course.image} alt={course.name} />
                <CardContent>
                  <Typography variant="h6" gutterBottom>{course.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{course.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  };
  
  export default Courses;

// import React from "react";
// import { useLocation } from "react-router-dom";
// import { Container, Typography, Card, CardMedia, CardContent } from "@mui/material";

// const CourseDetails = () => {
//   const location = useLocation();
//   const { course } = location.state || {}; // Get course details from state

//   if (!course) {
//     return <Typography variant="h6" align="center">No course data available.</Typography>;
//   }

//   return (
//     <Container>
//       <Card>
//         <CardMedia component="img" height="300" image={course.image} alt={course.name} />
//         <CardContent>
//           <Typography variant="h4" gutterBottom>{course.name}</Typography>
//           <Typography variant="body1">{course.description}</Typography>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default CourseDetails;


// import React from "react";
// import { useLocation } from "react-router-dom";
// import { Container, Typography, Card, CardMedia, CardContent, Box } from "@mui/material";

// const CourseDetails = () => {
//   const location = useLocation();
//   const { course } = location.state || {}; // Get course details from state

//   if (!course) {
//     return <Typography variant="h6" align="center">No course data available.</Typography>;
//   }

//   return (
//     <Container>
//       <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
//         <Card style={{ maxWidth: "800px", width: "100%" }}>
//           <CardMedia
//             component="img"
//             height="400"
//             image={course.image}
//             alt={course.name}
//             style={{ objectFit: "contain" }}
//           />
//           <CardContent>
//             <Typography variant="h4" gutterBottom>{course.name}</Typography>
//             <Typography variant="body1" paragraph>
//               {course.description}
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               This course covers a wide range of topics, including practical applications, industry relevance, and hands-on learning experiences. You'll gain in-depth knowledge and skills that will help you excel in your career.
//             </Typography>
//           </CardContent>
//         </Card>
//       </Box>
//     </Container>
//   );
// };

// export default CourseDetails;


import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Card, CardMedia, CardContent, Box } from "@mui/material";

const CourseDetails = () => {
  const location = useLocation();
  const { course } = location.state || {}; // Get course details from state

  if (!course) {
    return <Typography variant="h6" align="center">No course data available.</Typography>;
  }

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <Card style={{ maxWidth: "800px", width: "100%" }}>
          <CardMedia
            component="img"
            height="400"
            image={course.image}
            alt={course.name}
            style={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography variant="h4" gutterBottom>{course.name}</Typography>
            <Typography variant="body1" paragraph>
              {course.description}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default CourseDetails;


import React, { useState } from "react";
import { Container, Typography, Card, CardMedia, CardContent, Grid, Box, FormControlLabel, Switch } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/courses.css";


const hardwareCourses = [
  {
    name: "8051 Micro Controller",
    image: "/assets/courses/8051 Micro Controller.jpeg",
    description: "Learn embedded system programming and microcontroller architecture.",
    fullDescription: "8051 is one of the first and most popular microcontrollers also known as MCS-51. Intel introduced it in the year 1981. Initially, it came out as an N-type metal-oxide-semiconductor (NMOS) based microcontroller, but later versions were based on complementary metal-oxide-semiconductor (CMOS) technology. These microcontrollers were named 80C51, where C in the name tells that it is based on CMOS technology."
  },
  {
    name: "ARM Processor",
    image: "/assets/courses/ARM Processor.jpeg",
    description: "Understand ARM architecture for mobile and embedded systems.",
    fullDescription: "Advanced RISC Machine (ARM) Processor is considered to be the family of a Central Processing Units that are used in the music players, smartphones, wearables, tablets and the other consumer electronic devices. Advanced RISC Machines create ARM processor architecture hence the name is ARM. This needs very few instruction sets and transistors. It is very small in size. This is the reason that it is a perfect fit for small-size devices. It has less power consumption along with reduced complexity in its circuits.  They can be applied to various designs such as 32-bit devices and embedded systems. They can even be upgraded according to user needs. ARM Processor is not only limited to mobile phones but is also used in Fugak, the world’s fastest supercomputer. ARM Processor also gives more feasibility to designs of hardware designers and also gives control to designer’s supply chains."
  },
  {
    name: "Arduino",
    image: "/assets/courses/Arduino.jpeg",
    description: "Get hands-on with open-source electronics prototyping and Arduino boards.",
    fullDescription: "Arduino is an open-source electronics platform that allows users to create interactive electronic projects. It consists of a microcontroller board, a programming language, and a development environment. Arduino was created in 2003 by Massimo Banzi, David Cuartielles, Tom Igoe, Gianluca Martino, and David Mellis at the Interaction Design Institute Ivrea in Italy. 1. Arduino Uno:- The most popular Arduino board, featuring an ATmega328P microcontroller.2. Arduino Mega:- A more powerful board, featuring an ATmega2560 microcontroller.3. Arduino Nano:- A compact board, featuring an ATmega328P microcontroller.4. Arduino Micro:- A small board, featuring an ATmega32U4 microcontroller.5.Arduino Due:- A high-performance board, featuring an AT91SAM3X8E microcontroller."
  },
  {
    name: "Raspberry Pi Models",
    image: "/assets/courses/Raspberry pi model.jpeg",
    description: "Develop IoT and automation projects using Raspberry Pi boards.",
    fullDescription: "Raspberry Pi 1 Model A:- Released in 2012, this model features a 700 MHz ARM11 processor, 256 MB RAM, and no Ethernet port. Raspberry Pi 1 Model B:- Released in 2012, this model features a 700 MHz ARM11 processor, 256 MB RAM, and an Ethernet port. Raspberry Pi 2 Model B:- Released in 2015, this model features a 900 MHz ARM Cortex-A7 processor, 1 GB RAM, and an Ethernet port.Raspberry Pi 3 Model B:- Released in 2016, this model features a 1.2 GHz ARM Cortex-A53 processor, 1 GB RAM, and an Ethernet port, as well as built-in Wi-Fi and Bluetooth.Raspberry Pi 3 Model B+:- Released in 2018, this model features a 1.4 GHz ARM Cortex-A53 processor, 1 GB RAM, and an Ethernet port, as well as built-in Wi-Fi and Bluetooth.Raspberry Pi 4 Model B:- Released in 2019, this model features a 1.5 GHz ARM Cortex-A72 processor, up to 4 GB RAM, and an Ethernet port, as well as built-in Wi-Fi and Bluetooth.Raspberry Pi 400: Released in 2020, this model features a 1.8 GHz ARM Cortex-A72 processor, up to 4 GB RAM, and an Ethernet port, as well as built-in Wi-Fi and Bluetooth."
  },
  {
    name: "Pic Micro controller",
    image: "/assets/courses/Pic micro controller.jpeg",
    description: "Develop IoT and automation projects using Raspberry Pi boards.",
    fullDescription: "PIC is a Peripheral Interface Microcontroller which was developed in the year 1993 by the General Instruments Microcontrollers. It is controlled by software and programmed in such a way that it performs different tasks and controls a generation line. PIC microcontrollers are used in different new applications such as smartphones, audio accessories, and advanced medical devices. There are many PICs available in the market ranging from PIC16F84 to PIC16C84. These types of PICs are affordable flash PICs. Microchip has recently introduced flash chips with different types, such as 16F628, 16F877, and 18F452. The 16F877 costs twice the price of the old 16F84, but it is eight times more than the code size, with more RAM and much more I/O pins, a UART, A/D converter and a lot more features."
  }
];

const softwareCourses = [
  {
    name: "C Programming",
    image: "/assets/courses/C Programming.jpeg",
    description: "Fundamental programming concepts and problem-solving techniques",
    fullDescription: "C is a high-level, general-purpose programming language that was developed by Dennis Ritchie in the 1970s. It is a structured language that allows for efficient and portable programming. A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. Functions are used to perform certain actions, and they are important for reusing code: Define the code once, and use it many times. Portability: C code can be compiled on a wide range of platforms with minimal modifications. Efficiency: C is a low-level language that provides direct access to hardware resources, making it a good choice for systems programming. Flexibility: C allows for a wide range of programming styles, from structured programming to object-oriented programming. Reliability: C is a reliable language that provides a high degree of control over the programming process."
  },
  {
    name: "C++ Programming",
    image: "/assets/courses/C++ Programming.jpg",
    description: "Object-oriented programming and advanced data structures.",
    fullDescription: "C++ is a high-level, general-purpose programming language that was developed by Bjarne Stroustrup as an extension of the C programming language. It is a compiled language that supports object-oriented programming (OOP) and is widely used for building operating systems, games, web browsers, and other high-performance applications. Object-Oriented Programming: C++ supports OOP concepts such as encapsulation, inheritance, and polymorphism.\n2. Templates: C++ provides a feature called templates that allows for generic programming. Operator Overloading: C++ allows operators to be redefined for user-defined data types. Exception Handling: C++ provides a built-in mechanism for handling runtime errors. Multi-Paradigm Programming: C++ supports multiple programming paradigms, including OOP, imperative programming, and functional programming."
  },
  {
    name: "Java",
    image: "/assets/courses/Java.jpeg",
    description: "Building scalable applications using Java and Spring framework.",
    fullDescription: "Java is an extremely transferable programming language used across platforms and different types of devices, from smartphones to smart TVs. It's used for creating mobile and web apps, enterprise software, Internet of Things (IoT) devices, gaming, big data, distributed, and cloud-based applications among other types.Platform Independence: Java code can run on any platform that has a JVM. Object-Oriented: Java supports object-oriented programming (OOP) concepts like encapsulation, inheritance, and polymorphism.Simple and Familiar Syntax: Java's syntax is similar to C++ and other programming languages.Robust Security: Java has built-in security features like memory management and data type checking."

  },
  {
    name: ".NET",
    image: "/assets/courses/net.jpeg",
    description: "Develop web and desktop applications using .NET framework.",
    fullDescription: ".NET is a free, open-source software framework developed by Microsoft. It's designed to support the development of a wide range of applications, including web, mobile, desktop, and server-based applications. NET is a software development framework used to build applications for desktop, web, and mobile. It includes tools, libraries, and languages that support application development.Cross-Platform: .NET allows developers to build applications that can run on multiple platforms, including Windows, macOS, and Linux.Object-Oriented: .NET supports object-oriented programming (OOP) concepts like encapsulation, inheritance, and polymorphism. Large Community: .NET has a massive community of developers, which means there are plenty of resources available. Extensive Libraries: NET provides an extensive set of libraries and APIs for tasks like database access, file I/O, and networking."
  },
  {
    name: "Python",
    image: "/assets/courses/PYTHON.jpeg",
    description: "High-level programming for data analysis and machine learning.",
    fullDescription: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically type-checked and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a language due to its comprehensive standard library. Easy to Learn: Python has a simple syntax and is relatively easy to learn, making it a great language for beginners. High-Level Language: Python is a high-level language, meaning it abstracts away many low-level details, allowing developers to focus on the logic of their program. Interpreted Language: Python code is interpreted, not compiled, which makes it easier to write and test code. Object-Oriented: Python is an object-oriented language, which means it organizes code into objects that contain data and functions that operate on that data. Large Standard Library: Python has a vast and comprehensive standard library that includes modules for various tasks, such as file I/O, networking, and data structures."
  },
  {
    name: "R-Programming ",
    image: "/assets/courses/R-Programming.jpeg",
    description: "High-level programming for data analysis and machine learning.",
    fullDescription: "R is a free, open-source programming language used for statistical computing and data visualization. It's commonly used in data science, bioinformatics, and data mining. R is a programming language for statistical computing and data visualization. It has been adopted in the fields of data mining, bioinformatics and data analysis. The core R language is augmented by a large number of extension packages, containing reusable code, documentation, and sample data. Variables: Variables are declared using the <- or = operator. Data Types: R has several data types, including numeric, character, logical, and factor. Operators: R has various operators, including arithmetic, comparison, logical, and assignment operators. Control Structures: R has control structures, including if-else statements, loops (for, while, repeat), and switch statements. Functions: Functions are declared using the function () keyword."
  },
  {
    name: "MATLAB ",
    image: "/assets/courses/MATLAB.jpeg",
    description: "High-level programming for data analysis and machine learning.",
    fullDescription: "MATLAB (Matrix Laboratory) is a high-level, high-performance programming language and environment specifically designed for numerical computation, data analysis, and visualization. MATLAB is a programming language and numeric computing platform used for math, engineering, and scientific applications. It's used for data analysis, algorithm development, modelling, simulation, and moreNumerical Analysis: MATLAB is widely used for numerical analysis, including linear algebra, optimization, and signal processing. Data Analysis and Visualization: MATLAB is widely used for data analysis and visualization, including statistical analysis, data mining, and data visualization. Image and Signal Processing: MATLAB is widely used for image and signal processing, including image filtering, image segmentation, and signal filtering. Control Systems: MATLAB is widely used for control systems, including control system design, simulation, and analysis. Machine Learning and Deep Learning: MATLAB is widely used for machine learning and deep learning, including neural networks, deep learning, and computer vision."

  },
  {
    name: "Linux administrator",
    image: "/assets/courses/Linux Administrators.jpeg",
    description: "High-level programming for data analysis and machine learning.",
    fullDescription: "A Linux administrator is an IT professional who installs, configures, and maintains Linux operating systems. They also troubleshoot and report bugs. Linux administration involves managing and maintaining Linux-based systems, ensuring their performance, security, and reliability. Shell scripting: Learn how to write shell scripts to automate tasks System administration: Learn how to monitor, back up, and update systems Networking: Learn networking concepts for Unix and Linux Command line: Learn how to use the Command Line Interface (CLI) Security: Learn how to secure systems System configurations: Learn how to configure systems Complete Linux Training With Troubleshooting Skills: Learn how to use Ubuntu and RedHat environments LPI Linux Essentials: Learn the basics of Linux and prepare for the LPI Linux Essentials exam  Learning Linux command line: Learn how to navigate the command line and advanced concepts like network administration and system security"
  },
  {
    name: "CCNA",
    image: "/assets/courses/CCNA.jpeg",
    description: "High-level programming for data analysis and machine learning.",
    fullDescription: "CCNA (Cisco Certified Network Associate) is an entry-level information technology (IT) certification offered by Cisco Systems. CCNA certification is widely recognized in the IT industry. People around the world depend on the Internet to work, meet, educate, play, and even order dinner and none of this would be possible without networking professionals. So if you’re thinking about changing careers or pursuing new opportunities, think about IT!Build the skills you need for associate-level job roles like Network Administrator, System Administrator, or Network Engineer in this three-course series. You will also get ready to take the Cisco Certified Network Associate (CCNA) certification exam, an industry-recognized credential that validates your expertise and opens doors to exciting professional opportunities."
  }
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState(true); // true for hardware, false for software
  const navigate = useNavigate();

  const handleCourseClick = (course) => {
    navigate(`/course-details`, { state: { course: { ...course, description: course.fullDescription } } });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh", background: "linear-gradient(to right, rgb(247, 251, 255), rgb(76, 205, 241))", padding: "40px 0" }}>
      <Container>

        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#007bff" }}>
          Courses
        </Typography>

        {/* Toggle Switch for Course Selection */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
          <Typography variant="h6" sx={{ marginRight: "10px" }}>💻 Software</Typography>
          <FormControlLabel
            control={<Switch checked={selectedCategory} onChange={() => setSelectedCategory(!selectedCategory)} color="primary" />}
            label="🔧 Hardware"
          />
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {(selectedCategory ? hardwareCourses : softwareCourses).map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card style={{ position: "relative", cursor: "pointer" }} onClick={() => handleCourseClick(course)}>
                <div style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  fontSize: "0.9rem"
                }}>
                  View Details
                </div>
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
    </Box>
  );
};

export default Courses;
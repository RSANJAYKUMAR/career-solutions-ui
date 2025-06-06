"use client"

import { useState, useEffect } from "react"
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Box,
  Switch,
  Chip,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Computer, Memory, ArrowForward } from "@mui/icons-material"
import "../styles/courses.css"

const hardwareCourses = [
  {
    name: "8051 Micro Controller",
    image: "/assets/courses/8051 Micro Controller.jpeg",
    description: "Learn embedded system programming and microcontroller architecture.",
    level: "Intermediate",
    duration: "6 weeks",
    fullDescription:
      "8051 is one of the first and most popular microcontrollers also known as MCS-51. Intel introduced it in the year 1981. Initially, it came out as an N-type metal-oxide-semiconductor (NMOS) based microcontroller, but later versions were based on complementary metal-oxide-semiconductor (CMOS) technology. These microcontrollers were named 80C51, where C in the name tells that it is based on CMOS technology.",
  },
  {
    name: "ARM Processor",
    image: "/assets/courses/ARM Processor.jpeg",
    description: "Understand ARM architecture for mobile and embedded systems.",
    level: "Advanced",
    duration: "8 weeks",
    fullDescription:
      "Advanced RISC Machine (ARM) Processor is considered to be the family of a Central Processing Units that are used in the music players, smartphones, wearables, tablets and the other consumer electronic devices. Advanced RISC Machines create ARM processor architecture hence the name is ARM. This needs very few instruction sets and transistors. It is very small in size. This is the reason that it is a perfect fit for small-size devices. It has less power consumption along with reduced complexity in its circuits.  They can be applied to various designs such as 32-bit devices and embedded systems. They can even be upgraded according to user needs. ARM Processor is not only limited to mobile phones but is also used in Fugak, the world's fastest supercomputer. ARM Processor also gives more feasibility to designs of hardware designers and also gives control to designer's supply chains.",
  },
  {
    name: "Arduino",
    image: "/assets/courses/Arduino.jpeg",
    description: "Get hands-on with open-source electronics prototyping and Arduino boards.",
    level: "Beginner",
    duration: "4 weeks",
    fullDescription:
      "Arduino is an open-source electronics platform that allows users to create interactive electronic projects. It consists of a microcontroller board, a programming language, and a development environment. Arduino was created in 2003 by Massimo Banzi, David Cuartielles, Tom Igoe, Gianluca Martino, and David Mellis at the Interaction Design Institute Ivrea in Italy. 1. Arduino Uno:- The most popular Arduino board, featuring an ATmega328P microcontroller.2. Arduino Mega:- A more powerful board, featuring an ATmega2560 microcontroller.3. Arduino Nano:- A compact board, featuring an ATmega328P microcontroller.4. Arduino Micro:- A small board, featuring an ATmega32U4 microcontroller.5.Arduino Due:- A high-performance board, featuring an AT91SAM3X8E microcontroller.",
  },
  {
    name: "Raspberry Pi Models",
    image: "/assets/courses/Raspberry pi model.jpeg",
    description: "Develop IoT and automation projects using Raspberry Pi boards.",
    level: "Intermediate",
    duration: "6 weeks",
    fullDescription:
      "Raspberry Pi 1 Model A:- Released in 2012, this model features a 700 MHz ARM11 processor, 256 MB RAM, and no Ethernet port. Raspberry Pi 1 Model B:- Released in 2012, this model features a 700 MHz ARM11 processor, 256 MB RAM, and an Ethernet port. Raspberry Pi 2 Model B:- Released in 2015, this model features a 900 MHz ARM Cortex-A7 processor, 1 GB RAM, and an Ethernet port.Raspberry Pi 3 Model B:- Released in 2016, this model features a 1.2 GHz ARM Cortex-A53 processor, 1 GB RAM, and an Ethernet port, as well as built-in Wi-Fi and Bluetooth.Raspberry Pi 3 Model B+:- Released in 2018, this model features a 1.4 GHz ARM Cortex-A53 processor, 1 GB RAM, and an Ethernet port, as well as built-in Wi-Fi and Bluetooth.Raspberry Pi 4 Model B:- Released in 2019, this model features a 1.5 GHz ARM Cortex-A72 processor, up to 4 GB RAM, and an Ethernet port, as well as built-in Wi-Fi and Bluetooth.Raspberry Pi 400: Released in 2020, this model features a 1.8 GHz ARM Cortex-A72 processor, up to 4 GB RAM, and an Ethernet port, as well as built-in Wi-Fi and Bluetooth.",
  },
  {
    name: "Pic Micro controller",
    image: "/assets/courses/Pic micro controller.jpeg",
    description: "Master PIC microcontroller programming and applications.",
    level: "Intermediate",
    duration: "5 weeks",
    fullDescription:
      "PIC is a Peripheral Interface Microcontroller which was developed in the year 1993 by the General Instruments Microcontrollers. It is controlled by software and programmed in such a way that it performs different tasks and controls a generation line. PIC microcontrollers are used in different new applications such as smartphones, audio accessories, and advanced medical devices. There are many PICs available in the market ranging from PIC16F84 to PIC16C84. These types of PICs are affordable flash PICs. Microchip has recently introduced flash chips with different types, such as 16F628, 16F877, and 18F452. The 16F877 costs twice the price of the old 16F84, but it is eight times more than the code size, with more RAM and much more I/O pins, a UART, A/D converter and a lot more features.",
  },
]

const softwareCourses = [
  {
    name: "C Programming",
    image: "/assets/courses/C Programming.jpeg",
    description: "Fundamental programming concepts and problem-solving techniques",
    level: "Beginner",
    duration: "8 weeks",
    fullDescription:
      "C is a high-level, general-purpose programming language that was developed by Dennis Ritchie in the 1970s. It is a structured language that allows for efficient and portable programming. A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. Functions are used to perform certain actions, and they are important for reusing code: Define the code once, and use it many times. Portability: C code can be compiled on a wide range of platforms with minimal modifications. Efficiency: C is a low-level language that provides direct access to hardware resources, making it a good choice for systems programming. Flexibility: C allows for a wide range of programming styles, from structured programming to object-oriented programming. Reliability: C is a reliable language that provides a high degree of control over the programming process.",
  },
  {
    name: "C++ Programming",
    image: "/assets/courses/C++ Programming.jpg",
    description: "Object-oriented programming and advanced data structures.",
    level: "Intermediate",
    duration: "10 weeks",
    fullDescription:
      "C++ is a high-level, general-purpose programming language that was developed by Bjarne Stroustrup as an extension of the C programming language. It is a compiled language that supports object-oriented programming (OOP) and is widely used for building operating systems, games, web browsers, and other high-performance applications. Object-Oriented Programming: C++ supports OOP concepts such as encapsulation, inheritance, and polymorphism.\n2. Templates: C++ provides a feature called templates that allows for generic programming. Operator Overloading: C++ allows operators to be redefined for user-defined data types. Exception Handling: C++ provides a built-in mechanism for handling runtime errors. Multi-Paradigm Programming: C++ supports multiple programming paradigms, including OOP, imperative programming, and functional programming.",
  },
  {
    name: "Java",
    image: "/assets/courses/Java.jpeg",
    description: "Building scalable applications using Java and Spring framework.",
    level: "Intermediate",
    duration: "12 weeks",
    fullDescription:
      "Java is an extremely transferable programming language used across platforms and different types of devices, from smartphones to smart TVs. It's used for creating mobile and web apps, enterprise software, Internet of Things (IoT) devices, gaming, big data, distributed, and cloud-based applications among other types.Platform Independence: Java code can run on any platform that has a JVM. Object-Oriented: Java supports object-oriented programming (OOP) concepts like encapsulation, inheritance, and polymorphism.Simple and Familiar Syntax: Java's syntax is similar to C++ and other programming languages.Robust Security: Java has built-in security features like memory management and data type checking.",
  },
  {
    name: ".NET",
    image: "/assets/courses/net.jpeg",
    description: "Develop web and desktop applications using .NET framework.",
    level: "Intermediate",
    duration: "10 weeks",
    fullDescription:
      ".NET is a free, open-source software framework developed by Microsoft. It's designed to support the development of a wide range of applications, including web, mobile, desktop, and server-based applications. NET is a software development framework used to build applications for desktop, web, and mobile. It includes tools, libraries, and languages that support application development.Cross-Platform: .NET allows developers to build applications that can run on multiple platforms, including Windows, macOS, and Linux.Object-Oriented: .NET supports object-oriented programming (OOP) concepts like encapsulation, inheritance, and polymorphism. Large Community: .NET has a massive community of developers, which means there are plenty of resources available. Extensive Libraries: NET provides an extensive set of libraries and APIs for tasks like database access, file I/O, and networking.",
  },
  {
    name: "Python",
    image: "/assets/courses/PYTHON.jpeg",
    description: "High-level programming for data analysis and machine learning.",
    level: "Beginner",
    duration: "8 weeks",
    fullDescription:
      "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically type-checked and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a language due to its comprehensive standard library. Easy to Learn: Python has a simple syntax and is relatively easy to learn, making it a great language for beginners. High-Level Language: Python is a high-level language, meaning it abstracts away many low-level details, allowing developers to focus on the logic of their program. Interpreted Language: Python code is interpreted, not compiled, which makes it easier to write and test code. Object-Oriented: Python is an object-oriented language, which means it organizes code into objects that contain data and functions that operate on that data. Large Standard Library: Python has a vast and comprehensive standard library that includes modules for various tasks, such as file I/O, networking, and data structures.",
  },
]

const Courses = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const [selectedCategory, setSelectedCategory] = useState(true) // true for hardware, false for software
  const [isLoaded, setIsLoaded] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoaded(true)

    // Add scroll animation for elements
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-animate")
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const windowHeight = window.innerHeight || document.documentElement.clientHeight

        if (rect.top <= windowHeight * 0.85) {
          el.classList.add("visible")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [selectedCategory])

  const handleCourseClick = (course) => {
    navigate(`/course-details`, { state: { course: { ...course, description: course.fullDescription } } })
  }

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "#4caf50"
      case "Intermediate":
        return "#ff9800"
      case "Advanced":
        return "#f44336"
      default:
        return "#4dabf5"
    }
  }

  return (
    <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #2E3B55 0%, #142238 100%)",
          color: "white",
          py: { xs: 10, md: 15 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated background elements */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          {[...Array(20)].map((_, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.03)",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </Box>

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              opacity: isLoaded ? 1 : 0,
              transition: "all 0.8s ease-out",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
            >
              Professional Courses
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 300,
                opacity: 0.9,
                mb: 4,
              }}
            >
              Enhance your skills with our comprehensive training programs designed to meet industry demands
            </Typography>

            {/* Category Toggle */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                bgcolor: "rgba(255,255,255,0.1)",
                borderRadius: "50px",
                p: 1,
                backdropFilter: "blur(10px)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                <Computer sx={{ mr: 1, fontSize: 20 }} />
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Software
                </Typography>
              </Box>
              <Switch
                checked={selectedCategory}
                onChange={() => setSelectedCategory(!selectedCategory)}
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: "#4dabf5",
                  },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "#4dabf5",
                  },
                }}
              />
              <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
                <Memory sx={{ mr: 1, fontSize: 20 }} />
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Hardware
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Courses Grid */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={4}>
          {(selectedCategory ? hardwareCourses : softwareCourses).map((course, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              className="scroll-animate"
              sx={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: `all 0.8s ease-out ${0.1 + index * 0.1}s`,
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "10px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                  },
                }}
                onClick={() => handleCourseClick(course)}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={course.image}
                    alt={course.name}
                    sx={{
                      transition: "all 0.3s ease",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    <Chip
                      label={course.level}
                      size="small"
                      sx={{
                        bgcolor: getLevelColor(course.level),
                        color: "white",
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 12,
                      left: 12,
                    }}
                  >
                    <Chip
                      label={course.duration}
                      size="small"
                      sx={{
                        bgcolor: "rgba(0,0,0,0.7)",
                        color: "white",
                        fontWeight: 500,
                      }}
                    />
                  </Box>
                </Box>

                <CardContent sx={{ p: 3, height: "calc(100% - 200px)", display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "#2E3B55" }}>
                    {course.name}
                  </Typography>

                  <Typography variant="body2" sx={{ color: "#555", mb: 3, flexGrow: 1 }}>
                    {course.description}
                  </Typography>

                  <Button
                    variant="text"
                    endIcon={<ArrowForward />}
                    sx={{
                      color: "#4dabf5",
                      fontWeight: 600,
                      p: 0,
                      justifyContent: "flex-start",
                      "&:hover": {
                        bgcolor: "transparent",
                        color: "#2196f3",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: "#2E3B55",
          py: 10,
          color: "white",
          textAlign: "center",
        }}
      >
        <Container
          maxWidth="md"
          className="scroll-animate"
          sx={{
            opacity: 0,
            transform: "translateY(30px)",
            transition: "all 0.8s ease-out",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Ready to Advance Your Career?
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 300, mb: 4, opacity: 0.9 }}>
            Join thousands of professionals who have enhanced their skills with our training programs
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#4dabf5",
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: 600,
              borderRadius: "4px",
              boxShadow: "0 4px 14px 0 rgba(77, 171, 245, 0.39)",
              "&:hover": {
                bgcolor: "#2196f3",
                boxShadow: "0 6px 20px rgba(77, 171, 245, 0.6)",
              },
            }}
          >
            Enroll Now
          </Button>
        </Container>
      </Box>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        
        .scroll-animate.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </Box>
  )
}

export default Courses

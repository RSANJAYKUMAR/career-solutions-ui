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
  Chip,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { ArrowForward, TrendingUp } from "@mui/icons-material"

const domains = [
  {
    name: "Automotive",
    image: "/assets/courses/Automotives.jpeg",
    description: "Advanced automotive technologies and embedded systems for modern vehicles.",
    category: "Engineering",
    trending: true,
    fullDescription:
      "Automotive refers to anything related to cars, trucks, or buses, including the industry that manufactures them. The term 'automotive' is derived from the Greek word autos (meaning 'self') and the Latin word motivus (meaning 'of motion'), signifying self-powered automation. In modern applications, the automotive domain goes beyond the Internet of Things (IoT) by integrating advanced wireless technologies such as Wi-Fi, 5G, Bluetooth, Zigbee, LoRa, and satellite communications across various fields.",
  },
  {
    name: "Biometric Systems",
    image: "/assets/courses/Biometric.jpeg",
    description: "Security systems using fingerprint, facial recognition, and biometric authentication.",
    category: "Security",
    trending: false,
    fullDescription:
      "Biometrics is the process of identifying a person by analyzing their physical or behavioral traits using electronic devices such as voice recognition, iris scans, or fingerprint analysis. It involves body measurements and calculations related to human characteristics and features. In computer science, biometric authentication (also known as realistic authentication) is used as a secure method of identification and access control.",
  },
  {
    name: "Wireless Sensor Networks",
    image: "/assets/courses/Wireless sensor network.jpeg",
    description: "IoT networks for environmental monitoring and smart city applications.",
    category: "IoT",
    trending: true,
    fullDescription:
      "Wireless sensor networks (WSNs) are networks of spatially distributed sensors designed to monitor and record environmental conditions, such as temperature, sound, pollution levels, humidity, and wind. These sensors collect data and transmit it to a central location for processing and analysis.",
  },
  {
    name: "Wireless Protocols",
    image: "/assets/courses/Wireless protocols.jpeg",
    description: "Communication protocols for wireless networks and IoT devices.",
    category: "Networking",
    trending: false,
    fullDescription:
      "Wireless protocols are sets of rules and specifications that govern how devices communicate and exchange data over a wireless network. They define how information is transmitted, received, and processed. Depending on factors like frequency, bandwidth, and range, there are various types of wireless network protocols, with the most common being",
  },
  {
    name: "CAN Protocol",
    image: "/assets/courses/Can protocol.jpeg",
    description: "Controller Area Network protocol for automotive and industrial applications.",
    category: "Automotive",
    trending: false,
    fullDescription:
      "The Controller Area Network (CAN) protocol is a robust communication protocol that allows devices to communicate with each other without needing a host computer. It is commonly used in automotive and industrial applications where reliable and real-time data exchange is critical, employs a two-wire (twisted-pair) bidirectional serial bus communication method, which ensures noise immunity and efficient data transfer. It links electronic subsystems, enabling them to interact within a network, making it ideal for modern vehicles and embedded systems that require distributed control.",
  },
  {
    name: "Data Science",
    image: "/assets/courses/Data science.jpeg",
    description: "Analytics, machine learning, and big data processing for business insights.",
    category: "Analytics",
    trending: true,
    fullDescription:
      "Data science is an interdisciplinary field that focuses on extracting meaningful insights and knowledge from data. It combines principles from mathematics, statistics, artificial intelligence, and computer science to analyze large volumes of structured and unstructured data. The primary goal of data science is to uncover patterns, trends, and relationships within data to make data-driven decisions. Techniques such as data mining, machine learning, data visualization, and predictive analytics are employed to gain valuable insights that can drive business strategies and innovations.",
  },
  {
    name: "Artificial Intelligence",
    image: "/assets/courses/Artificial intelligence.jpeg",
    description: "AI systems, neural networks, and intelligent automation solutions.",
    category: "AI/ML",
    trending: true,
    fullDescription:
      "Artificial intelligence (AI) is the field of computer science that focuses on creating systems capable of performing tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and decision-making.AI systems can analyze complex data, adapt to new information, and make informed decisions. From virtual assistants and chatbots to self-driving cars and medical diagnosis systems, AI is revolutionizing various industries and transforming how humans interact with technology.",
  },
  {
    name: "Machine Learning",
    image: "/assets/courses/Machine learning.jpeg",
    description: "Predictive models, deep learning, and automated decision systems.",
    category: "AI/ML",
    trending: true,
    fullDescription:
      "Machine learning (ML) is a subset of artificial intelligence (AI) that enables computers to learn and improve from experience without being explicitly programmed. It uses algorithms and statistical models to analyze data, identify patterns, and make predictions or decisions.ML applications include image and speech recognition, fraud detection, recommendation systems, and predictive analytics. Through continuous training on large datasets, machine learning models become more accurate and efficient in performing their tasks.",
  },
  {
    name: "Robotics",
    image: "/assets/courses/Robotics.jpeg",
    description: "Autonomous systems, industrial automation, and robotic applications.",
    category: "Robotics",
    trending: false,
    fullDescription:
      "Robotics is the science and technology of designing, building, and operating robots that can perform tasks automatically or semi-autonomously. Robots are programmable machines that can carry out complex series of actions and are often used to perform repetitive, hazardous, or precise tasks. Robotics applications range from industrial automation and medical surgery to space exploration and consumer products. Robots can be guided by external control devices or have embedded control systems, enabling them to operate independently in dynamic environments.",
  },
  {
    name: "Astrophysics",
    image: "/assets/courses/Astrophysics.jpeg",
    description: "Space technology, satellite systems, and cosmic phenomena research.",
    category: "Research",
    trending: false,
    fullDescription:
      "Astrophysics is the branch of astronomy that applies the principles of physics and chemistry to study celestial objects and cosmic phenomena. It aims to understand the physical nature of stars, planets, galaxies, and the overall structure and evolution of the universe. Astrophysicists analyze data from telescopes and space missions to investigate topics like black holes, neutron stars, cosmic radiation, and the fundamental forces shaping the cosmos. Through theoretical modeling and observational research, astrophysics seeks to answer fundamental questions about the origin and fate of the universe.",
  },
]

const Domains = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const navigate = useNavigate()

  const categories = ["All", ...new Set(domains.map((domain) => domain.category))]

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
  }, [])

  const handleDomainClick = (domain) => {
    navigate("/domain-details", { state: { domain: { ...domain, description: domain.fullDescription } } })
  }

  const filteredDomains = selectedCategory === "All" ? domains : domains.filter((domain) => domain.category === selectedCategory)

  const getCategoryColor = (category) => {
    const colors = {
      Engineering: "#ff9800",
      Security: "#f44336",
      IoT: "#4caf50",
      Networking: "#2196f3",
      Automotive: "#9c27b0",
      Analytics: "#ff5722",
      "AI/ML": "#3f51b5",
      Robotics: "#795548",
      Research: "#607d8b",
    }
    return colors[category] || "#4dabf5"
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
              Technology Domains
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 300,
                opacity: 0.9,
                mb: 4,
              }}
            >
              Explore cutting-edge technology domains and discover opportunities in emerging fields
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Category Filter */}
      <Container maxWidth="lg" sx={{ mt: -4, position: "relative", zIndex: 10 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 6,
            transform: isLoaded ? "translateY(0)" : "translateY(30px)",
            opacity: isLoaded ? 1 : 0,
            transition: "all 0.8s ease-out 0.3s",
          }}
        >
          <Card
            sx={{
              borderRadius: "50px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              overflow: "hidden",
            }}
          >
            <Box sx={{ display: "flex", flexWrap: "wrap", p: 1 }}>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "contained" : "text"}
                  onClick={() => setSelectedCategory(category)}
                  sx={{
                    borderRadius: "25px",
                    px: 3,
                    py: 1,
                    m: 0.5,
                    fontWeight: 600,
                    ...(selectedCategory === category
                      ? {
                          bgcolor: "#4dabf5",
                          color: "white",
                          "&:hover": {
                            bgcolor: "#2196f3",
                          },
                        }
                      : {
                          color: "#2E3B55",
                          "&:hover": {
                            bgcolor: "rgba(77, 171, 245, 0.1)",
                          },
                        }),
                  }}
                >
                  {category}
                </Button>
              ))}
            </Box>
          </Card>
        </Box>
      </Container>

      {/* Domains Grid */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Grid container spacing={4}>
          {filteredDomains.map((domain, index) => (
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
                onClick={() => handleDomainClick(domain)}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={domain.image}
                    alt={domain.name}
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
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <Chip
                      label={domain.category}
                      size="small"
                      sx={{
                        bgcolor: getCategoryColor(domain.category),
                        color: "white",
                        fontWeight: 600,
                      }}
                    />
                    {domain.trending && (
                      <Chip
                        icon={<TrendingUp sx={{ fontSize: 16 }} />}
                        label="Trending"
                        size="small"
                        sx={{
                          bgcolor: "#4caf50",
                          color: "white",
                          fontWeight: 600,
                        }}
                      />
                    )}
                  </Box>
                </Box>

                <CardContent sx={{ p: 3, height: "calc(100% - 200px)", display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "#2E3B55" }}>
                    {domain.name}
                  </Typography>

                  <Typography variant="body2" sx={{ color: "#555", mb: 3, flexGrow: 1 }}>
                    {domain.description}
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
                    Explore Domain
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
            Ready to Explore New Technologies?
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 300, mb: 4, opacity: 0.9 }}>
            Discover emerging domains and stay ahead in the technology landscape
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
            Get Started
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

export default Domains

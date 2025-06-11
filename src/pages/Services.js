"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Divider,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import {
  Work,
  People,
  School,
  Business,
  Gavel,
  Group,
  Assignment,
  CheckCircle,
  ArrowForward,
} from "@mui/icons-material"

function Services() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    document.title = "Career Solution - Services"
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

  const services = [
    {
      icon: <Work sx={{ fontSize: 40, color: "#4dabf5" }} />,
      title: "Temporary Staffing Solutions",
      description:
        "Short-term Contracts, On-demand Labor, Flexible Schedules, Industries: Retail, Construction, Warehousing, Hospitality, Manufacturing",
      features: ["Flexible Scheduling", "Quick Deployment", "Cost-Effective"],
    },
    {
      icon: <People sx={{ fontSize: 40, color: "#4dabf5" }} />,
      title: "Permanent Staffing Solutions",
      description:
        "Executive Search, Specialized Recruitment, End-to-End Recruitment, Industries: Technology, Finance, Healthcare, Marketing, Engineering, Education",
      features: ["Thorough Screening", "Cultural Fit", "Long-term Success"],
    },
    {
      icon: <School sx={{ fontSize: 40, color: "#4dabf5" }} />,
      title: "Skilled Labor Staffing",
      description:
        "Technical Staff, Trade Workers, Certified Workers, Industries: Construction, Manufacturing, Engineering, Energy, Utilities",
      features: ["Verified Skills", "Safety Certified", "Industry Expertise"],
    },
    {
      icon: <Business sx={{ fontSize: 40, color: "#4dabf5" }} />,
      title: "Workforce Outsourcing",
      description:
        "Payroll Management, Compliance and Legal, Training and Development, Industries: Corporate, Retail, Logistics, Healthcare, Education",
      features: ["Full Management", "Compliance Assured", "Training Included"],
    },
    {
      icon: <Group sx={{ fontSize: 40, color: "#4dabf5" }} />,
      title: "Recruitment Process Outsourcing (RPO)",
      description:
        "Full-Cycle Recruiting, Customizable Solutions, Global Reach, Industries: Technology, Business Services, Telecommunications, Life Sciences",
      features: ["End-to-End Process", "Scalable Solutions", "Global Network"],
    },
    {
      icon: <Assignment sx={{ fontSize: 40, color: "#4dabf5" }} />,
      title: "Executive Search and Leadership Hiring",
      description: "C-Suite Recruiting, Board of Directors Recruitment, Talent Mapping",
      features: ["Executive Level", "Confidential Process", "Strategic Placement"],
    },
    {
      icon: <Gavel sx={{ fontSize: 40, color: "#4dabf5" }} />,
      title: "Labor Compliance and HR Solutions",
      description: "Employment Contracts, Labor Law Consulting, Employee Benefits Administration",
      features: ["Legal Compliance", "Risk Management", "Expert Guidance"],
    },
  ]

  const whyChooseUs = ["Experienced Workforce", "Tailored Solutions", "Fast and Efficient", "Comprehensive Support"]

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
              Our Services
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 300,
                opacity: 0.9,
                mb: 4,
              }}
            >
              At Career Solution, we specialize in providing top-quality manpower solutions tailored to meet the unique
              needs of your business. Whether you're looking for temporary, permanent, or specialized workforce
              solutions, we are here to ensure you have the right talent at the right time.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
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
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <CardContent sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{
                      display: "inline-flex",
                      bgcolor: "rgba(77, 171, 245, 0.1)",
                      p: 2,
                      borderRadius: "50%",
                      mb: 2,
                      alignSelf: "flex-start",
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: "#2E3B55" }}>
                    {service.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: "#555", mb: 3, flexGrow: 1 }}>
                    {service.description}
                  </Typography>

                  <Box sx={{ mt: "auto" }}>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: "#2E3B55" }}>
                      Key Features:
                    </Typography>
                    {service.features.map((feature, featureIndex) => (
                      <Box key={featureIndex} sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                        <CheckCircle sx={{ fontSize: 16, color: "#4dabf5", mr: 1 }} />
                        <Typography variant="body2" sx={{ color: "#555" }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us Section */}
      <Box sx={{ bgcolor: "white", py: 10 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: "center",
              mb: 6,
              className: "scroll-animate",
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.8s ease-out",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#4dabf5",
                fontWeight: 600,
                mb: 1,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Why Choose Us
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "#2E3B55",
                mb: 2,
              }}
            >
              Career Solution Advantages
            </Typography>
            <Divider
              sx={{
                width: "80px",
                mx: "auto",
                borderColor: "#4dabf5",
                borderWidth: 3,
                mb: 3,
              }}
            />
            <Typography
              variant="body1"
              sx={{
                maxWidth: "700px",
                mx: "auto",
                color: "#555",
              }}
            >
              We combine industry expertise with personalized service to deliver exceptional recruitment solutions.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {whyChooseUs.map((advantage, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                className="scroll-animate"
                sx={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `all 0.8s ease-out ${0.3 + index * 0.1}s`,
                }}
              >
                <Card
                  sx={{
                    textAlign: "center",
                    borderRadius: "10px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: "inline-flex",
                        bgcolor: "rgba(77, 171, 245, 0.1)",
                        p: 2,
                        borderRadius: "50%",
                        mb: 2,
                      }}
                    >
                      <CheckCircle sx={{ fontSize: 30, color: "#4dabf5" }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#2E3B55" }}>
                      {advantage}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

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
            Ready to Find the Perfect Solution?
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 300, mb: 4, opacity: 0.9 }}>
            Let us help you build the team that will drive your business forward
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
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
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: "white",
                borderColor: "white",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "4px",
                "&:hover": {
                  borderColor: "#4dabf5",
                  bgcolor: "rgba(255,255,255,0.05)",
                },
              }}
            >
              Learn More
            </Button>
          </Box>
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

export default Services

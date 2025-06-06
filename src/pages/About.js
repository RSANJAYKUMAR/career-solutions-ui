"use client"

import React, { useState, useEffect } from "react";
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Avatar,
  Divider,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { 
  VerifiedUser, 
  TrendingUp, 
  People, 
  Timeline,
  Lightbulb,
  Handshake
} from "@mui/icons-material";

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Add scroll animation for elements
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.85) {
          el.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: <VerifiedUser sx={{ fontSize: 40, color: "#4dabf5" }} />,
      title: "Our Mission",
      description: "To empower businesses and job seekers with the best recruitment and staffing solutions."
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: "#4dabf5" }} />,
      title: "Why Choose Us?",
      description: "Industry expertise, personalized solutions, and a proven track record in staffing and recruitment."
    },
    {
      icon: <People sx={{ fontSize: 40, color: "#4dabf5" }} />,
      title: "Our Team",
      description: "A dedicated group of professionals committed to delivering excellence in recruitment and staffing."
    }
  ];

  const milestones = [
    {
      year: "2025",
      title: "Company Founded",
      description: "Career Solutions was established with a vision to transform the recruitment industry."
    },
    {
      year: "2025",
      title: "National Expansion",
      description: "Expanded operations across the country with offices in major cities."
    },
    {
      year: "2025",
      title: "Industry Recognition",
      description: "Received multiple awards for excellence in staffing and recruitment services."
    },
    {
      year: "2025",
      title: "Digital Transformation",
      description: "Launched innovative digital platforms to enhance candidate and client experience."
    }
  ];

  const team = [
    // {
    //   name: "John Smith",
    //   position: "CEO & Founder",
    //   image: "/placeholder.svg?height=200&width=200"
    // },
    // {
    //   name: "Sarah Johnson",
    //   position: "Head of Recruitment",
    //   image: "/placeholder.svg?height=200&width=200"
    // },
    // {
    //   name: "Michael Brown",
    //   position: "Client Relations Director",
    //   image: "/placeholder.svg?height=200&width=200"
    // }
  ];

  return (
    <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box sx={{
        background: "linear-gradient(135deg, #2E3B55 0%, #142238 100%)",
        color: "white",
        py: { xs: 10, md: 15 },
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Animated background elements */}
        <Box sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          zIndex: 0
        }}>
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
          <Box sx={{ 
            textAlign: "center",
            maxWidth: "800px",
            mx: "auto",
            transform: isLoaded ? "translateY(0)" : "translateY(30px)",
            opacity: isLoaded ? 1 : 0,
            transition: "all 0.8s ease-out",
          }}>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              About Us
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 300,
                opacity: 0.9,
                mb: 4
              }}
            >
              Career Solutions Private Limited is a leading recruitment and staffing solutions provider, dedicated to connecting top talent with esteemed organizations. We empower businesses with the right workforce while helping individuals achieve their career goals.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Our Values */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ 
          textAlign: "center", 
          mb: 6,
          transform: isLoaded ? "translateY(0)" : "translateY(30px)",
          opacity: isLoaded ? 1 : 0,
          transition: "all 0.8s ease-out 0.3s",
        }}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: "#4dabf5", 
              fontWeight: 600, 
              mb: 1,
              textTransform: "uppercase",
              letterSpacing: 1
            }}
          >
            Our Core Values
          </Typography>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700, 
              color: "#2E3B55",
              mb: 2
            }}
          >
            What Drives Us
          </Typography>
          <Divider sx={{ 
            width: "80px", 
            mx: "auto", 
            borderColor: "#4dabf5", 
            borderWidth: 3,
            mb: 3
          }}/>
        </Box>

        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} md={4} key={index} className="scroll-animate" sx={{ 
              opacity: 0,
              transform: "translateY(30px)",
              transition: `all 0.8s ease-out ${0.5 + index * 0.2}s`,
            }}>
              <Card sx={{ 
                height: "100%",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                }
              }}>
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Box sx={{ 
                    display: "inline-flex", 
                    bgcolor: "rgba(77, 171, 245, 0.1)", 
                    p: 2, 
                    borderRadius: "50%",
                    mb: 2
                  }}>
                    {value.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: "#2E3B55" }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#555" }}>
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Our Vision */}
      <Box sx={{ bgcolor: "white", py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} className="scroll-animate" sx={{ 
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.8s ease-out",
            }}>
              <Box sx={{ 
                position: "relative",
                height: "400px",
                width: "100%",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}>
                <Box 
                  component="img"
                  src="/assets/courses/teleus.jpg"
                  alt="Our Vision"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6} className="scroll-animate" sx={{ 
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.8s ease-out 0.3s",
            }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: "#4dabf5", 
                  fontWeight: 600, 
                  mb: 1,
                  textTransform: "uppercase",
                  letterSpacing: 1
                }}
              >
                Our Vision
              </Typography>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 700, 
                  color: "#2E3B55",
                  mb: 3
                }}
              >
                Empowering Careers, Enhancing Lives
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: "#555", fontSize: "1.1rem" }}>
                At Career Solutions, we believe in the power of connecting the right talent with the right opportunities. Our vision is to create a world where every professional finds fulfillment in their career and every organization thrives with the perfect team.
              </Typography>
              <Typography variant="body1" sx={{ color: "#555", fontSize: "1.1rem" }}>
                We strive to be the most trusted partner in the recruitment journey, offering personalized solutions that transform careers and businesses alike.
              </Typography>
              
              <Box sx={{ mt: 4, display: "flex", flexWrap: "wrap", gap: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ 
                    display: "inline-flex", 
                    bgcolor: "rgba(77, 171, 245, 0.1)", 
                    p: 1, 
                    borderRadius: "50%",
                  }}>
                    <Lightbulb sx={{ fontSize: 24, color: "#4dabf5" }} />
                  </Box>
                  <Typography variant="body1" sx={{ fontWeight: 500, color: "#2E3B55" }}>
                    Innovation
                  </Typography>
                </Box>
                
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ 
                    display: "inline-flex", 
                    bgcolor: "rgba(77, 171, 245, 0.1)", 
                    p: 1, 
                    borderRadius: "50%",
                  }}>
                    <Handshake sx={{ fontSize: 24, color: "#4dabf5" }} />
                  </Box>
                  <Typography variant="body1" sx={{ fontWeight: 500, color: "#2E3B55" }}>
                    Partnership
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Journey */}
      <Box sx={{ bgcolor: "#f8f9fa", py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            textAlign: "center", 
            mb: 6,
            className: "scroll-animate",
            opacity: 0,
            transform: "translateY(30px)",
            transition: "all 0.8s ease-out",
          }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: "#4dabf5", 
                fontWeight: 600, 
                mb: 1,
                textTransform: "uppercase",
                letterSpacing: 1
              }}
            >
              Our Journey
            </Typography>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700, 
                color: "#2E3B55",
                mb: 2
              }}
            >
              Key Milestones
            </Typography>
            <Divider sx={{ 
              width: "80px", 
              mx: "auto", 
              borderColor: "#4dabf5", 
              borderWidth: 3,
              mb: 3
            }}/>
          </Box>

          <Box sx={{ position: "relative" }}>
            {/* Timeline line */}
            <Box sx={{ 
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "4px",
              bgcolor: "#e9ecef",
              transform: "translateX(-50%)",
              display: { xs: "none", md: "block" }
            }}/>

            {milestones.map((milestone, index) => (
              <Box 
                key={index} 
                className="scroll-animate"
                sx={{ 
                  display: "flex",
                  flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" },
                  mb: 6,
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `all 0.8s ease-out ${0.3 + index * 0.2}s`,
                }}
              >
                <Box sx={{ 
                  flex: 1, 
                  textAlign: { xs: "left", md: index % 2 === 0 ? "right" : "left" },
                  pr: { xs: 0, md: index % 2 === 0 ? 4 : 0 },
                  pl: { xs: 0, md: index % 2 === 0 ? 0 : 4 },
                }}>
                  <Typography variant="h2" sx={{ color: "#4dabf5", fontWeight: 700, mb: 1 }}>
                    {milestone.year}
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#2E3B55", fontWeight: 600, mb: 1 }}>
                    {milestone.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#555" }}>
                    {milestone.description}
                  </Typography>
                </Box>
                
                {/* Timeline dot - only visible on md and up */}
                <Box sx={{ 
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 1,
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  bgcolor: "#4dabf5",
                  boxShadow: "0 0 0 4px white, 0 0 0 8px rgba(77, 171, 245, 0.2)",
                  mx: 2
                }}>
                  <Timeline sx={{ color: "white", fontSize: 16 }} />
                </Box>
                
                {/* Empty space for the right side */}
                <Box sx={{ flex: 1, display: { xs: "none", md: "block" } }} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Our Team */}
      <Box sx={{ bgcolor: "white", py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            textAlign: "center", 
            mb: 6,
            className: "scroll-animate",
            opacity: 0,
            transform: "translateY(30px)",
            transition: "all 0.8s ease-out",
          }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: "#4dabf5", 
                fontWeight: 600, 
                mb: 1,
                textTransform: "uppercase",
                letterSpacing: 1
              }}
            >
              Our Team
            </Typography>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700, 
                color: "#2E3B55",
                mb: 2
              }}
            >
              Meet Our Leadership
            </Typography>
            <Divider sx={{ 
              width: "80px", 
              mx: "auto", 
              borderColor: "#4dabf5", 
              borderWidth: 3,
              mb: 3
            }}/>
            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: "700px", 
                mx: "auto",
                color: "#555"
              }}
            >
              Our team of experienced professionals is dedicated to delivering exceptional service and results.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {team.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} className="scroll-animate" sx={{ 
                opacity: 0,
                transform: "translateY(30px)",
                transition: `all 0.8s ease-out ${0.3 + index * 0.2}s`,
              }}>
                <Card sx={{ 
                  borderRadius: "10px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                  }
                }}>
                  <Box sx={{ position: "relative", pt: "100%", overflow: "hidden" }}>
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: 0
                      }}
                    />
                  </Box>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#2E3B55" }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#4dabf5", fontWeight: 500 }}>
                      {member.position}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          
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
  );
}

export default About;

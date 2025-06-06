"use client"

import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Button,
  Chip,
  Grid,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { ArrowBack, TrendingUp, Lightbulb, Business, School } from "@mui/icons-material"

const DomainDetails = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const [isLoaded, setIsLoaded] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { domain } = location.state || {}

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!domain) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f8f9fa",
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ color: "#2E3B55", fontWeight: 600, mb: 2 }}>
            Domain Not Found
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", mb: 3 }}>
            The domain you're looking for doesn't exist or has been removed.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/domains")}
            sx={{
              bgcolor: "#4dabf5",
              "&:hover": { bgcolor: "#2196f3" },
            }}
          >
            Back to Domains
          </Button>
        </Container>
      </Box>
    )
  }

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

  const opportunities = [
    "Research and Development",
    "Product Innovation",
    "Technical Consulting",
    "System Architecture",
    "Project Management",
    "Quality Assurance",
  ]

  const skills = [
    "Technical Expertise",
    "Problem Solving",
    "Innovation Mindset",
    "Analytical Thinking",
    "Team Collaboration",
    "Continuous Learning",
  ]

  return (
    <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #2E3B55 0%, #142238 100%)",
          color: "white",
          py: { xs: 8, md: 12 },
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
          {[...Array(15)].map((_, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                width: Math.random() * 80 + 40,
                height: Math.random() * 80 + 40,
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
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              opacity: isLoaded ? 1 : 0,
              transition: "all 0.8s ease-out",
            }}
          >
            <Button
              startIcon={<ArrowBack />}
              onClick={() => navigate("/domains")}
              sx={{
                color: "white",
                mb: 3,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Back to Domains
            </Button>

            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
                  {domain.category && (
                    <Chip
                      label={domain.category}
                      sx={{
                        bgcolor: getCategoryColor(domain.category),
                        color: "white",
                        fontWeight: 600,
                      }}
                    />
                  )}
                  {domain.trending && (
                    <Chip
                      icon={<TrendingUp sx={{ fontSize: 16 }} />}
                      label="Trending"
                      sx={{
                        bgcolor: "#4caf50",
                        color: "white",
                        fontWeight: 500,
                      }}
                    />
                  )}
                  <Chip
                    label="High Demand"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.2)",
                      color: "white",
                      fontWeight: 500,
                    }}
                  />
                </Box>

                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                  }}
                >
                  {domain.name}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 300,
                    opacity: 0.9,
                    mb: 3,
                  }}
                >
                  {domain.description}
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
                  Explore Opportunities
                </Button>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    position: "relative",
                    height: "300px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  }}
                >
                  <Box
                    component="img"
                    src={domain.image}
                    alt={domain.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Domain Content */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6}>
          {/* Main Content */}
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              opacity: isLoaded ? 1 : 0,
              transition: "all 0.8s ease-out 0.3s",
            }}
          >
            <Card
              sx={{
                borderRadius: "10px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                mb: 4,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: "#2E3B55" }}>
                  Domain Overview
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    color: "#555",
                    fontSize: "1.1rem",
                    textAlign: "justify",
                  }}
                >
                  {domain.fullDescription}
                </Typography>
              </CardContent>
            </Card>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    borderRadius: "10px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    height: "100%",
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <Box
                        sx={{
                          display: "inline-flex",
                          bgcolor: "rgba(77, 171, 245, 0.1)",
                          p: 1.5,
                          borderRadius: "50%",
                          mr: 2,
                        }}
                      >
                        <Business sx={{ fontSize: 30, color: "#4dabf5" }} />
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: "#2E3B55" }}>
                        Career Opportunities
                      </Typography>
                    </Box>
                    <Grid container spacing={1}>
                      {opportunities.map((opportunity, index) => (
                        <Grid item xs={12} key={index}>
                          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                bgcolor: "#4dabf5",
                                mr: 2,
                              }}
                            />
                            <Typography variant="body1" sx={{ color: "#555" }}>
                              {opportunity}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    borderRadius: "10px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    height: "100%",
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <Box
                        sx={{
                          display: "inline-flex",
                          bgcolor: "rgba(77, 171, 245, 0.1)",
                          p: 1.5,
                          borderRadius: "50%",
                          mr: 2,
                        }}
                      >
                        <Lightbulb sx={{ fontSize: 30, color: "#4dabf5" }} />
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: "#2E3B55" }}>
                        Key Skills
                      </Typography>
                    </Box>
                    <Grid container spacing={1}>
                      {skills.map((skill, index) => (
                        <Grid item xs={12} key={index}>
                          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                bgcolor: "#4caf50",
                                mr: 2,
                              }}
                            />
                            <Typography variant="body1" sx={{ color: "#555" }}>
                              {skill}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          {/* Sidebar */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              opacity: isLoaded ? 1 : 0,
              transition: "all 0.8s ease-out 0.5s",
            }}
          >
            <Card
              sx={{
                borderRadius: "10px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                mb: 3,
                position: "sticky",
                top: 20,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: "#2E3B55" }}>
                  Domain Information
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: "#2E3B55" }}>
                    Category
                  </Typography>
                  <Chip
                    label={domain.category}
                    sx={{
                      bgcolor: getCategoryColor(domain.category),
                      color: "white",
                      fontWeight: 600,
                    }}
                  />
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: "#2E3B55" }}>
                    Market Demand
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#555" }}>
                    High Growth Potential
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: "#2E3B55" }}>
                    Industry Focus
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#555" }}>
                    Technology & Innovation
                  </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  startIcon={<School />}
                  sx={{
                    bgcolor: "#4dabf5",
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
                  Explore Courses
                </Button>

                <Button
                  variant="outlined"
                  fullWidth
                  size="large"
                  sx={{
                    mt: 2,
                    color: "#4dabf5",
                    borderColor: "#4dabf5",
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    borderRadius: "4px",
                    "&:hover": {
                      borderColor: "#2196f3",
                      bgcolor: "rgba(77, 171, 245, 0.05)",
                    },
                  }}
                >
                  Get Consultation
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
      `}</style>
    </Box>
  )
}

export default DomainDetails

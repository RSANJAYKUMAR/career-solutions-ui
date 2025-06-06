"use client"
import { Box, Container, Grid, Typography, IconButton, Divider, Button, useMediaQuery, useTheme } from "@mui/material"
import { Instagram, LinkedIn, WhatsApp, YouTube, LocationOn, Email, Phone, ArrowUpward } from "@mui/icons-material"
import { Link } from "react-router-dom"

const Footer = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Courses", path: "/courses" },
    { name: "Domains", path: "/domains" },
    { name: "Contact Us", path: "/contact" },
    { name: "Enquiry", path: "/enquiry" },
  ]

  const socialLinks = [
    {
      icon: <Instagram />,
      href: "https://www.instagram.com/career_placement_solutions?igsh=MWp3bW91ODZ1dXVpNg==",
      name: "Instagram",
    },
    {
      icon: <LinkedIn />,
      href: "https://www.linkedin.com/in/career-solutions-73786b355?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BybmkLYZ2ReiIhSEddEuhmg%3D%3D",
      name: "LinkedIn",
    },
    {
      icon: <WhatsApp />,
      href: "https://api.whatsapp.com/send/?phone=8098970087&text&app_absent=0",
      name: "WhatsApp",
    },
    {
      icon: <YouTube />,
      href: "https://www.youtube.com",
      name: "YouTube",
    },
  ]

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
        color: "white",
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
              width: Math.random() * 60 + 30,
              height: Math.random() * 60 + 30,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 15}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Main Footer Content */}
        <Box sx={{ py: { xs: 4, md: 6 } }}>
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="flex-start">
            {/* Company Information */}
            <Grid item xs={12} md={4}>
              <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Career Solutions
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    opacity: 0.9,
                    lineHeight: 1.6,
                    textAlign: { xs: "center", md: "left" },
                    fontSize: "0.95rem",
                  }}
                >
                  Empowering careers and building futures through innovative recruitment and staffing solutions.
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontStyle: "italic",
                    color: "#64b5f6",
                    fontWeight: 500,
                    textAlign: { xs: "center", md: "left" },
                    fontSize: "1.1rem",
                  }}
                >
                  "Empowering Careers, Building Futures."
                </Typography>
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} md={3}>
              <Box sx={{ height: "100%" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: "#64b5f6",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Quick Links
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.5,
                    alignItems: { xs: "center", md: "flex-start" },
                  }}
                >
                  {navLinks.map((link) => (
                    <Button
                      key={link.name}
                      component={Link}
                      to={link.path}
                      sx={{
                        color: "white",
                        textAlign: "left",
                        justifyContent: { xs: "center", md: "flex-start" },
                        px: 0,
                        py: 0.5,
                        fontWeight: 400,
                        textTransform: "none",
                        fontSize: "0.9rem",
                        minWidth: "auto",
                        "&:hover": {
                          color: "#64b5f6",
                          bgcolor: "transparent",
                          transform: "translateX(5px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {link.name}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} md={5}>
              <Box sx={{ height: "100%" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: "#64b5f6",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Contact Information
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                  {/* Address */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      flexDirection: { xs: "column", sm: "row" },
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    <LocationOn
                      sx={{
                        color: "#64b5f6",
                        mt: 0.5,
                        alignSelf: { xs: "center", sm: "flex-start" },
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          mb: 0.5,
                          color: "#64b5f6",
                        }}
                      >
                        Address
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          opacity: 0.9,
                          lineHeight: 1.5,
                          fontSize: "0.9rem",
                        }}
                      >
                        W-583, School Rd, D-Sector, Anna Nagar West Extension, Chennai, Tamil Nadu 600101
                      </Typography>
                    </Box>
                  </Box>

                  {/* Email */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      flexDirection: { xs: "column", sm: "row" },
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    <Email
                      sx={{
                        color: "#64b5f6",
                        alignSelf: { xs: "center", sm: "flex-start" },
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          mb: 0.5,
                          color: "#64b5f6",
                        }}
                      >
                        Email
                      </Typography>
                      <Typography
                        component="a"
                        href="mailto:hr@careersolutionss.com"
                        variant="body2"
                        sx={{
                          color: "white",
                          textDecoration: "none",
                          opacity: 0.9,
                          fontSize: "0.9rem",
                          "&:hover": {
                            color: "#64b5f6",
                            textDecoration: "underline",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        hr@careersolutionss.com
                      </Typography>
                    </Box>
                  </Box>

                  {/* Phone */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      flexDirection: { xs: "column", sm: "row" },
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    <Phone
                      sx={{
                        color: "#64b5f6",
                        alignSelf: { xs: "center", sm: "flex-start" },
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          mb: 0.5,
                          color: "#64b5f6",
                        }}
                      >
                        Phone
                      </Typography>
                      <Typography
                        component="a"
                        href="tel:+918098970087"
                        variant="body2"
                        sx={{
                          color: "white",
                          textDecoration: "none",
                          opacity: 0.9,
                          fontSize: "0.9rem",
                          "&:hover": {
                            color: "#64b5f6",
                            textDecoration: "underline",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        +91 80989 70087
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            py: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 3, md: 2 },
          }}
        >
          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              opacity: 0.8,
              textAlign: { xs: "center", md: "left" },
              fontSize: "0.85rem",
            }}
          >
            &copy; {new Date().getFullYear()} Career Solutions Private Limited. All rights reserved.
          </Typography>

          {/* Social Media Icons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                mr: { sm: 2 },
                mb: { xs: 1, sm: 0 },
                opacity: 0.8,
                fontSize: "0.85rem",
              }}
            >
              Follow Us:
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    bgcolor: "rgba(255,255,255,0.1)",
                    width: 40,
                    height: 40,
                    "&:hover": {
                      color: "#64b5f6",
                      bgcolor: "rgba(100, 181, 246, 0.2)",
                      transform: "scale(1.1)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Scroll to Top Button */}
          <IconButton
            onClick={scrollToTop}
            sx={{
              bgcolor: "#64b5f6",
              color: "white",
              width: 45,
              height: 45,
              "&:hover": {
                bgcolor: "#42a5f5",
                transform: "scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <ArrowUpward />
          </IconButton>
        </Box>
      </Container>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
      `}</style>
    </Box>
  )
}

export default Footer

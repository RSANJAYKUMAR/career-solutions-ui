"use client"
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Avatar,
  Chip,
} from "@mui/material"
import {
  Instagram,
  LinkedIn,
  WhatsApp,
  YouTube,
  LocationOn,
  Email,
  Phone,
  ArrowUpward,
  Send,
  Rocket,
  Code,
  TrendingUp,
  Support,
  Business,
  School,
  Work,
  Star,
  FlashOn,
  Shield,
} from "@mui/icons-material"
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
    { name: "Home", path: "/", icon: <Business sx={{ fontSize: 16 }} /> },
    { name: "About", path: "/about", icon: <Business sx={{ fontSize: 16 }} /> },
    { name: "Services", path: "/services", icon: <Work sx={{ fontSize: 16 }} /> },
    { name: "Courses", path: "/courses", icon: <School sx={{ fontSize: 16 }} /> },
    { name: "Domains", path: "/domains", icon: <Code sx={{ fontSize: 16 }} /> },
    { name: "Contact", path: "/contact", icon: <Support sx={{ fontSize: 16 }} /> },
    { name: "Enquiry", path: "/enquiry", icon: <Send sx={{ fontSize: 16 }} /> },
  ]

  const socialLinks = [
    {
      icon: <Instagram />,
      href: "https://www.instagram.com/career_placement_solutions?igsh=MWp3bW91ODZ1dXVpNg==",
      name: "Instagram",
      color: "#E4405F",
      count: "12.5K",
    },
    {
      icon: <LinkedIn />,
      href: "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BAv5X%2FP2rTeapKfj%2FKY%2FvUA%3D%3D",
      name: "LinkedIn",
      color: "#0077B5",
      count: "8.9K",
    },
    {
      icon: <WhatsApp />,
      href: "https://wa.me/919342864959",
      name: "WhatsApp",
      color: "#25D366",
      count: "Live",
    },
    {
      icon: <YouTube />,
      href: "https://www.youtube.com",
      name: "YouTube",
      color: "#FF0000",
      count: "5.2K",
    },
  ]

  const stats = [
    { icon: <Rocket />, number: "500+", label: "Companies", color: "#00ffff" },
    { icon: <Code />, number: "15K+", label: "Developers", color: "#ff006e" },
    { icon: <TrendingUp />, number: "25K+", label: "Placements", color: "#00ff88" },
    { icon: <Star />, number: "4.9", label: "Rating", color: "#ffaa00" },
  ]

  const features = [
    { icon: <FlashOn />, title: "Lightning Fast", desc: "Quick placement process", color: "#00ffff" },
    { icon: <Shield />, title: "Secure & Trusted", desc: "Verified companies only", color: "#ff006e" },
    { icon: <Support />, title: "24/7 Support", desc: "Always here to help", color: "#00ff88" },
    { icon: <TrendingUp />, title: "Career Growth", desc: "Continuous opportunities", color: "#ffaa00" },
  ]

  const techStack = ["React", "Node.js", "Python", "AI/ML", "Cloud", "DevOps", "Blockchain", "IoT"]

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Tech Grid Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          animation: "grid-move 30s linear infinite",
        }}
      />

      {/* Floating Tech Elements */}
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
              borderRadius: Math.random() > 0.5 ? "50%" : "10px",
              background: `rgba(${Math.random() > 0.5 ? "0, 255, 255" : "255, 0, 110"}, 0.1)`,
              border: `1px solid rgba(${Math.random() > 0.5 ? "0, 255, 255" : "255, 0, 110"}, 0.3)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 20}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </Box>

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* Tech Stack Banner */}
        <Box sx={{ py: 4, textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#00ffff",
              fontWeight: 800,
              mb: 3,
              textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
            }}
          >
            POWERED BY CUTTING-EDGE TECHNOLOGY
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2 }}>
            {techStack.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                sx={{
                  background: "linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 110, 0.2))",
                  color: "white",
                  border: "1px solid rgba(0, 255, 255, 0.5)",
                  fontWeight: 700,
                  "&:hover": {
                    background: "linear-gradient(135deg, rgba(0, 255, 255, 0.3), rgba(255, 0, 110, 0.3))",
                    transform: "scale(1.1)",
                    boxShadow: "0 5px 15px rgba(0, 255, 255, 0.4)",
                  },
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Stats Section */}
        <Box sx={{ py: 6 }}>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Card
                  sx={{
                    background: "rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(20px)",
                    border: `1px solid ${stat.color}40`,
                    borderRadius: "20px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px) scale(1.05)",
                      boxShadow: `0 20px 40px ${stat.color}40`,
                      border: `1px solid ${stat.color}`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${stat.color}, ${stat.color}aa)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                        color: "white",
                        boxShadow: `0 0 20px ${stat.color}60`,
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 900,
                        color: stat.color,
                        mb: 1,
                        textShadow: `0 0 10px ${stat.color}60`,
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "white", fontWeight: 600 }}>
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Main Footer Content */}
        <Box sx={{ py: 8 }}>
          <Grid container spacing={6}>
            {/* Company Section */}
            <Grid item xs={12} lg={4}>
              <Card
                sx={{
                  background: "rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(30px)",
                  border: "1px solid rgba(0, 255, 255, 0.3)",
                  borderRadius: "25px",
                  height: "100%",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {/* Logo */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                    <Avatar
                      src="/assets/courses/LOGO.jpeg"
                      alt="Career Solutions Logo"
                      sx={{
                        width: 80,
                        height: 80,
                        mr: 3,
                        border: "3px solid #00ffff",
                        boxShadow: "0 0 25px rgba(0, 255, 255, 0.5)",
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 900,
                          background: "linear-gradient(135deg, #00ffff, #ff006e)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          lineHeight: 1,
                          textShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
                        }}
                      >
                        Career Solutions
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "#00ffff",
                          fontWeight: 700,
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                        }}
                      >
                        Future Tech Careers
                      </Typography>
                    </Box>
                  </Box>

                  {/* Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 4,
                      color: "rgba(255,255,255,0.9)",
                      lineHeight: 1.8,
                      fontSize: "1.1rem",
                    }}
                  >
                    Pioneering the future of tech careers through AI-powered recruitment, cutting-edge training, and
                    innovative placement solutions. Join the digital revolution.
                  </Typography>

                  {/* Newsletter */}
                  <Box
                    sx={{
                      background: "linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 110, 0.1))",
                      borderRadius: "20px",
                      p: 3,
                      border: "1px solid rgba(0, 255, 255, 0.3)",
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "#00ffff", fontWeight: 800, mb: 2 }}>
                      JOIN THE FUTURE
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Enter your email for tech updates"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              sx={{
                                background: "linear-gradient(135deg, #00ffff, #ff006e)",
                                color: "white",
                                "&:hover": {
                                  background: "linear-gradient(135deg, #ff006e, #00ffff)",
                                  transform: "scale(1.1)",
                                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
                                },
                              }}
                            >
                              <Send />
                            </IconButton>
                          </InputAdornment>
                        ),
                        sx: {
                          borderRadius: "15px",
                          background: "rgba(0, 0, 0, 0.3)",
                          backdropFilter: "blur(20px)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid rgba(0, 255, 255, 0.5)",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #00ffff",
                          },
                          "& input": {
                            color: "white",
                          },
                          "& input::placeholder": {
                            color: "rgba(255,255,255,0.7)",
                          },
                        },
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Navigation & Features */}
            <Grid item xs={12} md={6} lg={4}>
              <Box sx={{ height: "100%" }}>
                {/* Quick Links */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    color: "#00ffff",
                    textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
                  }}
                >
                  NAVIGATION MATRIX
                </Typography>

                <Grid container spacing={2} sx={{ mb: 4 }}>
                  {navLinks.map((link, index) => (
                    <Grid item xs={6} key={index}>
                      <Button
                        component={Link}
                        to={link.path}
                        startIcon={link.icon}
                        sx={{
                          color: "white",
                          justifyContent: "flex-start",
                          width: "100%",
                          px: 2,
                          py: 1.5,
                          borderRadius: "15px",
                          fontWeight: 600,
                          textTransform: "none",
                          background: "rgba(0, 0, 0, 0.3)",
                          backdropFilter: "blur(20px)",
                          border: "1px solid rgba(0, 255, 255, 0.3)",
                          "&:hover": {
                            background: "linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 110, 0.2))",
                            transform: "translateY(-3px)",
                            boxShadow: "0 10px 25px rgba(0, 255, 255, 0.3)",
                            border: "1px solid #00ffff",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        {link.name}
                      </Button>
                    </Grid>
                  ))}
                </Grid>

                {/* Features */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: "#ff006e",
                    textShadow: "0 0 10px rgba(255, 0, 110, 0.5)",
                  }}
                >
                  CORE FEATURES
                </Typography>

                <Grid container spacing={2}>
                  {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          p: 2,
                          borderRadius: "15px",
                          background: "rgba(0, 0, 0, 0.3)",
                          backdropFilter: "blur(20px)",
                          border: `1px solid ${feature.color}40`,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-3px)",
                            background: `linear-gradient(135deg, ${feature.color}20, rgba(0, 0, 0, 0.4))`,
                            border: `1px solid ${feature.color}`,
                            boxShadow: `0 10px 25px ${feature.color}40`,
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 45,
                            height: 45,
                            borderRadius: "50%",
                            background: `linear-gradient(135deg, ${feature.color}, ${feature.color}aa)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            boxShadow: `0 0 15px ${feature.color}60`,
                          }}
                        >
                          {feature.icon}
                        </Box>
                        <Box>
                          <Typography variant="subtitle2" sx={{ color: "white", fontWeight: 700 }}>
                            {feature.title}
                          </Typography>
                          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)" }}>
                            {feature.desc}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>

            {/* Contact & Social */}
            <Grid item xs={12} md={6} lg={4}>
              <Card
                sx={{
                  background: "rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(30px)",
                  border: "1px solid rgba(255, 0, 110, 0.3)",
                  borderRadius: "25px",
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      mb: 4,
                      color: "#ff006e",
                      textShadow: "0 0 10px rgba(255, 0, 110, 0.5)",
                    }}
                  >
                    CONNECT TO THE FUTURE
                  </Typography>

                  {/* Contact Info */}
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 4 }}>
                    {[
                      {
                        icon: <LocationOn />,
                        title: "HQ Location",
                        content: "W-583, School Rd, D-Sector, Anna Nagar West Extension, Chennai, Tamil Nadu 600101",
                        color: "#00ffff",
                      },
                      {
                        icon: <Email />,
                        title: "Digital Contact",
                        content: "hr@careersolutionss.com",
                        link: "mailto:hr@careersolutionss.com",
                        color: "#ff006e",
                      },
                      {
                        icon: <Phone />,
                        title: "Direct Line",
                        content: "+91 80989 70087",
                        link: "tel:+918098970087",
                        color: "#00ff88",
                      },
                    ].map((contact, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 2,
                          p: 2,
                          borderRadius: "15px",
                          background: "rgba(0, 0, 0, 0.3)",
                          backdropFilter: "blur(20px)",
                          border: `1px solid ${contact.color}40`,
                        }}
                      >
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                            background: `linear-gradient(135deg, ${contact.color}, ${contact.color}aa)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            boxShadow: `0 0 15px ${contact.color}60`,
                            mt: 0.5,
                          }}
                        >
                          {contact.icon}
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="subtitle1" sx={{ color: contact.color, fontWeight: 800, mb: 0.5 }}>
                            {contact.title}
                          </Typography>
                          <Typography
                            component={contact.link ? "a" : "span"}
                            href={contact.link}
                            variant="body2"
                            sx={{
                              color: "rgba(255,255,255,0.9)",
                              textDecoration: "none",
                              lineHeight: 1.5,
                              "&:hover": contact.link
                                ? {
                                    color: contact.color,
                                    textDecoration: "underline",
                                  }
                                : {},
                            }}
                          >
                            {contact.content}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  {/* Social Media */}
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      fontWeight: 800,
                      mb: 3,
                      textAlign: "center",
                      textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    SOCIAL NETWORK
                  </Typography>

                  <Grid container spacing={2}>
                    {socialLinks.map((social, index) => (
                      <Grid item xs={6} key={index}>
                        <Card
                          component="a"
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            background: `linear-gradient(135deg, ${social.color}40, rgba(0, 0, 0, 0.4))`,
                            border: `1px solid ${social.color}`,
                            color: "white",
                            textDecoration: "none",
                            borderRadius: "15px",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              transform: "translateY(-5px) scale(1.05)",
                              boxShadow: `0 15px 35px ${social.color}60`,
                              background: `linear-gradient(135deg, ${social.color}, ${social.color}aa)`,
                            },
                          }}
                        >
                          <CardContent sx={{ p: 2, textAlign: "center" }}>
                            <Box sx={{ mb: 1, fontSize: 28 }}>{social.icon}</Box>
                            <Typography variant="caption" sx={{ fontWeight: 800, display: "block" }}>
                              {social.name}
                            </Typography>
                            <Typography variant="caption" sx={{ opacity: 0.8 }}>
                              {social.count}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Bottom Section */}
        <Box
          sx={{
            borderTop: "1px solid rgba(0, 255, 255, 0.3)",
            py: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
          }}
        >
          {/* Copyright */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontWeight: 700,
                mb: 1,
                textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
              }}
            >
              &copy; {new Date().getFullYear()} Career Solutions Private Limited. All rights reserved.
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
              Engineered for the future • Built with ❤️ and cutting-edge tech
            </Typography>
          </Box>

          {/* Status */}
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="body2"
              sx={{
                color: "#00ff88",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#00ff88",
                  animation: "pulse 2s infinite",
                }}
              />
              System Online • 24/7 Active
            </Typography>
          </Box>

          {/* Scroll to Top */}
          <IconButton
            onClick={scrollToTop}
            sx={{
              background: "linear-gradient(135deg, #00ffff, #ff006e)",
              color: "white",
              width: 60,
              height: 60,
              border: "2px solid rgba(255, 255, 255, 0.2)",
              "&:hover": {
                background: "linear-gradient(135deg, #ff006e, #00ffff)",
                transform: "scale(1.1) translateY(-5px)",
                boxShadow: "0 15px 35px rgba(0, 255, 255, 0.4)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <ArrowUpward sx={{ fontSize: 30 }} />
          </IconButton>
        </Box>
      </Container>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
      `}</style>
    </Box>
  )
}

export default Footer

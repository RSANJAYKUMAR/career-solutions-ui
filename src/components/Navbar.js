"use client"

import { useState, useEffect } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
  Fade,
} from "@mui/material"
import {
  Instagram,
  LinkedIn,
  WhatsApp,
  YouTube,
  Menu,
  Close,
  Phone,
  Email,
  PlayArrow,
  Brightness4,
  Language,
} from "@mui/icons-material"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"))
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Courses", path: "/courses" },
    { name: "Domains", path: "/domains" },
    { name: "Contact", path: "/contact" },
    { name: "Enquiry", path: "/enquiry" },
  ]

  const socialLinks = [
    {
      icon: <Instagram sx={{ fontSize: 18 }} />,
      href: "https://www.instagram.com/career_placement_solutions?igsh=MWp3bW91ODZ1dXVpNg==",
      color: "#E4405F",
    },
    {
      icon: <LinkedIn sx={{ fontSize: 18 }} />,
      href: "https://www.linkedin.com/in/career-solutions-73786b355?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BybmkLYZ2ReiIhSEddEuhmg%3D%3D",
      color: "#0077B5",
    },
    {
      icon: <WhatsApp sx={{ fontSize: 18 }} />,
      href: "https://api.whatsapp.com/send/?phone=8098970087&text&app_absent=0",
      color: "#25D366",
    },
    {
      icon: <YouTube sx={{ fontSize: 18 }} />,
      href: "https://www.youtube.com",
      color: "#FF0000",
    },
  ]

  const drawer = (
    <Box
      sx={{
        width: 380,
        height: "100%",
        background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Grid Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
          animation: "grid-move 20s linear infinite",
        }}
      />

      {/* Glowing Orbs */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: "radial-gradient(circle, #00ffff40, transparent)",
          animation: "pulse 3s ease-in-out infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "30%",
          left: "15%",
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "radial-gradient(circle, #ff006e40, transparent)",
          animation: "pulse 4s ease-in-out infinite reverse",
        }}
      />

      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 3,
          borderBottom: "1px solid rgba(0, 255, 255, 0.2)",
          background: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(20px)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt="Career Solutions Logo"
            src="/assets/courses/LOGO.jpeg"
            sx={{
              width: 55,
              height: 55,
              mr: 2,
              border: "2px solid #00ffff",
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
            }}
          />
          <Box>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                fontWeight: 800,
                lineHeight: 1,
                textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
              }}
            >
              Career Solutions
            </Typography>
            <Typography variant="caption" sx={{ color: "#00ffff", fontWeight: 600, letterSpacing: 1 }}>
              FUTURE TECH CAREERS
            </Typography>
          </Box>
        </Box>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: "#00ffff",
            border: "1px solid #00ffff",
            "&:hover": {
              background: "rgba(0, 255, 255, 0.1)",
              transform: "rotate(180deg)",
              boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
            },
            transition: "all 0.4s ease",
          }}
        >
          <Close />
        </IconButton>
      </Box>

      {/* Navigation */}
      <List sx={{ pt: 3, px: 2, position: "relative", zIndex: 2 }}>
        {navItems.map((item, index) => (
          <Fade in={true} timeout={300 + index * 100} key={item.name}>
            <ListItem
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                color: "white",
                textDecoration: "none",
                py: 2,
                px: 3,
                mx: 1,
                mb: 2,
                borderRadius: "15px",
                background:
                  location.pathname === item.path
                    ? "linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 110, 0.2))"
                    : "rgba(255, 255, 255, 0.05)",
                border: location.pathname === item.path ? "1px solid rgba(0, 255, 255, 0.5)" : "1px solid transparent",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(135deg, rgba(0, 255, 255, 0.15), rgba(255, 0, 110, 0.15))",
                  transform: "translateX(10px)",
                  boxShadow: "0 5px 20px rgba(0, 255, 255, 0.3)",
                },
              }}
            >
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontWeight: location.pathname === item.path ? 800 : 600,
                  fontSize: "1.1rem",
                  textShadow: location.pathname === item.path ? "0 0 10px rgba(0, 255, 255, 0.5)" : "none",
                }}
              />
            </ListItem>
          </Fade>
        ))}
      </List>

      {/* Contact Section */}
      <Box sx={{ px: 3, mt: 4, position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            background: "linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 110, 0.1))",
            backdropFilter: "blur(20px)",
            borderRadius: "20px",
            p: 3,
            border: "1px solid rgba(0, 255, 255, 0.3)",
          }}
        >
          <Typography variant="h6" sx={{ color: "#00ffff", fontWeight: 800, mb: 2, textAlign: "center" }}>
            CONNECT NOW
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Phone sx={{ fontSize: 18, color: "#00ffff", mr: 2 }} />
            <Typography variant="body2" sx={{ color: "white", fontWeight: 600 }}>
              +91 9360718107
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Email sx={{ fontSize: 18, color: "#ff006e", mr: 2 }} />
            <Typography variant="body2" sx={{ color: "white", fontWeight: 600 }}>
              hr@careersolutionss.com
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Social Links */}
      <Box
        sx={{
          position: "absolute",
          bottom: 30,
          left: 0,
          right: 0,
          px: 3,
          zIndex: 2,
        }}
      >
        <Typography variant="subtitle1" sx={{ color: "white", fontWeight: 800, mb: 2, textAlign: "center" }}>
          FOLLOW THE FUTURE
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          {socialLinks.map((social, index) => (
            <IconButton
              key={index}
              component="a"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "white",
                background: `linear-gradient(135deg, ${social.color}40, ${social.color}20)`,
                border: `1px solid ${social.color}`,
                width: 50,
                height: 50,
                "&:hover": {
                  background: social.color,
                  transform: "scale(1.2) translateY(-5px)",
                  boxShadow: `0 10px 25px ${social.color}60`,
                },
                transition: "all 0.3s ease",
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  )

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? "rgba(15, 15, 35, 0.95)"
            : "linear-gradient(135deg, rgba(15, 15, 35, 0.1), rgba(26, 26, 46, 0.1))",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(0, 255, 255, 0.3)" : "1px solid rgba(255, 255, 255, 0.1)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: scrolled ? "0 8px 32px rgba(0, 255, 255, 0.2)" : "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 1,
              minHeight: { xs: 75, md: 85 },
            }}
          >
            {/* Logo Section */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Avatar
                alt="Career Solutions Logo"
                src="/assets/courses/LOGO.jpeg"
                sx={{
                  width: { xs: 55, md: 65 },
                  height: { xs: 55, md: 65 },
                  mr: 2,
                  border: "2px solid #00ffff",
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)",
                }}
              />
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 900,
                    background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: 1,
                    letterSpacing: "-1px",
                    textShadow: "0 0 30px rgba(0, 255, 255, 0.3)",
                  }}
                >
                  Career Solutions
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: scrolled ? "#00ffff" : "rgba(24, 22, 22, 0.9)",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    fontSize: "0.7rem",
                  }}
                >
                  Future Tech Careers
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: scrolled ? "white" : "rgba(20, 19, 19, 0.9)",
                      fontWeight: location.pathname === item.path ? 800 : 600,
                      fontSize: "1rem",
                      px: 3,
                      py: 1.5,
                      borderRadius: "25px",
                      position: "relative",
                      textTransform: "none",
                      minWidth: "auto",
                      background:
                        location.pathname === item.path
                          ? "linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 110, 0.2))"
                          : "transparent",
                      border:
                        location.pathname === item.path ? "1px solid rgba(3, 3, 3, 0.5)" : "1px solid transparent",
                      backdropFilter: location.pathname === item.path ? "blur(20px)" : "none",
                      textShadow: location.pathname === item.path ? "0 0 10px rgba(9, 29, 29, 0.5)" : "none",
                      "&:hover": {
                        background: "linear-gradient(135deg, rgba(0, 255, 255, 0.15), rgba(255, 0, 110, 0.15))",
                        color: "white",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 25px rgba(0, 255, 255, 0.4)",
                        border: "1px solid rgba(0, 255, 255, 0.5)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}

            {/* Desktop Actions */}
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                {/* Theme Toggle */}
                <IconButton
                  sx={{
                    color: scrolled ? "#00ffff" : "white",
                    border: "1px solid rgba(0, 255, 255, 0.3)",
                    "&:hover": {
                      background: "rgba(0, 255, 255, 0.1)",
                      transform: "scale(1.1)",
                      boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Brightness4 />
                </IconButton>

                {/* Language */}
                <IconButton
                  sx={{
                    color: scrolled ? "#ff006e" : "white",
                    border: "1px solid rgba(255, 0, 110, 0.3)",
                    "&:hover": {
                      background: "rgba(255, 0, 110, 0.1)",
                      transform: "scale(1.1)",
                      boxShadow: "0 0 15px rgba(255, 0, 110, 0.5)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Language />
                </IconButton>

                {/* CTA Button */}
                <Button
                  variant="contained"
                  startIcon={<PlayArrow />}
                  sx={{
                    background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
                    color: "white",
                    fontWeight: 800,
                    px: 4,
                    py: 1.5,
                    borderRadius: "30px",
                    textTransform: "none",
                    boxShadow: "0 8px 25px rgba(0, 255, 255, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #ff006e 0%, #00ffff 100%)",
                      transform: "translateY(-3px)",
                      boxShadow: "0 15px 35px rgba(255, 0, 110, 0.6)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Start Journey
                </Button>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  color: scrolled ? "#00ffff" : "white",
                  border: "1px solid rgba(11, 15, 15, 0.3)",
                  "&:hover": {
                    background: "rgba(0, 255, 255, 0.1)",
                    transform: "scale(1.1)",
                    boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <Menu />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 380,
            border: "none",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer */}
      <Toolbar sx={{ minHeight: { xs: 75, md: 85 } }} />

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </>
  )
}

export default Navbar

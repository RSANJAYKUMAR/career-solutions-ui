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
} from "@mui/material"
import { Instagram, LinkedIn, WhatsApp, YouTube, Menu, Close } from "@mui/icons-material"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
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
    },
    {
      icon: <LinkedIn />,
      href: "https://www.linkedin.com/in/career-solutions-73786b355?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BybmkLYZ2ReiIhSEddEuhmg%3D%3D",
    },
    {
      icon: <WhatsApp />,
      href: "https://api.whatsapp.com/send/?phone=8098970087&text&app_absent=0",
    },
    {
      icon: <YouTube />,
      href: "https://www.youtube.com",
    },
  ]

  const drawer = (
    <Box sx={{ width: 280, height: "100%", bgcolor: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar alt="Career Solutions Logo" src="/assets/courses/LOGO.jpeg" sx={{ width: 32, height: 32, mr: 1 }} />
          <Typography variant="h6" sx={{ color: "white", fontWeight: 600 }}>
            Career Solutions
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
          <Close />
        </IconButton>
      </Box>

      <List sx={{ pt: 2 }}>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              color: "white",
              textDecoration: "none",
              py: 1.5,
              px: 3,
              borderLeft: location.pathname === item.path ? "4px solid #64b5f6" : "4px solid transparent",
              bgcolor: location.pathname === item.path ? "rgba(100, 181, 246, 0.2)" : "transparent",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{
                fontWeight: location.pathname === item.path ? 600 : 400,
                fontSize: "1rem",
              }}
            />
          </ListItem>
        ))}
      </List>

      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {socialLinks.map((social, index) => (
          <IconButton
            key={index}
            component="a"
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              "&:hover": {
                color: "#64b5f6",
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
  )

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          background: scrolled ? "rgba(25, 118, 210, 0.95)" : "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "all 0.3s ease",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 1,
            }}
          >
            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "white",
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
                  width: 40,
                  height: 40,
                  mr: 2,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  display: { xs: "none", sm: "block" },
                }}
              >
                Career Solutions
              </Typography>
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
                      color: "white",
                      fontWeight: location.pathname === item.path ? 600 : 400,
                      fontSize: "0.95rem",
                      px: 2,
                      py: 1,
                      borderRadius: "8px",
                      position: "relative",
                      textTransform: "none",
                      "&:hover": {
                        bgcolor: "rgba(255,255,255,0.1)",
                        transform: "translateY(-2px)",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: location.pathname === item.path ? "80%" : "0%",
                        height: "2px",
                        bgcolor: "#64b5f6",
                        transition: "width 0.3s ease",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}

            {/* Desktop Social Icons */}
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: "#64b5f6",
                        transform: "scale(1.1)",
                        bgcolor: "rgba(255,255,255,0.1)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  color: "white",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
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
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed navbar */}
      <Toolbar />
    </>
  )
}

export default Navbar

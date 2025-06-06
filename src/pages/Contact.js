"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { Email, Phone, LocationOn, Send, AccessTime, Language } from "@mui/icons-material"

const Contact = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

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

  const validate = () => {
    const tempErrors = {}
    tempErrors.name = formData.name ? "" : "Name is required"
    tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Invalid email format"
    tempErrors.phone =
      /^[0-9]+$/.test(formData.phone) && formData.phone.length === 10 ? "" : "Phone number must be 10 digits"
    tempErrors.message = formData.message ? "" : "Message is required"
    setErrors(tempErrors)
    return Object.values(tempErrors).every((x) => x === "")
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      }, 2000)
    }
  }

  const contactInfo = [
    {
      icon: <LocationOn sx={{ fontSize: 40, color: "#4dabf5" }} />,
      title: "Our Address",
      content: "W-583, School Rd, D-Sector, Anna Nagar West Extension, Chennai, Tamil Nadu 600101",
    },
    {
      icon: <Phone sx={{ fontSize: 40, color: "#4dabf5" }} />,
      title: "Phone Number",
      content: "+91 80989 70087",
    },
    {
      icon: <Email sx={{ fontSize: 40, color: "#4dabf5" }} />,
      title: "Email Address",
      content: "hr@careersolutionss.com",
    },
  ]

  return (
    <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #2E3B55 0%, #142238 100%)",
          color: "white",
          position: "relative",
          height: "50vh",
          minHeight: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <Box
            sx={{
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
                mb: 2,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
            >
              Contact Us
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 300,
                opacity: 0.9,
                maxWidth: "700px",
                mx: "auto",
              }}
            >
              Get in touch with our team for any inquiries or support
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contact Information */}
      <Container maxWidth="lg" sx={{ mt: -8, position: "relative", zIndex: 10 }}>
        <Grid container spacing={4}>
          {contactInfo.map((info, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={index}
              sx={{
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                opacity: isLoaded ? 1 : 0,
                transition: `all 0.8s ease-out ${0.3 + index * 0.2}s`,
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "10px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Box
                    sx={{
                      display: "inline-flex",
                      bgcolor: "rgba(77, 171, 245, 0.1)",
                      p: 2,
                      borderRadius: "50%",
                      mb: 2,
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: "#2E3B55" }}>
                    {info.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#555" }}>
                    {info.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Form and Map */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid
            item
            xs={12}
            md={6}
            className="scroll-animate"
            sx={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.8s ease-out",
            }}
          >
            <Card
              sx={{
                borderRadius: "10px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 1, color: "#2E3B55" }}>
                  Send Us a Message
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: "#555" }}>
                  Fill out the form below and we'll get back to you as soon as possible.
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#4dabf5",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#4dabf5",
                            },
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#4dabf5",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#4dabf5",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#4dabf5",
                            },
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#4dabf5",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#4dabf5",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#4dabf5",
                            },
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#4dabf5",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#4dabf5",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#4dabf5",
                            },
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#4dabf5",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={isSubmitting}
                        startIcon={<Send />}
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
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>

                      {submitSuccess && (
                        <Box
                          sx={{
                            mt: 2,
                            p: 2,
                            bgcolor: "rgba(76, 175, 80, 0.1)",
                            borderRadius: "4px",
                            color: "#4caf50",
                            textAlign: "center",
                          }}
                        >
                          Your message has been sent successfully! We'll get back to you soon.
                        </Box>
                      )}
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* Additional Information */}
          <Grid
            item
            xs={12}
            md={6}
            className="scroll-animate"
            sx={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.8s ease-out 0.3s",
            }}
          >
            <Card
              sx={{
                borderRadius: "10px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                mb: 4,
                height: "calc(100% - 32px)",
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: "#2E3B55" }}>
                  Get in Touch with Career Solution
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: "#555" }}>
                  Feel free to connect with us for any of your needs regarding our services. Our support team is ready
                  to solve any of your issues. Just push a text to us and we will get back to you soon.
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          display: "inline-flex",
                          bgcolor: "rgba(77, 171, 245, 0.1)",
                          p: 1,
                          borderRadius: "50%",
                        }}
                      >
                        <AccessTime sx={{ fontSize: 24, color: "#4dabf5" }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#2E3B55" }}>
                          Business Hours
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#555" }}>
                          Mon - Fri: 9:00 AM - 6:00 PM
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          display: "inline-flex",
                          bgcolor: "rgba(77, 171, 245, 0.1)",
                          p: 1,
                          borderRadius: "50%",
                        }}
                      >
                        <Language sx={{ fontSize: 24, color: "#4dabf5" }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#2E3B55" }}>
                          Global Service
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#555" }}>
                          Supporting clients worldwide
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Map Section */}
      <Box
        className="scroll-animate"
        sx={{
          opacity: 0,
          transform: "translateY(30px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <Container maxWidth="lg" sx={{ mb: 10 }}>
          <Card
            sx={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            <Box sx={{ p: 3, borderBottom: "1px solid #e9ecef" }}>
              <Typography variant="h5" sx={{ fontWeight: 600, color: "#2E3B55" }}>
                Our Location
              </Typography>
            </Box>
            <Box sx={{ height: "500px", width: "100%" }}>
              <iframe
                title="Career Solutions Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0986160306684!2d80.1944299!3d13.092936199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265000f1eaddb%3A0x174f57a42e12987f!2sCAREER%20PLACEMENT%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1742297832608!5m2!1sen!2sin"
              />
            </Box>
          </Card>
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

export default Contact

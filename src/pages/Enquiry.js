import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box, Paper, Snackbar, Alert } from "@mui/material";
 
const Enquiry = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "" });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);
 
  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required";
    tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Invalid email format";
    tempErrors.phone = /^[0-9]+$/.test(formData.phone) && formData.phone.length === 10 ? "" : "Phone number must be 10 digits and contain only numbers";
    tempErrors.subject = formData.subject ? "" : "Subject is required";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };
 
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();
 
    if (validate()) {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/enquiry/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          keepalive: true,
        });
 
        if (response.ok) {
          setOpenSnackbar(true);
          setFormData({ name: "", email: "", phone: "", subject: "" });
        } else {
          console.error("Failed to submit enquiry.");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }
  };
 
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundImage: "url('/assets/courses/inquiry.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <Paper
          elevation={8}
          sx={{
            padding: 4,
            borderRadius: "10px",
            maxWidth: "450px",
            width: "100%",
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.95)", // Brighter background
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Soft shadow for depth // Make it a bit transparent
          }}
        >
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#007bff" }}>
            Enquiry Form
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2, color: "#555" }}>
             Fill out the form below and we will get back to you!
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              margin="normal"
              required
              error={!!errors.phone}
              helperText={errors.phone}
            />
            <TextField
              fullWidth
              label="Message"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              margin="normal"
              required
              error={!!errors.subject}
              helperText={errors.subject}
              multiline
              rows={3}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "8px",
              }}
              fullWidth
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Paper>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Your Enquiry has been submitted successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};
 
export default Enquiry;
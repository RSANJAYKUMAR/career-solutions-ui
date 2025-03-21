import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box, Paper, Snackbar, Alert } from "@mui/material";

const Enquiry = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required";
    tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Invalid email format";
    tempErrors.phone = /^[0-9]+$/.test(formData.phone) && formData.phone.length === 10 ? "" : "Phone number must be 10 digits and contain only numbers";
    tempErrors.message = formData.message ? "" : "Message is required";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        const response = await fetch("https://careersolutionss.com/backend/submit.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        });

        const result = await response.json();

        if (result.success) {
          setSnackbarMessage(result.message);
          setSnackbarSeverity("success");
          setFormData({ name: "", email: "", phone: "", message: "" });
        } else {
          setSnackbarMessage(result.message);
          setSnackbarSeverity("error");
        }

        setOpenSnackbar(true);
      } catch (error) {
        setSnackbarMessage("Error submitting form. Please try again.");
        setSnackbarSeverity("error");
        console.error("Error submitting form:", error);
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
            backgroundColor: "rgba(255, 255, 255, 0.95)", 
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
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
              name="message"
              value={formData.message}
              onChange={handleChange}
              margin="normal"
              required
              error={!!errors.message}
              helperText={errors.message}
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
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Enquiry;

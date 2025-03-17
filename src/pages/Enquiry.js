import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

const Enquiry = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "" });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enquiry Submitted:", formData);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>Enquiry</Typography>
      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <form onSubmit={handleSubmit} style={{ width: "400px", textAlign: "center" }}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
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
          />
          <TextField
            fullWidth
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: "20px" }}>Submit</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Enquiry;

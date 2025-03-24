import React, { useState } from 'react';
import { Snackbar, Alert, Container, TextField, Typography } from '@mui/material';
 
function Enquiry() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [message, setMessage] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://careersolutionss.com/backend/submit.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData).toString(),
            });
 
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText);
            }
 
            const result = await response.text();
            setMessage(result);
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            setMessage(`Error: ${error.message}`);
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
            console.error('Error submitting form:', error);
        }
    };
 
    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };
 
    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                backgroundImage: "url('/assets/courses/inquiry.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
            }}
        >
            <div style={{ position: 'absolute', top: 20, right: 20 }}>
                <Snackbar open={snackbarOpen} autoHideDuration={4000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                    <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                </Snackbar>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', width: '400px' }}>
                <Typography variant="h4" gutterBottom>Enquiry Details</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        name="name"
                        variant="outlined"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Phone Number"
                        name="phone"
                        variant="outlined"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Message"
                        name="message"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <button type="submit" style={{ padding: '10px 20px', margin: '10px' }}>Submit</button>
                </form>
            </div>
        </Container>
    );
}
 
export default Enquiry;
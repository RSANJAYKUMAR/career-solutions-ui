import React, { useState } from 'react';
 
function Enquiry() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [message, setMessage] = useState('');
 
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
              body: new URLSearchParams({
                  name: formData.name,
                  email: formData.email,
                  phone: formData.phone,
                  message: formData.message,
              }).toString(),
          });
 
          if (!response.ok) {
              const errorText = await response.text();
              throw new Error(errorText);
          }
 
          const result = await response.text();
          alert(result);
          setFormData({ name: '', email: '', phone: '', message: '' });
      } catch (error) {
          alert(`Error submitting form: ${error.message}`);
          console.error('Error submitting form:', error);
      }
  };
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Inquiry Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ margin: '5px', padding: '8px', width: '300px' }}
                />
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ margin: '5px', padding: '8px', width: '300px' }}
                />
                <br />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={{ margin: '5px', padding: '8px', width: '300px' }}
                />
                <br />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    style={{ margin: '5px', padding: '8px', width: '300px' }}
                />
                <br />
                <button type="submit" style={{ padding: '10px 20px', margin: '10px' }}>Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
 
export default Enquiry;
 
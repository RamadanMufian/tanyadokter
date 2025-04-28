import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Pesan = () => {
  const location = useLocation();
  const { doctorName, doctorSpecialization } = location.state || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      
      setSuccessMessage(`Pesan Anda telah dikirim, cek balasan pesan di email Anda.`);
     
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  return (
    <div className="message-form-container">
      <h3>Chat with {doctorName} - {doctorSpecialization}</h3>

      
      {successMessage && <div className="success-message">{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tulis pesan Anda..."
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Pesan;

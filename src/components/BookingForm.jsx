import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BookingForm = () => {
  const { name } = useParams(); // destination slug
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    country: '',
    passportNumber: '',
    guests: 1,
    checkIn: '',
    checkOut: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Booking Data:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={styles.container}>
        <h2>✅ Booking Confirmed!</h2>
        <p>Thank you, {formData.fullName}! Your trip to <strong>{name.replace(/-/g, ' ')}</strong> is booked.</p>
        <Link to="/" style={styles.backLink}>← Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={{ fontSize: '28px' }}>Book Your Trip to {name.replace(/-/g, ' ')}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
          min="1"
          style={styles.input}
        />
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="Zimbabwe">Zimbabwe</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Kenya">Kenya</option>
          <option value="South Africa">South Africa</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          name="passportNumber"
          placeholder="Passport Number"
          value={formData.passportNumber}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <div style={styles.fieldGroup}>
  <label style={styles.label}>Number of Guests</label>
  <input
    type="number"
    name="guests"
    value={formData.guests}
    onChange={handleChange}
    required
    min="1"
    style={styles.input}
  />
</div>

<div style={styles.fieldGroup}>
  <label style={styles.label}>Check-In Date</label>
  <input
    type="date"
    name="checkIn"
    value={formData.checkIn}
    onChange={handleChange}
    required
    style={styles.input}
  />
</div>

<div style={styles.fieldGroup}>
  <label style={styles.label}>Check-Out Date</label>
  <input
    type="date"
    name="checkOut"
    value={formData.checkOut}
    onChange={handleChange}
    required
    style={styles.input}
  />
</div>

        <button type="submit" style={styles.button}>Confirm Booking</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '24px',
    border: '1px solid #ccc',
    borderRadius: '12px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px'
  },
  button: {
    backgroundColor: '#2a9d8f',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  backLink: {
    marginTop: '20px',
    display: 'inline-block',
    color: '#0077cc',
    textDecoration: 'none'
  }
};

export default BookingForm;

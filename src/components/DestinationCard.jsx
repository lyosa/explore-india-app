import React from 'react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  return (
    <div style={styles.card}>
      <Link to={`/destination/${destination.name.toLowerCase().replace(/\s+/g, '-')}`}>
        <img src={destination.image} alt={destination.name} style={styles.image} />
      </Link>
      <h2 style={styles.title}>{destination.name}</h2>
      <p style={styles.description}>{destination.description}</p>
      <p style={styles.price}>₹{destination.price || 'N/A'} / night</p>
      
      <Link to={`/book/${destination.name.toLowerCase().replace(/\s+/g, '-')}`}>
  <button style={styles.button}>Book Now</button>
</Link>

    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '16px',
    margin: '16px',
    width: '280px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
    cursor: 'pointer'
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '8px'
  },
  title: {
    fontSize: '20px',
    margin: '12px 0 8px'
  },
  description: {
    fontSize: '14px',
    color: '#555'
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#2a9d8f',
    marginTop: '8px'
  },
  button: {
    marginTop: '12px',
    padding: '10px 20px',
    backgroundColor: '#2a9d8f',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    cursor: 'pointer'
  }
};

export default DestinationCard;

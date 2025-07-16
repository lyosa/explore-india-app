import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DestinationDetails = ({ destinations }) => {
  const { name } = useParams();

  const destination = destinations.find(dest =>
    dest.name.toLowerCase().replace(/\s+/g, '-') === name.toLowerCase()
  );

  if (!destination) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h2>Destination Not Found</h2>
        <Link to="/" style={{ color: 'blue' }}>← Go Back</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: 'auto' }}>
      <h2 style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center' }}>
        {destination.name}
      </h2>

      <img
        src={destination.image}
        alt={destination.name}
        style={{
          width: '100%',
          borderRadius: '12px',
          margin: '20px 0'
        }}
      />

      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        {destination.description}
      </p>

      <div style={{ textAlign: 'left', lineHeight: '1.7', fontSize: '16px' }}>
        <p><strong>📍 Location:</strong> {destination.location}</p>
        <p><strong>💰 Cost per night:</strong> ₹{destination.price}</p>
        <p><strong>📸 Best time to visit:</strong> {destination.bestTime}</p>

        <p><strong>🎯 Top Attractions:</strong></p>
        <ul>
          {destination.attractions.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>

        <p><strong>🧳 Travel Tips:</strong> {destination.tips}</p>
      </div>

      <Link to="/" style={{ marginTop: '30px', display: 'inline-block', color: 'blue' }}>
        ← Back to Home
      </Link>
    </div>
  );
};

export default DestinationDetails;

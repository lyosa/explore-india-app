import React from 'react';
import DestinationCard from './DestinationCard';

const DestinationsList = ({ destinations }) => {
  const handleImageClick = (destination) => {
    console.log("Image clicked:", destination.name);
    // You can set state or open modal later
  };

  return (
    <div style={styles.container}>
      {destinations.map((dest, index) => (
        <DestinationCard
          key={index}
          destination={dest}
          onImageClick={handleImageClick}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '16px',
  }
};

export default DestinationsList;

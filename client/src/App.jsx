import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DestinationsList from './components/DestinationsList';
import DestinationDetails from './components/DestinationDetails';
import BookingForm from './components/BookingForm';


function App() {
  const destinations = [
  {
    name: 'Taj Mahal',
    description: 'An iconic symbol of love in Agra.',
    image: 'Taj Mahal.jpg',
    price: 4000,
    location: 'Agra, Uttar Pradesh',
    attractions: ['Taj Mahal Complex', 'Agra Fort', 'Mehtab Bagh', 'Fatehpur Sikri'],
    bestTime: 'October to March',
    tips: 'Visit early morning to avoid crowds. Closed on Fridays.'
  },
  {
    name: 'Goa Beach',
    description: 'Beautiful beaches and nightlife in Goa.',
    image: 'Goa.jpg',
    price: 3500,
    location: 'Goa, West India',
    attractions: ['Baga Beach', 'Anjuna Market', 'Fort Aguada', 'Dudhsagar Falls'],
    bestTime: 'November to February',
    tips: 'Book early in peak season. Carry sunscreen.'
  },
  {
    name: 'Jaipur',
    description: 'The Pink City of Rajasthan.',
    image: 'Jaipur.jpg',
    price: 3200,
    location: 'Jaipur, Rajasthan',
    attractions: ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar'],
    bestTime: 'October to March',
    tips: 'Wear comfortable shoes. Try local cuisine.'
  },
  {
    name: 'Meenakshi Temple, Madurai',
    description: 'A stunning Dravidian-style temple famous for its towering gopurams and intricate sculptures.',
    image: 'MT.jpg',
    price: 2800,
    location: 'Madurai, Tamil Nadu',
    attractions: ['Meenakshi Amman Temple', 'Thirumalai Nayakkar Palace', 'Gandhi Memorial Museum'],
    bestTime: 'October to March',
    tips: 'Wear modest clothing. Phones not allowed inside main temple.'
  },
  {
    name: 'Ranthambore National Park, Rajasthan',
    description: 'A popular wildlife sanctuary known for tiger sightings and ancient ruins.',
    image: 'RNP.jpg',
    price: 4500,
    location: 'Sawai Madhopur, Rajasthan',
    attractions: ['Tiger Safari', 'Ranthambore Fort', 'Padam Talao'],
    bestTime: 'March to May',
    tips: 'Book safaris early. Early morning has better tiger sightings.'
  },
  {
    name: 'Khajuraho Temples, Madhya Pradesh',
    description: 'Renowned for their exquisite erotic carvings and brilliant Nagara-style architecture.',
    image: 'KT.jpg',
    price: 3000,
    location: 'Khajuraho, Madhya Pradesh',
    attractions: ['Western Group of Temples', 'Light and Sound Show', 'Raneh Falls'],
    bestTime: 'October to February',
    tips: 'Hire a guide to understand history. Photography allowed.'
  },
  {
    name: 'Sundarbans, West Bengal ',
    description: 'The world’s largest mangrove forest and home to the elusive Royal Bengal tiger.',
    image: 'SB.jpg',
    price: 3700,
    location: 'Sundarbans Delta, West Bengal',
    attractions: ['Boat Safari', 'Sajnekhali Watch Tower', 'Dobanki Canopy Walk'],
    bestTime: 'September to March',
    tips: 'Follow guide instructions during boat tours. Weak mobile network.'
  },
  {
    name: 'Valley of Flowers, Uttarakhand',
    description: 'A breathtaking Himalayan valley covered in vibrant seasonal blooms and rare flora.',
    image: 'VF.jpg',
    price: 3600,
    location: 'Chamoli District, Uttarakhand',
    attractions: ['Valley of Flowers Trek', 'Hemkund Sahib', 'Nanda Devi National Park'],
    bestTime: 'Mid-July to August',
    tips: 'Trek is moderately difficult — carry proper shoes and warm clothes.'
  }
];


  return (
    <Router>
      <div className="text-center">
        <h1 className="text-3xl font-bold mt-6">Explore India</h1>
        <p className="text-lg text-gray-600 mb-6">Loading Destinations...</p>

        <Routes>
          <Route path="/" element={<DestinationsList destinations={destinations} />} />

          <Route
            path="/destination/:name"
            element={<DestinationDetails destinations={destinations} />}
          />

          <Route
            path="/book/:name"
            element={<BookingForm />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// src/UpcomingProjects.js
import React from 'react';
import {properties} from '../data/propertiesData';


const Upcoming = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Upcoming Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.upcoming.map(property => (
          <div key={property.id} className="border p-4 rounded shadow">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover rounded" />
            <h3 className="text-lg font-semibold">{property.name}</h3>
            <p>{property.location}</p>
            <p>Status: {property.status}</p>
            <img src={property.qrcode} alt="QR Code" className="w-16 h-16" />
            <a href={property.exploreLink} className="text-blue-600 hover:underline">Explore</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;

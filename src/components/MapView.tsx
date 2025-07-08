import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css';

const DEFAULT_POSITION: [number, number] = [28.6139, 77.2090]; // Example: New Delhi

const MapView: React.FC = () => {
  return (
    <div className="map-container">
      <MapContainer center={DEFAULT_POSITION} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={DEFAULT_POSITION}>
          <Popup>
            Default Location (New Delhi)
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView; 
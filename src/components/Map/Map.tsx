'use client';

import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

// Dynamically import MapContainer with no SSR
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const CircleMarker = dynamic(() => import('react-leaflet').then(mod => mod.CircleMarker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function Map() {
  return (
    <main className="d w-[100%] h-[360px] z-1">
      <div>
        <MapContainer center={[-1.8519326397651, 106.11673771966505]} zoom={15} style={{ height: "360px", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <CircleMarker
            center={[-1.8519326397651, 106.11673771966505]}
            radius={10}
            color="transparent"
            fillColor="red"
            fillOpacity={0.5}
          >
            <Popup>
              <p className="text-[18px]">Hamidah Homestay</p>
            </Popup>
          </CircleMarker>
        </MapContainer>
      </div>
    </main>
  );
}

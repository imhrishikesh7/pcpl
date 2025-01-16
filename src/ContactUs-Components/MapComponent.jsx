import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Use L to create the icon instance

// Define a custom icon
const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252025.png", // Example icon URL
    iconSize: [40, 40], // Size of the icon
    iconAnchor: [20, 40], // Anchor the icon to the marker position
});

function MapComponent() {
    return (
        <div className="md:flex my-16 justify-between">
            <div className="md:w-[30%] flex w-full md:h-[400px] h-[300px] bg-[#F6F6F6]">
                <div className="w-[80%] m-auto ">
                    <h1 className="viaoda md:text-8xl text-6xl text-[#acc3d6]">WE'RE <br />HERE</h1>
                    <div className="text-left w-full mt-2">
                        <b >LOCATION</b>
                        <p className="text-[#7A736A] mt-2">
                            1001, DLH Park, 10th Floor, SV. <br />
                            Road,Opp. Goregaon MTNL, Goregaon <br />
                            (West),Mumbai - 400062, <br />
                            Maharashtra, India.
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:w-[70%] h-[400px] z-0">
                <MapContainer
                    center={[19.157839, 72.846077]}
                    zoom={14}
                    scrollWheelZoom={false}
                    className="w-full h-full"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker
                        position={[19.157839, 72.846077]}
                        icon={customIcon} // Use the custom icon here
                    />
                </MapContainer>
            </div>
        </div>
    );
}

export default MapComponent;

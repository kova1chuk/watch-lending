import React, { useState, useEffect } from "react";

const LocationInfo: React.FC = () => {
  const [locationData, setLocationData] = useState<string | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position: GeolocationPosition) => {
        const { latitude, longitude } = position.coords;
        const apiKey = "ВАШ_КЛЮЧ_API";
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

        try {
          const response = await fetch(apiUrl);
          const data = await response.json();

          if (data.results.length > 0) {
            const addressComponents = data.results[0].address_components;
            const locality = addressComponents.find((component: any) =>
              component.types.includes("locality")
            );

            if (locality) {
              setLocationData(locality.long_name);
            }
          }
        } catch (error) {
          console.error("Error fetching location data:", error);
        }
      },
      (error: GeolocationPositionError) => {
        console.error("Error getting geolocation:", error);
      }
    );
  }, []);

  return (
    <div>
      {locationData ? (
        <p>Ваш населений пункт: {locationData}</p>
      ) : (
        <p>Завантаження...</p>
      )}
    </div>
  );
};

export default LocationInfo;

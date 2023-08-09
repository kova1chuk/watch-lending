"use client";

import React, { useState, useEffect } from "react";

import callUkrPoshtaGetWarehousesByLocation from "@/api/ukrPoshtaGetWarehousesByLocation";

const apiKey = process.env.NEXT_PUBLIC_G_MAPS_API_KEY;

const LocationInfo: React.FC = () => {
  const [locationData, setLocationData] = useState<string | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position: GeolocationPosition) => {
        const { latitude, longitude } = position.coords;
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

        try {
          const data = await callUkrPoshtaGetWarehousesByLocation(
            latitude,
            longitude
          );
          console.log("newnewnew", data);
        } catch (error) {
          console.error("Помилка укрпошти за локацією", error);
        }

        try {
          const response = await fetch(apiUrl);
          const data = await response.json();

          if (data.results.length > 0) {
            const addressComponents = data.results[0].address_components;
            const locality = addressComponents.find((component: any) =>
              component.types.includes("locality")
            );

            if (locality) {
              const englishPlaceName = locality.long_name;

              // Translate English place name to Ukrainian
              const translationResponse = await fetch(
                `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    q: englishPlaceName,
                    target: "uk-UA",
                  }),
                }
              );

              const translationData = await translationResponse.json();
              const translatedPlaceName =
                translationData.data.translations[0].translatedText;

              setLocationData(translatedPlaceName);
            }
          }
        } catch (error) {
          console.error(
            "Помилка під час отримання даних про місцезнаходження:",
            error
          );
        }
      },
      (error: GeolocationPositionError) => {
        console.error("Помилка під час отримання геолокації:", error);
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

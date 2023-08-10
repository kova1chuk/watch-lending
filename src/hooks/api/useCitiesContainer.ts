import { useState, useEffect } from "react";

import { fetchCities } from "@/api"; // Replace with the actual path to the cities API file

export const useCitiesContainer = () => {
  const [cities, setCities] = useState<any[]>([]); // Specify the type for cities based on the response from the API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCitiesData = async () => {
    setLoading(true);
    try {
      const response = await fetchCities();
      console.log(response);
      setCities(response);
    } catch (error) {
      setError("Error fetching cities");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCitiesData();
  }, []);

  return { cities, loading, error };
};

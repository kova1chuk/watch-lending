import { useState, useEffect } from "react";

import { StreetData } from "@/api/novaPoshtaGetStreetsAPI";
import { fetchStreets } from "@/api";

export const useStreetsContainer = (cityRef: string, searchString: string) => {
  const [streets, setStreets] = useState<StreetData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStreetsData = async (cityRef: string, searchString: string) => {
    setLoading(true);
    try {
      const response = await fetchStreets(cityRef, searchString);
      setStreets(response);
    } catch (error) {
      setError("Error fetching streets");
    }
    setLoading(false);
  };

  useEffect(() => {
    cityRef && fetchStreetsData(cityRef, searchString);
  }, [cityRef, searchString]);

  return { streets, loading, error };
};

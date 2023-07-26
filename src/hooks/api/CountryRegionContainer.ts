import { useState, useEffect } from "react";

import { fetchSettlementCountryRegions } from "@/api";

export const useCountryRegionContainer = (selectedArea: string) => {
  const [countryRegions, setCountryRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCountryRegionsData = async (areaRef: string) => {
    setLoading(true);
    try {
      const response = await fetchSettlementCountryRegions(areaRef);
      setCountryRegions(response.data);
    } catch (error) {
      setError("Error fetching country regions");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (selectedArea) {
      fetchCountryRegionsData(selectedArea);
    }
  }, [selectedArea]);

  return { countryRegions, loading, error };
};

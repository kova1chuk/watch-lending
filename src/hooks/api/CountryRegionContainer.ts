import { useState, useEffect } from "react";

import { fetchSettlementCountryRegions } from "@/api";
import { SettlementCountryRegionData } from "@/api/novaPoshtaGetSettlementCountryRegionAPI";

export const useCountryRegionContainer = (selectedArea: string) => {
  const [countryRegions, setCountryRegions] = useState<
    SettlementCountryRegionData[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCountryRegionsData = async (areaRef: string) => {
    setLoading(true);
    try {
      const response = await fetchSettlementCountryRegions(areaRef);
      console.log(response);
      setCountryRegions(response);
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

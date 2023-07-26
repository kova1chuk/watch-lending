import { useState, useEffect } from "react";
import { fetchSettlements } from "@/api";
import { SettlementData } from "@/api/novaPoshtaGetSettlementsAPI";

export const useSettlementsContainer = (
  selectedRegion: string,
  selectedArea: string
) => {
  const [settlements, setSettlements] = useState<SettlementData[]>([]); // Assuming SettlementData is compatible with GetSettlementsResponseData
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSettlementsData = async (regionRef: string, areaRef: string) => {
    setLoading(true);
    try {
      const response = await fetchSettlements(regionRef, areaRef);
      setSettlements(response);
    } catch (error) {
      setError("Error fetching settlements");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (selectedRegion && selectedArea) {
      fetchSettlementsData(selectedRegion, selectedArea);
    }
  }, [selectedRegion, selectedArea]);

  return { settlements, loading, error };
};

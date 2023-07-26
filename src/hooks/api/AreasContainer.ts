import { useState, useEffect } from "react";
import { fetchAreas } from "@/api"; // Import the AreaData type from your API file
import { SettlementAreaData } from "@/api/novaPoshtaGetAreasAPI";

export const useAreasContainer = () => {
  const [areas, setAreas] = useState<SettlementAreaData[]>([]); // Specify the type for areas as AreaData[]
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAreasData = async () => {
    setLoading(true);
    try {
      const response = await fetchAreas();
      setAreas(response);
    } catch (error) {
      setError("Error fetching areas");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAreasData();
  }, []);

  return { areas, loading, error };
};

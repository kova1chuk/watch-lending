import { useState, useEffect } from "react";
import { NovaPostSearchSetelmentsAddress } from "@/api/novaPoshtaSearchSettlementsAPI";
import { fetchSettlementsSearch } from "@/api";

export const useSettlementsSearch = (cityName: string) => {
  const [settlements, setSettlements] = useState<
    NovaPostSearchSetelmentsAddress[] | undefined
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSettlementsData = async (name: string) => {
    setLoading(true);
    try {
      const cities = await fetchSettlementsSearch(name);

      setSettlements(cities);
    } catch (error) {
      setError("Error fetching settlements");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (cityName) {
      fetchSettlementsData(cityName);
    }
  }, [cityName]);

  return { settlements, loading, error };
};

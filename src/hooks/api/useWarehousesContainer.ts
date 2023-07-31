import { useState, useEffect } from "react";
import { WarehouseData } from "@/api/novaPoshtaGetWarehousesAPI";
import { fetchWarehouses } from "@/api";

export const useWarehousesContainer = (cityRef: string) => {
  const [warehouses, setWarehouses] = useState<WarehouseData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWarehousesData = async (cityRef: string) => {
    setLoading(true);
    try {
      const response = await fetchWarehouses(cityRef);
      setWarehouses(response);
    } catch (error) {
      setError("Error fetching warehouses");
    }
    setLoading(false);
  };

  useEffect(() => {
    cityRef && fetchWarehousesData(cityRef);
  }, [cityRef]);

  return { warehouses, loading, error };
};

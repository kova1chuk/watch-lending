import { useState, useEffect } from "react";
import {
  callNovaPoshtaGetSettlementAreasAPI,
  SettlementAreaData,
} from "../api/novaPoshtaGetAreasAPI";
import {
  callNovaPoshtaGetSettlementCountryRegionAPI,
  SettlementCountryRegionData,
} from "../api/novaPoshtaGetSettlementCountryRegionAPI";
import {
  callNovaPoshtaGetSettlementsAPI,
  SettlementData,
} from "../api/novaPoshtaGetSettlementsAPI";
import NovaPoshtaAreasDropdown from "../components/NovaPoshtaAreasDropdown";
import NovaPoshtaSettlementCountryRegionDropdown from "../components/NovaPoshtaSettlementCountryRegionDropdown";
import NovaPoshtaSettlementsDropdown from "../components/NovaPoshtaSettlementsDropdown";

const NovaPoshtaAreas = () => {
  const [areas, setAreas] = useState<SettlementAreaData[]>([]);
  const [selectedArea, setSelectedArea] = useState<string>("");
  const [settlementCountryRegions, setSettlementCountryRegions] = useState<
    SettlementCountryRegionData[]
  >([]);
  const [selectedSettlementCountryRegion, setSelectedSettlementCountryRegion] =
    useState<string>("");
  const [settlements, setSettlements] = useState<SettlementData[]>([]);

  useEffect(() => {
    if (selectedArea) {
      fetchSettlementCountryRegions(selectedArea);
    }
  }, [selectedArea]);

  useEffect(() => {
    if (selectedSettlementCountryRegion) {
      console.log(selectedSettlementCountryRegion, selectedArea);
      fetchSettlements(selectedSettlementCountryRegion, selectedArea);
    }
  }, [selectedSettlementCountryRegion, selectedArea]);

  const handleFetchAreas = async () => {
    try {
      const response = await callNovaPoshtaGetSettlementAreasAPI({});
      if (response.success) {
        setAreas(response.data);
      } else {
        console.error("Error fetching data:", response.errors);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSelectArea = (areaRef: string) => {
    setSelectedArea(areaRef);
  };

  const fetchSettlementCountryRegions = async (areaRef: string) => {
    try {
      const response = await callNovaPoshtaGetSettlementCountryRegionAPI({
        areaRef,
      });
      if (response.success) {
        setSettlementCountryRegions(response.data);
      } else {
        console.error(
          "Error fetching settlement country regions:",
          response.errors
        );
      }
    } catch (error) {
      console.error("Error fetching settlement country regions:", error);
    }
  };

  const handleSelectSettlementCountryRegion = (regionRef: string) => {
    setSelectedSettlementCountryRegion(regionRef);
  };

  const fetchSettlements = async (regionRef: string, areaRef: string) => {
    try {
      const response = await callNovaPoshtaGetSettlementsAPI({
        regionRef,
        areaRef,
      });
      if (response.success) {
        setSettlements(response.data);
      } else {
        console.error("Error fetching settlements:", response.errors);
      }
    } catch (error) {
      console.error("Error fetching settlements:", error);
    }
  };

  const handleSelectSettlement = (settlementRef: string) => {
    // Do something with the selected settlement
    console.log("Selected Settlement:", settlementRef);
  };

  return (
    <div>
      <h1>
        {selectedArea ? `Selected Area: ${selectedArea}` : "Nova Poshta Areas"}
      </h1>
      <button onClick={handleFetchAreas}>Fetch Areas</button>
      {areas.length > 0 ? (
        <NovaPoshtaAreasDropdown
          areas={areas}
          onSelectArea={handleSelectArea}
        />
      ) : (
        <p>Click the button to fetch areas.</p>
      )}

      {settlementCountryRegions.length > 0 ? (
        <NovaPoshtaSettlementCountryRegionDropdown
          settlementCountryRegions={settlementCountryRegions}
          onSelectSettlementCountryRegion={handleSelectSettlementCountryRegion}
        />
      ) : (
        <p>Select an area to fetch settlement country regions.</p>
      )}

      {settlements.length > 0 ? (
        <NovaPoshtaSettlementsDropdown
          settlements={settlements}
          onSelectSettlement={handleSelectSettlement}
        />
      ) : (
        <p>Select a settlement country region to fetch settlements.</p>
      )}
    </div>
  );
};

export default NovaPoshtaAreas;

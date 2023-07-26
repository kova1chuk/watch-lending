import { useState } from "react";
import NovaPoshtaAreasDropdown from "../components/NovaPoshtaAreasDropdown";
import NovaPoshtaSettlementCountryRegionDropdown from "../components/NovaPoshtaSettlementCountryRegionDropdown";
import NovaPoshtaSettlementsDropdown from "../components/NovaPoshtaSettlementsDropdown";
import { useAreasContainer } from "../containers/AreasContainer";
import { useCountryRegionContainer } from "../containers/CountryRegionContainer";
import { useSettlementsContainer } from "../containers/SettlementsContainer";

interface NovaPoshtaAreasContainerProps {
  onSettlementSelected: (settlementRef: string) => void;
}

const NovaPoshtaAreasContainer: React.FC<NovaPoshtaAreasContainerProps> = ({
  onSettlementSelected,
}) => {
  const [selectedArea, setSelectedArea] = useState<string>("");
  const [selectedSettlementCountryRegion, setSelectedSettlementCountryRegion] =
    useState<string>("");

  const {
    areas,
    loading: areasLoading,
    error: areasError,
  } = useAreasContainer();
  const {
    countryRegions,
    loading: countryRegionsLoading,
    error: countryRegionsError,
  } = useCountryRegionContainer(selectedArea);
  const {
    settlements,
    loading: settlementsLoading,
    error: settlementsError,
  } = useSettlementsContainer(selectedSettlementCountryRegion, selectedArea);

  const handleSelectArea = (areaRef: string) => {
    setSelectedArea(areaRef);
  };

  const handleSelectSettlementCountryRegion = (regionRef: string) => {
    setSelectedSettlementCountryRegion(regionRef);
  };

  const handleSelectSettlement = (settlementRef: string) => {
    // Call the external callback function
    onSettlementSelected(settlementRef);
  };

  const renderContent = () => {
    if (areasLoading) {
      return <p>Loading areas...</p>;
    }

    if (areasError) {
      return <p>Error fetching areas: {areasError}</p>;
    }

    if (areas.length === 0) {
      return <p>Click the button to fetch areas.</p>;
    }

    if (countryRegionsLoading) {
      return <p>Loading country regions...</p>;
    }

    if (countryRegionsError) {
      return <p>Error fetching country regions: {countryRegionsError}</p>;
    }

    if (countryRegions.length === 0) {
      return <p>Select an area to fetch settlement country regions.</p>;
    }

    if (settlementsLoading) {
      return <p>Loading settlements...</p>;
    }

    if (settlementsError) {
      return <p>Error fetching settlements: {settlementsError}</p>;
    }

    if (settlements.length === 0) {
      return <p>Select a settlement country region to fetch settlements.</p>;
    }

    return (
      <>
        <NovaPoshtaAreasDropdown
          areas={areas}
          onSelectArea={handleSelectArea}
        />
        <NovaPoshtaSettlementCountryRegionDropdown
          settlementCountryRegions={countryRegions}
          onSelectSettlementCountryRegion={handleSelectSettlementCountryRegion}
        />
        <NovaPoshtaSettlementsDropdown
          settlements={settlements}
          onSelectSettlement={handleSelectSettlement}
        />
      </>
    );
  };

  return (
    <div>
      <h1>
        {selectedArea ? `Selected Area: ${selectedArea}` : "Nova Poshta Areas"}
      </h1>
      <button onClick={handleFetchAreas}>Fetch Areas</button>
      {renderContent()}
    </div>
  );
};

export default NovaPoshtaAreasContainer;

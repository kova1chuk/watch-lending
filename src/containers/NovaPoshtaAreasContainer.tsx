import { useState } from "react";
import NovaPoshtaAreasDropdown from "../components/NovaPoshtaAreasDropdown";
import NovaPoshtaSettlementCountryRegionDropdown from "../components/NovaPoshtaSettlementCountryRegionDropdown";
import NovaPoshtaSettlementsDropdown from "../components/NovaPoshtaSettlementsDropdown";
import { useAreasContainer } from "@/hooks/api/AreasContainer";
import { useCountryRegionContainer } from "@/hooks/api/CountryRegionContainer";
import { useSettlementsContainer } from "@/hooks/api/SettlementsContainer";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button/Button";
// import Grid from "@mui/material/Grid/Grid";

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
    // onSettlementSelected(settlementRef);
  };

  // const handleFetchAreas = () => {
  //   fetchAreas();
  // };

  const renderContent = () => {
    const render = [];

    // TODO: setup errors
    //========================================================
    if (areasLoading) {
      render.push(<p>Loading areas...</p>);
    }

    if (areasError) {
      render.push(<p>Error fetching areas: {areasError}</p>);
    }

    if (areas.length === 0) {
      render.push(<p>Click the button to fetch areas.</p>);
    }
    //========================================================
    if (countryRegionsLoading) {
      render.push(<p>Loading country regions...</p>);
    }

    if (countryRegionsError) {
      render.push(<p>Error fetching country regions: {countryRegionsError}</p>);
    }

    if (countryRegions.length === 0) {
      render.push(<p>Select an area to fetch settlement country regions.</p>);
    }

    if (settlementsLoading) {
      render.push(<p>Loading settlements...</p>);
    }

    if (settlementsError) {
      render.push(<p>Error fetching settlements: {settlementsError}</p>);
    }

    if (settlements.length === 0) {
      render.push(
        <p>Select a settlement country region to fetch settlements.</p>
      );
    }

    return (
      <>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <NovaPoshtaAreasDropdown
              areas={areas}
              onSelectArea={handleSelectArea}
            />
          </Grid>
          <Grid item xs={12}>
            <NovaPoshtaSettlementCountryRegionDropdown
              settlementCountryRegions={countryRegions}
              onSelectSettlementCountryRegion={
                handleSelectSettlementCountryRegion
              }
            />
          </Grid>
          <Grid item xs={12}>
            <NovaPoshtaSettlementsDropdown
              settlements={settlements}
              onSelectSettlement={handleSelectSettlement}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => console.log("submit")}
            >
              Click Me
            </Button>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <div>
      <Typography variant="h1" fontSize={30} style={{ marginBottom: "20px" }}>
        {selectedArea ? `Selected Area: ${selectedArea}` : "Nova Poshta Areas"}
      </Typography>
      {renderContent()}
    </div>
  );
};

export default NovaPoshtaAreasContainer;

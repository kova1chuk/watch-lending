import { useState } from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useAreasContainer } from "@/hooks/api/AreasContainer";
import { useCountryRegionContainer } from "@/hooks/api/CountryRegionContainer";
import { useSettlementsContainer } from "@/hooks/api/SettlementsContainer";
import { useStreetsContainer } from "@/hooks/api/useStreetsContainer";
import { useCitiesContainer } from "@/hooks/api/useCitiesContainer";

import NovaPoshtaAreasDropdown from "@/components/NovaPoshtaAreas/NovaPoshtaAreasDropdown";
import NovaPoshtaCitiesDropdown from "@/components/NovaPoshtaAreas/NovaPoshtaCitiesDropdown";
import NovaPoshtaSettlementCountryRegionDropdown from "@/components/NovaPoshtaAreas/NovaPoshtaSettlementCountryRegionDropdown";
import NovaPoshtaSettlementsDropdown from "@/components/NovaPoshtaAreas/NovaPoshtaSettlementsDropdown";
import NovaPoshtaStreetsDropdown from "@/components/NovaPoshtaAreas/NovaPoshtaStreetsDropdown";
import NovaPoshtaWarehousesDropdown from "@/components/NovaPoshtaAreas/NovaPoshtaWarehousesDropdown";

interface NovaPoshtaAreasContainerProps {
  onSettlementSelected: (settlementRef: string) => void;
}

const NovaPoshtaAreasContainer: React.FC<NovaPoshtaAreasContainerProps> = ({
  onSettlementSelected,
}) => {
  const [selectedArea, setSelectedArea] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedSettlementCountryRegion, setSelectedSettlementCountryRegion] =
    useState<string | null>(null);
  const [selectedSettlementRegion, setSelectedSettlementRegion] =
    useState<string>("");
  const [selectedStreet, setSelectedStreet] = useState<string | null>(null); // New state for selected street
  const [selectedWarehouse, setSelectedWarehouse] = useState<string | null>(
    null
  ); // New state for selected warehouse

  const {
    areas,
    loading: areasLoading,
    error: areasError,
  } = useAreasContainer();
  const {
    cities,
    loading: citiesLoading,
    error: citiesError,
  } = useCitiesContainer();
  const {
    countryRegions,
    loading: countryRegionsLoading,
    error: countryRegionsError,
  } = useCountryRegionContainer(selectedArea);
  const {
    settlements,
    loading: settlementsLoading,
    error: settlementsError,
  } = useSettlementsContainer(
    selectedSettlementCountryRegion || "",
    selectedArea
  );
  const {
    streets,
    loading: streetsLoading,
    error: streetsError,
  } = useStreetsContainer(selectedCity, ""); // Fetch streets based on the selected cityRef and searchQuery

  const handleSelectArea = (areaRef: string) => {
    setSelectedArea(areaRef);
    setSelectedStreet(null); // Reset selected street when selecting a new area
    setSelectedWarehouse(null); // Reset selected warehouse when selecting a new area
  };

  const handleSelectCity = (cityRef: string) => {
    setSelectedCity(cityRef);
  };

  const handleSelectSettlementCountryRegion = (regionRef: string) => {
    setSelectedSettlementCountryRegion(regionRef);
  };

  const handleSelectSettlement = (settlementRef: string) => {
    console.log(settlementRef);
    setSelectedSettlementRegion(settlementRef);
  };
  const handleSelectStreet = (streetRef: string) => {
    setSelectedStreet(streetRef);
  };
  const handleSelectWarehouse = (warehouseRef: string) => {
    setSelectedWarehouse(warehouseRef);
  };

  const onSubmit = () => {
    const orderDetails = {
      delivery: "novaposhta",
      city: selectedCity, // Update city with the selected city
      settlementsRegion: selectedSettlementRegion, // Update settlementsRegion with the selected settlement region
      street: selectedStreet, // Add the selected street to the orderDetails object
      warehouse: selectedWarehouse, // Add the selected warehouse to the orderDetails object
      product: "Smartphone",
      seller: "John's Electronics",
      price: "$500",
    };
    const webhookUrl = "http://localhost:3001/order"; // Replace with the public URL provided by ngrok

    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Order details sent to Telegram bot:", data);
      })
      .catch((error) => {
        console.error("Error sending order details:", error);
      });
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
            <NovaPoshtaCitiesDropdown
              cities={cities} // Pass the cities data here
              onSelectCity={handleSelectCity} // Pass the city selection handler
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
            <NovaPoshtaStreetsDropdown
              // cityRef={selectedSettlementRegion || ""}
              // searchQuery=""
              streets={streets}
              onSelectStreet={handleSelectStreet}
            />
          </Grid>
          <Grid item xs={12}>
            <NovaPoshtaWarehousesDropdown
              settlementRef={
                selectedSettlementCountryRegion || selectedCity || ""
              }
              onSelectWarehouse={handleSelectWarehouse}
            />
          </Grid>{" "}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={onSubmit}>
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

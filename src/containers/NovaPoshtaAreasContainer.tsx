import React, { useState } from "react";
import { Row, Col, Button, Typography } from "antd";

import { useAreasContainer } from "@/hooks/api/AreasContainer";
import { useCountryRegionContainer } from "@/hooks/api/CountryRegionContainer";
import { useSettlementsContainer } from "@/hooks/api/SettlementsContainer";
import { useCitiesContainer } from "@/hooks/api/useCitiesContainer";
import { useStreetsContainer } from "@/hooks/api/useStreetsContainer";

import NovaPoshtaAreasDropdown from "@/components/NovaPoshtaAreas/NovaPoshtaAreasDropdown";
import NovaPoshtaCitiesDropdown from "@/components/NovaPoshtaAreas/NovaPoshtaCitiesDropdown";
import NovaPoshtaSettlementCountryRegionDropdown from "@/components/NovaPoshtaAreas/NovaPoshtaSettlementCountryRegionDropdown";
import NovaPoshtaSettlementsDropdown from "@/components/NovaPoshtaAreas/NovaPoshtaSettlementsDropdown";
import NovaPoshtaStreetsDropdown from "@/components/NovaPoshtaAreas/NovaPoshtaStreetsDropdown";
import NovaPoshtaWarehousesDropdown from "@/components/NovaPoshtaAreas/NovaPoshtaWarehousesDropdown";

const { Title } = Typography;

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
  const [selectedStreet, setSelectedStreet] = useState<string | null>(null);
  const [selectedWarehouse, setSelectedWarehouse] = useState<string | null>(
    null
  );

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
  } = useStreetsContainer(selectedCity, "");

  const handleSelectArea = (areaRef: string) => {
    setSelectedArea(areaRef);
    setSelectedStreet(null);
    setSelectedWarehouse(null);
  };

  const handleSelectCity = (cityRef: string) => {
    setSelectedCity(cityRef);
  };

  const handleSelectSettlementCountryRegion = (regionRef: string) => {
    setSelectedSettlementCountryRegion(regionRef);
  };

  const handleSelectSettlement = (settlementRef: string) => {
    setSelectedSettlementRegion(settlementRef);
  };

  const handleSelectStreet = (streetRef: string) => {
    setSelectedStreet(streetRef);
  };

  const handleSelectWarehouse = (warehouseRef: string) => {
    setSelectedWarehouse(warehouseRef);
  };

  const onSubmit = async () => {
    const orderDetails = {
      delivery: "novaposhta",
      city: selectedCity,
      settlementsRegion: selectedSettlementRegion,
      street: selectedStreet,
      warehouse: selectedWarehouse,
      product: "Smartphone",
      seller: "John's Electronics",
      price: "$500",
    };

    const webhookUrl = "http://localhost:3001/order"; // Replace with your webhook URL

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });

      const data = await response.json();
      console.log("Order details sent to Telegram bot:", data);
    } catch (error) {
      console.error("Error sending order details:", error);
    }
  };

  const renderContent = () => {
    // if (areasLoading || countryRegionsLoading || settlementsLoading) {
    //   return <p>Loading...</p>;
    // }

    // if (areasError || countryRegionsError || settlementsError) {
    //   return <p>Error loading data.</p>;
    // }

    return (
      <>
        <NovaPoshtaAreasDropdown
          areas={areas}
          onSelectArea={handleSelectArea}
        />
        <NovaPoshtaCitiesDropdown
          cities={cities}
          onSelectCity={handleSelectCity}
        />
        <NovaPoshtaSettlementCountryRegionDropdown
        // settlementCountryRegions={countryRegions}
        // onSelectSettlementCountryRegion={handleSelectSettlementCountryRegion}
        />
        <NovaPoshtaSettlementsDropdown
          settlements={settlements}
          onSelectSettlement={handleSelectSettlement}
        />
        <NovaPoshtaStreetsDropdown
          streets={streets}
          onSelectStreet={handleSelectStreet}
        />
        <NovaPoshtaWarehousesDropdown
          settlementRef={selectedSettlementCountryRegion || selectedCity || ""}
          onSelectWarehouse={handleSelectWarehouse}
        />
      </>
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Title level={3}>
        {selectedArea ? `Selected Area: ${selectedArea}` : "Nova Poshta Areas"}
      </Title>
      <Row justify="center">
        <Col xs={24} sm={20} md={18} lg={16} xl={14}>
          {renderContent()}
          <Button type="primary" onClick={onSubmit}>
            Click Me
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default NovaPoshtaAreasContainer;

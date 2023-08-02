import React from "react";
import { AutoComplete, Input } from "antd";
import { SettlementCountryRegionData } from "@/api/novaPoshtaGetSettlementCountryRegionAPI";

interface Props {
  settlementCountryRegions: SettlementCountryRegionData[];
  onSelectSettlementCountryRegion: (regionRef: string) => void;
}

const NovaPoshtaSettlementCountryRegionDropdown: React.FC<Props> = ({
  settlementCountryRegions,
  onSelectSettlementCountryRegion,
}) => {
  const [selectedRegion, setSelectedRegion] = React.useState("");
  const [focusedRegion, setFocusedRegion] = React.useState("");

  const handleChange = (value: SettlementCountryRegionData | null) => {
    setSelectedRegion(value ? value.Ref : "");
  };

  const handleBlur = () => {
    setFocusedRegion(selectedRegion);
    onSelectSettlementCountryRegion(selectedRegion);
  };

  const renderTitle = (title: string) => <span>{title}</span>;

  const renderItem = (region: SettlementCountryRegionData) => ({
    value: region.Description,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {region.Description}
      </div>
    ),
  });

  const options = [
    {
      label: renderTitle("Libraries"),
      options: [settlementCountryRegions.map((region) => renderItem(region))],
    },
  ];

  return (
    <AutoComplete
      options={options}
      onChange={handleChange}
      onBlur={handleBlur}
      onSearch={(value) => console.log("first", value)}
      style={{ width: "100%", margin: "1.2rem" }}
    >
      <Input.Search size="large" placeholder="Select a region" />
    </AutoComplete>
  );
};

export default NovaPoshtaSettlementCountryRegionDropdown;

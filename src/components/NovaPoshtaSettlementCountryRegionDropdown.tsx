import React from "react";

interface SettlementCountryRegionData {
  Ref: string;
  AreasCenter: string;
  Description: string;
  RegionType: string;
}

interface NovaPoshtaSettlementCountryRegionDropdownProps {
  settlementCountryRegions: SettlementCountryRegionData[];
  onSelectSettlementCountryRegion: (regionRef: string) => void;
}

const NovaPoshtaSettlementCountryRegionDropdown: React.FC<
  NovaPoshtaSettlementCountryRegionDropdownProps
> = ({ settlementCountryRegions, onSelectSettlementCountryRegion }) => {
  return (
    <div>
      <h2>Settlement Country Regions:</h2>
      <select onChange={(e) => onSelectSettlementCountryRegion(e.target.value)}>
        <option value="">Select a region</option>
        {settlementCountryRegions.map((region) => (
          <option key={region.Ref} value={region.Ref}>
            {region.Description}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NovaPoshtaSettlementCountryRegionDropdown;

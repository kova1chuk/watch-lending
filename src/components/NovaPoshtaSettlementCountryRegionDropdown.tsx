import React, { SyntheticEvent } from "react";
import { FormControl, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
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

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: SettlementCountryRegionData | null
  ) => {
    setSelectedRegion(value ? value.Ref : "");
  };

  const handleBlur = () => {
    setFocusedRegion(selectedRegion);
    onSelectSettlementCountryRegion(selectedRegion);
  };

  return (
    <FormControl fullWidth variant="outlined">
      <Autocomplete
        disablePortal
        id="region-select"
        options={settlementCountryRegions}
        getOptionLabel={(region) => region.Description}
        value={
          settlementCountryRegions.find(
            (region) => region.Ref === focusedRegion
          ) || null
        }
        onChange={handleChange}
        onBlur={handleBlur}
        renderInput={(params) => (
          <TextField {...params} label="Select a region" />
        )}
        sx={{ width: 300 }} // Additional styling for the Autocomplete component
      />
    </FormControl>
  );
};

export default NovaPoshtaSettlementCountryRegionDropdown;

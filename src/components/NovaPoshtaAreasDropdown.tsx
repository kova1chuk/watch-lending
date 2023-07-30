import { useState } from "react";
import { FormControl, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { SettlementAreaData } from "@/api/novaPoshtaGetAreasAPI";
import React from "react";

interface Props {
  areas: SettlementAreaData[];
  onSelectArea: (areaRef: string) => void;
}

const NovaPoshtaAreasDropdown: React.FC<Props> = ({ areas, onSelectArea }) => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [focusedArea, setFocusedArea] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<{}>,
    value: SettlementAreaData | null
  ) => {
    setSelectedArea(value ? value.Ref : null);
  };

  const handleBlur = () => {
    setFocusedArea(selectedArea);
    if (selectedArea) {
      onSelectArea(selectedArea);
    }
  };

  return (
    <FormControl fullWidth variant="outlined">
      <Autocomplete
        disablePortal
        id="area-select"
        options={areas}
        getOptionLabel={(area) => area.Description}
        value={areas.find((area) => area.Ref === focusedArea) || null}
        onChange={handleChange}
        onBlur={handleBlur}
        renderInput={(params) => <TextField {...params} label="Select Area" />}
        sx={{ width: 300 }} // Additional styling for the Autocomplete component
      />
    </FormControl>
  );
};

export default NovaPoshtaAreasDropdown;

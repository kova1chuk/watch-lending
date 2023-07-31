// NovaPoshtaCitiesDropdown.tsx

import { useState } from "react";
import { FormControl, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { CityData } from "@/api/novaPoshtaGetCitiesAPI";
import React from "react";

interface Props {
  cities: CityData[];
  onSelectCity: (cityRef: string) => void;
}

const NovaPoshtaCitiesDropdown: React.FC<Props> = ({
  cities,
  onSelectCity,
}) => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [focusedCity, setFocusedCity] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<{}>,
    value: CityData | null
  ) => {
    setSelectedCity(value ? value.Ref : null);
  };

  const handleBlur = () => {
    setFocusedCity(selectedCity);
    if (selectedCity) {
      onSelectCity(selectedCity);
    }
  };

  return (
    <FormControl fullWidth variant="outlined">
      <Autocomplete
        disablePortal
        id="city-select"
        options={cities}
        getOptionLabel={(city) => city.Description}
        value={cities.find((city) => city.Ref === focusedCity) || null}
        onChange={handleChange}
        onBlur={handleBlur}
        renderInput={(params) => <TextField {...params} label="Select City" />}
        sx={{ width: 300 }} // Additional styling for the Autocomplete component
      />
    </FormControl>
  );
};

export default NovaPoshtaCitiesDropdown;

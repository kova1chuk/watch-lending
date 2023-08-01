import React, { SyntheticEvent } from "react";
import { FormControl, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { SettlementData } from "@/api/novaPoshtaGetSettlementsAPI";

interface NovaPoshtaSettlementsDropdownProps {
  settlements: SettlementData[];
  onSelectSettlement: (settlementRef: string) => void;
}

const NovaPoshtaSettlementsDropdown: React.FC<
  NovaPoshtaSettlementsDropdownProps
> = ({ settlements, onSelectSettlement }) => {
  const [selectedSettlement, setSelectedSettlement] = React.useState<
    string | null
  >(null);

  const handleChange = (
    event: React.ChangeEvent<{}>,
    value: SettlementData | null
  ) => {
    setSelectedSettlement(value ? value.Ref : null);
  };

  const handleBlur = () => {
    if (selectedSettlement) {
      onSelectSettlement(selectedSettlement);
    }
  };

  return (
    <FormControl fullWidth variant="outlined">
      <Autocomplete
        disablePortal
        id="settlement-select"
        options={settlements}
        getOptionLabel={(settlement) => settlement.Description}
        value={
          settlements.find(
            (settlement) => settlement.Ref === selectedSettlement
          ) || null
        }
        onChange={handleChange}
        onBlur={handleBlur}
        renderInput={(params) => (
          <TextField {...params} label="Select a settlement" />
        )}
        sx={{ width: 300 }} // Additional styling for the Autocomplete component
      />
    </FormControl>
  );
};

export default NovaPoshtaSettlementsDropdown;

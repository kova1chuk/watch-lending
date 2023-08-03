import React from "react";
import { SettlementData } from "@/api/novaPoshtaGetSettlementsAPI";
import { AutoComplete, Input } from "antd";
import { NovaPostSearchSetelmentsAddress } from "@/api/novaPoshtaSearchSettlementsAPI";

interface NovaPoshtaSettlementsDropdownProps {
  settlements: NovaPostSearchSetelmentsAddress[] | undefined;
  onSelectSettlement: (settlementRef: string) => void;
  onSearch: (searchString: string) => void;
}

const NovaPoshtaSettlementsDropdown: React.FC<
  NovaPoshtaSettlementsDropdownProps
> = ({ settlements, onSelectSettlement, onSearch }) => {
  const [selectedSettlement, setSelectedSettlement] = React.useState<
    string | null
  >(null);

  const handleChange = (value: SettlementData | null) => {
    setSelectedSettlement(value ? value.Ref : null);
  };

  const handleBlur = () => {
    if (selectedSettlement) {
      onSelectSettlement(selectedSettlement);
    }
  };

  const renderTitle = (title: string) => <span>{title}</span>;
  const renderItem = (settlement: NovaPostSearchSetelmentsAddress) => ({
    value: settlement.Present,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {settlement.Present}
      </div>
    ),
  });

  const options = [
    {
      label: renderTitle("Населений пункт"),
      options: settlements
        ? settlements.map((region) => renderItem(region))
        : [],
    },
  ];

  return (
    <AutoComplete
      options={options}
      onChange={handleChange}
      onBlur={handleBlur}
      onSearch={onSearch}
      style={{ width: "100%" }}
    >
      <Input.Search size="large" placeholder="Населений пункт" />
    </AutoComplete>
    // <FormControl fullWidth variant="outlined">
    //   <Autocomplete
    //     disablePortal
    //     id="settlement-select"
    //     options={settlements}
    //     getOptionLabel={(settlement) => settlement.Description}
    //     value={
    //       settlements.find(
    //         (settlement) => settlement.Ref === selectedSettlement
    //       ) || null
    //     }
    //     onChange={handleChange}
    //     onBlur={handleBlur}
    //     renderInput={(params) => (
    //       <TextField {...params} label="Select a settlement" />
    //     )}
    //     sx={{ width: 300 }} // Additional styling for the Autocomplete component
    //   />
    // </FormControl>
  );
};

export default NovaPoshtaSettlementsDropdown;

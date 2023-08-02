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

// import React from "react";
// import { UserOutlined } from "@ant-design/icons";
// import { AutoComplete, Input } from "antd";

// const renderTitle = (title: string) => (
//   <span>
//     {title}
//     {/* <a
//       style={{ float: "right" }}
//       href="https://www.google.com/search?q=antd"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       more
//     </a> */}
//   </span>
// );

// const renderItem = (title: string, count: number) => ({
//   value: title,
//   label: (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//       }}
//     >
//       {title}
//       <span>
//         <UserOutlined /> {count}
//       </span>
//     </div>
//   ),
// });

// const options = [
//   {
//     label: renderTitle("Libraries"),
//     options: [
//       renderItem("AntDesign", 10000),
//       renderItem("AntDesign UI", 10600),
//     ],
//   },
//   {
//     label: renderTitle("Solutions"),
//     options: [
//       renderItem("AntDesign UI FAQ", 60100),
//       renderItem("AntDesign FAQ", 30010),
//     ],
//   },
//   {
//     label: renderTitle("Articles"),
//     options: [renderItem("AntDesign design language", 100000)],
//   },
// ];

// const NovaPoshtaSettlementCountryRegionDropdown: React.FC = () => (
//   <AutoComplete
//     // dropdownClassName="certain-category-search-dropdown"
//     // dropdownMatchSelectWidth={500}
//     style={{ width: 250 }}
//     options={options}
//   >
//     <Input.Search size="large" placeholder="Select a region" />
//   </AutoComplete>
// );

// export default NovaPoshtaSettlementCountryRegionDropdown;

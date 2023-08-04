// import { useState, useEffect } from "react";
// import { FormControl, TextField } from "@mui/material";
// import Autocomplete from "@mui/material/Autocomplete";
// import { WarehouseData } from "@/api/novaPoshtaGetWarehousesAPI";
// import React from "react";
// import { useWarehousesContainer } from "@/hooks/api/useWarehousesContainer"; // Import the new hook

// interface Props {
//   settlementRef: string;
//   onSelectWarehouse: (warehouseRef: string) => void;
// }

// const NovaPoshtaWarehousesDropdown: React.FC<Props> = ({
//   settlementRef,
//   onSelectWarehouse,
// }) => {
//   const [selectedWarehouse, setSelectedWarehouse] = useState<string | null>(
//     null
//   );
//   const [focusedWarehouse, setFocusedWarehouse] = useState<string | null>(null);

//   const {
//     warehouses,
//     loading: warehousesLoading,
//     error: warehousesError,
//   } = useWarehousesContainer(settlementRef); // Fetch warehouses based on the selected settlementRef

//   const handleChange = (
//     event: React.ChangeEvent<{}>,
//     value: WarehouseData | null
//   ) => {
//     setSelectedWarehouse(value ? value.Ref : null);
//   };

//   const handleBlur = () => {
//     setFocusedWarehouse(selectedWarehouse);
//     if (selectedWarehouse) {
//       onSelectWarehouse(selectedWarehouse);
//     }
//   };

//   return (
//     <FormControl fullWidth variant="outlined">
//       <Autocomplete
//         disablePortal
//         id="warehouse-select"
//         options={warehouses}
//         getOptionLabel={(warehouse) => warehouse.Description}
//         value={
//           warehouses.find((warehouse) => warehouse.Ref === focusedWarehouse) ||
//           null
//         }
//         onChange={handleChange}
//         onBlur={handleBlur}
//         renderInput={(params) => (
//           <TextField {...params} label="Select Warehouse" />
//         )}
//         sx={{ width: 300 }} // Additional styling for the Autocomplete component
//       />
//     </FormControl>
//   );
// };

// export default NovaPoshtaWarehousesDropdown;

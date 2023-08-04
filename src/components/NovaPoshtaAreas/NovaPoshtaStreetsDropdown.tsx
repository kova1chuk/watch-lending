// import { useState, useEffect } from "react";
// import { FormControl, TextField } from "@mui/material";
// import Autocomplete from "@mui/material/Autocomplete";
// import { StreetData } from "@/api/novaPoshtaGetStreetsAPI";
// import React from "react";
// import { useStreetsContainer } from "@/hooks/api/useStreetsContainer"; // Import the new hook

// interface Props {
//   streets: StreetData[];
//   //   searchQuery: string;
//   onSelectStreet: (streetRef: string) => void;
// }

// const NovaPoshtaStreetsDropdown: React.FC<Props> = ({
//   //   cityRef,
//   streets,
//   //   searchQuery,
//   onSelectStreet,
// }) => {
//   const [selectedStreet, setSelectedStreet] = useState<string | null>(null);
//   const [focusedStreet, setFocusedStreet] = useState<string | null>(null);

//   //   const {
//   //     streets,
//   //     loading: streetsLoading,
//   //     error: streetsError,
//   //   } = useStreetsContainer(cityRef, searchQuery); // Fetch streets based on the selected cityRef and searchQuery

//   const handleChange = (
//     event: React.ChangeEvent<{}>,
//     value: StreetData | null
//   ) => {
//     setSelectedStreet(value ? value.Ref : null);
//   };

//   const handleBlur = () => {
//     setFocusedStreet(selectedStreet);
//     if (selectedStreet) {
//       onSelectStreet(selectedStreet);
//     }
//   };

//   return (
//     <FormControl fullWidth variant="outlined">
//       <Autocomplete
//         disablePortal
//         id="street-select"
//         options={streets}
//         getOptionLabel={(street) => street.Description}
//         value={streets.find((street) => street.Ref === focusedStreet) || null}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         renderInput={(params) => (
//           <TextField {...params} label="Select Street" />
//         )}
//         sx={{ width: 300 }} // Additional styling for the Autocomplete component
//       />
//     </FormControl>
//   );
// };

// export default NovaPoshtaStreetsDropdown;

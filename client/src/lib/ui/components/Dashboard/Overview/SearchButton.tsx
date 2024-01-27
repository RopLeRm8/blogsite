// import {
//   Box,
//   Fade,
//   IconButton,
//   TextField,
//   Typography,
//   Grid,
//   useTheme,
// } from "@mui/material";
// import { useSearchOptions } from "../../../../hooks/useSearchOptions";
// import { Autocomplete } from "@mui/material";
// import IconsHandler from "../../../../hooks/IconsHandler";
// import { useState, useCallback } from "react";

// export default function SearchButton() {
//   const { searchIcon: SearchIcon } = IconsHandler();
//   const options = useSearchOptions();
//   const theme = useTheme();
//   const [isOpen, setIsOpen] = useState(false);
//   const handleOpenSearch = useCallback(() => {
//     setIsOpen((prev) => !prev);
//   }, []);

//   return (
//     <Box sx={{ display: "flex", alignItems: "center", gap: ".2rem" }}>
//       {!isOpen ? (
//         <IconButton onClick={handleOpenSearch}>
//           <SearchIcon />
//         </IconButton>
//       ) : null}
//       {isOpen && (
//         <Fade in={true}>
//           <Autocomplete
//             autoFocus
//             size="small"
//             options={options}
//             getOptionLabel={(option) => option.value + " " + option.label}
//             onBlur={handleOpenSearch}
//             sx={{
//               minWidth: "13rem",
//               background: theme.palette.background.default,
//             }}
//             renderInput={(params) => (
//               <TextField {...params} placeholder="Search..." />
//             )}
//             renderOption={(props, option) => (
//               <Box component="li" {...props}>
//                 <Grid
//                   container
//                   alignItems="center"
//                   justifyContent="space-between"
//                 >
//                   <Grid item>
//                     <Box sx={{ display: "flex", alignItems: "center" }}>
//                       <img
//                         src={option.image}
//                         alt={option.label}
//                         style={{
//                           maxWidth: "20%",
//                           userSelect: "none",
//                         }}
//                       />
//                       <Typography variant="body2" sx={{ ml: 2 }}>
//                         {option.value} {option.label}
//                       </Typography>
//                     </Box>
//                   </Grid>
//                 </Grid>
//               </Box>
//             )}
//           />
//         </Fade>
//       )}
//     </Box>
//   );
// }

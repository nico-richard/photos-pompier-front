// import React, { useState } from "react";
// import { searchPhotos } from "../../src/api";
// import {
//   Box,
//   Button,
//   Container,
//   Grid,
//   Stack,
//   TextField,
//   Typography,
// } from "@mui/material";
// import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

// export const SearchPhotos: React.FC = () => {
//   const [query, setQuery] = useState<string>("");
//   const [searchResults, setSearchResults] = useState<
//     { marque: string; chassis: string; annee: number }[]
//   >([]);

//   const handleInputChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ): void => {
//     setQuery(event.target.value);
//   };

//   const handleSearch = async (): Promise<void> => {
//     try {
//       const results = await searchPhotos(query);
//       setSearchResults(results);
//     } catch (error) {
//       console.error("Erreur lors de la recherche de photos", error);
//     }
//   };

//   return (
//     <Container sx={{ width: "50%" }}>
//       <Typography variant="h4" m={3}>
//         Rechercher des photos
//       </Typography>
//       <Stack spacing={2}>
//         <TextField
//           type="text"
//           placeholder="Entrez un critère de recherche"
//           value={query}
//           onChange={handleInputChange}
//         />
//         <Button variant="contained" onClick={handleSearch}>
//           Rechercher
//         </Button>
//       </Stack>
//       <ul>
//         {searchResults.map((result, index) => (
//           <li key={index}>
//             Marque : {result.marque}, chassis: {result.chassis}, annee:{" "}
//             {result.annee}
//           </li>
//         ))}
//       </ul>
//     </Container>
//   );
// };

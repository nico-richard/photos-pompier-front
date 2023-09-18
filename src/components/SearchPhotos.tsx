import React, { useState } from "react";
import { searchPhotos } from "../api";
import { Typography } from "@mui/material";

const SearchPhotos: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<
    { marque: string; chassis: string; annee: number }[]
  >([]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setQuery(event.target.value);
  };

  const handleSearch = async (): Promise<void> => {
    try {
      const results = await searchPhotos(query);
      setSearchResults(results);
    } catch (error) {
      console.error("Erreur lors de la recherche de photos", error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Rechercher des photos</Typography>
      <input
        type="text"
        placeholder="Entrez un critère de recherche"
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Rechercher</button>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            Marque : {result.marque}, chassis: {result.chassis}, annee:{" "}
            {result.annee}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPhotos;

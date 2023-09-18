import React, { useState } from "react";
import { addCategory } from "../../api";
import {
  Button,
  Container,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Category } from "../../interfaces/Category";

export const AddCategoryForm: React.FC = () => {
  const [categoryData, setCategoryData] = useState<Category>({
    name: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    setCategoryData({ name: value });
  };

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    try {
      await addCategory(categoryData);
      alert("Nouvelle photo ajoutée avec succès");
      setCategoryData({
        name: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout de la photo", error);
    }
  };

  return (
    <Container sx={{ width: "50%" }}>
      <Typography variant="h4" m={3}>
        Ajouter une nouvelle catégorie
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            type="text"
            label="Nom"
            name="name"
            value={categoryData.name}
            onChange={handleInputChange}
            required
          />
          <Button variant="contained" type="submit">
            Ajouter
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

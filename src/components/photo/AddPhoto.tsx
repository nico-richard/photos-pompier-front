import React, { useState } from "react";
import { addPhoto } from "../../api";
import {
  Button,
  Container,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Photo } from "../../interfaces/Photo";

export const AddPhoto: React.FC = () => {
  const [photoData, setPhotoData] = useState<Photo>({
    marque: "",
    chassis: "",
    annee: 0,
    image: "",
    timestamp: new Date().toUTCString(),
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    if (name === "image" && event.target.files) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target) {
            const imageData = e.target.result;
            if (imageData) {
              setPhotoData({ ...photoData, [name]: imageData });
            }
          }
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    } else {
      setPhotoData({ ...photoData, [name]: value });
    }
  };

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    try {
      await addPhoto(photoData);
      alert("Nouvelle photo ajoutée avec succès");
      setPhotoData({
        marque: "",
        chassis: "",
        annee: 0,
        image: "",
        timestamp: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout de la photo", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" m={3}>
        Ajouter une nouvelle photo
      </Typography>
      <FormControl onSubmit={handleSubmit} sx={{ width: "50%" }}>
        <Stack spacing={2}>
          <TextField
            type="text"
            label="Marque"
            name="marque"
            value={photoData.marque}
            onChange={handleInputChange}
            required
          />
          <TextField
            type="text"
            label="Chassis"
            name="chassis"
            value={photoData.chassis}
            onChange={handleInputChange}
            required
          />
          <TextField
            type="number"
            label="Année"
            name="annee"
            value={photoData.annee}
            onChange={handleInputChange}
            required
          />
          <TextField
            type="file"
            label="Image"
            name="image"
            onChange={handleInputChange}
            required
          />
          <Button variant="contained" type="submit">
            Ajouter
          </Button>
        </Stack>
      </FormControl>
    </Container>
  );
};

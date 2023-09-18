import React, { useState } from "react";
import { addPhoto } from "../api";
import { Button, TextField, Typography } from "@mui/material";
import { Input } from "@mui/icons-material";

interface PhotoData {
  marque: string;
  chassis: string;
  annee: number;
  image: string | ArrayBuffer;
}

const AddPhotoForm: React.FC = () => {
  const [photoData, setPhotoData] = useState<PhotoData>({
    marque: "",
    chassis: "",
    annee: 0,
    image: "",
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
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout de la photo", error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Ajouter une nouvelle photo</Typography>
      <form onSubmit={handleSubmit}>
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
          name="chassis"
          value={photoData.chassis}
          onChange={handleInputChange}
          required
        />
        <TextField
          type="number"
          name="annee"
          value={photoData.annee}
          onChange={handleInputChange}
          required
        />
        <TextField
          type="file"
          name="image"
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Ajouter</Button>
      </form>
    </div>
  );
};

export default AddPhotoForm;

import React, { useState, useEffect } from "react";
import { getPhotos } from "../../api";
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Photo } from "../../interfaces/Photo";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import CropFreeIcon from "@mui/icons-material/CropFree";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const PhotoList: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const navigation = useNavigate();

  useEffect(() => {
    // Charger la liste des photos depuis l'API Flask lors du montage du composant
    const fetchPhotos = async () => {
      try {
        const data = await getPhotos();
        setPhotos(data);
      } catch (error) {
        console.error("Erreur lors du chargement des photos", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <Container>
      <Typography variant="h4" m={3}>
        Liste des photos
      </Typography>
      <Button
        onClick={() => {
          navigation("new");
        }}
      >
        Ajouter
      </Button>
      <Container>
        <List>
          {photos.map((photo) => (
            <ListItem key={photo.id}>
              <Stack direction="row" spacing={2}>
                <ListItemIcon>
                  <DirectionsBusIcon />
                </ListItemIcon>
                <ListItemText primary={photo.marque} />
                <ListItemIcon>
                  <CropFreeIcon />
                </ListItemIcon>
                <ListItemText primary={photo.chassis} />
                <ListItemIcon>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary={photo.annee} />
                {/* <img
              src={`data:image/jpg;base64,${photo.image}`}
              alt=""
              style={{ width: "300px" }}
            /> */}
                <p>Date de création : {photo.timestamp}</p>
              </Stack>
            </ListItem>
          ))}
        </List>
      </Container>
    </Container>
  );
};

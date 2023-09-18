import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../api";
import { Category } from "../../interfaces/Category";
import CategoryIcon from "@mui/icons-material/Category";

export const CategoriesList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigation = useNavigate();

  useEffect(() => {
    // Charger la liste des photos depuis l'API Flask lors du montage du composant
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Erreur lors du chargement des photos", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Container>
      <Typography variant="h4" m={3}>
        Liste des catégories
      </Typography>
      <Button
        onClick={() => {
          navigation("new");
        }}
        variant="contained"
      >
        Ajouter
      </Button>
      <Container>
        <List>
          {categories.map((category) => {
            return (
              <ListItem>
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary={category.name}></ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </Container>
  );
};

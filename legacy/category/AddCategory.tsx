// import React, { useState } from "react";
// import { addCategory } from "../../api";
// import {
//   Button,
//   Container,
//   Stack,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { Category } from "../../interfaces/Category";
// import { useNavigate } from "react-router-dom";

// export const AddCategoryForm: React.FC = () => {
//   const [categoryData, setCategoryData] = useState<Category>({
//     name: "",
//     description: "",
//   });
//   const navigate = useNavigate();

//   const handleInputChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ): void => {
//     const { name, value } = event.target;
//     setCategoryData({ ...categoryData, [name]: value });
//   };

//   const handleSubmit = async (event: React.FormEvent): Promise<void> => {
//     event.preventDefault();

//     try {
//       await addCategory(categoryData);
//       alert("Nouvelle photo ajoutée avec succès");
//       setCategoryData({
//         name: "",
//         description: "",
//       });
//       navigate('category')
//     } catch (error) {
//       console.error("Erreur lors de l'ajout de la photo", error);
//     }
//   };

//   return (
//     <Container sx={{ width: "50%" }}>
//       <Typography variant="h4" m={3}>
//         Ajouter une nouvelle catégorie
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Stack spacing={2}>
//           <TextField
//             type="text"
//             label="Nom"
//             name="name"
//             value={categoryData.name}
//             onChange={handleInputChange}
//             required
//           />
//           <TextField
//             type="text"
//             label="Description"
//             name="description"
//             value={categoryData.description}
//             onChange={handleInputChange}
//             required
//           />
//           <Button variant="contained" type="submit">
//             Ajouter
//           </Button>
//         </Stack>
//       </form>
//     </Container>
//   );
// };

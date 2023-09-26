// import React, { useEffect, useState } from "react";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import { getCategories } from "../../api";
// import { Category } from "../../interfaces/Category";
// import { useNavigate } from "react-router-dom";

// export const CategoryTable: React.FC = () => {
//   const [data, setData] = useState<Category[]>([]);

//   useEffect(() => {
//     // Charger la liste des photos depuis l'API Flask lors du montage du composant
//     const fetchPhotos = async () => {
//       try {
//         const data = await getCategories();
//         setData(data);
//       } catch (error) {
//         console.error("Erreur lors du chargement des catégories", error);
//       }
//     };

//     fetchPhotos();
//   }, []);

//   const columns: GridColDef[] = [
//     { field: "id", headerName: "Id", width: 100, editable: true },
//     { field: "name", headerName: "Nom", width: 150, editable: true },
//   ];

//   // create editableData which is data with the property editable: true
//   const editableData = data.map((photo) => {
//     return { ...photo, editable: true };
//   });

//   return (
//       <DataGrid rows={editableData} columns={columns}></DataGrid>
//   );
// };

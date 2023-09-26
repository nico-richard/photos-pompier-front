// import React, { useEffect, useState } from "react";
// import { getPhotos } from "../../api";
// import { Photo } from "../../interfaces/Vehicle";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";

// export const PhotoTable: React.FC = () => {
//   const [data, setData] = useState<Photo[]>([]);

//   useEffect(() => {
//     // Charger la liste des photos depuis l'API Flask lors du montage du composant
//     const fetchPhotos = async () => {
//       try {
//         const data = await getPhotos();
//         setData(data);
//       } catch (error) {
//         console.error("Erreur lors du chargement des photos", error);
//       }
//     };

//     fetchPhotos();
//   }, []);

//   const columns: GridColDef[] = [
//     { field: "id", headerName: "Id", width: 100, editable: true },
//     { field: "marque", headerName: "Marque", width: 150, editable: true },
//     { field: "chassis", headerName: "Chassis", width: 150, editable: true },
//     { field: "annee", headerName: "Année", width: 150, editable: true },
//   ];

//   // create editableData which is data with the property editable: true
//   const editableData = data.map((photo) => {
//     return { ...photo, editable: true };
//   });

//   return (
//       <DataGrid rows={editableData} columns={columns}></DataGrid>
//   );
// };

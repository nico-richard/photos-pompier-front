import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getPhotos } from "../../api";
import { Photo } from "../../interfaces/Photo";

export const PhotoTable: React.FC = () => {
  const [data, setData] = useState<Photo[]>([]);

  useEffect(() => {
    // Charger la liste des photos depuis l'API Flask lors du montage du composant
    const fetchPhotos = async () => {
      try {
        const data = await getPhotos();
        setData(data);
      } catch (error) {
        console.error("Erreur lors du chargement des photos", error);
      }
    };

    fetchPhotos();
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Marque</StyledTableCell>
            <StyledTableCell align="right">Chassis</StyledTableCell>
            <StyledTableCell align="right">Année</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data.map((photo) => (
            <StyledTableRow>
              <StyledTableCell>{photo.id}</StyledTableCell>
              <StyledTableCell align="right">{photo.marque}</StyledTableCell>
              <StyledTableCell align="right">{photo.chassis}</StyledTableCell>
              <StyledTableCell align="right">{photo.annee}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

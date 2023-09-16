import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PhotoList from "./components/PhotoList";
import AddPhotoForm from "./components/AddPhotoForm";
import SearchPhotos from "./components/SearchPhotos";
import "./styles.sass";
import {
  IconButton,
  Typography,
  Button,
  Link,
  AppBar,
  Toolbar,
  Box,
  MenuItem,
  Menu,
} from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const pages = ["Photos", "Ajouter", "Rechercher"];

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Gestion des photos</h1>
          <AppBar>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <LocalFireDepartmentIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Gestion des photos
              </Typography>
              <Menu open={true}>
                {pages.map((page) => (
                  <MenuItem key={page}>
                    <Typography>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Toolbar>
          </AppBar>
        </header>
        <Routes>
          <Route path="/photos" Component={PhotoList} />
          <Route path="/photo/new" Component={AddPhotoForm} />
          <Route path="/rechercher" Component={SearchPhotos} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

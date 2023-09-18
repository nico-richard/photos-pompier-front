import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SearchPhotos } from "./components/photo/SearchPhotos";
import "./styles.sass";
import { NavbarCustom } from "./components/NavbarCustom";
import Home from "./components/Home";
import { PhotoList } from "./components/photo/PhotoList";
import { AddPhoto } from "./components/photo/AddPhoto";
import { CategoriesList } from "./components/category/CategoriesList";
import { AddCategoryForm } from "./components/category/AddCategory";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeOptions } from "./interfaces/Theme";

const darkTheme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <NavbarCustom />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/photo" Component={PhotoList} />
            <Route path="/photo/new" Component={AddPhoto} />
            <Route path="/category" Component={CategoriesList} />
            <Route path="/category/new" Component={AddCategoryForm} />
            <Route path="/rechercher" Component={SearchPhotos} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

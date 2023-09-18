import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PhotoList from "./components/PhotoList";
import AddPhotoForm from "./components/AddPhotoForm";
import SearchPhotos from "./components/SearchPhotos";
import "./styles.sass";
import { NavbarCustom } from "./components/NavbarCustom";
import Home from "./components/Home";

const pages = ["Photos", "Ajouter", "Rechercher"];

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarCustom />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/photos" Component={PhotoList} />
          <Route path="/photo/new" Component={AddPhotoForm} />
          <Route path="/rechercher" Component={SearchPhotos} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

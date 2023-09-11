import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import PhotoList from "./components/PhotoList";
import AddPhotoForm from "./components/AddPhotoForm";
import SearchPhotos from "./components/SearchPhotos";
import "./styles.scss";

function App() {
    return (
        <Router>
            <div className="App">
                <header>
                    <h1>Gestion de photos de camions de pompier</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Liste des photos</Link>
                            </li>
                            <li>
                                <Link to="/ajouter">Ajouter une photo</Link>
                            </li>
                            <li>
                                <Link to="/rechercher">
                                    Rechercher des photos
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" Component={PhotoList} />
                    <Route path="/ajouter" Component={AddPhotoForm} />
                    <Route path="/rechercher" Component={SearchPhotos} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

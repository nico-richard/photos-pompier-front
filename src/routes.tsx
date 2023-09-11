import { Navigate, Route, Routes } from "react-router-dom";
import PhotoList from "./components/PhotoList";
import AddPhotoForm from "./components/AddPhotoForm";
import SearchPhotos from "./components/SearchPhotos";

const routes = (
    <Routes>
        <Route path="/" Component={PhotoList} />
        <Route path="/ajouter" Component={AddPhotoForm} />
        <Route path="/rechercher" Component={SearchPhotos} />
        {/* Ajoutez d'autres routes au besoin */}
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
);

export default routes;

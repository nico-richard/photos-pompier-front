import React, { useState } from "react";
import { addPhoto } from "../api";

interface PhotoData {
    marque: string;
    chassis: string;
    annee: number;
}

const AddPhotoForm: React.FC = () => {
    const [photoData, setPhotoData] = useState<PhotoData>({
        marque: "",
        chassis: "",
        annee: 0,
    });

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const { name, value } = event.target;
        setPhotoData({ ...photoData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();

        try {
            await addPhoto(photoData);
            alert("Nouvelle photo ajoutée avec succès");
            setPhotoData({ marque: "", chassis: "", annee: 0 });
        } catch (error) {
            console.error("Erreur lors de l'ajout de la photo", error);
        }
    };

    return (
        <div>
            <h2>Ajouter une nouvelle photo</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Marque:
                    <input
                        type="text"
                        name="marque"
                        value={photoData.marque}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Châssis:
                    <input
                        type="text"
                        name="chassis"
                        value={photoData.chassis}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Année:
                    <input
                        type="number"
                        name="annee"
                        value={photoData.annee}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default AddPhotoForm;

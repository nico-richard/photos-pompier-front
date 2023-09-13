import React, { useState, useEffect } from "react";
import { getPhotos } from "../api";

interface Photo {
    id: number;
    marque: string;
    chassis: string;
    annee: number;
    image: any;
    timestamp: string;
}

const PhotoList: React.FC = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        // Charger la liste des photos depuis l'API Flask lors du montage du composant
        const fetchPhotos = async () => {
            try {
                const data = await getPhotos();
                setPhotos(data);
            } catch (error) {
                console.error("Erreur lors du chargement des photos", error);
            }
        };

        fetchPhotos();
    }, []);

    return (
        <div>
            <h2>Liste des photos</h2>
            <ul>
                {photos.map((photo) => (
                    <li key={photo.id}>
                        <p>Marque : {photo.marque}</p>
                        <p>Châssis : {photo.chassis}</p>
                        <p>Année : {photo.annee}</p>
                        <p>
                            Image :{" "}
                            <img
                                src={`data:image/jpg;base64,${photo.image}`}
                                alt=""
                            />
                        </p>
                        <p>Date de création : {photo.timestamp}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PhotoList;

export interface Photo {
  id?: number;
  marque: string;
  chassis: string;
  annee: number;
  image: string | ArrayBuffer;
  timestamp: string;
}

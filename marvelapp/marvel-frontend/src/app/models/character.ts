export interface Character {
    id?: number; // El ID es opcional porque no existe al crear un nuevo personaje
    nombre: string;
    alias: string;
    enemigos: string;
    ciudad_natal: string;
    edad: number;
}
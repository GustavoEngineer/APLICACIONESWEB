import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Character } from '../models/character';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {
    private apiUrl = `${environment.apiUrl}/personajes`; // Construye la URL base

    constructor(private http: HttpClient) { }

    // Obtener todos los personajes (Read)
    getCharacters(): Observable<Character[]> {
        return this.http.get<Character[]>(this.apiUrl);
    }

    // Crear un nuevo personaje (Create)
    createCharacter(character: Character): Observable<Character> {
        return this.http.post<Character>(this.apiUrl, character);
    }

    // Actualizar un personaje (Update)
    updateCharacter(id: number, character: Character): Observable<Character> {
        return this.http.put<Character>(`${this.apiUrl}/${id}`, character);
    }

    // Borrar un personaje (Delete)
    deleteCharacter(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}

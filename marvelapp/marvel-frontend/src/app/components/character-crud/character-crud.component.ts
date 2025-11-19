import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character.service';

@Component({
    selector: 'app-character-crud',
    templateUrl: './character-crud.component.html',
    styleUrls: ['./character-crud.component.css'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule]
})
export class CharacterCrudComponent implements OnInit {

    characters: Character[] = [];
    characterForm: FormGroup;
    editingCharacterId: number | null = null;

    constructor(private characterService: CharacterService, private fb: FormBuilder) {
        this.characterForm = this.fb.group({
            nombre: ['', Validators.required],
            alias: ['', Validators.required],
            enemigos: ['', Validators.required],
            ciudad_natal: ['', Validators.required],
            edad: ['', [Validators.required, Validators.min(1)]]
        });
    }

    ngOnInit(): void {
        this.loadCharacters();
    }

    loadCharacters(): void {
        this.characterService.getCharacters().subscribe(data => {
            this.characters = data;
        });
    }

    onSubmit(): void {
        if (this.characterForm.invalid) {
            return;
        }

        const formData = this.characterForm.value;

        if (this.editingCharacterId !== null) {
            this.characterService.updateCharacter(this.editingCharacterId, formData).subscribe(() => {
                this.loadCharacters();
                this.cancelEdit();
            });
        } else {
            this.characterService.createCharacter(formData).subscribe(() => {
                this.loadCharacters();
                this.characterForm.reset();
            });
        }
    }

    editCharacter(character: Character): void {
        this.editingCharacterId = character.id!;
        this.characterForm.patchValue(character);
    }

    deleteCharacter(id: number): void {
        if (confirm('¿Estás seguro de que quieres eliminar este personaje?')) {
            this.characterService.deleteCharacter(id).subscribe(() => {
                this.loadCharacters();
            });
        }
    }

    cancelEdit(): void {
        this.editingCharacterId = null;
        this.characterForm.reset();
    }
}


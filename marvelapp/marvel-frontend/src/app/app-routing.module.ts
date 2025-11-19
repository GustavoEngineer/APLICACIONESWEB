import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCrudComponent } from './components/character-crud/character-crud.component'; // <-- Importa el componente

const routes: Routes = [
    { path: '', component: CharacterCrudComponent } // <-- Añade esta ruta
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

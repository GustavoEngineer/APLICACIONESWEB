import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// ReactiveFormsModule ya no se necesita aquí, porque lo importará el componente directamente.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterCrudComponent } from './components/character-crud/character-crud.component';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AppComponent,
        CharacterCrudComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
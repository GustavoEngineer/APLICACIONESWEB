import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MiBotonComponent } from '../mi-boton/mi-boton';

import { CardComponent } from '../card/card';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [MiBotonComponent, CardComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    mensaje: string = 'Directivas incorporadas en Angular';

    constructor(private router: Router) { }

    irDirectiva() {
        this.router.navigate(['directivas']);
    }

    cambiarMensaje(parametroMensaje: string) {
        this.mensaje = parametroMensaje;
    }
}
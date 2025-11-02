import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.html',
    styleUrls: ['./card.css']
})
export class CardComponent {
    @Input() titulo: string = '';
    @Input() descripcion: string = '';
    @Input() pie: string = '';
}

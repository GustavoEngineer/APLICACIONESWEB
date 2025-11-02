import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card';

describe('CardComponent', () => {
    let component: CardComponent;
    let fixture: ComponentFixture<CardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CardComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display input values', () => {
        component.titulo = 'Titulo de prueba';
        component.descripcion = 'Descripcion de prueba';
        component.pie = 'Pie de prueba';
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.card-header h2')?.textContent).toContain('Titulo de prueba');
        expect(compiled.querySelector('.card-body p')?.textContent).toContain('Descripcion de prueba');
        expect(compiled.querySelector('.card-footer small')?.textContent).toContain('Pie de prueba');
    });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MiBotonComponent } from './mi-boton';

describe('MiBotonComponent', () => {
  let component: MiBotonComponent;
  let fixture: ComponentFixture<MiBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiBotonComponent, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MiBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

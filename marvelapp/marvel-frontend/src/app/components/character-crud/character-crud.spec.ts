import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCrud } from './character-crud';

describe('CharacterCrud', () => {
  let component: CharacterCrud;
  let fixture: ComponentFixture<CharacterCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCrud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCrud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

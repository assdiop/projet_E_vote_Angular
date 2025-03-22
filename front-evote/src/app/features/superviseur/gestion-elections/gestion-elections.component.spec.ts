import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionElectionsComponent } from './gestion-elections.component';

describe('GestionElectionsComponent', () => {
  let component: GestionElectionsComponent;
  let fixture: ComponentFixture<GestionElectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionElectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionElectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

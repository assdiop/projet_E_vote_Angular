import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuvertElectionsComponent } from './ouvert-elections.component';

describe('OuvertElectionsComponent', () => {
  let component: OuvertElectionsComponent;
  let fixture: ComponentFixture<OuvertElectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OuvertElectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuvertElectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

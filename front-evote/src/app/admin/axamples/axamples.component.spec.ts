import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxamplesComponent } from './axamples.component';

describe('AxamplesComponent', () => {
  let component: AxamplesComponent;
  let fixture: ComponentFixture<AxamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationVotesComponent } from './validation-votes.component';

describe('ValidationVotesComponent', () => {
  let component: ValidationVotesComponent;
  let fixture: ComponentFixture<ValidationVotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationVotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

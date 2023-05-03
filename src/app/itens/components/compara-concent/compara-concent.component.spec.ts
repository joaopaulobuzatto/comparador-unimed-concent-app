import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparaConcentComponent } from './compara-concent.component';

describe('ComparaConcentComponent', () => {
  let component: ComparaConcentComponent;
  let fixture: ComponentFixture<ComparaConcentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparaConcentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparaConcentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

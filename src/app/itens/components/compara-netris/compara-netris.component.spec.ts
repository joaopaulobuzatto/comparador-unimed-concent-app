import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparaNetrisComponent } from './compara-netris.component';

describe('ComparaNetrisComponent', () => {
  let component: ComparaNetrisComponent;
  let fixture: ComponentFixture<ComparaNetrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparaNetrisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparaNetrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensUnimedListComponent } from './itens-unimed-list.component';

describe('ItensUnimedListComponent', () => {
  let component: ItensUnimedListComponent;
  let fixture: ComponentFixture<ItensUnimedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItensUnimedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensUnimedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

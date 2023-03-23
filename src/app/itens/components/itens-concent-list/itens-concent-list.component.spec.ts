import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensConcentListComponent } from './itens-concent-list.component';

describe('ItensConcentListComponent', () => {
  let component: ItensConcentListComponent;
  let fixture: ComponentFixture<ItensConcentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItensConcentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensConcentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

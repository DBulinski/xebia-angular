import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsRouteComponent } from './items-route.component';

describe('ItemsRouteComponent', () => {
  let component: ItemsRouteComponent;
  let fixture: ComponentFixture<ItemsRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsRouteComponent]
    });
    fixture = TestBed.createComponent(ItemsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

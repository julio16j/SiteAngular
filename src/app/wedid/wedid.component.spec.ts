import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WedidComponent } from './wedid.component';

describe('WedidComponent', () => {
  let component: WedidComponent;
  let fixture: ComponentFixture<WedidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WedidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WedidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

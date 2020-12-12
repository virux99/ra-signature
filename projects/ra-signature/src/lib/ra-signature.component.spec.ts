import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaSignatureComponent } from './ra-signature.component';

describe('RaSignatureComponent', () => {
  let component: RaSignatureComponent;
  let fixture: ComponentFixture<RaSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

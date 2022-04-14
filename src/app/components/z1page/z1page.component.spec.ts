import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Z1pageComponent } from './z1page.component';

describe('Z1pageComponent', () => {
  let component: Z1pageComponent;
  let fixture: ComponentFixture<Z1pageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Z1pageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Z1pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

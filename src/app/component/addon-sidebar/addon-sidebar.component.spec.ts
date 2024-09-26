import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonSidebarComponent } from './addon-sidebar.component';

describe('AddonSidebarComponent', () => {
  let component: AddonSidebarComponent;
  let fixture: ComponentFixture<AddonSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddonSidebarComponent]
    });
    fixture = TestBed.createComponent(AddonSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

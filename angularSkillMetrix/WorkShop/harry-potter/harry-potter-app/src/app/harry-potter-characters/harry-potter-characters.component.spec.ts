import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarryPotterCharactersComponent } from './harry-potter-characters.component';

describe('HarryPotterCharactersComponent', () => {
  let component: HarryPotterCharactersComponent;
  let fixture: ComponentFixture<HarryPotterCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HarryPotterCharactersComponent]
    });
    fixture = TestBed.createComponent(HarryPotterCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

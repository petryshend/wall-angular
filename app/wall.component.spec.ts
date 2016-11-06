/* tslint:disable:no-unused-variable */
import { WallComponent } from './wall.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

////////  SPECS  /////////////
describe('WallComponent', function () {
  let de: DebugElement;
  let comp: WallComponent;
  let fixture: ComponentFixture<WallComponent>;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
      declarations: [ WallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/angular/i,
      '<h1> should say something about "Angular"');
  });
});

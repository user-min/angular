import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyEditorComponent } from './tiny-editor.component';

describe('TinyEditorComponent', () => {
  let component: TinyEditorComponent;
  let fixture: ComponentFixture<TinyEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinyEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

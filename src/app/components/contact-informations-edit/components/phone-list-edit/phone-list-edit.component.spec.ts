import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneListEditComponent } from './phone-list-edit.component';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PhoneListEditComponent', () => {
  let component: PhoneListEditComponent;
  let fixture: ComponentFixture<PhoneListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularMaterialModule,
        BrowserAnimationsModule
      ],
      declarations: [
        PhoneListEditComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

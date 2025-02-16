import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressListEditComponent } from './address-list-edit.component';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddressListEditComponent', () => {
  let component: AddressListEditComponent;
  let fixture: ComponentFixture<AddressListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularMaterialModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AddressListEditComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

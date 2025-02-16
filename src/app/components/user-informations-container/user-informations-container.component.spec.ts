import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationsContainerComponent } from './user-informations-container.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { ContactInformationsComponent } from '../contact-informations/contact-informations.component';
import { ContactInformationsEditComponent } from '../contact-informations-edit/contact-informations-edit.component';
import { DependentsListComponent } from '../dependents-list/dependents-list.component';
import { DependentsListEditComponent } from '../dependents-list-edit/dependents-list-edit.component';
import { PhoneListComponent } from '../contact-informations/components/phone-list/phone-list.component';
import { PhoneListEditComponent } from '../contact-informations-edit/components/phone-list-edit/phone-list-edit.component';
import { AddressListComponent } from '../contact-informations/components/address-list/address-list.component';
import { AddressListEditComponent } from '../contact-informations-edit/components/address-list-edit/address-list-edit.component';
import { GeneralInformationsComponent } from '../general-informations/general-informations.component';
import { GeneralInformationsEditComponent } from '../general-informations-edit/general-informations-edit.component';
import { UserInfoItemComponent } from '../user-info-item/user-info-item.component';
import { PipesModule } from '../../pipes/pipes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UserInformationsContainerComponent', () => {
  let component: UserInformationsContainerComponent;
  let fixture: ComponentFixture<UserInformationsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AngularMaterialModule,
        PipesModule,
        BrowserAnimationsModule
      ],
      declarations: [
        UserInformationsContainerComponent,
        ContactInformationsComponent,
        ContactInformationsEditComponent,
        DependentsListComponent,
        DependentsListEditComponent,
        PhoneListComponent,
        PhoneListEditComponent,
        AddressListComponent,
        AddressListEditComponent,
        GeneralInformationsComponent,
        GeneralInformationsEditComponent,
        UserInfoItemComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInformationsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

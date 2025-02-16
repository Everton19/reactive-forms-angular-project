import { inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/user/user.interface';
import { PhoneList } from '../../types/phone-list';
import { AddressList } from '../../types/address-list';
import { DependentList } from '../../types/depedent-list';
import { convertToDate } from '../../utils/convert-to-date';
import { preparePhoneList } from '../../utils/prepare-phone-list';
import { PhoneTypeEnum } from '../../enums/phone-type.enum';

export class UserFormController {
  userForm!: FormGroup;
  private _fb = inject(FormBuilder);

  private emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  constructor() {
    this.createUserForm();
  }

  get generalInformations(): FormGroup {
    return this.userForm.get('generalInformations') as FormGroup;
  }

  get phoneList(): FormArray {
    return this.userForm.get('contactInformations.phoneList') as FormArray;
  }

  get addresList(): FormArray {
    return this.userForm.get('contactInformations.addressList') as FormArray;
  }

  get dependentList(): FormArray {
    return this.userForm.get('depedentsList') as FormArray;
  }

  fulfillUserForm(user: IUser) {
    this.resetUserForm();

    this.fulfillGeneralInformations(user);
    this.fulfillPhoneList(user.phoneList);
    this.fulfillAddressList(user.addressList);
    this.fulfILLDependentsList(user.dependentsList);

    console.log(this.userForm);
  }

  private resetUserForm() {
    this.userForm.reset();

    this.generalInformations.reset();

    this.phoneList.reset();
    this.phoneList.clear();

    this.addresList.reset();
    this.addresList.clear();

    this.dependentList.reset();
    this.dependentList.clear();
  }

  fulfILLDependentsList(dependentsList: DependentList) {
    dependentsList.forEach((dependent) => {
      this.dependentList.push(
        this._fb.group({
          name: [dependent.name, Validators.required],
          age: [dependent.age, Validators.required],
          document: [dependent.document, Validators.required],
        })
      );
    });
  }

  private fulfillAddressList(addressList: AddressList) {
    addressList.forEach((address) => {
      this.addresList.push(
        this._fb.group({
          type: [address.type, Validators.required],
          street: [address.street, Validators.required],
          complement: [address.complement, Validators.required],
          country: [address.country, Validators.required],
          state: [address.state, Validators.required],
          city: [address.city, Validators.required],
        })
      );
    });
  }

  private fulfillPhoneList(phoneList: PhoneList) {
    preparePhoneList(phoneList, false, (phone) => {
      const phoneValidators = phone.type === PhoneTypeEnum.EMERGENCY ? [] : [Validators.required];
      this.phoneList.push(this._fb.group({
        type: [phone.type],
        typeDescription: [phone.typeDescription],
        number: [phone.phoneNumber, phoneValidators],
      }));
    });
  }

  private fulfillGeneralInformations(user: IUser) {
    const newUser = {
      ...user,
      birthDate: convertToDate(user.birthDate),
    };

    this.generalInformations?.patchValue(newUser);
  }

  private createUserForm() {
    this.userForm = this._fb.group({
      generalInformations: this._fb.group({
        name: ['', Validators.required],
        email: [
          '',
          [Validators.required, Validators.pattern(this.emailPattern)],
        ],
        country: ['', Validators.required],
        state: ['', Validators.required],
        maritalStatus: [null, Validators.required],
        monthlyIncome: [null, Validators.required],
        birthDate: [null, Validators.required],
      }),

      contactInformations: this._fb.group({
        phoneList: this._fb.array([]),
        addressList: this._fb.array([]),
      }),

      depedentsList: this._fb.array([]),
    });
  }
}

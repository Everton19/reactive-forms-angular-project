import { AddressList } from '../../types/address-list';
import { PhoneList } from '../../types/phone-list';
import { IDependent } from './dependent.interface';

export interface IUser {
  name: string;
  email: string;
  country: string;
  state: string;
  maritalStatus: number;
  monthlyIncome: number;
  birthDate: string;
  phoneList: PhoneList;
  addressList: AddressList;
  dependentsList: IDependent[];
}

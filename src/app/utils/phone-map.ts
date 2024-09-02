import { PhoneTypeEnum } from '../enums/phone-type.enum';

export const PHONE_MAP: { [key in PhoneTypeEnum]: string } = {
  [PhoneTypeEnum.RESIDENTIAL]: 'Residencial',
  [PhoneTypeEnum.MOBILE]: 'Celular',
  [PhoneTypeEnum.EMERGENCY]: 'Emergêncial',
};

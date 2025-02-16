import { PhoneTypeEnum } from "../enums/phone-type.enum";
import { IPhone } from "../interfaces/user/phone.interface";
import { PhoneList } from "../types/phone-list";
import { PHONE_MAP } from "./phone-map";

export const preparePhoneList = (originalPhoneList: PhoneList, isDisplay:boolean, callback: (phone: { type: number, typeDescription: string, phoneNumber: string}) => void) => {
  Object.keys(PHONE_MAP)
        .map(Number)
        .forEach((phoneType: number) => {
          const PHONE_FOUND = originalPhoneList.find((phone: IPhone) => {
            return phone.type === phoneType;
          });

          let phoneNumber: string = '';

          if (isDisplay) {
            phoneNumber = PHONE_FOUND ? formatPhoneNumberDisplay(PHONE_FOUND) : '-';
          } else {
            phoneNumber = PHONE_FOUND ? formatPhoneNumber(PHONE_FOUND) : '';
          }

          callback({
            type: phoneType,
            typeDescription: PHONE_MAP[phoneType as PhoneTypeEnum],
            phoneNumber: phoneNumber
          })
        });
};

const formatPhoneNumberDisplay = (phone: IPhone) => {
  return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`;
}

const formatPhoneNumber = (phone: IPhone) => {
  return `${phone.internationalCode}${phone.areaCode}${phone.number}`.replace(/[+\-]/g, '');
}

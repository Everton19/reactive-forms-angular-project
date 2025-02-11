import { MariatalStatusEnum } from "../enums/marital-status.enum";

export const maritalStatusDescriptionMap: { [key in MariatalStatusEnum]: string } = {
      [MariatalStatusEnum.SINGLE]: 'Solteiro',
      [MariatalStatusEnum.MARRIED]: 'Casado',
      [MariatalStatusEnum.DIVORCED]: 'Divorciado',
};

export const maritalStatusArray = Object.keys(maritalStatusDescriptionMap)
                                          .map(Number)
                                          .map(key => {
                                            return {
                                              code: key,
                                              description: maritalStatusDescriptionMap[key as MariatalStatusEnum]
                                            }
                                          });

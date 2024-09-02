import { IBaseCountriesResponse } from '../base-countries-response.interface';
import { IStatesResponseData } from './state-response-data.interface';


export interface IStatesResponse extends IBaseCountriesResponse {
  data: IStatesResponseData;
}

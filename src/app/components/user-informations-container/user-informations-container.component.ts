import {
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UserFormController } from './user-form-controller';
import { CountriesService } from '../../services/countries.service';
import { take } from 'rxjs';
import { CountriesList } from '../../types/countries-list';
import { StatesService } from '../../services/states.service';
import { StatesList } from '../../types/states-list';

@Component({
  selector: 'app-user-informations-container',
  templateUrl: './user-informations-container.component.html',
  styleUrl: './user-informations-container.component.scss',
})
export class UserInformationsContainerComponent
  extends UserFormController
  implements OnInit, OnChanges
{
  @Input({ required: true }) userSelected: IUser = {} as IUser;
  @Input({ required: true }) isEditMode: boolean = false;

  private readonly _countriesService = inject(CountriesService);
  private readonly _statesService = inject(StatesService);

  currentTabIndex: number = 0;
  countriesList: CountriesList = [];
  statesList: StatesList = [];

  ngOnInit() {
    this.getCountriesList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.currentTabIndex = 0;

    const HAS_USER_SELECTED =
      changes['userSelected'] &&
      Object.keys(changes['userSelected'].currentValue).length > 0;

    if (HAS_USER_SELECTED) {
      this.fulfillUserForm(this.userSelected);

      this.getStatesList(this.userSelected.country);
    }
  }

  onCountrySelected($event: string) {
    this.getStatesList($event);
  }

  private getCountriesList() {
    this._countriesService
      .getCountries()
      .pipe(take(1))
      .subscribe((countriesList: CountriesList) => {
        this.countriesList = countriesList;
      });
  }

  private getStatesList(country: string) {
    this._statesService
      .getStates(country)
      .pipe(take(1))
      .subscribe((statesList) => {
        this.statesList = statesList;
      });
  }
}

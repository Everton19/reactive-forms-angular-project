import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';
import { CitiesService } from './services/cities.service';
import { UsersService } from './services/users.service';
import { UsersListResponse } from './types/users-list-response';
import { take } from 'rxjs';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isEditMode: boolean = false;
  title = 'projeto-reactive-forms';
  usersList: UsersListResponse = [];
  userSelectedIndex: number | undefined;
  userSelected: IUser = {} as IUser;

  constructor(
    private readonly _countriesService: CountriesService,
    private readonly _statesService: StatesService,
    private readonly _citiesService: CitiesService,
    private readonly _usersService: UsersService
  ) {
    console.log(this.usersList);
  }

  ngOnInit(): void {
    this._usersService
      .getUsers()
      .pipe(take(1))
      .subscribe((usersResponse) => {
        this.usersList = usersResponse;
      });
  }

  onUserSelected($event: number) {
    const USER_FOUND = this.usersList[$event];

    if (USER_FOUND) {
      this.userSelectedIndex = $event;
      this.userSelected = structuredClone(USER_FOUND);
    }
  }

  onCancelButton() {
    this.isEditMode = false;
  }

  onEditButton() {
    this.isEditMode = true;
  }
}

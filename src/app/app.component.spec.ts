import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CountriesService } from './services/countries.service';
import { CitiesService } from './services/cities.service';
import { UsersService } from './services/users.service';
import { StatesService } from './services/states.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { UsersListComponent } from './components/users-list/users-list.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        AngularMaterialModule
      ],
      declarations: [
        AppComponent,
        UsersListComponent
      ],
      providers: [
        CountriesService,
        StatesService,
        CitiesService,
        UsersService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'projeto-reactive-forms'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('projeto-reactive-forms');
  });
});

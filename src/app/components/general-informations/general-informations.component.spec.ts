import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInformationsComponent } from './general-informations.component';
import { UserInfoItemComponent } from '../user-info-item/user-info-item.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesModule } from '../../pipes/pipes.module';

describe('GeneralInformationsComponent', () => {
  let component: GeneralInformationsComponent;
  let fixture: ComponentFixture<GeneralInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularMaterialModule,
        BrowserAnimationsModule,
        PipesModule
      ],
      declarations: [
        GeneralInformationsComponent,
        UserInfoItemComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CareteamPage } from './careteam.page';

describe('CareteamPage', () => {
  let component: CareteamPage;
  let fixture: ComponentFixture<CareteamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareteamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CareteamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

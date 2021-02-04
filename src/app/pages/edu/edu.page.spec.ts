import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EduPage } from './edu.page';

describe('EduPage', () => {
  let component: EduPage;
  let fixture: ComponentFixture<EduPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EduPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

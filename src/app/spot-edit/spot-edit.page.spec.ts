import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpotEditPage } from './spot-edit.page';

describe('SpotEditPage', () => {
  let component: SpotEditPage;
  let fixture: ComponentFixture<SpotEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpotEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

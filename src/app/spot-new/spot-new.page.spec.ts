import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpotNewPage } from './spot-new.page';

describe('SpotNewPage', () => {
  let component: SpotNewPage;
  let fixture: ComponentFixture<SpotNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpotNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

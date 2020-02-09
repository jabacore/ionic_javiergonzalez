import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpotItemPage } from './spot-item.page';

describe('SpotItemPage', () => {
  let component: SpotItemPage;
  let fixture: ComponentFixture<SpotItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpotItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

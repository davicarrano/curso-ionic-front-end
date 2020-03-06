import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscolherEnderecosPage } from './escolher-enderecos.page';

describe('EscolherEnderecosPage', () => {
  let component: EscolherEnderecosPage;
  let fixture: ComponentFixture<EscolherEnderecosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolherEnderecosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscolherEnderecosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

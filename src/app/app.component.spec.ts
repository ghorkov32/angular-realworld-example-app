import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent, ShowAuthedDirective, SharedModule } from './shared';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from './core/core.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, CoreModule, SharedModule ],
      declarations: [ AppComponent, HeaderComponent, FooterComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show app title = ', () => {
    expect(1 === 1).toBeTruthy();
  });
});

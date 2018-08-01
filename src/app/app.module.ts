import {
  NgModule,
} from '@angular/core';

import {
  BrowserModule
} from '@angular/platform-browser';

import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';

import {
  PushNotificationsModule,
} from 'angular2-notifications';
import {
  RouterModule,
  RouteReuseStrategy,
} from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { SignalRModule, SignalRConfiguration } from 'ng2-signalr';
import { NgIdleModule } from '@ng-idle/core';

import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AppConstant } from './app.constant';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

export function createConfig(): SignalRConfiguration {
  const c = new SignalRConfiguration();
  c.hubName = 'messageHub';
  c.url = AppConstant.domain;
  return c;
}

import {
  ENV_PROVIDERS
} from './environment';

import {
  ROUTES
} from './app.routes';

// App is our top level component
import {
  AppComponent
} from './app.component';

import {
  NotFoundModule
} from './not-found';

const APP_DECLARATION = [
  AppComponent
];

// App Styles
import '../styles/styles.scss';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: APP_DECLARATION,
  imports: [ // import Angular's modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    SignalRModule.forRoot(createConfig),
    NgIdleModule.forRoot(),

    NotFoundModule,

    PushNotificationsModule,
  ],
  exports: [ // Exports module to make it available in another modules
    BrowserModule,
    BrowserAnimationsModule,
    SignalRModule,
    RouterModule,

    ...APP_DECLARATION,
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class AppModule {
}

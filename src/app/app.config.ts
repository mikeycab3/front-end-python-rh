import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true })
    , provideRouter(routes)
    , provideClientHydration()
    , provideHttpClient(withFetch())
    , importProvidersFrom([SweetAlert2Module.forRoot()]), provideAnimationsAsync()]
};

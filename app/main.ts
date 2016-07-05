import {bootstrap} from '@angular/platform-browser-dynamic';
import {PizzaAppComponent} from './app.component';

import {disableDeprecatedForms, provideForms} from '@angular/forms';

bootstrap(PizzaAppComponent, [
  disableDeprecatedForms(),
  provideForms()
]);

import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './components/app.component';
import {HTTP_PROVIDERS} from 'angular2/http';

import {WarenkorbService} from './services/warenkorb.service';

bootstrap(AppComponent, [HTTP_PROVIDERS, WarenkorbService]);

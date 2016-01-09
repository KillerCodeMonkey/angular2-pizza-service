import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './components/app.component';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {WarenkorbService} from './services/warenkorb.service';

bootstrap(AppComponent, [ROUTER_PROVIDERS, WarenkorbService]);

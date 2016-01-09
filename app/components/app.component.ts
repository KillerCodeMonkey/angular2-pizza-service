import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {BestellungComponent} from './bestellung/bestellung.component';
import {UeberComponent} from './ueber/ueber.component';
import {NavigationComponent} from './navigation/navigation.component';

@RouteConfig([{
    path: '/bestellen',
    component: BestellungComponent,
    name: 'Bestellung',
    useAsDefault: true
}, {
    path: '/ueber',
    component: UeberComponent,
    name: 'Ueber'
}])

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, NavigationComponent],
    template: `
    <navigation></navigation>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {}

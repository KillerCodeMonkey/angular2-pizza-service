import {Component, Input, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {WarenkorbService} from '../../services/warenkorb.service';
import {WarenkorbComponent} from '../warenkorb/warenkorb.component.ts';

interface Pizza {
    id: number,
    name: string,
    preis: number
}

@Component({
    selector: 'bestellung',
    directives: [NgForm, WarenkorbComponent],
    templateUrl: './app/components/bestellung/bestellung.component.html'
})
export class BestellungComponent {
    @Input() suche: string;
    public pizzen = PIZZEN;
    public aktuellerWarenkorb;

    constructor(private _warenkorbService: WarenkorbService) {
    }

    zumWarenkorb(pizza: Pizza) {
        this._warenkorbService.addWarenkorb({
            name: pizza.name,
            preis: pizza.preis
        });
    }
}

var PIZZEN: Pizza[] = [{
    id: 1,
    name: 'Pizza Vegetaria',
    preis: 10.99
}, {
    id: 2,
    name: 'Pizza Salami',
    preis: 10.99
}, {
    id: 3,
    name: 'Pizza Thunfisch',
    preis: 10.99
}, {
    id: 4,
    name: 'Aktueller Flyer',
    preis: 0
}];

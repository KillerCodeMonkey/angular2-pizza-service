import {Component, Input, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {WarenkorbService} from '../../services/warenkorb.service';
import {PizzaService} from '../../services/pizza.service';

import {WarenkorbComponent} from '../warenkorb/warenkorb.component.ts';

import {PizzaSuchePipe} from '../../pipes/pizzaSuche.pipe.ts';
import {Pizza} from '../../interfaces/pizza.interface.ts';

@Component({
    selector: 'bestellung',
    directives: [NgForm, WarenkorbComponent],
    pipes: [PizzaSuchePipe],
    providers: [PizzaService],
    templateUrl: './app/components/bestellung/bestellung.component.html'
})
export class BestellungComponent {
    @Input() suche: string;
    public pizzen: Pizza[];

    constructor(private _warenkorbService: WarenkorbService, private _pizzaService: PizzaService) {
    }

    ngOnInit() {
        this._pizzaService.ladeAngebot().subscribe(pizzen => this.pizzen = pizzen);
    }

    zumWarenkorb(pizza: Pizza) {
        this._warenkorbService.addWarenkorb({
            name: pizza.name,
            preis: pizza.preis
        });
    }
}

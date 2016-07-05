import {Component, Input, OnInit} from '@angular/core';
import {OnActivate, ComponentInstruction} from '@angular/router-deprecated';

import {CartComponent} from '../cart/cart.component';
import {CartService} from '../cart/index';
import {Pizza, PizzaSearchPipe, PizzaService} from '../+pizza/index';

@Component({
    selector: 'order',
    directives: [CartComponent],
    pipes: [PizzaSearchPipe],
    providers: [PizzaService],
    templateUrl: './app/+order/order.component.html'
})
export class OrderComponent implements OnActivate {
    @Input() search: string;
    public pizzas: Pizza[] = [];

    constructor(private cartService: CartService, private pizzaService: PizzaService) {
    }

    routerOnActivate(currentRoute: ComponentInstruction, previousRoute: ComponentInstruction) {
        console.log(currentRoute, previousRoute);
    }

    ngOnInit() {
        this.pizzaService.getPizza().subscribe(pizzas => this.pizzas = pizzas);
    }

    addToCart(pizza: Pizza) {
        this.cartService.addCartItem({
            name: pizza.name,
            price: pizza.price
        });
    }
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var index_1 = require('./shared/index');
var CartComponent = (function () {
    function CartComponent(cartService) {
        this.cartService = cartService;
    }
    CartComponent.prototype.getCart = function () {
        this.currentCart = this.cartService.getCart();
    };
    CartComponent.prototype.ngOnInit = function () {
        this.getCart();
    };
    CartComponent.prototype.calcTotalSum = function () {
        var sum = 0;
        this.currentCart.forEach(function (cartItem) {
            sum = sum + cartItem.price;
        });
        return sum;
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'pizza-cart',
            templateUrl: './app/cart/cart.component.html',
            styleUrls: ['./app/cart/cart.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.CartService])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map
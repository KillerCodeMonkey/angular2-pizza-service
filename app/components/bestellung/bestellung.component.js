System.register(['angular2/core', 'angular2/common', '../../services/warenkorb.service', '../warenkorb/warenkorb.component.ts', '../../pipes/pizzaSuche.pipe.ts'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, warenkorb_service_1, warenkorb_component_ts_1, pizzaSuche_pipe_ts_1;
    var BestellungComponent, PIZZEN;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (warenkorb_service_1_1) {
                warenkorb_service_1 = warenkorb_service_1_1;
            },
            function (warenkorb_component_ts_1_1) {
                warenkorb_component_ts_1 = warenkorb_component_ts_1_1;
            },
            function (pizzaSuche_pipe_ts_1_1) {
                pizzaSuche_pipe_ts_1 = pizzaSuche_pipe_ts_1_1;
            }],
        execute: function() {
            BestellungComponent = (function () {
                function BestellungComponent(_warenkorbService) {
                    this._warenkorbService = _warenkorbService;
                    this.pizzen = PIZZEN;
                }
                BestellungComponent.prototype.zumWarenkorb = function (pizza) {
                    this._warenkorbService.addWarenkorb({
                        name: pizza.name,
                        preis: pizza.preis
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], BestellungComponent.prototype, "suche", void 0);
                BestellungComponent = __decorate([
                    core_1.Component({
                        selector: 'bestellung',
                        directives: [common_1.NgForm, warenkorb_component_ts_1.WarenkorbComponent],
                        pipes: [pizzaSuche_pipe_ts_1.PizzaSuchePipe],
                        templateUrl: './app/components/bestellung/bestellung.component.html'
                    }), 
                    __metadata('design:paramtypes', [warenkorb_service_1.WarenkorbService])
                ], BestellungComponent);
                return BestellungComponent;
            })();
            exports_1("BestellungComponent", BestellungComponent);
            PIZZEN = [{
                    id: 1,
                    name: 'Pizza Vegetaria',
                    preis: 5.99
                }, {
                    id: 2,
                    name: 'Pizza Salami',
                    preis: 10.99
                }, {
                    id: 3,
                    name: 'Pizza Thunfisch',
                    preis: 7.99
                }, {
                    id: 4,
                    name: 'Aktueller Flyer',
                    preis: 0
                }];
        }
    }
});
//# sourceMappingURL=bestellung.component.js.map
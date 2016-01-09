System.register(['angular2/platform/browser', './components/app.component', 'angular2/router', './services/warenkorb.service'], function(exports_1) {
    var browser_1, app_component_1, router_1, warenkorb_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (warenkorb_service_1_1) {
                warenkorb_service_1 = warenkorb_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, warenkorb_service_1.WarenkorbService]);
        }
    }
});
//# sourceMappingURL=boot.js.map
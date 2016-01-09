import {Input, Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'my-app',
    template: `
    <h1>
        Heyho {{name}}
    </h1>
    <input [(ngModel)]="name">
    `
})
export class AppComponent {
    @Input() name : string;

    constructor() {
        this.name = 'Alice';
    }
}

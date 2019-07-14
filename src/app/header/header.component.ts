import { Component, Output, EventEmitter } from '@angular/core';
import { headersToString } from 'selenium-webdriver/http';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}
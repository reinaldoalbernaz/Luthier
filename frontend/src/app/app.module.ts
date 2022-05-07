import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutsModule } from './layouts/layouts.module';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LayoutsModule,
        AppRoutingModule,
        NgbModule,
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'pt'
        },
        {
            provide: DEFAULT_CURRENCY_CODE,
            useValue: 'BRL'
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor() {
        registerLocaleData(localePt);
    }
}

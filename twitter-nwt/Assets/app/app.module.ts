﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
    imports: [BrowserModule, routing, DashboardModule],
    declarations: [AppComponent],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule { }
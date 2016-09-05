import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { DashboardModule } from './dashboard/dashboard.module';

import { UserService } from './Common/Services/UserService';
import { CommentService } from './Common/Services/CommentService';
import { HashtagService } from './Common/Services/HashtagService';
import { TweetService } from './Common/Services/TweetService';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, routing, DashboardModule],
    declarations: [AppComponent],
    providers: [appRoutingProviders, UserService, CommentService, HashtagService, TweetService],
    bootstrap: [AppComponent]
})

export class AppModule { }
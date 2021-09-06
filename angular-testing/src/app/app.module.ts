import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AlertButtonComponent } from './alert-button/alert-button.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageService } from './message.service';

@NgModule({
    declarations: [AppComponent, AlertButtonComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
    ],
    providers: [MessageService],
    bootstrap: [AppComponent],
})
export class AppModule {}

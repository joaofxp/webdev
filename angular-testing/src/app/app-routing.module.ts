import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertButtonComponent } from './alert-button/alert-button.component';

const routes: Routes = [
    { path: 'alert-button-component', component: AlertButtonComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

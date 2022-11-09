import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error404.component';
import { error404Routes } from './error404.routing';

@NgModule({
    declarations: [
        Error404Component
    ],
    imports     : [
        RouterModule.forChild(error404Routes)
    ]
})
export class Error404Module
{
    
}
 
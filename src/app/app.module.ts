import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component'

const appRoutes: Routes = [
  { path: 'product',  component:  ProductComponent},
  { path: 'about',    component:  AboutComponent},
  { path: 'contact',    component:  ContactComponent},
  { path: 'footer',    component:  FooterComponent},

  { path: 'home',     component: HomeComponent},  
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**',        component:  HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

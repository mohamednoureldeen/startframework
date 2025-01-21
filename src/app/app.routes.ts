import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:'home', component: HomeComponent, data: { title: 'Home' }},
    {path:'about', component: AboutComponent, data: { title: 'About' }},
    {path:'portfolio', component: PortfolioComponent, data: { title: 'portfolio' }},
    {path:'contact', component: ContactComponent, data: { title: 'contact' }},

    // wildcard route for a 404 page
    { path: '**', component: NotfoundComponent, data: { title: '404' } }
];

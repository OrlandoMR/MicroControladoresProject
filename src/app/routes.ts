import { Routes, RouterModule } from '@angular/router';
import { AmbientComponent } from './views/ambient/ambient.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { HomeComponent } from './views/home/home.component';
import { LightComponent } from './views/light/light.component';

const APP_ROUTES: Routes = [
	{ path: 'Home', component: HomeComponent },
	{ path: 'Gallery', component: GalleryComponent },
	{ path: 'Ambient', component: AmbientComponent },
	{ path: 'Light', component: LightComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'Home' }
]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

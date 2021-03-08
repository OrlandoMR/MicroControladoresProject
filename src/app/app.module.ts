import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { APP_ROUTING } from './routes';
import { GalleryComponent } from './views/gallery/gallery.component';
import { LightComponent } from './views/light/light.component';
import { AmbientComponent } from './views/ambient/ambient.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { environment } from "../environments/environment"
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    GalleryComponent,
    LightComponent,
    AmbientComponent
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

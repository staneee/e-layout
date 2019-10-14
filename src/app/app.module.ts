import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LayoutModule} from '../layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,

    FormsModule,
    HttpClientModule,
    LayoutModule,
  ],
})
export class AppModule {
}

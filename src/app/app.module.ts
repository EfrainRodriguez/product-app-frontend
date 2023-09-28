import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CloudinaryModule } from '@cloudinary/ng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductModule } from './modules/product/product.module';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { toastReducer } from './state/reducers/toast.reducer';
import { AppState } from './state/app.state';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ToastComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule,
    CloudinaryModule,
    StoreModule.forRoot(
      {
        toast: toastReducer,
      } as ActionReducerMap<AppState>,
      {}
    ),
    StoreDevtoolsModule.instrument({ name: 'App Store' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

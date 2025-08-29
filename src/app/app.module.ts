import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SonicBounceComponent } from './componentes/sonic-bounce/sonic-bounce.component';
import { LogoComponent } from './componentes/header/logo/logo.component';
import { BuscaComponent } from './componentes/header/busca/busca.component';
import { NavlinksComponent } from './componentes/header/navlinks/navlinks.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContentComponent } from './componentes/content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SonicBounceComponent,
    LogoComponent,
    BuscaComponent,
    NavlinksComponent,
    FooterComponent,
    ContentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

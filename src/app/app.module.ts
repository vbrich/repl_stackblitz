import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostService } from './post-service';
import { CunexusComponent } from './cunexus/cunexus.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, CunexusComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ PostService ]
})
export class AppModule { }

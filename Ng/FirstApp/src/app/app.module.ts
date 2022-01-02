import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/users/user.component';
import { AdmissionComponent } from './components/admission/admission.component';
import { HomeComponent } from './components/home/home.component';
import { BigHeadingDirective } from './directives/highlight.directive';
import { UserFormComponent } from './components/userform/userform.component';
import { AddOptionSelectedDirective } from './directives/AddOptionSelectedDirective';
import { AmazonHomeComponent } from './Amazon/core/components/home/az-home.component';
import { FirstComponent } from './Class30/first/first.component';
import { SecondComponent } from './Class30/second/second.component';
import { LoginComponent } from './class31/login/login.component';
import { StartComponent } from './class31/start/start.component';
import { AboutComponent } from './class31/about/about.component';
import { ContactComponent } from './class31/contact/contact.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './class31/welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdmissionComponent,
    HomeComponent,
    BigHeadingDirective,
    UserFormComponent,
    AddOptionSelectedDirective,
    AmazonHomeComponent,
    FirstComponent,
    SecondComponent,
    LoginComponent,
    StartComponent,
    AboutComponent,
    ContactComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'welcome', pathMatch: "full" },
        { path: "home", component: StartComponent },
        { path: "about", component: AboutComponent },
        { path: "contact", component: ContactComponent },
        { path: "welcome", component: WelcomeComponent }
      ]
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [StartComponent]
})
export class AppModule { }

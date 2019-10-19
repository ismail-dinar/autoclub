import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/bars/header/header.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HomeComponent } from './components/home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {MatExpansionModule} from '@angular/material/expansion';
import { FooterComponent } from './components/bars/footer/footer.component';
import { AutodayComponent } from './components/autoday/autoday.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SuccessDialogComponent } from './components/inscription/success-dialog/success-dialog.component';
import { NgwWowModule } from 'ngx-wow';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatBadgeModule} from '@angular/material/badge';
import { HttpClientModule } from '@angular/common/http';
import { StaffComponent } from './components/home/staff/staff.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { FastFuriousComponent } from './components/fast-furious/fast-furious.component';
import { ErrorComponent } from './components/error/error.component';
import { ContactComponent } from './components/contact/contact.component';
import { RallyeComponent } from './components/fast-furious/rallye/rallye.component';
import { FormulaComponent } from './components/fast-furious/formula/formula.component';
import { DriftComponent } from './components/fast-furious/drift/drift.component';
import { CaoComponent } from './components/fast-furious/cao/cao.component';
import { CDesignComponent } from './components/fast-furious/cdesign/cdesign.component';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ClickOutsideModule } from 'ng-click-outside';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InscriptionDesignComponent } from './components/fast-furious/cdesign/inscription-design/inscription-design.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InscriptionComponent,
    HomeComponent,
    FooterComponent,
    AutodayComponent,
    SuccessDialogComponent,
    StaffComponent,
    ActivitiesComponent,
    FastFuriousComponent,
    ErrorComponent,
    ContactComponent,
    RallyeComponent,
    FormulaComponent,
    DriftComponent,
    CaoComponent,
    CDesignComponent,
    InscriptionDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTabsModule,
    ScrollDispatchModule,
    MatExpansionModule,
    MatDialogModule,
    NgwWowModule,
    FontAwesomeModule,
    MatBadgeModule,
    ClickOutsideModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    MatTooltipModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },
  { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  entryComponents: [SuccessDialogComponent]
})
export class AppModule { }

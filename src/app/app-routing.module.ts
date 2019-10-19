import { InscriptionDesignComponent } from './components/fast-furious/cdesign/inscription-design/inscription-design.component';
import { CDesignComponent } from './components/fast-furious/cdesign/cdesign.component';
import { CaoComponent } from './components/fast-furious/cao/cao.component';
import { FormulaComponent } from './components/fast-furious/formula/formula.component';
import { FastFuriousComponent } from './components/fast-furious/fast-furious.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { AutodayComponent } from './components/autoday/autoday.component';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { RallyeComponent } from './components/fast-furious/rallye/rallye.component';
import { DriftComponent } from './components/fast-furious/drift/drift.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'autoday', component: AutodayComponent},
  {path: 'activités', component: ActivitiesComponent},
  {path: 'fast&furious', component: FastFuriousComponent},
  // {path: 'contact', component: ContactComponent},
  {path: 'rallye', component: RallyeComponent},
  {path: 'drift', component: DriftComponent},
  {path: 'formula', component: FormulaComponent},
  {path: 'challenge-cao', component: CaoComponent},
  {path: 'challenge-design', component: CDesignComponent},
  {path: 'inscription/:challenge', component: InscriptionComponent},
  {path: 'inscriptionDesign', component: InscriptionDesignComponent},
  {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'  }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

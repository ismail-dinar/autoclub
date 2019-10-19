import { Data } from 'src/app/models/data';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit, OnDestroy {
  public photoAD = [];
  public photoK = [];
  public photoR = [];
  private subscription = new Subscription();
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.subscription.add(this.httpClient.get('/assets/data.json').subscribe( (data: Data) => {
      this.photoAD = data.photoAD;
      this.photoK = data.photoK;
      this.photoR = data.photoR;
    } ));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

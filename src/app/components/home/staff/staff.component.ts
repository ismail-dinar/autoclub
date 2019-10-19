import { Component, OnInit, OnDestroy } from '@angular/core';
import { Staff } from 'src/app/models/staff';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Data } from 'src/app/models/data';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit, OnDestroy {
  public staff: Staff[] = [] ;
  private subscription = new Subscription();
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.subscription.add(this.httpClient.get('/assets/data.json').subscribe((data: Data) => {
      this.staff = data.staff;
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

import { Component, OnInit, AfterViewInit} from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;
  constructor( private wowService: NgwWowService ) {}
  ngOnInit() {
    const endDate = new Date('02/23/2019').getTime();
    setInterval(() => {
      const now = new Date().getTime();
      let timeRemaining = Math.floor((endDate - now) / 1000);
      if (timeRemaining >= 0) {
      this.days = Math.floor(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);
      this.hours = Math.floor(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);
      this.minutes = Math.floor(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);
      this.seconds = Math.floor(timeRemaining);
      }
    }, 1000);
  }
  ngAfterViewInit() {
        this.wowService.init();
  }
}

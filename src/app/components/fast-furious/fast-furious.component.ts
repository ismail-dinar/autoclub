import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Data } from 'src/app/models/data';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-fast-furious',
  templateUrl: './fast-furious.component.html',
  styleUrls: ['./fast-furious.component.scss']
})
export class FastFuriousComponent implements OnInit {
  public photoFF = [];

  private subscription = new Subscription();
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.subscription.add(this.httpClient.get('/assets/data.json').subscribe( (data: Data) => {
      this.photoFF = data.photoFF;

    } ));
    library.add(faTrophy);
  }

}

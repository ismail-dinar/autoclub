import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkedAlt, faAt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    library.add(faFacebookF, faYoutube, faInstagram, faMapMarkedAlt, faAt);
  }

}

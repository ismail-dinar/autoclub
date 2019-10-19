import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/overlay';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faMapMarker, faAt, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube  } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private readonly SHRINK_TOP_SCROLL_POSITION = 50;
  shrinkToolbar = false;
  isHome = false;
  expanded: boolean;
  private subscription = new Subscription();
  constructor(private scrollDispatcher: ScrollDispatcher,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.subscription.add(this.scrollDispatcher.scrolled()
    .pipe(
      map((event: CdkScrollable) => this.getScrollPosition(event))
    )
    .subscribe(scrollTop => this.ngZone.run(() => this.shrinkToolbar = scrollTop > this.SHRINK_TOP_SCROLL_POSITION ? true : false)));

    library.add(faMapMarker, faMapMarkerAlt, faAt, faPhone, faFacebookF, faInstagram, faYoutube);
  }
  getScrollPosition(event) {
    if (event) {
      return event.getElementRef().nativeElement.scrollTop;
    } else {
      return window.scrollY;
    }
  }
  collapseBar() {
    this.expanded = false;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

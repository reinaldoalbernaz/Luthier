import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { NavbarService } from '../navbar/navbar.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
    mostrar = true;
    subscription = new Subscription();
    constructor(public navbarService: NavbarService) {
        this.subscription.add(
            this.navbarService
                .statusSidebar()
                .subscribe((res) => (this.mostrar = res))
        );
    }

    ngOnInit() {}

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

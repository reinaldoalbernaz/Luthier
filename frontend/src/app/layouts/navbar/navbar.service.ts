import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private subject = new Subject<any>();

  alterar(value: boolean) {
    this.subject.next(value);
  }

  statusSidebar(): Observable<boolean> {
    return this.subject.asObservable();
  }
}

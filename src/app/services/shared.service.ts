import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private message = new BehaviorSubject(null);
  sharedMessage = this.message.asObservable();

  nextMessage(message: number) {
    this.message.next(message);
  }
}

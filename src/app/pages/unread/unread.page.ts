import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-unread',
  templateUrl: './unread.page.html',
  styleUrls: ['./unread.page.scss'],
})
export class UnreadPage implements OnInit {
  @ViewChild('unreadSms', { static: false }) unreadSms: ElementRef;
  message: string;
  messageCount;
  dummyUnread =  [
    {
      "id": 1,
      "body": "Upto 50% cashback for pregnancy tablets"
      },
      {
      "id": 2,
      "body": "Doctors at call, Dial 022-355 for doctor anytime any moment"
      },
      {
      "id": 3,
      "body": "Your appointment is scheduled with Mr Andrew at 12:45 PM on 5th Dec 2020"
      },
      {
      "id": 4,
      "body": "Please fill the feedback form and let us know how you feel about surgepal"
      },
      {
      "id": 5,
      "body": "Are you doing excercise regularly? Read the below link to know more how streching keeps you healthy"
      },
      {
      "id": 6,
      "body": "App Update available. Please click here to update"
      },
  ];
  dismissedId = null;

  constructor(private sharedService: SharedService) {
    this.messageCount = this.dummyUnread.length;
    this.sharedService.nextMessage(this.messageCount);
  }

  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(message => this.message = message);
  }

  dismissMessage(id) {
    // this.dummyUnread.splice(id, 1);
    console.log(id);
  }

}

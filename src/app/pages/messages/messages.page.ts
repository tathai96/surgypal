import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  message: number;
  selectedTabs = 'Unread';

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(message => this.message = message)
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  };

}

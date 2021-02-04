import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {
  dummyRead =  [
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

  constructor() { }

  ngOnInit() {
  }

}

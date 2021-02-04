import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.page.html',
  styleUrls: ['./edu.page.scss'],
})
export class EduPage implements OnInit {
  apiLoaded=false;
  player: YT.Player;
  cancer: string = 'CWvBJZoQF14'
  cancer1: string = 'Q7PdPdi6LrM';
  heart: string = 'Cp59BCMVHHc'
  constructor() { }

  ngOnInit() {
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

}

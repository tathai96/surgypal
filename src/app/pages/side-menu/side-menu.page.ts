import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';
import { faBook, faFootballBall, faHeartbeat, faHome, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit {
  navigate: any;
  faHome = faHome;
  faHeartbeat = faHeartbeat;
  faFootballBall = faFootballBall;
  faBook = faBook;
  faTachometerAlt = faTachometerAlt;

  pages = [
    {
      title: 'Dashboard',
      url: '/side-menu/dashboard',
      icon: 'assets/dashboard.svg'
    },
    {
      title: 'Home',
      url: '/side-menu/home',
      icon: 'assets/home.svg'
    },
    {
      title: 'Messages',
      url: '/side-menu/messages',
      icon: 'assets/message.svg'
    },
    {
      title: 'Performance',
      url: '/side-menu/performance',
      icon: 'assets/speedometer.svg'
    },
    {
      title: 'Education',
      url: '/side-menu/edu',
      icon: 'assets/open-book.svg'
    },
    {
      title: 'My Health',
      url: '/side-menu/myhealth',
      icon: 'assets/healthcare.svg'
    },
    {
      title: 'Care Team',
      url: '/side-menu/care',
      icon: 'assets/call-center.svg'
    },
  ];

  selectedPath = '';

  constructor(public menu: MenuController, public router: Router, public nav: NavController) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    })
  }

  ngOnInit() {
  }

}

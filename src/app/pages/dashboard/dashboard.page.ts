import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, PopoverController, ToastController } from '@ionic/angular';
import { ChartDataSets, ChartOptions, ChartPluginsOptions, ChartType } from 'chart.js';
import ChartDataLabels from "chartjs-plugin-datalabels";
import * as moment from 'moment';
import { SurgeryDetailsService } from 'src/app/services/surgery-details.service';
import { util } from 'src/app/util';
import { postTasks, taskDetails } from 'src/model/taskDetails';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  goals: taskDetails[];
  postTasks: any[];
  disabledTask: boolean = false;
  loaded: boolean = false;
  bubbleChartOptions: ChartOptions = {
    tooltips: {
      enabled: false
    },
    legend: {
      'fullWidth': false,
    },
    onClick: (event, active) => {
      if(active.length !== 0) {
        this.presentAlert();
      }
    },
    responsive: true,
    layout: {
      padding: { right: 10, left: 10 }
    },
    scales: {
      xAxes: [
        {
          display: false,
          gridLines: { color: ['#eee', '#eee', '#eee', 'rgba(230,124,11,1)', '#eee', '#eee', '#eee'], drawTicks: false, drawBorder: false, display: true },
          ticks: { display: false, stepSize: 1, min: 1, max: 7 }
        }
      ],
      yAxes: [
        {
          display: false,
          gridLines: { drawBorder: false, display: false },
          ticks: { display: false, stepSize: 1, min: 0, max: 10 }
        }
      ],
    }
  };
  bubbleChartType: ChartType = 'bubble';
  bubbleChartLegend = false;
  bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 1, y: 5, r: 8, },
        { x: 2, y: 5, r: 8 },
        { x: 3, y: 5, r: 8 },
      ],
      backgroundColor: 'white',
      borderColor: 'green',
      borderWidth: 2,
      hoverBackgroundColor: 'purple',
      hoverBorderColor: 'red',
    },
    {
      data: [
        { x: 4, y: 5, r: 8 },
        { x: 5, y: 5, r: 8 },
      ],
      backgroundColor: 'white',
      borderColor: 'yellow',
      borderWidth: 2,
      hoverBackgroundColor: 'purple',
      hoverBorderColor: 'red',
    },
    {
      data: [
        { x: 6, y: 5, r: 8 },
        { x: 7, y: 5, r: 8 },
      ],
      backgroundColor: 'white',
      borderColor: 'red',
      borderWidth: 2,
      hoverBackgroundColor: 'purple',
      hoverBorderColor: 'red',
    },
  ];

  selectedGoal: taskDetails[] = [];
  daysBeforeSurgery: string;
  daysLeft: any;
  // daysBeforeSurgery = moment().format('MM/DD/YYYY');

  onUncheck(goal) {
    return this.selectedGoal.findIndex(s => {
      return s === goal;
    })
  }

  onCheck(event, goal) {
    if(event.detail.checked) {
      this.selectedGoal.push(goal);
      console.log(this.selectedGoal);
    } else {
      this.selectedGoal.splice(this.onUncheck(goal), 1);
    }
  }

  editGoals(event) {
    // this.selectedGoal.map(s => s.CheckStatus = true);
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Goals for today',
      message: `
      <ul>
        <li>Climb Stairs</li>
        <li>Walk 15 mins</li>
        <li>Run 2 miles</li>
        <li>Be able to bend the knee 25%</li>
        <li>Consume solid foods without issue</li>
      </ul>
      `,
      buttons: [
        {
          text: '3 days before surgery',
          cssClass: 'alert-btn-class',
        }
      ] 
    });

    await alert.present();
  }

  async submitGoals(event) {
    // this.surgeryDetailsService.postPatientTaksGoalsForDay();
    this.postTasks = this.selectedGoal.map(({DtSupplied, CheckStatus, PatTaskWeight, TaskName, TaskId, TodayDate, goalid, ...item}) => item);
    // this.postTasks = this.selectedGoal.map(({CheckStatus, goalid, TaskName, TaskId, ...item}) => item);
    this.postTasks.map(x => {
      x["PatientId"] = 1;
      x["ProgramId"] = 1;
      x["isChecked"] = 0;
    });
    console.log(this.postTasks);
    this.surgeryDetailsService.postPatientTaksGoalsForDay(this.postTasks).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    })
    // // for(var a=0; a<this.postTasks.length; a++) {
    // //   // console.log(this.postTasks[a]);
    // //   this.postTasks[a]["PatientId"]=1;
    // //   this.postTasks[a]["ProgramId"]=1;
    // // }
    // console.log(this.postTasks);
    // this.surgeryDetailsService.postTaskGoalById(this.postTasks).subscribe(res => {
    //   console.log(res);
    // });
    // this.selectedGoal.map(s => s.CheckStatus = true);
    // // this.surgeryDetailsService.postTaskGoalById()
    // const goalsSuccessToast = await this.toastCtrl.create({
    //   message: 'Congrats ' + this.selectedGoal.length + ' goals has been completed',
    //   duration: 2000,
    //   color: 'dark'
    // });
    // goalsSuccessToast.present();
  }

  constructor(private popover: PopoverController,private alertCtrl: AlertController, private util: util, public toastCtrl: ToastController, private surgeryDetailsService: SurgeryDetailsService) { }

  ngOnInit() {
    this.surgeryDetailsService.GetProgramTasksById(1, 1, 1607700077262).subscribe(res => {
      this.loadDate();
      this.goals = this.util.removeDuplicatesFromArray(JSON.parse(res as any)).filter(x => x.CheckStatus == true);
      // this.goals.filter(x => x.CheckStatus === true);
      // this.goals = JSON.parse(res as any);
      console.log(this.goals);
    }, error => {
      console.log(error)
    })
    // this.surgeryDetailsService.GetProgramTasksByProgramId(1).subscribe(res => {
    //   console.log(res);
    //   this.goals = JSON.parse(res as any);
      // this.goals = this.util.removeDuplicatesFromArray(JSON.parse(res as any));
    //   console.log(res);
    //   console.log(this.goals);
    // }, error => {
    //   console.log(error);
    // });
  }

  loadDate() {
    this.surgeryDetailsService.getPatientProgramByPatientId(1).subscribe(res => {
      this.daysBeforeSurgery = moment(JSON.parse(res as any)[0].ProgramDate).format('MMM DD, YYYY');
      this.daysLeft = moment(JSON.parse(res as any)[0].ProgramDate).diff(moment().format(), 'days');
      // let day2 = moment().valueOf();
      // console.log(day1, day2);
      // this.daysLeft = moment(JSON.parse(res as any)[0].ProgramDate).format().diff(moment().format());
      // console.log(moment(JSON.parse(res as any)[0].ProgramDate))
      // console.log(moment().format());

    })
  }

  ionViewWillEnter() {
    this.loaded = true;

  }

}

import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import * as moment from 'moment';
import * as _ from 'underscore'
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { SurgeryDetailsService } from 'src/app/services/surgery-details.service';
import { patientProgram } from 'src/model/patientProgram';
import { util } from 'src/app/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  minDate;
  maxDate;
  disableSubmit: boolean = true;
  today = moment().format('DD-MM-YYYY');
  surgeryType;
  facilityType;
  load: boolean = false;
  selectedSurgeryType = null;
  selectedFacility = null;
  selectedSurgeryDate = null;
  tblDetails: patientProgram[];
  surgeryDetails
  tblSurgeryDate = null;
  tblSurgeryType = null;
  tblFacilityType = null;
  rowCount = 1;


  constructor(private util: util, private toastr: ToastrService, private surgeryDetailsService: SurgeryDetailsService, private loader: LoaderService) {
    this.minDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
    this.maxDate = moment().add(30, 'days').format('YYYY-MM-DD')
  }

  checkDte() {
    console.log(this.selectedSurgeryDate);
  }


  ngOnInit() {
    this.surgeryDetailsService.getAllProgramDetails().subscribe(res => {
      this.loadPatientTable();
      this.surgeryType = JSON.parse(res as any);
      console.log('surgery type - ', this.surgeryType)
    }, error => {
      console.log(error);
    });
  }

  loadPatientTable() {
    this.surgeryDetailsService.getPatientProgramByPatientId(1).subscribe(res => {
      this.tblDetails = this.util.removeDuplicatesFromArray(JSON.parse(res as any));
      this.tblDetails.map(x => x.ProgramDate = moment(x.ProgramDate).format('MMM DD, YYYY HH:mm'));
    }, error => {
      console.log(error);
    });
  }

  surgeryTypeOnChange(event) {
    if(this.selectedFacility !== null || undefined) {
      this.selectedFacility = null;
    }
    this.surgeryDetailsService.getAlFacilityDetailsByProgramId(event.value.ProgramId).subscribe(res => {
      this.facilityType = JSON.parse(res as any);
    });
  }

  submitSurgeryDetails() {
    this.surgeryDetailsService.postSurgeryDetails(1, this.selectedSurgeryType.ProgramId, moment(this.selectedSurgeryDate).valueOf()).subscribe(res => {
      this.pushToTable();
      this.toastr.success('Added record successfully');
      this.selectedSurgeryType = null;
      this.selectedFacility = null;
      this.selectedSurgeryDate = null; 
    }, err => {
      console.log(err)
    })
  }

  pushToTable() {
    this.tblDetails.push({
      'PatientId': 1,
      'ProgramDate': moment(this.selectedSurgeryDate).format('MMM dd, YYYY HH:mm'),
      'ProgramId': 1,
      'ProgramName': this.selectedSurgeryType.ProgramName
    });
    // this.surgeryDetailsService.getPatientProgramByPatientId(1).subscribe(res => {
    //   this.tblDetails = this.util.removeDuplicatesFromArray(JSON.parse(res as any));
    //   this.tblDetails.map(x => x.ProgramDate = moment(x.ProgramDate).format('DD-MM-YYYY HH:mm'));
    //   console.log(this.tblDetails)
    // }, error => {
    //   console.log(error);
    // })
  };

}

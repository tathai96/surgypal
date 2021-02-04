import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { postTasks } from 'src/model/taskDetails';

@Injectable({
  providedIn: 'root'
})
export class SurgeryDetailsService {

  constructor(private httpClient: HttpClient) {
    // if(this.credential) {
    //   this.credential.augmentXhrBuild((xhr: any) => {
    //     xhr.withCredentials = true;
    //   })
    // }
  }

  getAllProgramDetails() {
    return this.httpClient.get('https://admin.surgypal.com/api/Program/GetAllProgram');
  }

  getAlFacilityDetails() {
    return this.httpClient.get('https://admin.surgypal.com/api/facility/GetAllFacility');
  }

  getAlFacilityDetailsByProgramId(id) {
    return this.httpClient.get('https://admin.surgypal.com/api/facility/GetAllFacilityByProgramId?ProgramId='+id);
  }

  getPatientProgramByPatientId(id) {
    return this.httpClient.get('http://admin.surgypal.com/api/patient/GetPatientProgram?patientid='+id)
  }

  GetProgramTasksByProgramId(id) {
    return this.httpClient.get('http://admin.surgypal.com/api/ProgramTasks/GetProgramTasksByProgram?ProgramId='+id)
  }

  GetProgramTasksById(programId, patientId, date) {
    return this.httpClient.get('http://admin.surgypal.com/api/ProgramTasks/GetPatientProgramTasksByDate', {
      params: {
        'ProgramId': programId,
        'PatientId': patientId,
        'InpDate': date,
      }
    })
  }

  postSurgeryDetails(id, surgeryType, date) {
    let postBody = {
      "PatientId": id,
      "ProgramId": surgeryType,
      "ProgramDate": date
    }
    return this.httpClient.post('http://admin.surgypal.com/api/Patient/AddPatientProgram', postBody);
  }

  // postPatientTaksGoalsForDay(PatientId, ProgramId, TaskGoalId, isChecked, TaskWeight) {
  //   let postBody = [{
  //     "PatientId": PatientId,
  //     "ProgramId": ProgramId,
  //     "TaskGoalId": TaskGoalId,
  //     "isChecked": isChecked,
  //     "TaskWeight": TaskWeight
  //   }]
  //   return this.httpClient.post('http://admin.surgypal.com/api/PatientTask/SetPatientTaskGoalsForday', postBody);
  // }

  postPatientTaksGoalsForDay(postTasks) {
    return this.httpClient.post('http://admin.surgypal.com/api/PatientTask/SetPatientTaskGoalsForday', postTasks);
  }

  postTaskGoalById(postTasks) {
    return this.httpClient.post('http://admin.surgypal.com/api/ProgramTasks/AddPatientTaskGoal', postTasks);
  }



  getSurgeryTypeDetails() {
    return this.httpClient.get('http://localhost:3000/surgeryType');
  }

  getFacilityTypeDetails() {
    return this.httpClient.get('http://localhost:3000/facilityType');
  }

  getSurgeryTypeById(id) {
    return this.httpClient.get('http://localhost:3000/surgeryType/' + id);
  }

  getFacilityTypeById(id) {
    return this.httpClient.get('http://localhost:3000/facilityType' + id);
  }
}

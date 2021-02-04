import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-myhealth',
  templateUrl: './myhealth.page.html',
  styleUrls: ['./myhealth.page.scss'],
})
export class MyhealthPage implements OnInit {

  //toggle - 1
  //input - 2
  //radio - 3

  quiz = [
    {
      "questionNumber": 1,
      "questionName": "Currently Smoking?",
      "controlType": 'toggle',
      "options": ['yes', 'no'],
      "value": "",
    },
    {
      "questionNumber": 2,
      "questionName": "Postoperative nausea and vomiting",
      "controlType": 'toggle',
      "options": ['yes', 'no'],
      "value": "",
    },
    {
      "questionNumber": 3,
      "questionName": "Height/Weight with BMI Calculator?",
      "controlType": 'toggle',
      "options": ['-50', '60-70', '70-80']
    },
    {
      "questionNumber": 4,
      "questionName": "Input your age in years?",
      "controlType": 'input',
      "options": ['Enter age']
    },
    {
      "questionNumber": 5,
      "questionName": "Input your height in cms",
      "controlType": 'input',
      "options": ['Enter height']
    },
    {
      "questionNumber": 6,
      "questionName": "History of a heart attack or chest pain with exertion",
      "controlType": 'cal',
      "options": ['Select Date']
    },
    {
      "questionNumber": 7,
      "questionName": "How many approx glasses of water intake per day",
      "controlType": 'dropdown',
      "options": [
        {
          "lists": ["5", "6"]
        }
      ]
    },
  ]

  defaultYesColor: string = 'light'
  defaultNoColor: string = 'light';
  cardIndex: number = null;
  questionIndex: number = null;
  selectedValue: string;
  minDate;
  maxDate;
  constructor() { 
    this.minDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
    this.maxDate = moment().add(30, 'days').format('YYYY-MM-DD')
  }

  chosenOption(indexmain, indexchild, value) {
    this.cardIndex = indexmain;
    this.questionIndex = indexchild;
    this.selectedValue = value;

    var data = this.quiz.find(x=>x.questionNumber == this.cardIndex);
    if(data)
    {
      data.value= value;
    }
  }

  setBackGround(card, value) {
    if(card)
    {
      if(card.controlType == 'toggle')
      {
        if(card.value == value)
        {
          return "SelectedColor";
        }
        return "DefaultColor";
      }
    }
  }

  ngOnInit() {
  }

}

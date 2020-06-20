import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostService } from '../post-service';

@Component({
  selector: 'app-cunexus',
  templateUrl: './cunexus.component.html',
  styleUrls: ['./cunexus.component.css']
})
export class CunexusComponent implements OnInit {

  //tdtbody = '{"translatorCode":"json","partnerData":"data","mappingData":{"location":"1","data":"generic_json.json"}}';

  tdtbody = '{ "Campaign": { "Name": "testing new experian file format", "Start": "2017-12-01T00:00:00", "End": "2018-03-01T00:00:00" }, "Customer": { "SSN": "526410667", "UniqueIdentifier": "100273", "FirstName": "Lance", "MiddleName": "U", "LastName": "Cooley", "Phone": "333-333-3333", "Email": "", "CreditScore": 604, "CreditBureau": "Experian", "CreditScoreDate": "2018-01-22T12:33:53.81", "CampaignCode": "ILJDYIJADP", "MLA": false, "MLAVerifyDate": "2018-01-22T12:33:53.81", "EnteredName": "Lance Cooley" }, "Offer": { "Group": "Used Auto", "Product": "used autos", "Category": "Used Auto", "Tier": "Tier 2", "DateCreated": "2018-01-22T12:33:53.81", "DateAccepted": "2018-01-24T14:43:05.12", "Channel": "Responsive Widget" }, "Terms": { "Type": "PreApproved", "FundsRequested": 25000, "APR": 4.25, "Limit": 25000, "Term": 60, "MonthlyPer1K": 18.53 }, "Meta": { "CampaignId": "50", "Gap.Accepted": "True", "Gap.Value": "500.00", "Meridian.AnnualIncome": "$1", "Meridian.DateOfBirth": "02/14/1930", "Meridian.Employer": "a", "Meridian.EmploymentStartDate": "01/17/1935", "Meridian.EmploymentStatus": "EM", "Meridian.HousingPayment": "$1", "Meridian.Occupation": "a", "Meridian.PurposeType": "Vehicle" } }';

  res = '';

  constructor(private postService: PostService) { }

  ngOnInit() {

  }

  postit() {  
    //the service returns a promise
    this.postService.postTDT(this.tdtbody).then(
      (res) => { console.log("Task Complete!"); this.res=res; },
      () => console.log("Task Errored!"),
    );
  }

}
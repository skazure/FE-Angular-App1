import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FEAngularApp1';
  response = "Oops!!! Looks like Backend API is down. Please ensure BE API1 is running !!!";
  beApp1response = "Oops!!! Looks like Backend API is down. Please ensure BE API2 is running !!!";

  constructor(private http: HttpClient) 
  { 
    this.title = 'FEAngularApp1';
    this.http.get(environment.bemsurl1, {responseType: 'text'}).subscribe((response: any) => {
      console.log(response);      
	  this.response = response;   
	});

  this.http.get(environment.bemsurl2, {responseType: 'text'}).subscribe((beApp1response: any) => {
      console.log(beApp1response);      
	  this.beApp1response = beApp1response;
	});

  }
}

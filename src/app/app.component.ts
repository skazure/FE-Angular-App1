import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FE-Angular-App1';
  
  response = "Oops!!! Looks like Backend API is down. Please ensure BE API1 is running !!!";
  beApp1response = "Oops!!! Looks like Backend API is down. Please ensure BE API2 is running !!!";

  constructor(private http: HttpClient) 
  { 
    this.http.get('http://localhost:5001/demo', {responseType: 'text'}).subscribe((response: any) => {
      console.log(response);      
	  this.response = response;   
	});

  this.http.get('http://localhost:5002/demo', {responseType: 'text'}).subscribe((beApp1response: any) => {
      console.log(beApp1response);      
	  this.beApp1response = beApp1response;   
	});

  }
  
}

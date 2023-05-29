import { Component, OnInit, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  clusterInfo:any;
  isLoading: Boolean =false;

  constructor(private elementRef: ElementRef,private apiService:ApiService) { }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);


    this.isLoading =true;
    this.apiService.getAllCluster().subscribe(res => {
      this.clusterInfo = res;
      this.isLoading =false;
      console.log('data response', this.clusterInfo);
    });
  }

}

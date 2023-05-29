import { Component ,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './service/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kafka Admin';
  constructor(private elementRef: ElementRef,  public  _router: Router,private apiService:ApiService) { }

  ngOnInit() {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);

    this.apiService.connect().subscribe(res => {
      console.log('data response', res);
    });

  }
}

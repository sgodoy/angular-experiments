import { Component, Injector, OnInit } from '@angular/core';
import { IsbnApiService } from './services/isbn-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-experiments';

  constructor(private injector: Injector){

  }
  ngOnInit(): void {
    this.injector.get(IsbnApiService).getBook('9781934759486').subscribe(response => {
      console.log(response);
    });
  }


  
}

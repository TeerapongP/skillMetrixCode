import { Component, OnInit } from '@angular/core';
import { HarryPotterApiService } from '../harry-potter-api.service';
import { Observable, catchError, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-harry-potter-characters',
  templateUrl: './harry-potter-characters.component.html',
  styleUrls: ['./harry-potter-characters.component.css']
})
export class HarryPotterCharactersComponent implements OnInit {

  constructor(
    private harryPotterApiService: HarryPotterApiService
  ) {
  }
  dataJson: any[] = [];
  ngOnInit() {
    this.harryPotterApiService.getAllData().subscribe((res) => {
      this.dataJson = res;
      console.log("RES : ", this.dataJson);
    })
  }
}

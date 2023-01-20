import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
//import {DayPage} from '../app/pages/day/day.page';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {
  savedDates = [];
  constructor(private router:Router,private dataService: DataService) {}
 
  ngOnInit() {
    this.loadData();
  }
  async loadData() {
    this.savedDates =  await this.dataService.getData();
  }
  async removeDay(index: number) {
    this.dataService.removeData(index);
    this.savedDates.splice(index,1);
  }
  goToPageHome() {
    this.router.navigate(['/home']);
  }
}

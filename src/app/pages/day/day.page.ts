import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { DayService } from 'src/app/services/day.service';
import {format, parseISO} from 'date-fns';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})


export class DayPage implements OnInit{
  data: any;  

  nodes = ['date','month','month-year','year'];
  selectedMode = 'date';
  showpicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd');
  formattedString = '';
  savedDays=[];
  //selectedDate: string | undefined;
  
  showCardContent = false;
 
  
  
  constructor(private dayService: DayService, private loadingCtrl: LoadingController,private router:Router, private dataService: DataService) { 
    
  }

  ngOnInit() {
    this.dateChanged(this.dateValue);
    
  }

  async loadData() {
    this.savedDays = await this.dataService.getData();
  }
  async addData() {
    await this.dataService.addData(this.formattedString);
    this.loadData();
  }
  clickAdd() {
    this.addData();
  }
  goToPageHome() {
    this.router.navigate(['/home']);
  }
  clickSave() {
    this.loadNasa();
    this.showCardContent = !this.showCardContent;
  }
  
  
  async loadNasa() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles'
    });
    await loading.present();
    
    this.dayService.generatePhotoNew(this.formattedString).subscribe(res=>{
      loading.dismiss();
      this.data=res;
      console.log(res);
    
    } )
  

  }
  dateChanged(value: any) {
    this.dateValue = value;
    this.formattedString=format(parseISO(value), 'yyyy-MM-dd');
    console.log(this.formattedString);
    //this.selectedDate = event?.target.value;
    this.showpicker=false;
  }

  

}


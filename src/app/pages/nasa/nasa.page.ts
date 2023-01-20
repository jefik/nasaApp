import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NasaService } from 'src/app/services/nasa.service';


@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.page.html',
  styleUrls: ['./nasa.page.scss'],
})
export class NasaPage implements OnInit {
  data: any;  
  
  showCardContent = false;
  constructor(private nasaService: NasaService, private loadingCtrl: LoadingController,private router:Router ) { }
  
  ngOnInit() {
    this.loadNasa();
    
  }
  
  goToPageHome2() {
    this.router.navigate(['/home']);
  }

  async loadNasa() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles'
    });
    await loading.present();
    this.router.navigate(['/nasa']);
    this.nasaService.generatePhotoNew().subscribe(res=>{
      loading.dismiss();
      this.data=res;
      console.log(res);
      this.showCardContent = !this.showCardContent;
    } )
  }

}

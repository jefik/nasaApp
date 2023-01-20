import { getLocaleDateFormat } from '@angular/common';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

const STORAGE_KEY = "myList";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage:Storage) { 
    
    this.init();
  }

  async init() {
    await this.storage.defineDriver(CordovaSQLiteDriver);
    await this.storage.create();
  }
  getData() {
    return this.storage.get(STORAGE_KEY) || [];
  }

  async addData(item: any) {
    const storedData = await this.storage.get(STORAGE_KEY) || [];
    storedData.push(item);
    return this.storage.set(STORAGE_KEY, storedData);
  }

  async removeData(index: any) {
    const storedData = await this.storage.get(STORAGE_KEY) || [];
    storedData.splice(index,1);
    return this.storage.set(STORAGE_KEY, storedData);
  }

}

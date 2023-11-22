import { Component, OnInit } from '@angular/core';

import { InfiniteScrollCustomEvent, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  data: any[] = []
  num1: number = 0;
  constructor() {}

  ngOnInit() {
    
  }

  /*loadData(event:any){
    setTimeout(()=>{
      for(var i = 0;i<10;i++ ){
        this.data.push(Date.now().toString());
      }
      event.target.complete();
      if(this.data.length == 1000){
        event.target.disabled = true;
      }
    },2000)

  }
*/
  teste(){
      this.num1 +=1
      this.data.push(this.num1)
    }
  }




import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
 

  ngOnInit() {
     
   }

   

  listenHamburgerEvent(event) {
    if ((document.getElementById('sidebar') as HTMLElement).classList.contains('hidden-sidebar')) {
      (document.getElementById('sidebar') as HTMLElement).style.transform = 'translateX(0px)';
      (document.getElementById('sidebar') as HTMLElement).style.transition = '0.3s';
      (document.getElementById('sidebar') as HTMLElement).classList.remove('hidden-sidebar');
    } else {
      (document.getElementById('sidebar') as HTMLElement).style.transform = 'translateX(-200px)';
      (document.getElementById('sidebar') as HTMLElement).style.transition = '0.3s';
      (document.getElementById('sidebar') as HTMLElement).classList.add('hidden-sidebar');
    }
  }

}

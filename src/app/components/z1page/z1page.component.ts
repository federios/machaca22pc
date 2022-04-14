import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-z1page',
  templateUrl: './z1page.component.html',
  styleUrls: ['./z1page.component.scss']
})
export class Z1pageComponent implements OnInit {
  menuClick = 0;

  constructor() {
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

    const d = new Date();
    let years = Math.round(d.getTime() / year);

    const cth = new Date();
    let cthours = (Math.round(cth.getTime() / hour)) - 6;

    interval(1000).subscribe(x => {
      const ctm = new Date();
      let ctminutes = (Math.round(ctm.getTime() / minute)) - 360 ;
      
      console.log("Minutos desde 1970: " + ctminutes)

      if (ctminutes > 27445914) {
        document.getElementById("hora1")!.style.display = "none";
      }

    });

  }

  ngOnInit(): void {
  }

  openNav() {
    this.menuClick++;

    if (this.menuClick%2==0) {
      document.getElementById("myNav")!.style.height = "0%";
      document.getElementById("contentId")!.style.overflow = "inherit";
      document.getElementById("footerId")!.style.overflow = "inherit";
      document.getElementById("contentId")!.style.height = "auto";
    } else {
      document.getElementById("myNav")!.style.height = "100%";
      document.getElementById("contentId")!.style.overflow = "hidden";
      document.getElementById("footerId")!.style.overflow = "hidden";
      document.getElementById("contentId")!.style.height = "0vh";
    }
  }

}

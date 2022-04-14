import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit {
  menuClick = 0;

  constructor( private meta: Meta, private title: Title) { 

    this.title.setTitle('Lineup | Machaca');

    this.meta.updateTag({ property: 'og:title', content: 'LINEUP | MACHACA' });
    this.meta.updateTag({ property: 'og:image', content: '/assets/images/logo.webp' }); 
    this.meta.updateTag({ property: 'og:description', content: 'Machaca Festival 2022' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.machaca.mx/' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'description', content: 'Machaca Festival 2022' }); 
    this.meta.updateTag({ name: 'robots', content: 'index, follow' }); 
  }

  ngOnInit(): void {
    window.scroll(0, 0)
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
